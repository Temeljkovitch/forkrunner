import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from "@/components/LoadingButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "@auth0/auth0-react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required!"),
  addressLine1: z.string().min(1, "Address Line 1 is required!"),
  city: z.string().min(1, "City is required!"),
  country: z.string().min(1, "Country is required!"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isUpdateUserLoading: boolean;
  currentUser: User;
};

const UserProfileForm = ({
  onSave,
  isUpdateUserLoading,
  currentUser,
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });
  const { email, name, addressLine1, city, country } = currentUser;
  return (
    <Form {...form}>
      <form
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
        onSubmit={form.handleSubmit(onSave)}
      >
        <div>
          <h2 className="text-2xl font-semibold">User Profile</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          defaultValue={email}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          defaultValue={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Address Line 1 */}
        <FormField
          control={form.control}
          name="addressLine1"
          defaultValue={addressLine1}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adress Line 1</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* City */}
        <FormField
          control={form.control}
          name="city"
          defaultValue={city}
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Country */}
        <FormField
          control={form.control}
          name="country"
          defaultValue={country}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isUpdateUserLoading ? (
          <LoadingButton />
        ) : (
          <Button
            className="bg-lime-600 hover:bg-lime-700 duration-200"
            type="submit"
          >
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
