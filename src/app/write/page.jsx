"use client"
// Correção necessária para uplifiting
import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import { useSession } from "next-auth/react";

const WritePage = () => {

  const storage = getStorage(app)

  const {status} = useSession()

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("false");
  const [file, setFile] = useState(null) 
  const [media, setMedia] = useState("") 
  const [title, setTitle] = useState("") 


  useEffect(()=> {
    const upload = () => {

    }

    file && upload();
  }, [file])
  const router = useRouter()
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>
  }
  if (status === "authenticated") {

    router.push("/")
     
  }

  const slugify = (str) =>
    str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g,"")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method:"POST",
      body:JSON.stringify({
        title,
        desc:value,
        img:media,
        slug: slugify(title),
        catSlug:"travel", 
      })
    })
  }

 
  
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} onChange={e=>setTitle(e.target.value)} />
      <input type="text" placeholder="categoria" name="" id="" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" id="image" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}} />
            
              <button className={styles.addButton}>
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={16} height={16} />
                </label>
              </button>
           
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill theme="bubble" value={value} onChange={setValue} className={styles.textArea} placeholder="Conte sua história..."/>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publicar</button>
    </div>
  );
};

export default WritePage;