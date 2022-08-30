
# api-gateway application

This is a simple API gateway application for register and redirect to others microservices.

![ScreenShot](/api-gateway.png)

### Running the application

Create a `.env` file to the root of application and copy all environment variables from `.env.example`.
Register your services to `/src/routes/index.ts`. example are given below.

```typescript
{
    url: "/<Your preferable URL>",
    auth: true,
    proxy: {
        target: "https://www.google.com/",
        changeOrigin: true,
        pathRewrite: {
            [`^/<Your preferable URL>`]: '', 
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

When the application starts, navigate to `http://localhost:3000` you will show the services URL you set to the gateway.
