import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";
import SkeletonParagraph from "./SkeletonParagraph";

const ShimmerSkeletonSummary = () => {
  return (
    <div className="skeleton-container">
      {/*tabs  */}
      <div className="skeleton-header">
        {Array.from({ length: 5 }).map((_, idx) => (
          <SkeletonElement key={idx} type="tab" />
        ))}
      </div>

      {/* sections */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <div className="skeleton-sub-section">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div>
              <SkeletonParagraph />
            </div>
          ))}
        </div>
      ))}

      {/* animated loader */}
      <Shimmer />
    </div>
  );
};

export default ShimmerSkeletonSummary;
