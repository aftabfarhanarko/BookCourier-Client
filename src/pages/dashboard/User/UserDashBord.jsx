import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ShoppingCart, Package, CheckCircle, Clock, Truck, BookOpen, TrendingUp, Calendar } from 'lucide-react';

const UserDashBord = () => {
  // Sample data - in real app, this would come from API
  const [stats] = useState({
    totalOrders: 24,
    delivered: 18,
    pending: 3,
    shipped: 3,
    totalBooksRented: 24,
    activeRentals: 5
  });

  // Order history data for chart
  const orderHistory = [
    { month: 'Jan', orders: 2 },
    { month: 'Feb', orders: 3 },
    { month: 'Mar', orders: 4 },
    { month: 'Apr', orders: 5 },
    { month: 'May', orders: 6 },
    { month: 'Jun', orders: 4 }
  ];

  // Order status distribution
  const statusData = [
    { status: 'Delivered', value: stats.delivered, color: '#10b981' },
    { status: 'Shipped', value: stats.shipped, color: '#3b82f6' },
    { status: 'Pending', value: stats.pending, color: '#f59e0b' }
  ];

  // Recent orders
  const recentOrders = [
    { id: '#1234', book: 'The Great Gatsby', status: 'Delivered', date: '2024-06-10', color: 'text-green-600', bgColor: 'bg-green-100' },
    { id: '#1233', book: 'To Kill a Mockingbird', status: 'Shipped', date: '2024-06-12', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { id: '#1232', book: '1984', status: 'Pending', date: '2024-06-13', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { id: '#1231', book: 'Pride and Prejudice', status: 'Delivered', date: '2024-06-08', color: 'text-green-600', bgColor: 'bg-green-100' }
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle, bgColor, iconColor, badge }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1 truncate">{title}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{value}</h3>
          {subtitle && <p className="text-xs text-gray-400 mt-1 truncate">{subtitle}</p>}
        </div>
        <div className="relative">
          <div className={`${bgColor} p-3 sm:p-4 rounded-full flex-shrink-0 ml-2`}>
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">My Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600">Track your book rentals and orders</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <StatCard
            icon={ShoppingCart}
            title="Total Orders"
            value={stats.totalOrders}
            subtitle="All time orders"
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={CheckCircle}
            title="Delivered"
            value={stats.delivered}
            subtitle="Successfully received"
            bgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <StatCard
            icon={Truck}
            title="Shipped"
            value={stats.shipped}
            subtitle="On the way"
            bgColor="bg-purple-100"
            iconColor="text-purple-600"
            badge={stats.shipped > 0 ? stats.shipped : null}
          />
          <StatCard
            icon={Clock}
            title="Pending"
            value={stats.pending}
            subtitle="Being processed"
            bgColor="bg-yellow-100"
            iconColor="text-yellow-600"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Order History Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Order History</h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <BarChart data={orderHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="orders" fill="#3b82f6" name="Orders" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Order Status Pie Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Order Status</h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ status, value }) => `${status}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Active Rentals & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Active Rentals Card */}
          <div className="lg:col-span-1 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-md p-4 sm:p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1 min-w-0">
                <p className="text-purple-100 text-xs sm:text-sm font-medium mb-1">Active Rentals</p>
                <h3 className="text-3xl sm:text-4xl font-bold">{stats.activeRentals}</h3>
                <p className="text-purple-100 text-xs sm:text-sm mt-2">Currently reading</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full flex-shrink-0 ml-2">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </div>
          </div>

          {/* Trend Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Monthly Trend</h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={150} minWidth={300}>
                <LineChart data={orderHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Line type="monotone" dataKey="orders" stroke="#8b5cf6" strokeWidth={2} name="Orders" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Order ID</th>
                  <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Book Name</th>
                  <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 hidden sm:table-cell">Date</th>
                  <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-800">{order.id}</td>
                    <td className="py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 truncate max-w-xs">{order.book}</td>
                    <td className="py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-500 hidden sm:table-cell">{order.date}</td>
                    <td className="py-3 px-2 sm:px-4">
                      <span className={`${order.bgColor} ${order.color} px-2 py-1 rounded-full text-xs font-medium`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Browse Books
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
            <Package className="w-5 h-5 mr-2" />
            Track Orders
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center sm:col-span-2 lg:col-span-1">
            <Calendar className="w-5 h-5 mr-2" />
            Rental History
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashBord;
