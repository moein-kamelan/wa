import React from 'react'

type InputContainerProps = {
children : React.ReactNode ;
text : string ;
textSize? : string ;
extraText? : string ;
}

function InputContainer({text , children , textSize , extraText} : InputContainerProps  ) {
  return (
      <div className='  mx-auto w-full '>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center pr-6 pl-11 py-5  bg-[#EEEEEE]/93 rounded-[20px]  gap-y-2 gap-x-4 '>
        <span className={`text-gray-black text-2xl w-fit ${textSize ? textSize : 'lg:text-[40px]'} text-nowrap relative  `}>{text}
          {extraText && <span className='absolute bottom-5/10 right-full  sm:right-8/10  sm:bottom-7/10 md:right-full md:bottom-4/10 text-lg xl:text-2xl'>{extraText}</span>}
        </span>

        <div className='justify-self-end'>
          {children}
        </div>
        </div>
    </div>
  )
}

export default InputContainer