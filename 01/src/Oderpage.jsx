import React, { useState } from "react";

const OrderPage = ({ oderitem }) => {
  const [country, setCountry] = useState("");
  const [count, setCount] = useState(0);

  const countries = {
    Bangladesh: ["Dhaka", "Chittagong", "Khulna"],
    USA: ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Order Fill-Up Form
        </h2>
        <div className="flex items-center mb-6">
          <img
            className="w-16 h-16 object-cover rounded"
            src={oderitem.image}
            alt={oderitem.title}
          />
          <div className="ml-4">
            <h1 className="text-xl font-semibold text-gray-800">
              {oderitem.title}
            </h1>
            <p className="text-lg text-gray-600">৳{oderitem.price}</p>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex items-center space-x-2">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-semibold mb-2"
            >
              Quantity
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded"
              >
                -
              </button>
              <span className="text-lg">{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 font-semibold mb-2"
            >
              Country
            </label>
            <select
              id="country"
              onChange={(e) => setCountry(e.target.value)}
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select a country
              </option>
              {Object.keys(countries).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {country && (
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 font-semibold mb-2"
              >
                City
              </label>
              <select
                id="city"
                className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>
                  Select a city
                </option>
                {countries[country].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Shipping Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
