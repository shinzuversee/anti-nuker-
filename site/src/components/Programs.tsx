import { motion } from 'framer-motion'
import { AudioLines, BookOpen, Check, Heart, Languages, ScrollText, type LucideIcon } from 'lucide-react'
import { programs, type ProgramIcon } from '../content'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger } from './Reveal'

const icons: Record<ProgramIcon, LucideIcon> = {
  alphabet: BookOpen,
  tajwid: AudioLines,
  arabic: Languages,
  tafsir: ScrollText,
  heart: Heart,
}

export default function Programs() {
  return (
    <section id="parcours" className="bg-sand/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker={programs.kicker} title={programs.title} intro={programs.intro} />

        <motion.ul
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger(0.08)}
        >
          {programs.items.map((p, i) => {
            const Icon = icons[p.icon]
            const featured = i === 0
            return (
              <motion.li
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 ${
                  featured
                    ? 'bg-night text-ivory shadow-[0_30px_80px_-40px_rgba(11,29,23,0.8)] lg:row-span-2'
                    : 'border border-ink/8 bg-ivory text-ink hover:border-gold/40 hover:shadow-[0_24px_60px_-34px_rgba(11,29,23,0.4)]'
                } transition-[border-color,box-shadow] duration-500`}
              >
                {featured && (
                  <div className="absolute -top-20 -right-20 size-64 rounded-full bg-emerald/50 blur-3xl" aria-hidden="true" />
                )}
                <div className="relative flex items-start justify-between">
                  <span
                    className={`grid size-14 place-items-center rounded-2xl ${
                      featured ? 'bg-gold/15 text-gold' : 'bg-emerald/8 text-emerald'
                    } transition-transform duration-500 group-hover:rotate-6`}
                  >
                    <Icon className="size-6" strokeWidth={1.6} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      featured ? 'bg-ivory/10 text-gold-soft' : 'bg-emerald/8 text-emerald'
                    }`}
                  >
                    {p.level}
                  </span>
                </div>
                <h3 className={`relative mt-8 font-display font-semibold ${featured ? 'text-4xl' : 'text-3xl'}`}>{p.title}</h3>
                <p className={`relative mt-3 leading-relaxed ${featured ? 'text-ivory/70' : 'text-muted'}`}>{p.text}</p>
                <ul className="relative mt-6 space-y-2.5 pt-6 text-sm">
                  <span className={`absolute top-0 left-0 h-px w-full ${featured ? 'bg-ivory/10' : 'bg-ink/8'}`} />
                  {p.points.map((pt) => (
                    <li key={pt} className={`flex items-center gap-3 ${featured ? 'text-ivory/85' : 'text-ink/80'}`}>
                      <Check className="size-4 shrink-0 text-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {featured && (
                  <p className="relative mt-auto pt-10 font-arabic text-3xl text-gold/80" lang="ar" dir="rtl">
                    {programs.featuredVerse}
                  </p>
                )}
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
