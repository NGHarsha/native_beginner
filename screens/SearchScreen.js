import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, data, errorMessage] = useRestaurants();

  const handleSubmit = () => {
    console.log(term + " is submitted");
    searchApi(term);
  };

  const filterResultsByPrice = (price) => {
    return data.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onSubmit={handleSubmit}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          title={"Cost Effective"}
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          title={"Bit Pricier"}
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          title={"Big Spender"}
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
