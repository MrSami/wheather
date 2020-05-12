import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl); // as Promise<unknown>;
    //return browser.get('/');
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<
      string
    >;
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
