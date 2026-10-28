import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faq } from '../content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-sand/60 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading kicker={faq.kicker} title={faq.title} />
        <Reveal className="mt-14">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-xl font-semibold text-ink sm:text-2xl">{item.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`grid size-9 shrink-0 place-items-center rounded-full border transition-colors ${
                          isOpen ? 'border-gold bg-gold text-night' : 'border-ink/15 text-ink'
                        }`}
                      >
                        <Plus className="size-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
