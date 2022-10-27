import React from "react";
import Pagination from "./Pagination";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-sm text-gray-500 mb-5 mt-3 ">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {/* Content */}
      {results.items?.map((result) => {
        return (
          <div key={result.cacheId} className="max-w-xl mb-8">
            <div className="group">
              <a href={result.link}>{result.formattedUrl}</a>
              <a href={result.link}>
                <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                  {result.title}
                </h2>
              </a>
            </div>
            <p>{result.snippet}</p>
          </div>
        );
      })}

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default SearchResults;
