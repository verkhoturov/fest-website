
import { ElementType, HTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TextProps extends HTMLAttributes<HTMLParagraphElement | HTMLElement> {
    as?: ElementType;
    center?: boolean;
    size?: 14;
    isRaleway?: boolean;
}

const Text = (props: TextProps) => {
    const { as: Cmp = 'p', size, isRaleway, children, className, center, ...rest } = props;
    const cssClasses = classNames(
        styles.text,
        className,
        center && styles.center,
        !isRaleway && inter.className,
    );

    return (
        <Cmp className={cssClasses} {...rest}>
            {children}
        </Cmp>
    );
};

export default memo(Text);
