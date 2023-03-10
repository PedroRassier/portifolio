import "@/styles/globals.css";
import { Inter, Roboto_Mono } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--roboto",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${robotoMono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
