create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  interest text not null default 'Not sure yet',
  created_at timestamptz not null default now()
);

create table if not exists public.tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  description text,
  url text,
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.tools enable row level security;

create policy "public can submit leads" on public.leads
  for insert to anon with check (true);

create policy "public can read featured tools" on public.tools
  for select to anon using (featured = true);

insert into public.tools (name, category, description, featured) values
  ('OpenAI', 'Models', 'General-purpose intelligence for content, analysis, and custom workflows.', true),
  ('Notion', 'Knowledge', 'A flexible home for docs, wikis, and AI-assisted team knowledge.', true),
  ('Zapier', 'Automation', 'Connect the tools you already use and automate the handoffs.', true),
  ('Claude', 'Models', 'Thoughtful AI for writing, research, and complex reasoning.', true),
  ('Make', 'Automation', 'Visual automation for more powerful multi-step systems.', true),
  ('Perplexity', 'Research', 'Fast, cited answers for research and decision-making.', true)
on conflict do nothing;
