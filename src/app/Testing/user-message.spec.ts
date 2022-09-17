import { UserMessage } from './user-message';

describe('Test to check UserMessage', () => {
  it('Test to Check Welcome User Message', () => {
    let userName='Shashi';
    let expectedUserMessage=`Welcome to Angular::${userName}`;

    let actualUserMessage=UserMessage(userName);

    // expect(new UserMessage()).toBeTruthy();
    expect(actualUserMessage).toContain(expectedUserMessage);

  });
  
});
