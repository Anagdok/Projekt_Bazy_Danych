import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ubtyyybcnioqiorcgggq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVidHl5eWJjbmlvcWlvcmNnZ2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTg0NjYsImV4cCI6MjA2MzY3NDQ2Nn0.ewJ7jiBTtIqrTpzf8BOX2R5RXFIFU-lr3b8bE9O4vs8';

export const supabase = createClient(supabaseUrl, supabaseKey);