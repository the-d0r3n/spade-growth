import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';// Import Swiper styles
import atlantic from '../../images/logos/atlantic.png';
import def_jam from '../../images/logos/def_jam.png';
import empire from '../../images/logos/empire.png';
import everybody from '../../images/logos/everybody.png';
import interscope from '../../images/logos/interscope.png';
import universal from '../../images/logos/universal.png';
import warner from '../../images/logos/warner.png';
import { Image } from 'next/dist/client/image-component';
import { Autoplay} from 'swiper/modules';
import useMediaQuery from "../../hooks/useMediaQuery";

const PartnersBanner = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const swiperElRef = useRef(null);

    useEffect(() => {
        const swiper = swiperElRef.current.swiper;

        // Listen for Swiper events
        swiper.on('slideChange', () => {
            console.log('Slide changed');
        });

        swiper.on('progress', (progress) => {
            console.log('Slide progress:', progress);
        });
    }, []);

    return (
        <div className="my-24" style={{ height: '5vh' }}>
            <Swiper
                ref={swiperElRef}
                spaceBetween={isMobile ? 30 : 20}
                slidesPerView={isMobile ? 3 : 6}
                navigation={false}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                speed={3000}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={interscope} alt="interscope" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={universal} alt="universal" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={def_jam} alt="def_jam" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={empire} alt="empire" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='mx-auto' priority src={atlantic} alt="atlantic" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={everybody} alt="everybody" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={warner} alt="warner" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={interscope} alt="interscope" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={universal} alt="universal" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={def_jam} alt="def_jam" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={empire} alt="empire" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='mx-auto' priority src={atlantic} alt="atlantic" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={everybody} alt="everybody" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={warner} alt="warner" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={interscope} alt="interscope" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={universal} alt="universal" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={def_jam} alt="def_jam" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={empire} alt="empire" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='mx-auto' priority src={atlantic} alt="atlantic" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={everybody} alt="everybody" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  className='mx-auto' priority src={warner} alt="warner" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default PartnersBanner;
