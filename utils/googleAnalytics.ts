// log the pageView with their URL
export const pageView = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }: { action: any; params: any }) => {
  window.gtag('event', action, params);
};
