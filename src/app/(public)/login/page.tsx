import LoggedOutNavbar from "@/components/ui/LoggedOutNavbar";
import AuthCard from "@/components/ui/AuthCard";
import FeatureCard from "@/components/ui/FeatureCard";
import { FaWallet, FaChartLine } from "react-icons/fa";
import { PiPiggyBank } from "react-icons/pi";

export default function Home() {
  return (
    <main>
      <LoggedOutNavbar />
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 py-20 max-w-7xl mx-auto items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
            Effortless <br /> Budgeting, Smarter <br /> Spending.
          </h1>
          <p className="text-gray-400 max-w-md">
            The simplest way to track your expenses and manage your budget, all
            in one place. Gain financial clarity and achieve your goals faster.
          </p>
        </div>

        <div className="flex justify-center">
          <AuthCard />
        </div>
      </section>

      {/* FEATURES */}
      <section className="text-center px-10 py-18 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Reach Your Financial Goals
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          BudgetTracker gives you the tools you need to understand your finances
          and build a brighter future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaWallet className="text-blue-400" size={32} />}
            title="Track Spending"
            description="Effortlessly monitor where your money goes. Connect your accounts and see all your transactions in one place."
          />

          <FeatureCard
            icon={<PiPiggyBank className="text-green-400" size={32} />}
            title="Create Budgets"
            description="Set realistic budgets you can stick to. We'll help you stay on track and notify you when you're nearing your limits."
          />

          <FeatureCard
            icon={<FaChartLine className="text-orange-400" size={32} />}
            title="Visualize Finances"
            description="Understand your financial health with insightful charts and graphs. Make informed decisions with your data."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-3 text-center text-gray-500 text-sm">
        © 2025 BudgetTracker. All rights reserved.
        <div className="flex justify-center gap-6 mt-2">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </footer>
    </main>
  );
}
