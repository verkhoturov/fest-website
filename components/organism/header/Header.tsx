'use client';

import { memo } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Target from '@/components/ui/target';
import Navigation from '@/components/organism/navigation';
import classNames from 'classnames';
import { useScreenSize } from '@/utils';

const target = [
    { id: 1, href: 'https://m.facebook.com/events/1433819980660964', icon: 'fb' },
    { id: 2, href: 'https://www.instagram.com/teal.horizon/', icon: 'inst' },
    { id: 3, href: 'https://www.youtube.com/@openprophet', icon: 'youtube' },
    { id: 4, href: 'https://t.me/tealhorizon', icon: 'tg' },
];

export const Header = () => {
    const { isMobile } = useScreenSize();
    return (
        <header className={styles.header}>
            <div className={classNames(styles.wrap, 'container')}>
                <Link href="/" className={styles.logo}>
                    <Image src="/images/logo.svg" alt="" width={150} height={40} />
                </Link>

                {!isMobile && (
                    <>
                        <Navigation />
                        <Target data={target} />
                    </>
                )}
            </div>
        </header>
    );
};

export default memo(Header);
