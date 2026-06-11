# Debug Session: supabase-sync-upload
- **Status**: [OPEN]
- **Issue**: La app no sube correctamente la lista a la nube y el iPad no puede traerla.
- **Debug Server**: http://192.168.1.25:7777/event
- **Log File**: .dbg/trae-debug-log-supabase-sync-upload.ndjson

## Reproduction Steps
1. Configurar URL, anon key y hogar en la app.
2. Pulsar `Guardar sync`.
3. Pulsar `Subir nube` en el iPhone.
4. Intentar `Traer nube` en el iPad.

## Hypotheses & Verification
| ID | Hypothesis | Likelihood | Effort | Evidence |
|----|------------|------------|--------|----------|
| A | `pushRemoteState()` no se ejecuta o sale antes de tiempo. | High | Low | Pending |
| B | Supabase responde error por configuracion, permisos o tabla/policies. | High | Medium | Confirmed |
| C | La subida responde OK pero el payload o `updated_at` no quedan persistidos correctamente. | Medium | Medium | Pending |
| D | Alguno de los dispositivos sigue con una PWA antigua y no ejecuta el flujo nuevo. | Medium | Low | Pending |
| E | La configuracion de sync no queda persistida y al reabrir se desactiva la nube. | Medium | Low | Pending |

## Log Evidence
- Evidencia del usuario: `Sync POST 404 code PGRST125`.
- Interpretacion: la ruta REST enviada a Supabase es invalida.
- Causa mas probable: en `URL de Supabase` se ha pegado una URL ya terminada en `/rest/v1` y la app estaba concatenando otro `/rest/v1`.
- Cambio aplicado: normalizar `supabaseUrl` para aceptar tanto `https://proyecto.supabase.co` como `https://proyecto.supabase.co/rest/v1`.

## Verification Conclusion
- Fix pendiente de verificacion por el usuario tras redeploy y nueva prueba de subida.
