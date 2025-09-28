import { VariableRandomValueType } from "../types/dashboard/types";

export const isValideMessageVariable  = (
  variableRandomValue : any,
  message : any,
  checkedVariables : any
)  => {
  const usedVariables: string[] = [];

  for (const field in variableRandomValue) {
    const key = field as keyof VariableRandomValueType;
    const variableToken = variableRandomValue[key][1];

    if (message.includes(variableToken)) {
      usedVariables.push(key);
    }
  }

  const invalidVariables: string[] = [];

  usedVariables.forEach((key) => {
    if (!checkedVariables[key as keyof typeof checkedVariables]) {
      invalidVariables.push(key);
    }
  });

  console.log("invalidVariables:", invalidVariables);
  if (invalidVariables.length > 0) {
    return false;
  }
  return true;
};

export const step1Validation = (
  message : string,
  setStep1Error : any,
  variableRandomValue : any,
  checkedVariables : any,
) => {
  if (message.trim() === "") {
    setStep1Error("ابتدا پیام متنی کمپین خود را ایجاد کنید.");
    setTimeout(() => {
      setStep1Error(null);
    }, 3000);
    return;
  }

  if (
    !isValideMessageVariable(variableRandomValue, message, checkedVariables)
  ) {

    setStep1Error("متغیر نوشته شده در متن انتخاب نشده");
    setTimeout(() => {
      setStep1Error(null);
    }, 3000);

    return;
  }
  return true
};
