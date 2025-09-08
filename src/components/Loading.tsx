import styles from "./Loading.module.css";

interface LoadingProps {
  visible: boolean;
}
const Loading = ({ visible }: LoadingProps) => {
  if (!visible) return null;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
