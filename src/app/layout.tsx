import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "wmklab",
  description: "wmklab | Redefining Care. Empowering Every Life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Copyright &copy; wmklab</footer>
      </body>
    </html>
  );
}
