import { gql } from '@apollo/react-hooks';
import { ARTICLE_DETAILS, COLLECTION_DETAILS, USER_DETAILS } from './fragment';

export const GET_ARTICLES = gql`
  query getArticles(
    $orderBy: AllArticlesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $username: String
    $first: Int
    $after: String
    $checkUserLike: ID
    $checkUserCollect: ID
  ) {
    articles(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      username: $username
      first: $first
      after: $after
    ) {
      edges {
        node {
          id
          title
          author
          tag
          publishedAt
          thumb
          format
          user {
            username
            firstName
            lastName
            profileImage
          }
          isLiked(checkUserLike: $checkUserLike)
          isCollected(checkUserCollect: $checkUserCollect)
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
`;

export const GET_USERS = gql`
  query getUsers(
    $first: Int
    $after: String
  ) {
    users(
      first: $first
      after: $after
    ) {
      edges {
        node {
          id
          username
          firstName
          lastName
          profileImage
          articleCount
          followerCount
          followingCount
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query getArticle($id: ID!, $checkUserLike: ID, $checkUserCollect: ID) {
    article(id: $id) {
      ...articleDetails
      isLiked(checkUserLike: $checkUserLike)
      isCollected(checkUserCollect: $checkUserCollect)
    }
  }
  ${ARTICLE_DETAILS}
`;

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser {
    authorizedUser {
      ...userDetails
    }
  }
  ${USER_DETAILS}
`;

export const GET_USER = gql`
  query getUser($username: String!, $checkUserFollow: ID) {
    user(username: $username) {
      id
      firstName
      lastName
      username
      isFollowed(checkUserFollow: $checkUserFollow)
      profileImage
      description
      articleCount
      followerCount
    }
  }
`;

export const GET_USER_LIKES = gql`
  query getLikes(
    $orderBy: AllLikesOrderBy
    $orderDirection: OrderDirection
    $first: Int
    $after: String
    $userId: String
    $username: String
    $checkUserLike: ID
    $checkUserCollect: ID
  ) {
    articleLikes(
      orderBy: $orderBy
      orderDirection: $orderDirection
      first: $first
      after: $after
      userId: $userId
      username: $username
    ) {
      edges {
        node {
          id
          user{
            id
          }
          article{
            ...articleDetails
            isLiked(checkUserLike: $checkUserLike)
            isCollected(checkUserCollect: $checkUserCollect)
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${ARTICLE_DETAILS}
`;

export const GET_ARTICLE_COMMENTS = gql`
  query getArticleComments(
    $orderBy: AllCommentsOrderBy
    $orderDirection: OrderDirection
    $first: Int
    $after: String
    $userId: String
    $username: String
    $articleId: ID
  ) {
    articleComments(
      orderBy: $orderBy
      orderDirection: $orderDirection
      first: $first
      after: $after
      userId: $userId
      username: $username
      articleId: $articleId
    ) {
      edges {
        node {
          id
          user{
            id
            username
            profileImage
            firstName
            lastName
          }
          content
          createdAt
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
`;

export const GET_COLLECTIONS = gql`
  query getCollections(
    $orderBy: AllCollectionsOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
    $userId: String
    $username: String
  ) {
    collections(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
      userId: $userId
      username: $username
    ) {
      edges {
        node {
          ...collectionDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${COLLECTION_DETAILS}
`;

export const GET_COLLECTION = gql`
  query getCollection(
    $id: ID!
    $checkUserLike: ID
    $first: Int
    $after: String
  ) {
    collection(id: $id) {
      ...collectionDetails
      user {
        username
      }
      articles(
        first: $first
        after: $after
      ) {
        edges {
          node {
            article{
              ...articleDetails
              isLiked(checkUserLike: $checkUserLike)
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${ARTICLE_DETAILS}
  ${COLLECTION_DETAILS}
`;

export const GET_DISCOVER_COLLECTIONS = gql`
  query getCollections(
    $orderBy: AllCollectionsOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
    $userId: String
    $username: String
  ) {
    collections(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
      userId: $userId
      username: $username
    ) {
      edges {
        node {
          ...collectionDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${COLLECTION_DETAILS}
`;

export const GET_USER_COLLECTIONS_PLUS = gql`
  query getCollections(
    $orderBy: AllCollectionsOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
    $userId: String
    $username: String
    $checkArticleCollect: ID
  ) {
    collections(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
      userId: $userId
      username: $username
    ) {
      edges {
        node {
          ...collectionDetails
          isCollected(checkArticleCollect: $checkArticleCollect)
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${COLLECTION_DETAILS}
`;

export default {
  GET_ARTICLE, GET_ARTICLES, GET_ARTICLE_COMMENTS, GET_USERS, GET_USER,
};
