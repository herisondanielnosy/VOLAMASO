
import { createClient } from
'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL =
'https://orudlfinrfrokldibkoo.supabase.co';

const SUPABASE_ANON_KEY =
'sb_publishable_eghQGLn7mgI6G8-W--R3TQ_0eL_Fzvp';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log('VOLAMASO : Supabase connecté');
