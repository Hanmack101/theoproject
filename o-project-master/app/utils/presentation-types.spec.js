import PresentationTypes from './presentation-types'

describe('presentation types', () => {
    it('returns presentation types from articles when more than one article with same type', () => {
        const articles = [
                            {presentation: 'mode1'},
                            {presentation: 'mode1'}
                        ]
        const types = PresentationTypes(articles);

        expect(types).to.deep.equal(['mode1']);
    });

    it('returns presentation types when more than one article with differnt types', () => {
        const articles = [
                            {presentation: 'mode1'},
                            {presentation: 'mode2'}
                        ]
        const types = PresentationTypes(articles);

        expect(types).to.deep.equal(['mode1', 'mode2']);
    });

    it('does not give duplicate types when same type but with different casing', () => {
        const articles = [
                            {presentation: 'mode1'},
                            {presentation: 'mOdE1'}
                        ]
        const types = PresentationTypes(articles);

        expect(types).to.deep.equal(['mode1']);
    });
});