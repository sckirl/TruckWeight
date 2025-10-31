import React from 'react';

const imgIcon = "https://www.figma.com/api/mcp/asset/82df4b15-3f0a-45f9-8349-d23fc7361e83";

type OnDotProps = {
  className?: string;
  property1?: "Default" | "Small";
};

function OnDot({ className, property1 = "Default" }: OnDotProps) {
  return <div className={className} data-name="Property 1=Default" data-node-id="21:1424" />;
}

const WeightDisplay = () => {
  return (
    <div className="border border-[rgba(0,0,0,0.1)] border-solid rounded-[12.75px] p-5">
      <div className="flex items-center mb-5">
        <img alt="" className="w-5 h-5 mr-3" src={imgIcon} />
        <p className="font-sans font-normal text-sm text-neutral-950">
          Live Weight Measurement
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative">
          <p className="font-sans font-bold text-5xl text-[#030213]">
            54.000 kg
          </p>
          <div className="flex items-center justify-center mt-2">
            <OnDot className="bg-[#00c950] opacity-[0.597] rounded-full w-4 h-4 mr-2" />
            <p className="font-sans text-lg text-[#717182]">
              Weight IN
            </p>
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="flex justify-between text-xs text-neutral-950">
            <p>Load Capacity</p>
            <p>90.0%</p>
          </div>
          <div className="w-full bg-[rgba(3,2,19,0.2)] rounded-full h-2 mt-1">
            <div className="bg-[#030213] rounded-full h-2" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="flex space-x-4 mt-5">
            <button className="bg-[#030213] text-white font-medium py-2 px-7 rounded-[6.75px] text-sm">
                Start Weighing
            </button>
            <button className="bg-white border border-[rgba(0,0,0,0.1)] font-medium py-2 px-7 rounded-[6.75px] text-sm">
                Zero Scale
            </button>
            <button className="bg-white border border-[rgba(0,0,0,0.1)] font-medium py-2 px-7 rounded-[6.75px] text-sm">
                Calibrate
            </button>
        </div>
      </div>
    </div>
  );
};

export default WeightDisplay;