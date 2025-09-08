import styles from "./ItemNotFound.module.css";
import { AiOutlineFrown } from "react-icons/ai";
const ItemNotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <AiOutlineFrown size={128} color="#ccc" className={styles.notFoundIcon} />

      <h1 className={styles.notFoundTitle}>No se encontraron productos</h1>
      <p className={styles.notFoundDescription}>
        No hay productos que coincidan con tu búsqueda.
      </p>
      <p className={styles.notFoundDescription}>
        Intenta ajustar tus filtros o verifica que el nombre que estás buscando
        sea correcto.
      </p>
    </div>
  );
};

export default ItemNotFound;
