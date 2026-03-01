"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    github: string;
    live: string;
    tech: string[];
    image: string;
    accent: string;
}

interface ProjectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
            <div className="flex flex-col items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-3 glass rounded-2xl text-primary mb-6"
                >
                    <Code2 size={24} />
                </motion.div>
                <h5 className="text-muted-foreground uppercase tracking-[0.4em] text-[10px] font-black mb-4 opacity-70">Case Studies</h5>
                <h2 className="section-title !mb-0">Selected Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {projects.map((project, i) => (
                    <motion.article
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 1.11, 0.81, 0.99] }}
                        className="group relative"
                    >
                        {/* Shadow Glow */}
                        <div className={`absolute -inset-4 bg-gradient-to-br ${project.accent} to-transparent opacity-0 group-hover:opacity-40 blur-3xl transition-all duration-700 -z-10 rounded-[4rem]`} />

                        <div className="glass rounded-[3.5rem] overflow-hidden border-white/5 group-hover:border-primary/30 transition-all duration-700 flex flex-col h-full">
                            {/* Card Image Wrapper */}
                            <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[2.5rem] border border-white/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />

                                {/* Hover Lens Flare */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.15),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>

                            <div className="p-10 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <Sparkles size={14} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>

                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-black tracking-widest uppercase border border-white/5 group-hover:border-primary/20 transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="p-5 glass rounded-2xl text-muted-foreground hover:text-white transition-all hover:bg-white/10 hover:border-primary/30 active:scale-95"
                                        aria-label="GitHub Repository"
                                    >
                                        <Github size={24} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="flex-1 py-5 bg-primary/90 hover:bg-primary text-primary-foreground rounded-2xl font-black text-lg tracking-tight flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02] active:scale-95"
                                    >
                                        Live Preview <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};
