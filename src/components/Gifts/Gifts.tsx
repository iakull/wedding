"use client"
import {
    Grid,
    FlexProps,
    Flex
} from "@chakra-ui/react";
import { Section } from "../Section";
import React from 'react';
import { YMaps, Placemark } from "@pbe/react-yandex-maps";
import { Map as YandexMap } from "@pbe/react-yandex-maps";

const Gifts = () => {
    return (
        <div id='schedule' className='bg-schedule w-full bg-cover bg-center bg-no-repeat relative flex text-brown'>
            <div className='w-full h-full bg-whitealpha flex flex-col text-center items-center pb-[50px]'>
                <p className='text-[30px] font-scriptorama mb-[60px] pt-[50px]'>Пожелания</p>
                <div className='flex max-w-[540px] pl-[20px] pr-[20px] w-[430px] justify-between'>
                    <div className='ml-[40px]'>
                        <p className='text-[15px]'>Приветствуем: позитивное
                            настроение, праздничный вид,
                            подарки в любой
                            конвертируемой валюте</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gifts;