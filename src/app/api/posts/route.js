import prisma from "../../utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const POST_PER_PAGE = 2;

    try {
        const posts = await prisma.post.findMany({
            take: POST_PER_PAGE,
            skip: POST_PER_PAGE * (page - 1)
        });

        // Conta quantos posts existem no banco
        const count = await prisma.post.count();

        return NextResponse.json(
            { posts, count },
            { status: 200 }
        );

    } catch (err) {
        console.error("Erro ao buscar posts:", err);

        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 500 }
        );
    }
};