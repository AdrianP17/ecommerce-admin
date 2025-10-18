interface LabeledInputProps {
  label: string;
  value?: string | number;
  onChange: (value: string) => void;
  type?: string;
  min?: number | string;
  step?: number | string;
}

export default function LabeledInput({
  label,
  value = "",
  onChange,
  type = "text",
  min,
  step,
}: LabeledInputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        min={min}
        step={step}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "6px 8px",
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />
    </>
  );
}
