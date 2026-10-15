import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const skeleton = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Skeleton height={40} width={200} />
      <Skeleton count={5} style={{ marginTop: "10px" }} />
    </div>
  );
};

export default skeleton;