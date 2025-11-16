import { Expense } from "@/lib/types";
import { ChangeEvent, RefObject } from "react";

export type NavbarLink = "Dashboard" | "Transactions" | "Budget";
export type expenseCategory =
  | "Food"
  | "Shopping"
  | "Transportation"
  | "Housing"
  | "Entertainment"
  | "Utilities"
  | "Other";

export type budgetOption = "createBudget" | "editBudget" | "confirmBudget";
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
  type?: string;
  ref?: RefObject<HTMLInputElement | null>;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
  data: Expense[];
}

export interface SpentItemProps {
  merchant: string;
  category: expenseCategory;
  amount: string;
}

export interface SpentItemsProps {
  data: SpentItemProps[];
}

export interface Budgets {
  category: string;
  limit: number;
  spent: number;
}

export interface User {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}
