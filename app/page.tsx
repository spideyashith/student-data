import Link from "next/link";

/* Profile Type */
type Profile = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  about: string;
};

/* Fetch Profiles */
async function getProfiles(): Promise<Profile[]> {

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL not defined");
  }

  const res = await fetch(`${baseUrl}/api/profiles`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profiles");
  }

  return res.json();
}

/* Home Page */
export default async function Home() {
  const profiles = await getProfiles();

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">

      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-12">
        Student Profiles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {profiles.map((profile: Profile) => (

          <div
            key={profile.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-orange-100"
          >

            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-orange-300"
            />

            <h2 className="text-xl font-semibold text-center mt-4">
              {profile.name}
            </h2>

            <p className="text-gray-600 text-center mt-1">
              {profile.bio}
            </p>

            <div className="mt-5 text-center">

              <Link
                href={`/profile/${profile.id}`}
                className="
                inline-block
                px-5
                py-2
                bg-orange-500
                text-white
                rounded-lg
                font-medium
                hover:bg-orange-600
                transition
                "
              >
                View Profile
              </Link>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}
