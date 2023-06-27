# MNRPWR

**Monorepower** is an open-source project that focuses on establishing the foundation of a monorepo.

It is highly opiniated. Use it at your own risk.

## API – `@mnrpwr/api`

- Node.js
- Express
- Drizzle ORM

### Deploy on fly

In the root folder of the monorepo:
```
fly deploy --config apps/api/fly.toml --dockerfile apps/api/Dockerfile
```