"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useUploadThing } from "../utils/uploadthing";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  // Hook do UploadThing conectado ao endpoint "imageUploader" do core.js
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      if (res && res[0]) {
        // Pega a URL retornada pelo UploadThing e salva no estado media
        const uploadedUrl = res[0].ufsUrl || res[0].url;
        setMedia(uploadedUrl);
        alert("Imagem enviada com sucesso!");
      }
    },
    onUploadError: (error) => {
      console.error("Erro no upload:", error);
      alert(`Erro ao enviar imagem: ${error.message}`);
    },
  });

  // Dispara o upload automaticamente assim que você escolhe um arquivo
  useEffect(() => {
    if (file) {
      startUpload([file]);
    }
  }, [file]);

  // Redireciona para a home se NÃO estiver logado
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", // Usa a categoria digitada ou um padrão
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
        defaultValue="tecnologia"
      >
        <option value="tecnologia">Tecnologia</option>
        <option value="codigo">Código</option>
        <option value="empreendedorismo">Empreendedorismo</option>
        <option value="cultura">Cultura</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />

            <button className={styles.addButton} type="button">
              <label htmlFor="image" style={{ cursor: "pointer" }}>
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>

            <button className={styles.addButton} type="button">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton} type="button">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          className={styles.textArea}
          placeholder="Conte sua história..."
        />
      </div>
      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={isUploading}
      >
        {isUploading ? "Enviando imagem..." : "Publicar"}
      </button>
    </div>
  );
};

export default WritePage;