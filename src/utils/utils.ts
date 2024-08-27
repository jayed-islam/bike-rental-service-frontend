export function formatToBDT(amount: number): string {
  const formattedNumber = amount.toLocaleString("en-BD", {
    maximumFractionDigits: 2,
  });
  return `৳ ${formattedNumber}`;
}
