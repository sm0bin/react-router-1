import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import PuffLoader from "react-spinners/PuffLoader";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header></Header>
      {navigation.state === "loading" ? (
        <PuffLoader className=" mt-64 mx-auto" color="white" />
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
};

export default Home;
