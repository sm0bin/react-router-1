import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { title, price, thumbnail, id } = product;
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-slate-600 rounded-xl flex flex-col">
      <img
        className="w-full h-72 object-cover rounded-t-xl"
        src={thumbnail}
        alt=""
      />
      <div className="flex flex-col grow p-6 gap-4">
        <div className="flex-grow space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <h3 className="text-2xl font-semibold">Price: ${price}</h3>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleBuy}
            className="text-center w-full bg-slate-500 border border-slate-500 hover:border-slate-800 py-4 rounded-xl font-medium text-xl text-slate-200 "
          >
            Buy
          </button>
          {/* <Link
            to={`/product/${id}`}
            className="text-center w-full bg-slate-500 border border-slate-500 hover:border-slate-800 py-4 rounded-xl font-medium text-xl text-slate-200 "
          >
            Buy
          </Link> */}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
