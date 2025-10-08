import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        projects: ["ensawards.org/vitest.config.ts"],
        env: {
            LOG_LEVEL: "silent",
        },
    },
});