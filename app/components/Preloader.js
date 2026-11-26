'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const introKey = 'leye:intro'

export default function Preloader({ name, label }) {
  const preloaderRef = useRef(null)
  const counterRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let introSeen = false

    try {
      introSeen = sessionStorage.getItem(introKey) === 'true'
    } catch (error) {
      console.warn('Unable to read intro state from session storage.', error)
    }

    if (reducedMotion || introSeen) {
      root.classList.add('intro-seen')
      return
    }

    root.classList.add('js')
    const preloader = preloaderRef.current
    const counter = counterRef.current
    const timeline = gsap.timeline({
      onComplete: () => {
        root.classList.add('intro-seen')
        try {
          sessionStorage.setItem(introKey, 'true')
        } catch (error) {
          console.warn('Unable to save intro state to session storage.', error)
        }
        window.dispatchEvent(new Event('leye:intro-done'))
      }
    })

    timeline
      .fromTo(counter, { innerText: '0' }, { innerText: '100', duration: 1.1, ease: 'power2.inOut', snap: { innerText: 1 } })
      .to(preloader, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' })

    return () => timeline.kill()
  }, [])

  return (
    <div ref={preloaderRef} className="preloader" aria-hidden="true">
      <div className="preloader-content">
        <div className="preloader-text">{name}</div>
        <div className="preloader-bottom">
          <div className="preloader-label">{label}</div>
          <div className="preloader-counter">
            <span id="preloader-counter" ref={counterRef}>0</span>
            <span className="preloader-percent">%</span>
          </div>
        </div>
      </div>
      <div className="preloader-accent" />
    </div>
  )
}
