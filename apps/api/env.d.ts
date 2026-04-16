declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly CLOUDFLARE_ENV: 'dev' | 'prod';
      readonly NODE_ENV: 'development' | 'production';
    }
  }
}

export { };
