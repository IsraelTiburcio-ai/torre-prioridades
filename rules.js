export function shuffle(items, random = Math.random) {
 const a = [...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a;
}
export function createSession(bank, random = Math.random) {
 const pick = type => shuffle(bank.filter(c=>c.type===type),random);
 return [...pick('hierarchy').slice(0,2),pick('equal')[0],pick('weights')[0],pick('integrator')[0]];
}
export const levels = c => [...new Set(c.goals.map(g=>g.priority))].sort((a,b)=>a-b);
export const currentLevel = (c, placed) => levels(c).find(p=>c.goals.some(g=>g.priority===p&&!placed.includes(g.id)));
export function validate(c, placed, goalId, priority, weight) {
 const goal=c.goals.find(g=>g.id===goalId);
 if(!goal || placed.includes(goalId)) return {ok:false,message:'Selecciona un bloque disponible.'};
 if(priority!==goal.priority) return {ok:false,message:goal.priority===0?'Sin prioridad: todas las metas comparten la plataforma común.':`Esta meta corresponde a P${goal.priority}. La prioridad es el piso, no un peso.`};
 if(priority!==currentLevel(c,placed)) return {ok:false,message:`Primero completa P${currentLevel(c,placed)}. Una mejora inferior no compensa empeorar una prioridad superior.`};
 if(weight!==goal.weight) return {ok:false,message:'Revisa el peso: expresa importancia relativa dentro del mismo nivel.'};
 return {ok:true,message:goal.weight!==1?'Dos metas pueden compartir prioridad y tener ponderaciones diferentes.':priority===0?'Correcto: sin prioridad no se inventa una jerarquía.':`Correcto: primero debe atenderse la prioridad P${priority}.`};
}
