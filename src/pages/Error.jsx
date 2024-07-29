import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Error</h1>
      <p>An unexpected error occured: {error.statusText || error.message}</p>
    </>
  );
}
