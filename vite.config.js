
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { v4wp } from '@kucrut/vite-for-wp';
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        v4wp({
            input: {
                dashboard: 'src/pages/Dashboard/main.jsx',
                settings: 'src/pages/Settings/main.jsx',
                tasks: 'src/pages/Tasks/main.jsx',
                caseStatus: 'src/pages/CaseStatus/main.jsx',
                caseDetails: 'src/pages/CaseDetails/main.jsx'
            },
            outDir: 'dist'
        }),
    ],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
    }
});