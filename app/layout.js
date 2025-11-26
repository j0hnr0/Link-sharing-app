import "./globals.css";
import localFont from "next/font/local";
import { SessionProviders } from "./providers/session-provider";
import { AuthProvider } from "./contexts/auth-provider";

export const metadata = {
  title: "Link Sharing App",
  description: "Share your links to your friend.",
};

const instrumentSans = localFont({
  src: [
    {
      path: "../public/fonts/static/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/static/InstrumentSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/static/InstrumentSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        <SessionProviders>
          <AuthProvider>{children}</AuthProvider>
        </SessionProviders>
      </body>
    </html>
  );
}
