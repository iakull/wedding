'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import photo from "../../../public/img/00.jpg";
import { Form } from "@/components/Questions/Form";
import { Box } from "@mui/material";

const Rsvp = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RsvpContent />
        </Suspense>
    );
};

const RsvpContent = () => {
    const searchParams = useSearchParams();
    const name1 = searchParams.get('name1');
    const name2 = searchParams.get('name2');
    const isSingleName = name1 && !name2;
    const [userid, setUserid] = useState('');

    return (
        <div id='rsvp' className='pt-[70px] pb-[70px] bg-rsvp w-full bg-[length:428px] flex flex-col items-center'>
            <div className='flex flex-col items-center max-w-[600px] bg-whitealpha p-[10px]'>
                <p className='font-comforta text-[27px] text-center mb-[20px] text-black'>
                    Дорогие родные, близкие и друзья!
                </p>
                <p className='font-comforta text-[20px] text-center mb-[20px] text-black'>
                    Мы рады пригласить Вас на свадебное торжество, которое состоится 09.08.2024
                </p>
                <p className='font-scriptorama text-brown text-[35px] mb-[20px]'>Ждём вас</p>
                <Image src={photo} alt='' width={440} height={380} className='rounded-[200px]' />
                <p id='approve'
                    className='text-center font-comforta text-[18px] max-w-[408px] mb-[20px] text-black'>Будем очень
                    благодарны, если при выборе нарядов на наше торжество Вы придержитесь следующей цветовой гаммы</p>
                <div className="flex mb-[60px]">
                    <div className="w-[50px] h-[50px] bg-[#BEC3C6] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#F2DDC6] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#FFD1DC] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#DCD0FF] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#9ACEEB] rounded-[50%] mr-[10px]"></div>
                    <div className="w-[50px] h-[50px] bg-[#9FE2BF] rounded-[50%]"></div>
                </div>
                <Box sx={{ width: "100%", backgroundColor: "white" }}>
                    <Form />
                </Box>
            </div>
        </div>
    );
};

export default Rsvp;
