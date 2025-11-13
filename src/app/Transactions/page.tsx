import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import TransactionsContent from "./_components/TransactionContent";

const Transactions = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <TransactionsContent user={session.user} />;
};

export default Transactions;
