import React from "react";
import { categoryItems } from "./categoryItems";
import Link from "next/link";

export default function Category() {
  return (
    <nav className="w-full h-auto m-auto flex items-center justify-center gap-7 mt-12 mb-12 flex-wrap">
      {categoryItems &&
        categoryItems.map((category) => (
          <div key={category.id}>
            <Link
              href={{
                pathname: `/games`,
                query: {
                  category: category.categoryName,
                  page: 1,
                },
              }}
            >
              <div className="text-sm md:text-xl">
                {category.categoryName.charAt(0).toUpperCase() +
                  category.categoryName.slice(1)}
              </div>
            </Link>
          </div>
        ))}
    </nav>
  );
}
