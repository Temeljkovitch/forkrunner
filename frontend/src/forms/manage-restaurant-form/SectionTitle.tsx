import { FormDescription } from "@/components/ui/form";

type Props = {
  title: string;
  description: string;
};

const SectionTitle = ({ title, description }: Props) => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold mb-1">{title}</h2>
        <FormDescription>{description}</FormDescription>
      </div>
    </div>
  );
};

export default SectionTitle;
