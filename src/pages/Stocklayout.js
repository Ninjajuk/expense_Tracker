import BarChart from "../Components/Chart/Chart";
import DoughnutChart from "../Components/Chart/DoughnutChart";

const cards = [
  {
    id: 1,
    type: "Debit Card",
    number: "**** **** **** 1234",
    expiration: "12/25",
    issuer: "Bank of India"
  },
  {
    id: 2,
    type: "Credit Card",
    number: "**** **** **** 5678",
    expiration: "08/24",
    issuer: "SBI Card"
  },
  {
    id: 3,
    type: "Debit Card",
    number: "**** **** **** 9012",
    expiration: "02/23",
    issuer: "Bank of India"
  }
];

function StockLayout() {
  return (
    <>
      <div className="w-full min-h-screen">
        <h1
          className="text-blue font-medium text-5xl text-center bg-gray-300 "
          style={{ height: "4rem" }}
        >
          Stock LAyout
        </h1>
        <div className="bg-blue-200 " style={{ height: "calc(100vh - 4rem)" }}>
          <div className="w-full h-full ">
            <div className="w-full h-full flex flex-col">
              <div className="w-full md:h-1/5 bg-red-400 flex flex-col md:flex-row p-2">
                <div className="w-full  bg-gray-100 p-2">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card) => (
                      <div
                        key={card.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                      >
                        <div className="p-4">
                          <h2 className="text-lg font-semibold">{card.type}</h2>
                          <p className="text-gray-500">{card.issuer}</p>
                          <div className="mt-4">
                            <p className="text-gray-600">Card Number</p>
                            <p className="text-gray-900">{card.number}</p>
                          </div>
                          <div className="mt-4">
                            <p className="text-gray-600">Expiration Date</p>
                            <p className="text-gray-900">{card.expiration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className="w-full md:w-1/3 bg-gray-300 p-2">2</div>
                <div className=" w-full md:w-1/3 bg-gray-400 p-2">3</div> */}
              </div>
              <div className="w-full h-3/5 bg-green-400"></div>
              <div className="w-full h-1/5 bg-blue-400">3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockLayout;
