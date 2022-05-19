export default interface ICustomInputFieldProps{
  type: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholderText: string;
  error?: boolean;
  errorMessage?: string;
}