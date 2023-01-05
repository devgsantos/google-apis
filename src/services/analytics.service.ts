/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { settings } from "../settings";


@Injectable()
export class AnalyticsService {

    analyticsDataClient = new BetaAnalyticsDataClient({
        projectId: settings.projectId.myProjectId,
        keyFilename: process.cwd() + settings.jsonFilename.keyLocation
    });

    async getAnalytics(request: any) {
        const metrics = [];
        const dimensions = [];

        request.body.metrics.forEach((element: string) => {
            metrics.push({
                name: element
            })
        });

        request.body.dimensions.forEach((element: string) => {
            dimensions.push({
                name: element
            })
        });

        return await this.analyticsDataClient.runReport({
            property: `properties/${settings.properties.myProperty}`,
            dateRanges: [
                {
                    startDate: request.body.date,
                    endDate: 'today',
                },
            ],
            dimensions: dimensions,
            metrics: metrics,
        }).then(response => {
            return response
        }).catch(err => {
            return err
        });

        // console.log('Report result:');
        // response.rows.forEach(row => {
        //     console.log(row.dimensionValues[0], row.metricValues[0]);
        // })
    }
}
