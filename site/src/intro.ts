// L'ouverture animée ne se joue qu'une fois par visite : les animations du hero
// attendent qu'elle soit terminée.
export const INTRO_KEY = 'neb-intro'

function introPending() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return !sessionStorage.getItem(INTRO_KEY)
  } catch {
    return true
  }
}

export const INTRO_PENDING = introPending()
export const INTRO_DELAY = INTRO_PENDING ? 2.7 : 0.3
