"use client"
import {
    Heading,
    Grid,
    Text,
    FlexProps,
    Flex
} from "@chakra-ui/react";
import { Section } from "../Section";
import React from 'react';
import { YMaps, Placemark } from "@pbe/react-yandex-maps";
import { Map as YandexMap } from "@pbe/react-yandex-maps";


export const Map = ({
    flexProps = { id: "" }
}: {
    flexProps?: FlexProps & { id: string };
}) => {
    return (
        <Section flexProps={flexProps}>


            <Grid gridTemplateRows="auto 300px" w="100%" h="100%" gap={2}>
                <div id='schedule' className='bg-schedule w-full bg-cover bg-center bg-no-repeat relative flex  text-brown'>
                    <div className='w-full h-full bg-whitealpha flex flex-col text-center items-center pb-[50px]'>
                        <p className='text-[30px] font-scriptorama mb-[60px] pt-[50px]'>Место проведения</p>
                        <div className='flex max-w-[540px] pl-[20px] pr-[20px]'>
                            <div className='ml-[40px]'>
                                <p className='text-[15px]'>Сосновый бор, гостиничный комплекс</p>
                                <p className='text-[15px]'>Улица Любимова, 3, Иваново Летняя площадка</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Flex w="100%" h="100%" borderRadius={6} overflow="hidden">
                    <YMaps>
                        <YandexMap
                            width="100%"
                            height="100%"
                            defaultState={{ center: [56.956993, 41.022060], zoom: 12 }}
                        >
                            <Placemark geometry={[56.956993, 41.022060]} options={{}} />
                        </YandexMap>
                    </YMaps>
                </Flex>
            </Grid>
        </Section>
    );
};

export default Map;