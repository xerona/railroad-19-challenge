import { Railroad19ChallengePage } from './app.po';

describe('railroad-19-challenge App', function() {
  let page: Railroad19ChallengePage;

  beforeEach(() => {
    page = new Railroad19ChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
