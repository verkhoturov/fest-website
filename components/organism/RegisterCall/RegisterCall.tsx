'use client';
import Button from '@/components/ui/button/Button';
import { Register } from '@/components/organism/modal';
import { useState } from 'react';

export const RegisterCall = ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button className={className} onClick={() => setIsOpen(true)}>
                Register
            </Button>
            <Register isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
