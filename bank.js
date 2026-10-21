// Transcripción resumida de los enunciados impresos; no de las respuestas manuscritas.
const g = (id, text, priority, weight = 1) => ({ id, text, priority, weight });
const z = [g('ing','Ingresos impositivos ≥ $16 millones',1),g('ali','Alimentos y medicina ≤ 10% de lo recabado',2),g('ven','Ventas generales ≤ 20% de lo recabado',3),g('gas','Gasolina ≤ 2 centavos por galón',4)];
const prod = [g('mo','Utilizar las 32 h de mano de obra',1),g('d1','Demanda: 10 unidades del producto 1',2),g('d2','Demanda: 10 unidades del producto 2',3),g('ext','No usar tiempo extra',4),g('uti','Utilidad objetivo: $48',5)];
const fud = [g('pro','Proteína ≥ 15%',1),g('gra','Grasa ≤ 8%',2),g('cos','Costo ≤ 8 centavos por libra',3)];
const cont = [g('fac','Facturación mensual > $68,000',1),g('soc','Contratar como máximo 1 socio',2),g('exp','Contratar como máximo 3 experimentados',3),g('jov','Contratar como máximo 5 jóvenes',4)];
const circ = [g('util','Utilidad semanal ≥ $4,000',1),g('extra','Tiempo extra ≤ 24 h semanales',2),g('c1','Pedido: 100 unidades del circuito 1',3),g('c2','Pedido: 150 unidades del circuito 2',3)];
const inv = [g('bon','Bonos: invertir ≥ $40,000',1,1),g('aho','Ahorros: invertir ≤ $30,000',1,2),g('rie','Capital de riesgo ≥ $60,000',2),g('fon','Fondos mutualistas ≤ $20,000',3)];
const diet = [g('a','Vitamina A ≥ 2 mg',1,2),g('b','Vitamina B ≥ 60 mg',1),g('c','Vitamina C ≥ 10 mg',1),g('col','Minimizar colesterol',2),g('cost','Minimizar costo de la dieta',3)];
const bal = [g('cap','Utilizar 340 h de capacidad normal',1),g('bas','Vender 20 baleros básicos',2,1000),g('gen','Vender 24 de aplicación general',2,1450),g('pre','Vender 15 de alta precisión',2,2500),g('te','Tiempo extra ≤ 40 h semanales',3)];
const tv = [g('comp','Compra de aparatos ≤ $20,000',0),g('gan','Utilidad ≥ $11,000',0),g('esp','Almacén ≤ 200 yardas²',0)];
const ad = [g('vai','Alcanzar ≥ 40 millones de VAI',0),g('pbi','Alcanzar ≥ 60 millones de PBI',0),g('mai','Alcanzar ≤ 35 millones de MAI',0),g('pres','Publicidad ≤ $600,000',0)];
const make = (id, type, title, source, brief, goals) => ({id,type,title,source,brief,goals});
export const bank = [
 make('z1','hierarchy','Zacatillo · cimientos fiscales','Ej. 1 · pp. 2–3','El consejo atiende primero ingresos, después alimentos y medicina, luego ventas generales y finalmente gasolina.',z),
 make('p1','hierarchy','Producción · primero las personas','Ej. 6b · p. 12','Orden indicado: utilizar mano de obra → demanda del producto 1 → demanda del producto 2. Trabajamos las primeras tres prioridades.',prod.slice(0,3)),
 make('f1','hierarchy','Fud · una mezcla bien construida','Ej. 7 · pp. 12–13','Para 100 lb de embutido: primero proteína, después grasa y finalmente costo.',fud),
 make('t1','hierarchy','Touche Young · facturar y contratar','Ej. 8 · p. 13','Primero facturación; después limitar socios, experimentados y jóvenes, en ese orden.',cont),
 make('c1','hierarchy','Circuitos · utilidad antes que horas extra','Ej. 10 · p. 15','Primero utilidad semanal, luego tiempo extra y después pedidos comprometidos. Los dos pedidos comparten P₃.',circ),
 make('u1','hierarchy','Admisiones · construir una generación','Ej. 9 · p. 14','Primeras tres prioridades: tamaño de la generación → promedio ACT → proporción internacional.',[g('tam','Nuevo ingreso ≥ 1,200 estudiantes',1),g('act','Promedio ACT ≥ 25 puntos',2),g('int','Internacionales ≥ 10%',3)]),
 make('s1','hierarchy','Sigma Paper · reclutamiento','Ej. 11 · pp. 15–16','Con presupuesto de $2.4 millones: primero participación femenina, luego minorías y después minimizar dinero requerido. Primeras tres prioridades.',[g('muj','Mujeres ≥ 45% de la nueva plantilla',1),g('min','Minorías ≥ 40% de la plantilla',2),g('rec','Minimizar dinero de reclutamiento',3)]),
 make('e1','equal','Electrónica · sin escalera de importancia','Ej. 5 · p. 10','El ejercicio pide un modelo SIN prioridades. Todas las metas van en la plataforma común; no inventes P₁, P₂ o P₃.',tv),
 make('e2','equal','Publicidad · cuatro metas a la par','Ej. 4 · pp. 8–9','Los cuatro objetivos se declaran sin prioridad. VAI: varones de altos ingresos; PBI: personas de bajos ingresos; MAI: mujeres de altos ingresos.',ad),
 make('e3','equal','Pedidos · mismo piso','Ej. 10 · p. 15','Fragmento de P₃: ambos pedidos comprometidos tienen la misma prioridad. P₁ y P₂ ya se preservan; aquí no se asignan pesos distintos.',circ.slice(2)),
 make('w1','weights','Inversión · el doble, en el mismo nivel','Ej. 14 · p. 18','Presupuesto máximo: $100,000. Bonos y ahorros comparten P₁; ahorros tiene el doble de importancia. Coloca cada bloque y elige su peso.',inv.slice(0,2)),
 make('w2','weights','Vitaminas · una base compartida','Ej. 13 · pp. 17–18','Las tres vitaminas están en P₁. Satisfacer A tiene el doble de importancia que satisfacer B o C. Elige pesos 2:1:1.',diet.slice(0,3)),
 make('w3','weights','Baleros · ponderar las ventas','Ej. 12 · p. 17','Fragmento de P₂. Pesos según utilidad unitaria: básico $1,000; general $1,450; alta precisión $2,500. No son nuevos niveles.',bal.slice(1,4)),
 make('i1','integrator','Zacatillo · torre fiscal completa','Ej. 1 · pp. 2–3','Orden del consejo: ingresos → alimentos y medicina → ventas generales → gasolina. Ninguna mejora inferior compensa deteriorar una superior.',z),
 make('i2','integrator','Producción · cinco pisos de decisión','Ej. 6b · p. 12','Orden: utilizar mano de obra → demanda 1 → demanda 2 → evitar tiempo extra → utilidad. Las penalizaciones del apartado a no sustituyen esta jerarquía.',prod),
 make('i3','integrator','Inversión · jerarquía y peso','Ej. 14 · pp. 18–19','Presupuesto máximo $100,000. P₁: bonos y ahorros (ahorros pesa el doble); P₂: riesgo; P₃: fondos. Fragmento: el rendimiento de P₄ queda fuera.',inv),
 make('i4','integrator','Dieta · prioridades que no se negocian','Ej. 13 · pp. 17–18','Primero vitaminas (A pesa el doble que B y C), después minimizar colesterol, finalmente minimizar costo. Construye la jerarquía y asigna pesos.',diet),
 make('i5','integrator','Baleros · una fábrica en equilibrio','Ej. 12 · p. 17','P₁ capacidad normal; P₂ ventas con pesos por utilidad; P₃ limitar tiempo extra. Fragmento: maximizar utilidad en P₄ queda fuera.',bal)
];
