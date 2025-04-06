export const truncateAddress = (address: string | undefined, start = 5, end = 3): string => {
    if (!address) return "";
    if (address.length <= start + end) return address;
    return `${address.substring(0, start)}...${address.substring(address.length - end)}`;
  };
  