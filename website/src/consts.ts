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

export const BASE_URL = import.meta.env.BASE_URL.slice(1).slice(0, -1);

export const SIDEBAR: Sidebar = {
  'eslint-config-emperor': [
    {
      text: `Introduction`,
      link: `${BASE_URL}/introduction`,
    },
  ],
  Presets: [
    {
      text: `Base`,
      link: `${BASE_URL}/preset/base`,
    },
    {
      text: `React`,
      link: `${BASE_URL}/preset/react`,
    },
    {
      text: `Prettier`,
      link: `${BASE_URL}/preset/prettier`,
    },
  ],
  Plugins: [
    {
      text: `eslint`,
      link: `${BASE_URL}/plugin/eslint`,
    },
    {
      text: `@typescript-eslint`,
      link: `${BASE_URL}/plugin/@typescript-eslint`,
    },
    {
      text: `import`,
      link: `${BASE_URL}/plugin/import`,
    },
    {
      text: `jsx-a11y`,
      link: `${BASE_URL}/plugin/jsx-a11y`,
    },
    {
      text: `prettier`,
      link: `${BASE_URL}/plugin/prettier`,
    },
    {
      text: `react`,
      link: `${BASE_URL}/plugin/react`,
    },
    {
      text: `react-hooks`,
      link: `${BASE_URL}/plugin/react-hooks`,
    },
    {
      text: `unicorn`,
      link: `${BASE_URL}/plugin/unicorn`,
    },
  ],
};
