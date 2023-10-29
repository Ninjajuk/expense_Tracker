import React from "react";
import Layout3 from "../Components/Layout/Layout3";


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
  },
  {
    id: 4,
    type: "Debit Card",
    number: "34954040901",
    expiration: "02/23",
    issuer: "State bank of India"
  },
  {
    id: 5,
    type: "Debit Card",
    number: "**** **** **** 9012",
    expiration: "02/23",
    issuer: "ICICI Bank"
  },
  {
    id: 6,
    type: "Debit Card",
    number: "**** **** **** 9012",
    expiration: "02/23",
    issuer: "Punjab National Bank"
  }
];

function CardsPage() {
  return (
    <Layout3>
      <div
        className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="w-full md:max-w-5xl mx-auto">
          <h1 className="text-2xl font-medium mb-4 text-center text-gray-600">
            My Cards
          </h1>
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
      </div>
    </Layout3>
  );
}

export default CardsPage;
