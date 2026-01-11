import MovieError from "./MovieError";
import MovieListItem from "./MovieListItem";
import MovieLoader from "./MovieLoader";

export default function MovieList({
  title,
  movies,
  loading,
  error,
}: {
  title: string;
  movies: MovieType[];
  loading: boolean;
  error: Error | null;
}) {
  return (
    <>
      <article className="px-4 pt-4 bg-black xs:px-0">
        <section className="container py-8 mx-auto text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 sm:px-0">
            {/* 아이템 1개 */}
            {movies &&
              movies.map((movie) => (
                <MovieListItem key={movie.id} {...movie} />
              ))}

            {loading && <MovieLoader />}
            {error && <MovieError error={error} />}
          </div>
        </section>
      </article>
    </>
  );
}
