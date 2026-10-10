<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use the official Espresso Club logo asset for brand surfaces; keep only a small derived raster in `public/` for the favicon so the full source is not shipped twice.
- Keep image references centralized in `src/data/images.ts` and render pizza highlights directly from `menuData` as typographic entries, so image changes cannot alter menu content.
- Site photos and the logo are real files in `public/images/` referenced by plain `/images/...` paths, because CDN asset pointers only resolve on Lovable hosting, not on the self-hosted Node server.
