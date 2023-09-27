import React from "react";
import dayjs from "dayjs";
import Table from "../../components/ui/Table";
import { Message, Transaction, usertoken } from "../../data/data";
import { Button } from "../../components/ui";
import { iconsImgs } from "../../utils/images";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const Deposit = () => {
  const data = React.useMemo(() => usertoken.onRegistrationLedgerAccnts, []);
  const columns = React.useMemo(
    () => [
      {
        id: "User ID",
        header: "User ID",
        accessorKey: "User ID",
        cell: (ctx: any) => {
          return (
            <div className="text-sm flex justify-center items-center">
              <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                <img
                  src={iconsImgs.avatar1}
                  alt="User Avatar"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="text-xs font-semibold">User00001387</span>
                <p className="text-xs text-gray-500 font-light">
                  esther@gmail.com
                </p>
              </div>
            </div>
          );
        },
      },

      {
        id: "Coin",
        header: "Coin",
        accessorKey: "Coin",
        cell: (ctx: any) => {
          return <div className="text-xs font-semibold">Bitcoin</div>;
        },
      },
      {
        id: "Amount",
        header: "Amount",
        accessorKey: "Amount",
        cell: (ctx: any) => {
          return <div className="text-xs font-semibold">$2000</div>;
        },
      },

      {
        id: "Value",
        header: "Value",
        accessorKey: "Value",
        cell: (ctx: any) => {
          return <div className="text-xs font-semibold">0.000234</div>;
        },
      },
      {
        header: "Status",
        accessorKey: "Status",
        cell: (ctx: any) => {
          return (
            <div>
              <Button className="bg-tinqfiGreen text-center text-xs rounded-md p-1 text-white font-semibold">
                Successfull
              </Button>
            </div>
          );
        },
      },
      {
        header: " Date",
        accessorKey: " Date",
        cell: (ctx: any) => {
          return (
            <div className="flex items-center text-xs font-semibold">
              {dayjs().format("MM-DD-YYYY")}
            </div>
          );
        },
      },
      {
        header: "Action",
        accessorKey: "Action",
        cell: (ctx: any) => {
          return (
            <div>
              <Link to="/dashboard/deposit-details">
                <Button className="bg-tinqfiBlue text-center text-xs rounded-md p-1 text-white font-semibold">
                  inspect
                </Button>
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <div className=" h-full grid grid-cols-[auto,minmax(0,2fr)] ">
      <section className="px-3 py-4">
        <div>
          <h3 className="flex  text-sm capitalize font-semibold py-2 ">
            today
            <span className="mt-1">
              <FiChevronDown />
            </span>
          </h3>
        </div>
        <div className="w-[730px] h-fit bg-white rounded-md p-2">
          <h2 className="flex  text-sm capitalize font-semibold py-2 ">
            deposits
          </h2>
          <Table data={data} columns={columns} />,
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
                    className="flex items-center justify-evenly h-[50px] bg-tinqfiGray mt-2 rounded-md   w-[300px] "
                  >
                    <div className="flex justify-center w-full items-center px-2">
                      <div className="h-[30px] w-[30px] rounded-md overflow-hidden">
                        <img
                          src={transaction.image}
                          alt="img.png"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className=" px-2 w-[300px] text-sm capitalize flex justify-between">
                        <div className="">
                          <h2 className="font-semibold">{transaction.title}</h2>
                          <p>
                            {transaction.date}|{transaction.time}
                          </p>
                        </div>
                        <div className="">
                          <h2 className="font-semibold">
                            {transaction.transaction}
                          </h2>
                          <p>{transaction.amount}</p>
                        </div>
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

export default Deposit;
