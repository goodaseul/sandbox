export default function FormNotice({ helperText }: { helperText?: string }) {
  return (
    <>
      {helperText && <p className="mt-2 text-xs text-gray-500">{helperText}</p>}
    </>
  );
}
