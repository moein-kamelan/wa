import React, { useState } from 'react'
import Stepper from '../../../components/templates/Dashboard/NewCapmain/Stepper/Stepper'
import Step1 from '../../../components/templates/Dashboard/NewCapmain/Step1/Step1'
 import { Formik, Form, Field, ErrorMessage } from "formik";
 import * as Yup from 'yup';

 
  const stepSchemas = [
  Yup.object({
    message: Yup.string().required("ابتدا پیام متنی کمپین خود را ایجاد کنید."),
  }),
 
];




function NewCampain() {

  

   const [step, setStep] = useState(1);
   const [message , setMessage] = useState("")

  const initialValues = { name: "", email: "" };
  const isLastStep = step === stepSchemas.length - 1;

  const handleSubmit = (value : any) => {
    console.log("value => " , value);
    
  }

  const handleNext = async (value : any , actions : any ) => {
    try {
      await stepSchemas[step].validate(value )
      setStep(prevStep => prevStep + 1)
      
    } catch (error : any) {
      
    }
    
  }
  

  return (

               <div>
      <Stepper/>

      <div className='mr-[22px] w-[93%]   '>
     <div className='rounded-2xl bg-white h-[79.5vh] overflow-y-auto pb-10'>
       <button className='mr-4.5 mt-[11px] text-[25px] w-[136px] h-10 text-white rounded-[55px] btn-shadow bg-semantic-error'>حذف کمپین</button>
    
    

       <Formik
      initialValues={initialValues}
      validationSchema={stepSchemas[step]} // این باعث میشه هر مرحله فقط فیلدهای خودش رو چک کنه
      onSubmit={(values, actions) => {
        if (isLastStep) {
          handleSubmit(values);
        } else {
          handleNext(values, actions);
        }
      }}
    >
      {() => (
        <Form className="">
        <Step1 message={message} onMessageChange={setMessage}/>          
        </Form>
    
      )}
    </Formik>
    

         </div>

     <div className='flex items-center justify-between mt-4'>
    <button className='text-white bg-btn-primary-normal hover:bg-btn-primary-hover active:bg-btn-primary-tapped w-[130px] h-10 rounded-[55px] text-[32px]/8 btn-shadow '>قبلی</button>
    <button className='text-white bg-btn-primary-normal hover:bg-btn-primary-hover active:bg-btn-primary-tapped w-[130px] h-10 rounded-[55px] text-[32px]/8 btn-shadow '>بعدی</button>
     </div>


      
      </div>
     

      
    </div>
   
  )
}

export default NewCampain