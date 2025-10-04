import React, { useState } from "react";
import InputContainer from "../../../../modules/InputContainer/InputContainer";
import Select, { components } from "react-select";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const options = [
  { value: "متعادل", label: "کند: 20 ثانیه" },
  { value: "strawberry", label: "متعادل: 10 ثانیه" },
  { value: "vanilla", label: "سریع: 5 ثانیه" },
];

const today = new DateObject({ calendar: persian, locale: persian_fa });

function Step5() {
  const [date, setDate] = useState();

  return (
    <div className="mx-auto w-[88%] space-y-8">
   <div className="flex flex-col gap-y-8 mt-[58px]">


       <InputContainer
        text="زمان ارسال"
        textSize="text-xl sm:text-3xl md:text-[40px]"
      >

        
        
        
        <div className="flex items-center gap-1">
          
          <input
            className="bg-neutral-primary/30 border-2 border-secondary text-secondary rounded-2xl px-5 py-2 text-center    text-lg sm:text-xl md:text-3xl placeholder:text-4xl"
            type="number"
            max={59}
            min={1}
            
            placeholder="30"
          />
          <span className="text-[32px] "> : </span>
          <input
            className=" bg-neutral-primary/30 border-2 border-secondary  text-secondary  rounded-2xl px-5 py-2 text-center  placeholder:text-4xl text-lg sm:text-xl md:text-3xl"
            type="number"
            max={24}
            min={1}
            
            placeholder="16"
          />
        </div>
      </InputContainer>
      <InputContainer
        text="تاریخ ارسال"
        textSize="text-xl sm:text-3xl md:text-[40px]"
      >
        <DatePicker
          value={date}
          onChange={setDate}
          calendar={persian}
          locale={persian_fa}
          format="YYYY/MM/DD"
          className=""
          mapDays={({ date }) => {
            if (date.weekDay.index === 6) {
              // جمعه
              return { className: "weekend-day", disabled: true };
            }
          }}
          containerClassName="w-[263px] max-md:w-full "
          arrow={false}
          render={(valueString, openCalendar) => (
            <div
              onClick={openCalendar}
              className="flex  items-center justify-between   cursor-pointer border-2 border-secondary  px-5 py-2 bg-neutral-primary/30  rounded-[5px] "
            >
              <svg
                className="shrink-0 size-8 md:size-11"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3.75V9.375"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 3.75V9.375"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5625 17.0439H38.4375"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.625 24.3938V15.9375C5.625 10.3125 8.4375 6.5625 15 6.5625H30C36.5625 6.5625 39.375 10.3125 39.375 15.9375V31.875C39.375 37.5 36.5625 41.25 30 41.25H15C8.4375 41.25 5.625 37.5 5.625 31.875"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.4277 25.6875H29.4445"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.4277 31.3125H29.4445"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.4917 25.6875H22.5085"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.4917 31.3125H22.5085"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5517 25.6875H15.5686"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5517 31.3125H15.5686"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className={`text-center  text- text-lg sm:text-xl md:text-3xl ${valueString ? "text-secondary" : "text-neutral-tertiary"} `}>
                { valueString || today.format("YYYY/MM/DD")}

              </div>
            </div>
          )}
        />
      </InputContainer>
      <InputContainer
        text="وقفه "
        textSize="text-xl sm:text-3xl md:text-[40px]"
      >
        <Select
          options={options}
          placeholder="لطفا یک مورد را انتخاب کنید"
          components={{ DropdownIndicator }}
          classNames={{
            control: () =>
              "!border !border-[1.5px] !border-secondary rounded-[5px]  !cursor-pointer     shadow-sm   !outline !outline-secondary focus:shadow-0 md:w-[263px] text-[32px] !text-secondary !bg-neutral-primary/30 ",
            option: ({ isFocused, isSelected }) =>
              `px-3 py-2 cursor-pointer !text-2xl border-r-6 border-neutral-tertiary ${
                isSelected
                  ? "bg-green-600 text-white !cursor-pointer "
                  : isFocused
                  ? "!bg-neutral-primary !text-secondary border-secondary/70 !cursor-pointer"
                  : "bg-white !text-gray-black !cursor-pointer"
              }`,
            menu: () =>
              "!mt-0 border border-gray-200 font-B-Homa rounded-lg shadow-lg bg-white overflow-hidden",
            placeholder: () =>
              "  font-B-Nazanin text-neutral-primary text-lg sm:text-xl  ",
          }}
        />
      </InputContainer>
    
    
    
   </div>
    </div>
  );
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5002 27.0885L0.478805 0.761593L30.7893 0.916123L15.5002 27.0885Z"
          fill="#ABABAB"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

export default Step5;
