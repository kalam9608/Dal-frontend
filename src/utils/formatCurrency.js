/**
 * Formats a number or string value as currency in Indian Rupee format.
 *
 * @param {object} options - The options object.
 * @param {number|string} options.value - The value to format as currency.
 * @param {boolean} [options.sign=true] - Whether to include the currency sign. Defaults to `true`.
 * @param {string} [options.currency='INR'] - The currency to use. Defaults to `'INR'`.
 * @returns {string} The formatted currency string in INR format.
 */

function formatCurrency({ value, sign, currency = "INR" }) {
  if (typeof value === "string") return value;

  if (sign) {
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency,
    });
  }

  return Number(value).toLocaleString("en-IN", {
    currency,
  });
}

export default formatCurrency;
