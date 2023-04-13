import "./globals.css";

import { Comfortaa, Roboto_Mono } from "next/font/google";
import { Providers } from "./providers";

export const metadata = {
  title: "Robert Gabriel",
  description: "Robert Gabriel is a software engineer and designer.",
};

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  display: "swap",
  subsets: ["latin"],
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
      className={`${comfortaa.variable} ${roboto_mono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
