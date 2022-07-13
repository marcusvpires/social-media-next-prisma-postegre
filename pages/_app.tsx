import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
