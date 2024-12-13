"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

type Inputs = {
  password: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const [showPasswod, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="bg-gray-300 pt-[20px] pb-[100px]">
      <div className="profile__bg py-[15px]">
        <h4 className="text-xl text-left text-dark-400 font-semibold pb-[15px] pl-[30px] border-b border-bg-[#1A1A1A]">
          Change Password
        </h4>
        <form className="px-[30px] pt-[15px]" onSubmit={handleSubmit(onSubmit)}>
          {/* Current Password  */}
          <div>
            <label className="text-sm font-normal" htmlFor="password">
              Current Password
            </label>{" "}
            <br />
            <div className="relative">
              <input
                className="w-full py-3 px-4 rounded-lg border bg-white mt-[10px]"
                {...register("password", { required: true })}
                type={showPasswod ? "text" : "password"}
                placeholder="Password"
              />
              <button
                onClick={() => setShowPassword(!showPasswod)}
                type="button"
                className="absolute top-7 right-3 cursor-pointer"
              >
                {showPasswod ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="w-full flex items-center gap-[18px] mt-[15px]">
            {/* new password  */}
          <div className="w-1/2">
            <label className="text-sm font-normal" htmlFor="confirmPassword">
            New Password
            </label>{" "}
            <br />
            <div className="relative">
              <input
                className="w-full py-3 px-4 rounded-lg border bg-white mt-[10px]"
                {...register("confirmPassword", { required: true })}
                type={showPasswod ? "text" : "password"}
                placeholder="Password"
              />
              <button
                onClick={() => setShowPassword(!showPasswod)}
                type="button"
                className="absolute top-7 right-3 cursor-pointer"
              >
                {showPasswod ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
            {errors.confirmPassword && <span>This field is required</span>}
          </div>
            {/* Confirm Password  */}
          <div className="w-1/2">
            <label className="text-sm font-normal" htmlFor="confirmPassword">
            Confirm Password
            </label>{" "}
            <br />
            <div className="relative">
              <input
                className="w-full py-3 px-4 rounded-lg border bg-white mt-[10px]"
                {...register("confirmPassword", { required: true })}
                type={showPasswod ? "text" : "password"}
                placeholder="Password"
              />
              <button
                onClick={() => setShowPassword(!showPasswod)}
                type="button"
                className="absolute top-7 right-3 cursor-pointer"
              >
                {showPasswod ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>
            {errors.confirmPassword && <span>This field is required</span>}
          </div>
          </div>
          

          <div className="mt-[20px] pb-[5px]">
            <input
              className="bg-primary text-white text-base font-semibold py-3 px-[36px] rounded-full"
              type="submit"
              value="Change Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
