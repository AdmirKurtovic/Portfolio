# Extraordinary (Next.js + Tailwind)

A lightweight recreation of the referenced Framer site using Next.js App Router and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## GitHub Pages

This repo is configured to deploy to GitHub Pages on pushes to `main`.

- Next.js `next.config.js` uses `output: 'export'`, `images.unoptimized: true`, and sets `basePath`/`assetPrefix` to `/Portfolio` in production.
- Workflow: `.github/workflows/pages.yml` builds and uploads `out/` and deploys with `actions/deploy-pages`.

After the first push, enable Pages:
- GitHub → Repository Settings → Pages → Source: GitHub Actions

## Docker

A simple Dockerfile is provided for self-hosting.

```bash
# Build image
docker build -t extraordinary .

# Run container
docker run -p 3000:3000 extraordinary
```

## Notes
- Replace external image URLs with your own assets if needed.
- Update metadata in `app/layout.tsx`.
- Edit footer contact email and social links.

