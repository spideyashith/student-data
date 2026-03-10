"use client";

import { useState } from "react";

export default function Dashboard() {

  const [form, setForm] = useState({
    name: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    about: "",
    avatar: null as File | null
  });

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e:any) => {
    setForm({
      ...form,
      avatar: e.target.files[0]
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("bio", form.bio);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("location", form.location);
    data.append("about", form.about);

    if (form.avatar) {
      data.append("avatar", form.avatar);
    }

    await fetch("/api/profiles", {
      method: "POST",
      body: data
    });

    alert("Profile Added!");

    window.location.reload();
  };

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Add Student Profile
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 max-w-lg"
      >

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2"
        />

        <input
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="border p-2"
        />

        <textarea
          name="about"
          placeholder="About"
          onChange={handleChange}
          className="border p-2"
        />

        <button
          className="bg-orange-500 text-white p-2 rounded"
        >
          Add Profile
        </button>

      </form>

    </main>
  );
}