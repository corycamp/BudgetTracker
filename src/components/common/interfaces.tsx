export type NavbarLink = "Dashboard" | "Transactions" | "Budget" | "Reports";

export interface PageProviderProps {
  pageName: string;
  pageSubHeading?: string;
  customButton?: any;
  children: React.ReactNode;
}

export interface CardProps {
  imageSrc: string;
  title: string;
  amount: number;
}

export interface InputFieldProps {
  id: string;
  title: string;
  placeholder: string;
  frontAdornment?: string;
  showSelection?: boolean;
  options?: string[];
  customInputClass?: string;
  inputType?: string;
}

export interface ExpenseTableItem {
  date: string;
  category: string;
  merchant: string;
  amount: string;
}

export interface RecentTransactionsTableItem {
  date: string;
  description: string;
  category: string;
  amount: string;
}

export interface TableProps {
  title?: string;
  header: string[];
  emptyValue: string;
  data: ExpenseTableItem[] | RecentTransactionsTableItem[];
}
