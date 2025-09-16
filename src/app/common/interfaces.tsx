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
