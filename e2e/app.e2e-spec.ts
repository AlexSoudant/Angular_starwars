import { StarUniWarsPage } from './app.po';

describe('star-uni-wars App', () => {
  let page: StarUniWarsPage;

  beforeEach(() => {
    page = new StarUniWarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
