import { FiChevronDown } from "react-icons/fi";
import { Message, Transaction } from "../../data/data";
import Traffic from "./Traffic";
import Revenu from "./Revenue";
import { BsPlus } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";

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
    amount: "239K   ",
    date: "07 Jan",
    percentage: "11.01%",
    status: "profit",
  },
] as const;

const Dashboard = () => {
  return (
    <div className=" h-full grid grid-cols-[auto,minmax(0,2fr)] ">
      <section className="px-9 py-2">
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
                  } flex items-center justify-between  rounded-full py-1 px-3 font-semibold text-[8px]`}
                >
                  <BsPlus />
                  {percentage}
                  <IoMdTrendingUp />
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <Traffic />
        </div>
        <div className="">
          <Revenu />
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

export default Dashboard;
