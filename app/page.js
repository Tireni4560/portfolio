import { Fragment } from 'react'
import site from './content/site.json'
import sites from './content/sites.json'
import ui from '../content/ui.json'
import Reveal from './components/Reveal'
import MobileMenu from './components/MobileMenu'
import Clock from './components/Clock'

const external = { target: '_blank', rel: 'noopener noreferrer' }
const visibleCategories = sites.filter(category => category.show)
const visibleSites = visibleCategories.flatMap(category => category.sites.filter(item => item.show))
const displayUrl = url => url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
const stackItems = ['React', '·', 'Vite', '·', 'Node.js', '·', 'Supabase', '·', 'Postgres', '·', 'Resend', '·', 'Vercel']

function SectionHeader({ label, title, intro }) {
  return <header className="section-header"><span className="eyebrow">{label}</span><h2>{title}</h2>{intro && <p className="lead">{intro}</p>}</header>
}

function Button({ href, children, light = false, ...props }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={href} {...props}>{children}</a>
}

function AmbientShapes() {
  return <div className="ambient-shapes" aria-hidden="true"><span className="shape-circle shape-1" /><span className="shape-circle shape-2" /></div>
}

function Hero() {
  const words0 = site.hero.heading[0].split(' ').map((w, i, words) => <Fragment key={i}><span className="headline-word">{w}</span>{i < words.length - 1 ? ' ' : ''}</Fragment>);
  const words1 = site.hero.heading[1].split(' ').map((w, i, words) => <Fragment key={i + 100}><span className="headline-word">{w}</span>{i < words.length - 1 ? ' ' : ''}</Fragment>);
  const { heroMetaLeft, clockLabel } = ui
  // Filmstrip frames: 5 project screenshots in order from site.work.cards
  const filmstripImages = [
    '/images/bizdash.png',
    '/images/upwork-showcase.png',
    '/images/miniecom.png',
    '/images/business-landing-demo.png',
    '/images/vedal.png'
  ].map(img => ({ img }))
  return <section id="hero" className="dark hero"><AmbientShapes /><div className="container hero-inner">
    <p className="eyebrow">{site.hero.label}</p>
    <div className="meta-row" style={{display:'flex',justifyContent:'space-between',marginBottom:'16px',fontFamily:'"var(--font-jbm)", "JetBrains Mono", monospace',color:'var(--dark-secondary)',fontSize:'0.875rem'}}>
      <span>{heroMetaLeft}</span>
      <span style={{display:'flex',alignItems:'center'}}>
        <span>{clockLabel}</span>&nbsp;&nbsp;<Clock />
      </span>
    </div>
    <h1 data-split>{[...words0, ' ', ...words1]}</h1>
    <p className="hero-sub">{site.hero.sub}</p>
    <div className="button-row"><Button href="#contact">Work with me</Button><Button href="#safeyard" light>See what I've built</Button></div>
    <div className="filmstrip"><div className="filmstrip-track" style={{position:'relative',overflow:'hidden'}}>
      {filmstripImages.map(({ img }, i) => {
        return <div className="filmstrip-frame" key={i} style={{flex:'0 0 clamp(240px,28vw,380px)',maxWidth:'clamp(240px,28vw,380px)',aspectRatio:'16/10',border:'1px solid #E8EEF2',borderRadius:6,background:'#0A0C0B',marginRight:16,marginBottom:16}}><img src={img} alt="" width={800} height={500} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} loading="lazy" /></div>
      })}
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(10,12,11,0.78)',pointerEvents:'none'}} aria-hidden="true" /></div>
    </div>
    <div className="lanes" style={{borderTop:'1px solid var(--hair)',display:'grid',gridTemplateColumns:'1fr',gap:16,padding:'28px 0 0'}}>{site.hero.lanes.map((lane, index) => <div className="lane glass-dark" key={`${lane.label}-${index}`} style={{padding:'24px 0 0',borderTop:'1px solid var(--hair)'}}><span className="accent">{lane.label}</span><p>{lane.text}</p><a href={lane.href}>{lane.link}</a></div>)}</div>
    <div className="scroll-cue" style={{marginTop:'auto',fontSize:'0.875rem',color:'var(--dark-secondary)'}}>Scroll</div>
  </div></section>
}

function Safeyard() {
  return <section id="safeyard" className="paper section safeyard"><AmbientShapes /><div className="container"><SectionHeader label={site.safeyard.label} title={site.safeyard.title} />
    <div className="safeyard-grid"><div><p className="lead">{site.safeyard.intro}</p><div className="plain-lines">{site.safeyard.lines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><div className="button-row"><Button href="https://safeyard.tirenify.app" {...external}>Open Safeyard ↗</Button><Button href="https://tirenify.app" light {...external}>Visit Tirenify ↗</Button></div></div>
      <div className="video-frame glass-dark"><div className="video-bar"><span>safeyard.tirenify.app</span><span><span className="live-dot" aria-hidden="true"></span> Live</span></div><video autoPlay muted loop playsInline preload="metadata" aria-label="Safeyard product preview"><source src="/images/tirenify.mp4" type="video/mp4" /></video><div className="video-fallback">Safeyard by Tirenify</div></div></div>
    <div className="shipped"><h3>What I've shipped</h3><div className="stagger-group">{site.safeyard.shipped.map((row, rowIndex) => <article className="glass-paper" key={`${row.title}-${rowIndex}`}><h4>{row.title}</h4><div>{row.copy.map((text, textIndex) => <p key={`${text}-${textIndex}`}>{text}</p>)}</div></article>)}</div></div>
  </div></section>
}

function Security() {
  const group = (title, rows) => <div className="security-card glass-dark"><span className="eyebrow">{title}</span>{rows.map((row, index) => <div className="security-row" key={`${row.name}-${index}`}><h4>{row.name}</h4><p>{row.text}</p></div>)}</div>
  return <section id="security" className="dark section security"><AmbientShapes /><div className="container"><SectionHeader label="Security" title={site.security.title} intro={site.security.intro} /><div className="security-grid stagger-group">{group('Applied in Safeyard', site.security.applied)}{group('What you get on top', site.security.extra)}</div><p className="tertiary closing">{site.security.closing}</p></div></section>
}

function Services() {
  return <section id="services" className="paper section services"><AmbientShapes /><div className="container"><SectionHeader label="Services" title={site.services.title} intro={site.services.intro} /><div className="service-grid stagger-group">{site.services.cards.map((card, index) => <article className="card service-card glass-paper" key={`${card.type}-${index}`}><span className="eyebrow">{card.type}</span><h3>{card.title}</h3><p>{card.text}</p><div className="price">{card.price}</div></article>)}</div><p className="tertiary note">All prices in USD. Scope and final price are confirmed in writing before work starts.</p><div className="how"><span className="eyebrow">How I work</span><div className="how-grid stagger-group">{site.services.how.map((item, index) => <div className="glass-paper" key={`${item.title}-${index}`}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></div></section>
}

function Work() {
  return <section id="work" className="dark section work"><AmbientShapes /><div className="container"><SectionHeader label="Work" title={site.work.title} intro={site.work.intro} /><div className="work-grid stagger-group">{site.work.cards.map((card, index) => <a key={`${card.title}-${index}`} className={`work-card glass-dark ${index === 0 ? 'feature' : ''}`} href={card.url} {...external}><div className="work-image">{card.image ? <img src={card.image} alt={card.alt} width="800" height="500" loading="lazy" /> : <span className="work-fallback">{card.title}</span>}</div><div className="work-copy"><span className="eyebrow">{card.type}</span><h3>{card.title}</h3><p>{card.text}</p><div className="tags">{card.tags.map((tag, tagIndex) => <span key={tagIndex}>{tag}</span>)}</div><span className="open">Open site ↗</span></div></a>)}</div></div></section>
}

function Sites() {
  return <section id="sites" className="paper section sites"><div className="container"><SectionHeader label="Sites" title={site.sites.title} intro={site.sites.intro} /><p className="site-total">{visibleSites.length} sites across {visibleCategories.length} categories.</p><div className="site-list stagger-group">{visibleCategories.map((category, categoryIndex) => <details className="glass-paper" key={`${category.name}-${categoryIndex}`}><summary><span>{category.name}</span><b>{category.sites.filter(item => item.show).length}</b><i>+</i></summary><div className="site-links">{category.sites.filter(item => item.show).map((item, itemIndex) => <a href={item.url} {...external} key={`${item.url}-${itemIndex}`}>{displayUrl(item.url)}</a>)}</div></details>)}</div></div></section>
}

function About() {
  return <section id="about" className="dark section about"><AmbientShapes /><div className="container about-grid"><div className="portrait"><img src="/images/Daniel.jpg" alt="Daniel Adeleye" width="600" height="750" loading="lazy" /></div><div><SectionHeader label="About" title={site.about.title} />{site.about.paragraphs.map((text, index) => <p className={index === 0 ? 'lead' : ''} key={`${text}-${index}`}>{text}</p>)}<div className="tags about-tags">{site.about.tags.map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)}</div></div></div></section>
}

function Contact() {
  return <section id="contact" className="paper section contact"><AmbientShapes /><div className="container"><SectionHeader label="Contact" title={site.contact.title} /><a className="email" href="mailto:daniel@tirenify.app">daniel@tirenify.app</a><p>{site.contact.note}</p><div className="subjects glass-paper"><span className="eyebrow">{site.contact.subjectLabel}</span><div>{site.contact.subjects.map((item, index) => <a href={item.href} key={`${item.label}-${index}`}>{item.label}</a>)}</div></div><p>Or find me on <a href="https://www.linkedin.com/in/daniel-adeleye-5646ba443/" {...external}>LinkedIn</a> and <a href="https://wa.me/2349063626099" {...external}>WhatsApp</a>.</p></div></section>
}

export default function Page() {
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-nav"><div className="nav-inner"><a className="wordmark" href="#hero">Daniel Adeleye <small>Cybersecurity · Full-stack</small></a><nav className="desktop-nav">{['Safeyard', 'Security', 'Services', 'Work', 'Contact'].map(item => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}<Button href="#contact">Work with me</Button></nav><MobileMenu /></div></header><main id="main"><Hero />
  <div className="text-band" role="group" aria-label="Technology stack">
    <div className="track marquee-track" aria-hidden="true">
      {[0, 1].map(loop => <div className="marquee-group" key={loop}>{stackItems.map((item, index) => <span className={item === '·' ? 'accent' : 'word'} key={`${loop}-${index}`}>{item}</span>)}</div>)}
    </div>
  </div><Reveal key="safeyard"><Safeyard /></Reveal><Reveal key="security"><Security /></Reveal><Reveal key="services"><Services /></Reveal><Reveal key="work"><Work /></Reveal><Reveal key="sites"><Sites /></Reveal><Reveal key="about"><About /></Reveal><Reveal key="contact"><Contact /></Reveal></main><footer className="dark"><div className="container footer-inner"><span>© 2026 Daniel Adeleye</span><div><a href="mailto:daniel@tirenify.app">daniel@tirenify.app</a><a href="https://tirenify.app" {...external}>tirenify.app</a><a href="https://safeyard.tirenify.app" {...external}>safeyard.tirenify.app</a><a href="https://www.linkedin.com/in/daniel-adeleye-5646ba443/" {...external}>LinkedIn</a></div></div></footer></>
}
