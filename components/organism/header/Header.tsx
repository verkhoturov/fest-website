import { memo } from 'react';
import styles from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import Target from "@/components/ui/target";
import Navigation from "@/components/organism/navigation";
import classNames from "classnames";

const target = [
    { id: 1, href: '/', icon: 'fb' },
    { id: 2, href: '/', icon: 'tg' },
    { id: 3, href: '/', icon: 'whp' },
]

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={classNames(styles.wrap, 'container')}>
                <Link href="/" className={styles.logo}>
                    <Image src="/images/logo.svg" alt="" width={150} height={40} />
                </Link>

                <Navigation />

                <Target data={target} />
            </div>
        </header>
    );
};

export default memo(Header);