# Sync familiar con Supabase

## 1. Crear proyecto

- Crea un proyecto en Supabase.
- Copia:
  - `Project URL`
  - `anon public key`

## 2. Crear tabla

Ejecuta este SQL en `SQL Editor`:

```sql
create table if not exists public.dv_shop_state (
  household_id text primary key,
  device_id text,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.dv_shop_state enable row level security;

create policy "anon can read dv shop state"
on public.dv_shop_state
for select
to anon
using (true);

create policy "anon can insert dv shop state"
on public.dv_shop_state
for insert
to anon
with check (true);

create policy "anon can update dv shop state"
on public.dv_shop_state
for update
to anon
using (true)
with check (true);
```

## 3. Configurar la app

En `Mi cuenta` de DV Shop, rellena:

- `URL de Supabase`
- `Clave anon publica`
- `Hogar`

Usa exactamente los mismos tres valores en iPhone e iPad.

## 4. Primera sincronizacion

- En el dispositivo que ya tiene la lista buena: pulsa `Subir nube`.
- En el otro dispositivo: pulsa `Traer nube`.

## 5. Como funciona

- La app sigue guardando localmente para que no pierdas datos sin internet.
- Si la nube esta configurada, tambien sube cambios y consulta la nube cada pocos segundos.
- El modelo actual es `ultimo cambio gana`.
