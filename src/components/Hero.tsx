"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
}

export const Hero = ({ title, subtitle, image }: HeroProps) => {
    const [firstName, ...rest] = title.split(' ');
    const lastName = rest.join(' ');

    return (
        <section id="home" className="min-h-[100vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pt-20">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-7xl w-full flex flex-col items-center"
            >
                {/* Premium Profile Frame */}
                <div className="relative group mb-12">
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"
                    />

                    <div className="relative w-40 h-40 sm:w-56 sm:h-56">
                        <div className="absolute inset-0 border-[3px] border-primary/20 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-700" />
                        <div className="absolute inset-0 border-[3px] border-white/5 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700" />

                        <div className="w-full h-full glass rounded-[2.5rem] p-1.5 overflow-hidden border-white/5 shadow-2xl relative z-10">
                            <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 bg-secondary/50">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    sizes="(max-width: 768px) 160px, 224px"
                                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 mb-12">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-primary font-black uppercase text-[10px] sm:text-xs"
                    >
                        Developing Digital Excellence
                    </motion.span>

                    <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.75] select-none">
                        <span className="block text-white/90">{firstName}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                            {lastName}
                        </span>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-muted-foreground text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed font-medium mb-12 opacity-80"
                >
                    {subtitle}
                </motion.p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://drive.google.com/file/d/1_14UaUpH97v-gQ-u18sUNIPulMQYS4d-/view?usp=sharing"
                        target="_blank"
                        className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-black text-xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] transition-shadow hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.6)] flex items-center gap-3"
                    >
                        View Portfolio <ExternalLink size={20} />
                    </motion.a>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "http://github.com/leadernaga" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/pnaga15/" },
                            { icon: Mail, href: "mailto:leadernaga90@gmail.com" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                                href={social.href}
                                target="_blank"
                                className="p-5 glass rounded-2xl text-muted-foreground hover:text-white transition-all border-white/5"
                            >
                                <social.icon size={22} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 hover:opacity-100 transition-opacity cursor-pointer group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore</span>
                <ArrowDown size={16} className="text-primary group-hover:scale-125 transition-transform" />
            </motion.div>
        </section>
    );
};
