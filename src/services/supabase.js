import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://abvpxbzbqbvnqsmtxvsw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFidnB4YnpicWJ2bnFzbXR4dnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODYyODMsImV4cCI6MjA2ODE2MjI4M30.3UANhLOeRRrP5CwxSxcDF8oNx8uUe35NyeuLM3XLRPQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
