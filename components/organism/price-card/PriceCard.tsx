import { memo } from 'react';
import styles from './PriceCard.module.scss';
import Link from "next/link";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import {Inter} from "next/font/google";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

interface Props {
    href?: '';
    price: string;
    date: string;
}

const icon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L16 15M19 12L16 9" stroke="#252432" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
)

export const PriceCard = ({price, date, href}: Props) => {
    const card = href ? (
        <Link href={href} className={styles.card}>
            <Title as="h3" className={styles.price}>{price}</Title>
            <Text className={styles.text}>per person</Text>
            {icon}
        </Link>
    ) : (
        <div className={styles.card}>
            <Title as="h3" className={classNames(styles.price, inter.className)}>{price}</Title>
            <Text className={styles.text}>per person</Text>
            {icon}
        </div>
    );

    return (
        <div className={styles.wrap}>
            {card}
            <Title as="h5" className={styles.date}>{date}</Title>
        </div>
    );
};

export default memo(PriceCard);