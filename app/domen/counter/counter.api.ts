import axios from 'axios';

export async function fetchCount(amount = 1): Promise<{ data: number }> {
  return await axios.post('/api/counter', {
    method: 'POST',
    body: { amount },
  })
}
