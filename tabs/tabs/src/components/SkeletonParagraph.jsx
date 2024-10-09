import SkeletonElement from "./SkeletonElement";
const SkeletonParagraph = () => {
  return (
    <div>
      <SkeletonElement type="title" />
      {Array.from({ length: 4 }).map((_, idx) => (
        <SkeletonElement key={idx} type="text" />
      ))}
    </div>
  );
};

export default SkeletonParagraph;
