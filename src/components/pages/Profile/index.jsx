import ProfileHeader from "./ProfileHeader";
import ProfileInformation from "./ProfileInformation";
import UserPosts from "./UserPosts";

const Profile = () => {
  return (
    <div className="w-full h-full">
      <ProfileHeader />
      <ProfileInformation />
      <UserPosts />
    </div>
  );
};

export default Profile;
