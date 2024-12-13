"use client";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const AccountSettings = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    console.log(data);

    reset();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 border rounded-lg p-6 my-6 profile__bg">
      <div className="md:col-span-3">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
              <h4 className="text-xl text-left text-dark-400 font-semibold pb-[15px] border-b border-bg-[#1A1A1A]">
                Account Settings
              </h4>

              <div className="mt-5">
                <label className="text-sm font-normal" htmlFor="firstName">
                  First Name :{" "}
                </label>{" "}
                <br />
                <input
                  className="w-full border hover:border-primary rounded-md py-1 px-2 text-sm mt-1"
                  placeholder="Dianne"
                  type="text"
                  {...register("firstName")}
                />
              </div>
              <div className="my-2">
                <label className="text-sm font-normal" htmlFor="lastName">
                  Last Name :{" "}
                </label>{" "}
                <br />
                <input
                  className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                  placeholder="Russell"
                  type="text"
                  {...register("lastName")}
                />
              </div>
              <div className="mb-2">
                <label className="text-sm font-normal" htmlFor="email">
                  Email
                </label>{" "}
                <br />
                <input
                  className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                  placeholder="dianne.russell@gmail.com"
                  type="text"
                  {...register("email")}
                />
              </div>
              <div className="">
                <label className="text-sm font-normal" htmlFor="phoneNumber">
                  Phone Number :{" "}
                </label>{" "}
                <br />
                <input
                  className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                  placeholder="(603) 555-0123"
                  type="string"
                  {...register("phoneNumber")}
                />
              </div>

              <div className="mt-[20px] pb-[5px]">
                <input
                  className="bg-primary text-white text-base font-semibold py-3 px-[36px] rounded-full"
                  type="submit"
                  value="Save Changes"
                />
              </div>
            </div>
        </form>
      </div>
      <div className="md:col-span-2 flex flex-col items-center justify-center">
        <Image
          src="/assets/homePage/profile_img.png"
          alt="profile image"
          width={220}
          height={220}
        />
        <button className="mt-4 text-base font-semibold text-primary py-[12px] px-[36px] rounded-full border border-primary">
          Chose Image
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
