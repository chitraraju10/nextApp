import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="bg-[#FB7C51]/40 min-h-screen w-full flex flex-col justify-center items-center">
		<img src='/assets/images/nextLogo.png' alt='next'/>
      <h1 className="text-[50px] font-bold">Welcome to Next App</h1>
      <Link href={"/posts"}>
        <button className="bg-[#FB7C51] pl-5 pr-5 p-3 rounded-md">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
