# QA — Torre de Prioridades

## Revisión académica
PASS: lectura directa del PDF original, sección 5.5, ejercicios de pp. 10–18, Zacatillo pp. 2–3 y continuación de inversión p. 19. La matriz de trazabilidad está en README.md.

- 18 minicasos; 7 de jerarquía, 3 de igual prioridad, 3 de ponderación, 5 integradores.
- Partida: 2 jerarquías + 1 igual prioridad + 1 ponderación + 1 integrador.
- Cantidades, porcentajes y pesos verificados con enunciados impresos.
- P₄ de Zacatillo y P₅ de producción preservados.
- Los fragmentos se identifican y conservan sus índices originales.
- Sin prioridad usa plataforma común; dos pedidos de circuitos comparten P₃.
- Ahorros/bonos 2:1; vitaminas A/B/C 2:1:1; baleros 1000:1450:2500.
- Peso y prioridad validados por separado; se rechaza construir un nivel inferior antes de terminar el superior.
- Pᵢ no recibe valores numéricos ordinarios. Feedback y cierre explican preservación lexicográfica.

## Pruebas automatizadas
`npm test`: 7 pruebas PASS. Incluye solución de todo el banco, errores de prioridad y peso, duplicación, distribución y cinco simulaciones de reglas.

`tests/browser-qa.mjs`: cinco partidas completas en Chromium headless con emulación táctil y movimiento reducido:

| Pantalla | Partida (IDs del banco) | Resultado |
|---|---|---|
| 375 × 812 | p1, u1, e3, w2, i3 | PASS |
| 390 × 844 | f1, t1, e2, w2, i1 | PASS |
| 820 × 1180 | u1, z1, e2, w2, i3 | PASS |
| 1180 × 820 | u1, t1, e3, w3, i4 | PASS |
| 1440 × 900 | s1, z1, e3, w3, i2 | PASS |

Verificaciones: cinco retos terminados, resultado, replay vuelve a 1/5, sonido con estado accesible, teclado Enter/espacio, taps reales de navegador, controles ≥44 px, sin scroll horizontal, torre dentro del viewport en los estados revisados, cero errores JS. Capturas completas de 25 estados en directorio temporal de OpenCode; inspección visual de móvil e iPad horizontal.

## Duración y alcance
Objetivo de diseño: 60–110 segundos. Las partidas automáticas rápidas no representan tiempo de lectura humano. Cronómetro funcional verificado; el juego no fuerza un tiempo límite. Pendiente una sesión con estudiantes para medir duración y calibrar dificultad subjetiva de 6.5–7/10.

La emulación verifica disposiciones y eventos táctiles, no sustituye pruebas en hardware iPad/iPhone ni una auditoría con lector de pantalla. Soporte de foco, semántica nativa, avisos aria-live, contraste visual y prefers-reduced-motion implementados.
