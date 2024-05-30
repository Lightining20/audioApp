import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://bcdakpixrkihxwhthoxt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZGFrcGl4cmtpaHh3aHRob3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMzg1MDIsImV4cCI6MjAzMTYxNDUwMn0.MCrNjWC71TfoYUi2p-dNEx4fd3cGJ9yo9W_7AGGcGkw"
);
