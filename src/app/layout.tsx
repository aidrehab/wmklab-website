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
        <footer>
          <div className="copy">Copyright &copy; wmklab</div>
          <div>NIP: 8133926284 | REGON: 54056738400000 | KRS: 0001147564</div>
          <div>WMKlab sp. z o.o., Stanisława Moniuszki 11, 35-015 Rzeszów</div>
        </footer>
      </body>
    </html>
  );
}
