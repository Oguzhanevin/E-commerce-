import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../api/axiosInstance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function SignUpForm() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("Müşteri");

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const onSubmit = async (data) => {
    try {
      let formattedData;
      if (selectedRole === "Mağaza") {
        formattedData = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: roles.find((role) => role.name === selectedRole)?.id,
          store: {
            name: data.store_name,
            phone: data.store_phone,
            tax_no: data.tax_no,
            bank_account: data.bank_account,
          },
        };
      } else {
        formattedData = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: roles.find((role) => role.name === selectedRole)?.id,
        };
      }

      const response = await axiosInstance.post("/signup", formattedData);

      // Başarılıysa logine yönlendir
      history.push("/login", {});
      toast.success(
        "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklayınız!"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm mx-auto font-sans"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true, minLength: 3 })}
          className="w-full bg-white border border-gray-300 rounded py-2 px-4"
        />
        {errors.name && errors.name.type === "required" && (
          <span className="text-red-500 text-xs italic">Name is required</span>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <span className="text-red-500 text-xs italic">
            Name must be at least 3 characters
          </span>
        )}
      </div>

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
            minLength: 8,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
              message:
                "Password must be min 8 character including numbers, lower case, upper case and special chars",
            },
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

      <div className="mb-4">
        <label
          htmlFor="passwordValidation"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password Validation
        </label>
        <input
          id="passwordValidation"
          type="password"
          {...register("passwordValidation", { required: true })}
          className="w-full border border-gray-300 p-2"
        />
        {errors.passwordValidation && (
          <span className="text-red-500 text-xs">
            Password validation is required
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role_id"
        >
          Role
        </label>
        <select
          id="role_id"
          {...register("role_id", { required: true })}
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded py-2 px-4"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
        {errors.role_id && (
          <span className="text-red-500 text-xs">Role is required</span>
        )}
      </div>

      {selectedRole === "Mağaza" && (
        <div className="mb-4">
          <label
            htmlFor="store_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Store Name
          </label>
          <input
            id="store_name"
            {...register("store_name", { required: true, minLength: 3 })}
            className="w-full border border-gray-300 p-2"
          />
          {errors.store_name && (
            <span className="text-red-500 text-xs">
              Store Name must be at least 3 characters
            </span>
          )}
        </div>
      )}

      {selectedRole === "Mağaza" && (
        <div className="mb-4">
          <label
            htmlFor="store_phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Store Phone
          </label>
          <input
            id="store_phone"
            {...register("store_phone", {
              required: true,
              pattern: {
                value: /^\+90 \d{10}$/,
                message: "Please enter a valid Türkiye phone number",
              },
            })}
            className="w-full border border-gray-300 p-2"
            defaultValue="+90 "
          />
          {errors.store_phone && (
            <span className="text-red-500 text-xs">
              {errors.store_phone.message}
            </span>
          )}
        </div>
      )}

      {selectedRole === "Mağaza" && (
        <div className="mb-4">
          <label
            htmlFor="tax_no"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Store Tax ID
          </label>
          <input
            id="tax_no"
            {...register("tax_no", {
              required: true,
              pattern: {
                value: /^T\d{4}V\d{6}$/,
                message: "Tax ID must match the pattern 'TXXXXVXXXXXX'",
              },
            })}
            className="w-full border border-gray-300 p-2"
          />
          {errors.tax_no && (
            <span className="text-red-500 text-xs">
              {errors.tax_no.message}
            </span>
          )}
        </div>
      )}

      {selectedRole === "Mağaza" && (
        <div className="mb-4">
          <label
            htmlFor="bank_account"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Store Bank Account
          </label>
          <input
            id="bank_account"
            {...register("bank_account", {
              required: true,
              pattern: {
                value: /^TR \d{2}\d{5}\d{1}\d{16}$/,
                message: "Bank Account should be a valid IBAN address",
              },
            })}
            className="w-full border border-gray-300 p-2"
            defaultValue="TR "
          />
          {errors.bank_account && (
            <span className="text-red-500 text-xs">
              {errors.bank_account.message}
            </span>
          )}
        </div>
      )}

      <button
        type="submit"
        className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
        style={{ opacity: isSubmitting ? 0.6 : 1 }}
      >
        {isSubmitting ? (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.794A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.144zM12 20a8 8 0 01-8-8h-4c0 6.627 5.373 12 12 12v-4zm8-7.794A7.962 7.962 0 0120 12h-4c0-3.042-1.135-5.824-3-7.938l-3 2.144z"
              ></path>
            </svg>
            <span>Submitting...</span>
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

export default SignUpForm;
