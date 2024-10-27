import logo from "@/assets/logo-eklo.svg";
import { HeaderBar } from "eklo-ui";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { navItems } from "../../config";
import { Footer } from "./components/Footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Eklo Coaching",
  description: "Beyond your best",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <HeaderBar brandLogo={logo.src} navItems={navItems} sticky />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
