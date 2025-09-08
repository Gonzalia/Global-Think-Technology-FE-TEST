"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

import Cart from "../cart/Cart";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { items } = useCart();

  console.log(items);

  return (
    <header className={styles.headerContainer}>
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
