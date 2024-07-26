import { useEffect, useState } from 'react';

const ms = 500;

export const useTransition = (isOpen: boolean) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let time = null;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.setProperty('--open-modal', `${window.innerWidth - document.documentElement.clientWidth}px`);
            return setOpen(true);
        }
        else {
            document.body.removeAttribute('style');
            time = setTimeout(() => setOpen(false), ms);
        }
        return () => clearTimeout(time);
    }, [isOpen, setOpen]);

    return {
        toggleOpen: open
    };
};
