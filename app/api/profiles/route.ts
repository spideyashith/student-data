export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/mongodb";
import Profile from "@/models/Profile";

import fs from "fs";
import path from "path";

export async function GET() {

  await connectDB();

  const profiles = await Profile.find();

  return Response.json(profiles);
}

export async function POST(req: Request) {

  await connectDB();

  const formData = await req.formData();

  const name = formData.get("name");
  const bio = formData.get("bio");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const location = formData.get("location");
  const about = formData.get("about");

  const file: any = formData.get("avatar");

  let avatarPath = "";

  if (file) {

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = Date.now() + "-" + file.name;

    const uploadDir = path.join(
      process.cwd(),
      "public/uploads"
    );

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);

    fs.writeFileSync(filePath, buffer);

    avatarPath = "/uploads/" + filename;
  }

  const profile = await Profile.create({
    name,
    bio,
    email,
    phone,
    location,
    about,
    avatar: avatarPath
  });

  return Response.json(profile);
}