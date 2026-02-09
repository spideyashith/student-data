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

/* Fetch Single Profile */
async function getProfile(id: string): Promise<Profile | null> {
  const res = await fetch(
    `http://localhost:3000/api/profiles/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

/* Profile Page */
export default async function ProfilePage(props: {
  params: Promise<{ id: string }>;
}) {

  /* Unwrap params */
  const params = await props.params;
  const id = params.id;

  const profile = await getProfile(id);

  if (!profile) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Profile not found
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">

      {/* Back Button */}
      <div className="max-w-3xl mx-auto mb-6">

        <Link
          href="/"
          className="
          inline-flex
          items-center
          px-4
          py-2
          bg-orange-500
          text-white
          rounded-lg
          hover:bg-orange-600
          transition
          "
        >
          ← Back
        </Link>

      </div>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-orange-100">

        {/* Header */}
        <div className="text-center">

          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-36 h-36 rounded-full mx-auto border-4 border-orange-400"
          />

          <h1 className="text-3xl font-bold mt-4">
            {profile.name}
          </h1>

          <p className="text-gray-600 mt-1">
            {profile.bio}
          </p>

        </div>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

          <div>
            <p className="font-semibold text-gray-700">
              Email
            </p>
            <p>{profile.email}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Phone
            </p>
            <p>{profile.phone}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Location
            </p>
            <p>{profile.location}</p>
          </div>

        </div>

        {/* About */}
        <div className="mt-6">

          <h3 className="font-semibold text-gray-800 mb-2">
            About
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {profile.about}
          </p>

        </div>

      </div>

    </main>
  );
}
