import { memo } from 'react';
import styles from './Participation.module.scss';
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import PriceCard from "@/components/organism/price-card";
import Image from "next/image";

const Participation = () => {
    return (
        <div className={styles.block}>
            <div className={styles.flex}>
                <div className={styles.col}>
                    <Title as="h2" className={styles.title}>Participation <br/> Cost:</Title>
                    <Text className={styles.text}>The price includes accommodation in a double room at Nurmuža Hotel,
                        meals, participation in the programme.</Text>
                    <Button className={styles.btn}>Register</Button>
                </div>
                <div className={styles.col}>
                    <PriceCard price="€460" date="if paid by the end of July 2024"/>
                    <PriceCard price="€460" date="if paid from 1 August"/>
                </div>
            </div>

            <div className={styles.d1}>
                <Image src="/svg/decor/c-d1.svg" alt="" width={40} height={40}/>
            </div>
            <div className={styles.d2}>
                <Image src="/svg/decor/c-d2.svg" alt="" width={20} height={20}/>
            </div>
            <div className={styles.d3}>
                <Image src="/svg/decor/c-d3.svg" alt="" width={32} height={32}/>
            </div>
            <div className={styles.d4}>
                <Image src="/svg/decor/c-d4.svg" alt="" width={20} height={20}/>
            </div>
            <div className={styles.d5}>
                <Image src="/svg/decor/c-d4.svg" alt="" width={28} height={28}/>
            </div>
        </div>
    );
};

export default memo(Participation)