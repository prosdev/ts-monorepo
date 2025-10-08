import { CoreService } from '@monorepo/core';

export interface LoggerConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
}

export class Logger {
  private level: string;
  private coreService: CoreService;

  constructor(coreService: CoreService, config: LoggerConfig) {
    this.coreService = coreService;
    this.level = config.level;
  }

  log(message: string): void {
    console.log(`[${this.level.toUpperCase()}] ${message}`);
  }

  getServiceInfo(): string {
    return `Logger using API Key: ${this.coreService.getApiKey()}`;
  }
}

export function createLogger(coreService: CoreService, config: LoggerConfig): Logger {
  return new Logger(coreService, config);
}