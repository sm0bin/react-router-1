import Headline from "./Headline";

const About = () => {
  return (
    <section className=" max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto text-center">
      <div className="text-lg leading-relaxed space-y-6 text-justify max-w-5xl 2xl:mx-auto">
        <Headline headline={"Our Story"}></Headline>
        <p>
          Welcome to our world of innovation and creativity. At{" "}
          <span className="font-bold">TechHub</span>, we are passionate about
          what we do, and our journey reflects our commitment to excellence.
        </p>
        <p>
          Since our inception, we have been dedicated to delivering exceptional
          products/services that cater to the unique needs of our customers. Our
          team of experts works tirelessly to bring your ideas to life and
          exceed your expectations.
        </p>
        <p>
          We believe that every challenge is an opportunity to learn and grow.
          Our mission is to make a positive impact on the world by providing
          innovative solutions and maintaining the highest standards of quality
          and integrity.
        </p>
      </div>
    </section>
  );
};

export default About;
