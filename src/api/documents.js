export default {
  querySearchRepos: ({ query, after }) => `
    query { 
      search(query: "${query}", type: REPOSITORY, first: 100${after ? `, after: "${after}"` : ''}) {
        repositoryCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ... on Repository {
              id
              name
              description
              viewerHasStarred
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  `,
  queryRepoOverview: ({ owner, name }) => `
    query { 
      repository(owner:"${owner}", name: "${name}") {
        description
        stargazers {
          totalCount
        }
        watchers {
          totalCount
        }
        forks {
          totalCount
        }
      }
    }
  `,
  queryStargazers: ({ owner, name, before }) => `
    query { 
      repository(owner:"${owner}", name: "${name}") {
        stargazers(last: 100${before ? `, after: "${before}"` : ''}) {
          totalCount
          pageInfo {
            startCursor
            hasPreviousPage
          }
          edges {
            starredAt
          }
        }
      }
    }
  `,
}
