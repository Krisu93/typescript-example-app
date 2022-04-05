export class Employee {
    id?: number;
    name?: string;
    region?: string;
    sale?: number

    constructor(id?:number, name?: string, region?: string, sale?:number) {
        this.name = name;
        this.region = region;
        this.sale = sale;
    }
}