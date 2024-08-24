import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div className="flex">
      <p>This is the Products page</p>
      <Link to="/">go to Dashboard</Link>
    </div>
  );
};
