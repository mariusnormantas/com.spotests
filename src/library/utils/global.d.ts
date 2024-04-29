/** @format */

declare global {
  interface String {
    unquote(): string;
    capitalize(params?: { allowMiddleUpperCase?: boolean }): string;
  }
}

export {};
