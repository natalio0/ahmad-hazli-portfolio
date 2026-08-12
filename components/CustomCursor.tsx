"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      setVisible(true);

      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [data-cursor]")));
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);

    let frame: number;

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.16;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(
            ${mouse.current.x}px,
            ${mouse.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(
            ${ring.current.x}px,
            ${ring.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className={`
    pointer-events-none
    fixed
    left-0
    top-0
    z-[10000]
    hidden
    h-2
    w-2
    rounded-full
    bg-white
    md:block
    transition-opacity
    duration-150
    ease-out
    ${visible ? "opacity-100" : "opacity-0"}
  `}
      />

      {/* RING */}
      <div
        ref={ringRef}
        className={`
    pointer-events-none
    fixed
    left-0
    top-0
    z-[9999]
    hidden
    rounded-full
    border
    bg-white/[0.02]
    md:block
    will-change-transform
    transition-[width,height,border-color,background-color]
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${visible ? "opacity-100" : "opacity-0"}
    ${
      hovering
        ? "h-14 w-14 border-white/55 bg-white/[0.035]"
        : "h-9 w-9 border-white/25"
    }
    ${clicking ? "h-7 w-7 border-white/70 bg-white/[0.06]" : ""}
  `}
      />
    </>
  );
}
