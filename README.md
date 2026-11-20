# Sitio-Mitzy

Simple static website for **Mitzy Fernanda Lafragua Vargas**: home page with a login portal (Supabase Auth), catalog and about pages.

Live site: https://johandiaz12.github.io/Sitio-Mitzy/

## Features
- Sign up / sign in with email and password (Supabase Auth: hashed passwords, managed session)
- Passwordless sign-in via email magic link
- Requests panel visible only with an active session; each request stores the creator's email

## Files
| File | Purpose |
|---|---|
| `index.html` | Home + login + requests panel |
| `catalogo.html` | Catalog (coming soon) |
| `acerca.html` | About |
| `css.css` | Styles |
| `supabase-config.js` | Supabase URL + public (publishable) key only |

## Security notes
- Only the public publishable key lives in this repo. Never commit the `service_role` / secret key or any password.
