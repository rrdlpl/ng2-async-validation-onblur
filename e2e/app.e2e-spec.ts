import { MytestPage } from './app.po';

describe('mytest App', () => {
  let page: MytestPage;

  beforeEach(() => {
    page = new MytestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
