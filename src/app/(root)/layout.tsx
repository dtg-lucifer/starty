import type { Metadata } from "next";
import { Fira_Mono, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

const poppins = Poppins({
  display: "fallback",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const firaMono = Fira_Mono({
  weight: "400",
  variable: "--font-fira-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Starty, the ultimate startup platform you are looking for",
  description:
    "Starty is a platform that helps you build your startup from scratch. We provide you with the tools and resources you need to succeed.",
  creator: "Piush Bose",
  openGraph: {
    type: "website",
    url: "https://starty.com",
    title: "Starty - Your Startup Journey",
    description: "Join Starty to kickstart your entrepreneurial journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaMono.variable} antialiased`}
      >
        {/* @TODO: add suspense for loading the navbar lazily */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
