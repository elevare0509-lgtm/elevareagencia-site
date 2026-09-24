/** @type {import('next').NextConfig} */
const nextConfig = {
  // statusCode 301 em vez de permanent: true, que no Next gera 308.
  // Os dois são permanentes para o Google, mas 301 é o que as ferramentas de SEO esperam.
  async redirects() {
    return [
      { source: "/sites", destination: "/", statusCode: 301 },
      { source: "/landing-pages", destination: "/", statusCode: 301 },
      { source: "/menu-digital", destination: "/", statusCode: 301 },
      { source: "/design-instagram", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
