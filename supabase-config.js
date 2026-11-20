// =====================================================================
// supabase-config.js — conexión del sitio de Mitzy con SU proyecto de Supabase
// ---------------------------------------------------------------------
// Solo va aquí la clave pública (publishable / anon public).
// NUNCA pongas la clave "service_role" / "secret" en este archivo ni en el repo.
// Valores en: Supabase → Project Settings → Data API / API Keys
// =====================================================================

const SUPABASE_URL = 'https://deekhdvvmbivnethldss.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_aIGr1dWe7paFn-79skNNag_qWfJ-6-p'; // clave publishable (pública)

// La librería (CDN) expone window.supabase con createClient.
// Lo reemplazamos por el cliente ya conectado, para usar `supabase.auth...` en index.html.
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
