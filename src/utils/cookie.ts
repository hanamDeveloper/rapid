import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const deleteCookie = (name: string) => {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() - 1);
  document.cookie = name + '= ' + '; expires=' + expireDate.toUTCString() + '; path=/';
};
