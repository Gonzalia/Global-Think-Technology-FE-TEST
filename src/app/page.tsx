"use client";
import styles from "./page.module.css";
import dataBaseArticles from "@/helpers/articles.json";
import ProductList from "@/components/mainPage/ProductList";
import SearchBar from "@/components/mainPage/SearchBar";
import { useEffect, useState } from "react";
import ItemNotFound from "@/components/mainPage/ItemNotFound";
import Loading from "@/components/Loading";

export default function Home() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTimeout(() => {
          // This simulates fetching data from an API
          const response = dataBaseArticles;
          setProducts(response);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query === "") {
      setProducts(dataBaseArticles);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.titulo.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [query]);

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.mainContentTitle}>
        Tienda Global Think Technology
      </h1>
      <p className={styles.mainContentText}>
        Bienvenido a la tienda de Global, donde encontrarás una amplia variedad
        de productos tecnológicos de última generación.
      </p>
      <Loading visible={loading} />

      {!loading && (
        <SearchBar
          query={query}
          setQuery={setQuery}
          productsLength={products.length}
        />
      )}
      {!loading && products?.length > 0 ? (
        <ProductList products={products} />
      ) : (
        !loading && <ItemNotFound />
      )}
    </div>
  );
}
