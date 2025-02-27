import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateRestaurantLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateRestaurantLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant; // If user has a restaurant, isEditing is going to be true, otherwise it is going to be false

  return (
    <ManageRestaurantForm
      onSave={isEditing ? updateRestaurant : createRestaurant}
      restaurant={restaurant}
      isLoading={isCreateRestaurantLoading || isUpdateRestaurantLoading}
    />
  );
};

export default ManageRestaurantPage;
