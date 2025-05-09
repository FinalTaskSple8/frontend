export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: "/",
    plugins: [
      react(),
      svgr(),
    ],
    publicDir: "public",
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      port: env.VITE_PORT ?? 3000,
      proxy: {
        "/api/": {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\//, ""),
        },
        "/static/": {
          target: env.VITE_STATIC_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/static\//, ""),
        },
      },
    },
    build: {
      outDir: "dist", // kembali ke default
      emptyOutDir: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      sourcemap: true,
    },
    preview: {
      port: env.VITE_PORT ?? 3000,
    },
  };
});
