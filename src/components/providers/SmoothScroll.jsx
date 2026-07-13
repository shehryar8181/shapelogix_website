"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function LenisScrollTriggerBridge() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            lenis.off("scroll", ScrollTrigger.update);
        };
    }, [lenis]);

    return null;
}

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{
                autoRaf: false,
                lerp: 0.1,
                duration: 1.2,
            }}
        >
            <LenisScrollTriggerBridge />
            {children}
        </ReactLenis>
    );
}
