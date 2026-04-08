import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="flex flex-col gap-8 md:flex-row items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ flex: 1 }}
                >
                    <div className="flex items-center gap-4" style={{ marginBottom: '2rem' }}>
                        <h2 className="mono" style={{ fontSize: '1.8rem' }}>
                            <span style={{ color: 'var(--primary)' }}>01.</span> About Me
                        </h2>
                        <div style={{ height: '1px', background: 'var(--border-color)', flex: 1 }}></div>
                    </div>

                    <div style={{ color: 'var(--text-dim)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p>
                            Hello! I'm Dhruv, a Computer Science student at IIIT Kota with a passion for building complex,
                            real-time systems that live on the web. My interest in development started with exploring
                            how data travels across the network in real-time.
                        </p>
                        <p>
                            Fast-forward to today, I've had the privilege of serving as the Club Coordinator at
                            the <span style={{ color: 'var(--primary)' }}>Codebase Club</span>, competing in national
                            hackathons, and building everything from custom HTTP servers to WebRTC-powered platforms.
                        </p>
                        <p>
                            I thrive on challenges that require pushing the boundaries of the browser, whether it's
                            implementing <span style={{ color: 'var(--secondary)' }}>MediaSoup</span> for high-concurrency
                            video calls or optimizing vector databases for RAG applications.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                    style={{
                        width: '300px',
                        height: '350px',
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid var(--primary)',
                        borderRadius: '12px',
                        transform: 'translate(15px, 15px)',
                        zIndex: -1
                    }}></div>
                    <div className="card h-full w-full" style={{
                        padding: 0,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--secondary-glow)'
                    }}>
                        <img
                            src="./src/assets/profile.png"
                            alt="Dhruv Tiwari"
                            style={{ width: '100%', height: '70%', objectFit: 'cover' }}
                        />
                        <div className="mono text-center p-4">
                            <div className="gradient-text" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Dhruv Tiwari</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>IIIT Kota '27</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
