import { AnalyticsService } from './services/analytics.service';
import { BigQueryService } from './services/big-query.service';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    BigQueryService,
    AnalyticsService
  ],
})
export class AppModule {
}
