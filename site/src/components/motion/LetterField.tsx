import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

// Constellation des 28 lettres de l'alphabet arabe, dorées, suspendues dans la profondeur.
// La souris déplace le point de vue ; au défilement, la caméra avance à travers les lettres.

const LETTERS = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي".split("");

const COUNT = 64;
const DEPTH = 34;

function letterTexture(letter: string) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createLinearGradient(0, 40, 0, 220);
  grad.addColorStop(0, "#f1e3bd");
  grad.addColorStop(0.5, "#d2ae62");
  grad.addColorStop(1, "#a5803a");
  ctx.font = "700 150px Amiri, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(214, 190, 138, 0.9)";
  ctx.shadowBlur = 24;
  ctx.fillStyle = grad;
  ctx.fillText(letter, size / 2, size / 2 + 10);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

// Générateur pseudo-aléatoire stable : la constellation est la même à chaque visite.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function Field({ still }: { still: boolean }) {
  const group = useRef<THREE.Group>(null);
  const sprites = useRef<THREE.Sprite[]>([]);

  const { items, textures, lines } = useMemo(() => {
    const rand = rng(7);
    const textures = LETTERS.map((l) => letterTexture(l));
    const items = Array.from({ length: COUNT }, (_, i) => {
      const z = -rand() * DEPTH + 4;
      const spread = 3.2 + (4 - z) * 0.32;
      const x = (rand() * 2 - 1) * spread;
      const y = (rand() * 2 - 1) * spread * 0.62;
      return {
        pos: new THREE.Vector3(x, y, z),
        tex: i % textures.length,
        scale: 0.55 + rand() * 0.75,
        phase: rand() * Math.PI * 2,
        speed: 0.3 + rand() * 0.5,
      };
    });
    // Lignes de constellation : chaque lettre est reliée à sa plus proche voisine.
    const pts: number[] = [];
    items.forEach((a, i) => {
      let best = -1;
      let bestD = Infinity;
      items.forEach((b, j) => {
        if (i === j) return;
        const d = a.pos.distanceTo(b.pos);
        if (d < bestD) {
          bestD = d;
          best = j;
        }
      });
      const nearest = items[best];
      if (nearest && best > i && bestD < 5.5)
        pts.push(...a.pos.toArray(), ...nearest.pos.toArray());
    });
    const lines = new THREE.BufferGeometry();
    lines.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return { items, textures, lines };
  }, []);

  const dust = useMemo(() => {
    const rand = rng(42);
    const arr = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      arr[i * 3] = (rand() * 2 - 1) * 14;
      arr[i * 3 + 1] = (rand() * 2 - 1) * 9;
      arr[i * 3 + 2] = -rand() * DEPTH + 6;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const progress = Math.min(window.scrollY / window.innerHeight, 1.2);
    const cam = state.camera;
    const targetZ = 8 - progress * 16;
    const px = still ? 0 : state.pointer.x;
    const py = still ? 0 : state.pointer.y;
    cam.position.z = THREE.MathUtils.damp(cam.position.z, targetZ, 3, delta);
    cam.position.x = THREE.MathUtils.damp(cam.position.x, px * 1.1, 2.5, delta);
    cam.position.y = THREE.MathUtils.damp(cam.position.y, py * 0.7, 2.5, delta);
    cam.lookAt(0, 0, cam.position.z - 10);
    if (group.current && !still) group.current.rotation.z = Math.sin(t * 0.05) * 0.06;
    sprites.current.forEach((s, i) => {
      if (!s) return;
      const it = items[i];
      if (!it) return;
      const mat = s.material as THREE.SpriteMaterial;
      // Les lettres scintillent doucement et s'estompent quand la caméra les dépasse.
      const dz = cam.position.z - it.pos.z;
      const near = THREE.MathUtils.smoothstep(dz, 0.5, 3);
      const far = 1 - THREE.MathUtils.smoothstep(dz, 18, 32);
      const twinkle = still ? 1 : 0.7 + 0.3 * Math.sin(t * it.speed * 2 + it.phase);
      mat.opacity = near * far * twinkle;
      if (!still) s.position.y = it.pos.y + Math.sin(t * it.speed + it.phase) * 0.12;
    });
  });

  return (
    <group ref={group}>
      {items.map((it, i) => (
        <sprite
          key={i}
          ref={(el) => {
            if (el) sprites.current[i] = el;
          }}
          position={it.pos}
          scale={[it.scale, it.scale, 1]}
        >
          <spriteMaterial
            map={textures[it.tex] ?? null}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      ))}
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#c9a35a" transparent opacity={0.16} depthWrite={false} />
      </lineSegments>
      <points geometry={dust}>
        <pointsMaterial
          color="#e2cf9f"
          size={0.035}
          transparent
          opacity={0.55}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function LetterField() {
  const still = useReducedMotion() ?? false;
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    let alive = true;
    // La police Amiri doit être chargée avant de dessiner les lettres.
    document.fonts
      .load("700 150px Amiri")
      .catch(() => undefined)
      .then(() => alive && setFontReady(true));
    return () => {
      alive = false;
    };
  }, []);

  if (!fontReady) return null;
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 8], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <fog attach="fog" args={["#12151c", 10, 34]} />
      <Field still={still} />
    </Canvas>
  );
}
