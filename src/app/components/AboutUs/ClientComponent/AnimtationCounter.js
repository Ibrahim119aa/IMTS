"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimtationCounter = ({ num }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [counterAnimated, setCounterAnimated] = useState(false); // new state for counterAnimated
    const sectionRef = useRef(null);

    useEffect(() => {
        // Check localStorage in useEffect
        setCounterAnimated(localStorage.getItem('counterAnimated') === 'true');
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        localStorage.setItem('counterAnimated', 'true');
                    }
                });
            },
            {
                root: null, // viewport
                threshold: 0.1, // trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const { number } = useSpring({
        number: counterAnimated || isVisible ? num : 0,
        config: { duration: 2000 },
        from: { number: 0 },
    });

    return (
        <div>
            <span ref={sectionRef} className="h1color my-2">
                <animated.span style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                    {number.to((n) => Math.floor(n))}
                </animated.span>
                <span style={{ fontSize: '2.5rem', marginTop: '1rem' }}>+</span>
            </span>
        </div>
    );
};

export default AnimtationCounter;
