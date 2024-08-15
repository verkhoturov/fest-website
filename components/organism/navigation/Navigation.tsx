'use client';

import { memo } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import styles from './Navigation.module.scss';

interface Props {
    className?: string;
}

const Navigation = ({ className }: Props) => {
    const navClass = classNames(styles.nav, inter.className, className);

    return (
        <nav className={navClass}>
            <ul>
                <li>
                    <ScrollLink href="/#program" to="program" offset={-50} duration={500} smooth spy>
                        Program
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink href="/#speak" to="speak" offset={-50} duration={500} smooth spy>
                        Speakers
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink href="/#venue" to="venue" offset={-50} duration={500} smooth spy>
                        Venue
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink href="/#cost" to="cost" offset={-50} duration={500} smooth spy>
                        Cost
                    </ScrollLink>
                </li>
            </ul>
        </nav>
    );
};

export default memo(Navigation);
