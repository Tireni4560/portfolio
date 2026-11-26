import './globals.css'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import ui from '../content/ui.json'
import MotionController from './components/MotionController'
import Preloader from './components/Preloader'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap'
})
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jbm',
  display: 'swap'
})

export const metadata = {
  title: 'Daniel Adeleye | Developer, security, Tirenify founder',
  description: 'Developer and founder of Tirenify. I build products, websites and apps for businesses and startups, with security checks on top. Built Safeyard on my own.',
  alternates: { canonical: 'https://leye.me' },
  openGraph: {
    title: 'Daniel Adeleye | Developer, security, Tirenify founder',
    description: 'Developer and founder of Tirenify. I build products, websites and apps for businesses and startups, with security checks on top. Built Safeyard on my own.',
    url: 'https://leye.me',
    type: 'website',
    siteName: 'Daniel Adeleye'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Adeleye | Developer, security, Tirenify founder',
    description: 'Developer and founder of Tirenify. I build products, websites and apps for businesses and startups, with security checks on top. Built Safeyard on my own.'
  },
  icons: { icon: '/favicon.svg' }
}

export const viewport = {
  themeColor: '#0A0C0B'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${jetBrainsMono.className}`}>
        <Preloader name={ui.preloaderName} label={ui.preloaderLabel} />
        <div className="scroll-progress" aria-hidden="true" />
        <MotionController />
        {children}
      </body>
    </html>
  )
}
