import { Buffer } from 'buffer';
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
  return fetch(
    graphqlUrl,
    {
      'POST',
      headers: {
        Authorization: `token ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload,
    }
  );
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
  return fetch(
    loginUrl,
    {
      'PUT',
      headers: {
        Authorization: getBasicAuth({
          username,
          password,
        }),
      },
      body: payload,
    }
  );
}

export const querySearchRepos = 
