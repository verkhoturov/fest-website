'use client';

import { memo } from 'react';
import styles from './Participation.module.scss';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import PriceCard from '@/components/organism/price-card';
import Image from 'next/image';
import classNames from 'classnames';
import { RegisterCall } from '@/components/organism/RegisterCall';

const FORM_LINK =
    'https://docs.google.com/forms/d/e/1FAIpQLSdxuYc2Ib0UgJCbe-1riKqp3UEz6NQIMDj7MF-7vOlaKLrkjQ/viewform';

const Participation = () => {
    return (
        <div className={styles.block} id="cost">
            <div className={styles.flex}>
                <div className={styles.col}>
                    <Title as="h2" className={styles.title}>
                        Participation <br /> Cost:
                    </Title>
                    <Text className={styles.text}>Participation with accommodation:</Text>
                    <p>
                        *The price includes accommodation in a double room at Nurmuža Hotel, meals,
                        participation in the programme
                    </p>
                </div>
                <div className={styles.col}>
                    <PriceCard price="€490" date="3 days 2 nights" href={FORM_LINK} />
                    <PriceCard price="€390" date="2 days 1 night" href={FORM_LINK} />
                    <PriceCard price="€290" date="1 day 1 night" href={FORM_LINK} />
                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.col}>
                    <Text className={styles.text}>Participation with no accommodation:</Text>
                    <p>*The price includes participation in the programme and meals</p>
                </div>
                <div className={styles.col}>
                    <PriceCard price="€290" date="3 days" href={FORM_LINK} />
                    <PriceCard price="€290" date="2 days" href={FORM_LINK} />
                    <PriceCard price="€180" date="main day" href={FORM_LINK} />
                    <PriceCard price="€100" date="first/last day" href={FORM_LINK} />
                </div>
            </div>

            <RegisterCall className={classNames(styles.btn, styles.btn_mob)} />

            <div className={styles.d1}>
                <Image src="/svg/decor/c-d1.svg" alt="" width={40} height={40} />
            </div>
            <div className={styles.d2}>
                <Image src="/svg/decor/c-d2.svg" alt="" width={20} height={20} />
            </div>
            <div className={styles.d3}>
                <Image src="/svg/decor/c-d3.svg" alt="" width={32} height={32} />
            </div>
            <div className={styles.d4}>
                <Image src="/svg/decor/c-d4.svg" alt="" width={20} height={20} />
            </div>
            <div className={styles.d5}>
                <Image src="/svg/decor/c-d4.svg" alt="" width={28} height={28} />
            </div>
        </div>
    );
};

export default memo(Participation);
