/**
 * Форматирует число с разделителями тысяч
 * @param value - числовое значение
 * @returns строка с форматированным числом
 */
export const formatNumber = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

/**
 * Форматирует цену с валютой
 * @param price - цена
 * @param currency - символ валюты (по умолчанию '₽')
 * @param showDecimals - показывать ли копейки (по умолчанию false)
 * @returns отформатированная строка цены
 */
export const formatPrice = (
  price: number,
  currency: string = '₽',
  showDecimals: boolean = false
): string => {
  const formattedNumber = showDecimals
    ? price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : formatNumber(Math.round(price));

  return `${formattedNumber} ${currency}`;
};

/**
 * Форматирует цену в компактном виде (для больших чисел)
 * @param price - цена
 * @param currency - символ валюты (по умолчанию '₽')
 * @returns компактная строка цены (например, "1.5К ₽")
 */
export const formatPriceCompact = (price: number, currency: string = '₽'): string => {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}М ${currency}`;
  }
  if (price >= 1000) {
    return `${(price / 1000).toFixed(1)}К ${currency}`;
  }
  return formatPrice(price, currency);
};

/**
 * Парсит строку цены в число
 * @param priceString - строка с ценой
 * @returns числовое значение цены
 */
export const parsePrice = (priceString: string): number => {
  const cleaned = priceString.replace(/[^\d.,]/g, '').replace(',', '.');
  return parseFloat(cleaned) || 0;
};
