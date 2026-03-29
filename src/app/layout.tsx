import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const themeInitializer = `
  try {
    const savedTheme = localStorage.getItem("bhavesh-portfolio-theme") || "gamma";
    document.documentElement.dataset.theme = savedTheme;
  } catch (error) {
    document.documentElement.dataset.theme = "gamma";
  }
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavesh Sharma | Elastic Solution Architect",
  description:
    "Portfolio of Bhavesh Sharma, an Elastic Solution Architect specializing in enterprise search, observability, Kubernetes, and high-scale platform modernization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="gamma"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        {children}
      </body>
    </html>
  );
}
