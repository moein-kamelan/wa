import React from "react";

type StepButtonsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  onSubmitClick: () => void;
  onNextClick: () => void;
  setStep: (s: any) => void;
};

function StepButtons({
  isFirstStep,
  isLastStep,
  onSubmitClick,
  onNextClick,
  setStep,
}: StepButtonsProps) {
  return (
    <div className="flex items-center justify-between  flex-wrap gap-4   mt-3.5 lg:mt-4">
      <button
        disabled={isFirstStep}
        className={`max-sm:w-full text-white bg-btn-primary-normal hover:bg-btn-primary-hover active:bg-btn-primary-tapped lg:w-[130px] lg:h-10 w-[122px] h-[33px] rounded-[55px] text-2xl/6 lg:text-[32px]/8 btn-shadow border-[1.5px] border-primary  ${
          isFirstStep
            ? "disabled:bg-transparent !text-gray-black !border-gray-black   cursor-not-allowed"
            : ""
        }`}
        onClick={() => setStep((s: any) => s - 1)}
      >
        قبلی
      </button>
      <button
        className="max-sm:w-full text-white bg-btn-primary-normal hover:bg-btn-primary-hover active:bg-btn-primary-tapped lg:w-[130px] lg:h-10 w-[122px] h-[33px] rounded-[55px] text-2xl/6 lg:text-[32px]/8 btn-shadow "
        onClick={isLastStep ? onSubmitClick : onNextClick}
      >
        بعدی
      </button>
    </div>
  );
}

export default StepButtons;
