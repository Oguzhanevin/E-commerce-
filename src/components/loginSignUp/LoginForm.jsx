import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../store/thunks/clientThunks';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  
  const onSubmit = async (data) => {
    const { email, password, rememberMe } = data;
    
    setIsLoading(true); // Start loading state
    
    try {
      // Attempt login
      const user = await dispatch(login(email, password, rememberMe));
      
      // Save token if rememberMe is checked
      if (rememberMe) {
        localStorage.setItem('token', user.token);
      }

      // Redirect to home page after successful login
      history.push('/');
      toast.success('Login successful!');
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false); // Stop loading state after completion
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              {...register('rememberMe')}
            />
            <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginForm;
