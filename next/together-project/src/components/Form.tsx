type FormProps = {
  children: React.ReactNode;
  title?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children, title, onSubmit }: FormProps) {
  return (
    <form className="grid max-w-xl gap-4 p-4 m-auto" onSubmit={onSubmit}>
      <h2 className="text-xl text-center">{title}</h2>
      {children}
    </form>
  );
}
