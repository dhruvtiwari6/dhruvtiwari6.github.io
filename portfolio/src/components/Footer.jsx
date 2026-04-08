import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="footer" style={{
            padding: '4rem 2rem 2rem',
            borderTop: '1px solid var(--border-color)',
            background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.05))',
            marginTop: '4rem'
        }}>
            <div className="mx-auto" style={{ maxWidth: '1200px' }}>
                <div className="flex justify-between items-start flex-mobile-col gap-12" style={{ marginBottom: '4rem' }}>
                    <div style={{ maxWidth: '400px' }}>
                        <div className="mono gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                            &lt;DT /&gt;
                        </div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            Building scalable real-time systems and intelligent Gen AI solutions.
                            Focused on performance, reliability, and exceptional user experience.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={20} />, url: 'https://github.com/dhruvtiwari6' },
                                { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/dhruv-tiwari-9305a4282/' },
                                { icon: <Twitter size={20} />, url: 'https://x.com/Legend_Tiwari6' },
                                { icon: <Mail size={20} />, url: 'mailto:dhurvtiwari6@gmail.com' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -3, color: 'var(--primary)' }}
                                    style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-16 flex-mobile-col">
                        <div className="flex flex-col gap-4">
                            <h4 className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-main)', letterSpacing: '2px' }}>LINKS</h4>
                            {['Skills', 'Projects', 'Experience'].map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="hover-primary mono" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.8rem' }}>
                                    {link}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="flex justify-between items-center pt-8 flex-mobile-col gap-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                        © 2026 Dhruv Tiwari
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 mono" style={{ fontSize: '0.7rem', color: 'var(--primary)' }}>
                            <div className="animate-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}></div>
                            SYSTEM STATUS: OPERATIONAL
                        </div>
                        <button
                            onClick={scrollToTop}
                            style={{ background: 'transparent', color: 'var(--text-dim)', padding: 0 }}
                            className="hover-primary"
                        >
                            <ArrowUpCircle size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
