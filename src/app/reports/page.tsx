import React from 'react';

const imgImage1 = "https://www.figma.com/api/mcp/asset/7d40c377-2b99-4d24-aa96-54fc79a1b2c7";

type VerticalTableProps = {
  plateNumber: string;
  driverName: string;
  truckWeight: string;
  company: string;
  goodsLoad: string;
};

function VerticalTable({ plateNumber, driverName, truckWeight, company, goodsLoad }: VerticalTableProps) {
  return (
    <div className="grid grid-cols-5 gap-4 text-center">
      <div className="p-4 border rounded-lg">
        <p className="font-bold text-sm">Plate No.</p>
        <p className="text-lg">{plateNumber}</p>
      </div>
      <div className="p-4 border rounded-lg">
        <p className="font-bold text-sm">Driver Name</p>
        <p className="text-lg">{driverName}</p>
      </div>
      <div className="p-4 border rounded-lg">
        <p className="font-bold text-sm">Truck Weight</p>
        <p className="text-lg">{truckWeight}</p>
      </div>
      <div className="p-4 border rounded-lg">
        <p className="font-bold text-sm">Company</p>
        <p className="text-lg">{company}</p>
      </div>
      <div className="p-4 border rounded-lg">
        <p className="font-bold text-sm">Goods Load</p>
        <p className="text-lg">{goodsLoad}</p>
      </div>
    </div>
  );
}

const ReportsPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Vehicle Report</h1>
      <div className="flex justify-center mb-8">
        <img alt="Vehicle" className="rounded-lg w-3/4" src={imgImage1} />
      </div>
      <VerticalTable
        plateNumber="DRTWRK"
        driverName="Alvin Candra"
        truckWeight="12.000 kg"
        company="PT.Cargill"
        goodsLoad="Liquid"
      />
    </div>
  );
};

export default ReportsPage;