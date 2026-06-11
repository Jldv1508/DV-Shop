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
| B | Supabase responde error por configuracion, permisos o tabla/policies. | High | Medium | Pending |
| C | La subida responde OK pero el payload o `updated_at` no quedan persistidos correctamente. | Medium | Medium | Pending |
| D | Alguno de los dispositivos sigue con una PWA antigua y no ejecuta el flujo nuevo. | Medium | Low | Pending |
| E | La configuracion de sync no queda persistida y al reabrir se desactiva la nube. | Medium | Low | Pending |

## Log Evidence
- Pending

## Verification Conclusion
- Pending
