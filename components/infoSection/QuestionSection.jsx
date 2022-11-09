import React from 'react'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { questions } from '../../utils/dumyQuestion'

function QuestionSection() {

    const [qTitle,setQTitle]=useState("")
  return (
    <div>
        <div className='md:grid md:grid-cols-2 container mx-auto font-sans'>
            <div className='text-xl font-bold text-center'>
               Frequently asked questions
            </div>
            <div className='p-4'>
                {
                    questions.map(q=>(
                        <div key={q.id} onClick={()=>setQTitle(qTitle===q.question?"":q.question)} className='py-2 group clicked'>
                            <div className='font-semibold flex justify-between cursor-pointer '><div>{q.question}</div>{qTitle===q.question?<MdKeyboardArrowDown className='font-normal text-2xl'/>:<MdKeyboardArrowUp className='font-normal text-2xl'/>}</div>
                            {qTitle===q.question&&<div className='text-sm text-customGray-200 py-2 '>{q.answer}</div>}
                            <div className='py-4 '>
                                <div className='w-full h-px bg-gray-400'></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default QuestionSection