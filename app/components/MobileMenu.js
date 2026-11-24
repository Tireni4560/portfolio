'use client'

import { useEffect, useRef, useState } from 'react'

const links = [['Safeyard', '#safeyard'], ['Security', '#security'], ['Services', '#services'], ['Work', '#work'], ['Contact', '#contact']]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const closeButton = useRef(null)
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'Tab') {
        const focusable = [closeButton.current, ...document.querySelectorAll('.mobile-overlay a')]
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
  }, [open])
  const close = () => { setOpen(false); menuButton.current?.focus() }
  return <>
    <button ref={menuButton} className="menu-button" onClick={() => setOpen(true)} aria-expanded={open}>Menu</button>
    {open && <div className="mobile-overlay" role="dialog" aria-modal="true">
      <button ref={closeButton} className="close-button" onClick={close}>Close</button>
      <nav aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}</nav>
    </div>}
  </>
}
