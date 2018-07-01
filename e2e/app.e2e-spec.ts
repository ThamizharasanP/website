import { NewWebsitePage } from './app.po';

describe('new-website App', function() {
  let page: NewWebsitePage;

  beforeEach(() => {
    page = new NewWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
