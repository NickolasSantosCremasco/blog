import Menu from "../../components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "../../components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const post = await getData(slug);

    if (!post) {
      return {
        title: "Post não encontrado",
      };
    }

    const cleanDescription = post.desc
      ? post.desc.replace(/<[^>]*>?/gm, "").slice(0, 155) + "..."
      : "Leia este artigo completo no Nickolas Blog.";

    return {
      title: post.title,
      description: cleanDescription,
      openGraph: {
        title: post.title,
        description: cleanDescription,
        type: "article",
        publishedTime: post.createdAt,
        authors: [post.user?.name || "Nickolas Cremasco"],
        images: post.img ? [{ url: post.img }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: cleanDescription,
        images: post.img ? [post.img] : [],
      },
    };
  } catch (error) {
    return {
      title: "Nickolas Blog",
    };
  }
}

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt={data?.user?.name || "Autor"}
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>
                {data?.createdAt
                  ? new Date(data.createdAt).toLocaleDateString("pt-BR")
                  : ""}
              </span>
            </div>
          </div>
        </div>

        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt={data?.title || "Capa do artigo"}
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;