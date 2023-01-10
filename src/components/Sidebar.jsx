import React from 'react'
import { categories } from "../utils/data";

function Sidebar({ categoryId }) {

  return (
    <div className="md:w-6/12 lg:w-2/12">
        <div className="p-5 px-3 rounded-md shadow-md bg-gray-600 text-white">
            <h1 className="font-bold text-1xl underline">Category</h1>
        <ul className="mt-5">
              <li className="my-3 cursor-pointer"
                onClick={() => categoryId('All')}
              >
              All
              </li>
            {categories.map((category) => (
              <li className="my-3 cursor-pointer"
                onClick={() => categoryId(category.id)}
                key={category.id}>
                {category.name}
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar