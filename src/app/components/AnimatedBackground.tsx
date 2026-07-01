import { motion } from "motion/react";

export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Glow */}
            <motion.div
                className="absolute w-96 h-96 rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212,175,55,.12), transparent 70%)",
                    top: "-120px",
                    left: "-120px",
                }}
                animate={{
                    x: [0, 80, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                }}
            />

            <motion.div
                className="absolute w-80 h-80 rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212,175,55,.08), transparent 70%)",
                    bottom: "-100px",
                    right: "-80px",
                }}
                animate={{
                    x: [0, -60, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                }}
            />

            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-accent/20"
                    style={{
                        width: 5,
                        height: 5,
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 4) * 18}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
    );
}