'use client';

import { createPortal } from 'react-dom';
import { ReactNode, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Modal.module.scss';
import {useTransition} from "./useTransition";

interface CoreProps {
    isOpen: boolean;
    closed: () => void;
    children: ReactNode;
}


const Core = ({ isOpen, closed, children }: CoreProps) => {
    const { toggleOpen } = useTransition(isOpen);
    if (typeof document === 'undefined') return null;

    const portal = createPortal(
        <motion.div
            initial={{ opacity: !isOpen ? 1 : 0 }}
            animate={{ opacity: !isOpen ? 0 : 1 }}
            className={styles.core}
        >
            <div role="presentation" className={styles.code_over} onMouseDown={closed} />
            <motion.div
                initial={{ y: !isOpen ? 0 : '100%' }}
                animate={{ y: !isOpen ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
                className={styles.core_box}
            >
                <div className={styles.core_box_inner}>{children}</div>
                <button className={styles.close} onClick={closed}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 10L20 20M20 20L10 30M20 20L10 10M20 20L30 30" stroke="#252432" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </motion.div>
        </motion.div>,
        document.body,
    );

    return (
        <AnimatePresence>
            <>{toggleOpen && portal}</>
        </AnimatePresence>
    );
};

export default memo(Core);
