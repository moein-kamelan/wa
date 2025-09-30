import React, { useState } from "react";
import { axiosInstance } from "../../../../../utils/axios";

type Step4Props = {
  setErrorMessage : (value: string) => void
}


function Step4({setErrorMessage} : Step4Props) {
  const [uploadedFileCount , setUploadedFileCount] = useState<number>(0)
  const [totlaFile , setTotlaFile] = useState<number>(0)
  const handeFileChange = async(e : React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const files = Array.from(e.target.files)
    setTotlaFile(files.length)
    console.log('files:', files)


    if(files.length > 15) {
      console.log("its not valid");
      return
      
    }

    try {
      for (let i = 0 ; i < files.length ; i++) {

            const formData = new FormData()
    formData.append("attachment" , e.target.files[i])
      
     const response = await axiosInstance.post("/api/campaigns/68da78982bacae83154b71f2/attachment" , formData , {
        headers : {
          Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTIxMTAyNCwiZXhwIjoxNzYxODAzMDI0fQ.vaR2NHlnVv9Q3d-sSfh5dF_VKncFFZjxE3QROGpKoXk`,
          "Content-Type" : "multipart/form-data"
        }
        
      })
console.log("response => " , response);

      setUploadedFileCount(u => u + 1)
        
        
        
      }


      
      
    } catch (error ) {
      console.log('error:', error)
      setErrorMessage("اپلود فایل با مشکل مواجه شده")
      
    }


    
    
  }
  return (
    <div className="mx-auto w-[88%] ">
      <div className="  flex flex-col px-10 md:px-20 lg:px-30 xl:px-35 rounded-[20px] bg-[#EEEEEE] mt-6.5 lg:mt-8   overflow-y-auto pt-4 md:pt-12  min-h-[520px]  ">
        <label className="shrink-0 bg-[#f8f7f7] border border-[#CFCFCF] border-dashed rounded-2xl   flex flex-col items-center justify-center  cursor-pointer mb-1 md:mb-5 px-6 md:px-12 py-4">
          <input type="file" className="hidden"  multiple  onChange={handeFileChange}/>

          <svg
            className=" size-28 md:size-34 shrink-0"
            viewBox="0 0 193 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.6556 129.901L67.6556 137.031C67.6556 150.82 78.8515 162.015 92.6695 162.045"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M96.8535 120.385L96.8535 134.939C96.8535 143.012 103.365 149.523 111.438 149.523C119.51 149.523 126.022 143.012 126.022 134.939L126.022 112.017C126.022 95.9307 112.94 82.8492 96.8535 82.8492C80.7668 82.8492 67.6853 95.9307 67.6853 112.017"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M125.344 61.7245L125.344 54.5945C125.344 40.8059 114.149 29.6101 100.33 29.5806"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M96.1465 71.2407L96.1465 56.6861C96.1465 48.6133 89.6352 42.102 81.5624 42.102C73.4896 42.102 66.9784 48.6133 66.9784 56.6861L66.9784 79.6081C66.9784 95.6948 80.0598 108.776 96.1465 108.776C112.233 108.776 125.315 95.6948 125.315 79.6081"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className=" text-xl md:text-[32px] lg:text-4xl mt-4 leading-12 font-B-Nazanin text-center">
            برای آپلود فایل را بکشید و رها کنید.
          </span>
          <span className="  text-xl md:text-2xl lg:text-4xl text-accent underline underline-offset-10  leading-12 font-B-Nazanin text-center">
            یا از اینجا انتخاب کنید.
          </span>
          <span className="font-B-Nazanin text-[20px] mt-1">(اختیاری)</span>
        </label>

        <div>
          <span className="mt-5 font-B-Nazanin text-xl md:text-[32px]">
            آپلود شده :{" "}
          </span>
          <span className="mt-5 font-B-Nazanin text-accent text-xl md:text-2xl">
            {totlaFile} / {uploadedFileCount}
          </span>
        </div>
      </div>
      <div className="flex item-center  gap-1  my-2 font-B-Nazanin text-[20px]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M12.5002 22.9168C18.2531 22.9168 22.9168 18.2531 22.9168 12.5002C22.9168 6.7472 18.2531 2.0835 12.5002 2.0835C6.7472 2.0835 2.0835 6.7472 2.0835 12.5002C2.0835 18.2531 6.7472 22.9168 12.5002 22.9168Z"
            fill="#2196F3"
          />
          <path
            d="M12.5 14.3231C12.9271 14.3231 13.2812 13.9689 13.2812 13.5418V8.3335C13.2812 7.90641 12.9271 7.55225 12.5 7.55225C12.0729 7.55225 11.7188 7.90641 11.7188 8.3335V13.5418C11.7188 13.9689 12.0729 14.3231 12.5 14.3231Z"
            fill="#2196F3"
          />
          <path
            d="M13.4585 16.271C13.4064 16.146 13.3335 16.0314 13.2397 15.9272C13.1356 15.8335 13.021 15.7606 12.896 15.7085C12.646 15.6043 12.3543 15.6043 12.1043 15.7085C11.9793 15.7606 11.8647 15.8335 11.7606 15.9272C11.6668 16.0314 11.5939 16.146 11.5418 16.271C11.4897 16.396 11.4585 16.5314 11.4585 16.6668C11.4585 16.8022 11.4897 16.9377 11.5418 17.0627C11.5939 17.1981 11.6668 17.3022 11.7606 17.4064C11.8647 17.5002 11.9793 17.5731 12.1043 17.6252C12.2293 17.6772 12.3647 17.7085 12.5002 17.7085C12.6356 17.7085 12.771 17.6772 12.896 17.6252C13.021 17.5731 13.1356 17.5002 13.2397 17.4064C13.3335 17.3022 13.4064 17.1981 13.4585 17.0627C13.5106 16.9377 13.5418 16.8022 13.5418 16.6668C13.5418 16.5314 13.5106 16.396 13.4585 16.271Z"
            fill="#2196F3"
          />
        </svg>
        <span className={"text-accent max-sm:text-sm"}>
          این فایل/فایل ها برای تمامی کمپین ارسال خواهد شد.
        </span>
      </div>
      <div className="flex item-center  gap-1  font-B-Nazanin text-[20px]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M12.5002 22.9168C18.2531 22.9168 22.9168 18.2531 22.9168 12.5002C22.9168 6.7472 18.2531 2.0835 12.5002 2.0835C6.7472 2.0835 2.0835 6.7472 2.0835 12.5002C2.0835 18.2531 6.7472 22.9168 12.5002 22.9168Z"
            fill="#2196F3"
          />
          <path
            d="M12.5 14.3231C12.9271 14.3231 13.2812 13.9689 13.2812 13.5418V8.3335C13.2812 7.90641 12.9271 7.55225 12.5 7.55225C12.0729 7.55225 11.7188 7.90641 11.7188 8.3335V13.5418C11.7188 13.9689 12.0729 14.3231 12.5 14.3231Z"
            fill="#2196F3"
          />
          <path
            d="M13.4585 16.271C13.4064 16.146 13.3335 16.0314 13.2397 15.9272C13.1356 15.8335 13.021 15.7606 12.896 15.7085C12.646 15.6043 12.3543 15.6043 12.1043 15.7085C11.9793 15.7606 11.8647 15.8335 11.7606 15.9272C11.6668 16.0314 11.5939 16.146 11.5418 16.271C11.4897 16.396 11.4585 16.5314 11.4585 16.6668C11.4585 16.8022 11.4897 16.9377 11.5418 17.0627C11.5939 17.1981 11.6668 17.3022 11.7606 17.4064C11.8647 17.5002 11.9793 17.5731 12.1043 17.6252C12.2293 17.6772 12.3647 17.7085 12.5002 17.7085C12.6356 17.7085 12.771 17.6772 12.896 17.6252C13.021 17.5731 13.1356 17.5002 13.2397 17.4064C13.3335 17.3022 13.4064 17.1981 13.4585 17.0627C13.5106 16.9377 13.5418 16.8022 13.5418 16.6668C13.5418 16.5314 13.5106 16.396 13.4585 16.271Z"
            fill="#2196F3"
          />
        </svg>
        <span className={"text-accent max-sm:text-sm"}>
          آپلود فایل در این بخش اختیاری است.
        </span>
      </div>
    </div>
  );
}

export default Step4;
