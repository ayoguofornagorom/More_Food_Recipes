import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiLock,
  FiLogOut,
  FiMonitor,
  FiSave,
  FiShield,
  FiSmartphone,
  FiX,
} from "react-icons/fi";

interface Session {
  id: number;
  device: string;
  location: string;
  lastActive: string;
  current: boolean;
}

const SecurityPage: React.FC = () => {
  // -----------------------------
  // Password state
  // -----------------------------
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // -----------------------------
  // 2FA state
  // -----------------------------
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // -----------------------------
  // Login sessions
  // -----------------------------
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: 1,
      device: "MacBook Pro",
      location: "Lagos, Nigeria",
      lastActive: "Active now",
      current: true,
    },
    {
      id: 2,
      device: "Samsung Galaxy S21 Ultra",
      location: "Lagos, Nigeria",
      lastActive: "Active 2 hours ago",
      current: false,
    },
  ]);

  // -----------------------------
  // Password submit
  // -----------------------------
  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    // Backend/API will be connected here later.
    alert("Password updated successfully.");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // -----------------------------
  // Sign out one device
  // -----------------------------
  const handleSignOut = (id: number) => {
    setSessions((previousSessions) =>
      previousSessions.filter((session) => session.id !== id),
    );
  };

  // -----------------------------
  // Sign out all other devices
  // -----------------------------
  const handleSignOutAll = () => {
    setSessions((previousSessions) =>
      previousSessions.filter((session) => session.current),
    );
  };

  return (
    <main className="min-h-screen bg-[#FFF7ED] px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          to="/profile"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-orange-500"
        >
          <FiArrowLeft />
          Back to Profile
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Account Settings
          </span>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Password & Security
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
            Manage your password, two-factor authentication, and devices
            connected to your account.
          </p>
        </div>

        {/* ========================= */}
        {/* CHANGE PASSWORD */}
        {/* ========================= */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <FiLock className="text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Change Password
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your password to keep your account secure.
              </p>
            </div>
          </div>

          <form onSubmit={handlePasswordSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              {/* Current Password */}
              <div className="md:col-span-2">
                <label
                  htmlFor="currentPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>

                <div className="relative">
                  <input
                    id="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(event) => setCurrentPassword(event.target.value)}
                    placeholder="Enter your current password"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowCurrentPassword((previous) => !previous)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-orange-500"
                    aria-label={
                      showCurrentPassword
                        ? "Hide current password"
                        : "Show current password"
                    }
                  >
                    {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>

                <div className="relative">
                  <input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    placeholder="Enter new password"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowNewPassword((previous) => !previous)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-orange-500"
                    aria-label={
                      showNewPassword
                        ? "Hide new password"
                        : "Show new password"
                    }
                  >
                    {showNewPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Confirm new password"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-orange-500"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="mt-5 rounded-lg bg-orange-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-800">
                Password requirements
              </p>

              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <FiCheck className="text-orange-500" />
                  At least 8 characters
                </li>

                <li className="flex items-center gap-2">
                  <FiCheck className="text-orange-500" />
                  Use a combination of letters and numbers
                </li>

                <li className="flex items-center gap-2">
                  <FiCheck className="text-orange-500" />
                  Avoid using easily guessed information
                </li>
              </ul>
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                <FiSave />
                Update Password
              </button>
            </div>
          </form>
        </section>

        {/* ========================= */}
        {/* TWO FACTOR AUTHENTICATION */}
        {/* ========================= */}
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                <FiShield className="text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Two-Factor Authentication
                </h2>

                <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                  Add an extra layer of protection by requiring a verification
                  code when signing in.
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      twoFactorEnabled ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {twoFactorEnabled ? "Enabled" : "Not enabled"}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setTwoFactorEnabled((previous) => !previous)}
              className={`shrink-0 rounded-lg px-5 py-3 text-sm font-semibold transition ${
                twoFactorEnabled
                  ? "border border-gray-300 bg-white text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {twoFactorEnabled ? "Disable 2FA" : "Enable 2FA"}
            </button>
          </div>

          {twoFactorEnabled && (
            <div className="mt-6 border-t border-gray-100 pt-6">
              <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    Authenticator App
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Your account is protected using an authenticator app.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
                >
                  Manage 2FA
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ========================= */}
        {/* LOGIN SESSIONS */}
        {/* ========================= */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <FiMonitor className="text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Login Sessions
              </h2>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Review devices currently signed in to your account.
              </p>
            </div>
          </div>

          {/* Sessions */}
          <div className="space-y-4">
            {sessions.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center">
                <FiMonitor className="mx-auto mb-3 text-2xl text-gray-400" />

                <p className="text-sm font-medium text-gray-700">
                  No active sessions
                </p>
              </div>
            ) : (
              sessions.map((session) => (
                <div
                  key={session.id}
                  className="rounded-xl border border-gray-200 p-4 transition hover:border-orange-200"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Device information */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                        {session.device.includes("Samsung") ? (
                          <FiSmartphone />
                        ) : (
                          <FiMonitor />
                        )}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-gray-900">
                            {session.device}
                          </h3>

                          {session.current && (
                            <span className="rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                              This device
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm text-gray-500">
                          {session.location}
                        </p>

                        <p
                          className={`mt-1 text-xs font-medium ${
                            session.current ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {session.lastActive}
                        </p>
                      </div>
                    </div>

                    {/* Sign out */}
                    {!session.current && (
                      <button
                        type="button"
                        onClick={() => handleSignOut(session.id)}
                        className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 sm:self-center"
                      >
                        <FiLogOut />
                        Sign out
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sign out all */}
          {sessions.some((session) => !session.current) && (
            <div className="mt-6 flex justify-end border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={handleSignOutAll}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <FiLogOut />
                Sign out of all other devices
              </button>
            </div>
          )}
        </section>

        {/* Cancel */}
        <div className="mt-8 flex justify-end">
          <Link
            to="/profile"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400"
          >
            <FiX />
            Back to Profile
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SecurityPage;
