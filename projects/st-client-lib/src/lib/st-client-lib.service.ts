import { Injectable } from '@angular/core';
import { DynamicConfig } from 'statsig-js';
import * as StatsigRoot from 'statsig-js'

@Injectable({
  providedIn: 'root'
})
export class StClientLibService {

  	public async statsigInit(key: string): Promise<void> {
		StatsigRoot.default.initialize(
			key,
			{
				appVersion: '42',
				custom: {
					appName: 'Statsig POC'
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
	return StatsigRoot.default.checkGate(key);
}

public getExperiment(experimentName: string): DynamicConfig {
	return StatsigRoot.default.getExperiment(experimentName);;
}
}
