import React, {useEffect} from "react";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {useInView} from "react-intersection-observer";
import useScrollDirection from "../hooks/useScrollDirection";

type Props = {
    from: number;
    to: number;
    duration?: number;
};

export const Counter = ({ from, to, duration }: Props) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const scrollDirection = useScrollDirection();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView && scrollDirection === 'down') {
            const controls = animate(count, to, { duration: duration });
            return controls.stop;
        }
    }, [inView]);

    return <motion.p ref={ref}>{rounded}</motion.p>;
};