import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email });

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'This email is already subscribed.' };
    }
    return { success: false, error: 'Something went wrong. Please try again.' };
  }

  return { success: true };
}
