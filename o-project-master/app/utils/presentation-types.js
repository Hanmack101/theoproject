const {assign, keys} = Object;

export default function PresentationTypes(articles) {
  const typesDict = articles.reduce(
    (presentationTypes, article) => {
      const type = article.presentation.toLowerCase(); 

      if (presentationTypes[type]) return presentationTypes;
      return assign({}, presentationTypes, {[type]: true});
    }
    , {}
  );

  return keys(typesDict);
}
