import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const items = [
        {
            role: 'Club Coordinator',
            org: 'Codebase Club, IIIT Kota',
            period: 'May 2025 - Present',
            details: [
                'Leading the overall strategic direction and growth of the club.',
                'Coordinating high-impact technical events, hackathons, and community initiatives.',
                'Managing partnerships and resources to foster a robust developer culture on campus.'
            ]
        },
        {
            role: 'Web Development Lead',
            org: 'Codebase Club, IIIT Kota',
            period: 'Oct 2024 - May 2025',
            details: [
                'Leading and mentoring a team of 15+ developers in full-stack technologies.',
                'Organized technical workshops and events attended by 120+ students.',
                'Managed club projects and drove technical excellence within the community.'
            ]
        },
        {
            role: 'HackTheChain 2.0 Finalist',
            org: 'Top 10 / 300+ Teams',
            period: '2024',
            details: [
                'Recognized for innovative solutions in real-time communication systems.',
                'Built a decentralized platform prototype during the 36-hour hackathon.',
                'Won the "2nd Runner-up" at IISER Bhopal National Hackathon.'
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="flex items-center gap-4" style={{ marginBottom: '3rem' }}>
                <h2 className="mono" style={{ fontSize: '1.8rem' }}>
                    <span style={{ color: 'var(--primary)' }}>01.</span> Path Taken
                </h2>
                <div style={{ height: '1px', background: 'var(--border-color)', flex: 1 }}></div>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {items.map((item, idx) => (
                    <motion.div
                        key={item.role + idx}
                        className="flex gap-8"
                        style={{ marginBottom: '3rem', position: 'relative' }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="flex flex-col items-center">
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: 'var(--primary)',
                                boxShadow: '0 0 10px var(--primary-glow)',
                                zIndex: 2
                            }}></div>
                            {idx !== items.length - 1 && (
                                <div style={{
                                    width: '2px',
                                    flex: 1,
                                    background: 'var(--border-color)',
                                    marginTop: '10px'
                                }}></div>
                            )}
                        </div>

                        <div style={{ paddingBottom: '1rem' }}>
                            <h3 className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>
                                {item.role} <span style={{ color: 'var(--primary)' }}>@ {item.org}</span>
                            </h3>
                            <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                                {item.period}
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-dim)', fontSize: '1rem' }}>
                                {item.details.map((detail, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', position: 'relative' }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '-1.2rem',
                                            color: 'var(--primary)'
                                        }}>▹</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
