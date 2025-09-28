import React from "react";

type StepMessageProps = {
  children: React.ReactNode;
  status: "success" | "error" | "uploading";
};

function StepMessage({ children, status }: StepMessageProps) {
  return (
    <div
      className={`sticky right-0 left-0 top-0 w-full flex gap-[6px] items-center pr-4 py-4 lg:text-3xl text-lg ${
        status === "error" && "bg-semantic-error/30 text-semantic-error"
      }`}
    >
      {status === "error" && (
        <img
          src="/public/images/dashboard/close-circle.png"
          alt="close-circle"
        />
      )}
      {status === "success" && (
        <img
          src="/public/images/dashboard/tick-square.png"
          alt="close-circle"
        />
      )}
      {children}
    </div>
  );
}

export default StepMessage;
