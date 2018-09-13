const stringToArrayBuffer = require('../utils/index.js');
/**
 * Please creat your owrn secret.js:
 *
 * export const client = {
 *   id: '',
 *   secret: '',
 * }
 */
const client = require('../secret.js')
const documents = require('./documents.js')

const LOGIN_URL = `https://api.github.com/authorizations/clients/${client.id}`;
const GRAPHQL_URL = 'https://api.github.com/graphql';

const MY_STATUS = {
  NET_ERROR: 499,
  GRAPHQL_ERROR: 599,
};

const getBasicAuth = ({
  username,
  password,
}) => wx.arrayBufferToBase64(stringToArrayBuffer(`${username}:${password}`));

const createCall = async (document, accessToken) => {
  const payload = JSON.stringify({
    query: document,
  });
  let response;
  try {
    response = await fetch(
      GRAPHQL_URL,
      {
        method: 'POST',
        headers: {
          Authorization: `token ${accessToken}`,
        },
        body: payload,
      },
    );
  } catch (error) {
    return {
      status: MY_STATUS.NET_ERROR,
      ok: false,
      body: {
        message: error.message,
      },
    };
  }
  let body;
  try {
    body = await response.json();
  } catch (error) {
    return {
      status: MY_STATUS.NET_ERROR,
      ok: response.ok,
      body: {
        message: error.message,
      },
    };
  }
  if (!response.ok) {
    return {
      status: response.status,
      ok: response.ok,
      body: {
        message: body.message,
      },
    };
  }
  return body.data
    ? {
      status: response.status,
      ok: response.ok,
      body: body.data,
    }
    : {
      status: MY_STATUS.GRAPHQL_ERROR,
      ok: false,
      body: {
        message: body.errors[0].message,
      },
    };
};

const login = async ({
  username,
  password,
  footprint,
}) => {
  const payload = JSON.stringify({
    client_secret: client.secret,
    scopes: [
      'user',
      'repo',
      'delete_repo',
      'notifications',
      'gist',
      'admin:repo_hook',
      'admin:org_hook',
      'admin:org',
      'admin:public_key',
      'admin:gpg_key',
    ],
    note: `${username} on Gitview`,
    footprint,
  });
  let response;
  console.log(getBasicAuth({
    username,
    password,
  }));
  try {
    response = await fetch(
      LOGIN_URL,
      {
        method: 'PUT',
        headers: {
          Authorization: getBasicAuth({
            username,
            password,
          }),
        },
        body: payload,
      },
    );
  } catch (error) {
    return {
      status: MY_STATUS.NET_ERROR,
      ok: false,
      body: {
        message: error.message,
      },
    };
  }
  let body;
  try {
    body = await response.json();
  } catch (error) {
    return {
      status: MY_STATUS.NET_ERROR,
      ok: response.ok,
      body: {
        message: error.message,
      },
    };
  }
  if (!response.ok) {
    return {
      status: response.status,
      ok: response.ok,
      body: {
        message: body.message,
      },
    };
  }
  return {
    status: response.status,
    ok: response.ok,
    body,
  };
};

const queryViewer = accessToken =>
  createCall(documents.queryViewer(), accessToken);

const querySearchRepos = ({ query, after }, accessToken) =>
  createCall(documents.querySearchRepos({ query, after }), accessToken);

const queryRepoOverview = ({ owner, name }, accessToken) =>
  createCall(documents.queryRepoOverview({ owner, name }), accessToken);

const queryStargazers = ({ owner, name, before }, accessToken) =>
  createCall(documents.queryStargazers({ owner, name, before }), accessToken);

module.exports = {
  login,
  queryViewer,
  querySearchRepos,
  queryRepoOverview,
  queryStargazers,
}
