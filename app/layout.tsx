import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSync — Turn async updates into standup summaries",
  description: "Aggregates Slack, GitHub commits, and calendar events into digestible team standup summaries. Built for remote engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0d73e792-7e7e-467a-a164-3279bc5cc455"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
