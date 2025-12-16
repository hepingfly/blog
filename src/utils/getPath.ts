export const getPath = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  const pathWithoutSlash = path.startsWith('/') ? path.slice(1) : path;
  return `${baseWithSlash}${pathWithoutSlash}`;
};

export default getPath;
