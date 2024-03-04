import { Component } from '@angular/core';
import { StService } from './statsig.service';
import { StClientLibService } from 'st-client-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'statsig-client';

  constructor(
    private localStatsigService: StService,
    private depsStatsigService: StClientLibService
  ) {

  }

  public async initStatsig() {
    await this.localStatsigService.statsigInit();
  }

  public async initDepsStatsig() {
    await this.depsStatsigService.statsigInit('client-C1rOhOyc5O1TqQIpY3MCp5wCtjfxlXMsUvQSTnKqPi4');
  }

  public getDepsExperiment(experimentName: string) {
    const dc = this.depsStatsigService.getExperiment(experimentName);
    console.log(`Experiment: ${experimentName}:`, dc);
  }

  public getExperiment(experimentName: string) {
    const dc = this.localStatsigService.getExperiment(experimentName);
    console.log(`Experiment: ${experimentName}:`, dc);
  }
}
