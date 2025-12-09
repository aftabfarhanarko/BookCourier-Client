import React from "react";
import TextType from "../../../utils/TextType";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import LoadingSpinner from "../../../shared/LoadingSpinner ";
import { FiCreditCard } from "react-icons/fi";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "sonner";

const UserOrderTable = () => {
  const { user } = useAuth();
  const axioscehore = useAxiosSchore();
  const {
    data: orders,
    isLoading,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axioscehore.get(`orderlist?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(orders);
  console.log(user?.email);

  const handelcancel = (id) => {
    Swal.fire({
      title: "Confirm Book Deletion",
      text: `Are you sure you want to delete this book? This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "No, Cancel",

      customClass: {
        popup: "rounded-2xl shadow-xl",
        title: "text-lg font-semibold text-gray-800",
        htmlContainer: "text-gray-600",
        actions: "flex gap-3 justify-end",
        confirmButton:
          "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl",
        cancelButton:
          "bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-xl",
      },

      buttonsStyling: false,
      backdrop: `rgba(0,0,0,0.45)`,
    }).then((result) => {
      if (result.isConfirmed) {
        axioscehore
          .delete(`deletbook/${id}`)
          .then((res) => {
            // task query propley refetch delet data
            refetch();
            // console.log("Propley Delet Now", res);
            toast.success("Delet Now");
          })
          .catch((err) => {
            toast.warning(err?.code);
          });
        Swal.fire({
          icon: "success",
          title: "Book Successfully Deleted",
          text: "Your Book has been Deletd Proprely .",
          confirmButtonText: "OK",
          customClass: {
            popup: "rounded-2xl shadow-lg",
            title: "text-lg font-bold text-green-700",
            htmlContainer: "text-gray-700",
            confirmButton:
              "bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl",
          },
          buttonsStyling: false,
        });
      }
    });
  };

  const handelPaymentSession = (orderData) => {
    const bookInfo = {
      customerName: orderData.name,
      bookID: orderData?._id,
      customerEmail: orderData.email,
      customerAddress: orderData.address,
      customerPhoneNumber: orderData.phoneNumber,
      trakingId: orderData?.trakingId,

      // Book Mapping
      bookTitle: orderData.book.title,
      bookImage: orderData.book.image,
      bookAuthor: orderData.book.author,
      bookPrice: orderData.book.price_sell,

      // Seller Mapping
      sellerName: user?.displayName,
      sellerEmail: user?.email,

      // Status
      orderStatus: orderData.ordered_Status,
      paymentStatus: orderData.payment_status,
    };

    axioscehore.post(`creat-payment-session`, bookInfo).then((res) => {
      window.location.assign(res.data.url);
      console.log(res);
    });

    console.log("All Boks Informations", bookInfo);
    // console.log(orderData.sellerInfo.sellerName);
  };
  if (isLoading || isFetching || !user?.email)
    return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h1 className=" text-2xl md:text-3xl leading-tight text-secondary font-semibold">
        <TextType
          text={` My All Order List`}
          typingSpeed={70}
          deletingSpeed={40}
          pauseDuration={2000}
          loop={false}
          showCursor={false}
        />
      </h1>

      <div className=" px-6">
        <div className="overflow-x-auto mt-10  rounded-box border border-base-300  shadow bg-base-100">
          <table className="table  ">
            <thead className=" bg-base-300">
              <tr>
                <th className="p-4">Srl</th>
                <th className="p-4">Image</th>
                <th className="p-4">Buyer Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Address</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Book Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Ordered Status</th>
                <th className="p-4">Payment Status</th>
                <th className="p-4">Order Time</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((item, i) => (
                <tr key={i} className=" hover:bg-base-200">
                  <td>{i + 1}</td>
                  <td>
                    <img src={item?.book?.image} className=" w-10 h-10"></img>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>0{item.phoneNumber}</td>

                  {/* Book Info */}
                  <td>{item.book?.title}</td>
                  <td>{item.book?.price_sell} ৳</td>

                  {/* Order + Payment */}
                  <td
                    className={`
            font-semibold 
            ${
              item.ordered_Status === "pending"
                ? "text-orange-500"
                : "text-green-600"
            }
          `}
                  >
                    {item.ordered_Status}
                  </td>

                  <td
                    className={`
            font-semibold 
            ${
              item.payment_status === "unpaid"
                ? "text-red-500"
                : "text-green-600"
            }
          `}
                  >
                    {item.payment_status === "unpaid" ? (
                      <button
                        onClick={() => handelPaymentSession(item)}
                        className="
    bg-green-500 
    text-white 
    font-semibold 
    px-3 
    py-2 
    rounded-lg 
    flex 
    items-center 
    gap-2 
    shadow-md 
    hover:bg-green-600 
    hover:shadow-lg 
    transition 
    duration-300
  "
                      >
                        <FiCreditCard size={18} /> Pay Now
                      </button>
                    ) : (
                      item.payment_status
                    )}
                  </td>

                  {/* Order Time */}
                  <td>{new Date(item.orderTime).toLocaleString()}</td>
                  <td
                    className={`
            font-semibold 
            ${
              item.payment_status === "unpaid"
                ? "text-red-500"
                : "text-green-600"
            }
          `}
                  >
                    {item.payment_status === "unpaid" ? (
                      <button
                        onClick={() => handelcancel(item._id)}
                        className="
  bg-red-500 
  text-white 
  font-semibold 
  px-5 
  py-2 
  rounded-lg 
  shadow-md 
  hover:bg-red-600 
  hover:shadow-lg 
  transition 
  duration-300
"
                      >
                        Cancel
                      </button>
                    ) : (
                      "Not Canceled"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrderTable;
