import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { cuisineItems } from "@/config/restaurant-options-config";
import CuisineCheckbox from "./CuisineCheckbox";
import { useFormContext } from "react-hook-form";

const CuisinesSection = () => {
  const { control } = useFormContext();
  return (
    <section className="space-y-2">
      <div>
        <h2 className="text-2xl font-semibold">Cuisines</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {cuisineItems.map((cuisineItem) => (
                <CuisineCheckbox cuisineItem={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  );
};

export default CuisinesSection;
