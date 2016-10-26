import StyleSheet from './stylesheet'

describe('stylesheet', () => {
    it('returns empty object if passed []', () => {
        expect(StyleSheet([])).to.deep.equal({});
    });

    it('returns values from input object if passed object', () => {
        expect(StyleSheet({a: "blah", b: "foo"})).to.deep.equal({a: "blah", b: "foo"});
    });
});
