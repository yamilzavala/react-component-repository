import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";
  console.log("breadcrumbPath: ", breadcrumbPath);
  return (
    <>
      <div className="breadcrumbs">
        {pathNames.length > 0 && <Link to="/">Home </Link>}
        {pathNames.map((name, idx) => {
          breadcrumbPath += `/${name}`;
          const isLast = idx === pathNames.length - 1;
          console.log("breadcrumbPath: ", breadcrumbPath);
          return isLast ? (
            <span key={idx}> / {name}</span>
          ) : (
            <span key={idx}>
              / <Link to={breadcrumbPath}>{name}</Link>{" "}
            </span>
          );
        })}
      </div>
    </>
  );
}
