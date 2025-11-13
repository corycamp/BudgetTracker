export type NavbarLink = "Dashboard" | "Transactions" | "Budget";
export type expenseCategory =
  | "Food"
  | "Shopping"
  | "Transportation"
  | "Housing"
  | "Entertainment"
  | "Utilities"
  | "Other";
export interface PageProviderProps {
  pageName: string;
  pageSubHeading?: string;
  customButton?: any;
  children: React.ReactNode;
}

export interface CardProps {
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

export interface SpentItemProps {
  merchant: string;
  category: expenseCategory;
  amount: string;
}

export interface SpentItemsProps {
  data: SpentItemProps[];
}

export interface User {
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
}
