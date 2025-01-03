/**
 * Utility functions for the portfolio website
 */

/**
 * Delays execution for the specified number of milliseconds
 * @param {number} ms - milliseconds to delay
 * @returns {Promise} resolves after the delay
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - ISO date string
 * @returns {string} formatted date string
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Validates an email address
 * @param {string} email - email address to validate
 * @returns {boolean} true if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
