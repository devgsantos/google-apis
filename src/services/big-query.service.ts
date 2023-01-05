/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { BigQuery } from '@google-cloud/bigquery';
import { settings } from '../settings';

@Injectable()
export class BigQueryService {

    bigQuery = new BigQuery({
        projectId: settings.projectId.myProjectId,
        keyFilename: process.cwd() + settings.jsonFilename.keyLocation
    });

    async bigQueryCall(): Promise<any> {
        const options = {
            configuration: {
                query: {
                    query: 'SELECT * FROM `project.dataset` LIMIT 1000',
                    useLegacySql: false
                }
            }
        };

        return await this.bigQuery.createJob(options).then(function (data) {
            const job = data[0];

            return job.getQueryResults();
        });
    }

}
