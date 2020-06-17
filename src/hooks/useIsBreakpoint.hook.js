import React, { useState, useEffect, useCallback } from 'react';

export default function useIsBreakpoint() {
    //const [isMobileView, setIsMobileView] = useState(typeof window !== 'undefined' ? window.getComputedStyle(document.body, '::before').content.replace(/\"/g, '') : 'large');
    const [isMobileView, setIsMobileView] = useState();

    const checkWidth = () => {
        setIsMobileView(window.getComputedStyle(document.body, '::before').content.replace(/\"/g, ''));
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        checkWidth();
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.addEventListener('resize', checkWidth);

        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    }, [isMobileView]);

    return isMobileView;
}
