import { memo } from 'react';
import classNames from 'classnames';
import styles from './Target.module.scss';
import Image from "next/image";


type TData = {
    id: number;
    href: string;
    icon: string;
}

type TargetProps = {
    className?: string;
    data: TData[];
    variant?: 'second';
}

const Target = ({ data, variant, className }: TargetProps) => {
    const cssClasses = classNames(styles.wrap, variant === 'second' && styles.second, className)

    const isSecond = variant === 'second';

    return (
        <div className={cssClasses}>
            {data.map((item: TData) => (
                <a key={item.id} href={item.href} target="_blank" rel="noreferrer noopener">
                    <Image src={'/svg/' + item.icon + '.svg'} alt="" width={isSecond ? 30 : 40} height={isSecond ? 30 : 40}/>
                </a>
            ))}
        </div>
    );
};

export default memo(Target);