import { useState, useEffect } from "react";
import Router from "next/router";

const useLoading = () => {
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
const handleRouteChangeStart = (url: string) => {
setIsLoading(true);
};

const handleRouteChangeComplete = (url: string) => {
  setIsLoading(false);
};

const handleRouteChangeError = (url: string) => {
  setIsLoading(false);
};

Router.events.on("routeChangeStart", handleRouteChangeStart);
Router.events.on("routeChangeComplete", handleRouteChangeComplete);
Router.events.on("routeChangeError", handleRouteChangeError);

return () => {
  Router.events.off("routeChangeStart", handleRouteChangeStart);
  Router.events.off("routeChangeComplete", handleRouteChangeComplete);
  Router.events.off("routeChangeError", handleRouteChangeError);
};
}, []);

return isLoading;
};

export default useLoading;