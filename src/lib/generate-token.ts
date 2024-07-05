/**
 * Generates a random token using alphanumeric characters and a user ID.
 *
 * @return {string} A random token consisting of alphanumeric characters.
 */
export const generateToken = (userId: number | string) => {
  const token =
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  return `${token}-${userId}`;
};
