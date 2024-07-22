import loader from "../assets/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Spinny thingy" />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loader;
