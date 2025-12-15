export const getPath = (path: string) => {
  const base = import.meta.env.BASE_URL;
  // BASE_URL already includes the trailing slash if configured (e.g., /blog/)
  // Only remove leading slash from path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export default getPath;
