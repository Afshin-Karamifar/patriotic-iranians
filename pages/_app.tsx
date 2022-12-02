import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MartyrProvider } from "../context/MartyrContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MartyrProvider>
        <Component {...pageProps} />
      </MartyrProvider>
    </>
  );
};

export default App;
