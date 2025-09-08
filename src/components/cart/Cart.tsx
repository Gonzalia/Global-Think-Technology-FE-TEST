import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";
import { FaTimes, FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

interface CartProps {
  visible: boolean;
  setOpen: (open: boolean) => void;
}

interface CartItem {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  quantity: number;
}

const Cart = ({ visible, setOpen }: CartProps) => {
  const { items, removeItem, addItem, removeOneItem } = useCart();
  console.log(items);

  return (
    <>
      {visible && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <section className={styles.cartHeader}>
              <h2 className={styles.cartTitle}>Mi carrito</h2>
              <FaTimes size={24} onClick={() => setOpen(false)} />
            </section>
            <div className={styles.separator} />

            {items.length === 0 ? (
              <div className={styles.emptyCart}>
                <div className={styles.emptyCartIconContainer}>
                  <FaShoppingCart size={64} color="#ccc" />
                  <div className={styles.emptyCartTextContainer}>
                    <p className={styles.emptyCartTitle}>
                      Tu carrito está vacío
                    </p>
                    <p className={styles.emptyCartDescription}>
                      Descubri las categorias del sitio y elegi los mejores
                      productos.
                    </p>
                  </div>
                </div>
                <button
                  className={styles.continueShoppingButton}
                  onClick={() => setOpen(false)}
                >
                  Seguir comprando
                </button>
              </div>
            ) : (
              <ul>
                {items.map((item: any) => (
                  <li key={item.id} className={styles.cartItem}>
                    <div className={styles.itemHeader}>
                      <img
                        src={item?.imagen}
                        alt={item?.titulo}
                        className={styles.itemImage}
                      />
                      <div className={styles.itemInfo}>
                        <span>{item.titulo}</span>
                        <span>${item.precio}</span>
                      </div>
                      <FaTrash
                        className={styles.removeItemButton}
                        onClick={() => removeItem(item.id)}
                      />
                    </div>

                    <div className={styles.itemQuantityContainer}>
                      <button
                        className={styles.decrementButton}
                        onClick={() => removeOneItem(item.id)}
                      >
                        -
                      </button>
                      <span className={styles.itemCount}>{item.quantity}</span>
                      <button
                        className={styles.incrementButton}
                        onClick={() => addItem(item)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
