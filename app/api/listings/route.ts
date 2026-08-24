import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    // Niba umuntu atari muri system ntashobora gupostinga
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, price, categoryId, location } = await req.json();

    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        location,
        categoryId,
        userId: session.user.id,
        status: "ACTIVE",
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create listing" }, { status: 500 });
  }
}

// Iyi yo izajya izana ibicuruzwa byose muri Marketplace
export async function GET() {
  try {
    const listings = await prisma.listing.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(listings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 });
  }
}
