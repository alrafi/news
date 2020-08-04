# News | The Alrafi Times

News web app portal.

### Live

[![Netlify Status](https://api.netlify.com/api/v1/badges/05c2998b-a194-41e9-90e1-8baf4eb37072/deploy-status)](https://app.netlify.com/sites/alrafinews/deploys)

*Ps: Since requests from the browser are not allowed on the Developer plan, except from localhost, news will not appear on netlify deploy.

### Configure

Get the repo

```sh
git clone https://github.com/alrafi/news.git
cd news
npm install
```

Add `.env` file to your root directory and add the following

```js
REACT_APP_APIKEY=[YOUR_NEWS_APIKEY]
```

To get NEWS API_KEY you must registered in [NewsAPI](https://newsapi.org/).
