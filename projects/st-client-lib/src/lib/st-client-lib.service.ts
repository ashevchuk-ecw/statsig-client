import { Injectable } from '@angular/core';
import { default as Statsig, DynamicConfig } from 'statsig-js';

@Injectable({
  providedIn: 'root'
})
export class StClientLibService {

  constructor() { }

  public async statsigInit(): Promise<void> {
		await Statsig.initialize(
			'',
			{
				appVersion: '42',
				custom: {
					appName: 'Statsig POC'
				},
				userID: '17322425',
				locale: 'UA',
			},
			{ environment: { tier: 'development' } }
		);
	}

	public isFeatureEnabled(key: string): boolean {
		return Statsig.checkGate(key);
	}

	public getExperiment(experimentName: string): DynamicConfig {
    return Statsig.getExperiment(experimentName);;
	}
}
