/**
 * Generates a random token using alphanumeric characters.
 *
 * @return {string} A random token consisting of alphanumeric characters.
 */
export const generateToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
