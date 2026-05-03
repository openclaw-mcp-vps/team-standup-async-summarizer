export default function Page() {
  const faqs = [
    {
      q: "Which tools does StandupSync connect to?",
      a: "Slack, Discord, GitHub, and Google Calendar. Connect in minutes via OAuth — no code required."
    },
    {
      q: "How are summaries delivered?",
      a: "Summaries appear on your dashboard and are emailed to your team every morning at a time you choose."
    },
    {
      q: "Is my team's data kept private?",
      a: "Yes. Data is processed in-memory to generate summaries and never stored or shared with third parties."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For remote engineering teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn async updates into<br />
          <span className="text-[#58a6ff]">standup summaries</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          StandupSync pulls Slack messages, GitHub commits, and calendar events into one AI-generated standup report — delivered to your inbox every morning.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get started for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, per team</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited team members",
              "Slack + Discord integration",
              "GitHub commits & PRs",
              "Google Calendar sync",
              "Daily email digest",
              "AI-powered summaries"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} StandupSync. All rights reserved.
      </footer>
    </main>
  );
}
