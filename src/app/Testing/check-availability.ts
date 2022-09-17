export class CheckAvailability {

    areas=['Delhi','Bengaluru','Chennai','Kolkata'];
    addArea(areaName:string)
    {
        this.areas.push(areaName);
    }
    getAllAreas(){
        return this.areas;
    }
}
