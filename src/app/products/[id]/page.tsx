"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import databaseProducts from "@/helpers/articles.json";
import styles from "./page.module.css";
import RatingStars from "@/components/products/RatingStars";
import { useCart } from "@/context/CartContext";
import Loading from "@/components/Loading";

export default function ProductDetailPage() {
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { id } = params;

  const { addItem } = useCart();

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        setTimeout(() => {
          const filteredProduct = databaseProducts.find(
            (product) => product.id === Number(id)
          );
          setItem(filteredProduct);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItemData();
  }, []);

  return (
    <div className={styles.itemContainer}>
      <Loading visible={loading} />
      {!loading && (
        <>
          <div>
            <img
              src={item?.imagen}
              alt={item?.titulo}
              className={styles.productImage}
            />

            <div className={styles.descriptionContainer}>
              <h1 className={styles.descriptionTitle}>Descripción</h1>
              <h1>{item?.descripcion}</h1>
            </div>
          </div>

          <div className={styles.productMainInfo}>
            <h1 className={styles.productTitle}>{item?.titulo}</h1>
            <div className={styles.ratingContainer}>
              <RatingStars value={item?.rating} />
              <h2>{item?.rating}</h2>
            </div>

            <p>${item?.precio}</p>
            <p className={styles.productQualification}>
              Calificación de {item?.rating} de{" "}
              {Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000} opiniones
            </p>

            <p>Ver los medios de pago</p>
            <p>Llega gratis hoy</p>

            <br />
            <p>Más formas de entrega</p>
            <p>Devolución gratis</p>
            <br />
            <p>Tenés 30 días desde que lo recibís</p>

            <p>Conocer más</p>

            <button
              className={styles.buyButton}
              onClick={() => {
                addItem(item);
              }}
            >
              Comprar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
