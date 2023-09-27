import { NewTab } from "../../components/ui";
import { Message, Transaction } from "../../data/data";



const WithDrawalDetails = () => {
  const tab = [
    {
      label: "Profile Details",
      content: (
        <div className="px-2  text-sm ">
          <div className="flex justify-between py-2">
            <div> Username:</div>{" "}
            <span className="text-left w-[500px] font-semibold">Elijah098</span>
          </div>
          <div className="flex justify-between py-2">
            <div>Token:</div>{" "}
            <span className="text-left w-[500px] font-semibold text-tinqfiYellow">Tinq</span>
          </div>
          <div className="flex justify-between py-2">
            <div> Deposit Address: </div>{" "}
            <span className="text-left w-[500px] text-gray-500">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
          <div className="flex justify-between py-2">
            <div> Estimated Arrival:</div>{" "}
            <span className="text-left w-[500px] text-gray-500">
              55 mins ago (Aug-08-2023 10:20:35 PM +GMT)
            </span>
          </div>
          <div className="flex justify-between py-2">
            <div>Amount:</div>{" "}
            <span className="text-left w-[500px] font-semibold">$2,534.94</span>
          </div>
          <div className="flex justify-between py-2">
            <div> value: </div>
            <span className="text-left w-[500px] font-semibold">
              0.00072277373747485 Tinq
            </span>
          </div>
          <div className="flex justify-between py-2">
            <div>Transaction fee : </div>{" "}
            <span className="text-left w-[500px] text-gray-500">
              0.0000000000000011 Tinq
            </span>
          </div>
          <div className="flex justify-between py-2">
            <div> Transaction Hash : </div>
            <span className="text-left w-[500px] text-gray-500">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
        </div>
      ),
    },
    {
      label: "internal Txns",
      content: (
        <div className="px-2  text-sm ">
          <div className="flex justify-between py-2">
            <div>Senders wallet address</div>
            <span className="text-left w-[500px]">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
          <div className="flex justify-between py-2">
            <div> Recipent wallet address</div>
            <span className="text-left w-[500px]">
              72gbhfeeugwuig9ug2iuiwdh9u9h92bvybubeubfu2bob3u9r
            </span>
          </div>
          <div className="flex justify-between py-2">
            <div> Transaction status</div>
            <span className="text-left w-[500px]">pending</span>
          </div>
          <div className="flex justify-between py-2">
            <div> Stages</div>
            <span className="text-left w-[500px]">intaited,pending</span>
          </div>
          <div className="flex justify-between py-2">
            <div> Memo</div>
            <span className="text-left w-[500px]">Allow users</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className=" h-full grid grid-cols-[auto,minmax(0,2fr)] ">
      <section className="px-4 py-4">
        <div className="w-[730px] h-fit bg-white rounded-md p-2">
          <h2 className="font-semibold px-4 mb-8">Transaction Details</h2>
          <div className="px-4">
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

export default WithDrawalDetails;
