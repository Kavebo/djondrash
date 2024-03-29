import '../styles/globals.css';

import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

import globalStyle from '../constants/globalStyle';
import { LanguageProvider } from '../languages';
import { pageView } from '../utils/googleAnalytics';
import CookieBanner from '../components/CookieBanner';
import { Global } from '@emotion/react';

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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    window.particlesJS?.load('particles-js', 'particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <LanguageProvider>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
      <CookieBanner />
    </LanguageProvider>
  );
}

export default MyApp;
