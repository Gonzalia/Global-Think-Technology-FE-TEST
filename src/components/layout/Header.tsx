"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import Cart from "../cart/Cart";
import { useParams, useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  const params = useParams();
  const router = useRouter();

  const showBackButton = params?.id !== undefined;

  console.log(items);

  return (
    <header className={styles.headerContainer}>
      {showBackButton && (
        <button className={styles.backButton} onClick={() => router.back()}>
          <FaArrowLeft size={24} />
        </button>
      )}

      <h1 className={styles.headerTitle}>Challenge Técnico</h1>
      <button className={styles.headerButton} onClick={() => setOpen(true)}>
        <FaShoppingCart className={styles.icon} size={48} />
        <span className={styles.count}>
          {items.map((item) => item.quantity).reduce((a, b) => a + b, 0)}
        </span>
      </button>

      <Cart visible={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
