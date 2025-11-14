import { Bus, House, Lightbulb, List, Popcorn, ShoppingBag, Utensils } from "lucide-react"
import { expenseCategory } from "./interfaces"

export const NavigationLinks = {
    Dashboard:"Dashboard",
    Transactions:"Transactions",
    Budget:"Budget",
}

export const DashboardText={
    heading:"Dashboard",
    subHeading:"Overview of your financial status"
}

export const TransactionsText={
    heading:"Transactions",
    subHeading:"Keep track of any purchases made"
}

export const BudgetText={
    heading:"Budget",
    subHeading:"Create a budget to track spending"
}

export const ReportText={
    heading:"Reports",
    subHeading:"Analyze your financial data"
}

export const TableText = {
    titles:{
        expenses: "Recent Expenses",
        transactions: "Recent Transactions",
    },
    headers:{
        expenses: {
            date: "Date",
            category:"Category",
            merchant:"Merchant",
            amout:"Amount"
        },
        transactions: {
            date: "Date",
            description:"Description",
            category:"Category",
            amout:"Amount"
        },
    }
}

export const FeatureCardText={
    TrackSpending:"Effortlessly monitor where your money goes. Keep up to date with your budget and spending.",
    PiggyBank:"Set realistic budgets you can stick to. We'll help you stay on track.",
    Reports:"Understand your financial health with insightful charts and graphs. Make informed decisions with your data."
}

export const iconMapping =(iconType:expenseCategory)=>{
    switch(iconType){
        case "Food":
            return Utensils
        case "Shopping":
            return ShoppingBag
        case "Transportation":
            return Bus
        case "Housing":
            return House
        case "Entertainment":
            return Popcorn
        case "Utilities":
            return Lightbulb
        case "Other":
            return List
        default:
            return List
    }
}

export const COLORS = ["#4ade80", "#22c55e", "#14532d"];