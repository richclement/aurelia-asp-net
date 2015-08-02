import {Users} from '../../src/users';

class HttpStub {
  configure(config){
  }

  fetch(url) {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ content: { items: response } });
    })
  }
}

describe('the users module', () => {

  it('sets response to users', () => {
    var http = new HttpStub(),
        sut = new Users(http),
        itemStubs = [1],
        itemFake = [2];

    http.itemStub = itemStubs;
    sut.activate().then(() => {
      expect(sut.users).toBe(itemStubs);
      expect(sut.users).not.toBe(itemFake);
    });
  });
});
