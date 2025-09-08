"use client";

import { useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  productsLength: number;
}

const SearchBar = ({ query, setQuery, productsLength }: SearchBarProps) => {
  return (
    <section className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <p className={styles.productsLength}>{productsLength} productos</p>
    </section>
  );
};

export default SearchBar;
