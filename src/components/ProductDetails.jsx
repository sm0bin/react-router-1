// import PropTypes from "prop-types";
import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    title,
    description,
    images,
    thumbnail,
    brand,
    rating,
    discountPercentage,
    price,
  } = product;
  // console.log(product);
  const discountPrice = (price * (1 - discountPercentage / 100)).toFixed(2);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className=" max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto text-center">
      <div className="text-lg leading-relaxed space-y-4 text-justify max-w-5xl 2xl:mx-auto">
        <img className="w-full" src={thumbnail} alt="" />
        <h2 className="text-center font-bold text-3xl">{title}</h2>
        <h2>
          Brand: <span className="font-semibold text-2xl">{brand}</span>
        </h2>
        <h2>Rating: {rating}</h2>
        <h2 className="text-lg">
          Price: <span className="font-bold text-3xl">${discountPrice} </span>
          <span className="line-through text-2xl opacity-80"> ${price}</span>
          <span className="text-green-500 text-lg">
            {" "}
            {discountPercentage}% off
          </span>
        </h2>
        <h2>Details: {description}</h2>
        <h2></h2>
        {images.map((image, idx) => (
          <img className="w-full" key={idx} src={image} />
        ))}

        <button
          onClick={handleBack}
          className="text-center w-full bg-slate-500 border border-slate-500 hover:border-slate-800 py-4 rounded-xl font-medium text-xl text-slate-200 "
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

// ProductDetails.propTypes = {
//   id: PropTypes.number,
// };

export default ProductDetails;
