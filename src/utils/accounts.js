export const getCurrencySign = currency => {
  switch (currency) {
  case 'RUR':
    return '₽';
  case 'USD':
    return '$';
  default:
    return '';
  }
};
