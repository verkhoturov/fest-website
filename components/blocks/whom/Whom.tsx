import { memo } from 'react';
import Title from "@/components/ui/title";
import styles from './Whom.module.scss';
import Text from "@/components/ui/text";
import Image from "next/image";

const Whom = () => {
    return (
        <div className={styles.block}>
            <Title as="h2" className={styles.title}>For Whom:</Title>
            <Text className={styles.text}>Entrepreneurs, investors, community leaders <br/> and executives:</Text>

            <div className={styles.list}>
                <div className={styles.logo}>
                    <Image src="/svg/logo-2.svg" alt="" width={86} height={86}/>
                </div>
                <div className={styles.card}>
                    <Title as="h4">
                        Who seeks to combine business and spiritual development
                    </Title>
                </div>
                <div className={styles.card}>
                    <Title as="h4">
                        Who seeks to combine business and spiritual development
                    </Title>
                </div>
                <div className={styles.card}>
                    <Title as="h4">
                        Who seeks to combine business and spiritual development
                    </Title>
                </div>
            </div>

            <div className={styles.d1}>
                <Image src="/svg/decor/w-d1.svg" alt="" width={28} height={28}/>
            </div>
            <div className={styles.d2}>
                <Image src="/svg/decor/w-d2.svg" alt="" width={40} height={40}/>
            </div>
            <div className={styles.d3}>
                <Image src="/svg/decor/w-d3.svg" alt="" width={60} height={60}/>
            </div>
            <div className={styles.d4}>
                <Image src="/svg/decor/w-d4.svg" alt="" width={26} height={26}/>
            </div>
            <div className={styles.d5}>
                <Image src="/svg/decor/w-d5.svg" alt="" width={80} height={80}/>
            </div>
        </div>
    );
};

export default memo(Whom);