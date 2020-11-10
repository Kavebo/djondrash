import '../styles/globals.css';

import { LanguageProvider } from '../languages';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
