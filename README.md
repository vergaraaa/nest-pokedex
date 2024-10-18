<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in development

1. Clone repo
2. Run

```
yarn installl
```

3. Have Nest CLI installed

```
npm i -g @nestjs/cli
```

4. Run db

```
docker-compose up -d
```

5. Copy `.env.template` and rename it to `.env`

6. Fill variables

7. Run app

```
yarn start:dev
```

8. Rebuild db with seed

```
http://localhost:3000/api/v2/seed
```

## Tech Stack

- MongoDB
- Nest
- Docker

# Production build

1. Create file `.env.prod`
2. Fill prod env variables
3. Build new image

```
docker-compose -f docker-compose.prod.yml --env-file .env.prod up --build
```
