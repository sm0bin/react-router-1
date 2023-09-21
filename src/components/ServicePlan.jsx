import PropTypes from "prop-types";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

const ServicePlan = ({ servicePlan }) => {
  const { name, price, features_included, features_not_included } = servicePlan;
  return (
    <div className="bg-slate-300 dark:bg-slate-600 p-10 rounded-xl">
      <h2 className="font-semibold text-4xl text-center mb-6">{name}</h2>
      <h2 className="text-center font-semibold text-2xl mb-5">
        <span className="font-semibold text-5xl">${price}</span>/month
      </h2>
      <ul className="space-y-2 text-lg mb-2">
        {features_included.map((features, id) => (
          <li key={id} className="flex items-center gap-2">
            <HiCheckCircle />
            {features}
          </li>
        ))}
      </ul>
      <ul className="mb-5 space-y-2 text-lg">
        {features_not_included.map((features, id) => (
          <li key={id} className="flex items-center gap-2 line-through">
            <HiXCircle />
            {features}
          </li>
        ))}
      </ul>
      <button className="w-full bg-slate-500 border border-slate-500 hover:border-slate-800 py-4 rounded-xl font-medium text-xl text-slate-200 ">
        Purchase
      </button>
    </div>
  );
};

ServicePlan.propTypes = {
  servicePlan: PropTypes.object,
};

export default ServicePlan;
