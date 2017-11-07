import { Buffer } from 'buffer';
import { client } from '../../secret';

const loginUrl = `https://api.github.com/authorizations/clients/${client.id}`;
const baseUrl = 'https://api.github.com/graphql';

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

const 

export const api = {
  login: async ({
    username,
    password,
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

}