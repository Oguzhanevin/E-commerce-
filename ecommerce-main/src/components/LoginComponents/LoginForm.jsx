import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../store/thunks/authThunks";
import { useHistory, useLocation } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const loading = useSelector((state) => state.client.loading);

  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = (data) => {
    try {
      dispatch(handleLogin(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!loading && user?.token) {
      if (rememberMe) {
        localStorage.setItem("token", JSON.stringify(user?.token));
      }
      // Eğer `location.state` varsa oraya geri dön, yoksa ana sayfaya git
      if (location.state?.from) {
        history.replace(location.state.from);
      } else {
        history.push("/");
      }
    }
  }, [loading, user, rememberMe, history, location.state]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm mx-auto font-sans"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-white border border-gray-300 rounded py-2 px-4"
        />
        {errors.email && (
          <span className="text-red-500 text-xs italic">Email is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: true,
          })}
          className="w-full border border-gray-300 p-2"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
            Password min 8 character including numbers, lower case, upper case
            and special chars
          </span>
        )}
      </div>

      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="remember"
          defaultValue={false}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="remember" className="ml-2">
          Remember Me
        </label>
      </div>

      <button
        type="submit"
        className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
