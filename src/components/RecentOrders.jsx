import { Link } from "react-router-dom";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23348",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carrell",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.85",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "23",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carrell",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.85",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "22",
    product_id: "4324",
    customer_id: "23348",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "21",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carrell",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.85",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "20",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carrell",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.85",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
];

export const RecentOrders = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="mt-3">
        <table className="w-full border border-x-slate-400">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-slate-300">ID</th>
              <th className="px-4 py-2 border border-slate-300">Product ID</th>
              <th className="px-4 py-2 border border-slate-300">Customer Name</th>
              <th className="px-4 py-2 border border-slate-300">Order Date</th>
              <th className="px-4 py-2 border border-slate-300">Order Total</th>
              <th className="px-4 py-2 border border-slate-300">Shipping Address</th>
              <th className="px-4 py-2 border border-slate-300">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-2  border border-slate-300">#{order.id}</td>
                <td className="px-4 py-2  border border-slate-300"><Link>{order.product_id}</Link></td>
                <td className="px-4 py-2  border border-slate-300">{order.customer_name}</td>
                <td className="px-4 py-2  border border-slate-300">{new Date(order.order_date).toLocaleDateString()}</td>
                <td className="px-4 py-2  border border-slate-300">{order.order_total}</td>
                <td className="px-4 py-2  border border-slate-300">{order.shipment_address}</td>
                <td className="px-4 py-2  border border-slate-300">{order.current_order_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
