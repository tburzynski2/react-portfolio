import { Outlet } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <>
      <h1>Portfolio Page</h1>
      <Outlet />
    </>
  );
};

export default PortfolioPage;
