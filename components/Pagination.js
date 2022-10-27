import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LeftIcon, RightIcon } from "./Icons";

const Pagination = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || "0";

  return (
    <div className="flex max-w-lg justify-between text-gray-500 mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?q=${router.query.q}&start=${startIndex - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline hover:text-blue-500">
            <LeftIcon className="w-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?q=${router.query.q}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline hover:text-blue-500">
          <RightIcon className="w-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
