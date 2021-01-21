const jwtDecode = require('jwt-decode');

// Count zeroes in float
export const parseAccessToken = (accessToken) => {
  const token = accessToken
    ? accessToken
    : localStorage.getItem('token') || null;
  const now = Date.now();
  const slug = 'https://pinpointestimates.com/slug'; //TODO move to .env
  const roles = 'https://pinpointestimates.com/roles';
  let slugId = null;
  let rolesArr = [];
  try {
    const { exp } = jwtDecode(token);
    // Pad the exp to match now.
    // If valid set auth
    if (parseInt(exp.toString().padEnd(now.toString().length, '0')) > now) {
      slugId = jwtDecode(token)[slug];
      rolesArr = jwtDecode(token)[roles];
    }
  } catch (error) {}

  return { slug: slugId, roles: rolesArr };
};
