import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <h1 className={styles.mainContentTitle}>
        Tienda Global Think Technology
      </h1>
      <p className={styles.mainContentText}>
        Bienvenido a la tienda de Global, donde encontrarás una amplia variedad
        de productos tecnológicos de última generación.
      </p>

      <ProductList />
    </div>
  );
}
