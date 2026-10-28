import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { alphabet } from '../content'
import SectionHeading from './SectionHeading'
import Pattern from './Pattern'

const ZWJ = '‍'

// Formes d'une lettre selon sa place dans le mot. Les lettres qui ne s'attachent pas
// à la suivante n'ont que deux formes : isolée et finale.
function forms(l: string, joins: boolean) {
  return [
    { label: 'Isolée', glyph: l },
    { label: 'Début', glyph: joins ? l + ZWJ : l },
    { label: 'Milieu', glyph: joins ? ZWJ + l + ZWJ : ZWJ + l },
    { label: 'Fin', glyph: ZWJ + l },
  ]
}

export default function Alphabet() {
  const [index, setIndex] = useState(0)
  const letter = alphabet.letters[index]

  return (
    <section id="alphabet" className="relative isolate overflow-hidden bg-night py-24 text-ivory sm:py-32">
      <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.04]" size={90} />
      <div className="absolute top-1/3 left-1/4 -z-10 size-[34rem] rounded-full bg-emerald/30 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker={alphabet.kicker} title={alphabet.title} intro={alphabet.intro} dark />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14">
          {/* Fiche de la lettre choisie */}
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-forest/70 p-6 backdrop-blur-sm sm:p-8 lg:sticky lg:top-28">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                      Lettre {index + 1} sur {alphabet.letters.length}
                    </p>
                    <h3 className="mt-3 font-display text-5xl font-semibold">{letter.name}</h3>
                    <p className="mt-3 max-w-xs leading-relaxed text-ivory/70">{letter.sound}</p>
                  </div>
                  <div className="relative grid size-28 shrink-0 place-items-center sm:size-36">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gold/25 blur-2xl"
                      initial={{ scale: 0.3, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.span
                      className="relative font-arabic text-7xl leading-none text-gold-gradient sm:text-8xl"
                      lang="ar"
                      initial={{ scale: 0.4, rotate: -12, filter: 'blur(10px)' }}
                      animate={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
                      transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                    >
                      {letter.l}
                    </motion.span>
                  </div>
                </div>

                <p className="mt-8 text-xs font-semibold tracking-[0.25em] text-ivory/50 uppercase">Ses formes dans le mot</p>
                <ul className="mt-4 grid grid-cols-4 gap-2" dir="rtl">
                  {forms(letter.l, letter.joins).map((f, i) => (
                    <motion.li
                      key={f.label}
                      className="flex flex-col items-center rounded-2xl border border-ivory/10 bg-night/50 py-4"
                      initial={{ opacity: 0, rotateY: 90, transformPerspective: 600 }}
                      animate={{ opacity: 1, rotateY: 0, transformPerspective: 600 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                    >
                      <span className="font-arabic text-4xl leading-[1.6] text-ivory" lang="ar">
                        {f.glyph}
                      </span>
                      <span className="mt-1 text-[11px] text-ivory/55" dir="ltr">
                        {f.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                {!letter.joins && (
                  <p className="mt-4 text-sm text-gold-soft/80">
                    Cette lettre ne s’attache jamais à la lettre qui la suit.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Grille des 28 lettres, dans l'ordre arabe : de droite à gauche */}
          <ul className="order-first grid grid-cols-7 gap-1.5 sm:gap-2.5 lg:order-none" dir="rtl" aria-label="Les 28 lettres">
            {alphabet.letters.map((a, i) => {
              const active = i === index
              return (
                <motion.li
                  key={a.name + i}
                  initial={{ opacity: 0, scale: 0.6, rotateX: 60 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: (i % 7) * 0.05 + Math.floor(i / 7) * 0.08, type: 'spring', stiffness: 200, damping: 18 }}
                  style={{ transformPerspective: 600 }}
                >
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-pressed={active}
                    aria-label={`${a.name} (${a.l})`}
                    className="group relative block aspect-square w-full cursor-pointer [perspective:600px]"
                  >
                    {active && (
                      <motion.span
                        layoutId="letter-ring"
                        className="absolute -inset-1 rounded-2xl border-2 border-gold shadow-[0_0_30px_-4px] shadow-gold/70"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Recto : la lettre. Verso (au survol) : son nom. */}
                    <span className="relative block size-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <span
                        className={`absolute inset-0 grid place-items-center rounded-xl border [backface-visibility:hidden] ${
                          active ? 'border-gold/60 bg-gold/15' : 'border-ivory/10 bg-forest/60'
                        }`}
                      >
                        <span className="font-arabic text-2xl text-ivory sm:text-4xl" lang="ar">
                          {a.l}
                        </span>
                      </span>
                      <span className="absolute inset-0 grid place-items-center rounded-xl bg-gold text-night [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <span className="font-display text-xs font-semibold sm:text-lg" dir="ltr">
                          {a.name}
                        </span>
                      </span>
                    </span>
                  </button>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
