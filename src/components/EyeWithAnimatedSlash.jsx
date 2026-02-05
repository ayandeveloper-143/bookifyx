import React, { useRef, useEffect } from "react";

export default function EyeWithAnimatedSlash({ showSlash }) {
    const slashRef = useRef(null);
    useEffect(() => {
        const slash = slashRef.current;
        if (!slash) return;
        // Animate strokeDashoffset
        let start = showSlash ? 26 : 0;
        let end = showSlash ? 0 : 26;
        slash.setAttribute("stroke-dasharray", 26);
        slash.setAttribute("stroke-dashoffset", start);
        slash.style.transition = "none";
        // Force reflow
        void slash.offsetWidth;
        slash.style.transition = "stroke-dashoffset 0.4s";
        slash.setAttribute("stroke-dashoffset", end);
    }, [showSlash]);
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C3.72 8.17 7.53 5.5 12 5.5C16.47 5.5 20.28 8.17 22 12C20.28 15.83 16.47 18.5 12 18.5C7.53 18.5 3.72 15.83 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <path
                ref={slashRef}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0 13h24"
                transform="rotate(45 12 12)"
                style={{ strokeDasharray: 26, strokeDashoffset: showSlash ? 0 : 26, transition: "stroke-dashoffset 0.4s" }}
            />
        </svg>
    );
}