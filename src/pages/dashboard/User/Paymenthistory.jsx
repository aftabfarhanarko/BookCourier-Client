import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import TextType from "../../../utils/TextType";
import LoadingSpinner from "../../../shared/LoadingSpinner ";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axioscehore = useAxiosSchore();

  const { data, isLoading , isFetching} = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axioscehore.get(`paymentChack?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(data);

  if (isLoading || isFetching || !user?.email) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <h1 className=" text-2xl md:text-3xl leading-tight text-secondary font-semibold">
        <TextType
          text={` Payment History`}
          typingSpeed={70}
          deletingSpeed={40}
          pauseDuration={2000}
          loop={false}
          showCursor={false}
        />
      </h1>

      <div className="mt-10 w-full overflow-x-auto">
        <div className="min-w-[1200px] bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-100 border-b border-gray-300">
            <table className="table w-full">
                  <thead className=" bg-base-300">
              <tr>
                <th className="p-4">Srl</th>
                <th className="p-4 ">Book Name</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Currency</th>
                <th className="p-4">Customer Email</th>
                <th className="p-4">Tracking ID</th>
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Payment Status</th>
                <th className="p-4">Paid At</th>
                
              </tr>
            </thead>
             
            </table>
          </div>

          {/* Table Body */}
          <div className="max-h-[600px] overflow-y-auto">
            <table className="table w-full">
              <tbody>
                {data.map((item, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 transition-all border-b border-gray-100"
                  >
                    {/* Serial */}
                    <td className="p-4 font-medium text-gray-700">{i + 1}</td>

                    {/* Book Name */}
                    <td className="p-4 font-semibold text-gray-800">
                      {item?.bookName}
                    </td>

                    {/* Amount */}
                    <td className="p-4 font-bold text-gray-900">
                      ${item?.amount}
                    </td>

                    {/* Currency */}
                    <td className="p-4 uppercase text-gray-700">
                      {item?.currency}
                    </td>

                    {/* Email */}
                    <td className="p-4 text-gray-700">{item?.customerEmail}</td>

                    {/* Tracking ID */}
                    <td className="p-4 font-mono text-blue-600">
                      {item?.trakingId}
                    </td>

                    {/* Transaction */}
                    <td className="p-4 font-mono text-gray-700">
                      {item?.transactionId}
                    </td>

                    {/* Payment Status */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      item.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                      >
                        {item.paymentStatus}
                      </span>
                    </td>

                    {/* Paid At */}
                    <td className="p-4 text-sm text-gray-700">
                      {new Date(item?.paidAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
