import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu, Server, Layout } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: 'Programming',
            icon: <Code2 size={20} />,
            items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java']
        },
        {
            category: 'Web Technologies',
            icon: <Layout size={20} />,
            items: ['React', 'Next.js', 'Node.js', 'Express.js', 'HTML5/CSS3']
        },
        {
            category: 'Real-time & AI',
            icon: <Globe size={20} />,
            items: ['WebRTC', 'WebSockets', 'MediaSoup', 'FastAPI', 'Socket.io']
        },
        {
            category: 'Databases',
            icon: <Database size={20} />,
            items: ['PostgreSQL', 'MongoDB', 'SQL', 'Redis', 'Qdrant']
        },
        {
            category: 'Tools & DevOps',
            icon: <Cpu size={20} />,
            items: ['Git', 'Docker', 'GitHub', 'NGINX', 'AWS']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills">
            <div className="flex items-center gap-4" style={{ marginBottom: '3rem' }}>
                <h2 className="mono" style={{ fontSize: '1.8rem' }}>
                    <span style={{ color: 'var(--primary)' }}>03.</span> Core Technologies
                </h2>
                <div style={{ height: '1px', background: 'var(--border-color)', flex: 1 }}></div>
            </div>

            <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map((skill, idx) => (
                    <motion.div
                        key={skill.category}
                        className="card"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
                            <div style={{ color: 'var(--primary)', padding: '10px', background: 'var(--primary-glow)', borderRadius: '12px' }}>
                                {skill.icon}
                            </div>
                            <h3 className="mono" style={{ fontSize: '1.2rem' }}>{skill.category}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {skill.items.map(item => (
                                <span
                                    key={item}
                                    className="mono"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '4px 12px',
                                        background: 'var(--secondary-glow)',
                                        color: 'var(--secondary)',
                                        borderRadius: '20px',
                                        border: '1px solid var(--secondary)'
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
