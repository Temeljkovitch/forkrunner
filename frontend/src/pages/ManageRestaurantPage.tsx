import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();

  return (
    <ManageRestaurantForm
      onSave={createRestaurant}
      restaurant={restaurant}
      isLoading={isLoading}
    />
  );
};

export default ManageRestaurantPage;
