// PLAYWRIGHT_PATH=/ruta/a/playwright/index.mjs node tests/browser-qa.mjs
import assert from 'node:assert/strict';
import {bank} from '../bank.js';
import {levels} from '../rules.js';
const {chromium}=await import(process.env.PLAYWRIGHT_PATH||'playwright');
const browser=await chromium.launch({headless:true});
const sizes=[[375,812],[390,844],[820,1180],[1180,820],[1440,900]];
const errors=[];const results=[];
for(const [width,height] of sizes){
 const context=await browser.newContext({viewport:{width,height},hasTouch:width<1200,reducedMotion:'reduce'});
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.BASE_URL||'http://localhost:4173');
 await page.locator('#start').focus();await page.keyboard.press('Enter');
 const cases=[];
 for(let r=0;r<5;r++){
  const title=await page.locator('#case-title').textContent();const c=bank.find(c=>c.title===title);assert.ok(c);cases.push(c.id);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`horizontal overflow ${width}`);
  const controls=await page.locator('button:visible').evaluateAll(bs=>bs.map(b=>({h:b.getBoundingClientRect().height,text:b.textContent})));assert.ok(controls.every(b=>b.h>=44),JSON.stringify(controls));
  const tower=await page.locator('.construction').boundingBox();assert.ok(tower.x>=0&&tower.x+tower.width<=width);assert.ok(tower.y+tower.height<=height,`tower hidden ${width}: ${JSON.stringify(tower)}`);
  if(r===0){await page.locator(`[data-goal="${c.goals[0].id}"]`).click();const wrong=levels(c).find(p=>p!==c.goals[0].priority);if(wrong!==undefined){await page.locator(`[data-priority="${wrong}"]:not(:disabled)`).first().click();await page.locator('.feedback.error').waitFor();}}
  for(const p of levels(c))for(const g of c.goals.filter(g=>g.priority===p)){
   const block=page.locator(`[data-goal="${g.id}"]`);if(width<1200)await block.tap();else{await block.focus();await page.keyboard.press('Enter');}
   if(c.goals.some(g=>g.weight!==1))await page.locator(`[data-weight="${g.weight}"]`).click();
   const slot=page.locator(`[data-priority="${p}"]:not(:disabled)`).first();if(width<1200)await slot.tap();else{await slot.focus();await page.keyboard.press('Space');}
  }
  assert.ok(await page.locator('#next').isEnabled());
  await page.screenshot({path:`/var/folders/9m/nytmmft960lbhhc83zbd5v1w0000gn/T/opencode/torre-${width}-${r}.png`,fullPage:true});
  await page.locator('#next').click();
 }
 await page.locator('h1').filter({hasText:'¡TORRE COMPLETADA!'}).waitFor();assert.match(await page.locator('.stats').textContent(),/5 \/ 5/);
 await page.locator('#replay').click();assert.match(await page.locator('.topline').textContent(),/1 \/ 5/);
 await page.locator('#sound').click();assert.equal(await page.locator('#sound').getAttribute('aria-pressed'),'true');
 results.push({width,height,cases,result:'PASS'});await context.close();
}
assert.deepEqual(errors,[]);console.log(JSON.stringify({results,errors},null,2));await browser.close();
