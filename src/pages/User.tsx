import dayjs from "dayjs";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {IoMdTrendingUp} from "react-icons/io"
import { Button, ReusableTable, Tabs } from "../components/ui";
import { Message, Transaction, usertoken } from "../data/data";

const salesStatistics = [
  {
    id: 0,
    title: "New Users",
    amount: "721K",
    date: "07 Jan",
    percentage: "11.01%",
    status: "profit",
  },
  {
    id: 1,
    title: "inflows",
    amount: "$721K",
    date: "07 Jan",
    percentage: "11.01%",
    status: "lost",
  },
  {
    id: 0,
    title: "Active Users",
    amount: "$7,249.31    ",
    date: "07 Jan",
    percentage: "11.01%",
    status: "profit",
  },
] as const;

const Dashboard = () => {
  const initialData = React.useMemo(
    () => usertoken.onRegistrationLedgerAccnts,
    []
  );

  const [data, setData] = useState(initialData);

  const columns = React.useMemo(
    () => [
      {
        id: "Name",
        header: "Name",
        accessorKey: "Name",
        cell: (ctx: any) => {
          return <div className="text-sm">User00001387</div>;
        },
      },

      {
        id: "E-mail",
        header: "E-mail",
        accessorKey: "E-mail",
        cell: (ctx: any) => {
          return <div>esther@gmail.com</div>;
        },
      },
      {
        id: "kyc status",
        header: "kyc status",
        accessorKey: "kyc status",
        cell: (ctx: any) => ctx.getValue(),
      },

      {
        id: "Country",
        header: "Country",
        accessorKey: "Country",
        cell: (ctx: any) => {
          return <div>Nigeria</div>;
        },
      },
      {
        header: "Sessions",
        accessorKey: "Sessions",
        cell: (ctx: any) => {
          return <div>8h-17h</div>;
        },
      },
      {
        header: "Joined Date",
        accessorKey: "Joined Date",
        cell: (ctx: any) => {
          return (
            <div className="flex items-center">
              {dayjs().format("MM-DD-YYYY")}
            </div>
          );
        },
      },
      {
        header: "actions",
        accessorKey: "actions",
        cell: (ctx: any) => {
          return (
            <div className="flex">
              <Button className="w-[50px] border mr-1 rounded-md text-white font-semibold bg-tinqfiBlue text-[8px] flex justify-center items-center">
                <span>
                  <BsPlus />
                </span>
                Manage
              </Button>
              <Button className="w-[50px] border mr-1 rounded-md text-black font-semibold text-[8px] flex justify-center items-center">
                <span>
                  <HiOutlineMail />
                </span>
                Mail{" "}
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const tabs = [
    {
      label: "All",
      content: <ReusableTable data={data} columns={columns} />,
    },
    {
      label: "New",
      content: (
        <ReusableTable
          data={data.filter((item) => item.status === "active")}
          columns={columns}
        />
      ),
    },
    {
      label: "Active",
      content: (
        <ReusableTable
          data={data.filter((item) => item.status !== "active")}
          columns={columns}
        />
      ),
    },
    {
      label: "Inactive",
      content: (
        <ReusableTable
          data={data.filter((item) => item.status !== "active")}
          columns={columns}
        />
      ),
    },
    {
      label: "Suspended",
      content: (
        <ReusableTable
          data={data.filter((item) => item.status !== "active")}
          columns={columns}
        />
      ),
    },
  ];

  return (
    <div className=" h-full grid grid-cols-[auto,minmax(0,2fr)] ">
      <section className="px-9 py-2 ">
        <div>
          <h3 className="flex  text-sm capitalize font-semibold py-2 ">
            today
            <span className="mt-1">
              <FiChevronDown />
            </span>
          </h3>
        </div>
        <div className="sales-stats mb-8">
          {salesStatistics.map(({ id, title, amount, percentage, status }) => (
            <div className=" p-4 w-full bg-white rounded-md space-y-3" key={id}>
              <p className="capitalize font-bold text-sm">{title}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xl font-semibold">{amount}</h5>
                </div>
                <p
                  className={`${
                    status === "profit" ? "profit" : "lost"
                  } flex items-center justify-between  rounded-full py-1 px-3 font-bold text-[8px] text-tinqfiBlue `}
                >
                  <BsPlus />
                  {percentage}
                  <IoMdTrendingUp />
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8 bg-white h-fit w-[700px]">
          <div>
            <div className="flex justify-between p-4 ">
              <h3 className="flex  text-lg capitalize font-semibold ">User</h3>
              <div className="flex">
                <Button className="w-[100px] border mr-1 rounded-md text-white font-semibold bg-tinqfiYellow text-sm flex justify-center items-center">
                  <span>
                    <BsPlus />
                  </span>
                  Schedule
                </Button>
                <Button className="w-[100px] border mr-1 rounded-md text-black font-semibold text-sm flex justify-center items-center">
                  <span>
                    <HiOutlineMail />
                  </span>
                  Mail{" "}
                </Button>
              </div>
            </div>
            <div className="p-4 ">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white h-full w-[350px] rounded-md  grid grid-row-2  p-8">
        <div>
          <div>
            <h3 className="flex justify-between text-sm capitalize font-semibold">
              <span> Activity</span>
              <span className="text-tinqfiYellow">View all </span>
            </h3>
            <div className="">
              <div>
                {Message.map((message) => (
                  <div
                    key={message.id}
                    className="flex items-center justify-center h-[50px] px-2 bg-tinqfiGray   mt-2 rounded-md w-[300px]  "
                  >
                    <div className="flex justify-center w-full items-center">
                      <div className="h-[30px] w-[30px] rounded-md overflow-hidden">
                        <img
                          src={message.image}
                          alt="img.png"
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className=" px-2 w-[300px] text-sm capitalize">
                        <h2 className="font-semibold">{message.title}</h2>
                        <p>
                          {message.date}|{message.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div>
            <h3 className="flex justify-between text-sm capitalize font-semibold">
              <span> Transaction</span>
              <span className="text-tinqfiYellow">View all </span>
            </h3>
            <div className="">
              <div>
                {Transaction.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-center h-[50px] bg-tinqfiGray mt-2 rounded-md   w-[300px] "
                  >
                    <div className="flex justify-center w-full items-center">
                      <div className="h-[30px] w-[30px] rounded-md overflow-hidden">
                        <img
                          src={transaction.image}
                          alt="img.png"
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className=" px-2 text-sm capitalize">
                        <h2 className="font-semibold">{transaction.title}</h2>
                        <p>
                          {transaction.date}|{transaction.time}
                        </p>
                      </div>
                      <div className=" px-2 text-sm capitalize">
                        <h2 className="font-semibold">
                          {transaction.transaction}
                        </h2>
                        <p>{transaction.amount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </div>
  );
};

export default Dashboard;
