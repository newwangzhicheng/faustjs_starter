import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  title: string;
  bgImage: string;
  subTitle: string;
  overlappingBackImage: string;
  overlappingFrontImage: string;
}