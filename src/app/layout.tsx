import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "OAuth 2.0 SSO App",
  description: "Next.js App using Auth0 OAuth 2.0 SSO",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
