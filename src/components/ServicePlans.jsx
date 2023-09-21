import ServicePlan from "./ServicePlan";
import Headline from "./Headline";

const ServicePlans = () => {
  const servicePlans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: 10,
      features_included: [
        "Unlimited bandwidth",
        "24/7 customer support",
        "5GB storage",
      ],
      features_not_included: [
        "E-commerce functionality",
        "Custom domain",
        "Advanced analytics",
      ],
    },
    {
      id: "pro",
      name: "Pro Plan",
      price: 25,
      features_included: [
        "Unlimited bandwidth",
        "24/7 customer support",
        "10GB storage",
        "E-commerce functionality",
        "Custom domain",
      ],
      features_not_included: ["Advanced analytics"],
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 50,
      features_included: [
        "Unlimited bandwidth",
        "24/7 customer support",
        "20GB storage",
        "E-commerce functionality",
        "Custom domain",
        "Advanced analytics",
      ],
      features_not_included: [],
    },
  ];

  return (
    <>
      <Headline headline={"Discover Our Flexible Service Plans"}></Headline>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto py-4">
        {servicePlans.map((servicePlan) => (
          <ServicePlan key={servicePlan.id} servicePlan={servicePlan} />
        ))}
      </div>
    </>
  );
};

export default ServicePlans;
