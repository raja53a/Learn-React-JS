import seriesData from "../api/NetflixData.json";

const NetflixCard = () => {
  return (
    <ul>
      {seriesData.map((e) => {
        return (
          <li key={e.id}>
            <div>
              <h1>Netflix Series</h1>
              <div>
                <img src={e.img_url} alt={e.id} width="40%" height="40%" />
              </div>
              <h2>Name: {e.name} </h2>
              <h3>Ratings: {e.rating}</h3>
              <p>Summary:{e.description} </p>
              <p>Genre: {e.genre}</p>
              <br />             
              <p>Cast: {e.cast}</p>
              <a href="{e.watch_url}" target="_blank"></a>
              <button>Watch Now</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixCard;
