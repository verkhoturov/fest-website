import { memo } from 'react';
import styles from './PersonalCard.module.scss';
import Image from "next/image";
import Title from "@/components/ui/title";
import classNames from "classnames";

interface SocData { id: number | string, icon: string, href: string }

interface Props {
    className?: string;
    data: {
        id: number | string;
        image: string;
        social: SocData[];
        name: string;
        description: string;
    }
}

const loadIcon = (type: string) => {
    return type === 'fb' ? '/svg/s-fb.svg' : type === 'in' ? '/svg/s-in.svg' : '';
}

export const PersonalCard = ({ className, data }: Props) => {
    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.image}>
                <Image src={data.image} alt="" width={225} height={260} />
                <div className={styles.soc}>
                    {data.social.map((item: SocData) => (
                        <a href={item.href} key={item.id} target="_blank">
                            <Image src={loadIcon(item.icon)} alt="" width={26} height={26}/>
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.body}>
                <Title as="h3" className={styles.title} dangerouslySetInnerHTML={{__html: data.name}} />
                <div className={styles.text} dangerouslySetInnerHTML={{__html: data.description}} />
            </div>
        </div>
    );
};

export default memo(PersonalCard)