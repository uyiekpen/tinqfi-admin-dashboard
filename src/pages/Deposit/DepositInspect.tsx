import React from "react";
import dayjs from "dayjs";
import Table from "../../components/ui/Table";
import { Message, Transaction, usertoken } from "../../data/data";
import { Button, NewTab } from "../../components/ui";
import { iconsImgs } from "../../utils/images";
import { Link } from "react-router-dom";

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
    percentage: "-3.2%",
    status: "lost",
  },
  {
    id: 0,
    title: "Active Users",
    amount: "7,249.31    ",
    date: "07 Jan",
    percentage: "11.01%",
    status: "profit",
  },
] as const;

const Deposit = () => {
  const tab = [
    {
      label: "Profile Details",
      content: (
        <div className="px-2  text-sm ">
          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex justify-center items-center">
              Username:
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>{" "}
            <span className="text-left w-[500px] font-semibold">Elijah098</span>
          </div>
          <hr />
          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              Token:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>{" "}
            <span className="text-left w-[500px] font-semibold text-tinqfiYellow">
              Tinq
            </span>
          </div>
          <hr />

          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              Deposit Address:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />{" "}
            </div>{" "}
            <span className="text-left w-[500px] text-textgrey">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
          <hr />

          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              Estimated Arrival:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>
            <span className="text-left w-[500px] text-textgrey">
              55 mins ago (Aug-08-2 font-semibold 023 10:20:35 PM +GM T)
            </span>
          </div>
          <hr />

          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              Amount:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>{" "}
            <span className="text-left w-[500px] font-semibold">$2,534.94</span>
          </div>
          <hr />

          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              value:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />{" "}
            </div>
            <span className="text-left w-[500px] font-semibold">
              0.00072277373747485 Tinq
            </span>
          </div>
          <hr />

          <div className="flex justify-between py-4 font-semibold  ">
            <div className="flex">
              Transaction fee :{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />{" "}
            </div>{" "}
            <span className="text-left w-[500px] text-textgrey">
              0.0000000000000011 Tinq
            </span>
          </div>
          <hr />

          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              Transaction Hash :{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>
            <span className="text-left w-[500px] text-textgrey">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
        </div>
      ),
    },
    {
      label: "internal Txns",
      content: (
        <div className="px-2 font-semibold   text-xs ">
          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              Senders wallet address :{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>
            <span className="text-left w-[500px]  text-textgrey">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
          <hr />
          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              Recipent wallet address:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>
            <span className="text-left w-[500px] text-textgrey">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
          <hr />
          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              Transaction status:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>
            <span className="text-left w-[500px] text-tinqfiYellow">
              pending
            </span>
          </div>
          <hr />
          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              Stages:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>
            <div className="text-left w-[500px] flex text-tinqfiBlue">
              intaited,<span className="text-tinqfiYellow">pending</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between py-4 font-semibold ">
            <div className="flex">
              {" "}
              Memo:{" "}
              <img
                src={iconsImgs.caution}
                alt=""
                className="h-3 w-3 object-contain ml-1"
              />
            </div>
            <span className="text-left w-[500px]">
              Allow users to add notes for each
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className=" h-full grid grid-cols-[auto,minmax(0,2fr)] ">
      <section className="px-4 py-4">
        <div className="w-[730px] h-fit bg-white rounded-md p-4">
          <h2 className="font-semibold px-4 mb-4">Transaction Details</h2>
          <div className="px-4 mt-4">
            <NewTab tabs={tab} />
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
