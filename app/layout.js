import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Krol Finance | Professional Tax & Accounting | South Africa",
  description: "Krol Finance is a results-driven financial services company helping growing businesses take control of their finances. Tax, bookkeeping, cash flow, debt management, and asset finance — South Africa.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
