async function doFetch(url: string, method: string, body?: any) {
  const options: RequestInit = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  };

  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url, options);

  const resBody = await res.json();
  const error = res.ok ? null : resBody;
  const data = res.ok ? resBody : null;

  return { error, data };
}

export const get = (url: string) => doFetch(url, "GET");
export const post = (url: string, body: any) => doFetch(url, "POST", body);
export const del = (url: string) => doFetch(url, "DELETE");
