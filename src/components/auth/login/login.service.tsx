async function getToken(login: string, password: string): Promise<string> {
  const url: string = 'http://localhost:4000/login';
  const options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login,
      password,
    }),
  };

  const res: any = await fetch(url, options);

  const { token }: { token: string } = await res.json();
  return token;
}

export function saveToken(token: string): void {
  localStorage.setItem('authToken', token);
}

export default getToken;
