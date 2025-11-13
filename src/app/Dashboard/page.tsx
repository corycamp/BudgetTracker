import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardContent from "./_components/DashBoardContent";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <DashboardContent user={session.user} />;
};

export default Dashboard;
