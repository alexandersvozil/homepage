import "@/styles/globals.css";
import "highlight.js/styles/github-dark-dimmed.css"; // Or whichever theme you chose

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
