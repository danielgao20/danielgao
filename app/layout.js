import "./globals.css";

export const metadata = {
  title: "Daniel Gao",
  description: "Under construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            :root {
              --font-sans: 'Helvetica', Arial, sans-serif;
            }
          `}
        </style>
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-sans)" }}>
        {children}
      </body>
    </html>
  );
}
