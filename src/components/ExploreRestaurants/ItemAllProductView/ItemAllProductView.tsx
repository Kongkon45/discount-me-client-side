import React from "react";
import itemAllProductViewData from "../../../itemAllProducts.json";
import reviewData from "../../../reviewData.json";
import Image from "next/image";
import Link from "next/link";
import CategoryBanner from "@/components/CategoryBanner/CategoryBanner";

const ItemAllProductView = ({ id }: any) => {
  const filterItemAllProductView = itemAllProductViewData?.filter(
    (data: any) => data?.id === parseInt(id)
  );
  console.log(filterItemAllProductView);
  return (
    <div>
      {/* category banner add  */}
      <CategoryBanner/>
      <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] py-[30px] md:py-[50px]">
      {filterItemAllProductView?.map((data: any) => {
        return (
          <div key={data?.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <Image
                src={data?.img}
                alt={data?.title}
                width={640}
                height={453}
              />
            </div>
            <div className="md:col-span-1">
              <h4 className="flex items-center gap-5 text-dark-400 text-3xl md:text-4xl font-semibold">
                {data?.title}
                <button className="text-base font-normal text-primary bg-primary-50 py-[5px] px-[10px] rounded-lg">
                  In Stock
                </button>
              </h4>
              <p className="flex items-center gap-2 mt-3 text-base font-normal text-dark-800">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                  >
                    <path
                      d="M10.7531 16.2464L14.837 18.8335C15.3591 19.1638 16.0068 18.6722 15.852 18.0627L14.6725 13.4217C14.6392 13.2924 14.643 13.1564 14.6836 13.0292C14.7242 12.902 14.7998 12.7888 14.9018 12.7027L18.564 9.65516C19.0447 9.25486 18.7972 8.45621 18.1786 8.41605L13.3965 8.10514C13.2677 8.09601 13.1442 8.05049 13.0403 7.97389C12.9364 7.89729 12.8564 7.79276 12.8096 7.67246L11.0258 3.18112C10.9772 3.05348 10.891 2.94362 10.7786 2.8661C10.6661 2.78858 10.5328 2.74707 10.3962 2.74707C10.2596 2.74707 10.1263 2.78858 10.0139 2.8661C9.90141 2.94362 9.81519 3.05348 9.76662 3.18112L7.98278 7.67246C7.93608 7.79288 7.85613 7.89755 7.75223 7.97427C7.64833 8.05099 7.52476 8.0966 7.39594 8.10579L2.61377 8.4167C1.99583 8.45621 1.74711 9.25486 2.22837 9.65516L5.89062 12.7034C5.99251 12.7894 6.06807 12.9025 6.10863 13.0295C6.14919 13.1566 6.1531 13.2925 6.11991 13.4217L5.02655 17.7258C4.84065 18.4571 5.61857 19.0472 6.24428 18.6501L10.04 16.2464C10.1466 16.1786 10.2704 16.1426 10.3969 16.1426C10.5233 16.1426 10.6471 16.1786 10.7538 16.2464H10.7531Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                  >
                    <path
                      d="M10.7531 16.2464L14.837 18.8335C15.3591 19.1638 16.0068 18.6722 15.852 18.0627L14.6725 13.4217C14.6392 13.2924 14.643 13.1564 14.6836 13.0292C14.7242 12.902 14.7998 12.7888 14.9018 12.7027L18.564 9.65516C19.0447 9.25486 18.7972 8.45621 18.1786 8.41605L13.3965 8.10514C13.2677 8.09601 13.1442 8.05049 13.0403 7.97389C12.9364 7.89729 12.8564 7.79276 12.8096 7.67246L11.0258 3.18112C10.9772 3.05348 10.891 2.94362 10.7786 2.8661C10.6661 2.78858 10.5328 2.74707 10.3962 2.74707C10.2596 2.74707 10.1263 2.78858 10.0139 2.8661C9.90141 2.94362 9.81519 3.05348 9.76662 3.18112L7.98278 7.67246C7.93608 7.79288 7.85613 7.89755 7.75223 7.97427C7.64833 8.05099 7.52476 8.0966 7.39594 8.10579L2.61377 8.4167C1.99583 8.45621 1.74711 9.25486 2.22837 9.65516L5.89062 12.7034C5.99251 12.7894 6.06807 12.9025 6.10863 13.0295C6.14919 13.1566 6.1531 13.2925 6.11991 13.4217L5.02655 17.7258C4.84065 18.4571 5.61857 19.0472 6.24428 18.6501L10.04 16.2464C10.1466 16.1786 10.2704 16.1426 10.3969 16.1426C10.5233 16.1426 10.6471 16.1786 10.7538 16.2464H10.7531Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                  >
                    <path
                      d="M10.7531 16.2464L14.837 18.8335C15.3591 19.1638 16.0068 18.6722 15.852 18.0627L14.6725 13.4217C14.6392 13.2924 14.643 13.1564 14.6836 13.0292C14.7242 12.902 14.7998 12.7888 14.9018 12.7027L18.564 9.65516C19.0447 9.25486 18.7972 8.45621 18.1786 8.41605L13.3965 8.10514C13.2677 8.09601 13.1442 8.05049 13.0403 7.97389C12.9364 7.89729 12.8564 7.79276 12.8096 7.67246L11.0258 3.18112C10.9772 3.05348 10.891 2.94362 10.7786 2.8661C10.6661 2.78858 10.5328 2.74707 10.3962 2.74707C10.2596 2.74707 10.1263 2.78858 10.0139 2.8661C9.90141 2.94362 9.81519 3.05348 9.76662 3.18112L7.98278 7.67246C7.93608 7.79288 7.85613 7.89755 7.75223 7.97427C7.64833 8.05099 7.52476 8.0966 7.39594 8.10579L2.61377 8.4167C1.99583 8.45621 1.74711 9.25486 2.22837 9.65516L5.89062 12.7034C5.99251 12.7894 6.06807 12.9025 6.10863 13.0295C6.14919 13.1566 6.1531 13.2925 6.11991 13.4217L5.02655 17.7258C4.84065 18.4571 5.61857 19.0472 6.24428 18.6501L10.04 16.2464C10.1466 16.1786 10.2704 16.1426 10.3969 16.1426C10.5233 16.1426 10.6471 16.1786 10.7538 16.2464H10.7531Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                  >
                    <path
                      d="M10.7531 16.2464L14.837 18.8335C15.3591 19.1638 16.0068 18.6722 15.852 18.0627L14.6725 13.4217C14.6392 13.2924 14.643 13.1564 14.6836 13.0292C14.7242 12.902 14.7998 12.7888 14.9018 12.7027L18.564 9.65516C19.0447 9.25486 18.7972 8.45621 18.1786 8.41605L13.3965 8.10514C13.2677 8.09601 13.1442 8.05049 13.0403 7.97389C12.9364 7.89729 12.8564 7.79276 12.8096 7.67246L11.0258 3.18112C10.9772 3.05348 10.891 2.94362 10.7786 2.8661C10.6661 2.78858 10.5328 2.74707 10.3962 2.74707C10.2596 2.74707 10.1263 2.78858 10.0139 2.8661C9.90141 2.94362 9.81519 3.05348 9.76662 3.18112L7.98278 7.67246C7.93608 7.79288 7.85613 7.89755 7.75223 7.97427C7.64833 8.05099 7.52476 8.0966 7.39594 8.10579L2.61377 8.4167C1.99583 8.45621 1.74711 9.25486 2.22837 9.65516L5.89062 12.7034C5.99251 12.7894 6.06807 12.9025 6.10863 13.0295C6.14919 13.1566 6.1531 13.2925 6.11991 13.4217L5.02655 17.7258C4.84065 18.4571 5.61857 19.0472 6.24428 18.6501L10.04 16.2464C10.1466 16.1786 10.2704 16.1426 10.3969 16.1426C10.5233 16.1426 10.6471 16.1786 10.7538 16.2464H10.7531Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                  >
                    <path
                      d="M10.7531 16.2464L14.837 18.8335C15.3591 19.1638 16.0068 18.6722 15.852 18.0627L14.6725 13.4217C14.6392 13.2924 14.643 13.1564 14.6836 13.0292C14.7242 12.902 14.7998 12.7888 14.9018 12.7027L18.564 9.65516C19.0447 9.25486 18.7972 8.45621 18.1786 8.41605L13.3965 8.10514C13.2677 8.09601 13.1442 8.05049 13.0403 7.97389C12.9364 7.89729 12.8564 7.79276 12.8096 7.67246L11.0258 3.18112C10.9772 3.05348 10.891 2.94362 10.7786 2.8661C10.6661 2.78858 10.5328 2.74707 10.3962 2.74707C10.2596 2.74707 10.1263 2.78858 10.0139 2.8661C9.90141 2.94362 9.81519 3.05348 9.76662 3.18112L7.98278 7.67246C7.93608 7.79288 7.85613 7.89755 7.75223 7.97427C7.64833 8.05099 7.52476 8.0966 7.39594 8.10579L2.61377 8.4167C1.99583 8.45621 1.74711 9.25486 2.22837 9.65516L5.89062 12.7034C5.99251 12.7894 6.06807 12.9025 6.10863 13.0295C6.14919 13.1566 6.1531 13.2925 6.11991 13.4217L5.02655 17.7258C4.84065 18.4571 5.61857 19.0472 6.24428 18.6501L10.04 16.2464C10.1466 16.1786 10.2704 16.1426 10.3969 16.1426C10.5233 16.1426 10.6471 16.1786 10.7538 16.2464H10.7531Z"
                      fill="#FF8A00"
                    />
                  </svg>
                </div>
                4 Review
              </p>
              <p className="text-2xl font-medium text-primary py-3">
                ${data?.price}
              </p>
              <p className="text-base font-normal text-dark-800">
                <strong className="text-lg font-semibold text-dark-400">
                  Category :{" "}
                </strong>{" "}
                {data?.category}
              </p>
              <p className="text-base font-normal text-dark-800 py-6">
                {data?.bigDesc}
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 p-2 border border-gray-400 rounded-full">
                  <button className="p-2 rounded-full bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M2.97363 8.80371H13.7211"
                        stroke="#666666"
                        strokeWidth="1.72727"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <h5>5</h5>
                  <button className="p-2 rounded-full bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M3.18652 8.80245H13.934M8.56026 3.42871V14.1762V3.42871Z"
                        stroke="#1A1A1A"
                        strokeWidth="1.72727"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <Link href="/cart/checkout">
                <button className="flex items-center gap-5 text-lg font-semibold text-white bg-primary rounded-full py-2 px-6 md:px-10 xl:px-12 5xl:px-16">
                  Checkout{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.40442 7.88416H3.52564L1.60645 18.4397H18.8792L16.96 7.88416H14.0812M6.40442 7.88416V5.00537C6.40442 2.88549 8.12293 1.16699 10.2428 1.16699V1.16699C12.3627 1.16699 14.0812 2.8855 14.0812 5.00538V7.88416M6.40442 7.88416H14.0812M6.40442 7.88416V10.763M14.0812 7.88416V10.763"
                      stroke="white"
                      strokeWidth="1.49697"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                </Link>
                
                <Link href="/cart">
                <button className="p-3 rounded-full bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_14648)">
                      <path
                        d="M8.21419 18.6364C8.67443 18.6364 9.04753 18.2633 9.04753 17.8031C9.04753 17.3428 8.67443 16.9697 8.21419 16.9697C7.75396 16.9697 7.38086 17.3428 7.38086 17.8031C7.38086 18.2633 7.75396 18.6364 8.21419 18.6364Z"
                        stroke="#232323"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3773 18.6364C17.8375 18.6364 18.2106 18.2633 18.2106 17.8031C18.2106 17.3428 17.8375 16.9697 17.3773 16.9697C16.917 16.9697 16.5439 17.3428 16.5439 17.8031C16.5439 18.2633 16.917 18.6364 17.3773 18.6364Z"
                        stroke="#232323"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.54297 1.13672H4.8763L7.10964 12.2951C7.18584 12.6787 7.39456 13.0234 7.69926 13.2686C8.00395 13.5139 8.38522 13.6442 8.7763 13.6367H16.8763C17.2674 13.6442 17.6487 13.5139 17.9533 13.2686C18.258 13.0234 18.4668 12.6787 18.543 12.2951L19.8763 5.30339H5.70964"
                        stroke="#232323"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_14648">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.711914 0.303711)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        );
      })}

      {/* review content  */}
      <div>
        {reviewData?.map((data: any) => {
          return (
            <div key={data?.id} className="w-full md:w-3/4 pt-4 md:pt-10 xl:pt-16">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <div>
                    <Image
                      src={data?.img}
                      alt={data?.name}
                      width={57}
                      height={57}
                    />
                  </div>
                  <div>
                    <h6 className="text-[20px] font-medium text-dark-100">{data?.name}</h6>
                    <p className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M11.4838 16.9048L15.8599 19.677C16.4194 20.031 17.1134 19.5042 16.9476 18.851L15.6836 13.878C15.6479 13.7394 15.6521 13.5936 15.6955 13.4573C15.739 13.3211 15.82 13.1998 15.9293 13.1075L19.8537 9.84188C20.3687 9.41294 20.1035 8.55714 19.4407 8.51411L14.3163 8.18095C14.1783 8.17117 14.046 8.12239 13.9347 8.04031C13.8233 7.95823 13.7376 7.84621 13.6875 7.71731L11.776 2.90456C11.7239 2.76779 11.6315 2.65006 11.511 2.567C11.3906 2.48393 11.2477 2.43945 11.1013 2.43945C10.955 2.43945 10.8121 2.48393 10.6916 2.567C10.5711 2.65006 10.4787 2.76779 10.4267 2.90456L8.51519 7.71731C8.46516 7.84634 8.37948 7.9585 8.26815 8.04071C8.15681 8.12292 8.02441 8.1718 7.88636 8.18165L2.76197 8.5148C2.09982 8.55714 1.8333 9.41294 2.349 9.84188L6.27332 13.1082C6.3825 13.2004 6.46347 13.3216 6.50693 13.4577C6.55039 13.5939 6.55458 13.7395 6.51902 13.878L5.34742 18.4901C5.14822 19.2737 5.98181 19.906 6.65229 19.4806L10.7196 16.9048C10.8339 16.8322 10.9666 16.7936 11.102 16.7936C11.2375 16.7936 11.3701 16.8322 11.4845 16.9048H11.4838Z" fill="#EA5326"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M11.4838 16.9048L15.8599 19.677C16.4194 20.031 17.1134 19.5042 16.9476 18.851L15.6836 13.878C15.6479 13.7394 15.6521 13.5936 15.6955 13.4573C15.739 13.3211 15.82 13.1998 15.9293 13.1075L19.8537 9.84188C20.3687 9.41294 20.1035 8.55714 19.4407 8.51411L14.3163 8.18095C14.1783 8.17117 14.046 8.12239 13.9347 8.04031C13.8233 7.95823 13.7376 7.84621 13.6875 7.71731L11.776 2.90456C11.7239 2.76779 11.6315 2.65006 11.511 2.567C11.3906 2.48393 11.2477 2.43945 11.1013 2.43945C10.955 2.43945 10.8121 2.48393 10.6916 2.567C10.5711 2.65006 10.4787 2.76779 10.4267 2.90456L8.51519 7.71731C8.46516 7.84634 8.37948 7.9585 8.26815 8.04071C8.15681 8.12292 8.02441 8.1718 7.88636 8.18165L2.76197 8.5148C2.09982 8.55714 1.8333 9.41294 2.349 9.84188L6.27332 13.1082C6.3825 13.2004 6.46347 13.3216 6.50693 13.4577C6.55039 13.5939 6.55458 13.7395 6.51902 13.878L5.34742 18.4901C5.14822 19.2737 5.98181 19.906 6.65229 19.4806L10.7196 16.9048C10.8339 16.8322 10.9666 16.7936 11.102 16.7936C11.2375 16.7936 11.3701 16.8322 11.4845 16.9048H11.4838Z" fill="#EA5326"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M11.4838 16.9048L15.8599 19.677C16.4194 20.031 17.1134 19.5042 16.9476 18.851L15.6836 13.878C15.6479 13.7394 15.6521 13.5936 15.6955 13.4573C15.739 13.3211 15.82 13.1998 15.9293 13.1075L19.8537 9.84188C20.3687 9.41294 20.1035 8.55714 19.4407 8.51411L14.3163 8.18095C14.1783 8.17117 14.046 8.12239 13.9347 8.04031C13.8233 7.95823 13.7376 7.84621 13.6875 7.71731L11.776 2.90456C11.7239 2.76779 11.6315 2.65006 11.511 2.567C11.3906 2.48393 11.2477 2.43945 11.1013 2.43945C10.955 2.43945 10.8121 2.48393 10.6916 2.567C10.5711 2.65006 10.4787 2.76779 10.4267 2.90456L8.51519 7.71731C8.46516 7.84634 8.37948 7.9585 8.26815 8.04071C8.15681 8.12292 8.02441 8.1718 7.88636 8.18165L2.76197 8.5148C2.09982 8.55714 1.8333 9.41294 2.349 9.84188L6.27332 13.1082C6.3825 13.2004 6.46347 13.3216 6.50693 13.4577C6.55039 13.5939 6.55458 13.7395 6.51902 13.878L5.34742 18.4901C5.14822 19.2737 5.98181 19.906 6.65229 19.4806L10.7196 16.9048C10.8339 16.8322 10.9666 16.7936 11.102 16.7936C11.2375 16.7936 11.3701 16.8322 11.4845 16.9048H11.4838Z" fill="#EA5326"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M11.4838 16.9048L15.8599 19.677C16.4194 20.031 17.1134 19.5042 16.9476 18.851L15.6836 13.878C15.6479 13.7394 15.6521 13.5936 15.6955 13.4573C15.739 13.3211 15.82 13.1998 15.9293 13.1075L19.8537 9.84188C20.3687 9.41294 20.1035 8.55714 19.4407 8.51411L14.3163 8.18095C14.1783 8.17117 14.046 8.12239 13.9347 8.04031C13.8233 7.95823 13.7376 7.84621 13.6875 7.71731L11.776 2.90456C11.7239 2.76779 11.6315 2.65006 11.511 2.567C11.3906 2.48393 11.2477 2.43945 11.1013 2.43945C10.955 2.43945 10.8121 2.48393 10.6916 2.567C10.5711 2.65006 10.4787 2.76779 10.4267 2.90456L8.51519 7.71731C8.46516 7.84634 8.37948 7.9585 8.26815 8.04071C8.15681 8.12292 8.02441 8.1718 7.88636 8.18165L2.76197 8.5148C2.09982 8.55714 1.8333 9.41294 2.349 9.84188L6.27332 13.1082C6.3825 13.2004 6.46347 13.3216 6.50693 13.4577C6.55039 13.5939 6.55458 13.7395 6.51902 13.878L5.34742 18.4901C5.14822 19.2737 5.98181 19.906 6.65229 19.4806L10.7196 16.9048C10.8339 16.8322 10.9666 16.7936 11.102 16.7936C11.2375 16.7936 11.3701 16.8322 11.4845 16.9048H11.4838Z" fill="#EA5326"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M11.4838 16.9048L15.8599 19.677C16.4194 20.031 17.1134 19.5042 16.9476 18.851L15.6836 13.878C15.6479 13.7394 15.6521 13.5936 15.6955 13.4573C15.739 13.3211 15.82 13.1998 15.9293 13.1075L19.8537 9.84188C20.3687 9.41294 20.1035 8.55714 19.4407 8.51411L14.3163 8.18095C14.1783 8.17117 14.046 8.12239 13.9347 8.04031C13.8233 7.95823 13.7376 7.84621 13.6875 7.71731L11.776 2.90456C11.7239 2.76779 11.6315 2.65006 11.511 2.567C11.3906 2.48393 11.2477 2.43945 11.1013 2.43945C10.955 2.43945 10.8121 2.48393 10.6916 2.567C10.5711 2.65006 10.4787 2.76779 10.4267 2.90456L8.51519 7.71731C8.46516 7.84634 8.37948 7.9585 8.26815 8.04071C8.15681 8.12292 8.02441 8.1718 7.88636 8.18165L2.76197 8.5148C2.09982 8.55714 1.8333 9.41294 2.349 9.84188L6.27332 13.1082C6.3825 13.2004 6.46347 13.3216 6.50693 13.4577C6.55039 13.5939 6.55458 13.7395 6.51902 13.878L5.34742 18.4901C5.14822 19.2737 5.98181 19.906 6.65229 19.4806L10.7196 16.9048C10.8339 16.8322 10.9666 16.7936 11.102 16.7936C11.2375 16.7936 11.3701 16.8322 11.4845 16.9048H11.4838Z" fill="#EA5326"/>
                    </svg>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[20px] font-normal text-gray-600">{data?.date}</p>
                </div>
              </div>
              <p className="text-[20px] font-normal text-gray-600 my-4 border-b border-gray-600 pb-4">{data?.review}</p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default ItemAllProductView;
