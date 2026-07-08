"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css"; // Crucial to prevent layout jitters

// Register the plugin immediately
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // 1. Sync Lenis frames with GSAP's global ticker
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        // 2. Prevent scroll lag/jumping when switching browser tabs
        gsap.ticker.lagSmoothing(0);

        // 3. Clean up the ticker loop when the component unmounts
        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{
                autoRaf: false,     // Hand control over to GSAP
                lerp: 0.1,          // Inertia/smoothness (0.1 is standard)
                duration: 1.2       // Scroll duration in seconds
            }}
        >
            {children}
        </ReactLenis>
    );
}