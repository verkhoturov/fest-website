import { memo } from 'react';
import classNames from "classnames";
import styles from './Brands.module.scss';
import Image from "next/image";

interface Props {
    className?: string;
    isHero?: boolean;
}




const Brands = ({ className, isHero }: Props) => {
    const cssCLasses = classNames(
        className,
        styles.brands
    );


    const data = [
        {
            width: isHero ? 110 : 140,
            height: isHero ? 30 : 40,
            src: '/images/brands/brand-s-1.png',
        },
        {
            width: isHero ? 160 : 215,
            height: isHero ? 30 : 40,
            src: '/images/brands/brand-s-2.png',
        },
        {
            width: isHero ? 25 : 35,
            height: isHero ? 30 : 40,
            src: '/images/brands/brand-s-3.png',
        },
        {
            width: isHero ? 120 : 160,
            height: isHero ? 30 : 40,
            src: '/images/brands/brand-s-4.png',
        },
        {
            width: isHero ? 122 : 164,
            height: isHero ? 30 : 40,
            src: '/images/brands/brand-s-5.png',
        },
    ]

    return (
        <div className={cssCLasses}>
            {
                data.map((item: { width: number, height: number, src: string }, i: number) => (
                    <div key={i} className={styles.img}>
                        <Image src={item.src} alt="" width={item.width} height={item.height}  />
                    </div>
                ))
            }
        </div>
    );
};

export default memo(Brands);