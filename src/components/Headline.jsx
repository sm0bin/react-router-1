import PropTypes from "prop-types";

const Headline = ({ headline }) => {
  return (
    <h1 className="font-bold text-4xl text-center mt-12 mb-8">{headline}</h1>
  );
};

Headline.propTypes = {
  headline: PropTypes.string,
};

export default Headline;
