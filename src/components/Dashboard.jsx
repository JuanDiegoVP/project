import { BuyerProfile } from "./BuyerProfile";
import { DashStats } from "./DashStats";
import { PopularProducts } from "./PopularProducts";
import { RecentOrders } from "./RecentOrders";
import { TransactionChart } from "./TransactionChart";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashStats />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfile />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};
