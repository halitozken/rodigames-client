"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PlaySection({ game }) {
  const [fullScreen, setFullScreen] = useState(false);
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-24">
      <h3 className="text-2xl mt-5">{game[0].title}</h3>
      <div
        className={`absolute top-0 bottom-0 right-0 left-0 ${fullScreen === true
          ? "absolute top-0 bottom-0 right-0 left-0"
          : "md:w-2/3 md:h-25 md:relative"
          } `}
      >
        <iframe
          className=" w-full h-screen"
          src={game[0].url}
          frameBorder={0}
          allowFullScreen
          allow="fullscreen"
          loading="lazy"
          title={game[0].title}
        ></iframe>
        <button
          onClick={goBack}
          className="cursor-pointer absolute top-0 right-0 p-5 mt-5 bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-8 py-4 text-center me-2 mb-2 dark:focus:ring-orange-900 md:hidden"
        >
          Exit
        </button>
        <button
          onClick={() => setFullScreen(!fullScreen)}
          className="hidden cursor-pointer absolute top-0 right-0 p-5 mt-5 bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-8 py-4 text-center me-2 mb-2 dark:focus:ring-orange-900 md:block"
        >
          {fullScreen === true ? "Exit" : "Full Screen"}
        </button>
      </div>

      <div className="flex w-2/3 gap-20 m-auto">
        <div className="w-1/2">
          <div>Description</div>
          <div>{game[0].description}</div>
        </div>
        <div className="w-1/2">
          <div>Instructions</div>
          <div>{game[0].instructions}</div>
        </div>
      </div>
    </div>
  );
}
