import { MaintenanceJob } from "./maintenance-job";

export interface SparePart{
    id: number;
    name: string;
    price: number
    //maintenanceJob: MaintenanceJob
    maintenanceJob?: MaintenanceJob[]
}