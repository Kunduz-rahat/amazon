import { StatisticsService } from './statistics.service';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    getMain(id: string): Promise<{
        name: string;
        value: number;
    }[]>;
}
