import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/base.css';
import 'tailwindcss/utilities.css';
import 'tailwindcss/components.css';
import { Flowbite } from 'flowbite-react';
// import { FC, PropsWithChildren } from 'react';
import { flowbiteTheme as theme } from '../utils/themes';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Flowbite theme={{ theme }}>
        <Component {...pageProps} />
      </Flowbite>
    </main>
  );
}
