
export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 px-6 max-w-7xl mx-auto bg-white dark:bg-[#0B1128] transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white animate-fade-in-up">About Us</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
          Unity Enterprises is a leader in electrical engineering and industrial automation.
          We are committed to providing innovative solutions that drive efficiency and sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-slate-50 dark:bg-[#151e32] p-10 rounded-3xl border border-slate-100 dark:border-blue-900/20 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg group">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Our Mission</h2>
            <p className="text-slate-600 dark:text-gray-400">
              To deliver high-quality, reliable, and energy-efficient electrical solutions that empower industries to achieve their full potential.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-[#151e32] p-10 rounded-3xl border border-slate-100 dark:border-blue-900/20 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg group">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Our Vision</h2>
            <p className="text-slate-600 dark:text-gray-400">
              To be the preferred partner for industrial automation and electrical infrastructure globally.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}