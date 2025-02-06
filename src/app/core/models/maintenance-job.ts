import { SparePart } from "./spare-part";

export interface  MaintenanceJob {
    id: number;
    name: string;
    costPerHour: number ;
    timeToFinish: number;
    spareParts: SparePart[];
}