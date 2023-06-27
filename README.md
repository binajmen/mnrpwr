# MNRPWR

**Monorepower** is an open-source project that focuses on establishing the foundation of a monorepo.

It is a highly opiniated proof of concept. Use it at your own risk.

## API – `@mnrpwr/api`

- Node.js
- Express
- Drizzle ORM

### TODO

- [x] Deploy on fly manually
- [ ] CI flow
- [ ] Use Drizzle Kit to migrate

### Deploy on fly

In the root folder of the monorepo:

```
fly deploy --config apps/api/fly.toml --dockerfile apps/api/Dockerfile
```

## WEB – `@mnrpwr/web`

- Remix

### TODO

- [ ] Everything
