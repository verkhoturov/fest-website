'use client';

import { memo } from 'react';
import styles from './Program.module.scss';
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import ProgramCard from "@/components/organism/program-card";
import Image from "next/image";

interface DataModel {
    id: number;
    title: string;
    headDate: string;
    bodyDate: string;
    list: string;
}

const data: DataModel[] = [
    {
        id: 1,
        title: '16 AUGUST',
        headDate: 'Check-in from 15.00',
        bodyDate: '16.30 start of the programme:',
        list: `
            <ul>
                <li>Welcome speech by the organisers</li>
                <li>Introduction of the rules of the festival</li>
                <li>Getting to know each other and creating a creative environment with the help of projective techniques. Themes: “Image of myself in the future”, “What kind of business of my dream I create”</li>
                <li>Dinner</li>
                <li>An evening of powerful stories</li>
                <li>Sound Healing session</li>
            </ul>
        `
    },
    {
        id: 2,
        title: '17 AUGUST',
        headDate: 'Check-in from 15.00',
        bodyDate: '16.30 start of the programme:',
        list: `
            <ul>
                <li>Welcome speech by the organisers</li>
                <li>Introduction of the rules of the festival</li>
                <li>Getting to know each other and creating a creative environment with the help of projective techniques. Themes: “Image of myself in the future”, “What kind of business of my dream I create”</li>
                <li>Dinner</li>
                <li>An evening of powerful stories</li>
                <li>Sound Healing session</li>
            </ul>
        `
    },
    {
        id: 3,
        title: '18 AUGUST',
        headDate: 'Check-in from 15.00',
        bodyDate: '16.30 start of the programme:',
        list: `
            <ul>
                <li>Welcome speech by the organisers</li>
                <li>Introduction of the rules of the festival</li>
                <li>Getting to know each other and creating a creative environment with the help of projective techniques. Themes: “Image of myself in the future”, “What kind of business of my dream I create”</li>
                <li>Dinner</li>
                <li>An evening of powerful stories</li>
                <li>Sound Healing session</li>
            </ul>
        `
    }
]

const Program = () => {
    return (
        <div className={styles.block}>
            <Title as="h2" className={styles.title}>Program:</Title>

            <div className={styles.content}>
                {data.map((item: DataModel, i: number) => (
                    <ProgramCard data={item} key={item.id} isOpen={i === 0}/>
                ))}
            </div>
            <Button className={styles.btn} onClick={console.log}>Register</Button>


            <div className={styles.d1}>
                <Image src="/svg/decor/p-d1.svg" alt="" width={60} height={60}/>
            </div>
            <div className={styles.d2}>
                <Image src="/svg/decor/p-d2.svg" alt="" width={20} height={20}/>
            </div>
            <div className={styles.d3}>
                <Image src="/svg/decor/p-d3.svg" alt="" width={60} height={60}/>
            </div>
            <div className={styles.d4}>
                <Image src="/svg/decor/p-d4.svg" alt="" width={20} height={20}/>
            </div>
            <div className={styles.d5}>
                <Image src="/svg/decor/p-d5.svg" alt="" width={26} height={26}/>
            </div>
            <div className={styles.d6}>
                <Image src="/svg/decor/p-d6.svg" alt="" width={20} height={20}/>
            </div>
        </div>
    );
};

export default memo(Program)