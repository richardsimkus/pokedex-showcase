import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// Resolve the directory name
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
