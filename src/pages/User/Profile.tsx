import React from "react";
import { Message, Tokens, Transaction } from "../../data/data";
import {
  Button,
  CircularProgressBar,
  NewTab,
  ProgressBar,
} from "../../components/ui";
import { iconsImgs } from "../../utils/images";

const profileStats = [
  {
    id: 0,
    title: "Wallet",
    percentage: "40%",
    bgColor: "#fff7ea",
  },
  {
    id: 1,
    title: "Loan",
    percentage: "20%",
    bgColor: "#ECBEFE",
  },
  {
    id: 2,
    title: "Earn",
    percentage: "25%",
    bgColor: "#ECF5Ff",
  },
  {
    id: 3,
    title: "Invest",
    percentage: "15%",
    bgColor: "#ffebea",
  },
] as const;

const Profile = () => {
  const tab = [
    {
      label: "Profile Details",
      content: (
        <div className="px-2 w-[250px] text-sm ">
          <div className="flex justify-between py-2">
            Address <span>Address</span>
          </div>
          <div className="flex justify-between py-2">
            Date of Birth <span>Address</span>
          </div>
          <div className="flex justify-between py-2">
            Contact Phone <span>Address</span>
          </div>
          <div className="flex justify-between py-2">
            City <span>Address</span>
          </div>
          <div className="flex justify-between py-2">
            Country <span>Address</span>
          </div>
          <div className="flex justify-between py-2">
            Occupation <span>Address</span>
          </div>
        </div>
      ),
    },
    {
      label: "internal Txns",
      content: (
        <div>
          <div>address</div>
        </div>
      ),
    },
  ];

  const progress = 70;

  return (
    <div className=" h-full grid grid-cols-[auto,minmax(0,2fr)] overflow-hidden ">
      <section className="px-8 py-8">
        <div className="w-[700px] bg-white h-fit rounded-md p-6">
          <div className="flex justify-between">
            <div>
              <div className="font-semibold mb-2">
                <h2 className="text-lg">Okeke Timothy</h2>
                <span className="flex mb-2 w-[250px] justify-between text-xs">
                  <p>Lagos, Nigeria</p> <p>Okeketimothy@gmail.com</p>
                </span>
              </div>
              <div className="flex w-[500px] justify-between h-11 mt-4 text-xs font-semibold  ">
                <div className="flex flex-col">
                  Kyc Status
                  <span className="h-6 w-[90px] bg-tinqfiGreen flex justify-end rounded-md">
                    {" "}
                    80% <span className="w-[10px] bg-tinqfiGray"></span>
                  </span>
                </div>
                <div className="border "></div>

                <div className="flex flex-col">
                  Balance <span>$10000</span>
                </div>
                <div className="border "></div>

                <div className="flex flex-col">
                  Token <span>5</span>
                </div>
                <div className="border "></div>

                <div className="flex flex-col">
                  Total Profit <span>+$500</span>
                </div>
              </div>
            </div>
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <img
                src={iconsImgs.avatar6}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="mt-4 w-full ">
            <NewTab tabs={tab} />
          </div>
        </div>
        <div className="profile-stats mt-5">
          {profileStats.map(({ id, title, percentage, bgColor }) => (
            <div
              className=" p-3 w-full bg-white flex rounded-md space-y-1 items-center"
              key={id}
            >
              <div
                className={`h-10 w-10 rounded-full  `}
                style={{ backgroundColor: bgColor }}
              ></div>

              <div className="flex items-center justify-between flex-col-reverse px-2">
                <p className="capitalize font-bold text-sm">{title}</p>
                <div>
                  <h5 className="text-xl font-semibold">{percentage}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between space-x-2">
          <div className="h-fit w-[280px] bg-white p-4 spaace-y-6  ">
            <div className="mt-1">Analytics</div>
            <div className="flex justify-center items-center mt-2">
              <CircularProgressBar
                percentages={[100, 50, 20, 30]}
                radius={50}
                strokeWidth={10}
                strokeColors={["#FCAD2A", "#4339F2", "#02A0FC","#FF3A29"]}
              />
            </div>
            <div className="flex mt-2 justify-between">
              <h2>wallet</h2>
              <h2>loan</h2>
              <h2>earn</h2>
              <h2>invest</h2>
            </div>
          </div>
          <div className="h-fit w-[400px] bg-white p-4 rounded-md  space-y-3">
            <h2>Breakdown</h2>
            <div className="">
              <div className="flex justify-between text-xs font-semibold text-tinqfiYellow mb-1">
                wallet <span>$65,375</span>
              </div>
              <ProgressBar
                percentage={progress}
                classname="h-full bg-tinqfiYellow rounded"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#4339F2] mb-1">
                loan <span>$65,375</span>
              </div>
              <ProgressBar
                percentage={progress}
                classname="h-full bg-[#4339F2] rounded"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#02A0FC] mb-1">
                Earn <span>$65,375</span>
              </div>
              <ProgressBar
                percentage={progress}
                classname="h-full bg-[#02A0FC] rounded"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#FF3A29] mb-1">
                Invest <span>$65,375</span>
              </div>
              <ProgressBar
                percentage={progress}
                classname="h-full bg-[#FF3A29] rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white h-full w-[350px] rounded-md  grid grid-row-2  p-8">
        <div>
          <div>
            <h3 className="flex justify-between text-sm capitalize font-semibold">
              <span> Tokens</span>
              <span className="text-tinqfiYellow">View all </span>
            </h3>
            <div className="">
              <div>
                {Tokens.map((message) => (
                  <div
                    key={message.id}
                    className="flex items-center justify-center h-[50px] px-2 bg-tinqfiGray   mt-2 rounded-md w-[300px]  "
                  >
                    <div className="flex justify-center w-full items-center">
                      <div className="h-[30px] w-[30px] rounded-[100%] overflow-hidden bg-tinqfiYellow flex justify-center items-center">
                        <img
                          src={message.image}
                          alt="img.png"
                          className="object-contain w-[20px] h-[20px]"
                        />
                      </div>

                      <div className=" px-2 w-[300px] text-sm capitalize flex justify-between">
                        <h2 className="font-semibold">
                          {message.title}{" "}
                          <span className="text-gray-400">
                            {message.details}
                          </span>
                        </h2>
                        <p className="font-semibold">{message.amount}</p>
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

export default Profile;
