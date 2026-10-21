# TORRE DE PRIORIDADES
**Construye la jerarquía de metas** · Optimización I · Gimnasio 5.

Juego estático en HTML, CSS, SVG y JavaScript vanilla. Toca una meta y luego una ranura. Tab + Enter/espacio funcionan en todos los controles. No requiere arrastrar. Sonido sintetizado opcional, foco visible y movimiento reducido.

## Ejecutar
`npm run serve` y abrir http://localhost:4173. `npm test` verifica banco y reglas.

## Estructura
- `bank.js`: 18 minicasos con referencia al ejercicio y página.
- `rules.js`: selección aleatoria, jerarquías y validación independiente.
- `app.js`: presentación, interacción, audio y resultados.
- `style.css`, `icon.svg`: construcción visual y adaptación de pantalla.
- `.github/workflows/pages.yml`: pruebas y publicación automática desde main.

Cada partida contiene dos jerarquizaciones, una ronda de igual prioridad, una de pesos y una integradora. Tiempo objetivo 60–110 segundos, sin límite que interrumpa la lectura. La precisión mide colocaciones válidas / intentos de colocación; seleccionar un bloque no cuenta como intento.

## Fidelidad académica
Fuente consultada: `GYM 5_251128_083844.pdf`, sección 5.5 pp. 10–18; Zacatillo pp. 2–3; inversión continúa en p. 19; publicidad pp. 8–9. Se siguen los **enunciados impresos**, no las soluciones manuscritas (estas contienen diferencias en índices y baleros).

| IDs | Ejercicio / páginas | Contenido |
|---|---|---|
| z1, i1 | 1 / 2–3 | P₁ ≥ $16 millones; P₂ alimentos y medicina ≤ 10% del total recabado; P₃ ventas generales ≤ 20%; P₄ gasolina ≤ 2 centavos/galón |
| p1, i2 | 6b / 12 | P₁ usar 32 h; P₂ demanda 1: 10; P₃ demanda 2: 10; P₄ no tiempo extra; P₅ utilidad $48. p1 trabaja P₁–P₃ |
| f1 | 7 / 12–13 | 100 lb, proteína ≥ 15%, grasa ≤ 8%, costo ≤ 8 centavos/lb |
| t1 | 8 / 13 | facturar > $68,000; como máximo 1 socio, 3 experimentados, 5 jóvenes |
| c1, e3 | 10 / 15 | utilidad ≥ $4,000; extra ≤ 24 h; ambos pedidos (100 y 150) comparten P₃. e3 aísla P₃ |
| u1 | 9 / 14 | primeras tres prioridades: ingreso ≥ 1,200; ACT ≥ 25; internacionales ≥ 10% |
| s1 | 11 / 15–16 | primeras tres: mujeres ≥ 45%; minorías ≥ 40%; minimizar dinero requerido |
| e1 | 5 / 10 | sin prioridades: compra ≤ $20,000; utilidad ≥ $11,000; almacén ≤ 200 yardas² |
| e2 | 4 / 8–9 | sin prioridades: VAI ≥ 40 M; PBI ≥ 60 M; MAI ≤ 35 M; gasto ≤ $600,000 |
| w1, i3 | 14 / 18–19 | presupuesto máximo $100,000; bonos ≥ $40,000 y ahorros ≤ $30,000 comparten P₁ con pesos 1:2; riesgo ≥ $60,000 en P₂; fondos ≤ $20,000 en P₃. w1 aísla P₁; i3 omite explícitamente P₄ |
| w2, i4 | 13 / 17–18 | vitaminas A/B/C en P₁, pesos 2:1:1, requisitos 2/60/10 mg; colesterol P₂; costo P₃. w2 aísla P₁ |
| w3, i5 | 12 / 17 | capacidad 340 h P₁; ventas 20 básicos/24 generales/15 alta precisión en P₂, pesos $1000/$1450/$2500; tiempo extra ≤ 40 h en P₃. w3 aísla P₂; i5 omite explícitamente P₄ |

Los minicasos son fragmentos o enfoques de ejercicios; no se presentan como 18 empresas diferentes. Se conservan índices originales al aislar niveles. Los casos sin prioridad usan una plataforma común sin etiquetas P. P₁ es la base; P₄ y P₅ aparecen cuando el enunciado los requiere. Dentro de cada piso el orden entre metas es libre. Un piso superior no se construye antes de completar el anterior. Esto representa atención preemptiva, no exige que las metas del modelo real sean todas factibles.

Los pesos se eligen manualmente y se validan independientemente de los pisos. En baleros se usan las contribuciones unitarias originales; no valores numéricos asignados a Pᵢ. El juego no resuelve modelos ni determina tasas fiscales.

## QA de navegador
`PLAYWRIGHT_PATH=/ruta/playwright/index.mjs node tests/browser-qa.mjs` con servidor activo. `BASE_URL` permite verificar producción. Simula cinco partidas completas, una en cada tamaño requerido más escritorio; incluye error, pesos, tactilidad, teclado, replay, foco, ausencia de desbordamiento y altura de controles. Capturas en el directorio temporal de OpenCode.
