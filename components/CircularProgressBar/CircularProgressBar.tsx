import React, { FC } from "react";

export interface ICircularProgressBar {
  score: number;
  title: string;
  className?: string;
}

const CircularProgressBar: FC<ICircularProgressBar> = ({
  score,
  title,
  className,
}) => {
  return (
    <>
      <div className="relative h-full w-[400px] mt-20">
        <svg
          className="absolute inset-0 m-auto"
          viewBox="0 0 100 100"
          width="150"
          height="150"
        >
          <circle
            stroke-width="7"
            stroke-dasharray={`0.${score}48999999999999px 1px`}
            stroke-linecap="round"
            transform="rotate(-90 50 50)"
            cx="50"
            cy="50"
            r="45"
            fill="#DCFCE7"
            stroke="#10B981"
            pathLength="1"
            stroke-dashoffset="0px"
          ></circle>
        </svg>
        <p
          className="font-display absolute inset-0 mx-auto flex items-center justify-center  text-green-500
        text-5xl
        "
        >
          {score}
        </p>

        <div
          className="font-display absolute top-24 left-32  mx-auto flex translate-y-full flex-col items-center justify-center text-center text-4xl"
          style={{ opacity: "1" }}
        >
          <p
            className={`rounded bg-opacity-50 ${className}  px-2 text-gray-900 text-lg`}
          >
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

export default CircularProgressBar;
