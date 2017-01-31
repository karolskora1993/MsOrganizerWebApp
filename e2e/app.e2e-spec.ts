import { MsOrganizerWebAppPage } from './app.po';

describe('ms-organizer-web-app App', function() {
  let page: MsOrganizerWebAppPage;

  beforeEach(() => {
    page = new MsOrganizerWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
