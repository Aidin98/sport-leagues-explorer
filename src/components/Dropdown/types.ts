export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  value: string | null;
  options: Option[];
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
}
