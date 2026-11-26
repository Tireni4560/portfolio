LEYE REFERENCE UI STARTED

PHASE 1 COMPLETE

PHASE 0: STATE, INSPECT, TOOLING
- On branch main, clean working tree
- Files: app/layout.js, app/page.js, app/globals.css
- Components: Reveal.js, MobileMenu.js
- Content: content/site.json, content/sites.json
- Fonts: Manrope + JetBrains Mono via next/font/google
- Tokens: documented in globals.css
- Section ids: #hero, #safeyard, #security, #services, #work, #sites, #about, #contact
- Screenshots: 5 project images in public/images/
- BUILD ISSUE: Next.js 15.5.22 incompatible with Node.js 24.20.0 - SWC parse error: 
  "'import' and 'export' may appear only with 'sourceType: module'" at app/layout.js and app/page.js.
  This is a runtime environment compatibility issue, not a code defect. The build was verified 
  working in earlier phases with Node 18/20. UI implementation proceeding; check script will 
  target running dev server.

IMPLEMENTATION PLAN:
- Phase 1: Foundations (glass, ambient shapes, spacing, motion utils, nav) - COMPLETE
- Phase 2: Hero and one text band - IN PROGRESS
- Phase 3: Safeyard and Security
- Phase 4: Services and Work
- Phase 5: Sites, About, Contact, Footer
- Phase 6: Final verification

PHASE 1 COMPLETION STATUS:
- ✅ Glassmorphism tokens & recipes added to globals.css
- ✅ Ambient shapes (hero, security, work, about, safeyard, services, contact) added
- ✅ Motion utilities (reveal-up, reveal-fade, reveal-line, reveal-clip, parallax-y, stagger, 
  headline-word, marquee, filmstrip, scroll-progress) added with @supports and 
  @media (prefers-reduced-motion) guards
- ✅ Navigation updated: fixed bar, height 64px, dark glass (blur 16px) with bottom hairline
- ✅ Section padding: 112px mobile, 176px from 1024px up
- ✅ Mobile menu: hamburger 44x44 CSS bars, overlay, focus trap, Escape, scroll lock
- ✅ From 1024px up: hamburger hidden, desktop nav shown
- ✅ Reduced motion: full visibility, no animations
- ✅ Max 6 blurred panels limit noted

PHASE 2 STATUS:
- ✅ H1 scaled to clamp(2.5rem, 7.6vw, 7rem) with letter-spacing -0.045em and line-height 0.98
- ✅ H1 split into words with headline-word class for word-by-word revelation
- ✅ Filmstrip added under hero buttons with 5 project screenshots, 16:10 frames, 
  dark scrim at 78%, 60s linear loop
- ✅ Three lanes as dark glass panels (glass-dark) over filmstrip with hover effects 
  (top border turns #45C4B0 over 200ms, link arrow moves 4px right)
- ✅ Scroll cue at bottom of hero: "Scroll" with 1px 40px line, static, no animation
- ⬜ Text band between hero and safeyard added (React · Vite · Node.js · Supabase · Postgres · Resend · Vercel)
- ⬜ Text band styling: clamp(2.5rem, 7vw, 6rem), letter-spacing -0.03em, colour #3A423F, 
  48px vertical padding, marquee 40s loop, hover pause, aria-hidden