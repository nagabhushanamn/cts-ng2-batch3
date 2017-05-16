import { NGDataFlowPage } from './app.po';

describe('ng-data-flow App', () => {
  let page: NGDataFlowPage;

  beforeEach(() => {
    page = new NGDataFlowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
