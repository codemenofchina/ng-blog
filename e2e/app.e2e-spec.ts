import { MyBlog1Page } from './app.po';

describe('my-blog1 App', () => {
  let page: MyBlog1Page;

  beforeEach(() => {
    page = new MyBlog1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
