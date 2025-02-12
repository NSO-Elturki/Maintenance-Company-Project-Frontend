import { MaintenanceJob } from "./maintenance-job";
import { SparePart } from "./spare-part";

export interface MaintenanceSpare {
    maintenanceJob: MaintenanceJob;
    sparePart: SparePart;
}