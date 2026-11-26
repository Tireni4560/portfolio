'use client'

import { useEffect } from 'react'

export default function MotionController() {
  useEffect(() => {
    let media
    let cancelled = false

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapModule, scrollTriggerModule]) => {
      if (cancelled) return
      const gsap = gsapModule.gsap || gsapModule.default?.gsap
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default
      if (!gsap || !ScrollTrigger) throw new Error('Unable to initialize GSAP ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      media = gsap.matchMedia()

      // Desktop: (min-width: 1024px) and (prefers-reduced-motion: no-preference)
      media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        // Word reveal (data-split)
        document.querySelectorAll('[data-split]').forEach((container) => {
          const words = container.querySelectorAll('.headline-word')
          if (words.length === 0) return
          gsap.timeline({
            scrollTrigger: { trigger: container, start: 'top 85%', end: 'bottom 85%', scrub: false, toggleActions: 'restart reverse restart reverse' }
          }).fromTo(words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.05 })
        })

        // Reveal up
        document.querySelectorAll('[data-reveal="up"]').forEach((container) => {
          const elements = container.children
          if (!elements.length) return
          gsap.fromTo(elements, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1 })
        })

        // Reveal fade
        document.querySelectorAll('[data-reveal="fade"]').forEach((container) => {
          const elements = container.children
          if (!elements.length) return
          gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1 })
        })

        // Reveal line
        document.querySelectorAll('[data-reveal="line"]').forEach((container) => {
          const inner = container.querySelector('.headline-word span')
          if (!inner) return
          gsap.fromTo(inner, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 1.1, ease: 'power3.inOut' })
        })

        // Reveal clip
        document.querySelectorAll('[data-reveal="clip"]').forEach((container) => {
          const media = container.querySelector('img, video, .work-image')
          if (!media) return
          gsap.fromTo(media, { clipPath: 'inset(12% 12% 12% 12% round 10px)', scale: 1.12 }, { clipPath: 'inset(0% 0% 0% 0% round 10px)', scale: 1, duration: 1.2, ease: 'power3.out' })
        })

        // Parallax
        document.querySelectorAll('[data-parallax]').forEach((trigger) => {
          const amp = parseFloat(trigger.dataset.parallax) || 0
          const isMobile = window.innerWidth <= 1023
          gsap.fromTo(trigger, { yPercent: isMobile ? -amp / 2 : -amp }, { yPercent: isMobile ? amp / 2 : amp, ease: 'none', scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: 0.6 } })
        })

        // Count-up
        document.querySelectorAll('[data-count]').forEach((trigger) => {
          const count = parseInt(trigger.dataset.count, 10) || 0
          const suffix = trigger.dataset.suffix || ''
          const updateCount = (current) => { const rounded = Math.round(current); trigger.innerText = rounded.toLocaleString() + (suffix ? ' ' + suffix : '') }
          updateCount(0)
          gsap.fromTo(trigger, { innerText: '0' }, {
            innerText: function () { return updateCount(this.targets ? this.targets[0] : trigger.innerText) },
            duration: 1.4, ease: 'power2.out', scrollTrigger: { trigger, start: 'top 85%', end: 'bottom 85%', scrub: false, onUpdate: (self) => { const current = Math.min(self.progress * count, count); updateCount(current) } }
          })
        })

        // Scroll progress line: animate scaleX from 0 to 1 over whole page scroll
        // Hidden while mobile menu overlay is open
        const progressLine = document.querySelector('.scroll-progress')
        if (progressLine) {
          const isOverlayOpen = () => { return document.body.style.overflow === 'hidden' }

          gsap.fromTo(
            progressLine,
            { scaleX: 0, transformOrigin: 'left', opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              ease: 'none',
              duration: 1,
              scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3,
                onUpdate: (self) => {
                  if (isOverlayOpen()) {
                    gsap.set(progressLine, { opacity: 0, scaleX: 0 })
                  } else {
                    gsap.set(progressLine, { opacity: 1 })
                  }
                },
              },
            }
          )

          // Initial state on mount
          if (isOverlayOpen()) {
            gsap.set(progressLine, { opacity: 0, scaleX: 0 })
          }
        }
      })
      // Mobile: (max-width: 1023px) and (prefers-reduced-motion: no-preference)
      media.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
        document.querySelectorAll('[data-reveal="up"]').forEach((container) => {
          const elements = container.children
          if (!elements.length) return
          gsap.fromTo(elements, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15 })
        })
      })
    }).catch((err) => { console.error('MotionController init error:', err) })

    return () => {
      cancelled = true
      media?.revert()
    }
  }, [])
  return null
}