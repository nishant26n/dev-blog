import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 lg:mt-5 lg:mb-8 bg-header lg:rounded-2xl">
      <div className="w-full inline-block py-8">
        <div className="md:float-left block text-center font-mono">
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl text-white">
              Dev Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left  md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white font-light text-lg ml-4 cursor-pointer drop-shadow-xl">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
