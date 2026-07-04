export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-7xl font-bold text-yellow-500 tracking-widest">
        PTE
      </h1>

      <h2 className="mt-8 text-4xl font-bold text-center">
        THE PERFORMANCE ENGINEER
      </h2>

      <p className="mt-6 text-xl text-gray-300 text-center max-w-2xl">
        Performance isn't found.
        <br />
        <span className="text-yellow-500 font-semibold">
          It's engineered.
        </span>
      </p>

      <p className="mt-10 text-center text-gray-400 max-w-3xl leading-8">
        Engineering better athletes, traders and teams through
        systems, data and continuous improvement.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-6xl">

        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
          <h3 className="text-yellow-500 text-2xl font-bold">PETE</h3>
          <p className="mt-4 text-gray-400">
            Automated trading intelligence built through testing,
            data and relentless iteration.
          </p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
          <h3 className="text-yellow-500 text-2xl font-bold">
            Athlete Engine
          </h3>
          <p className="mt-4 text-gray-400">
            Performance intelligence platform built for CrossFit athletes.
          </p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
          <h3 className="text-yellow-500 text-2xl font-bold">
            Engineering
          </h3>
          <p className="mt-4 text-gray-400">
            Manufacturing, leadership and continuous improvement from the factory floor.
          </p>
        </div>

      </div>

      <a
        href="https://instagram.com/the.performance.engineer"
        target="_blank"
        className="mt-16 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
      >
        Follow the Journey
      </a>

      <p className="mt-20 text-gray-500">
        hello@theperformanceengineer.uk
      </p>

    </main>
  );
}