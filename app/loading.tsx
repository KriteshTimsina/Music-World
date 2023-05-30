import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[250px]">
      <ScaleLoader color="#f59e0b" />
      <h2>Imagine there's no heaven It's easy if you try</h2>
      <h4 className="text-[#4c4b4b] text-sm italic">John Lennon</h4>
    </div>
  );
};

export default Loading;
