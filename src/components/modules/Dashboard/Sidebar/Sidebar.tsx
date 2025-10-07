import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isReportsOptionsCollapse, setIsReportsOptionsCollapse] =
    useState({
      reports : true ,
      messageTemplates : true ,
      buyAndPayment : true
    });

  return (
    <div className="lg:flex hidden flex-col shrink-0 xl:max-w-[344px] 2xl:max-w-[386px]  max-h-screen overflow-y-auto">
      <div className="h-[38.8%] max-h-[440px]  lg:min-w-full- relative min-h-[300px]">
        <img
          src="/public/images/dashboard/new-campaign/sidebar-shape.png"
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

          <span className="mt-px mb-[10px] text-[24px] text-white block">
            User name
          </span>
          <span className="text-neutral-tertiary text-[22px]">
            واتساپ : منقضی شده
          </span>
        </div>
      </div>

      <div className="transition-all duration-500 mt-[23px] mx-auto w-full px-8 **:lg:text-[26px] xl:**:text-3xl">
        <ul
          className="   flex flex-col overflow-y-auto pr-2 lg:max-h-[497px]  [direction:ltr]  *:flex-row-reverse   [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-tertiary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]"
        >
          <li className="" onClick={() =>setIsReportsOptionsCollapse({
            reports : true ,
            buyAndPayment : true , 
            messageTemplates : true
          })}>
            <NavLink
              to={"/dashboard/new-campaign"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primary border-neutral-primary"
                    : "border-neutral-tertiary"
                } block text-right px-4 border-[1.5px]   rounded-[5px] py-4`
              }
            >
              ایجاد کمپین جدید
            </NavLink>
          </li>
          <li className="" onClick={() =>setIsReportsOptionsCollapse({
            reports : true ,
            buyAndPayment : true , 
            messageTemplates : true
          })}>
            <NavLink
              to={"/dashboard/campaigns"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primary border-neutral-primary"
                    : "border-neutral-tertiary"
                } block text-right px-4 border-[1.5px]   rounded-[5px] py-4`
              }
            >
              کمپین ها
            </NavLink>
          </li>
          <li
            className="    "
            onClick={() =>
              setIsReportsOptionsCollapse(i => ({messageTemplates : true , buyAndPayment : true , reports : !i.reports }))
            }
          >
            <NavLink
              to={"/dashboard/reports"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primary border-neutral-primary"
                    : "border-neutral-tertiary"
                } flex items-center justify-between  px-4 border-[1.5px]   rounded-[5px] py-4`
              }
            >
              <img
                className={`transition duration-500 ${
                  isReportsOptionsCollapse.reports ? "" : "rotate-180"
                }`}
                src="/public/images/dashboard/new-campaign/sidebar-arrow.png"
                alt="sidebar-arrow"
              />
              گزارش ها
            </NavLink>
          </li>

          <ul
            className={`transition-all duration-500    border-neutral-tertiary ${
              isReportsOptionsCollapse.reports
                ? "max-h-0  invisible opacity-0"
                : "max-h-[500px]  visible opacity-100 border-[1.5px]"
            }`}
          >
            <li className="w-full text-right">
              <NavLink
                to={"/dashboard/reports/all-campaigns"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-r-{rgba(29, 164, 80, 0.44)} bg-neutral-primary text-secondary"
                      : "border-r-neutral-tertiary text-gray-black"
                  } block  p-3  !text-xl border-r-6 `
                }
              >
                همه ی کمپین ها
              </NavLink>
            </li>
            <li className="w-full text-right">
              <NavLink
                to={"/dashboard/reports/active-campagins"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-r-{rgba(29, 164, 80, 0.44)} bg-neutral-primary text-secondary"
                      : "border-r-neutral-tertiary text-gray-black"
                  } block  p-3  !text-xl border-r-6 `
                }
              >
                فعال
              </NavLink>{" "}
            </li>
            <li className="w-full text-right">
              <NavLink
                to={"/dashboard/reports/inactive-campagins"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-r-{rgba(29, 164, 80, 0.44)} bg-neutral-primary text-secondary"
                      : "border-r-neutral-tertiary text-gray-black"
                  } block  p-3  !text-xl border-r-6 `
                }
              >
                غیر فعال
              </NavLink>{" "}
            </li>
            <li className="w-full text-right">
              <NavLink
                to={"/dashboard/reports/blocked-campagins"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-r-{rgba(29, 164, 80, 0.44)} bg-neutral-primary text-secondary"
                      : "border-r-neutral-tertiary text-gray-black"
                  } block  p-3  !text-xl border-r-6 `
                }
              >
                مسدود شده
              </NavLink>{" "}
            </li>
          </ul>

          <li className="flex items-center justify-between   border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <span>قالب های پیام</span>
            <img
              src="/public/images/dashboard/new-campaign/sidebar-arrow.png"
              alt="sidebar-arrow"
            />
          </li>
          <li className="flex items-center justify-between   border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
            <span>خرید و پرداخت</span>
            <img
              src="/public/images/dashboard/new-campaign/sidebar-arrow.png"
              alt="sidebar-arrow"
            />
          </li>
          <li className="    ">
            <NavLink
              to={"/dashboard/help"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primary border-neutral-primary"
                    : "border-neutral-tertiary"
                } block text-right px-4 border-[1.5px]   rounded-[5px] py-4`
              }
            >
              راهنما
            </NavLink>
          </li>
          <li className="    ">
            <button
              className={
                "w-full border-neutral-tertiary block text-right px-4 border-[1.5px]   rounded-[5px] py-4"
              }
            >
              خروج از حساب کاربری
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
