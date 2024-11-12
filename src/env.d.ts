interface ImportMetaEnv {
    readonly VITE_API_ENDPOINT: string;
    readonly VITE_API_AUTH: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}
