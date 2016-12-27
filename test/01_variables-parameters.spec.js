import { expect, should } from 'chai';

describe('var, let, const', () => {

  describe('var...', () => {

    function iterator(bool) {
      if (bool) {
        var name = 'Hackages';
      }
      return name;
    }

    it('what do you expect???', () => {
      expect(iterator(false)).equal(undefined);
    });
  });

  describe('let...', () => {

    function iterator(bool) {
      if (bool) {
        let name = 'Hackages';
      }
      return name;
    }



    it('what do you expect???', () => {
      expect(iterator.bind()).to.throw(ReferenceError);
    });
  });

  describe('const...', () => {
    function iterator(bool) {
      if (bool) {
        const name = 'we';
      }
      return name;
    }

    it('what do you expect???', () => {
      expect(iterator.bind()).to.throw(ReferenceError);
    });
  });
});
