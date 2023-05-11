export const SITE = {
  title: 'eslint-config-emperor',
  description: 'Your website description.',
  defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export type Sidebar = Record<string, { text: string; link: string }[]>;

export const BASE_URL = import.meta.env.BASE_URL.slice(1, -1);
