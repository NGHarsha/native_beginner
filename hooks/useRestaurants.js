import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setData(response.data.businesses);
    } catch (err) {
      // setErrorMessage("Something went wrong");
      console.log("error " + err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    searchApi("pasta");

    return () => {
      isMounted = false;
    };
  }, []);

  return [searchApi, data, errorMessage];
};
