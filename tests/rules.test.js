import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bank} from '../bank.js';
import {createSession,levels,validate,shuffle} from '../rules.js';
test('18 casos, IDs únicos y referencias al PDF',()=>{
 assert.equal(bank.length,18); assert.equal(new Set(bank.map(c=>c.id)).size,18);
 for(const c of bank){assert.match(c.source,/Ej\./);assert.equal(new Set(c.goals.map(g=>g.id)).size,c.goals.length);for(const g of c.goals)assert.ok(g.weight>0);}
});
test('Zacatillo conserva cuatro prioridades y cantidades originales',()=>{
 const c=bank.find(c=>c.id==='z1');assert.deepEqual(c.goals.map(g=>[g.id,g.priority]),[['ing',1],['ali',2],['ven',3],['gas',4]]);
 assert.match(c.goals[0].text,/16 millones/);assert.match(c.goals[1].text,/10%/);assert.match(c.goals[2].text,/20%/);assert.match(c.goals[3].text,/2 centavos/);
});
test('sin prioridades no se inventan pisos y los pedidos comparten P3',()=>{
 for(const id of ['e1','e2'])assert.deepEqual(levels(bank.find(c=>c.id===id)),[0]);
 assert.deepEqual(levels(bank.find(c=>c.id==='e3')),[3]);
});
test('jerarquía preemptiva y pesos se validan independientemente',()=>{
 const c=bank.find(c=>c.id==='i3');assert.equal(validate(c,[],'rie',2,1).ok,false);
 assert.equal(validate(c,[],'aho',1,1).ok,false);assert.equal(validate(c,[],'aho',1,2).ok,true);
 assert.equal(validate(c,[],'aho',2,2).ok,false);assert.equal(validate(c,['aho'],'aho',1,2).ok,false);
 assert.equal(validate(c,['aho','bon'],'rie',2,1).ok,true);
});
test('pesos del PDF: vitaminas, ahorros y utilidades de baleros',()=>{
 assert.deepEqual(bank.find(c=>c.id==='w1').goals.map(g=>g.weight),[1,2]);
 assert.deepEqual(bank.find(c=>c.id==='w2').goals.map(g=>g.weight),[2,1,1]);
 assert.deepEqual(bank.find(c=>c.id==='w3').goals.map(g=>[g.id,g.weight]),[['bas',1000],['gen',1450],['pre',2500]]);
});
test('cinco partidas simuladas: distribución, finalización y aleatoriedad',()=>{
 const signatures=new Set();for(let i=0;i<5;i++){const s=createSession(bank);assert.deepEqual(s.map(c=>c.type),['hierarchy','hierarchy','equal','weights','integrator']);assert.notEqual(s[0].id,s[1].id);signatures.add(s.map(c=>c.id).join());for(const c of s){const placed=[];for(const p of levels(c))for(const g of shuffle(c.goals.filter(g=>g.priority===p))){assert.equal(validate(c,placed,g.id,p,g.weight).ok,true);placed.push(g.id);}assert.equal(placed.length,c.goals.length);}}
 assert.ok(signatures.size>1);
});
test('todo el banco admite solución válida',()=>{for(const c of bank){const placed=[];for(const g of [...c.goals].sort((a,b)=>a.priority-b.priority)){assert.ok(validate(c,placed,g.id,g.priority,g.weight).ok);placed.push(g.id);}}});
