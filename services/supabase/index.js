import { createClient } from '@supabase/supabase-js'


const ENDPOINT = process.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;


// Create a single supabase client for interacting with your database
export default supabase = createClient(ENDPOINT, KEY);

