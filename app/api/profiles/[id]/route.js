import { profiles } from "@/data/profiles";

export async function GET(request, context) {

  /* ✅ Unwrap params */
  const params = await context.params;
  const id = params.id;

  const profile = profiles.find(
    (p) => p.id === id
  );

  if (!profile) {
    return new Response(
      JSON.stringify({ message: "Not found" }),
      { status: 404 }
    );
  }

  return Response.json(profile);
}
