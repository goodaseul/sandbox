import { star } from "../../assets/movies/assets";

export default function MovieListItem({
  title,
  vote_average,
  release_date,
  poster_path,
}: MovieType) {
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
          className="w-full rounded-md"
        />
        <div className="flex items-center justify-between mt-4 mb-2 text-lg font-bold">
          <h4 className="line-clamp-1">{title}</h4>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <img
              src={star}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{vote_average.toFixed(1)}</span>
          </div>
          <span className="font-bold text-yellow-500">{release_date}</span>
        </div>
      </div>
    </>
  );
}
