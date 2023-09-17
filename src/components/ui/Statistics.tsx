import React from 'react';

interface SalesStatistic {
  id: number;
  title: string;
  amount: number;
  percentage: string;
  status: 'profit' | 'lost';
}

interface SalesStatisticsProps {
    salesStatistics: readonly SalesStatistic[];
}

const SalesStatistics: React.FC<SalesStatisticsProps> = ({ salesStatistics }) => {
  return (
    <div className="sales-stats mb-8">
      {salesStatistics.map(({ id, title, amount, percentage, status }) => (
        <div className="p-4 w-full bg-white rounded-md space-y-3" key={id}>
          <p className="capitalize font-bold text-sm">{title}</p>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-xl font-semibold">{amount}</h5>
            </div>
            <p
              className={`${
                status === "profit" ? "profit" : "lost"
              } flex items-center justify-between  rounded-full py-1 px-3 font-semibold`}
            >
              {percentage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SalesStatistics;
