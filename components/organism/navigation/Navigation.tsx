import { memo } from 'react';
import classNames from "classnames";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
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
                    <a href="#prog" className={styles.active}>Program</a>
                </li>
                <li>
                    <a href="#speak">Speakers</a>
                </li>
                <li>
                    <a href="#venue">Venue</a>
                </li>
                <li>
                    <a href="#cost">Cost</a>
                </li>
            </ul>
        </nav>
    );
};

export default memo(Navigation);