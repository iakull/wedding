import React from 'react';

const Schedule = () => {
    return (
        <div id='schedule' className='bg-schedule min-h-[400px] w-full bg-cover bg-center bg-no-repeat relative flex  text-brown'>
            <div className='w-full h-full bg-whitealpha flex flex-col text-center items-center pb-[50px]'>
                <p className='text-[30px] font-scriptorama mb-[60px] pt-[50px]'>Свадебное расписание</p>
                <div className='flex max-w-[540px] pl-[20px] pr-[20px] w-[330px] justify-between'>
                    <p className='font-comforta text-[14px] text-left'>15:30</p>
                    <div className='ml-[40px]'>
                        <p className='text-[15px]'>Сбор гостей, фуршет</p>
                    </div>
                </div>
                <div className='flex max-w-[540px] pt-[20px] pl-[20px] pr-[20px] w-[330px] justify-between'>
                    <p className='font-comforta text-[14px] text-left'>16:00
                    </p>
                    <div className='ml-[40px]'>
                        <p className='text-[15px]'>Торжественная регистрация</p>
                    </div>
                </div>
                <div className='flex max-w-[540px] pt-[20px] pl-[20px] pr-[20px] w-[330px] justify-between'>
                    <p className='font-comforta text-[14px] text-left'>17:00
                    </p>
                    <div className='ml-[40px]'>
                        <p className='text-left text-[15px]'>Банкет</p>
                    </div>
                </div>
                <div className='flex max-w-[540px] pt-[20px] pl-[20px] pr-[20px] w-[330px] justify-between'>
                    <p className='font-comforta text-[14px] text-left'>23:00
                    </p>
                    <div className='ml-[40px]'>
                        <p className='text-left text-[15px]'>Окончание</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;