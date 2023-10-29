import React from "react";
import Layout3 from "../Components/Layout/Layout3";


const notifications = [
  {
    id: 1,
    title: "New Message",
    content: "You have a new message from John Doe.",
    timestamp: "2023-09-10 09:30 AM"
  },
  {
    id: 2,
    title: "Payment Received",
    content: "You received a payment of $1000 from Company X.",
    timestamp: "2023-09-09 02:15 PM"
  }
];

function NotificationsPage() {
  return (
    <>
      <Layout3>
        <div
          className=" bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <li key={notification.id}>
                    <div className="flex items-start px-4 py-4">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9l-6 6-2-2"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {notification.content}
                        </div>
                        <div className="text-sm text-gray-500">
                          {notification.timestamp}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout3>
    </>
  );
}
export default NotificationsPage;
