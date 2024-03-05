import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DynamicConfig } from 'statsig-js';

export const STATSIG: InjectionToken<string> = new InjectionToken('Statsig');

@Injectable({
  providedIn: 'root',
})
export class StClientLibService {
  constructor(@Inject(STATSIG) protected Statsig: any) {
    console.log('Statsig from client', this.Statsig);
  }

  public async statsigInit(key: string): Promise<void> {
    this.Statsig.initialize(
      key,
      {
        appVersion: '42',
        custom: {
          appName: 'Statsig POC',
        },
        userID: '17322425',
        locale: 'UA',
      },
      { environment: { tier: 'development' } }
    ).then(() => {
      console.log('done');
    });
  }

  public isFeatureEnabled(key: string): boolean {
    return this.Statsig.checkGate(key);
  }

  public getExperiment(experimentName: string): DynamicConfig {
    return this.Statsig.getExperiment(experimentName);
  }
}
