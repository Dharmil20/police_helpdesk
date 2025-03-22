import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Vortex } from './ui/vortex';

function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.go) {
        setUser({
          name: data.name,
          email: data.email,
          createdAt: data.createdAt,
        });
        localStorage.setItem('authToken', data.token);
        toast.success('Login successful! Redirecting...', { position: "top-right" });
        navigate('/policeadmin');
      } else {
        toast.error(data.message || 'Login failed', { position: "top-right" });
      }
    } catch (err) {
      toast.error('Error connecting to the server', { position: "top-right" });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center relative overflow-hidden">
      {/* Background Effect */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="fixed inset-0 w-full h-full z-0"
      />

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Centered Sign-in Box */}
      <div className="fixed center-0 z-10 w-full max-w-md bg-white/10 backdrop-blur-lg text-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center">
          
        </div>

        <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-xs sm:text-sm text-gray-600">
          Or{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            create a new account
          </Link>
        </p>

        <div className="mt-6 sm:mt-8">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-white block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-white block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10 text-sm"
                />
                <div className="absolute right-3 text-gray-500">
                  {showPassword ? 
                    <FaEyeSlash onClick={togglePassVisibility} className="cursor-pointer h-4 w-4" /> 
                    : 
                    <FaEye onClick={togglePassVisibility} className="cursor-pointer h-4 w-4" />
                  }
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/forgot-password" className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
