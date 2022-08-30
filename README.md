
# express-typescript-api-gateway application

This is a simple API gateway application for register and redirect to others microservices.

## Running the server

Create `.env` file to the root and copy all environment variables from `.env.example`.
Register your services to `/src/routes/index.ts`. example are given below.

```
{
    url: "/<Your preferable URL>", /* URL want to browse after domain like as https://www.google.com/anything */
    auth: true,
    proxy: {
        target: "https://www.google.com/", /* Service URL which one you want to browse */
        changeOrigin: true,
        pathRewrite: {
            [`^/<Your preferable URL>`]: '',  /* URL want to browse after domain like as https://www.google.com/anything */
        }
    }
}
```


Install the required dependencies:

```
npm install --save
```

Start the server in development mode:
```
npm run dev
```

Start the server in production mode:
```
npm start
```

Build the server:
```
npm run build
```

When the application starts, navigate to `http://localhost:3000/docs` you will show the services URL you set register to gateway.
