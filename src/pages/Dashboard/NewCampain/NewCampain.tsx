import React, { useState } from 'react'
import Stepper from '../../../components/templates/Dashboard/NewCapmain/Stepper/Stepper'
import Step1 from '../../../components/templates/Dashboard/NewCapmain/Step1/Step1'
import StepMessage from '../../../components/modules/Dashboard/StepMessage/StepMessage'
import Step2 from '../../../components/templates/Dashboard/NewCapmain/Step2/Step2'
import Step3 from '../../../components/templates/Step3/Step3'
import StepButtons from '../../../components/modules/Dashboard/StepButtons/StepButtons'

function NewCampain() {
  const [message , setMessage] = useState("")
  const [step , setStep] = useState(1)
  const [step1Error , setStep1Error] = useState<null | string>(null)
  const isLastStep = step === 7
  const isFirstStep = step === 1
  const existError = step1Error !== null
  const [checkedVariables , setCheckedVaribale] = useState({
    firstName : false,
    lastName : false ,
    link : false , 
    date : false , 
    number : false , 
    company : false , 
    discount : false , 
    trackingCode : false , 
  })


    const handleNextClick = () => {
      if(message.trim() !== "") {
        setStep(s => s + 1)
      }else {
        setStep1Error("ابتدا پیام متنی کمپین خود را ایجاد کنید.")
        setTimeout(() => {
        setStep1Error(null)
          
        }, 3000);
      }
      


  }
  

  const handleSubmitClick = () => {
    
  }

  return (
    <div>
      <Stepper step={step}/>

      <div className='mr-[22px] max-lg:mr-[62px] ml-[57px] max-w-[93%]   '>
     <div className='rounded-2xl bg-white md:h-[79.5vh] overflow-y-auto pb-9  md:pb-10  relative'>
    {step1Error && <StepMessage status='error'>{step1Error}</StepMessage>}


      
       <button className={`  mt-2 mr-4 lg:mr-4.5 lg:mt-[11px] text-2xl/6 lg:text-[25px] w-[122px] h-[33px] lg:w-[136px] lg:h-10 text-white rounded-[55px] btn-shadow bg-semantic-error ${existError && "invisible"} ${isFirstStep ? "disabled:bg-transparent !text-gray-black !bg-neutral-tertiary border !border-gray-black   cursor-not-allowed" : ""}`}>حذف کمپین</button>

      
   
        {step === 1 && <Step1 message={message} onMessageChange={setMessage} checkedVariables={checkedVariables} onChangeCheckedVariables={setCheckedVaribale} />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
     </div>

    <StepButtons isFirstStep={isFirstStep} isLastStep={isLastStep} onNextClick={handleNextClick} onSubmitClick={handleSubmitClick} setStep={setStep}/>


      
      </div>
     

      
    </div>
  )
}

export default NewCampain