/**
 * Resolves absolute URLs for cross-subdomain navigation.
 * During development (localhost), maps domains to individual dev server ports.
 * In production, maps to the live domains and subdomains.
 */
export const getDomainUrl = (subdomain) => {
  const isDev = 
    window.location.hostname === "localhost" || 
    window.location.hostname === "127.0.0.1";

  if (isDev) {
    if (subdomain === "landing" || subdomain === "home") return "http://localhost:3001";
    if (subdomain === "intelligence") return "http://localhost:3002";
    if (subdomain === "signal") return "http://localhost:3003";
  }

  if (subdomain === "landing" || subdomain === "home") return "https://vorantir.com";
  return `https://${subdomain}.vorantir.com`;
};
