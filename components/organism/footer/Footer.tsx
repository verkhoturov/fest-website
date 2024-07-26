import { memo } from 'react';
import styles from './Footer.module.scss';
import Navigation from "@/components/organism/navigation";
import Brands from "@/components/organism/brands";
import Target from "@/components/ui/target";
import Button from "@/components/ui/button";

const target = [
    { id: 1, href: '/', icon: 'fb' },
    { id: 2, href: '/', icon: 'tg' },
    { id: 3, href: '/', icon: 'whp' },
]


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <Navigation className={styles.nav} />

                <div className={styles.contacts}>
                    <div className={styles.col}>
                        <h4>Eugene Pavlenko</h4>
                        <p>WhatsApp/Telegram <a href="tel:37129435847">+371 29 435 847</a></p>
                        <a href="mailto:e.pavlenko@gmail.com">e.pavlenko@gmail.com</a>
                    </div>
                    <div className={styles.col}>
                        <h4>Lea Wedensky</h4>
                        <p>WhatsApp/Telegram <a href="tel:972526480401">+972 526 480 401</a></p>
                        <a href="mailto:e.pavlenko@gmail.com">wedensky10@gmail.com</a>
                    </div>
                    <div className={styles.col}>
                        <Button>Register</Button>
                    </div>
                </div>

                <Target variant="second" className={styles.target} data={target} />
                <Brands className={styles.brands} />
            </div>
        </footer>
    );
};

export default memo(Footer)