"use client";

import { useState } from "react";
import { DashboardText } from "../../../components/common/constants";
import PageProvier from "../../../components/ui/PageProvider";
import Overview from "./Overview";
import Reports from "./Reports";
import { User } from "@/components/common/interfaces";

const DashboardContent = (user: User) => {
  console.log(user);
  const [selectedTab, setSelectedTab] = useState<"Overview" | "Report">(
    "Overview"
  );

  const handleTabSelection = (choice: "Overview" | "Report") =>
    selectedTab == choice
      ? "pb-2 border-b-2 border-green-500 text-green-500"
      : "pb-2 border-b-2 border-transparent text-gray-400 hover:text-white hover:cursor-pointer";

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

export default DashboardContent;
