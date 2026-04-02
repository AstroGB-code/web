// Supabase Configuration for Avyan IAS Redesign
const SUPABASE_URL = 'https://azhjzzcsdwuxkrjnpspg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6aGp6emNzZHd1eGtyam5wc3BnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDMwNjAsImV4cCI6MjA5MDcxOTA2MH0.y0_QPmGbXltriFivY8MUm8uQE5pVTkCQ6KwewfDThRk';

// Initialize the Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
