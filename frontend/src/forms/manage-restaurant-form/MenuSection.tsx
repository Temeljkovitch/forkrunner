import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import SectionTitle from "./SectionTitle";

const MenuSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <section className="space-y-4 ">
      <SectionTitle
        title="Menu"
        description="Create your menu and give each item a name and a price."
      />
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      ></FormField>
      <Button type="button" onClick={() => append({ name: "", price: "" })}>
        Add Menu Item
      </Button>
    </section>
  );
};

export default MenuSection;
