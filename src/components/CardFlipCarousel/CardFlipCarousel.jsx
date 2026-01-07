import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import './CardFlipCarousel.css';

export const FlipCard = forwardRef(({ customClass, ...rest }, ref) => (
    <div ref={ref} {...rest} className={`flip-carousel-card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
FlipCard.displayName = 'FlipCard';

const CardFlipCarousel = ({
    width = 400,
    height = 300,
    radius = 300,
    delay = 4000,
    pauseOnHover = true,
    onCardClick,
    rotationSpeed = 1.5,
    flipDuration = 0.8,
    children
}) => {
    const childArr = useMemo(() => Children.toArray(children), [children]);
    const refs = useMemo(
        () => childArr.map(() => React.createRef()),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [childArr.length]
    );

    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const intervalRef = useRef();
    const tlRef = useRef(null);

    const total = childArr.length;
    const angleStep = 360 / total;

    // Position cards in a circle
    const positionCards = (startAngle = 0) => {
        refs.forEach((ref, i) => {
            if (!ref.current) return;
            
            const angle = startAngle + (i * angleStep);
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * radius;
            const z = Math.sin(radian) * radius;
            const rotationY = angle + 90;
            
            gsap.set(ref.current, {
                x: x,
                z: z,
                rotationY: rotationY,
                transformOrigin: 'center center',
                force3D: true
            });
        });
    };

    // Rotate carousel to next position
    const rotateCarousel = () => {
        if (total < 2) return;

        const nextIndex = (currentIndex + 1) % total;
        const rotationAngle = -angleStep;
        
        const tl = gsap.timeline();
        tlRef.current = tl;

        // Rotate all cards
        refs.forEach((ref, i) => {
            if (!ref.current) return;
            
            // Add flip animation to the card coming to front
            if (i === nextIndex) {
                tl.to(ref.current, {
                    rotationX: 360,
                    duration: flipDuration,
                    ease: 'power2.inOut'
                }, 0);
            }
            
            tl.to(ref.current, {
                rotationY: `+=${rotationAngle}`,
                duration: rotationSpeed,
                ease: 'power2.inOut'
            }, 0);
        });

        // Update current index
        tl.call(() => {
            setCurrentIndex(nextIndex);
        });
    };

    // Initialize carousel
    useEffect(() => {
        if (refs.length === 0) return;

        positionCards();
        
        // Start auto-rotation
        intervalRef.current = setInterval(rotateCarousel, delay);

        // Pause on hover functionality
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            
            const handleMouseEnter = () => {
                if (tlRef.current) tlRef.current.pause();
                clearInterval(intervalRef.current);
            };
            
            const handleMouseLeave = () => {
                if (tlRef.current) tlRef.current.play();
                intervalRef.current = setInterval(rotateCarousel, delay);
            };

            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                clearInterval(intervalRef.current);
            };
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [refs.length, delay, pauseOnHover, radius, angleStep, rotationSpeed, flipDuration]);

    // Manual navigation
    const goToCard = (index) => {
        if (index === currentIndex) return;
        
        const diff = index - currentIndex;
        const rotationAngle = -diff * angleStep;
        
        const tl = gsap.timeline();
        tlRef.current = tl;

        refs.forEach((ref) => {
            if (!ref.current) return;
            
            tl.to(ref.current, {
                rotationY: `+=${rotationAngle}`,
                duration: rotationSpeed,
                ease: 'power2.inOut'
            }, 0);
        });

        // Add flip to target card
        if (refs[index]?.current) {
            tl.to(refs[index].current, {
                rotationX: 360,
                duration: flipDuration,
                ease: 'power2.inOut'
            }, 0);
        }

        setCurrentIndex(index);
    };

    const rendered = childArr.map((child, i) =>
        isValidElement(child)
            ? cloneElement(child, {
                key: i,
                ref: refs[i],
                style: { 
                    width, 
                    height, 
                    ...(child.props.style ?? {}) 
                },
                onClick: (e) => {
                    child.props.onClick?.(e);
                    onCardClick?.(i);
                    goToCard(i);
                }
            })
            : child
    );

    return (
        <div className="flip-carousel-wrapper">
            <div 
                ref={containerRef} 
                className="flip-carousel-container" 
                style={{ 
                    width: width * 2, 
                    height: height * 2,
                    perspective: '1000px'
                }}
            >
                <div className="flip-carousel-scene">
                    {rendered}
                </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flip-carousel-nav">
                {childArr.map((_, i) => (
                    <button
                        key={i}
                        className={`nav-dot ${i === currentIndex ? 'active' : ''}`}
                        onClick={() => goToCard(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardFlipCarousel;