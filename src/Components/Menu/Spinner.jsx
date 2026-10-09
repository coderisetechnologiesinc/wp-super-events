import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  //   borderColor: "#7319C6",
};

const Spinner = ({ loading, color = "#7319C6" }) => {
  return (
    <div className="svv-sweet-loading">
      <BarLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Spinner;
