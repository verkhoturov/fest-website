'use client';

import { memo, useRef } from 'react';
import style from './Venue.module.scss';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import Image, { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from './images/1.png';
import img2 from './images/2.webp';
import img3 from './images/3.webp';
import img4 from './images/4.webp';
import img5 from './images/5.webp';
import img61 from './images/6.1.webp';
import img62 from './images/6.2.webp';
import img7 from './images/7.webp';
import img8 from './images/8.webp';
import img9 from './images/9.webp';
import img10 from './images/10.webp';
import img11 from './images/11.webp';
import img12 from './images/12.webp';
import img13 from './images/13.webp';
import img14 from './images/14.webp';
import img15 from './images/15.jpg';

const images: StaticImageData[] = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img61,
    img62,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
];

const Venue = () => {
    const swiperRef = useRef<any>(null);
    return (
        <div className={style.block} id="venue">
            <div className={style.head}>
                <button className={style.nav} onClick={() => swiperRef.current.slidePrev()}>
                    <Image src="/svg/to-left.svg" alt="" width={78} height={78} />
                </button>
                <div className={style.content}>
                    <Title as="h2">Venue:</Title>
                    <Text>
                        The festival will take place in one of the most picturesque and authentic
                        places in Latvia, Nurmuižas viesnīca
                    </Text>
                    <Text>ADDRESS: Nurmuiža, Laucienes pag., Talsu nov., Lauciene.</Text>
                </div>
                <button className={style.nav} onClick={() => swiperRef.current.slideNext()}>
                    <Image src="/svg/to-right.svg" alt="" width={78} height={78} />
                </button>
            </div>

            <div className={style.slider}>
                <Swiper
                    loop={true}
                    className={style.swiper}
                    spaceBetween={100}
                    slidesPerView={1}
                    centeredSlides
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i} className={style.slide}>
                            <Image src={img.src} alt="" width={732} height={551} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* <div className={style.reviews}>
                <Image src="./images/reviews.png" alt="" width={410} height={84} />
            </div> */}
            <div className={style.d1}>
                <Image src="/svg/decor/v-d1.svg" alt="" width={28} height={28} />
            </div>
            <div className={style.d2}>
                <Image src="/svg/decor/v-d2.svg" alt="" width={50} height={50} />
            </div>
            <div className={style.d3}>
                <Image src="/svg/decor/v-d3.svg" alt="" width={20} height={20} />
            </div>
            <div className={style.d4}>
                <Image src="/svg/decor/v-d4.svg" alt="" width={28} height={28} />
            </div>
        </div>
    );
};

export default memo(Venue);
