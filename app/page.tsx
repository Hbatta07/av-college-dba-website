export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-20 text-center max-w-5xl mx-auto">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-primary uppercase bg-blue-100 rounded-full">
        Department of Business Administration
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold text-brand-textPrimary tracking-tight mb-6">
        A.V. College of Arts, Science & Commerce
      </h1>
      <p className="text-lg sm:text-xl text-brand-textSecondary max-w-2xl mb-8">
        Empowering future business leaders through academic excellence, innovation, and industry alignment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#academics"
          className="px-6 py-3 bg-brand-primary text-white font-medium rounded hover:opacity-90 transition-opacity"
        >
          Explore Programs
        </a>
        <a
          href="#notices"
          className="px-6 py-3 bg-white text-brand-textPrimary border border-brand-border font-medium rounded hover:bg-gray-50 transition-colors"
        >
          Announcements
        </a>
      </div>
    </main>
  );
}
