import donut from "../public/donuts1.jpg";

const Donuts = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="shadow-xl card w-96 bg-base-300">
        <figure>
          <img src="../public/donuts1.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donuts;
