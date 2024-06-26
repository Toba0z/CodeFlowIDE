import "./globals.css";
import { ReactNode } from "react";
import Providers from "../app/Providers";

interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={"  min-h-screen "}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
