"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = {
    frontend: [
        { name: 'React / Next.js', level: 'Experienced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'JavaScript (ES6+)', level: 'Experienced' },
        { name: 'Tailwind / CSS3', level: 'Experienced' },
        { name: 'Redux / Toolkit', level: 'Experienced' },
        { name: 'Material UI', level: 'Intermediate' },
    ],
    backend: [
        { name: 'Node.js / Express', level: 'Intermediate' },
        { name: 'MongoDB / SQL', level: 'Intermediate' },
        { name: 'REST & GraphQL', level: 'Intermediate' },
        { name: 'JWT & Auth', level: 'Experienced' },
        { name: 'Redis / AWS', level: 'Beginner' },
        { name: 'Firebase', level: 'Beginner' },
    ]
};

export const Skills = () => {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6">
            <h5 className="text-center text-muted-foreground mb-4 uppercase tracking-widest text-xs font-bold">Technical Proficiency</h5>
            <h2 className="section-title">My Skills</h2>

            <div className="grid lg:grid-cols-2 gap-10">
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="glass p-10 rounded-[2.5rem] space-y-10 border-white/5 hover:border-primary/20 transition-all duration-500"
                    >
                        <h3 className="text-4xl font-black capitalize text-center text-gradient tracking-tight">
                            {category}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {items.map((skill, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className="p-1 text-primary group-hover:scale-125 transition-transform duration-300">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">{skill.name}</h4>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">{skill.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
