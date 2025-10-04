import React from 'react'

function Campaigns() {
  return (

    
      <div className=" bg-white   my-[84px] mx-8 h-[calc(100%-168px)] rounded-2xl py-[72px] px-4">


          <div className="relative   rounded-2xl border-[3px] border-secondary overflow-x-auto w-full max-h-[523px]   overflow-y-auto mx-auto">
            <table className="w-full  border-collapse text-center table-auto ">
              <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl 2xl:text-[32px] text-nowrap border-b-[3px] border-secondary">
                <tr>
                  <th scope="col" className=" border border-secondary">
                    <label className="flex items-center justify-center w-full h-full px-3   ">
                      <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                      <input type="checkbox" className="hidden" />
                    </label>
                  </th>
                  <th scope="col" className=" border border-secondary">
                    <button className="flex items-center  justify-evenly  w-full py-4  px-3">
                      <span>عنوان کمپین</span>

                      <svg
                        className="shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                          fill="#075E54"
                        />
                        <path
                          opacity="0.4"
                          d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                          fill="#075E54"
                        />
                      </svg>
                    </button>
                  </th>
                  <th scope="col" className="border border-secondary ">
                    <button className="flex items-center justify-evenly w-full py-4  px-3">
                      <span>پیام های ارسالی</span>

                      <svg
                        className="shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                          fill="#075E54"
                        />
                        <path
                          opacity="0.4"
                          d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                          fill="#075E54"
                        />
                      </svg>
                    </button>
                  </th>
                  <th scope="col" className="border border-secondary ">
                    <button className="flex items-center justify-evenly w-full py-4  px-3">
                      <span>تاریخ</span>

                      <svg
                        className="shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                          fill="#075E54"
                        />
                        <path
                          opacity="0.4"
                          d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                          fill="#075E54"
                        />
                      </svg>
                    </button>
                  </th>
                  <th scope="col" className=" border border-secondary">
                    <button className="flex items-center justify-evenly w-full py-4  px-3">
                      <span>وضعیت</span>

                      <svg
                        className="shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                          fill="#075E54"
                        />
                        <path
                          opacity="0.4"
                          d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                          fill="#075E54"
                        />
                      </svg>
                    </button>
                  </th>
                  <th scope="col" className=" border border-secondary">
                    <button className="flex items-center justify-evenly w-full py-4  px-3">
                      <span>عملیات</span>

                      <svg
                        className="shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                          fill="#075E54"
                        />
                        <path
                          opacity="0.4"
                          d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                          fill="#075E54"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2 ">
                  <td className="border border-secondary py-3 px-3">
                    <label className="flex items-center justify-center w-full h-full ">
                      <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                      <input type="checkbox" className="hidden" />
                    </label>
                  </td>
                  <td className="border border-secondary py-3 px-3 lg:text-2xl">
                    admin
                  </td>
                  <td className="border border-secondary py-3 px-3 lg:text-2xl">
                    علی محمدی
                  </td>
                  <td className="border border-secondary py-3 px-3 lg:text-2xl">
                    12/6
                  </td>
                  <td className="border border-secondary py-3 px-3">
                    <button className="bg-primary rounded-[55px] text-white  shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] w-34 h-8 max-w-40 lg:h-12 text-2xl lg:text-[32px]">
                      فعال
                    </button>
                  </td>
                  <td className="border border-secondary py-3 px-3">
                    <button className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-30 h-8 lg:w-[144px] lg:h-11">
                      مدیریت کاربر
                    </button>
                  </td>
                </tr>
                <tr className="p-2 ">
                  <td className="border border-secondary py-3">
                    <label className="flex items-center justify-center w-full h-full ">
                      <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                      <input type="checkbox" className="hidden" />
                    </label>
                  </td>
                  <td className="border border-secondary py-3 lg:text-2xl">
                    admin
                  </td>
                  <td className="border border-secondary py-3 lg:text-2xl">
                    علی محمدی
                  </td>
                  <td className="border border-secondary py-3 lg:text-2xl">
                    12/6
                  </td>
                  <td className="border border-secondary py-3">
                    <button className="bg-primary rounded-[55px] text-white  shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] w-34 h-8 max-w-40 lg:h-12 text-2xl lg:text-[32px]">
                      فعال
                    </button>
                  </td>
                  <td className="border border-secondary py-3">
                    <button className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-30 h-8 lg:w-[144px] lg:h-11">
                      مدیریت کاربر
                    </button>
                  </td>
                </tr>
                <tr className="p-2 ">
                  <td className="border border-secondary py-3">
                    <label className="flex items-center justify-center w-full h-full ">
                      <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                      <input type="checkbox" className="hidden" />
                    </label>
                  </td>
                  <td className="border border-secondary py-3 lg:text-2xl">
                    admin
                  </td>
                  <td className="border border-secondary py-3 lg:text-2xl">
                    علی محمدی
                  </td>
                  <td className="border border-secondary py-3 lg:text-2xl">
                    12/6
                  </td>
                  <td className="border border-secondary py-3">
                    <button className="bg-primary rounded-[55px] text-white  shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] w-34 h-8 max-w-40 lg:h-12 text-2xl lg:text-[32px]">
                      فعال
                    </button>
                  </td>
                  <td className="border border-secondary py-3">
                    <button className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-30 h-8 lg:w-[144px] lg:h-11">
                      مدیریت کاربر
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
        
        
      </div>
  
  )
}

export default Campaigns