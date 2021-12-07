import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";

const FAQCard = ({question, answer}) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={'my-4 text-left text-careerText'} style={{backgroundColor: '#f8f4f4'}}>
            <div className={'grid grid-cols-12 text-left border border-gray-200 text-base rounded-sm p-5 shadow-md'} onClick={()=>setOpen(!open)}>
                <div className={'col-span-11'}>
                    <p className={'ml-3 md:ml-8 font-medium'}>{question}</p>
                </div>
                <div className={'col-span-1 grid place-items-center'}>
                    {open ? <AiOutlineUp className={'h-5 w-5 md:mr-8'} /> : <AiOutlineDown className={'h-5 w-5 md:mr-8'} />}
                </div>
            </div>
            <div className={open ? 'block border border-gray-200 rounded-md ' : 'hidden'}   >
                <p className={'p-5 ml-3 md:ml-8 text-base font-medium'}>{answer}</p>
            </div>
        </div>
    );
}

export default FAQCard;
