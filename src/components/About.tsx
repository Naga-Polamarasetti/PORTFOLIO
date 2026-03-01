"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Workflow } from 'lucide-react';
import Image from 'next/image';

const features = [
    { icon: Target, label: 'Precision', value: 'Pixel-perfect UI' },
    { icon: Workflow, label: 'Scalability', value: 'Robust Architectures' },
    { icon: Lightbulb, label: 'Innovation', value: 'Modern Tech Stack' },
];

interface AboutProps {
    text: string;
    image: string;
}

export const About = ({ text, image }: AboutProps) => {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-40">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-32 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group hidden lg:block"
                >
                    {/* Abstract Back Decor */}
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

                    <div className="relative aspect-[4/5] glass rounded-[4rem] p-3 border-white/5 transition-all duration-700 group-hover:border-primary/20">
                        <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden">
                            <Image
                                src={image}
                                alt="Naga Polamarasetti"
                                fill
                                sizes="40vw"
                                className="object-cover scale-110 group-hover:scale-100 transition-all duration-1000 brightness-90 group-hover:brightness-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-40" />
                        </div>
                    </div>

                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        whileInView={{ scale: 1, rotate: -12 }}
                        className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl border-primary/20 shadow-2xl z-10"
                    >
                        <p className="text-4xl font-black text-primary leading-none">3+</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 mt-1">Years Exp</p>
                    </motion.div>
                </motion.div>

                <div className="space-y-16">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-primary/10 text-primary px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] inline-block mb-4"
                        >
                            The Designer Behind the Code
                        </motion.span>
                        <h2 className="text-6xl sm:text-7xl font-black tracking-tighter leading-none mb-8">
                            Crafting High-End <br />
                            <span className="text-muted-foreground opacity-30">Web Experiences.</span>
                        </h2>

                        <div className="glass p-1 rounded-[2.5rem] border-white/5">
                            <div className="grid grid-cols-3 gap-1 p-2">
                                {features.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center py-8 px-4 rounded-[2rem] hover:bg-white/5 transition-colors group">
                                        <item.icon className="text-primary mb-4 opacity-40 group-hover:opacity-100 transition-opacity" size={24} />
                                        <h4 className="font-black text-[10px] uppercase tracking-widest text-center whitespace-nowrap mb-1 opacity-60">{item.label}</h4>
                                        <p className="text-[9px] font-bold text-muted-foreground/40 hidden sm:block">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-muted-foreground text-xl sm:text-2xl leading-relaxed font-medium whitespace-pre-wrap opacity-80"
                    >
                        {text}
                    </motion.p>

                    <div className="pt-8">
                        <a href="#projects" className="group flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:border-primary">
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <Workflow className="text-primary" size={24} />
                                </motion.div>
                            </div>
                            <div>
                                <h4 className="font-black text-xl uppercase tracking-tighter">View Workflow</h4>
                                <p className="text-xs font-bold text-muted-foreground opacity-40">See how I bring ideas to life.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
