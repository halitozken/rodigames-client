"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Buttons({ params, searchParams }) {
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    if (searchParams.page === undefined || searchParams.page === "1") {
      setDisplay("hidden");
    } else {
      setDisplay("block");
    }
  }, [searchParams.page]);

  return (
    <div className="flex items-center justify-center m-12 gap-5">
      <Link
        href={{
          pathname:
            searchParams.category === undefined || searchParams.page === "1"
              ? "/games"
              : null,
          query: {
            category:
              searchParams.category === undefined
                ? "all"
                : searchParams.category,
            page: parseInt(searchParams.page) - 1,
          },
        }}
      >
        <button
          className={`text-white ${display} bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-8 py-4 text-center me-2 mb-2 dark:focus:ring-orange-900 md:px-10 md:py-5 md:text-xl`}
        >
          Previous
        </button>
      </Link>
      <Link
        href={{
          pathname: searchParams.category === undefined ? "/games" : null,
          query: {
            category:
              searchParams.category === undefined
                ? "all"
                : searchParams.category,
            page:
              searchParams.page === undefined
                ? 2
                : parseInt(searchParams.page) + 1,
          },
        }}
      >
        <button className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-8 py-4 text-center me-2 mb-2 dark:focus:ring-orange-900 md:px-10 md:py-5 md:text-xl">
          Next
        </button>
      </Link>
    </div>
  );
}
