import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { cuisineItems } from "@/config/restaurant-options-config";
import CuisineCheckbox from "./CuisineCheckbox";
import { useFormContext } from "react-hook-form";
import SectionTitle from "./SectionTitle";

const CuisinesSection = () => {
  const { control } = useFormContext();
  return (
    <section className="space-y-4">
      <SectionTitle
        title="Cuisines"
        description="Select the cuisines that your restaurant serves."
      />
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
