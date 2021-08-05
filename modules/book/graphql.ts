import gql from 'graphql-tag';

gql`
  query BookPage_edition($id: ID) {
    edition(id: $id) {
      lang
      cover
      title
      description
      publishedIn
      book {
        id
        authors {
          fullName
          id
        }
      }
    }
  }
`;
