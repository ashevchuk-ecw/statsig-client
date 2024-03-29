import { Injectable } from '@angular/core';
import * as Statsig from 'statsig-js';
import { DynamicConfig } from 'statsig-js';

@Injectable({
  providedIn: 'root'
})
export class StService {

    constructor() { }

    public async statsigInit(): Promise<void> {
		Statsig.default.initialize(
			'client-C1rOhOyc5O1TqQIpY3MCp5wCtjfxlXMsUvQSTnKqPi4',
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
		return Statsig.default.checkGate(key);
	}

	public getExperiment(experimentName: string): DynamicConfig {
        return Statsig.default.getExperiment(experimentName);;
	}
}
