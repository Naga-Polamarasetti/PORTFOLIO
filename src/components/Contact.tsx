"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setPending(true);
        emailjs.sendForm('service_w1zmf9p', 'template_n4sh0fp', form.current, 'YhAbMcryk8Wo_PBJM')
            .then(() => {
                setSuccess(true);
                form.current?.reset();
                setTimeout(() => setSuccess(false), 5000);
            })
            .finally(() => setPending(false));
    };

    return (
        <section id="contact" className="max-w-7xl mx-auto px-6">
            <h5 className="text-center text-muted-foreground mb-4 uppercase tracking-widest text-xs font-bold">Get In Touch</h5>
            <h2 className="section-title">Contact Me</h2>

            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
                <div className="space-y-6">
                    {[
                        { icon: Mail, label: 'Email', value: 'leadernaga90@gmail.com', href: 'mailto:leadernaga90@gmail.com' },
                        { icon: Linkedin, label: 'LinkedIn', value: 'pnaga15', href: 'https://www.linkedin.com/in/pnaga15/' },
                        { icon: MessageSquare, label: 'WhatsApp', value: '+91 62817 73036', href: 'https://wa.me/916281773036' }
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-[2rem] flex items-center gap-8 group hover:border-primary/40 transition-all"
                        >
                            <div className="p-5 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform">
                                <item.icon size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-widest">{item.label}</h4>
                                <p className="font-black text-lg">{item.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-12 rounded-[2.5rem]"
                >
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Name</label>
                                <input type="text" name="name" required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-5 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30 font-bold" placeholder="Your Name" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Email</label>
                                <input type="email" name="email" required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-5 focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/30 font-bold" placeholder="your@email.com" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">Message</label>
                            <textarea name="message" rows={5} required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-5 focus:border-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/30 font-bold" placeholder="What's on your mind?" />
                        </div>

                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full py-6 bg-primary text-primary-foreground rounded-2xl font-black text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {pending ? 'Sending...' : success ? 'Sent!' : 'Shoot Message'}
                            {!pending && !success && <Send size={20} />}
                            {success && <CheckCircle size={20} />}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
