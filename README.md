# alph-land-dapp-list

Test repo for the `@alphland/dapps` npm package.

## npm package

**Package:** `@alphland/dapps`
**Source:** [`alph-land/alphland`](https://github.com/alph-land/alphland) → `packages/alphland-dapps/`

## Publishing a new version

The package is auto-published via GitHub Actions when changes are pushed to the `develop` branch of `alph-land/alphland`. However, **publishing only happens when the version number is bumped**.

Whenever dApp data is added or updated (`/data/*.json`), update the version in:

```
alphland/packages/alphland-dapps/package.json
```

Example:
```json
"version": "1.0.2"  →  "1.0.3"
```

Push to `develop` → CI builds and publishes automatically.

## Testing

After a new version is published, update and test locally:

```bash
npm update @alphland/dapps
npm test
```
