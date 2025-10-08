export interface CoreConfig {
  apiKey: string;
  debug: boolean;
}

export class CoreService {
  private config: CoreConfig;

  constructor(config: CoreConfig) {
    this.config = config;
  }

  initialize(): void {
    if (this.config.debug) {
      console.log('CoreService initialized with config:', this.config);
    }
  }

  getApiKey(): string {
    return this.config.apiKey;
  }
}

export function createCoreService(config: CoreConfig): CoreService {
  return new CoreService(config);
}