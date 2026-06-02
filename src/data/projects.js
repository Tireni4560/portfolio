import upwork_showcase from '../../images/upwork showcase.PNG';
import bizdashImg from '../../images/bizdash.PNG';
import miniecomImg from '../../images/miniecom.PNG';
import buladeImg from '../../images/bulade.PNG';

export const projects = [
  {
    id: 'upwork-showcase',
    title: 'Upwork Showcase',
    category: 'Freelance · Lead Generation',
    presentation: 'Client Acquisition Platform',
    description: 'A conversion-optimized showcase built to attract and close freelance clients. Demonstrates frontend services, includes client testimonials, and drives inbound leads.',
    results: ['Conversion-focused', 'Client testimonials', 'Service architecture'],
    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://upwork-showcase.vercel.app',
    featured: true,
    number: '01',
    image: upwork_showcase,
  },
  {
    id: 'bizdash',
    title: 'BizDash',
    category: 'SaaS · Analytics',
    presentation: 'Business Analytics Dashboard',
    description: 'A data visualization dashboard for business owners to monitor sales performance, customer growth, and review metrics in real time. Built for decision-making, not just display.',
    results: ['Real-time data', 'Multi-period filtering', '5+ chart types'],
    technologies: ['React', 'JavaScript', 'CSS'],
    liveLink: 'https://bizdash-pi.vercel.app',
    featured: false,
    number: '02',
    image: bizdashImg,
  },
  {
    id: 'miniecom',
    title: 'MiniEcom',
    category: 'E-Commerce · Frontend',
    presentation: 'Headless Commerce Frontend',
    description: 'A premium e-commerce frontend demonstrating product discovery, cart management, and checkout UX patterns. Built to showcase conversion-optimized shopping experiences for e-commerce clients.',
    results: ['Cart logic', 'Product filtering', 'Newsletter capture'],
    technologies: ['React', 'JavaScript', 'CSS'],
    liveLink: 'https://miniecom-pi.vercel.app/',
    featured: false,
    number: '03',
    image: miniecomImg,
  },
  {
    id: 'business-landing',
    title: 'Business Landing Demo',
    category: 'Marketing · Landing Page',
    presentation: 'High-Conversion Business Landing Page',
    description: 'A full-featured business landing page with services architecture, animated testimonials, filterable case studies, and contact flow. A template for enterprise and SMB client acquisition.',
    results: ['Filterable case studies', 'Testimonial carousel', 'Dark/light mode'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://business-landing-demo.vercel.app',
    featured: false,
    number: '04',
    image: buladeImg,
  },
];
