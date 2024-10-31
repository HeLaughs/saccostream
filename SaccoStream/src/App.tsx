import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoginForm } from '@/components/auth/LoginForm';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MemberDashboard } from '@/pages/dashboard/MemberDashboard';
import { AdminDashboard } from '@/pages/admin/AdminDashboard';
import { LoanManagement } from '@/pages/dashboard/LoanManagement';
import { Savings } from '@/pages/dashboard/Savings';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Welcome to SaccoStream
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Sign in to manage your SACCO account
                </p>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <LoginForm />
                </div>
              </div>
            </div>
          } />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MemberDashboard />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="loans" element={<LoanManagement />} />
            <Route path="savings" element={<Savings />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  );
}

export default App;