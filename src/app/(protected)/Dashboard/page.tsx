"use client";

import { useEffect, useState } from "react";
import { DashboardText } from "@/components/common/constants";
import PageProvier from "@/components/ui/PageProvider";
import Overview from "./_components/Overview";
import Reports from "./_components/Reports";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<"Overview" | "Report">(
    "Overview"
  );

  const userEmail = useSelector((state: any) => state.user.email);
  const dispatch = useDispatch();

  const handleTabSelection = (choice: "Overview" | "Report") =>
    selectedTab == choice
      ? "pb-2 border-b-2 border-green-500 text-green-500"
      : "pb-2 border-b-2 border-transparent text-gray-400 hover:text-white hover:cursor-pointer";

  useEffect(() => {
    if (userEmail === null) {
      dispatch(setUser({ email: "test" }));
    }
  }, []);

  return (
    <PageProvier
      pageName={DashboardText.heading}
      pageSubHeading={DashboardText.subHeading}
    >
      <div>
        <div>
          <div className="flex gap-8 border-b border-gray-700 mb-8">
            <button
              className={handleTabSelection("Overview")}
              onClick={() => {
                selectedTab != "Overview" && setSelectedTab("Overview");
              }}
            >
              Overview
            </button>
            <button
              className={handleTabSelection("Report")}
              onClick={() => {
                selectedTab != "Report" && setSelectedTab("Report");
              }}
            >
              Report
            </button>
          </div>
        </div>
        {selectedTab == "Overview" ? <Overview /> : <Reports />}
      </div>
    </PageProvier>
  );
};

export default Dashboard;
