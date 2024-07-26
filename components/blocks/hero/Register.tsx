'use client';

import styles from "@/components/blocks/hero/Hero.module.scss";
import Button from "@/components/ui/button/Button";
import {Register} from "@/components/organism/modal";
import {useState} from "react";

export const RegisterCall = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Button className={styles.btn} onClick={()=> setIsOpen(true)}>Register</Button>
            <Register isOpen={isOpen} onClose={()=> setIsOpen(false)} />
        </>
    )
}