import React from "react";

const Uparrow = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 21 21"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(2 2)"
        >
          <circle cx={8.5} cy={8.5} r={8}></circle>
          <path d="m11.5 7.5l-3-3l-3 3m3-3v8"></path>
        </g>
      </svg>
    </div>
  );
};

export default Uparrow;
