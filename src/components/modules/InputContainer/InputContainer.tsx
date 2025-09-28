import React from 'react'

type InputContainerProps = {
children : React.ReactNode ;
text : string ;
textSize? : string ;
extraText? : string ;
}

function InputContainer({text , children , textSize , extraText} : InputContainerProps  ) {
  return (
      <div className='mt-7.5  mx-auto w-full'>
        <div className='pr-6 pl-11 pt-[22px] pb-7.5 flex items-center justify-between bg-[#EEEEEE]/93 rounded-[20px] gap-4 max-md:flex-wrap'>
        <span className={`text-gray-black ${textSize ? textSize : 'text-[40px]'} text-nowrap relative  `}>{text}
          {extraText && <span className='absolute bottom-5/10 right-full  sm:right-8/10  sm:bottom-7/10 md:right-full md:bottom-4/10 text-lg xl:text-2xl'>{extraText}</span>}
        </span>
        {children}
        </div>
    </div>
  )
}

export default InputContainer