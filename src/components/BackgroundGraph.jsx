```javascript
import React, { useEffect, useRef } from 'react';

const BackgroundGraph = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null });
    const nodesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        // Mapping terms to section IDs
        const termToSection = {
            "Experience": "experience",
            "Projects": "projects",
            "Skills": "skills",
            "Education": "education",
            "Contact": "contact",
            "About": "about",
            "Ganza Mwari": "projects",
            "MIT": "experience",
            "Catlab": "experience",
            "Rwanda": "about",
            "Algorithm": "skills",
            "Empathy": "about"
        };

        // Set canvas size
        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleClick = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            nodesRef.current.forEach(node => {
                const dx = x - node.x;
                const dy = y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 30) { // Click radius
                    // Check if term maps to a section, or generic fallback
                    // Simple fuzzy matching or direct map
                    let targetId = null;
                    Object.keys(termToSection).forEach(key => {
                        if (node.text.includes(key) || key.includes(node.text)) {
                            targetId = termToSection[key];
                        }
                    });

                    if (!targetId) {
                        // Default mappings based on context if not explicit
                        if (["Python", "Java", "AI", "Data"].some(t => node.text.includes(t))) targetId = "skills";
                        else targetId = "about";
                    }

                    if (targetId) {
                        const element = document.getElementById(targetId);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        // Terms from SOP/Resume
        const terms = [
            "Empathy", "Algorithms", "Global Health", "HCI", "AI",
            "Community", "Scale", "Education", "Impact", "Data Science",
            "Rwanda", "Access", "Equity", "Design", "Machine Learning",
            "MIT", "Catlab", "Ganza Mwari"
        ];

        // Node class
        class Node {
            constructor(text) {
                this.text = text;
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow velocity
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = 3; // Small dot radius
                this.baseX = this.x;
                this.baseY = this.y;
            }

            update() {
                // Mouse interaction
                if (mouseRef.current.x != null) {
                    const dx = mouseRef.current.x - this.x;
                    const dy = mouseRef.current.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = 150;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 2; // Repel strength
                    const directionY = forceDirectionY * force * 2;

                    if (distance < maxDistance) {
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(244, 211, 94, 0.4)'; // Gold with opacity
                ctx.fill();

                ctx.font = '12px Inter, sans-serif';
                ctx.fillStyle = 'rgba(204, 214, 246, 0.3)'; // Slightly more visible for clicking
                ctx.fillText(this.text, this.x + 8, this.y + 4);
            }
        }

        nodesRef.current = terms.map(term => new Node(term));

        const drawEdges = () => {
            const maxDistance = 200;
            for (let i = 0; i < nodesRef.current.length; i++) {
                for (let j = i + 1; j < nodesRef.current.length; j++) {
                    const nodeA = nodesRef.current[i];
                    const nodeB = nodesRef.current[j];
                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(nodeA.x, nodeA.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        // Opacity based on distance
                        const opacity = 1 - distance / maxDistance;
                        ctx.strokeStyle = `rgba(136, 146, 176, ${ opacity * 0.15})`; // Low opacity edges
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            nodesRef.current.forEach(node => {
                node.update();
                node.draw();
            });

            drawEdges();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default BackgroundGraph;
```
