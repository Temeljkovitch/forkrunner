import { useFormContext } from "react-hook-form";
import SectionTitle from "./SectionTitle";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ImageSection = () => {
  const { control } = useFormContext();
  return (
    <section className="space-y-4">
      <SectionTitle
        title="Image"
        description="Add an image that will be displayed on your restaurant listing in the
          search results. Adding a new image will overwrite the existing one."
      />
      <div className="flex flex-col gap-8 w-[50%]">
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
      </div>
    </section>
  );
};

export default ImageSection;
