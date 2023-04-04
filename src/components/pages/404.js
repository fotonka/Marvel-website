import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "red",
          fontSize: "24px",
        }}
      >
        Page doesn`t exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
        }}
        to="/"
      >
        This page shows you error, if you want see main page, please click here:
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
