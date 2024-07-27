'use client';

import {
    memo, // useState
} from 'react';
import styles from './ProgramCard.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useScreenSize } from '@/utils';

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
        headDate: string;
        bodyDate: string;
        list: string;
    };
}

const ProgramCard = ({
    className, // isOpen,
    data,
    isMainDay,
}: Props) => {
    const { isTablet } = useScreenSize();
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
                <div
                    className={styles.text} // style={{ opacity: !toggle ? 0 : 1 }}
                >
                    {data.headDate}
                </div>
                <div className={styles.text}>{data.bodyDate}</div>
                {/* <div className={styles.icon} style={{ opacity: toggle ? 0 : 1 }}>
                    <PlusIcon />
                </div> */}
            </div>
            <div
                className={classNames(
                    styles.body, // !toggle && styles.hide
                )}
            >
                {!isTablet && <div className={styles.col}></div>}

                <div className={styles.col}>
                    <div className={styles.list} dangerouslySetInnerHTML={{ __html: data.list }} />
                </div>
            </div>
        </div>
    );
};

export default memo(ProgramCard);
