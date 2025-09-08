"use client";

import Link from "next/link";
import styles from "./ProductList.module.css";
import { FaStar } from "react-icons/fa";

interface ProductListProps {
  products: any[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className={styles.productList}>
      {products.map((article) => (
        <li key={article.id} className={styles.productItem}>
          <Link
            className={styles.imageContainer}
            href={`/products/${article.id}`}
          >
            <img
              src={article.imagen ?? ""}
              alt={article.titulo}
              className={styles.imageStyle}
            />
          </Link>
          <section className={styles.productMainInfo}>
            <h3 className={styles.productTitle}>
              {article.titulo || "Sin titulo"}
            </h3>

            <div className={styles.rating}>
              <FaStar color="gold" />
              <p className={styles.ratingValue}>{article.rating}</p>
            </div>
          </section>

          <p className={styles.category}>{article.categoria}</p>

          <p className={styles.description}>{article.descripcion}</p>

          <span className={styles.price}>${article.precio}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
