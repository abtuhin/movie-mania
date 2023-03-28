import { AppProviders } from '@/providers/app-provider';
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}
