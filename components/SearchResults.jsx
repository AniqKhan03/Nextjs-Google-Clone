import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-48">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results?.items?.map((item) => (
        <div className="max-w-xl mb-8" key={item.link}>
          <div className="group">
            <a className="text-sm" href={item.link}>
              {item.formattedUrl}
            </a>
            <a className="truncate text-xl text-blue-800 font-medium group-hover:underline" href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <p className="line-clamp-2">{item.snippet}</p>
          </div>
        </div>
      ))}


        <PaginationButtons />


    </div>
  );
}

export default SearchResults;
