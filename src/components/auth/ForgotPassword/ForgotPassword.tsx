"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import "./ForgotPassword.css";
import Link from "next/link";

type Inputs = {
  email: string;
};

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="bg-gray-300 pt-[20px] pb-[100px]">
      <div className="forgot__Cart_bg w-full md:w-1/2 lg:w-2/5 mx-auto py-[30px]">
        <h4 className="text-3xl text-center text-dark-400 font-semibold pb-[20px]">
        Forgot password
        </h4>
        <form
          className="px-[30px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              className="w-full py-3 px-4 rounded-lg border bg-white"
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
            />
          </div>
          {errors.email && <span>This field is required</span>}
          
          <div className="mt-[20px]">
          <Link href="/set-new-password">
          <input
            className="w-full bg-primary text-white text-[20px] font-bold cursor-pointer py-3 rounded-full"
            type="submit" value="Submit"
          /></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
