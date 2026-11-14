import { createUploadthing } from "uploadthing/next";
import { getAuthSession } from "../../utils/auth";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      const session = await getAuthSession();
      if (!session) throw new Error("Não autorizado");
      return { userEmail: session.user.email };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload concluído por:", metadata.userEmail);
      console.log("URL do arquivo:", file.ufsUrl || file.url);
      return { url: file.ufsUrl || file.url };
    }),
};