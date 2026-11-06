import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiMail, FiSave, FiUser } from "react-icons/fi";

const PersonalDetailsPage: React.FC = () => {
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("Kimzy");
  const [username, setUsername] = useState("@kimzy");
  const [email, setEmail] = useState("kimzy@example.com");
  const [bio, setBio] = useState(
    "Food lover and recipe creator. I enjoy discovering new flavors and sharing delicious recipes.",
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend/API connection will be added later.
    console.log({
      name,
      username,
      email,
      bio,
      profileImage,
    });
  };

  return (
    <main className="min-h-screen bg-[#FFF7ED] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* =====================================================
            BACK TO PROFILE
        ====================================================== */}
        <Link
          to="/profile"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-orange-500"
        >
          <FiArrowLeft />
          Back to Profile
        </Link>

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Account Settings
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1F2937] md:text-4xl">
            Personal Details
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 md:text-base">
            Manage your profile information and profile picture.
          </p>
        </div>

        {/* =====================================================
            PROFILE FORM
        ====================================================== */}
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          {/* =================================================
              PROFILE PHOTO
          ================================================== */}
          <div className="border-b border-gray-200 p-5 md:p-8">
            <h2 className="text-lg font-bold text-[#1F2937]">Profile Photo</h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose a profile picture that represents you.
            </p>

            <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row">
              {/* Avatar */}
              <div className="relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-28 w-28 rounded-full border-4 border-orange-100 object-cover"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-orange-100 bg-orange-50 text-orange-500">
                    <FiUser className="text-5xl" />
                  </div>
                )}

                {/* Camera button */}
                <label
                  htmlFor="profileImage"
                  className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-orange-500 text-white shadow-sm transition hover:bg-orange-600"
                >
                  <FiCamera className="text-sm" />

                  <input
                    id="profileImage"
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-sm font-semibold text-gray-800">
                  Profile Picture
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  PNG, JPG or WEBP.
                  <br />
                  Recommended size: 400 × 400px.
                </p>

                <label
                  htmlFor="profileImage"
                  className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-orange-500 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-50"
                >
                  <FiCamera />
                  Change Photo
                </label>
              </div>
            </div>
          </div>

          {/* =================================================
              PERSONAL INFORMATION
          ================================================== */}
          <div className="space-y-6 p-5 md:p-8">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Username
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  @
                </span>

                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username.replace("@", "")}
                  onChange={(event) => setUsername(`@${event.target.value}`)}
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label
                htmlFor="bio"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Bio
              </label>

              <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
                rows={5}
                placeholder="Tell the community a little about yourself..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

              <p className="mt-1 text-xs text-gray-400">
                Tell other food lovers a little about yourself.
              </p>
            </div>
          </div>

          {/* =================================================
              ACTIONS
          ================================================== */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-200 bg-gray-50 p-5 sm:flex-row sm:justify-end md:p-8">
            <Link
              to="/profile"
              className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              <FiSave />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PersonalDetailsPage;
