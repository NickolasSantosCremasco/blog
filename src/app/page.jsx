
import CategoryList from "./components/CategoryList/CategoryList";
import Featured from "./components/featured/Feature";
import styles from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <Card
      </div>
   </div>
  );
}
