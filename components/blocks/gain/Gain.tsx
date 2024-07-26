import { memo } from 'react';
import Title from "@/components/ui/title";
import styles from './Gain.module.scss';
import Text from "@/components/ui/text";
import Image from "next/image";

interface Model  {
    id: number;
    icon: string;
    text: string;
}

const data: Model[] = [
    { id: 1, icon: '/svg/gain/1.svg', text: 'Experience in co-designing an abundant future of conscious entrepreneurship ecosystem' },
    { id: 2, icon: '/svg/gain/2.svg', text: 'How to harmoniously integrate their business into this future, considering AI and Web4 trends' },
    { id: 3, icon: '/svg/gain/3.svg', text: 'How to build companies for the ages' },
    { id: 4, icon: '/svg/gain/4.svg', text: 'Body and breathing practices for relaxation and focus.' },
    { id: 5, icon: '/svg/gain/5.svg', text: 'Healthy holidays and outdoor activities.' },
    { id: 6, icon: '/svg/gain/6.svg', text: 'Networking in the company of successful entrepreneurs with similar values.' },
]

const Gain = () => {
    return (
        <div className={styles.block}>
            <Title as="h2">Participants will gain:</Title>

            <ul className={styles.list}>
                {data.map((item: Model) => (
                    <li key={item.id} className={styles.card}>
                        <Image src={item.icon} alt="" width={44} height={44}/>
                        <Text>{item.text}</Text>
                    </li>
                ))}
            </ul>
            <div className={styles.d1}>
                <Image src="/svg/decor/g-d1.svg" alt="" width={50} height={50}/>
            </div>
            <div className={styles.d2}>
                <Image src="/svg/decor/g-d2.svg" alt="" width={20} height={20}/>
            </div>
            <div className={styles.d3}>
                <Image src="/svg/decor/g-d3.svg" alt="" width={32} height={32}/>
            </div>

            <div className={styles.d4}>
                <Image src="/svg/decor/g-d3.svg" alt="" width={20} height={20}/>
            </div>
        </div>
    );
};

export default memo(Gain);