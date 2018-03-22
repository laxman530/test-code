import { MatFormDemoPage } from './app.po';

describe('mat-form-demo App', () => {
  let page: MatFormDemoPage;

  beforeEach(() => {
    page = new MatFormDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
