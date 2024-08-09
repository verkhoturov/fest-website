'use client';

import { memo } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import Brands from '@/components/organism/brands';
import { RegisterCall } from '@/components/organism/RegisterCall';

const PlaceholderIcon = () => (
    <svg
        width="168"
        height="168"
        viewBox="0 0 168 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M63.6372 134.456C63.6372 151.325 49.9621 165 33.093 165C16.224 165 2.54883 151.325 2.54883 134.456C2.54883 117.587 16.224 103.912 33.093 103.912C49.9621 103.912 63.6372 117.587 63.6372 134.456Z"
            stroke="#EDFDF9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M75.0651 8.30659C78.9239 1.23114 89.0829 1.23114 92.9416 8.30659L97.5487 16.7528C99.0128 19.4379 101.606 21.3225 104.613 21.8854L114.069 23.6563C121.99 25.1397 125.13 34.802 119.593 40.6584L112.984 47.6492C110.882 49.8717 109.892 52.9209 110.286 55.954L111.524 65.4942C112.56 73.4866 104.342 79.459 97.061 76.0024L88.3691 71.8769C85.6069 70.5655 82.3998 70.5655 79.6376 71.8769L70.9457 76.0024C63.665 79.459 55.4462 73.4866 56.4833 65.4952L57.7213 55.954C58.1148 52.9209 57.1241 49.8717 55.023 47.6492L48.4135 40.6584C42.8768 34.802 46.0162 25.1397 53.9378 23.6563L63.3941 21.8854C66.4008 21.3225 68.994 19.4379 70.458 16.7528L75.0651 8.30659Z"
            stroke="#EDFDF9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M104.363 103.912H165.452V165H104.363V103.912Z"
            stroke="#EDFDF9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Hero = () => {
    return (
        <div style={{ position: 'relative' }}>
            <div className={styles.d1}>
                <Image src="/svg/decor/h-d1.svg" alt="" width={60} height={60} />
            </div>
            <div className={styles.d2}>
                <Image src="/svg/decor/h-d2.svg" alt="" width={20} height={20} />
            </div>

            <div className={styles.hero}>
                <div className={styles.content}>
                    <Title as="h4" className={styles.supTitle}>
                        Festival of
                    </Title>
                    <Title className={styles.title}>
                        Conscious Entrepreneurship
                        <br />
                        Visionaries
                    </Title>
                    <div className={styles.flex}>
                        <RegisterCall className={styles.btn} />
                        <Text isRaleway className={styles.date}>
                            16-18 august | Nurmuižas viesnīca
                        </Text>
                    </div>

                    <Brands isHero className={styles.brands} />
                </div>

                <div className={styles.img}>
                    <Image
                        src="/images/hero.png"
                        alt=""
                        width={1920}
                        height={785}
                        className={styles.desk}
                    />
                    <Image
                        src="/images/hero-m.png"
                        alt=""
                        width={375}
                        height={444}
                        className={styles.mob}
                    />

                    <Brands isHero className={styles.brands} />
                </div>
            </div>

            <div className={styles.misson}>
                <div className={styles.wrap}>
                    <div className={styles.col}>
                        <Title as="h2">Mission:</Title>
                        <Title as="h4">
                            Unite awakened leaders and channel their energy into the evolution
                            <br />
                            of collective consciousness - shared worldview that allows to
                        </Title>

                        <ul>
                            <li>Relax and be in the moment</li>
                            <li>Care for an abundant future for self, society and nature</li>
                            <li>Demonstrate desired behaviour rather than struggle</li>
                        </ul>
                    </div>
                    <div className={styles.play}>
                        <PlaceholderIcon />
                        {/*  <Image src="/svg/play.svg" alt="" width={116} height={116} />
                        <Title as="h4">watch the teaser (coming soon)</Title> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Hero);
