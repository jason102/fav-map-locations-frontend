import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /* Absolute imports */
  resolve: {
    alias: {
      src: "/src",
    },
  },

  // Set publicDir to the folder where _redirects resides
  publicDir: "public",
});
