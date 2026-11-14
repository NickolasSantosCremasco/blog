import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

const getPopularPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/popular`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Falha ao carregar posts populares");
  }

  return res.json();
};

const MenuPosts = async ({ withImage }) => {
  const posts = await getPopularPosts();

  return (
    <div className={styles.items}>
      {posts?.map((item) => (
        <Link
          href={`/posts/${item.slug}`}
          className={styles.item}
          key={item.id}
        >
          {withImage && item.img && (
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>
              {item.cat?.title || item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.user?.name}</span>
              <span className={styles.date}>
                {" - "}
                {new Date(item.createdAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;