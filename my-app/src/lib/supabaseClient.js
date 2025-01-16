import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://XYZcompany.supabase.co'
const supabaseKey = 'public-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)