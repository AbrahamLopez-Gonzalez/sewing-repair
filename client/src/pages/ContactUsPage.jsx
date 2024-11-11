import React from 'react';

export default function ContactUs() {
  return (
    <div className="flex justify-center">
      <div className="mx-3 max-w-md">
        <h1 className="text-3xl text-center font-semibold my-7">Contact Us</h1>
        <form className="grid grid-cols-2 grid-rows-5 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500"
              id="name"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500"
              id="phone"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="1234567890"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500"
              id="name"
              type="email"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="model">
              Machine Make/Model
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500"
              id="model"
              type="text"
              required
            />
          </div>
          <div className="col-span-2 row-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description of Issue
            </label>
            <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500"
                id="description"
                rows="5"
                required
                >
            </textarea>
          </div>
          <button className="bg-[green]">Send</button>
        </form>
      </div>
    </div>
  );
}
