/**
 * Converts a wallet address into a shortened format: e.g., 0x11....0000
 * Shows the first 4 and last 4 characters, separated by '....'
 * @param address Wallet address as a string
 * @returns Shortened address string
 */
export const truncateWalletAddress = (address: string): string => {
  if (!address || address.length < 10) return address;
  const start = address.slice(0, 4);
  const end = address.slice(-4);
  return `${start}....${end}`;
}
