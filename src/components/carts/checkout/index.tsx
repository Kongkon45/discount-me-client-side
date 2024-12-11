"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

interface IFormInput {
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress: string;
  country: string;
  states: string;
  email: string;
  phoneNumber: string;
  address: string;
  radio: boolean;
  subTotal: number;
  productId: string;
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

const CheckoutPage = () => {
  const productItem = useSelector((state: any) => state.carts.carts);
  // console.log(productItem);

  const totalPrice = productItem.reduce(
    (total: any, item: any) => total + item.quantity * item.price,
    0
  );

  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    data.subTotal = totalPrice;
    // data.productId = productItem.map((id:any)=>id._id === productItem._id)
    console.log(data);

    // https://raf-cart-server-side.vercel.app/

    // fetch("https://raf-cart-server-side.vercel.app/api/order", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     window.location.replace(result.url);
    //     console.log(result);
    //   });
    reset();
  };
  return (
    <div>
      <div className="flex justify-end mr-10 mt-4 bg-gray-100">
        <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-primary hover:text-white border border-primary rounded-lg text-primary py-1 px-4 transition-all ease-in-out duration-700">
          <Link href={`/cart`}>Back</Link>
          <FaAngleDoubleRight />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex w-full mt-6 lg:px-0 px-10">
          <div className="lg:w-2/4 w-full mx-auto">
            <h2 className="text-4xl font-normal text-dark-600 pt-10">
              Billing Information
            </h2>
            <div className="border rounded-lg p-6 my-6 profile__bg">
              <div className="flex gap-10 items-center">
                <div className="w-1/3">
                  <label className="text-sm font-normal" htmlFor="firstName">
                    First Name :{" "}
                  </label>{" "}
                  <br />
                  <input
                    className="w-full border hover:border-primary rounded-md py-1 px-2 text-sm mt-1"
                    placeholder="Enter your name..."
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
                    placeholder="Enter your lastName..."
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
                    placeholder="Enter your company..."
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
                  placeholder="Enter your street Address..."
                  type="email"
                  {...register("streetAddress")}
                />
              </div>

              <div className="flex gap-10 my-4">
                <div className="w-1/2">
                  <label className="text-sm font-normal" htmlFor="country">
                    Country / Region
                  </label>{" "}
                  <br />
                  <select
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2 mt-1"
                    {...register("country")}
                  >
                    <option value="">Select Town/City</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="text-sm font-normal" htmlFor="states">
                    States
                  </label>{" "}
                  <br />
                  <select
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2 mt-1"
                    {...register("states")}
                  >
                    <option value="">Select states</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-10 my-4">
                <div className="w-1/2 my-4">
                  <label className="text-sm font-normal" htmlFor="email">
                    Email Address :{" "}
                  </label>{" "}
                  <br />
                  <input
                    className="w-full text-sm border hover:border-primary rounded-md py-1 px-2  mt-1"
                    placeholder="Enter your email..."
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
                    placeholder="Enter your phone number..."
                    type="string"
                    {...register("phoneNumber")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 w-full mx-auto ">
            <h2 className="w-full lg:text-xl text-sm rounded-lg font-semibold text-center bg-[#e9e4e4] text-black pl-10 py-1 ">
              Your Order
            </h2>
            <div className="mt-6 border rounded-lg p-4 profile__bg">
              <h2 className="text-left lg:text-2xl text-base font-bold mb-3">
                Order Summery
              </h2>
              <ul>
                {productItem?.length === 0 ? (
                  <li className="lg:text-2xl text-xl font-normal text-center">
                    Cart Not Found
                  </li>
                ) : (
                  productItem?.map((product: any) => {
                    return (
                      <li
                        key={product._id}
                        className="flex justify-between items-center"
                      >
                        <img
                          className="w-12 h-12"
                          src={`${product?.img}`}
                          alt={`${product?.title}`}
                        />
                        <h5 className="lg:text-sm text-xs font-semibold">
                          {product?.title}
                        </h5>
                        <p className="lg:text-sm text-xs font-semibold">
                          ${product?.price}
                        </p>
                        <p className="lg:text-sm text-xs font-semibold">
                          X{product?.quantity}
                        </p>
                        <p className="lg:text-sm text-xs font-normal">
                          ${product?.quantity * product?.price}
                        </p>
                      </li>
                    );
                  })
                )}
              </ul>
              <div className="mt-6 mb-2">
                <hr className="border my-2" />
                <h5 className="text-sm font-normal flex justify-between items-center">
                  Shipping <span>Free</span>
                </h5>
                <hr className="border my-2" />
                <h5 className="text-sm font-normal flex justify-between items-center">
                  Total <strong>${totalPrice}</strong>
                </h5>
                <div>
                  <h5 className="text-lg md:text-[22px] font-medium text-dark-400 pt-2">
                    Payment Method
                  </h5>
                </div>
                <div className="flex items-center gap-2 mt-4">
                <input
                  className="lg:w-4 w-3 lg:h-4 h-3"
                  type="radio"
                  {...register("radio")}
                />
                <label className="lg:text-sm text-sm" htmlFor="radio">
                Cash on Delivery
                </label>
              </div>
                <div className="flex items-center gap-2 mt-2">
                <input
                  className="lg:w-4 w-3 lg:h-4 h-3"
                  type="radio"
                  {...register("radio")}
                />
                <label className="lg:text-sm text-sm" htmlFor="radio">
                Paypal
                </label>
              </div>
                <button
                  className="w-full text-sm mt-3 bg-primary text-white py-2 px-4 rounded-lg hover:border hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 ease-in-out "
                  type="submit"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
