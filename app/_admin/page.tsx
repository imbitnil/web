import AdminTable from "../components/AdminTable";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function AdminPage() {
  const { data: subscribers, error } = await supabaseAdmin
    .from("suscribers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-red-500 mt-4">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">
        Admin Dashboard
      </h1>

      <p className="text-gray-500 mb-8">
        Total Subscribers: <strong>{subscribers?.length ?? 0}</strong>
      </p>

      <AdminTable subscribers={subscribers || []} />
    </div>
  );
}