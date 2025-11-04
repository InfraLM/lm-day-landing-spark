/**
 * Helper para gerar caminhos corretos de assets públicos
 * considerando o BASE_URL configurado no Vite
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove a barra inicial do path se existir
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Garante que o base termina com /
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};