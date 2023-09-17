# React JSX Breakpoints

Component style breakpoints so that you won't have to create custom components to handle responsive design.

I was working on a project and handling breakpoints via react hooks are bad as you'll have milliseconds (sometimes a whole second) of delay before the right element shows up on the screen. So I decided to create this package to handle breakpoints via html-css components.

<!-- ![npm bundle size](https://img.shields.io/bundlephobia/min/jsx-breakpoints?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@codifytools/jsx-breakpoints?style=flat-square)
![npm downloads](https://img.shields.io/npm/dt/leomarkcastro/jsx-breakpoints?style=flat-square)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square) -->

## Basis

This package is based on the breakpoints of [Tailwind CSS](https://tailwindcss.com/docs/breakpoints).

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

Note that this package doesn't use Tailwind's CSS declaration and contains its own media queries copies almost exactly from the tailwind css declarations.

## Functions

```jsx
export interface BreakpointProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  start?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  end?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  children?: React.ReactNode | React.ReactNode[];
}
```

## Sample

![Demo GIF](https://file-asia-se-01-api.db.srv01.xyzapps.xyz/files/2023-09-14%2015-27-26.gif)

Import first the css of the module

```jsx
// _app.tsx
import 'jsx-breakpoints/dist/index.esm.css';
```

```jsx
// index.tsx
import { JsxBreakpoint } from 'jsx-breakpoints';

const app = () => {
  return (
    <div>
      <JsxBreakpoint start="sm" end="sm">
        <p>Only on mobile</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="md" end="md">
        <p>Only on tablet</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="lg" end="lg">
        <p>Only on laptop</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="xl" end="xl">
        <p>Only on desktop</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="2xl" end="2xl">
        <p>Only on 2xl</p>
      </JsxBreakpoint>

      <br />

      <JsxBreakpoint start="sm">
        <p>On mobile and up</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="md">
        <p>On tablet and up</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="lg">
        <p>On laptop and up</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="xl">
        <p>On desktop and up</p>
      </JsxBreakpoint>

      <JsxBreakpoint start="2xl">
        <p>On 2xl and up</p>
      </JsxBreakpoint>
    </div>
  );
};
```

### License

MIT license, Copyright (c) Leo Mark Castro. For more information see `LICENSE`.
