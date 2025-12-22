import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wktefkicwgtatmvivedx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdGVma2ljd2d0YXRtdml2ZWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNTc4MjMsImV4cCI6MjA4MTgzMzgyM30.bW_EGrkU0Q8JBKVIYYpkidk6U25wN7WKi0PWrbRoCB0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
