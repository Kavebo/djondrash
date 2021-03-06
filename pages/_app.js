import '../styles/globals.css';

import Router from 'next/router';
import NProgress from 'nprogress';

import { LanguageProvider } from '../languages';
import GlobalStyle from '../constants/globalStyle';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
