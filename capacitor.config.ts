import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "ab.ionic.starter.app",
    appName: "photo-gallery",
    webDir: "dist",
    server: {
        androidScheme: "https",
    },
};

export default config;
