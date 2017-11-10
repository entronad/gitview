import { Buffer } from 'buffer';
/**
 * Please creat your owrn secret.js:
 * 
 * export const client = {
 *   id: '',
 *   secret: '',
 * }
 */
import { client } from '../../secret';
import documents from './documents';

const loginUrl = `https://api.github.com/authorizations/clients/${client.id}`;
const graphqlUrl = 'https://api.github.com/graphql';

const getBasicAuth = ({
  username,
  password,
}) => {
  const authBuffer = new Buffer(
    `${username}:${password}`,
    'base64'
  );
  return `Basic ${authBuffer.toString()}`;
};

const createCall = async (document, accessToken) => {
  const payload = JSON.stringify({
    query: document,
  })
  const response = await fetch(
    graphqlUrl,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${accessToken}`,
      },
      body: payload,
    }
  );
  return response.json();
}

export const login = async ({
  username,
  password,
  footprint
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
  const response = await fetch(
    loginUrl,
    {
      method: 'PUT',
      headers: {
        Authorization: getBasicAuth({
          username,
          password,
        }),
      },
      body: payload,
    }
  );
  return response.json();
}

export const querySearchRepos = ({ query, after }, accessToken) => 
  createCall(documents.querySearchRepos({ query, after }), accessToken);

export const queryRepoOverview = ({ owner, name }, accessToken) => 
  createCall(documents.queryRepoOverview({ owner, name }), accessToken);

export const queryStargazers = ({ owner, name, before }, accessToken) => 
  createCall(documents.queryStargazers({ owner, name, before }), accessToken);
