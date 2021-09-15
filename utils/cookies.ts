import cookies from 'js-cookie';

export const getCookie = (name: string) => {
  const cookie = cookies.get(name);

  return cookie;
};

export const setCookie = (name: string, value: string, expiresInDays?: number) => {
  cookies.set(name, value, { expires: expiresInDays });
};

export const removeCookie = (name: string) => cookies.remove(name);
