import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://iidmqldentqllhtkcygi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZG1xbGRlbnRxbGxodGtjeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MDE1NDcsImV4cCI6MTk5NzQ3NzU0N30.BqQULIyLEQtIxPfy7La53BOjtxpSKjDk77TD9r-a33w"
);

export default supabase;
