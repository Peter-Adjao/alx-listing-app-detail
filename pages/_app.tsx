import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist } from "next/font/google";

// Initialize the font
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  );
}
