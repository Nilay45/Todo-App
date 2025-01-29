import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import "../styles/profile.css"; // Import the CSS file

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-name">{user?.name}</h1>
        <p className="profile-email">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
