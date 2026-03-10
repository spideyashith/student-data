import { connectDB } from "@/lib/mongodb";
import Profile from "@/models/Profile";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {

  const params = await context.params;

  await connectDB();

  const profile = await Profile.findById(params.id);

  if (!profile) {
    return new Response("Not Found", { status: 404 });
  }

  return Response.json(profile);
}