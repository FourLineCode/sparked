import { twJoin, twMerge } from 'tailwind-merge';
import type { ClassNameValue } from 'tailwind-merge/dist/lib/tw-join';

export function cn(...classNames: ClassNameValue[]) {
  return twMerge(twJoin(...classNames));
}
