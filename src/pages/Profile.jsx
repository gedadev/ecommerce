import { ProfileHeader, ProfileMenu } from "../components/ProfileSection";
import "../styles/Profile.css";
import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <main className="profile-section">
      <ProfileHeader />
      <ProfileMenu />
      <Outlet />
    </main>
  );
}
