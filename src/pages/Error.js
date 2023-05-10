import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occureed</h1>
        <p>Coudn't finde this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
