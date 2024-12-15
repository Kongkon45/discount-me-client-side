"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
    const [showPasswod, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="bg-gray-300 pt-[20px] pb-[30px] md:pb-[50px] lg:pb-[100px]">
        <h4 className="text-3xl md:text-4xl lg:text-[48px] text-center text-dark-400 font-semibold pb-[20px]">Sign In</h4>
      <form className="px-[30px] md:px-0 w-full md:w-1/2 lg:w-1/3 mx-auto mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input className="w-full py-3 px-4 rounded-lg border bg-white"  {...register("email", { required: true })} type="email" placeholder="Email"/>
        </div>
        <div className="relative">
        <input className="w-full py-3 px-4 rounded-lg border bg-white mt-[17px]"  {...register("password", { required: true })} type = {showPasswod ? "text" : "password"} placeholder="Password"/>
        <button onClick ={()=> setShowPassword(!showPasswod)} type="button" className="absolute top-9 right-3 cursor-pointer">{showPasswod ? <IoEyeOutline/> : <IoEyeOffOutline/>}</button>
        </div>
        {errors.password && <span>This field is required</span>}
        <div className="flex justify-between items-center py-[20px]">
            <div className="flex items-center gap-1">
            <input className="w-[22px] h-[22px]" type="checkbox" name="check" />
            <label className="text-[20px] text-dark-500 font-normal" htmlFor="check">Remember me</label>
            </div>
            <div>
                <Link className="text-[20px] text-dark-500 font-normal" href="/forgot">Forget Password</Link>
            </div>
        </div>
        <input className="w-full bg-primary text-white text-[20px] font-bold py-3 rounded-full" type="submit" value="Login" />
      </form>
      <p className="text-[20px] text-dark-500 font-normal text-center pt-[15px]">Don&apos;t have account? <Link className="font-medium" href="/signup">Register</Link></p>
    </div>
  );
};

export default SignInForm;
