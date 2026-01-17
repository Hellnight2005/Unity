
export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-white">Service and Support</h1>

      <div className="space-y-8">
        <section className="bg-[var(--ue-secondary)] p-8 rounded-2xl border-l-4 border-[var(--ue-primary)]">
          <h2 className="text-2xl font-bold text-white mb-2">Installation & Commissioning</h2>
          <p className="text-gray-300">Expert on-site installation and testing of all electrical equipment to ensure optimal performance from day one.</p>
        </section>

        <section className="bg-[var(--ue-secondary)] p-8 rounded-2xl border-l-4 border-[var(--ue-accent-green)]">
          <h2 className="text-2xl font-bold text-white mb-2">Preventive Maintenance</h2>
          <p className="text-gray-300">Scheduled maintenance programs to identify issues before they cause downtime, extending the life of your assets.</p>
        </section>

        <section className="bg-[var(--ue-secondary)] p-8 rounded-2xl border-l-4 border-[var(--ue-accent-orange)]">
          <h2 className="text-2xl font-bold text-white mb-2">24/7 Technical Support</h2>
          <p className="text-gray-300">Round-the-clock support for critical issues. Our dedicated team is always ready to assist you.</p>
        </section>
      </div>
    </main>
  );
}