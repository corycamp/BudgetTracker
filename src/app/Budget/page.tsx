import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import BudgetContent from "./_components/BudgetContent";

const Budget = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <BudgetContent user={session.user} />;
};

export default Budget;
