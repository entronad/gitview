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
          owner {
            login
          }
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



# 0.1.0

- 登录获取access_token



- 根据关键字、排序方式搜索版本库

  返回 名称、简介、star数量、版本库ID

```
query { 
  search(query: "vue", type: REPOSITORY, first: 10, after: "") {
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
```

- 根据版本库返回版本库详情

```
query { 
  repository(owner:"vuejs", name: "vue") {
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
```

- 根据版本库循环返回星

```
query { 
  repository(owner:"vuejs", name: "vue") {
    stargazers(last: 100, before: "Y3Vyc29yOnYyOpIAzgYvQLk") {
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
```

---

异常处理：

1. graphql内部错误

   特征：status为200，返回的JSON中有一个errors

   例子：body中没有query字符串；query字符串解析错误

2. http错误

   特征：status为对应错误码，返回JSON有message和documentation_url两个字段

   例子：body的JSON解析错误；token无效等

api方法在任何情况下，都返回resolve的promise，其value为一个名为response的对象，包含status和body两个字段

所返回的body是已经解析好的js对象

如果一切正常就返回2XX，正常body，

如果http错误就返回错误码，body仅有message

如果网络发起异常，就返回499，body仅有e的message

如果graphql内部错误，就返回599，body的message放errors的message的拼接

如果解析json错误，返回599，body的message放e的message

结果：

```
正常
{ status: 200,
  ok: true,
  body: 
   { repository: 
      { description: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
        stargazers: { totalCount: 73396 },
        watchers: { totalCount: 4034 },
        forks: { totalCount: 10497 } } } }

断网
{ status: 499,
  ok: false,
  body: { message: 'Network request failed' } }

写错端点
{ status: 404, ok: false, body: { message: 'Not Found' } }

document写错
{ status: 599,
  ok: false,
  body: { message: 'Parse error on "quer" (IDENTIFIER) at [2, 5]' } }
```

