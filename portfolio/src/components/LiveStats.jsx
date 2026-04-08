import React, { useState, useEffect } from 'react';

const LiveStats = () => {
    const [stats, setStats] = useState({
        latency: 12,
        activeTasks: 8
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                latency: Math.floor(Math.random() * (15 - 8) + 8),
                activeTasks: Math.floor(Math.random() * (12 - 5) + 5)
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-4 md:gap-8 mono flex-wrap" style={{ marginTop: '2rem', fontSize: '0.8rem' }}>
            <div className="flex flex-col gap-1">
                <span style={{ color: 'var(--text-dim)' }}>Uptime:</span>
                <span style={{ color: 'var(--primary)' }}>99.99%</span>
            </div>
            <div className="hidden-sm" style={{ width: '1px', background: 'var(--border-color)', height: '2rem' }}></div>
            <div className="flex flex-col gap-1">
                <span style={{ color: 'var(--text-dim)' }}>Avg Latency:</span>
                <span style={{ color: 'var(--secondary)' }}>{stats.latency}ms</span>
            </div>
            <div className="hidden-sm" style={{ width: '1px', background: 'var(--border-color)', height: '2rem' }}></div>
            <div className="flex flex-col gap-1">
                <span style={{ color: 'var(--text-dim)' }}>Active Agents:</span>
                <span style={{ color: 'var(--primary)' }}>{stats.activeTasks}</span>
            </div>
        </div>
    );
};

export default LiveStats;
