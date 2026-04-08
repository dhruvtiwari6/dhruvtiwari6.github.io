import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Globe, Zap, Layers, Server, MessageSquare, Terminal as ServerIcon } from 'lucide-react';

const Projects = () => {
    const realtimeProjects = [
        {
            title: 'Vibe-Call',
            description: (
                <>
                    Scalable Real-Time Chat & Video Platform using SFU architecture. Features debounced search, virtual scrolling, and a <strong style={{ color: 'var(--text-main)' }}>horizontally scalable messaging layer</strong>.
                </>
            ),
            tech: ['Next.js', 'WebRTC', 'MediaSoup', 'Socket.io', 'Redis', 'Node.js', 'AWS'],
            github: 'https://github.com/dhruvtiwari6/vibe-call',
            live: 'https://vibe-call.dhruv-tiwari.me/'
        },
        {
            title: 'Excalidraw (Collaborative)',
            description: (
                <>
                    Real-time collaborative drawing platform. Implements horizontal scalability for WebSocket synchronization and <strong style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>geo-aware deployment (request from indian users come on d/f server and outside indian comes on d.f server).</strong>
                </>
            ),
            tech: ['Turbo Repo', 'WebSockets', 'Redis', 'Docker', 'NGINX', 'AWS'],
            github: 'https://github.com/dhruvtiwari6/Excalidraw',
            live: 'https://excalidraw.dhruv-tiwari.me/'
        },
        {
            title: 'HTTP Web Server',
            description: 'Modular HTTP/1.1 web server in C++ supporting 50+ concurrent connections. Features multithreaded architecture and optimized HTTP parsing.',
            tech: ['C++', 'TCP Sockets', 'Multithreading', 'HTTP/1.1'],
            github: 'https://github.com/dhruvtiwari6/http-server-from-scratch',
            live: 'https://www.npmjs.com/package/http-server-from-scratch'
        }
    ];

    const genAIProjects = [
        {
            title: 'SpendWise',
            description: 'AI-powered expense assistant using Model Context Protocol (MCP) for conversational finance tracking and intelligent insights.',
            tech: ['LangGraph', 'Gemini', 'FastMCP', 'FastAPI', 'Streamlit', 'Clerk'],
            github: 'https://github.com/dhruvtiwari6/mcp_tracker_streamlit_fastapi',
            live: 'https://spendwise.ai.dhruv-tiwari.me/'
        },
        {
            title: 'RAG Chatbot',
            description: 'Scalable FastAPI-based RAG chatbot with tool-augmented reasoning. Integrates document-grounded Q&A with semantic retrieval and persistent state.',
            tech: ['FastAPI', 'Qdrant', 'NVIDIA Embeddings', 'Python', 'AWS'],
            github: 'https://github.com/dhruvtiwari6/rag_chatBot',
            live: 'https://nexus.ai.dhruv-tiwari.me/'
        }
    ];

    const ProjectCard = ({ project, idx, color, icon: Icon }) => (
        <motion.div
            className="card flex flex-col justify-between"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ borderTop: `4px solid ${color}`, height: '100%' }}
        >
            <div>
                <div className="flex justify-between items-start" style={{ marginBottom: '1.5rem' }}>
                    <Icon style={{ color: color }} size={32} />
                    <div className="flex gap-4">
                        {project.github !== '#' && (
                            <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
                                <Github size={20} className="hover-primary" />
                            </a>
                        )}
                        {project.live !== '#' && (
                            <a href={project.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
                                <ExternalLink size={20} className="hover-primary" />
                            </a>
                        )}
                    </div>
                </div>
                <h3 className="mono" style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)', minHeight: '1.4em' }}>
                    {project.title}
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                    <span key={t} className="mono" style={{ fontSize: '0.6rem', color: color, background: `${color}10`, border: `1px solid ${color}30`, padding: '2px 8px', borderRadius: '4px' }}>
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="projects">
            <div className="flex items-center gap-4" style={{ marginBottom: '4rem' }}>
                <h2 className="mono" style={{ fontSize: '1.8rem' }}>
                    <span style={{ color: 'var(--primary)' }}>02.</span> Projects
                </h2>
                <div style={{ height: '1px', background: 'var(--border-color)', flex: 1 }}></div>
            </div>

            {/* Realtime & Scalable Section */}
            <div style={{ marginBottom: '6rem' }}>
                <div className="project-cat-header">
                    <div style={{ padding: '8px', background: 'var(--primary-glow)', borderRadius: '8px' }}>
                        <Globe size={24} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                        <h3 className="mono" style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '4px' }}>Real-time & Scalable Systems</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Video calling, collaborative tools, and low-latency networking.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {realtimeProjects.map((p, idx) => (
                        <ProjectCard
                            key={p.title}
                            project={p}
                            idx={idx}
                            color="var(--primary)"
                            icon={Server}
                        />
                    ))}
                </div>
            </div>

            {/* Gen AI & MCP Section */}
            <div>
                <div className="project-cat-header">
                    <div style={{ padding: '8px', background: 'var(--secondary-glow)', borderRadius: '8px' }}>
                        <Zap size={24} style={{ color: 'var(--secondary)' }} />
                    </div>
                    <div>
                        <h3 className="mono" style={{ fontSize: '1.3rem', color: 'var(--secondary)', marginBottom: '4px' }}>Gen AI & Intelligent Systems (MCP)</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Agentic workflows and retrieval-augmented systems.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {genAIProjects.map((p, idx) => (
                        <ProjectCard
                            key={p.title}
                            project={p}
                            idx={idx}
                            color="var(--secondary)"
                            icon={MessageSquare}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
