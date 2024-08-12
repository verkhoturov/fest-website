'use client';

import {
    memo,
    ReactNode, // useState
} from 'react';
import styles from './ProgramCard.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

/*
const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 5V12M12 12V19M12 12H5M12 12H19"
            stroke="#252432"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
*/

interface Props {
    className?: string;
    isOpen: boolean;
    isMainDay?: boolean;
    data: {
        title: string;
        list: {
            desc: string | ReactNode;
            time: string;
        }[];
    };
}

const ProgramCard = ({
    className, // isOpen,
    data,
    isMainDay,
}: Props) => {
    // const [toggle, setToggle] = useState(isOpen || false);
    const cssClasses = classNames(styles.card, isMainDay ? styles.isMainDay : '', className);

    return (
        <div className={cssClasses}>
            <div
                className={classNames(
                    styles.head,
                    styles.open, // toggle && styles.open
                )}
                // onClick={() => setToggle(!toggle)}
            >
                <div className={styles.date}>
                    {data.title}

                    {isMainDay && (
                        <div className={styles.mainDayTitle}>
                            <Image src="/svg/decor/p-d6.svg" alt="" width={20} height={20} />
                            Main day
                        </div>
                    )}
                </div>
            </div>
            <div
                className={classNames(
                    styles.body, // !toggle && styles.hide
                )}
            >
                <div className={styles.col}>
                    <div className={styles.list}>
                        <ul>
                            {data.list.map(({ time, desc }, i) => (
                                <li key={i}>
                                    <span className={styles.text}>{time}</span>
                                    <span style={{ paddingTop: 2 }}>{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProgramCard);
