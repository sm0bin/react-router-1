import React from "react";

const Contact = () => {
  return (
    <section className=" max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto">
      <h2 className="text-4xl font-semibold mb-6 text-center">Contact Us</h2>
      <div className="text-lg leading-relaxed space-y-6 text-justify max-w-5xl 2xl:mx-auto">
        <p className="text-lg">
          Feel free to get in touch with us through the following methods:
        </p>
        <ul className="list-disc mt-4 pl-6">
          <li className="text-lg">Email: info@example.com</li>
          <li className="text-lg">Phone: +1 (123) 456-7890</li>
          <li className="text-lg">Address: 123 Main St, City, Country</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
