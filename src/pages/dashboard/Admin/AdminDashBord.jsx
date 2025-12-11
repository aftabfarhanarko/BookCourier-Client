import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CiClock2 } from "react-icons/ci";

import {
  Users,
  BookOpen,
  TrendingUp,
  Package,
  CheckCircle,
  Clock,
  DollarSign,
  Menu,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import LoadingSpinner from "../../../shared/LoadingSpinner ";

const AdminDashboard = () => {
  const axioscehore = useAxiosSchore();
  const { data: admin, isLoading } = useQuery({
    queryKey: ["adminDeshbordData"],
    queryFn: async () => {
      const res = await axioscehore.get("admindeshborderdata");
      return res.data;
    },
  });
  console.log(admin);
  // Sample data - in real app, this would come from API
  const stats = {
    totalUsers: admin?.userCounts ?? 0,
    totalBooks: admin?.allBookCount ?? 0,
    totalRented: admin?.paymentCount ?? 0,
    totalDelivered: admin?.deliveryCount ?? 0,
    pendingDelivery: admin?.pendingBooks ?? 0,
    revenue: 45280,
  };

  // Monthly data for charts
  const monthlyData = [
    { month: "Jan", users: 85, books: 245, rented: 180 },
    { month: "Feb", users: 92, books: 280, rented: 210 },
    { month: "Mar", users: 108, books: 320, rented: 245 },
    { month: "Apr", users: 125, books: 385, rented: 290 },
    { month: "May", users: 142, books: 420, rented: 335 },
    { month: "Jun", users: 158, books: 465, rented: 380 },
  ];

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

  // Delivery status
  const deliveryData = [
    { status: "Delivered", value: stats.totalDelivered, color: "#10b981" },
    { status: "Pending", value: stats.pendingDelivery, color: "#f59e0b" },
  ];





  const StatCard = ({
    icon: Icon,
    title,
    value,
    subtitle,
    bgColor,
    iconColor,
  }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1 truncate">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {value.toLocaleString()}
          </h3>
          {subtitle && (
            <p className="text-xs text-gray-400 mt-1 truncate">{subtitle}</p>
          )}
        </div>
        <div
          className={`${bgColor} p-3 sm:p-4 rounded-full flex-shrink-0 ml-2`}
        >
          <Icon className={`${iconColor} w-6 h-6 sm:w-8 sm:h-8`} />
        </div>
      </div>
    </div>
  );


//     if(isLoading){
//     return <LoadingSpinner/>
//   }
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
            Admin Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Complete statistics of your book rental business
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <StatCard
            icon={Users}
            title="Total Users"
            value={stats.totalUsers}
            subtitle="Registered Accounts"
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={BookOpen}
            title="Total Books"
            value={stats.totalBooks}
            subtitle="In Collection"
            bgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <StatCard
            icon={TrendingUp}
            title="Total Payment Success"
            value={stats.totalRented}
            subtitle="All Time"
            bgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
          <StatCard
            icon={CheckCircle}
            title="Delivered"
            value={stats.totalDelivered}
            subtitle={`Pending: ${stats.pendingDelivery}`}
            bgColor="bg-emerald-100"
            iconColor="text-emerald-600"
          />
          <StatCard
            icon={CiClock2}
            title="Pending"
            value={stats.pendingDelivery}
            subtitle={`Pending: ${stats.pendingDelivery}`}
            bgColor="bg-red-100"
            iconColor="text-red-600"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Monthly Growth Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Monthly Growth
            </h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <LineChart data={monthlyData}>
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
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="New Users"
                  />
                  <Line
                    type="monotone"
                    dataKey="rented"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Rentals"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Book Categories Pie Chart */}
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

        {/* Revenue and Delivery Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Monthly Revenue Bar Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Monthly Book Rentals
            </h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <BarChart data={monthlyData}>
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
                    dataKey="rented"
                    fill="#8b5cf6"
                    name="Rented Books"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Delivery Status and Revenue */}
          <div className="space-y-4 sm:space-y-6">
            {/* Delivery Status Pie */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Delivery Status
              </h2>
              <div className="w-full overflow-x-auto">
                <ResponsiveContainer width="100%" height={180} minWidth={250}>
                  <PieChart>
                    <Pie
                      data={deliveryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ status, value }) => `${status}: ${value}`}
                    >
                      {deliveryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ fontSize: "12px" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md p-4 sm:p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-blue-100 text-xs sm:text-sm font-medium mb-1">
                    Total Revenue
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold truncate">
                    ৳{stats.revenue.toLocaleString()}
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm mt-2">
                    23% increase this month
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full flex-shrink-0 ml-2">
                  <DollarSign className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Recent Activity
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              {
                icon: Users,
                text: "New user registration: Mohammad Rahim",
                time: "5 mins ago",
                color: "text-blue-600",
              },
              {
                icon: BookOpen,
                text: 'New book added: "The Great Gatsby"',
                time: "15 mins ago",
                color: "text-green-600",
              },
              {
                icon: Package,
                text: 'Book rented: "To Kill a Mockingbird"',
                time: "30 mins ago",
                color: "text-purple-600",
              },
              {
                icon: CheckCircle,
                text: "Delivery completed: Order #1234",
                time: "1 hour ago",
                color: "text-emerald-600",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <activity.icon
                  className={`${activity.color} w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0`}
                />
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
      </div>
    </div>
  );
};

export default AdminDashboard;
