import { Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <Outlet />
    </>
  );
};

export default AboutPage;
