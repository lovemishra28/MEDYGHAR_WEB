// app/api/doctors/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let query = supabase
    .from('doctors')
    .select('*');

  // Apply filter if category is provided and isn't "All Specialists"
  if (category && category !== "All Specialists") {
    // In the DB we use exact matching for specialty
    query = query.eq('specialty', category);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
