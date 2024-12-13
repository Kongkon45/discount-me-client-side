"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress: string;
  country: string;
  states: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
  address: string;
  radio: boolean;
}

const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barishal",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cumilla",
  "Cox's Bazar",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore (Jessore)",
  "Jhalokati",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachhari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
  "Habiganj",
];

const BillingAddress = () => {

  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data:any) => {
    console.log(data);
    
    reset();
  };
  return (
    <div className="">
        
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
            <div className="border rounded-lg p-6 my-6 profile__bg">
            <h4 className="text-xl text-left text-dark-400 font-semibold pb-[15px] border-b border-bg-[#1A1A1A]">
            Billing Address
            </h4>
              <div className="w-full flex gap-4 md:gap-7 lg:gap-10 items-center mt-[15px]">
                <div className="w-1/3">
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
                <div className="w-1/3">
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
                <div className="w-1/3">
                  <label className="text-sm font-normal" htmlFor="companyName">
                    Company Name (optional)
                  </label>{" "}
                  <br />
                  <input
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                    placeholder="Zakirsoft"
                    type="text"
                    {...register("companyName")}
                  />
                </div>
              </div>
              <div className="my-4">
                <label className="text-sm font-normal" htmlFor="streetAddress">
                  Street Address
                </label>{" "}
                <br />
                <input
                  className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                  placeholder="4140 Par|"
                  type="email"
                  {...register("streetAddress")}
                />
              </div>

              <div className="flex gap-4 md:gap-7 lg:gap-10 my-4">
                <div className="w-1/3">
                  <label className="text-sm font-normal" htmlFor="country">
                    Country / Region
                  </label>{" "}
                  <br />
                  <select
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2 mt-1"
                    {...register("country")}
                  >
                    <option value="">United States</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/3">
                  <label className="text-sm font-normal" htmlFor="states">
                    States
                  </label>{" "}
                  <br />
                  <select
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2 mt-1"
                    {...register("states")}
                  >
                    <option value="">Washington DC</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/3">
                  <label className="text-sm font-normal" htmlFor="zipCode">
                  Zip Code
                  </label>{" "}
                  <br />
                  <input
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                    placeholder="20033"
                    type="text"
                    {...register("zipCode")}
                  />
                </div>
              </div>
              <div className="flex gap-4 md:gap-7 lg:gap-10 my-4">
                <div className="w-1/2 my-4">
                  <label className="text-sm font-normal" htmlFor="email">
                    Email Address :{" "}
                  </label>{" "}
                  <br />
                  <input
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                    placeholder="dianne.russell@gmail.com"
                    type="email"
                    {...register("email")}
                  />
                </div>
                <div className="w-1/2 my-4">
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
              </div>
              <div className="mt-[20px] pb-[5px]">
            <input
              className="bg-primary text-white text-base font-semibold py-3 px-[36px] rounded-full"
              type="submit"
              value="Save Changes"
            />
          </div>
            </div>
          </div>
      </form>
    </div>
  );
};

export default BillingAddress;
