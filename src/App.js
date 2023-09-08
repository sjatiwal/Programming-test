import { useState } from "react";

import { peopleData } from "./data/peoplesdata";

function App() {
  const [count, setCount] = useState(3);
  const [num, setNum] = useState(1);

  const handleClick = () => {
    if (count < peopleData.length) {
      const updatedNum = num + 1;
      setNum(updatedNum);
      setCount(3 * updatedNum);
    } else {
      alert("No more people!");
    }
  };

  return (
    <div className="bg-custom-blue min-h-screen w-full flex justify-center">
      <div className="mt-[70px] w-[814px] max-[820px]:w-[600px] max-[650px]:w-[300px]">
        <div className="relative flex font-montserrat justify-between max-[650px]:flex-col">
          <div className="text-[48px] leading-[50px] text-custom-white font-bold  max-[650px]:text-[40px]">
            PEOPLE DATA
          </div>
          <div className="text-[20px] leading-[50px] text-custom-white font-bold max-[650px]:mt-[8px]">
            <button
              className="bg-custom-orange w-[201px] h-[51px] rounded-[24px]"
              onClick={handleClick}
            >
              NEXT PERSON
            </button>
          </div>
        </div>
        <div>
          {peopleData.map((item, index) => {
            return index <= count - 1 && index >= count - 3 ? (
              <div
                key={index}
                className="relative mt-[20px] shadow-5-10 rounded-b-[12px]"
              >
                <div className="absolute h-[100%] items-center flex justify-center bg-light-green text-[50px] text-custom-white font-black w-[70px] rounded-l-[12px] font-montserrat">
                  {index + 1}
                </div>
                <div className="bg-light-blue pl-[80px] text-[33px] font-medium text-custom-black leading-[50px] rounded-t-[12px]">
                  Name: <span className="font-light">{item.name}</span>
                </div>
                <div className="bg-custom-white pl-[80px] text-[33px] font-medium text-custom-black leading-[50px] rounded-b-[12px]">
                  Location: <span className="font-light">{item.location}</span>
                </div>
              </div>
            ) : null;
          })}
        </div>
        <div className="text-[16px] mt-[20px] leading-[50px] flex justify-center text-custom-white font-bold rounded-[12px]">
          CURRENTLY 3 PEOPLE SHOWING
        </div>
      </div>
    </div>
  );
}

export default App;
