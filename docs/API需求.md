Explore

- 根据关键字、排序方式搜索版本库

  返回 名称、简介、star数量、版本库ID

```
query { 
  search(query: "vue", type: REPOSITORY, first: 10) { 
    edges {
      cursor
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
```



- 根据关键字搜索用户

  返回 用户名、姓名、简介、地理位置、用户ID

```
query { 
  search(query: "vue", type: USER, first: 10, after: "Y3Vyc29yOjI=") { 
    edges {
      cursor
      node {
        ... on User {
          id
          name
          login
          bio
          location
        }
      }
    }
  }
}
```

Dashboard

- 当前用户

  返回 姓名、用户名、头像、简介、地理位置、follow数

```
query { 
  viewer {
    id
    login
    name
    bio
    location
    followers {
      totalCount
    }
  }
}
```



- 当前用户

  返回 contribution热力图

- 当前用户

  返回 star最多的五个repo组成的RepoList

common

RepoList

Repo名称、描述、star数量、Viewer是否已star、语言

UserList

user用户名、姓名、介绍、位置、头像