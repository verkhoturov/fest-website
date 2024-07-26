'use client';

import { memo, useState } from 'react';
import styles from './ProgramCard.module.scss';
import classNames from "classnames";
import Image from "next/image";

interface Props {
    className?: string;
    isOpen: boolean;
    data: {
        title: string;
        headDate: string;
        bodyDate: string;
        list: string;
    }
}

const ProgramCard = ({ className, isOpen, data }: Props) => {
    const [toggle, setToggle] = useState(isOpen || false)
    const cssClasses = classNames(styles.card, className);

    return (
        <div className={cssClasses}>
            <div className={classNames(styles.head, toggle && styles.open)} onClick={()=> setToggle(!toggle)}>
                <div className={styles.date}>{data.title}</div>
                <div className={styles.text} style={{ opacity: !toggle ? 0 : 1}}>{data.headDate}</div>
                <div className={styles.icon} style={{ opacity: toggle ? 0 : 1}}>
                    <Image src="/svg/plus.svg" alt="" width={24} height={24} />
                </div>
            </div>
            <div className={classNames(styles.body, !toggle && styles.hide)} >
                <div className={styles.col}></div>
                <div className={styles.col}>
                    <div className={styles.text}>{data.bodyDate}</div>
                </div>
                <div className={styles.col}>
                    <div className={styles.list} dangerouslySetInnerHTML={{__html: data.list}} />
                </div>
            </div>
        </div>
    );
};

export default memo(ProgramCard);