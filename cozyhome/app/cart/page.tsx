'use client'
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface Category {
  src: string;
  alt: string;
  text: string;
  price: number;
  quantity: number;
}

const categories: Category[] = [
  { src: "/food.jpeg", alt: "Bahan Makanan", text: "Bahan Makanan", price: 10000, quantity: 1 },
  { src: "/household.jpeg", alt: "Peralatan Rumah Tangga", text: "Peralatan Rumah Tangga", price: 20000, quantity: 1 },
  { src: "/cleaning.jpeg", alt: "Produk Kebersihan", text: "Produk Kebersihan", price: 15000, quantity: 1 },
  { src: "/personal_care.jpeg", alt: "Produk Perawatan Diri", text: "Produk Perawatan Diri", price: 25000, quantity: 1 },
  { src: "/electronics.webp", alt: "Elektronik Rumah Tangga", text: "Elektronik Rumah Tangga", price: 500000, quantity: 1 },
  { src: "/clothing.jpeg", alt: "Pakaian dan Aksesoris", text: "Pakaian dan Aksesoris", price: 30000, quantity: 1 },
  { src: "/baby.jpeg", alt: "Perlengkapan Anak", text: "Perlengkapan Anak", price: 40000, quantity: 1 },
  { src: "/health.jpeg", alt: "Kesehatan", text: "Kesehatan", price: 35000, quantity: 1 },
  { src: "/stationery.jpeg", alt: "Alat Tulis", text: "Alat Tulis", price: 5000, quantity: 1 }
];

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState(categories);

  const handleQuantityChange = (index: number, delta: number) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity < 1) newCart[index].quantity = 1;
    setCart(newCart);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="relative z-10 after:bg-gray-50">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">{totalItems} Items</h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                  </div>
                </div>
              </div>
            </div>
            {cart.map((item, index) => (
              <div key={index} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
                <div className="w-full md:max-w-[126px]">
                  <Image src={item.src} alt={item.alt} width={126} height={126} className="mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                  <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                      <h6 className="font-semibold text-base leading-7 text-black">{item.text}</h6>
                      <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">{item.price} IDR</h6>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                    <div className="flex items-center h-full">
                      <button
                        onClick={() => handleQuantityChange(index, -1)}
                        className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                      />
                      <button
                        onClick={() => handleQuantityChange(index, 1)}
                        className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">{item.price * item.quantity} IDR</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-end mt-8">
              <button
                type="button"
                className="mt-8 inline-flex items-center justify-center py-4 px-6 font-semibold text-base text-white bg-indigo-600 rounded-lg transition-all duration-300 shadow-sm hover:bg-indigo-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-normal text-lg leading-8 text-black">{totalItems} Items</p>
                <p className="font-medium text-lg leading-8 text-black">{totalPrice} IDR</p>
              </div>
              <div className="flex items-center justify-between pt-8 pb-8 border-b border-gray-300">
                <p className="font-normal text-lg leading-8 text-black">Discount</p>
                <p className="font-medium text-lg leading-8 text-black">-10,000 IDR</p>
              </div>
              <div className="flex items-center justify-between pt-8 pb-8 border-b border-gray-300">
                <p className="font-normal text-lg leading-8 text-black">Subtotal</p>
                <p className="font-medium text-lg leading-8 text-black">{totalPrice - 10000} IDR</p>
              </div>
              <div className="flex items-center justify-between pt-8">
                <p className="font-semibold text-xl leading-8 text-black">Order Total</p>
                <p className="font-bold text-xl leading-8 text-black">{totalPrice - 10000} IDR</p>
              </div>
              <button
                type="button"
                className="mt-8 inline-flex items-center justify-center py-4 px-6 font-semibold text-base text-white bg-indigo-600 rounded-lg transition-all duration-300 shadow-sm hover:bg-indigo-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
