
import { UserInput } from './user-input';

describe('UserInput to check Positive', () => {
  
  it('Test to User Input Positive', () => {
    
    let userInp=0;
    let actualResult=new UserInput().userInput(userInp);
    expect(actualResult).toBe(1);
  });
  it('Test to User Input Positive if 0', () => {
    let userInp=10;
    let expectedResult=1;
    let actualResult=new UserInput().userInput(userInp);
    expect(actualResult).toBe(expectedResult);
  });
 
});
describe('Test To check Input Negative',()=>{
  
  it('Test to User Input Negative', () => {
    let userInp=-9;
    let actualResult=new UserInput().userInput(userInp);
    expect(actualResult).toBe(0);
  });
  it('Test to User Input Negative', () => {
    let userInp=-1;
    let actualResult=new UserInput().userInput(userInp);
    expect(actualResult).toBe(0);
  });

});