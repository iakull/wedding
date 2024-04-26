import React from 'react';
import { Form } from "../Questions/Form";

interface QuestionsProps {
    userId: string;
}
const Questions: React.FC<QuestionsProps> = ({ userId }) => {
    return (
        <div className='bg-[#417e77] rounded-[20px] p-[30px] w-full text-brown' >
            <Form />
        </div>
    );
};

export default Questions;