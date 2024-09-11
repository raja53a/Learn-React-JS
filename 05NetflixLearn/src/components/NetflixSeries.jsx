import seriesData from "../api/NetflixData.json";

function NetflixSeries() {
  return (
    <>
      <h1 className="text-4xl font-bold text-black text-center my-10 py-8">
        Netflix Series
      </h1>
      <ul className="flex flex-wrap justify-center space-x-4">
        {seriesData.map((e) => {
          return (
            <li key={e.id} className="flex-shrink-0 mb-6">
              <div className="w-80 h-auto rounded overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src={e.img_url}
                  alt={e.id}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{e.name}</div>
                  <p className="text-gray-700 text-base truncate">
                    {e.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {e.rating}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {e.genre}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                  <br />
                  <a
                    href={e.watch_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-red-600 text-white px-4 py-2 mt-2 rounded">
                      Watch Now
                    </button>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NetflixSeries;
