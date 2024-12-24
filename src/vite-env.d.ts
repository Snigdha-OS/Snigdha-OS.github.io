/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string
  readonly VITE_STRIPE_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}