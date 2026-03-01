"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, MessageSquare } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
];

export const Navbar = () => {
    const [active, setActive] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            let current = '#home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200) current = `#${section}`;
                }
            }
            setActive(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-fit">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass rounded-[2rem] px-4 py-3 flex items-center gap-2 sm:gap-4 shadow-2xl"
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.href)}
                        className={`relative p-3 rounded-2xl transition-all duration-300 ${active === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        <item.icon size={22} strokeWidth={2.5} />
                        {active === item.href && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-primary/10 rounded-2xl -z-10"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                            />
                        )}
                    </a>
                ))}
            </motion.div>
        </nav>
    );
};
