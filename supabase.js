// js/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://qjxzyvmqokpvreksxokw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqeHp5dm1xb2twdnJla3N4b2t3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjEyNjYsImV4cCI6MjA2NjIzNzI2Nn0.UOgjqYIQZSZ0r-y506_rqxujrFQ-iNLkOp8cO8BUX-U'

export const supabase = createClient(supabaseUrl, supabaseKey)
