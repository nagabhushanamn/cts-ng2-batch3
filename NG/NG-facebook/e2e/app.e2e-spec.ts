import { BasicComponentDemoPage } from './app.po';

describe('basic-component-demo App', () => {
  let page: BasicComponentDemoPage;

  beforeEach(() => {
    page = new BasicComponentDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
