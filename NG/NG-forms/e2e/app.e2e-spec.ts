import { NGFormsPage } from './app.po';

describe('ng-forms App', () => {
  let page: NGFormsPage;

  beforeEach(() => {
    page = new NGFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
