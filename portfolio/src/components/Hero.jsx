import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import LiveStats from './LiveStats';

const Hero = () => {
    return (
        <section id="hero" className="flex flex-col md:flex-row items-center justify-center h-screen gap-12" style={{ paddingTop: '80px' }}>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ flex: 1.2 }}
            >
                <p className="mono" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                    Hi, my name is
                </p>
                <h1 style={{ fontSize: 'clamp(32px, 8vw, 80px)', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: 1.1 }}>
                    Dhruv Tiwari.
                </h1>
                <h2 style={{ fontSize: 'clamp(24px, 6vw, 60px)', color: 'var(--text-dim)', marginBottom: '2rem', lineHeight: 1.2 }}>
                    I build <span style={{ color: 'var(--primary)' }}>real-time</span>, <span style={{ color: 'var(--secondary)' }}>scalable</span> Gen AI systems.
                </h2>

                <p style={{ maxWidth: '600px', color: 'var(--text-dim)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    I'm a full-stack developer specializing in WebRTC, real-time communication, and high-performance backends.
                    Currently the Club Coordinator at Codebase, IIIT Kota.
                </p>

                <div className="flex gap-4">
                    <a href="#projects" className="btn-primary mono" style={{ textDecoration: 'none' }}>View My Work</a>
                    <a href="#footer" className="btn-outline mono flex items-center gap-2" style={{ textDecoration: 'none' }}>
                        <Terminal size={18} />
                        ping -a me
                    </a>
                </div>

                <div className="hidden-sm">
                    <LiveStats />
                </div>
            </motion.div>

            <motion.div
                className="card mono"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    flex: 1,
                    maxWidth: '450px',
                    fontSize: '0.9rem',
                    borderLeft: '4px solid var(--primary)',
                    background: 'rgba(17, 24, 39, 0.5)',
                    alignSelf: 'center'
                }}
            >
                <div style={{ color: '#6ee7b7' }}>&gt; dhruv.currentStatus</div>
                <div style={{ paddingLeft: '1rem', color: 'var(--text-dim)' }}>
                    "{'{'}" <br />
                    &nbsp;&nbsp;location: "IIIT Kota",<br />
                    &nbsp;&nbsp;role: "Club Coordinator",<br />
                    &nbsp;&nbsp;focus: ["WebRTC", "Scalable Systems", "RAG"],<br />
                    &nbsp;&nbsp;availability: "Open to Internships"<br />
                    "{'}'}"
                </div>
                <div className="hidden-md" style={{ marginTop: '2rem' }}>
                    <LiveStats />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
