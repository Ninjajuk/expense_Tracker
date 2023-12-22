
import Layout3 from "../Components/Layout/Layout3";
import FixedHeightTable from "../Components/Stocks/FixedTbaleStocks";
import PortfolioCard from "../Components/Stocks/PortfolioCard";
import StockTable from "../Components/Stocks/StockTable";

function StocksPage() {
  return (
    <Layout3>
      <div
        className=" bg-blue-400  px-4 sm:px-6 lg:px-8 overflow-y-auto"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="max-w-full max-h-full ">
          {/* <h1 className="text-2xl font-medium text-gray-400 py-2 text-center ">Welocme to Portfolio</h1> */}
          <div className="flex flex-col md:flex-row gap-2 pt-4">
            <div className="overflow-y-auto lg:w-1/3 w-full  flex flex-col items-center gap-4">
              <div className="w-full  bg-purple-400 rounded-md ">
                <h2 className="text-2xl font-semibold px-2 text-white">
                  Equity
                </h2>
                <div className=" my-2 mx-4  text-center">
                  <p className="text-gray-600">Overall Gain/Loss</p>
                  <p className="text-3xl font-bold text-red-600">$4,000</p>
                </div>
                <div className=" bg-white flex justify-between p-2 my-2 mx-2 rounded-md shadow-md">
                  <div className="">
                    <p className="text-gray-600">Invested</p>
                    <p className="text-xl font-bold">$40,000</p>
                  </div>
                  <div className=" ">
                    <p className="text-gray-600">Current Value</p>
                    <p className="text-xl font-bold text-red-400">$36,000</p>
                  </div>
                </div>
              </div>

              <div className="w-full  bg-pink-200 rounded-md ">
                <h2 className="text-2xl font-semibold px-2 text-gray-500">
                  Mutual Funds
                </h2>
                <div className=" my-2 mx-4  text-center">
                  <p className="text-gray-600">Overall Gain/Loss</p>
                  <p className="text-3xl font-bold text-green-600">+$10,000</p>
                </div>
                <div className=" bg-white my-2 mx-4  flex flex-col md:flex-row justify-between p-2 rounded-md">
                  <div className="">
                    <p className="text-gray-600">Invested</p>
                    <p className="text-xl font-bold">$40,000</p>
                  </div>
                  <div className=" ">
                    <p className="text-gray-600">Current Value</p>
                    <p className="text-xl font-bold text-green-600">$50,000</p>
                  </div>
                </div>
              </div>

              <div className="w-full  bg-gray-400 rounded-md ">
                <h2 className="text-2xl font-semibold px-2 ">Bonds</h2>
                <div className=" my-2 mx-4  text-center">
                  <p className="text-gray-600">Overall Gain/Loss</p>
                  <p className="text-3xl font-bold text-red-600">-$2,000</p>
                </div>
                <div className=" bg-white flex justify-between p-2 my-2 mx-2 rounded-md shadow-md">
                  <div className="">
                    <p className="text-gray-600">Invested</p>
                    <p className="text-xl font-bold">$40,000</p>
                  </div>
                  <div className=" ">
                    <p className="text-gray-600">Current Value</p>
                    <p className="text-xl font-bold">$38,000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-2/5 gap-2 max-h-full ">
              <div className="w-full h-1/2 ">
                <PortfolioCard />
              </div>
              <div
                className="w-full flex-grow rounded-md shadow-md  bg-white mb-4"
                style={{ height: "400px" }}
              >
                <FixedHeightTable />
              </div>
            </div>

            <div className="w-full md:w-1/3   bg-yellow-400 rounded-md shadow-md ">
              <StockTable />
            </div>
          </div>
        </div>
      </div>
    </Layout3>
  );
}

export default StocksPage;
