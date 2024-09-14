import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "TestLib",
      fileName: "test-lib",
    },
    manifest: true,
    rollupOptions: {
      input: "src/index.tsx",
      external: ["react", "react-dom", "@transcarent/foundation"],
    },
  },
  plugins: [react()],
});
