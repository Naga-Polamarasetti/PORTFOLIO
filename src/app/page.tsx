import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  const settings = {
    heroTitle: "Naga Polamarasetti",
    heroSubtitle: "Engineering robust fullstack products with technical precision and elegant design.",
    aboutText: "I am a results-driven Fullstack Developer with a strong foundation in modern web technologies. My approach combines technical rigor with a deep appreciation for user-centric design, ensuring every line of code translates into a premium digital experience.\n\nI specialize in the MERN stack and Next.js, building scalable architectures that stand the test of time.",
    image: "/assets/premium_portrait_final.png"
  };

  const projects = [
    {
      title: 'Beardo Clone',
      github: 'https://github.com/leadernaga/Beardo.in',
      live: 'https://beardoclone.netlify.app/',
      description: 'An e-commerce platform for men\'s grooming products, featuring a catalog of hair, beard, and skincare essentials.',
      tech: ['Javascript', 'CSS', 'HTML', 'Node.js'],
      image: '/assets/BeardoProduct.png',
      accent: 'from-orange-500/20'
    },
    {
      title: 'Sugar Cosmetics',
      github: 'https://github.com/leadernaga/tart-clover-129',
      live: 'https://sugar-cosmetics.vercel.app/',
      description: "A high-performance cosmetics e-commerce clone with a focus on modern UI/UX and seamless shopping flow.",
      tech: ['React JS', 'Node JS', 'MongoDB', 'Tailwind'],
      image: '/assets/sugarCosmetics.png',
      accent: 'from-pink-500/20'
    },
    {
      title: 'Big Basket Clone',
      github: 'https://github.com/S-hub1996/Big-basket-clone',
      live: 'https://big-basket-clone-by-masai-school.netlify.app/',
      description: 'Online food and grocery delivery platform clone, managing everything from household needs to personal essentials.',
      tech: ['React', 'Redux', 'JavaScript', 'CSS3'],
      image: '/assets/BigBasket.png',
      accent: 'from-green-500/20'
    },
    {
      title: 'Apollo 24|7',
      github: 'http://github.com/leadernaga/Apollo247',
      live: 'https://apollo24by7.netlify.app/',
      description: 'Unified healthcare platform offering online pharmacy services, doctor consultations, and lab test bookings.',
      tech: ['JavaScript', 'CSS', 'HTML', 'Context API'],
      image: '/assets/ApolloNew.png',
      accent: 'from-blue-500/20'
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero
        title={settings.heroTitle}
        subtitle={settings.heroSubtitle}
        image={settings.image}
      />
      <About
        text={settings.aboutText}
        image={settings.image}
      />
      <Skills />
      <Projects projects={projects} />
      <Contact />

      <footer className="py-24 text-center text-muted-foreground border-t border-white/5 mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest opacity-40">
          &copy; {new Date().getFullYear()} Naga Polamarasetti. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
