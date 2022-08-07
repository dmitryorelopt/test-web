import axios from 'axios';

export function login(): Promise<void> {
  return axios.get('http://localhost:3000/facebook', {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
