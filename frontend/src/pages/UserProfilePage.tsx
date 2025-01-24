import { useGetCurrentUser, useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateUser();
  const { currentUser, isLoading: isGetCurrentUserLoading } = useGetCurrentUser();

  if (isGetCurrentUserLoading) {
    return <div>Loading...</div>
  }

  return (
    <UserProfileForm
      onSave={updateUser}
      currentUser={currentUser}
      isUpdateUserLoading={isUpdateUserLoading}
    />
  );
};

export default UserProfilePage;
