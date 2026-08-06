# Personal site

Next.js 14 (App Router) + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/page.tsx` — homepage
- `app/blog/page.tsx` — writing index
- `app/blog/[slug]/page.tsx` — individual post (renders Markdown)
- `content/posts/*.md` — your blog posts, one Markdown file each
- `lib/content.ts` — your profile (name, bio, links)
- `lib/posts.ts` — reads and parses the Markdown files at build time
- `public/images/posts/` — photos used in posts
- `app/layout.tsx` — fonts + SEO metadata
- `tailwind.config.ts` — color/type design tokens

## Writing a new blog post

1. Create a new file in `content/posts/`, e.g. `content/posts/my-new-post.md`
2. Add frontmatter at the top:
   ```
   ---
   title: "My New Post"
   date: "2026-08-10"
   excerpt: "One-line summary shown on the homepage and blog index."
   cover: "/images/posts/my-photo.jpg"
   ---
   ```
   Leave `cover: ""` if you don't want a cover image.
3. Write the post body below the frontmatter in Markdown.
4. To add photos inside the post body, drop the image file into
   `public/images/posts/` and reference it: `![alt text](/images/posts/photo.jpg)`
5. Commit and push — the site rebuilds and deploys automatically via
   `.github/workflows/deploy.yml`. No code changes needed for a new post.

## Before you deploy

- Update `metadataBase` URL in `app/layout.tsx` and `app/sitemap.ts` if your
  domain changes
- Swap the mailto/GitHub/Twitter links in `lib/content.ts` for your own
- In your GitHub repo: Settings → Pages → Source → "GitHub Actions"
  (this repo deploys via Actions, not the "Deploy from a branch" option)

## Next steps you can ask for

- Full-text search across posts
- Tags/categories for posts
- RSS feed

