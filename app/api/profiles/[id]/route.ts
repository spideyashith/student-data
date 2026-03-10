export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/mongodb";
import Profile from "@/models/Profile";

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  try {

    await connectDB();

    const id = context.params.id;

    const profile = await Profile.findById(id);

    if (!profile) {
      return new Response("Profile not found", { status: 404 });
    }

    return Response.json(profile);

  } catch (error) {

    console.error(error);

    return new Response("Server Error", { status: 500 });
  }
}