import { AngularMandatePage } from './app.po';

describe('angular-mandate App', () => {
  let page: AngularMandatePage;

  beforeEach(() => {
    page = new AngularMandatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
