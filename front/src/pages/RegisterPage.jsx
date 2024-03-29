import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

 


  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white">
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.username && (
            <p className="text-red-500 text-sm font-medium mt-1">
              Username is required
            </p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-medium mt-1">
              Email is required
            </p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-medium mt-1">
              Password is required
            </p>
          )}
          <button type="submit">Register</button>
        </form>

        <p className="flex gap-x-2 justify-between">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
