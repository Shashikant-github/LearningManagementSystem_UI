import { CheckAvailability } from './check-availability';

describe('CheckAvailability', () => {

  let checkAvai:CheckAvailability;
  beforeEach(()=>{
    checkAvai=new CheckAvailability();
  })
  it('Test to check available Areas', () => {
   let availableAreas=checkAvai.getAllAreas();
   expect(availableAreas).toContain('Delhi');
   expect(availableAreas).toContain('Kolkata');
  });
  it('Test to check available Areas after Adding new area', () => {
    let areaName="Noida";
    checkAvai.addArea(areaName);
    let availableAreas=checkAvai.getAllAreas();
    expect(availableAreas).toContain('Noida');
    expect(availableAreas).toContain('Kolkata');
   });
});
