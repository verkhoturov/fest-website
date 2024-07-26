import { memo } from 'react';
import Image from "next/image";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import styles from './Symbols.module.scss';

const Symbols = () => {
    return (
        <div className={styles.block}>
            <div className={styles.flex}>
                <div className={styles.col}>
                    <Title as="h2" className={styles.title}>
                        Symbols <br/>of the Festival:
                    </Title>
                    <Text className={styles.text}>The symbols of your entrepreneurial journey will be the panther and the eagle.</Text>
                    <Text className={styles.text}>
                        The panther has confidence, latent strength and flexibility, it symbolises the ability to adapt to changing environmental conditions and find hidden opportunities. It also symbolises the transition to a new world.
                    </Text>
                    <Text className={styles.text}>
                        The eagle represents vision, height of flight and a wide view and foresight, it reminds us of the importance of strategic thinking and foresight.
                    </Text>
                    <Text className={styles.text}>
                        At our festival, these two symbols will guide you. As the panther, you will learn to adapt and act decisively in difficult situations. Like the eagle, you will learn to see the overall direction and strategically plan for the future of your business in an overall unidirectional creative environment.
                    </Text>
                    <Text className={styles.text}>
                        Together, these qualities will help us create a harmonious and successful entrepreneurial world. Join us at this unique festival and become part of a community that builds a future based on awareness and collective evolution.
                    </Text>
                </div>
                <div className={styles.col}>
                    <Image src="/images/fest-art.png" alt="" width={685} height={615} loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default memo(Symbols);