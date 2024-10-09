import { useFetchData } from "../hooks/useFetchData";
import { SpinnerIcon, HeartIcon } from "../utils/icons";

const LikeButton = () => {
  const { error, loading, like, fetchData } = useFetchData();
  console.log(like);
  return (
    <div className="buttonContainer">
      <button
        disabled={loading}
        onClick={fetchData}
        className={`btn ${like ? "liked" : ""}`}
      >
        {loading ? <SpinnerIcon /> : <HeartIcon />}
        {like ? "liked" : "like"}
      </button>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default LikeButton;
