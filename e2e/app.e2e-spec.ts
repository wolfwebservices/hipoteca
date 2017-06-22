import { HipotecaPage } from './app.po';

describe('hipoteca App', () => {
  let page: HipotecaPage;

  beforeEach(() => {
    page = new HipotecaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
