import { User } from "@/lib/types";
import { MongoDB } from "@/server/db/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const client = new MongoDB();
    await client.connect();
    const users = client.getCollection<User>("users");
    const existing = await users.findOne({email});
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await users.insertOne({
      email,
      hashedPassword,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
