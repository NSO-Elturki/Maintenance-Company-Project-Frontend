import { MaintenanceJob } from "./maintenance-job";

export interface SchedluledMaintenanceJob {
    id: number;
    maintenanceJob: MaintenanceJob;
    date: string;
    time: string;
}