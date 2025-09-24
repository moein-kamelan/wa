import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (


    
    
    <div className="lg:flex hidden flex-col shrink-0 lg:max-w-[386px] grow max-h-screen overflow-y-auto">
      <div className="h-[38.8%] max-h-[440px]  lg:min-w-full- relative">
        <img
          src="/public/images/sidebar-shape.png"
          alt="sidebar-shape"
          className="h-full w-full"
        />
        <div className="absolute  top-[5.27vh] right-0 left-0 mx-auto text-center">
          <div className="rounded-full bg-[#F3F3F340]/75 lg:size-38  flex items-center justify-center mx-auto relative">
            <div className="bg-white rounded-full size-12 relative  -translate-y-2"></div>
            <svg
                className="absolute bottom-0 right-0 left-0 mx-auto"
                width="122"
                height="50"
                viewBox="0 0 130 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M130 24.5707C102 1.11927 48.9997 -16.3544 0 24.5707C23.4998 46.1829 37.9998 54 72.5 54C100.38 51.2518 114.503 43.4238 130 24.5707Z"
                  fill="#F3F3F3"
                />
              </svg>
          </div>

          <span className="mt-px mb-[10px] text-[24px] text-white block">User name</span>
          <span className="text-neutral-tertiary text-[22px]">واتساپ : منقضی شده</span>
        </div>
      </div>

      <div className="mt-[23px] mx-auto w-full px-8 **:lg:text-[26px] xl:**:text-3xl">
        <ul className=" overflow-y-auto  lg:max-h-[497px] [direction:ltr]  *:flex-row-reverse pr-2  [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-tertiary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]">
          <li className="flex  items-center justify-between  lg:h-[71px] border-[1.5px] border-neutral-primary px-4 rounded-[5px] ">
            <Link to={""} className="text-primary">ایجاد کمپین جدید</Link>
          </li>
          <li className="flex items-center justify-between  lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <span>کمپین ها</span>
            <img src="/public/images/sidebar-arrow.png" alt="sidebar-arrow" />
          </li>
          <li className="flex items-center justify-between  lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <span>گزارش ها</span>
            <img src="/public/images/sidebar-arrow.png" alt="sidebar-arrow" />
          </li>
          <li className="flex items-center justify-between  lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <span>قالب های پیام</span>
            <img src="/public/images/sidebar-arrow.png" alt="sidebar-arrow" />
          </li>
          <li className="flex items-center justify-between  lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <span>خرید و پرداخت</span>
            <img src="/public/images/sidebar-arrow.png" alt="sidebar-arrow" />
          </li>
             <li className="flex items-center justify-between  lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <Link to={""}>راهنما</Link>
          </li>
             <li className="flex items-center justify-between  lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <Link to={""}>خروج از حساب کاربری</Link>
          </li>
    
        </ul>

      </div>
    </div>
  );
}

export default Sidebar;
