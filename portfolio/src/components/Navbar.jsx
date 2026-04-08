import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100,
            backdropFilter: 'blur(10px)',
            background: 'rgba(3, 7, 18, 0.8)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 2rem'
        }}>
            <div className="flex items-center justify-between mx-auto" style={{ maxWidth: '1200px' }}>
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="mono gradient-text"
                    style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                    &lt;DT /&gt;
                </motion.div>

                {/* Desktop Nav */}
                <div className="flex gap-8 items-center hidden-sm">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                textDecoration: 'none',
                                color: 'var(--text-dim)',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}
                            whileHover={{ color: 'var(--primary)' }}
                        >
                            <span className="mono" style={{ color: 'var(--primary)', marginRight: '4px' }}>0{i + 1}.</span>
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://drive.google.com/file/d/1uIiRpVkNHBfSC3DiKSYXEzha014_F0LC/view?usp=drive_link"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="btn-outline mono"
                        style={{ fontSize: '0.8rem', padding: '8px 16px', textDecoration: 'none' }}
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="hidden-md flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'transparent', color: 'var(--text-main)', padding: '4px' }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            overflow: 'hidden',
                            background: 'var(--bg-color)',
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            borderBottom: '1px solid var(--border-color)'
                        }}
                        className="hidden-md"
                    >
                        <div className="flex flex-col gap-6 p-8 items-center">
                            {navLinks.map((link, i) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="mono"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--text-dim)',
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    <span style={{ color: 'var(--primary)' }}>0{i + 1}.</span> {link.name}
                                </a>
                            ))}
                            <a
                                href="https://drive.google.com/file/d/1uIiRpVkNHBfSC3DiKSYXEzha014_F0LC/view?usp=drive_link"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-outline mono w-full text-center"
                                style={{ padding: '12px', textDecoration: 'none' }}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
