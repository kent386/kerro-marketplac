import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // Mu rugero rwa mbere twayibitse gutya, ariko mu gice cya security tuzayihashinga (Hash)
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
      }
