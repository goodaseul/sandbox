type FormLabelProps = {
  id: string;
  label: string;
  required?: boolean;
};

export default function FormLabel({ id, label, required }: FormLabelProps) {
  return (
    <label htmlFor={id} className="mb-2 text-sm font-medium block">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}
