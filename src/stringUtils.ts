export function isEmpty(value?: string): boolean {
    return value == null || !value.trim();
  }

export function getNumberWithOrdinal(n: number): string {
    const ordinals = ['th', 'st', 'nd', 'rd'] as const;
    const value = n % 100;
    return `${n}${ordinals[(value - 20) % 10] || ordinals[value] || ordinals[0]}`;
  }