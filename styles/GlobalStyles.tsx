import { createGlobalStyle, css } from 'styled-components';

const vars = css`
  :root {
    --font-bold: 700;
    --font-medium: 500;
    --color-blue-100: #dbeafe;
    --color-blue-200: #bfdbfe;
    --color-blue-300: #93c5fd;
    --color-blue-400: #60a5fa;
    --color-blue-500: #3b82f6;
    --color-blue-600: #2563eb;
    --color-yellow-100: #fef3c7;
    --color-yellow-200: #fff0b2;
    --color-yellow-300: #fde68a;
    --color-yellow-400: #fcd34d;
    --color-yellow-500: #fbbf24;
    --color-yellow-600: #f59e0b;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-900: #111827;
    --color-primary-100: var(--color-blue-100);
    --color-primary-200: var(--color-blue-200);
    --color-primary-300: var(--color-blue-300);
    --color-primary-400: var(--color-blue-400);
    --color-primary-500: var(--color-blue-500);
    --color-primary-600: var(--color-blue-600);
    --color-text: rgba(14, 20, 27, 1);
    --color-bg: #fff;
    --color-bg-dimmed: #19232d;
    --color-border-primary: var(--color-grey-700);
    @media (prefers-color-scheme: dark) {
      --color-primary-100: var(--color-yellow-100);
      --color-primary-200: var(--color-yellow-200);
      --color-primary-300: var(--color-yellow-300);
      --color-primary-400: var(--color-yellow-400);
      --color-primary-500: var(--color-yellow-500);
      --color-primary-600: var(--color-yellow-600);
      --color-text: #fff;
      --color-bg: rgba(14, 20, 27, 1);
    }
  }
`;

const base = css`
  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    background: var(--color-bg);
    color: var(--color-text);
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  a,
  button {
    &:focus {
      outline: none;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${vars}
  ${base}
`;

export default GlobalStyles;
