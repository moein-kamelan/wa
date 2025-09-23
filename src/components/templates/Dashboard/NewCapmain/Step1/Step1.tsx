import React from 'react'

function Step1({message , onMessageChange}) {
  return (

<div className='mx-auto w-[88%]'>
    <div>
           <div className=' h-[74.64%]  rounded-[20px] bg-[#EEEEEE] mt-8 pb-[42px] pt-6 overflow-y-auto'>
    <div className='w-[94%] mx-auto font-B-Nazanin '>
        <textarea value={message} onChange={e => onMessageChange(e.target.value)}  name="" id="" className='w-full h-[180px] text-[22px] bg-white rounded-[22px] outline-0 pr-[21px] pt-[29px] resize-none' ></textarea>
        <span className='text-semantic-accent text-[20px] mt-6 mb-3 mr-4 block'>پیش نمایش پیام</span>
 <textarea value={message}  name="" id="" className='w-full h-[180px] text-[22px] bg-neutral-tertiary text-black/60 rounded-[22px] outline-0 pr-[21px] pt-[29px] resize-none' readOnly></textarea>
    </div>
      </div>
    
    
</div>
<div className='flex items-center justify-end gap-15 mt-4'>
     <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>کد پیگیری</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>
     <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>تخفیف</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>

 <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>شرکت</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>

 <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>شماره</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>

    
</div>
<div className='flex items-center justify-end gap-15 mt-4'>
     <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>لینک</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>
     <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>تاریخ</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>

 <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>نام خانوادگی</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>

 <label className='flex items-center gap-1 w-[106px] justify-end '>
    <span>نام</span>
    <img src="/public/images/checkbox-checked.png" alt="checkbox" />
    <input type="checkbox"  className='hidden'/>
 </label>

    
</div>
    
</div>
    

  )
}

export default Step1