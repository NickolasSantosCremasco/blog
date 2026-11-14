import React from "react";
import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=tecnologia"
        className={`${styles.categoryItem} ${styles.tecnologia}`}
      >
        Tecnologia
      </Link>
      <Link
        href="/blog?cat=codigo"
        className={`${styles.categoryItem} ${styles.codigo}`}
      >
        Código
      </Link>
      <Link
        href="/blog?cat=empreendedorismo"
        className={`${styles.categoryItem} ${styles.empreendedorismo}`}
      >
        Empreendedorismo
      </Link>
      <Link
        href="/blog?cat=cultura"
        className={`${styles.categoryItem} ${styles.cultura}`}
      >
        Cultura
      </Link>
      <Link
        href="/blog?cat=ia"
        className={`${styles.categoryItem} ${styles.ia}`}
      >
        IA
      </Link>
      <Link
        href="/blog?cat=financas"
        className={`${styles.categoryItem} ${styles.financas}`}
      >
        Finanças
      </Link>
    </div>
  );
};

export default MenuCategories;