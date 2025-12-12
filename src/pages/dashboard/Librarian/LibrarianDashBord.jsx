import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  BookPlus,
  DollarSign,
  Truck,
  CheckCircle,
  Package,
  TrendingUp,
  AlertCircle,
  Clock,
} from "lucide-react";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const LibrarianDashboard = () => {
  const { user } = useAuth();
  const axioscehore = useAxiosSchore();
  const { data: librarian } = useQuery({
    queryKey: ["LibarianADdallbooksData"],
    queryFn: async () => {
      const res = await axioscehore.get(
        `liberienDeshbord?email=${user?.email}`
      );
      return res.data;
    },
  });

 const stats = {
  booksAdded: librarian?.totalLibrarianAddBooks ?? 0,
  totalEarnings: 28450,
  pendingPayment: librarian?.unpidePayment ?? 0,
  booksDelivered: librarian?.totalDeliverylibrarianBook ?? 0,
  booksShipped: librarian?.totalShippedlibrarianBook ?? 0,
  pendingOrders: librarian?.totalPendinglibrarianBook ?? 0,
  activeListings: 142,
};


  // Monthly books added
  const booksAddedData = [
    { month: "Jan", books: 12, earnings: 2400 },
    { month: "Feb", books: 18, earnings: 3600 },
    { month: "Mar", books: 25, earnings: 4800 },
    { month: "Apr", books: 22, earnings: 4200 },
    { month: "May", books: 30, earnings: 5850 },
    { month: "Jun", books: 28, earnings: 5200 },
  ];

  // Delivery status distribution
  const deliveryStatusData = [
    { status: "Delivered", value: stats.booksDelivered, color: "#10b981" },
    { status: "Shipped", value: stats.booksShipped, color: "#3b82f6" },
    { status: "Pending", value: stats.pendingOrders, color: "#f59e0b" },
  ];

  // Book category distribution
  const categoryData = [
    { name: "Programming", value: 1250, color: "#3b82f6" }, // Blue
    { name: "Academic", value: 890, color: "#10b981" }, // Green
    { name: "Novel", value: 645, color: "#f59e0b" }, // Amber
    { name: "Story", value: 520, color: "#8b5cf6" }, // Purple

    // Previously duplicated colors — now fixed:
    { name: "Business", value: 284, color: "#ef4444" }, // Red
    { name: "Religious", value: 284, color: "#06b6d4" }, // Cyan
    { name: "Self-Help", value: 284, color: "#a855f7" }, // Violet
    { name: "Other", value: 284, color: "#14b8a6" }, // Teal
  ];

  // Recent activities
  const recentActivities = [
    {
      icon: BookPlus,
      text: 'Added new book: "The Alchemist"',
      time: "10 mins ago",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: DollarSign,
      text: "Payment received: ৳850",
      time: "25 mins ago",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Truck,
      text: "Book shipped: Order #5432",
      time: "1 hour ago",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: CheckCircle,
      text: "Delivery confirmed: Order #5421",
      time: "2 hours ago",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
  ];

  const StatCard = ({
    icon: Icon,
    title,
    value,
    subtitle,
    bgColor,
    iconColor,
    badge,
    isCurrency,
  }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1 truncate">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {isCurrency ? `৳${value.toLocaleString()}` : value.toLocaleString()}
          </h3>
          {subtitle && (
            <p className="text-xs text-gray-400 mt-1 truncate">{subtitle}</p>
          )}
        </div>
        <div className="relative">
          <div
            className={`${bgColor} p-3 sm:p-4 rounded-full flex-shrink-0 ml-2`}
          >
            <Icon className={`${iconColor} w-6 h-6 sm:w-8 sm:h-8`} />
          </div>
          {badge && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
            Librarian Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manage your book collection and track earnings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <StatCard
            icon={BookPlus}
            title="Books Added"
            value={stats.booksAdded}
            subtitle="Total listings"
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={DollarSign}
            title="Total Earnings"
            value={stats.totalEarnings}
            subtitle={`Pending: ৳${stats.pendingPayment}`}
            bgColor="bg-green-100"
            iconColor="text-green-600"
            isCurrency
          />
          <StatCard
            icon={CheckCircle}
            title="Delivered"
            value={stats.booksDelivered}
            subtitle="Completed orders"
            bgColor="bg-emerald-100"
            iconColor="text-emerald-600"
          />
          <StatCard
            icon={Truck}
            title="Shipped"
            value={stats.booksShipped}
            subtitle="In transit"
            bgColor="bg-purple-100"
            iconColor="text-purple-600"
            badge={stats.booksShipped > 0 ? stats.booksShipped : null}
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-md p-4 sm:p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-orange-100 text-xs sm:text-sm font-medium mb-1">
                  Pending Orders
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold">
                  {stats.pendingOrders}
                </h3>
                <p className="text-orange-100 text-xs sm:text-sm mt-2">
                  Need attention
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full flex-shrink-0 ml-2">
                <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-md p-4 sm:p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-indigo-100 text-xs sm:text-sm font-medium mb-1">
                  Active Listings
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold">
                  {stats.activeListings}
                </h3>
                <p className="text-indigo-100 text-xs sm:text-sm mt-2">
                  Available for rent
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full flex-shrink-0 ml-2">
                <Package className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Books Added Over Time */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Monthly Books Added
            </h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <BarChart data={booksAddedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Bar
                    dataKey="books"
                    fill="#3b82f6"
                    name="Books Added"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Delivery Status */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Delivery Status
            </h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <PieChart>
                  <Pie
                    data={deliveryStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ status, value }) => `${status}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {deliveryStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: "12px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Earnings & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Earnings Trend */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Earnings Trend
            </h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <AreaChart data={booksAddedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Area
                    type="monotone"
                    dataKey="earnings"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                    name="Earnings (৳)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Book Categories */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Book Categories
            </h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: "12px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Recent Activities
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div
                  className={`${activity.bgColor} p-2 rounded-lg mr-3 flex-shrink-0`}
                >
                  <activity.icon
                    className={`${activity.color} w-4 h-4 sm:w-5 sm:h-5`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 text-xs sm:text-sm font-medium truncate">
                    {activity.text}
                  </p>
                </div>
                <span className="text-gray-400 text-xs ml-2 flex-shrink-0">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
            <BookPlus className="w-5 h-5 mr-2" />
            Add New Book
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
            <DollarSign className="w-5 h-5 mr-2" />
            View Earnings
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
            <Truck className="w-5 h-5 mr-2" />
            Manage Shipments
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
            <Clock className="w-5 h-5 mr-2" />
            Pending Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
