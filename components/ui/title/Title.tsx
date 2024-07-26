import { ElementType, HTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import styles from './Title.module.scss';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement | HTMLElement> {
    as?: ElementType;
    center?: boolean;
    size?: 24
}

const Title = (props: TitleProps) => {
    const { as: Cmp = 'h1', size, children, className, center, ...rest } = props;
    const cssClasses = classNames(
        styles.title,
        className,
        size === 24 && styles.s24,
        center && styles.center
    );

    return (
        <Cmp className={cssClasses} {...rest}>
            {children}
        </Cmp>
    );
};

export default memo(Title);
