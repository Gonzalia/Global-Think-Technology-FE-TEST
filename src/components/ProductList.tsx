"use client";

import articles from "@/helpers/articles.json";
import { useEffect } from "react";

const ProductList = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTimeout(() => {
          // This simulates fetching data from an API
          const response = articles;
          console.log(response);
        }, 2000);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <img
            src={article.imagen}
            alt={article.titulo}
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
          <h3>{article.titulo || "Sin titulo"}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
