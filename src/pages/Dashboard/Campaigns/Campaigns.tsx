import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../../utils/axios'

function Campaigns() {
  useEffect(async () => {
    await axiosInstance.
  } , [])
  
  return (

    <div className='flex flex-col h-screen'>
       <div className="flex items-center justify-between pr-3 pl-11.5 mb-[92px]">
      <div className="relative">
        <svg
          width="389"
          height="126"
          viewBox="0 0 389 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1503_2003)">
            <path
              d="M2 -1.33514e-05C2 -8.83657 9.16344 -16 18 -16H192.5H367C375.837 -16 383 -8.83656 383 -9.53674e-07V75.5085C383 82.2002 378.844 88.2094 372.518 90.3925C267.053 126.792 147.795 127.757 13.4913 89.9593C6.66875 88.0392 2 81.7786 2 74.691V-1.33514e-05Z"
              fill="#075E54"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1503_2003"
              x="0"
              y="-16"
              width="389"
              height="142"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1503_2003"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1503_2003"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span className="absolute right-0 left-0 top-6 mx-auto text-5xl text-center text-white text-shadow-[2px_4px_4px_rgb(255,255,255,0.25)]">
          همه ی کمپین ها
        </span>
      </div>

      <Link
        to={"/dashboard/new-campaign"}
        className="block custom-btn py-3 px-5 text-[28px] "
        
      >
        + ایجاد کمپین
      </Link>
    </div>

    <div className='px-14 pb-10 flex flex-col gap-y-1.5 grow'>
      <div className='grow'>
        <div className='bg-white px-10.5 py-8 grid grid-cols-[60px_1fr_1fr_1fr_24px] items-center justify-center rounded-tl-[6px] rounded-tr-[6px] text-2xl'>
          <span>تست</span>
          <div className='flex items-center justify-center gap-x-1.5'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.98V15.5C22 19 20 20.5 17 20.5H7" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 16.5H8" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12.5H5" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <span>503/100</span>
          </div>

          <div className='flex items-center justify-center gap-x-1.5'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V5" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V5" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9.08984H20.5" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4898 19.0498H16.5098" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 17.5898V20.5798" stroke="#25D366" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 13.7002H12.0045" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 13.7002H8.30329" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 16.7002H8.30329" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <span>۱۴۰۳/۰۱/۰۲</span>
          </div>

                <svg className='justify-self-center' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 0C16.808 0 12.056 1.804 8.272 4.84C3.212 8.844 0 15.048 0 22C0 26.136 1.144 30.008 3.212 33.308C6.996 39.688 13.948 44 22 44C27.544 44 32.604 41.976 36.476 38.5C38.192 37.048 39.688 35.288 40.832 33.308C42.856 30.008 44 26.136 44 22C44 9.856 34.144 0 22 0ZM33.396 19.624L21.648 30.448C20.856 31.196 19.844 31.548 18.832 31.548C17.776 31.548 16.72 31.152 15.928 30.36L10.516 24.904C8.888 23.276 8.888 20.68 10.516 19.052C12.144 17.424 14.74 17.424 16.368 19.052L18.964 21.648L27.808 13.508C29.48 11.968 32.076 12.056 33.616 13.728C35.156 15.444 35.068 18.084 33.396 19.624Z" fill="#4CAF50"/>
</svg>


<svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#25D366" stroke-width="1.5"/>
<path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#25D366" stroke-width="1.5"/>
<path d="M12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          
          
        </div>
      </div>
      <div className='flex items-center bg-white/55 blur-[150] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mx-auto'>
      <svg className='rotate-y-180' width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1493_1722)">
<path opacity="0.4" d="M24.6815 19.5249L36.2544 28.2103V41.0666C36.2544 43.2666 33.5961 44.3666 32.0377 42.8082L20.1669 30.9374C18.2648 29.0353 18.2648 25.9416 20.1669 24.0395L24.6815 19.5249Z" fill="#25D366"/>
<path d="M36.2544 13.9334V28.2105L24.6815 19.5251L32.0377 12.1688C33.5961 10.6334 36.2544 11.7334 36.2544 13.9334Z" fill="#25D366"/>
</g>
<defs>
<filter id="filter0_d_1493_1722" x="-4" y="0" width="63" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1493_1722"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1493_1722" result="shape"/>
</filter>
</defs>
</svg>

<span className='text-secondary text-xl'>صفحه ۲ از ۵</span>
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1493_1722)">
<path opacity="0.4" d="M24.6815 19.5249L36.2544 28.2103V41.0666C36.2544 43.2666 33.5961 44.3666 32.0377 42.8082L20.1669 30.9374C18.2648 29.0353 18.2648 25.9416 20.1669 24.0395L24.6815 19.5249Z" fill="#25D366"/>
<path d="M36.2544 13.9334V28.2105L24.6815 19.5251L32.0377 12.1688C33.5961 10.6334 36.2544 11.7334 36.2544 13.9334Z" fill="#25D366"/>
</g>
<defs>
<filter id="filter0_d_1493_1722" x="-4" y="0" width="63" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1493_1722"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1493_1722" result="shape"/>
</filter>
</defs>
</svg>

      
      </div>



    </div>
    </div>
  
  )
}

export default Campaigns