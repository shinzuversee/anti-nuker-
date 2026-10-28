import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Fait défiler un chiffre de 0 jusqu'à sa valeur quand il apparaît.
// Accepte les formats du site : « 120+ », « 1,2 M », « 900+ ».
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^([\d\s]+(?:,\d+)?)(.*)$/);
    if (!el || !inView || reduced || !match) return;
    const [, num = "", suffix = ""] = match;
    const target = parseFloat(num.replace(/\s/g, "").replace(",", "."));
    const decimals = num.split(",")[1]?.length ?? 0;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent =
          v.toLocaleString("fr-FR", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
