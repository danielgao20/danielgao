import "./globals.css";

export const metadata = {
  title: "Daniel Gao",
  description: "Personal website",
};

import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
