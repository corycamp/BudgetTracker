type NavbarLink = "Dashboard" | "Transactions" | "Budget" | "Reports";

interface PageProviderProps {
  pageName: string;
  pageSubHeading?: string;
  customButton?: any;
  children: React.ReactNode;
}

interface CardProps {
  imageSrc: string;
  title: string;
  amount: number;
}

interface InputFieldProps {
  id: string;
  title: string;
  placeholder: string;
  frontAdornment?: string;
  showSelection?: boolean;
  options?: string[];
  customInputClass?: string;
  inputType?: string;
}
