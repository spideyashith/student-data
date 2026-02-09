import { profiles } from "@/data/profiles";

export async function GET() {
  return Response.json(profiles);
}
