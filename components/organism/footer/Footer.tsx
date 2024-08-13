'use client';

import { memo } from 'react';
import styles from './Footer.module.scss';
import Navigation from '@/components/organism/navigation';
import Brands from '@/components/organism/brands';
import Target from '@/components/ui/target';
import Button from '@/components/ui/button';
import { RegisterCall } from '@/components/organism/RegisterCall';

const target = [
    { id: 1, href: 'https://m.facebook.com/events/1433819980660964', icon: 'fb' },
    { id: 2, href: 'https://www.instagram.com/teal.horizon/', icon: 'inst' },
    { id: 3, href: 'https://www.youtube.com/@openprophet', icon: 'youtube' },
    { id: 4, href: 'https://t.me/tealhorizon', icon: 'tg' },
];

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <Navigation className={styles.nav} />

                <div className={styles.contacts}>
                    <div className={styles.col}>
                        <h4>Eugene Pavlenko</h4>
                        <p>
                            WhatsApp/Telegram <a href="tel:37129435847">+371 29 435 847</a>
                        </p>
                        <a href="mailto:e.pavlenko@gmail.com">e.pavlenko@gmail.com</a>
                    </div>
                    <div className={styles.col}>
                        <h4>Lea Wedensky</h4>
                        <p>
                            WhatsApp/Telegram <a href="tel:972526480401">+972 526 480 401</a>
                        </p>
                        <a href="mailto:e.pavlenko@gmail.com">wedensky10@gmail.com</a>
                    </div>
                    <div className={styles.col}>
                        <RegisterCall />
                    </div>
                </div>

                <Target variant="second" className={styles.target} data={target} />
                <RegisterCall className={styles.btn_mob} />
                <Brands className={styles.brands} />
            </div>
        </footer>
    );
};

export default memo(Footer);
