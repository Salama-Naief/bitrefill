import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { paymentMethods } from '../../utils/dumyPayments'
import { Store } from '../../utils/Store'

function Payments() {
  const router=useRouter()
    const {state,dispatch}=useContext(Store)
  const {darkMode}=state

const handlePaymentMethod=(paymentItem)=>{
  dispatch({type:"ADD_PAYMENT_METHOD",payload:paymentItem})
  router.push("/checkout/checkoutId")
}
  return (

        <div  className='py-4'>
          <div className=' font-bold px-4'>choose Payment Method</div>
          <div className='md:flex md:flex-wrap '>
            {paymentMethods.map((paymentItem,index)=>(
                <div onClick={()=>handlePaymentMethod(paymentItem)} key={index} className=' w-full md:w-1/2 lg:w-1/3  p-2 '>
                  <div className=" justfy-between  p-2 cursor-pointer rounded shadow flex">
                  <div className='flex w-full items-center justify-between'>
                    <div className='flex items-center'>
                    <div >
                    <div  dangerouslySetInnerHTML={{__html:paymentItem.item}}/>
                    </div>
                        <div className='px-1'>
                        <div className={`${darkMode?"text-white":"text-main"} font-semibold text-xs white-space-nowrap`}>{paymentItem.name}</div>
                        <div className='text-customGray-200  text-xs'>{paymentItem.amount}</div>
                        </div>
                    </div>
                    <div className='text-white bg-secondary-100 rounded py-0.5 px-1 text-xs'>new</div>
                </div>
                </div>
            </div>
            ))}
          </div>
            
        </div>

  )
}

export default Payments