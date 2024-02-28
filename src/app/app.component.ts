import { Component } from '@angular/core';
import { StClientLibService } from 'st-client-lib';
import { default as Statsig, DynamicConfig } from 'statsig-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'statsig-client';

  constructor(private stService: StClientLibService) {

  }

  public async statsigInit() {
    await Statsig.initialize(
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
		);
  }

  public initStatsig() {
    this.statsigInit();
  }

  public initStatsigFromService() {
    this.stService.statsigInit();
  }

  public getExperimentFromService(experimentName: string) {
    const dc = this.stService.getExperiment(experimentName);
    console.log(`Experiment: ${experimentName}:`, dc);
  }

  public getExperiment(experimentName: string) {
    const dc = Statsig.getExperiment(experimentName);
    console.log(`Experiment: ${experimentName}:`, dc);
  }
}
