/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { iAnalyicsRequest } from './interfaces/default.interface';
import { AnalyticsService } from './services/analytics.service';
import { BigQueryService } from './services/big-query.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly analytics: AnalyticsService,
    private readonly bigQuery: BigQueryService
  ) { }

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('big-query')
  async getBigQuery(): Promise<string> {
    return await this.bigQuery.bigQueryCall();
  }

  @Post('analytics')
  getAnalytics(@Req() request: iAnalyicsRequest) {
    return this.analytics.getAnalytics(request);
  }
}
