export default function MovieList({movies}) {
  return (
    <div className="row gap-2 justify-content-center">
      {movies.map((movie, index) => (
        <div className="col-4" key={index}>
          <div className="card">
            <div className="card-header">
              <span>Titolo: </span>{movie.title}
            </div>
            <div className="card-body">
              <span>Genere: </span>{movie.category}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
