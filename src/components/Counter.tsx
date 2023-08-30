'use client'
import {motion, useMotionValue, useTransform, animate} from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
    from: number,
    to: number,
    duration?: number
}

export const Counter = ({ from, to, duration }: Props) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration: duration });
        return controls.stop;
    }, []);

    return <motion.p>{rounded}</motion.p>;
};