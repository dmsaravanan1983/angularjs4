import { HemarecipesPage } from './app.po';

describe('hemarecipes App', () => {
  let page: HemarecipesPage;

  beforeEach(() => {
    page = new HemarecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
