import React from "react";

const input = (props) => {
  return (
    <>
    {props.inputs.map((input) =>(
      <div className="w-full mb-[2rem]" key={input.id}>
        <label className="relative block cursor-text w-full">
          <input
            type={input.type}
            className={`h-[5.6rem] w-full border border-primary outline-none px-[1.6rem] peer ${ input.type !== "datetime-local" && "pt-2"}`}
            required
          />
          <span className="absolute top-0 left-0 px-[1.6rem] text-[2rem] flex items-center h-full peer-focus:h-[2.8rem] peer-focus:text-[1.4rem] peer-valid:h-[2.8rem] peer-valid:text-[2rem] transition-all">
            {input.placeholder}
          </span>
        </label>
      </div>
    ))}
    </>
  );
};

export default input;
