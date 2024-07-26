'use client';

import {ButtonHTMLAttributes, memo} from 'react';
import classNames from "classnames";
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = ({ children,className, ...props }: Props) => {
    const btnClass = classNames(styles.btn, className);
    return (
        <button className={btnClass} {...props}>
            {children}
        </button>
    );
};

export default memo(Button);