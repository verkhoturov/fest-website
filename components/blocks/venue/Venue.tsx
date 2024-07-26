'use client';

import {memo, useRef} from 'react';
import style from './Venue.module.scss';
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const images = [
    '/images/ven/1.png', '/images/ven/2.png', '/images/ven/3.png'
]

const Venue = () => {
    const swiperRef = useRef<any>(null)
    return (
        <div className={style.block}>
            <div className={style.head}>
                <button className={style.nav} onClick={() => swiperRef.current.slidePrev()}>
                    <Image src="/svg/to-left.svg" alt="" width={78} height={78}/>
                </button>
                <div className={style.content}>
                    <Title as="h2">Venue:</Title>
                    <Text>The festival will take place in one of the most picturesque and authentic places in Latvia,
                        Nurmuižas viesnīca</Text>
                    <Text>ADDRESS: Nurmuiža, Laucienes pag., Talsu nov., Lauciene.</Text>
                </div>
                <button className={style.nav} onClick={() => swiperRef.current.slideNext()}>
                    <Image src="/svg/to-right.svg" alt="" width={78} height={78}/>
                </button>
            </div>


            <div className={style.slider}>
                <Swiper
                    loop={true}
                    className={style.swiper}
                    spaceBetween={100}
                    slidesPerView={1}
                    centeredSlides
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >

                    {[...images, ...images].map((img: string) => (
                        <SwiperSlide className={style.slide}>
                            <Image src={img} alt="" width={732} height={551}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={style.reviews}>
                <Image src="/images/reviews.png" alt="" width={410} height={84}/>
            </div>
            <div className={style.d1}>
                <Image src="/svg/decor/v-d1.svg" alt="" width={28} height={28}/>
            </div>
            <div className={style.d2}>
                <Image src="/svg/decor/v-d2.svg" alt="" width={50} height={50}/>
            </div>
            <div className={style.d3}>
                <Image src="/svg/decor/v-d3.svg" alt="" width={20} height={20}/>
            </div>
            <div className={style.d4}>
                <Image src="/svg/decor/v-d4.svg" alt="" width={28} height={28}/>
            </div>
        </div>
    );
};

export default memo(Venue);