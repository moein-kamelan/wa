import React, { useState } from "react";
import Stepper from "../../../components/templates/Dashboard/NewCapmain/Stepper/Stepper";
import Step1 from "../../../components/templates/Dashboard/NewCapmain/Step1/Step1";
import StepMessage from "../../../components/modules/Dashboard/StepMessage/StepMessage";
import Step2 from "../../../components/templates/Dashboard/NewCapmain/Step2/Step2";
import Step3 from "../../../components/templates/Dashboard/NewCapmain/Step3/Step3";
import StepButtons from "../../../components/modules/Dashboard/StepButtons/StepButtons";
import { VariableRandomValueType } from "../../../types/dashboard/types";
import SmallStepper from "../../../components/modules/Dashboard/SmallStepper/SmallStepper";
import Step4 from "../../../components/templates/Dashboard/NewCapmain/Step4/Step4";
import { step1Validation } from "../../../validators/validators";
import Step5 from "../../../components/templates/Dashboard/NewCapmain/Step5/Step5";
import Step6 from "../../../components/templates/Dashboard/NewCapmain/Step6/Step6";
import Step7 from "../../../components/templates/Dashboard/NewCapmain/Step7/Step7";
import { axiosInstance } from "../../../utils/axios";
import { getSessionStorage, setSessionStorage } from "../../../utils/helpers";

function NewCampaign() {
  const [message, setMessage] = useState(getSessionStorage("campaignMessageText") || "");
  const [step, setStep] = useState(7);
  const [step1Error, setStep1Error] = useState<null | string>(null);
  const isLastStep = step === 7;
  const isFirstStep = step === 1;
  const existError = step1Error !== null;
  const [checkedVariables, setCheckedVaribale] = useState({
    firstName: false,
    lastName: false,
    link: false,
    date: false,
    number: false,
    company: false,
    discount: false,
    trackingCode: false,
  });

  const variableRandomValue: VariableRandomValueType = {
    firstName: ["علی", "{{نام}}"],
    lastName: ["رحمانی", "{{نام خانوادگی}}"],
    link: ["www.shop.com/ali", "{{لینک}}"],
    date: ["۱۴۰۴/۳/۸", "{{تاریخ}}"],
    number: ["۲۰", "{{عدد}}"],
    company: ["اسنوا", "{{شرکت}}"],
    discount: ["۸۰٪", "{{تخفیف}}"],
    trackingCode: ["dfsf2", "{{کد رهگیری}}"],
  };

  const handleNextClick = () => {
    if (step === 1) {
      const validationResult = step1Validation(
        message,
        setStep1Error,
        variableRandomValue,
        checkedVariables
      );

      if(!validationResult) { 
        return false
      }

      setSessionStorage("campaignMessageText", message)

      axiosInstance.post("/api/campaigns", {
        message,
        
      })
      .then(response => {
        console.log("Campaign created successfully:", response.data);
      })
      .catch(error => {
        console.error("Error creating campaign:", error);
      });
    }

    setStep((s) => s + 1);
  };

  const handleSubmitClick = () => {};

  return (
    <div>
      <Stepper step={step} />
      <SmallStepper step={step} />

      <div className="pr-3 lg:pr-[22px]  w-full max-w-[93%]   ">
        <div className="rounded-2xl bg-white md:h-[79.5vh] overflow-y-auto pb-9  md:pb-10  relative">
          {step1Error && <StepMessage status="error">{step1Error}</StepMessage>}

          <button
            className={`  mt-2 mr-4 lg:mr-4.5 lg:mt-[11px] text-2xl/6 lg:text-[25px] w-[122px] h-[33px] lg:w-[136px] lg:h-10 text-white rounded-[55px] btn-shadow bg-semantic-error ${
              existError && "invisible"
            } ${
              isFirstStep
                ? "disabled:bg-transparent !text-gray-black !bg-neutral-tertiary border !border-gray-black   cursor-not-allowed"
                : ""
            }`}
          >
            حذف کمپین
          </button>

          {step === 1 && (
            <Step1
              message={message}
              onMessageChange={setMessage}
              checkedVariables={checkedVariables}
              onChangeCheckedVariables={setCheckedVaribale}
              variableRandomValue={variableRandomValue}
            />
          )}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
          {step === 6 && <Step6 />}
          {step === 7 && <Step7 />}
        </div>

        <StepButtons
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          onNextClick={handleNextClick}
          onSubmitClick={handleSubmitClick}
          setStep={setStep}
        />
      </div>
    </div>
  );
}

export default NewCampaign;
