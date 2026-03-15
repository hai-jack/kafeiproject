'use server'

import { createClient } from '@/lib/supabase/server'

export async function getCoffeeOfferings() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('coffees').select('*').order('created_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return data
}
