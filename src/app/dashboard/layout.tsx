export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-200 p-4">Sidebar</aside>
      <section className="flex-1 p-4">{children}</section>
    </div>
  );
}
