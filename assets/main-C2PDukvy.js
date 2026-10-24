import{i as e,n as t,r as n}from"./mapConfig-CUyYIU_T.js";var r=[`hp`,`atk`,`def`,`agi`,`luc`],i={hp:100,atk:10,def:10,agi:5,luc:1},a={hp:5,atk:3,def:3,agi:2,luc:1},o={hp:1,atk:2,def:1,agi:0,luc:0},s={hp:.06,atk:.07,def:.07,agi:.075,luc:.08},c=2.75,l={hp:1,atk:2,def:0,agi:1,luc:0},u={hp:[26,20],atk:[6,2.3],def:[5,2.5]},d=2.5,f=.35,p=[`atk`,`agi`,`luc`,`def`,`hp`],m=[0,.125,.04],h=[1,2,3],g=[1,2.25,3.5],_=[1,1.4,1.6],v={weak:{atk:.2},frail:{def:.15,hp:.5},blind:{atk:.4,agi:0,luc:0},drain:{hp:.2}},y=[0,.35,.6],b=1.5,x=1.8,S=.15,C={balanced:[],plain:[],swift:[{from:`agi`,to:`atk`,k:.3}],fortune:[{from:`luc`,to:`atk`,k:2.1}],blunt:[{from:`def`,to:`atk`,k:.12}],heavy:[{from:`hp`,to:`atk`,k:.024}],light:[{from:`agi`,to:`def`,k:.15}],mystic:[{from:`luc`,to:`def`,k:1.2}],plate:[{from:`def`,to:`hp`,k:.3}]},w=.3,T=.75,E=.1,D=.25,O={agi:.52,base:.06,agiBig:[15e5,.14],lucBig:[1e6,.02],wariai:.24,cap:.5,ring:.09,ringCap:.7,lowHp:.13,lowHpCap:.8},k={agi:.07,luc:.22,base:.06,agiBig:[15e5,.1],lucBig:[1e6,.02],wariaiAgi:.11,wariaiLuc:.14,cap:.35,ring:.08,ringCap:.6,lowHp:.05,lowHpCap:.7},A={hp:5,atk:3,def:3,agi:2,luc:1},j={hp:15,atk:2,exp:475e3,gold:50},ee=[[500,4,1e3,6],[1e3,4,2e3,6],[2e3,4,4e3,6],[1/0,3,4e3,5]],M=[0,20,32,50,80,125,200],N={beit:.77,ramps:[[1e4,.55],[5e4,.55],[2e5,1.1]],table:[[1,1],[2,2],[2.5,2.25],[3,2.5],[4,2.75],[5,3],[8,3.25],[11,3.5],[23,3.75],[35,4]]},te=1200,ne=.1,re=[0,3e3,3e4,12e4],ie=.2,ae=.4,oe=[0,.45,.62,.74,.745,.75,.755],se=[0,.02,.03,.04],ce=d,le=.75,ue=1e3,de=.1,fe=.1,pe=e=>19*Math.max(1,e-1)+7,me=c,he=.25,ge=[1e4,1e5,7e5,18e5,36e5,6e6,1e7,14e6,18e6,22e6,28e6,34e6,4e7,5e7,65e6,8e7,1e8,12e7,14e7,17e7],_e=[`heroe`,`monje`,`herrera`,`lancero`],ve={beit:.6,base:.3,caps:[[2e3,.15,.16],[25e3,.15,.16],[3e5,.3,.31],[5e5,.35,.36],[1e6,.15,.16]],max:3.5},ye=.15,be=.05,xe=[[1,1],[3,5],[38,71],[71,280],[430,1350],[1400,6600],[9900,4e4]],Se=.025,Ce=1.5,P=.5,we=.2,Te=1.5,Ee=Object.freeze({roundSeconds:te,pbPerRun:45,bossPbScale:1,priceScale:ne,gatherBoss:10,gatherDragon:15,dragonPerPlayer:le,lootBaseRate:be,planRate:Se,bossAffinity:1,exaltRate:1}),F=Object.freeze({roundSeconds:[30,3600],pbPerRun:[1,500],bossPbScale:[0,5],priceScale:[.001,10],gatherBoss:[0,120],gatherDragon:[0,300],dragonPerPlayer:[0,5],lootBaseRate:[0,1],planRate:[0,1],bossAffinity:[0,3],exaltRate:[0,8]}),De={...Ee};function I(e={}){for(let t of Object.keys(Ee)){let n=e[t],[r,i]=F[t];De[t]=typeof n==`number`&&Number.isFinite(n)?Math.min(i,Math.max(r,n)):Ee[t]}return{...De}}function L(e,t,n){let r=e.zones.map(()=>1/0),i=[...t];for(let e of t)r[e]=0;for(let t=0;t<i.length;t++){let a=i[t];for(let t of e.adj[a])r[t.to]===1/0&&n(t.to)&&(r[t.to]=r[a]+1,i.push(t.to))}return r}function Oe(e){let t=e.zones,n=e.levels,r=t.map(()=>0),i=Math.max(...t.map(e=>e.ring));for(let a=1;a<=i;a++){let o=t.filter(e=>e.ring===a&&!e.isHub).map(e=>e.id);if(!o.length)continue;let s=e=>t[e].ring===a&&!t[e].isHub,c=o.filter(n=>e.adj[n].some(e=>t[e.to].ring<a||t[e.to].isHub)),l=a<i?o.filter(n=>e.adj[n].some(e=>t[e.to].ring>a)):o.filter(t=>t===e.lair),u=L(e,c,s),d=L(e,l.length?l:o,s),f=L(e,c,()=>!0),p=L(e,l.length?l:o,()=>!0),[m,h]=n[a];for(let e of o){let t=Number.isFinite(u[e])?u[e]:f[e],n=Number.isFinite(d[e])?d[e]:p[e],i=t+n===0?.5:Number.isFinite(t)?Number.isFinite(n)?t/(t+n):1:0;r[e]=Math.max(1,m)*(Math.max(1,h)/Math.max(1,m))**+i}}return r}function ke(e,t){let n=e.zones,r=Math.log(x),i=t.map(e=>Math.log(e+3)),a=i.slice(),o=i.slice();for(let t=!0,i=0;t&&i<n.length;i++){t=!1;for(let i of e.passages)if(!(n[i.a].isHub||n[i.b].isHub))for(let[e,n]of[[i.a,i.b],[i.b,i.a]])a[e]<a[n]-r-1e-12&&(a[e]=a[n]-r,t=!0),o[e]>o[n]+r+1e-12&&(o[e]=o[n]+r,t=!0)}let s=i.map((e,t)=>(a[t]+o[t])/2);for(let t of e.adj[e.hub])s[t.to]=Math.min(s[t.to],i[t.to]);for(let t=!0,i=0;t&&i<n.length;i++){t=!1;for(let i of e.passages)if(!(n[i.a].isHub||n[i.b].isHub))for(let[e,n]of[[i.a,i.b],[i.b,i.a]])s[e]>s[n]+r+1e-12&&(s[e]=s[n]+r,t=!0)}return n.map((e,t)=>e.isHub?0:Math.max(1,Math.exp(s[t])-3))}function Ae(e){let t=ke(e,Oe(e));for(let n of e.zones)n.isHub||(n.level=Math.max(1,Math.round(t[n.id])),n.lvLo=Math.max(1,Math.round(n.level*(1-S))),n.lvHi=Math.max(n.lvLo,Math.round(n.level*(1+S))));for(let t of e.bosses)t.level=e.zones[t.zone].lvHi;return e}function je(e,t){let n=e.bosses[t],r=n.level;for(let t of e.adj[n.zone]){let i=e.zones[t.to];i.ring===n.ring&&!i.isHub&&!i.isLair&&(r=Math.max(r,i.lvHi))}return r}function Me(e,t,n){let r=[];e[n]!==`visited`&&(e[n]=`visited`,r.push(n));for(let i of t.adj[n])e[i.to]||(e[i.to]=`seen`,r.push(i.to));return r}function Ne(e,t){let n=new Set;for(let r of Object.keys(e)){let i=+r;if(e[i]===`visited`)for(let e of t.adj[i])n.add(e.passage)}return[...n].sort((e,t)=>e-t)}var R=e=>({...e,price:0,dropBoss:!0}),Pe=[R({id:`j_01`,name:`Kukri de la suerte`,slot:`weapon`,family:`swift`,icon:`kukri+r1`,add:{atk:60},pct:{atk:.15},freeFight:.1}),R({id:`j_02`,name:`Abrigo con bolsillos`,slot:`armor`,family:`plain`,icon:`peto_abrigo+r1`,add:{def:40},pct:{def:.1},gold:.3}),R({id:`j_03`,name:`Peto del amigo fiel`,slot:`armor`,family:`plain`,icon:`peto_pesado+r1`,add:{def:120},pct:{def:.2},friends:.1}),R({id:`j_04`,name:`Cristal del explorador`,slot:`acc`,icon:`cristal_puntos+r1`,explorer:.04,move:.1}),R({id:`j_05`,name:`Estoque de la racha`,slot:`weapon`,family:`swift`,icon:`estoque+r2`,add:{atk:300},pct:{atk:.3},streak:.02}),R({id:`j_06`,name:`Gema del trébol`,slot:`acc`,icon:`gema_suerte_4+r3`,add:{luc:150},lootLuck:.5}),R({id:`j_07`,name:`Peto del seguro de vida`,slot:`armor`,family:`plain`,icon:`peto_hielo+r1`,add:{def:300},pct:{def:.3},softLoss:!0}),R({id:`j_08`,name:`Hacha matajefes`,slot:`weapon`,family:`heavy`,icon:`hacha_acero+r1`,add:{atk:700},pct:{atk:.45},bossBane:.25}),R({id:`j_09`,name:`Traje del explorador`,slot:`armor`,family:`light`,icon:`peto_ninja`,add:{def:450},pct:{def:.35},explorer:.05}),R({id:`j_10`,name:`Escudo del ahorrador`,slot:`acc`,icon:`prueba_heroe`,add:{hp:400},startGold:300}),R({id:`j_11`,name:`Tridente de la cena`,slot:`weapon`,family:`blunt`,icon:`tridente+r1`,add:{atk:1e3},pct:{atk:.5},bossPb:2}),R({id:`j_12`,name:`Ropera del baile`,slot:`weapon`,family:`swift`,icon:`ropera_caballero+r1`,add:{atk:1100},pct:{atk:.6},comboRing:!0}),R({id:`j_13`,name:`Peto de las siete vidas`,slot:`armor`,family:`plate`,icon:`peto_hueso+r1`,add:{def:800},pct:{def:.6},revival:3}),R({id:`j_14`,name:`Lanza que canta`,slot:`weapon`,family:`balanced`,icon:`lanza_cristal+r1`,add:{atk:1500},pct:{atk:.8},streak:.03}),R({id:`j_15`,name:`Gema de la amistad`,slot:`acc`,icon:`gema_vida_4+r3`,add:{hp:2e3},friends:.15}),R({id:`j_16`,name:`Peto del tasador`,slot:`armor`,family:`mystic`,icon:`peto_samurai_oro`,add:{def:900},pct:{def:.8},lootLuck:.8,gold:.2}),R({id:`j_17`,name:`Hacha leñadora de jefes`,slot:`weapon`,family:`heavy`,icon:`hacha_maldita+r1`,add:{atk:2500},pct:{atk:.8},bossBane:.35}),R({id:`j_18`,name:`Gema de las siete leguas`,slot:`acc`,icon:`gema_agilidad_4+r3`,add:{agi:800},move:.35,encounter:-.15}),R({id:`j_19`,name:`Daga trucada`,slot:`weapon`,family:`fortune`,icon:`daga_maldita+r1`,add:{atk:1800},pct:{atk:.9},freeFight:.2}),R({id:`j_20`,name:`Coraza del veterano`,slot:`armor`,family:`plate`,icon:`armadura_caballero+r1`,add:{def:1200},pct:{def:1},explorer:.05,bossPb:1}),R({id:`j_21`,name:`Peto del tesorero`,slot:`armor`,family:`mystic`,icon:`peto_samurai_sol`,add:{def:1500},pct:{def:1.1},startGold:2e3,gold:.3}),R({id:`j_22`,name:`Espada del mediodía`,slot:`weapon`,family:`fortune`,icon:`espada_luz_verde+r1`,add:{atk:4500},pct:{atk:1.3},critRings:1}),R({id:`j_23`,name:`Manto del anfitrión`,slot:`armor`,family:`light`,icon:`peto_mago`,add:{def:1e3},pct:{def:1.3},friends:.2}),R({id:`j_24`,name:`Gema del tiempo prestado`,slot:`acc`,icon:`gema_defensa_4+r3`,add:{def:3e3},pb:4}),R({id:`j_25`,name:`Lanza del herrero loco`,slot:`weapon`,family:`blunt`,icon:`lanza_roja+r1`,add:{atk:9e3},pct:{atk:1.4},streak:.03,critDmgRings:1}),R({id:`j_26`,name:`Gema de la carga`,slot:`acc`,icon:`gema_ataque_4+r3`,add:{atk:3e3},bossBane:.4,firstCrits:1}),R({id:`j_27`,name:`Armadura de espejos`,slot:`armor`,family:`plate`,icon:`armadura_luz+r1`,add:{def:1500},pct:{def:1.5},revival:5}),R({id:`j_28`,name:`Peto del cazatesoros`,slot:`armor`,family:`light`,icon:`peto_fuego`,add:{def:1800},pct:{def:1.4},lootLuck:1,exp:.2}),R({id:`j_29`,name:`Espada del caminante`,slot:`weapon`,family:`swift`,icon:`espada_viento+r2`,add:{atk:7e3},pct:{atk:1.6},explorer:.06,move:.2}),R({id:`j_30`,name:`Anillo del dado`,slot:`acc`,icon:`anillo_triple_critico`,add:{luc:3e3},freeFight:.25}),R({id:`j_31`,name:`Coraza del último anillo`,slot:`armor`,family:`plate`,icon:`armadura_negra`,add:{def:8e3},pct:{def:1.9},explorer:.06}),R({id:`j_32`,name:`Collar de la manada`,slot:`acc`,icon:`collar_revivir+r1`,add:{hp:15e3},friends:.25}),R({id:`j_33`,name:`Espada del crepúsculo`,slot:`weapon`,family:`heavy`,icon:`espada_maldita+r1`,add:{atk:15e3},pct:{atk:2},lifesteal:.01,streak:.03}),R({id:`j_34`,name:`Gema del glotón`,slot:`acc`,icon:`gema_heroe+r1`,exp:.5,gold:.5}),R({id:`j_35`,name:`Espada matadragones`,slot:`weapon`,family:`balanced`,icon:`espada_fuego+r2`,add:{atk:2e4},pct:{atk:2.2},bossBane:.5}),R({id:`j_36`,name:`Peto del regreso`,slot:`armor`,family:`plate`,icon:`peto_paladin`,add:{def:1e4},pct:{def:2},bossPb:4,softLoss:!0}),R({id:`j_37`,name:`Armadura de plumas negras`,slot:`armor`,family:`light`,icon:`armadura_alada+r1`,add:{def:12e3},pct:{def:2.1},move:.3,encounter:-.2}),R({id:`j_38`,name:`Gema del vigía`,slot:`acc`,icon:`gema_dios_guerra`,add:{atk:2e4},critRings:2,comboRing:!0})],Fe={j_01:`Lucky Kukri`,j_02:`Coat with Pockets`,j_03:`Loyal Friend Plate`,j_04:`Explorer's Crystal`,j_05:`Streak Estoc`,j_06:`Clover Gem`,j_07:`Life Insurance Plate`,j_08:`Bossbane Axe`,j_09:`Explorer's Garb`,j_10:`Saver's Shield`,j_11:`Dinner Trident`,j_12:`Dancing Rapier`,j_13:`Nine Lives Plate`,j_14:`Singing Lance`,j_15:`Friendship Gem`,j_16:`Appraiser's Plate`,j_17:`Boss Lumberjack Axe`,j_18:`Seven-League Gem`,j_19:`Loaded Dagger`,j_20:`Veteran's Cuirass`,j_21:`Treasurer's Plate`,j_22:`Noon Sword`,j_23:`Host's Mantle`,j_24:`Borrowed Time Gem`,j_25:`Mad Smith's Lance`,j_26:`Charge Gem`,j_27:`Mirror Armor`,j_28:`Treasure Hunter's Plate`,j_29:`Wanderer's Sword`,j_30:`Dice Ring`,j_31:`Last Ring Cuirass`,j_32:`Pack Necklace`,j_33:`Twilight Sword`,j_34:`Glutton's Gem`,j_35:`Dragonslayer Sword`,j_36:`Homecoming Plate`,j_37:`Black Feather Armor`,j_38:`Lookout's Gem`},Ie=[[],[`j_01`,`j_02`],[`j_03`,`j_04`,`j_05`,`j_06`],[`j_07`,`j_08`,`j_09`,`j_10`,`j_11`,`j_12`],[`j_13`,`j_14`,`j_15`,`j_16`,`j_17`,`j_18`,`j_19`,`j_20`],[`j_21`,`j_22`,`j_23`,`j_24`,`j_25`,`j_26`,`j_27`,`j_28`,`j_29`,`j_30`],[`j_31`,`j_32`,`j_33`,`j_34`,`j_35`,`j_36`,`j_37`,`j_38`,`2_64`,`0_80`,`1_34`,`2_70`]],Le=[{id:`0_1`,name:`Cuchillo bowie`,slot:`weapon`,family:`swift`,price:300,icon:`cuchillo_bowie`,add:{atk:30},pct:{atk:.1},drop:1},{id:`0_3`,name:`Espada de hierro`,slot:`weapon`,family:`balanced`,price:6e3,icon:`espada`,add:{atk:140},pct:{atk:.25},drop:109},{id:`0_4`,name:`Espada de bronce`,slot:`weapon`,family:`balanced`,price:17e3,icon:`espada_bronce`,add:{atk:400},pct:{atk:.3}},{id:`0_5`,name:`Hacha de hierro`,slot:`weapon`,family:`heavy`,price:44e3,icon:`hacha_hierro`,add:{atk:1400},pct:{atk:.35},drop:11},{id:`0_6`,name:`Espada de acero`,slot:`weapon`,family:`balanced`,price:83e3,icon:`espada_acero`,add:{atk:800},pct:{atk:.6},drop:109},{id:`0_8`,name:`Espadón`,slot:`weapon`,family:`heavy`,price:11e4,icon:`espadon`,add:{atk:1200},pct:{atk:.8}},{id:`0_9`,name:`Francisca`,slot:`weapon`,family:`heavy`,price:144e3,icon:`francisca`,add:{atk:2300},pct:{atk:.75}},{id:`0_10`,name:`Cimitarra`,slot:`weapon`,family:`fortune`,price:228e3,icon:`cimitarra`,add:{atk:1100},pct:{atk:1.25},drop:141},{id:`0_12`,name:`Guja`,slot:`weapon`,family:`blunt`,price:244e3,icon:`guja`,add:{atk:2700},pct:{atk:.8}},{id:`0_18`,name:`Espada de plata`,slot:`weapon`,family:`balanced`,price:47e4,icon:`espada_plata`,add:{atk:1700},pct:{atk:1.6},drop:593},{id:`0_20`,name:`Katana`,slot:`weapon`,family:`fortune`,price:58e4,icon:`katana`,add:{atk:5e3},pct:{atk:1.25},drop:160},{id:`0_47`,name:`Maza`,slot:`weapon`,family:`blunt`,price:8e5,icon:`maza`,add:{atk:8e3},pct:{atk:1.5},drop:1882},{id:`0_25`,name:`Espada de caballero`,slot:`weapon`,family:`balanced`,price:82e4,icon:`espada_caballero`,add:{atk:1600},pct:{atk:1.9}},{id:`0_45`,name:`Nodachi`,slot:`weapon`,family:`fortune`,price:14e5,icon:`nodachi`,add:{atk:12e3},pct:{atk:1.25},drop:1882},{id:`0_58`,name:`Cimitarra+1`,slot:`weapon`,family:`fortune`,price:3e6,icon:`cimitarra+r1`,add:{atk:12e3},pct:{atk:2.6}},{id:`0_76`,name:`Katana+1`,slot:`weapon`,family:`fortune`,price:7e6,icon:`katana+r1`,add:{atk:12e4},pct:{atk:2.5}},{id:`0_0`,name:`Daga`,slot:`weapon`,family:`swift`,price:0,icon:`daga`,add:{atk:5},pct:{atk:0},start:!0},{id:`0_2`,name:`Kukri`,slot:`weapon`,family:`swift`,price:0,icon:`kukri`,add:{atk:30},pct:{atk:.35},drop:25},{id:`0_11`,name:`Hacha de batalla`,slot:`weapon`,family:`heavy`,price:0,icon:`hacha_batalla`,add:{atk:5e3},pct:{atk:.45},drop:100},{id:`0_7`,name:`Hacha de acero`,slot:`weapon`,family:`heavy`,price:0,icon:`hacha_acero`,add:{atk:3e3},pct:{atk:.4},drop:140},{id:`0_13`,name:`Tridente`,slot:`weapon`,family:`blunt`,price:0,icon:`tridente`,add:{atk:1800},pct:{atk:1.3},drop:179},{id:`0_22`,name:`Guadaña oscura`,slot:`weapon`,family:`heavy`,price:0,icon:`guadana_oscura`,add:{atk:9e3},pct:{atk:.4},drop:381},{id:`0_34`,name:`Daga maldita`,slot:`weapon`,family:`swift`,price:0,icon:`daga_maldita`,add:{atk:60},pct:{atk:2.5},drop:484},{id:`0_35`,name:`Hacha maldita`,slot:`weapon`,family:`heavy`,price:0,icon:`hacha_maldita`,add:{atk:2e4},pct:{atk:1},drop:484},{id:`0_36`,name:`Lanza maldita`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_maldita`,add:{atk:5e3},pct:{atk:1.9},drop:484},{id:`0_21`,name:`Espada oscura`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_oscura`,add:{atk:2e3},pct:{atk:1.6},drop:500},{id:`0_33`,name:`Espada maldita`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_maldita`,add:{atk:1500},pct:{atk:2.05},drop:524},{id:`0_28`,name:`Espada dura`,slot:`weapon`,family:`blunt`,price:0,icon:`espada_dura`,add:{atk:3e3},pct:{atk:2},drop:563},{id:`0_29`,name:`Hacha dura`,slot:`weapon`,family:`blunt`,price:0,icon:`hacha_dura`,add:{atk:1e4},pct:{atk:1.3},drop:563},{id:`0_30`,name:`Lanza dura`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_dura`,add:{atk:5e3},pct:{atk:1.8},drop:563},{id:`0_19`,name:`Lanza de plata`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_plata`,add:{atk:1600},pct:{atk:1.8},drop:600},{id:`0_27`,name:`Lanza de caballero`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_caballero`,add:{atk:3500},pct:{atk:1.8},drop:720},{id:`0_15`,name:`Espada de fuego`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_fuego`,add:{atk:2e3},pct:{atk:1.2},drop:799},{id:`0_26`,name:`Ropera de caballero`,slot:`weapon`,family:`swift`,price:0,icon:`ropera_caballero`,add:{atk:250},pct:{atk:2.4},drop:886},{id:`0_17`,name:`Espada del trueno`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_trueno`,add:{atk:150},pct:{atk:1.9},drop:898},{id:`0_14`,name:`Espada del viento`,slot:`weapon`,family:`swift`,price:0,icon:`espada_viento`,add:{atk:1e3},pct:{atk:1.5},drop:928},{id:`0_24`,name:`Gladio raro`,slot:`weapon`,family:`swift`,price:0,icon:`gladio_raro`,add:{atk:50},pct:{atk:2.3},drop:946},{id:`0_37`,name:`Espada sagrada`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_sagrada`,add:{atk:1e4},pct:{atk:2.3},drop:1015},{id:`0_38`,name:`Hacha sagrada`,slot:`weapon`,family:`heavy`,price:0,icon:`hacha_sagrada`,add:{atk:3e4},pct:{atk:1},drop:1015},{id:`0_39`,name:`Lanza sagrada`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_sagrada`,add:{atk:3e3},pct:{atk:2.9},drop:1015},{id:`0_23`,name:`Espada rara`,slot:`weapon`,family:`fortune`,price:0,icon:`espada_rara`,add:{atk:500},pct:{atk:1.9},drop:1038},{id:`0_32`,name:`Hacha de oro`,slot:`weapon`,family:`fortune`,price:0,icon:`hacha_oro`,add:{atk:25e3},pct:{atk:1.3},drop:1072},{id:`0_16`,name:`Espada de hielo`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_hielo`,add:{atk:600},pct:{atk:1.7},drop:1126},{id:`0_41`,name:`Espada de fuego+1`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_fuego+r1`,add:{atk:2800},pct:{atk:1.4},drop:1222,dropBoss:!0},{id:`0_42`,name:`Espada de hielo+1`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_hielo+r1`,add:{atk:800},pct:{atk:1.9},drop:1232,dropBoss:!0},{id:`0_43`,name:`Espada del trueno+1`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_trueno+r1`,add:{atk:200},pct:{atk:2.1},drop:1253,dropBoss:!0},{id:`0_40`,name:`Espada del viento+1`,slot:`weapon`,family:`swift`,price:0,icon:`espada_viento+r1`,add:{atk:1400},pct:{atk:1.7},drop:1294,dropBoss:!0},{id:`0_31`,name:`Espada de oro`,slot:`weapon`,family:`fortune`,price:0,icon:`espada_oro`,add:{atk:5e3},pct:{atk:2.4},drop:1334},{id:`0_46`,name:`Estoque`,slot:`weapon`,family:`swift`,price:0,icon:`estoque`,add:{atk:0},pct:{atk:2.5},drop:1664},{id:`0_48`,name:`Espada de luz verde`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_luz_verde`,add:{atk:3e3},pct:{atk:2.7},drop:1796,dropBoss:!0},{id:`0_44`,name:`Tomahawk`,slot:`weapon`,family:`heavy`,price:0,icon:`tomahawk`,add:{atk:35e3},pct:{atk:.1},drop:1822},{id:`0_49`,name:`Espada de luz roja`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_luz_roja`,add:{atk:14e3},pct:{atk:2.2},drop:2127,dropBoss:!0},{id:`0_50`,name:`Estoque+1`,slot:`weapon`,family:`swift`,price:0,icon:`estoque+r1`,add:{atk:0},pct:{atk:2.8},drop:3328},{id:`0_51`,name:`Martillo de cristal`,slot:`weapon`,family:`blunt`,price:0,icon:`martillo_cristal`,add:{atk:2e4},pct:{atk:1.9},drop:3651},{id:`0_52`,name:`Lanza roja de los Cuatro Dioses`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_roja`,add:{atk:25e3},pct:{atk:2.8},drop:4219},{id:`0_53`,name:`Espada azul de los Cuatro Dioses`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_azul`,add:{atk:100},pct:{atk:3.2},drop:5984},{id:`0_54`,name:`Lanza de cristal`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_cristal`,add:{atk:1e4},pct:{atk:2.6},drop:7301},{id:`0_79`,name:`Lanza alada`,slot:`weapon`,family:`blunt`,price:0,icon:`lanza_alada`,add:{atk:2e4},pct:{atk:2.8},drop:16754},{id:`0_80`,name:`Espada alada`,slot:`weapon`,family:`balanced`,price:0,icon:`espada_alada`,add:{atk:3e4},pct:{atk:3.1},drop:32294,dropBoss:!0},{id:`1_1`,name:`Armadura de hierro`,slot:`armor`,family:`plain`,price:1e3,icon:`peto`,add:{def:40},pct:{def:.1},drop:30},{id:`1_2`,name:`Armadura de bronce`,slot:`armor`,family:`plain`,price:8e3,icon:`peto_cuerno`,add:{def:200},pct:{def:.25},drop:54},{id:`1_3`,name:`Armadura de acero`,slot:`armor`,family:`plain`,price:22e3,icon:`peto_barbaro`,add:{def:550},pct:{def:.4},drop:109},{id:`1_4`,name:`Armadura de escamas`,slot:`armor`,family:`plate`,price:64e3,icon:`armadura_escamas`,add:{def:880},pct:{def:.45},drop:91},{id:`1_5`,name:`Armadura de púas`,slot:`armor`,family:`plate`,price:13e4,icon:`peto_angular`,add:{def:920},pct:{def:.6}},{id:`1_7`,name:`Media armadura`,slot:`armor`,family:`light`,price:23e4,icon:`media_armadura`,add:{def:700},pct:{def:1.1},drop:117},{id:`1_8`,name:`Armadura de plata`,slot:`armor`,family:`plain`,price:48e4,icon:`peto_noble`,add:{def:700},pct:{def:1.5},drop:608},{id:`1_9`,name:`Armadura samurái`,slot:`armor`,family:`plate`,price:6e5,icon:`peto_samurai`,add:{def:1400},pct:{def:1.4},drop:608},{id:`1_12`,name:`Armadura de caballero`,slot:`armor`,family:`plate`,price:8e5,icon:`armadura_caballero`,add:{def:800},pct:{def:1.8}},{id:`1_22`,name:`Armadura de púas+1`,slot:`armor`,family:`plate`,price:4e6,icon:`peto_angular+r1`,add:{def:12e3},pct:{def:2.1}},{id:`1_33`,name:`Armadura samurái+1`,slot:`armor`,family:`plate`,price:14e6,icon:`peto_samurai+r1`,add:{def:7e4},pct:{def:2.2}},{id:`1_0`,name:`Armadura de cuero`,slot:`armor`,family:`light`,price:0,icon:`armadura_cuero`,add:{def:5},pct:{def:0},start:!0},{id:`1_6`,name:`Armadura mágica`,slot:`armor`,family:`mystic`,price:0,icon:`peto_abrigo`,add:{def:5},pct:{def:1.8},drop:282},{id:`1_10`,name:`Armadura oscura`,slot:`armor`,family:`plain`,price:0,icon:`peto_oscuro`,add:{def:800},pct:{def:1.35},drop:353},{id:`1_15`,name:`Armadura maldita`,slot:`armor`,family:`plain`,price:0,icon:`armadura_maldita`,add:{def:2e3},pct:{def:2},drop:484},{id:`1_13`,name:`Armadura dura`,slot:`armor`,family:`plate`,price:0,icon:`armadura_dura`,add:{def:5e3},pct:{def:1.3},drop:563},{id:`1_11`,name:`Armadura rara`,slot:`armor`,family:`mystic`,price:0,icon:`peto_cristal`,add:{def:50},pct:{def:2.2},drop:1044},{id:`1_14`,name:`Armadura de oro`,slot:`armor`,family:`mystic`,price:0,icon:`peto_real`,add:{def:2500},pct:{def:2.2},drop:1072},{id:`1_16`,name:`Armadura sagrada`,slot:`armor`,family:`plain`,price:0,icon:`peto_pesado`,add:{def:5e3},pct:{def:2.4},drop:1126},{id:`1_17`,name:`Armadura completa`,slot:`armor`,family:`plate`,price:0,icon:`peto_puas`,add:{def:5e3},pct:{def:1.6},drop:1753},{id:`1_18`,name:`Armadura de luz`,slot:`armor`,family:`mystic`,price:0,icon:`armadura_luz`,add:{def:0},pct:{def:2.4},drop:1796,dropBoss:!0},{id:`1_19`,name:`Capa de cristal`,slot:`armor`,family:`light`,price:0,icon:`peto_hielo`,add:{def:8e3},pct:{def:1.9},drop:3199},{id:`1_20`,name:`Armadura blanca de los Cuatro Dioses`,slot:`armor`,family:`plain`,price:0,icon:`peto_hueso`,add:{def:12e3},pct:{def:2.5},drop:5030},{id:`1_34`,name:`Armadura alada`,slot:`armor`,family:`light`,price:0,icon:`armadura_alada`,add:{def:3e4},pct:{def:2.6},drop:44160,dropBoss:!0},{id:`2_32`,name:`Anillo de más encuentros`,slot:`acc`,price:1e3,icon:`anillo_mas_encuentros`,encounter:.2},{id:`2_0`,name:`Gema de vida`,slot:`acc`,price:2e3,icon:`gema_vida_1`,add:{hp:400},drop:1},{id:`2_12`,name:`Gema de agilidad`,slot:`acc`,price:2e3,icon:`gema_agilidad_1`,add:{agi:150},drop:1},{id:`2_16`,name:`Gema de suerte`,slot:`acc`,price:2e3,icon:`gema_suerte_1`,add:{luc:100},drop:1},{id:`2_4`,name:`Gema de ataque`,slot:`acc`,price:3e3,icon:`gema_ataque_1`,add:{atk:200},drop:1},{id:`2_8`,name:`Gema de defensa`,slot:`acc`,price:3e3,icon:`gema_defensa_1`,add:{def:200},drop:1},{id:`2_20`,name:`Gema de experiencia`,slot:`acc`,price:5e3,icon:`gema_exp_1`,exp:.1},{id:`2_44`,name:`Gema de juego`,slot:`acc`,price:7e3,icon:`gema_juego`,play:{atk:3,def:3,agi:3}},{id:`2_34`,name:`Gema de movimiento`,slot:`acc`,price:1e4,icon:`gema_movimiento`,move:.06},{id:`2_36`,name:`Anillo de puntos de batalla`,slot:`acc`,price:1e4,icon:`anillo_pb`,pb:1},{id:`2_1`,name:`Gema de vida+1`,slot:`acc`,price:4e4,icon:`gema_vida_2`,add:{hp:2e3},drop:126},{id:`2_13`,name:`Gema de agilidad+1`,slot:`acc`,price:4e4,icon:`gema_agilidad_2`,add:{agi:800}},{id:`2_17`,name:`Gema de suerte+1`,slot:`acc`,price:4e4,icon:`gema_suerte_2`,add:{luc:500}},{id:`2_5`,name:`Gema de ataque+1`,slot:`acc`,price:5e4,icon:`gema_ataque_2`,add:{atk:1e3},drop:126},{id:`2_9`,name:`Gema de defensa+1`,slot:`acc`,price:5e4,icon:`gema_defensa_2`,add:{def:1e3},drop:126},{id:`2_31`,name:`Anillo de menos encuentros`,slot:`acc`,price:5e4,icon:`anillo_menos_encuentros`,encounter:-.15},{id:`2_33`,name:`Anillo de encuentro inmediato`,slot:`acc`,price:8e4,icon:`anillo_encuentro_inmediato`,instant:!0},{id:`2_21`,name:`Gema de experiencia+1`,slot:`acc`,price:12e4,icon:`gema_exp_2`,exp:.2,drop:706,dropBoss:!0},{id:`2_14`,name:`Gema de agilidad+2`,slot:`acc`,price:14e4,icon:`gema_agilidad_3`,add:{agi:2e3}},{id:`2_18`,name:`Gema de suerte+2`,slot:`acc`,price:14e4,icon:`gema_suerte_3`,add:{luc:1200}},{id:`2_2`,name:`Gema de vida+2`,slot:`acc`,price:15e4,icon:`gema_vida_3`,add:{hp:5e3},drop:190,dropBoss:!0},{id:`2_6`,name:`Gema de ataque+2`,slot:`acc`,price:15e4,icon:`gema_ataque_3`,add:{atk:3e3},drop:190,dropBoss:!0},{id:`2_10`,name:`Gema de defensa+2`,slot:`acc`,price:15e4,icon:`gema_defensa_3`,add:{def:3e3}},{id:`2_26`,name:`Anillo de daño crítico`,slot:`acc`,price:17e4,icon:`anillo_dano_critico`,critDmgRings:1,drop:805},{id:`2_35`,name:`Gema de movimiento+1`,slot:`acc`,price:2e5,icon:`gema_movimiento_2`,move:.1},{id:`2_27`,name:`Anillo del primer crítico`,slot:`acc`,price:21e4,icon:`anillo_primer_critico`,firstCrits:1,drop:805},{id:`2_37`,name:`Anillo de puntos de batalla+1`,slot:`acc`,price:4e5,icon:`anillo_pb_2`,pb:3},{id:`2_15`,name:`Gema de agilidad+3`,slot:`acc`,price:5e5,icon:`gema_agilidad_4`,add:{agi:7e3}},{id:`2_19`,name:`Gema de suerte+3`,slot:`acc`,price:5e5,icon:`gema_suerte_4`,add:{luc:4e3}},{id:`2_22`,name:`Gema de experiencia+2`,slot:`acc`,price:5e5,icon:`gema_exp_3`,exp:.3,drop:706,dropBoss:!0},{id:`2_3`,name:`Gema de vida+3`,slot:`acc`,price:58e4,icon:`gema_vida_4`,add:{hp:15e3},drop:1432},{id:`2_7`,name:`Gema de ataque+3`,slot:`acc`,price:64e4,icon:`gema_ataque_4`,add:{atk:1e4}},{id:`2_11`,name:`Gema de defensa+3`,slot:`acc`,price:64e4,icon:`gema_defensa_4`,add:{def:1e4}},{id:`2_54`,name:`Collar de recuperación pequeño`,slot:`acc`,price:17e5,icon:`collar_pequeno`,lifesteal:.019799999999999998},{id:`2_56`,name:`Anillo de doble crítico`,slot:`acc`,price:2e6,icon:`anillo_doble_critico`,firstCrits:2},{id:`2_25`,name:`Anillo de probabilidad crítica`,slot:`acc`,price:0,icon:`anillo_critico`,critRings:1,drop:250},{id:`2_28`,name:`Anillo de combo`,slot:`acc`,price:0,icon:`anillo_combo`,comboRing:!0,drop:277},{id:`2_29`,name:`Collar de recuperación`,slot:`acc`,price:0,icon:`collar_recuperacion`,lifesteal:.039,drop:303},{id:`2_30`,name:`Collar de resurrección`,slot:`acc`,price:0,icon:`collar_revivir`,revival:1,drop:250},{id:`2_39`,name:`Gema de vida+4`,slot:`acc`,price:0,icon:`gema_vida_4+r1`,add:{hp:3e4},drop:484},{id:`2_40`,name:`Gema de ataque+4`,slot:`acc`,price:0,icon:`gema_ataque_4+r1`,add:{atk:2e4},drop:484},{id:`2_41`,name:`Gema de defensa+4`,slot:`acc`,price:0,icon:`gema_defensa_4+r1`,add:{def:2e4},drop:484},{id:`2_42`,name:`Gema de agilidad+4`,slot:`acc`,price:0,icon:`gema_agilidad_4+r1`,add:{agi:14e3},drop:484},{id:`2_43`,name:`Gema de suerte+4`,slot:`acc`,price:0,icon:`gema_suerte_4+r1`,add:{luc:8e3},drop:484},{id:`2_23`,name:`Gema de experiencia+3`,slot:`acc`,price:0,icon:`gema_exp_4`,exp:.5,drop:706,dropBoss:!0},{id:`2_24`,name:`Cristal de puntos`,slot:`acc`,price:0,icon:`cristal_puntos`,spPerLevel:5,drop:1334},{id:`2_52`,name:`Gema de experiencia+4`,slot:`acc`,price:0,icon:`gema_exp_4+r1`,exp:.6,drop:1882,dropBoss:!0},{id:`2_38`,name:`Anillo de puntos de batalla+2`,slot:`acc`,price:0,icon:`anillo_pb_3`,pb:5,drop:1945,dropBoss:!0},{id:`2_53`,name:`Anillo de puntos de batalla+3`,slot:`acc`,price:0,icon:`anillo_pb_4`,pb:7,drop:3067,dropBoss:!0},{id:`2_45`,name:`Gema de juego+1`,slot:`acc`,price:0,icon:`gema_juego+r1`,play:{atk:17,def:17,agi:12},drop:1796,dropBoss:!0},{id:`2_51`,name:`Gema de juego+2`,slot:`acc`,price:0,icon:`gema_juego+r2`,play:{atk:40,def:40,agi:30},drop:3656,dropBoss:!0},{id:`2_46`,name:`Gema de vida+5`,slot:`acc`,price:0,icon:`gema_vida_4+r2`,add:{hp:2e5},drop:3328,dropBoss:!0},{id:`2_47`,name:`Gema de ataque+5`,slot:`acc`,price:0,icon:`gema_ataque_4+r2`,add:{atk:13e4},drop:3328,dropBoss:!0},{id:`2_50`,name:`Gema de suerte+5`,slot:`acc`,price:0,icon:`gema_suerte_4+r2`,add:{luc:5e4},drop:3328,dropBoss:!0},{id:`2_48`,name:`Gema de defensa+5`,slot:`acc`,price:0,icon:`gema_defensa_4+r2`,add:{def:13e4},drop:3439,dropBoss:!0},{id:`2_49`,name:`Gema de agilidad+5`,slot:`acc`,price:0,icon:`gema_agilidad_4+r2`,add:{agi:8e4},drop:3656,dropBoss:!0},{id:`2_64`,name:`Gema del héroe`,slot:`acc`,price:0,icon:`gema_heroe`,add:{hp:3e4,atk:3e4,def:3e4,agi:3e4,luc:3e4},drop:3656,dropBoss:!0},{id:`2_70`,name:`Gema de los Cuatro Dioses`,slot:`acc`,price:0,icon:`gema_cuatro_dioses`,add:{hp:9e4,atk:9e4,def:9e4,agi:9e4},drop:10751,dropBoss:!0}],Re={"0_1":[`fortune`,`blunt`,`heavy`],"0_4":[`swift`,`fortune`,`blunt`,`heavy`],"0_6":[`swift`,`fortune`,`blunt`,`heavy`],"1_1":[`light`,`mystic`,`plate`],"1_3":[`light`,`mystic`,`plate`],"1_4":[`light`,`mystic`]},ze={balanced:``,plain:``,swift:`veloz`,fortune:`de la fortuna`,blunt:`de guardia`,heavy:`del coloso`,light:`ligera`,mystic:`mística`,plate:`reforzada`};function Be(e,t){let n=C[e][0];return n.from===t?n.to:n.from}function Ve(e,t){let n=e.slot===`weapon`?`atk`:`def`,r=Be(t,n),i=e.add?.[n]??0,o=w*(i/a[n])*a[r],s=e=>e<50?Math.max(1,Math.round(e)):Math.round(e/5)*5;return{id:e.id+`_`+t,name:e.name+` `+ze[t],slot:e.slot,family:t,variantOf:e.id,price:Math.round(e.price*1),icon:e.icon,pct:{...e.pct},add:{...e.add,[n]:s(i*T),[r]:s(o)}}}var He=[`exp`,`move`,`lifesteal`,`gold`,`freeFight`,`friends`,`bossBane`,`explorer`,`lootLuck`,`streak`,`startGold`];function Ue(e){let t=b,n=e=>e&&Object.fromEntries(Object.entries(e).map(([e,n])=>[e,Math.round(n*t*100)/100])),r=/a$/.test(e.name.split(` `)[0]),i={...e,id:`e_`+e.id,name:e.name+(r?` enaltecida`:` enaltecido`),exaltedOf:e.id,add:n(e.add),pct:n(e.pct),pb:(e.pb??0)+2};for(let n of He){let r=e[n];typeof r==`number`&&(i[n]=Math.round(r*t*1e3)/1e3)}return i}var We=new Set(Ie.flat()),Ge=[...Pe,...Le.filter(e=>We.has(e.id))].map(Ue),Ke=[...Le.flatMap(e=>[e,...(Re[e.id]??[]).map(t=>Ve(e,t))]),...Pe,...Ge],qe=new Map(Ke.map(e=>[e.id,e])),Je=(()=>{let e=Le.filter(e=>e.slot!==`acc`&&e.price>0&&e.drop),t=e.map(e=>Math.log(e.price)),n=e.map(e=>Math.log(e.drop)),r=t.reduce((e,t)=>e+t)/t.length,i=n.reduce((e,t)=>e+t)/n.length,a=t.reduce((e,t,a)=>e+(t-r)*(n[a]-i),0)/t.reduce((e,t)=>e+(t-r)**2,0);return{a:i-a*r,b:a}})(),Ye=e=>Math.max(1,Math.round(Math.exp(Je.a+Je.b*Math.log(e)))),Xe=new Map,Ze=new Map;Ie.forEach((e,t)=>e.forEach((n,r)=>{let[i,a]=xe[t];Xe.set(n,t),Ze.set(n,Math.round(i*(a/i)**((r+.5)/e.length)))}));function Qe(e){if(!e.pct)return;let t=Math.max(1,(e.lv??1)*1),n=r.reduce((e,t)=>e+o[t],0),c={...e.add};for(let u of r){let r=e.pct[u];if(!r)continue;let d=i[u]+a[u]*4*(t-1)*o[u]/n,f=l[u]*me*s[u],p=c[u]??0,m=p+(p+d)*r/(1+f);c[u]=m<1e3?Math.round(m):Math.round(m/10**(Math.floor(Math.log10(m))-2))*10**(Math.floor(Math.log10(m))-2)}e.add=c,delete e.pct}function $e(e){let t=e=>xe[e][0],n=M.length-1;if(e<=t(1))return M[1];let r=(e,t)=>M[e]*(M[e+1]/M[e])**t;for(let i=1;i<n;i++)if(e<t(i+1))return r(i,Math.log(e/t(i))/Math.log(t(i+1)/t(i)));return M[n]*(M[n]/M[n-1])**(Math.log(e/t(n))/Math.log(t(n)/t(n-1)))}var et=(e,t)=>Math.round(t*$e(e)/ne);function tt(e){let t=e.slot===`weapon`?`atk`:e.slot===`armor`?`def`:null;if(!t)return e.lv;let n=r.reduce((e,t)=>e+o[t],0),i=a[t]*4*o[t]/n;return Math.max(e.lv,(e.add?.[t]??0)/i)}for(let e of Ke)e.variantOf||e.exaltedOf||(Xe.has(e.id)?(e.plan=`boss`,e.lv=Ze.get(e.id)):e.lv=e.start?1:e.price>0&&e.slot!==`acc`?Ye(e.price):e.drop??(e.price>0?Ye(e.price):1));for(let e of Ke)e.variantOf&&(e.lv=qe.get(e.variantOf).lv,e.plan=`variant`),e.exaltedOf&&(e.lv=qe.get(e.exaltedOf).lv,e.plan=`boss`);for(let e of Ke)Qe(e);for(let e of Ke)if(!(e.variantOf||e.exaltedOf)){if(e.plan===`boss`)e.price=et(tt(e),25);else if(e.start)e.price=0;else if(e.slot!==`acc`){let t=et(tt(e),20);e.price=e.price>0?Math.min(e.price,t):t}}for(let e of Ke)e.variantOf&&(e.price=Math.round(qe.get(e.variantOf).price*1)),e.exaltedOf&&(e.price=Math.round(qe.get(e.exaltedOf).price*Ce));var nt=Ke.filter(e=>e.plan===`variant`).sort((e,t)=>e.lv-t.lv||(e.id<t.id?-1:1));function z(e){let t=qe.get(e);if(!t)throw Error(`Objeto desconocido: `+e);return t}var rt=()=>({hp:0,atk:0,def:0,agi:0,luc:0}),it=()=>({add:rt(),pct:rt()});function at(e=l){return{level:1,exp:0,sp:0,alloc:rt(),kp:{...e},gear:it()}}function ot(e){let t=rt(),n=rt(),o=rt(),c=(t,n)=>{let r=i[t]+a[t]*e.alloc[t],o=e.kp[t]*(e.bpl??2.75)*s[t]+e.gear.pct[t];return Math.floor((e.gear.add[t]+r+n)*(1+o))};for(let e of r)t[e]=c(e,0);for(let n of e.gear.conv??[])o[n.to]+=n.k*Math.max(0,t[n.from]);for(let e of r)n[e]=o[e]?c(e,o[e]):t[e];return n}function st(e){return 10*(e-1)*(e-1)}function ct(e){return 1+Math.floor(Math.sqrt(e/10)+1e-9)}function lt(e,t,n=!0){e.exp+=t;let r=ct(e.exp),i=Math.max(0,r-e.level);return i?(e.level=r,e.sp+=i*(e.spPerLevel??4),n&&ut(e),i):0}function ut(e){let t=r.reduce((e,t)=>e+o[t],0),n=Math.floor(e.sp/t);if(n){for(let t of r)e.alloc[t]+=n*o[t];e.sp-=n*t}}function dt(e){let t=r.reduce((e,t)=>e+o[t],0),n=rt();for(let i of r)n[i]=Math.floor(e*o[i]/t);let i=r.reduce((e,t)=>o[t]>o[e]?t:e);return n[i]+=e-r.reduce((e,t)=>e+n[t],0),n}function ft(e,t){let n=r.reduce((e,n)=>e+Math.max(0,Math.floor(t[n])),0);if(n>e.sp)return!1;for(let n of r)e.alloc[n]+=Math.max(0,Math.floor(t[n]));return e.sp-=n,!0}function pt(e,t){let n=rt();for(let i of r)n[i]=e.alloc[i]+Math.max(0,Math.floor(t[i]));return{...e,alloc:n}}function mt(e){let t=r.reduce((t,n)=>t+e.alloc[n],0),n=rt();if(t>0)for(let i of r)n[i]=e.alloc[i]/t;return n}function ht(e,t){return!e||!t?1:Math.max(f,1+De.bossAffinity*(e[t.weak]-e[t.strong]))}function gt(e,t=!1){let n=t?d:1,r=t=>Math.floor((u[t][0]+u[t][1]*e)*n);return{hp:r(`hp`),atk:r(`atk`),def:r(`def`),agi:0,luc:0}}function _t(e,t){return e<=0?0:e*e/(e+Math.max(0,t))}var vt=e=>Math.floor(e*100+1e-9)/100;function yt(e,t,n,r){let i=(2*(e.hp/j.hp+e.atk/j.atk+t/j.exp+n/j.gold)+3*r)/5;return i*(i>=2e4?1.05:1)}function bt(e){let[,t,n,r]=ee.find(([t])=>e<=t);return(e*t+n)/r}function xt(e,t){let n=A,r=e.hp/n.hp+e.atk/n.atk+e.def/n.def+e.agi/n.agi+e.luc/n.luc;return r>0?{agi:e.agi/n.agi/r,luc:e.luc/n.luc/r}:{agi:0,luc:0}}function St(e,t,n){let r=O,i=xt(e,n.build),a=e.agi/t*r.agi+r.base+Math.min(e.agi/r.agiBig[0]*r.agiBig[1],r.agiBig[1])+Math.min(e.luc/r.lucBig[0]*r.lucBig[1],r.lucBig[1])+i.agi*r.wariai;return a=Math.min(a,r.cap)+i.agi*r.wariai,a=vt(a),n.ring&&(a+=r.ring),a=vt(Math.min(a,r.ringCap)),n.lowHp&&(a=Math.min(a+r.lowHp,r.lowHpCap)),a}function Ct(e,t,n){let r=k,i=xt(e,n.build),a=i.agi*r.wariaiAgi+i.luc*r.wariaiLuc,o=e.agi/t*r.agi+e.luc/t*r.luc+r.base+Math.min(e.agi/r.agiBig[0]*r.agiBig[1],r.agiBig[1])+Math.min(e.luc/r.lucBig[0]*r.lucBig[1],r.lucBig[1])+a;o=vt(Math.min(o,r.cap)+a),o=Math.min(o+r.ring*(n.critRings??0),r.ringCap);let s=o;return n.lowHp&&(o=Math.min(o+r.lowHp,r.lowHpCap)),{rate:o,forK:s}}function wt(e,t,n,r=0){let i=Math.min(Math.floor(n*(t*18+1.2)),5);return(e+1)*(1.75+i/5)*(1+ie*r)+4}function Tt(e,t){let n=N,r=1+e/t*n.beit;for(let[t,i]of n.ramps)r+=Math.min(e/t,1)*i;let i=n.table;if(r>=i[i.length-1][0])return i[i.length-1][1];for(let e=1;e<i.length;e++)if(r<=i[e][0]){let[t,n]=i[e-1],[a,o]=i[e];return n+(o-n)*(r-t)/(a-t)}return 1}function Et(e){return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function B(e,t,n=0,r=0){let i=Et(e^2654435769|0);return i=Et(i^Math.imul(t|0,668265261)|0),i=Et(i^Math.imul(n|0,374761393)|0),i=Et(i^Math.imul(r|0,3550635116)|0),i>>>0}function Dt(e){return(e>>>0)/4294967296}function Ot(e){let t=e>>>0,n=(()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296});return n.int=e=>Math.floor(n()*e),n.range=(e,t)=>e+(t-e)*n(),n}function kt(e=null){let t={owned:[],weapon:null,armor:null,acc:[null],keep:null,pbGranted:[]};e&&(t.owned.push(e),Rt(t,z(e),0));for(let e of Ke)e.start&&(t.owned.push(e.id),e.slot===`weapon`&&!t.weapon&&(t.weapon=e.id),e.slot===`armor`&&!t.armor&&(t.armor=e.id));for(let e of Pt(t))z(e).pb&&t.pbGranted.push(e);return t}var At=e=>Math.round(e.price*De.priceScale),jt=(e,t)=>e.price>0&&(!e.plan||t.includes(e.id));function Mt(e,t=[]){return Ke.filter(n=>jt(n,t)&&(!e||n.slot===e)).sort((e,t)=>e.price-t.price)}function Nt(e,t){return!e.owned.includes(t)&&(e.owned.push(t),!0)}function Pt(e){return[e.weapon,e.armor,...e.acc].filter(e=>e!==null)}function Ft(e){let t=re[e.acc.length];return t===void 0?null:Math.round(t*De.priceScale)}function It(e,t){let n=z(t),r=At(n);return n.start||!jt(n,e.plans)||e.kit.owned.includes(t)||e.gold<r?!1:(e.gold-=r,e.kit.owned.push(t),!0)}function Lt(e){let t=Ft(e.kit);return t===null||e.gold<t?!1:(e.gold-=t,e.kit.acc.push(null),!0)}function Rt(e,t,n){if(t.slot===`weapon`)e.weapon=t.id;else if(t.slot===`armor`)e.armor=t.id;else{if(e.acc.includes(t.id))return;let r=n!==void 0&&n<e.acc.length?n:Math.max(0,e.acc.indexOf(null));e.acc[r]=t.id}}function zt(e,t,n){if(!e.kit.owned.includes(t))return 0;let r=z(t);return Rt(e.kit,r,n),Xt(e),r.pb&&!e.kit.pbGranted.includes(t)&&Pt(e.kit).includes(t)?(e.kit.pbGranted.push(t),e.pb+=r.pb,r.pb):0}function Bt(e,t){t<e.kit.acc.length&&(e.kit.acc[t]=null),Xt(e)}function Vt(e,t){(t===null||e.kit.owned.includes(t))&&(e.kit.keep=t)}function Ht(e){let t=e.kit;if(t.keep)return t.keep;let n=t.owned.map(z).filter(e=>!e.start);if(!n.length)return null;let r=t=>Ut(t,e.hero.level);return n.reduce((e,t)=>{let n=r(e),i=r(t);return i>n||i===n&&t.price>e.price?t:e}).id}function Ut(e,t){if(!e.add&&!e.pct)return 0;let n=at();n.level=t,n.alloc=dt((t-1)*4);let r=kt();n.gear=Gt(r);let i=Wt(ot(n),t);return e.slot===`weapon`?r.weapon=e.id:e.slot===`armor`?r.armor=e.id:r.acc[0]=e.id,n.gear=Gt(r),Wt(ot(n),t)-i}function Wt(e,t){let n=gt(t);return e.hp/Math.max(1,_t(n.atk,e.def))/(n.hp/Math.max(1,_t(e.atk,n.def)))}function Gt(e,t=0){let n={add:rt(),pct:rt(),conv:[]};for(let i of Pt(e)){let e=z(i);for(let i of r)n.add[i]+=(e.add?.[i]??0)+(e.play?.[i]??0)*t,n.pct[i]+=e.pct?.[i]??0;n.conv.push(...Kt(e))}return n}function Kt(e){return e.family?C[e.family]:[]}function qt(e){return Dt(B(9100,e.runIndex,e.salt))<.4?0:e.runIndex+1}function Jt(e){if(e<=0)return 0;let t=oe,n=se,r=Math.floor(e/10);return t[Math.min(t.length-1,e%10+r)]+n[Math.min(n.length-1,r)]}function Yt(e){let t={exp:0,pb:0,encounter:0,move:0,critDmgRings:0,firstCrits:0,critRings:0,comboRing:!1,lifesteal:0,spPerLevel:0,play:rt(),revival:0,instant:!1,gold:0,freeFight:0,friends:0,bossBane:0,explorer:0,bossPb:0,lootLuck:0,softLoss:!1,streak:0,startGold:0};for(let n of Pt(e)){let e=z(n);t.exp+=e.exp??0,t.pb+=e.pb??0,t.encounter+=e.encounter??0,t.move+=e.move??0,t.critDmgRings+=e.critDmgRings??0,t.firstCrits=Math.max(t.firstCrits,e.firstCrits??0),t.critRings+=e.critRings??0,t.comboRing||=!!e.comboRing,t.lifesteal=Math.max(t.lifesteal,e.lifesteal??0),t.spPerLevel=Math.max(t.spPerLevel,e.spPerLevel??0);for(let n of r)t.play[n]+=e.play?.[n]??0;t.revival+=e.revival??0,t.instant||=!!e.instant,t.gold+=e.gold??0,t.freeFight+=e.freeFight??0,t.friends+=e.friends??0,t.bossBane+=e.bossBane??0,t.explorer+=e.explorer??0,t.bossPb+=e.bossPb??0,t.lootLuck+=e.lootLuck??0,t.softLoss||=!!e.softLoss,t.streak+=e.streak??0,t.startGold+=e.startGold??0}return t.freeFight=Math.min(P,t.freeFight),t}function Xt(e){e.hero.gear=Gt(e.kit,qt(e)),e.hero.spPerLevel=Yt(e.kit).spPerLevel||void 0}function Zt(e,t){return Qt([e.hero],e.enemy,t)[0]}function Qt(e,t,n){let r=Ot(n),i=t.beit??bt(0),a=e.map(e=>Math.max(1,e.stats.hp)),o=[...a],s=Math.max(1,t.stats.hp),c=s,l=0,u=e.map(()=>({events:[],heroHits:0,heroCrits:0,bestCombo:0})),d=()=>e.map((e,t)=>t).filter(e=>o[e]>0),f=e.length>1,p=e.map(e=>ht(e.build,t.affinity)),m=(e,t)=>f?{...e===t?{}:{ally:!0},who:e}:{},h=(n,s)=>{let d=e[n],f=u[n],h=_t(d.stats.atk,t.stats.def)*(1+E*(2*r()-1))*p[n],g=!1,_=Ct(d.stats,i,{lowHp:o[n]<=D*a[n],critRings:d.critRings??0,build:d.build}),v=r();(f.heroHits<(d.firstCrits??0)||v<_.rate)&&(h=wt(h,_.forK,r(),d.critDmgRings??0),g=!0,f.heroCrits++),f.heroHits++;let y=Math.max(1,Math.floor(h));c=Math.max(0,c-y),d.lifesteal&&(o[n]=Math.min(a[n],o[n]+Math.floor(y*d.lifesteal))),u.forEach((e,t)=>{e.events.push({turn:l,type:g?`crit`:`attack`,src:`hero`,combo:s,dmg:y,hpLeft:c,...m(n,t)}),c===0&&e.events.push({turn:l,type:`death`,src:`enemy`,combo:s,dmg:0,hpLeft:0})})},g=()=>{let n=d(),i=n.length>1?n[Math.floor(r()*n.length)]:n[0],a=_t(t.stats.atk,e[i].stats.def)*(1+E*(2*r()-1))/p[i],s=Math.max(1,Math.floor(a)),c=s>=o[i]&&o[i]>1&&!!e[i].revival&&r()<e[i].revival;o[i]=c?1:Math.max(0,o[i]-s),u.forEach((e,t)=>{e.events.push({turn:l,type:`attack`,src:`enemy`,combo:0,dmg:s,hpLeft:o[i],...m(i,t)}),o[i]===0&&e.events.push({turn:l,type:`death`,src:`hero`,combo:0,dmg:0,hpLeft:0,...m(i,t)})})},_=`hero`;for(let t=0;t<120&&d().length&&c>0;t++,_=_===`hero`?`enemy`:`hero`){if(_===`enemy`){l++,g();continue}for(let t of d()){if(c<=0)break;l++,h(t,0);let n=0;for(;c>0&&n+1<12&&r()<St(e[t].stats,i,{lowHp:o[t]<=.25*a[t],ring:!!e[t].comboRing,build:e[t].build});)n++,h(t,n);u[t].bestCombo=Math.max(u[t].bestCombo,n+1)}}let v=c===0&&d().length>0;return u.map((e,t)=>(e.events.push({turn:l,type:`end`,src:v?`hero`:`enemy`,combo:0,dmg:0,hpLeft:v?o[t]:c}),{events:e.events,win:v,maxHp:{hero:a[t],enemy:s},hpLeft:{hero:o[t],enemy:c},turns:l,heroHits:e.heroHits,heroCrits:e.heroCrits,bestCombo:e.bestCombo,...f?{party:{me:t,maxHp:[...a]}}:{}}))}function $t(e,t){let n=ve,r=e/t*n.beit+n.base;for(let[t,i,a]of n.caps)r+=e<t?e/t*i:a;return r>1&&(r=(r+1.7)/2.7),r>2&&(r=(r+3.5)/2.75),Math.floor(Math.min(r,n.max)*100+1e-9)/100}var en=(e,t)=>(e.drop??0)-(t.drop??0)||(e.id<t.id?-1:1);function tn(e,t,n){let r=[...e],i=[];for(let e=0;e<t&&r.length;e++)i.push(r.splice(Math.floor(Dt(B(n,e))*r.length),1)[0]);return i.sort(en).map(e=>e.id)}var nn=new WeakMap;function rn(e,t){let n=nn.get(e);n||nn.set(e,n=new Map);let r=n.get(t);if(r)return r;let i=e.zones[t],a=[];if(i.creatures.length&&!i.isHub){let n=Math.max(1,i.lvHi),r=Ke.filter(e=>e.drop!==void 0&&!e.dropBoss&&e.drop<=n),o=r.filter(e=>e.drop>=n*we);!o.length&&r.length&&(o=[r.sort(en)[r.length-1]]),a=tn(o,3,B(e.S,9101,t))}return n.set(t,a),a}var an=new WeakMap;function on(e,t){let n=an.get(e);if(!n){an.set(e,n=new Map);for(let t=1;t<Ie.length;t++){let r=Ie[t],i=e.bosses.filter(e=>e.ring===t).map(e=>e.id);i.sort((t,n)=>je(e,t)-je(e,n)||t-n),i.forEach((e,t)=>n.set(e,r[Math.min(r.length-1,Math.floor(t*r.length/i.length))]))}}return n.get(t)??Ie[Ie.length-1][0]}function sn(e,t,n,r,i,a=1){let o=e.length;if(!o)return null;let s=$t(n,r),c=e[Math.min(o,Math.max(1,Math.floor(Dt(B(i,1))*o*.85*(s+1)/2+1)))-1];if(t.includes(c))return null;let l=Math.min(ye,De.lootBaseRate*s*a);return l<.001&&(l=25e-5+l*.75),l<1e-4&&(l=75e-6+l*.25),Dt(B(i,2))<=l?c:null}function cn(e,t,n,r,i=1){if(Dt(B(r,1))>=De.planRate*i)return null;let a=Math.max(1,e.zones[t].lvHi),o=nt.filter(e=>e.lv<=a&&!n.includes(e.id));return o.length?o[Math.floor(Dt(B(r,2))*o.length)].id:null}function ln(e,t,n=null,r,i=0,a=[]){let o=at(r?.kp);r&&(o.bpl=r.bpl);let s=kt(n),c={runIndex:t,salt:i,pb:De.pbPerRun+s.pbGranted.reduce((e,t)=>e+(z(t).pb??0),0),gold:0,hero:o,walked:0,nextAt:0,grace:0,encounters:0,defeatedBosses:[],autoSp:!1,kit:s,wins:0,losses:0,goldEarned:0,zones:[],deepestRing:0,peakZoneLevel:0,loot:[],plans:a,plansFound:[],dragonDefeated:!1,streak:0,pbSpent:0,pbGained:0};return Xt(c),c.gold=Yt(s).startGold,c.nextAt=fn(e,c),c}function un(e,t,n){let r=e.zones[n];t.zones.includes(n)||t.zones.push(n),!r.isHub&&(t.deepestRing=Math.max(t.deepestRing,r.ring),t.peakZoneLevel=Math.max(t.peakZoneLevel,r.lvHi))}function dn(e){let t=Yt(e.kit);return{name:`Héroe`,level:e.hero.level,stats:ot(e.hero),build:mt(e.hero),critDmgRings:t.critDmgRings,firstCrits:t.firstCrits,critRings:t.critRings,comboRing:t.comboRing,lifesteal:t.lifesteal,...t.revival?{revival:Jt(t.revival)}:{}}}function fn(e,t){return 107*Dt(B(e.S,9001,t.runIndex+t.salt*65536,t.encounters))**(1/Te)}function pn(e,t,n){if(e.pb<=0||!n.creatures.length)return!1;let r=Math.min(e.grace,t);return e.grace-=r,t-=r,t<=0?!1:(e.walked+=t*Math.max(0,1+Yt(e.kit).encounter),e.walked>=e.nextAt)}function mn(e,t,n){return{exp:Math.floor(1*st(e+1)*(n?3:1)),gold:M[t]*(n?5:1)}}function hn(e,t,n,r,i){let a=e.zones[t],o=gt(r,i),s=mn(r,a.ring,i);return{name:n,level:r,stats:o,beit:bt(yt(o,s.exp,s.gold,a.level))}}function gn(e,t,n){let r=e.zones[n],i=B(e.S,9002,n,t.runIndex*100003+t.encounters+t.salt*7340033),a=i%r.creatures.length,o=r.lvLo+Math.floor(Dt(B(i,1))*(r.lvHi-r.lvLo+1));return{kind:`normal`,zoneId:n,creatureId:r.creatureIds?.[a]??``,bossId:null,seed:B(i,2),enemy:hn(e,n,r.creatures[a],o,!1)}}function _n(e,t,n,r=0){let i=e.bosses[n],a={...hn(e,i.zone,i.name,je(e,n),!0),...De.bossAffinity>0?{affinity:bn(e,n)}:{}};return r&&(a.stats={...a.stats,hp:Math.floor(a.stats.hp*g[r]),atk:Math.floor(a.stats.atk*_[r])}),{kind:`boss`,zoneId:i.zone,creatureId:i.creatureId??``,bossId:n,seed:B(e.S,9003,t.runIndex*1009+n+t.salt*65536,t.encounters),enemy:a,...r?{exalt:r}:{}}}function vn(e,t,n,r){let i=Dt(B(e.S,9020,t*4099+n)),a=De.exaltRate,o=m;return r>=h[2]&&i<o[2]*a?2:+(r>=h[1]&&i<(o[1]+o[2])*a)}function yn(e,t){if(!e.exalt||t>=h[e.exalt])return null;let n=Object.keys(v);return n[B(e.seed,13)%n.length]}function bn(e,t){let n=p,r=B(e.S,9010,t),i=r%n.length;return{weak:n[i],strong:n[(i+1+B(r,1)%(n.length-1))%n.length]}}var xn=`dragon_borde`;function Sn(e,t,n=1){let r=e.dragon.level,i=hn(e,e.lair,e.dragon.name,r,!0),a=ce/d,o=1+De.dragonPerPlayer*Math.max(0,n-1);return i.stats={...i.stats,hp:Math.floor(i.stats.hp*a*o),atk:Math.floor(i.stats.atk*a*o),def:Math.floor(i.stats.def*a)},{kind:`dragon`,zoneId:e.lair,creatureId:xn,bossId:null,seed:B(e.S,9005,t.runIndex+t.salt*65536,t.encounters),enemy:i}}function Cn(e,t,n){let r=wn(e,t,n);return r>=.9?`safe`:r>=.4?`even`:`danger`}function wn(e,t,n){let r=0;for(let i=0;i<12;i++)Zt({hero:e,enemy:t,kind:n?`boss`:`normal`},B(9004,i)).win&&r++;return r/12}function Tn(e,t,n,r,i=!1){return Cn(dn(t),hn(e,n,``,r,i),i)}function En(e,t,n){return Dn(e,[t],n)[0]}function Dn(e,t,n){let r=e.zones[n.zoneId].ring,i=n.kind!==`normal`,a=yn(n,t.length),o=t.map(e=>{let n=dn(e),o=Yt(e.kit),s=o.friends*(t.length-1)+o.explorer*Math.max(0,r-1),c=1+s+(i?o.bossBane:0)+o.streak*Math.min(e.streak??0,10);if((c!==1||s)&&(n.stats={...n.stats,atk:Math.floor(n.stats.atk*c),def:Math.floor(n.stats.def*(1+s))}),a){let e=v[a],t={...n.stats};for(let n of Object.keys(e))t[n]=Math.floor(t[n]*e[n]);n.stats=t,a===`blind`&&(n.critRings=0,n.comboRing=!1,n.firstCrits=0)}return n}),s=Qt(o,n.enemy,n.seed),c=n.kind===`boss`&&n.bossId!==null?on(e,n.bossId):null;return t.map((t,r)=>{let i=o[r],l=i.stats,u=s[r],d=Yt(t.kit),f=t.hero.level,p=[],m=e=>{t.plans.includes(e)||t.plans.push(e),p.includes(e)||p.push(e),t.plansFound.includes(e)||t.plansFound.push(e)},h=1,g=0,_=0,v=0,b=0,x=null;if(u.win){let i=n.kind===`boss`,a=mn(n.enemy.level,e.zones[n.zoneId].ring,i);if(_=Math.floor(a.exp*(1+d.exp)),v=Math.floor(a.gold*Tt(l.luc,n.enemy.beit??bt(0))*(1+d.gold)),b=lt(t.hero,_,t.autoSp),t.gold+=v,t.goldEarned+=v,t.wins++,t.streak=(t.streak??0)+1,d.freeFight&&Dt(B(n.seed,11+r*101))<d.freeFight&&(h=0),n.kind===`normal`){x=sn(rn(e,n.zoneId),t.kit.owned,l.luc,n.enemy.beit??bt(0),B(n.seed,7+r*101),1+d.lootLuck),x&&(Nt(t.kit,x),t.loot.push(x));let i=cn(e,n.zoneId,t.plans,B(n.seed,19+r*101),1+d.lootLuck);i&&m(i)}if(c!==null&&!t.plans.includes(c)&&m(c),c!==null&&n.exalt){let e=`e_`+c;!t.plans.includes(e)&&Dt(B(n.seed,17+r*101))<y[n.exalt]*(1+d.lootLuck)&&m(e)}i&&n.bossId!==null&&(t.defeatedBosses.push(n.bossId),g=Math.round(e.bosses[n.bossId].bp*De.bossPbScale)+d.bossPb),n.kind===`dragon`&&(t.dragonDefeated=!0)}else d.softLoss||(h+=2),t.losses++,t.streak=0;return t.pb=Math.max(0,t.pb-h)+g,t.pbSpent+=h,t.pbGained+=g,t.encounters++,t.walked=0,t.nextAt=fn(e,t),{log:u,encounter:n,hero:i,pbSpent:h,pbGained:g,exp:_,gold:v,levelsGained:b,levelBefore:f,loot:x,...p.length?{plans:p}:{},...a?{curse:a}:{}}})}function On(e,t,n,r,i){let a=hn(e,t,``,Math.max(1,e.zones[t].lvHi),!1),o=a.beit??bt(0),s=r?Yt(r):null,c={lowHp:!1,ring:!!s?.comboRing,critRings:s?.critRings??0,build:i};return{combo:St(n,o,c),crit:Ct(n,o,c).rate,dmg:_t(n.atk,a.stats.def)}}var kn=.5,An=[0,600,420,300,260,240,220],jn=[6,22],Mn=[9,5.5,2],Nn=[`bosque`],Pn=[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]],Fn={bosque:[Pn,[[0,-1],[-1,0],[0,0],[1,0],[0,1]],[[-1,0],[0,0],[1,0]],[[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]]],campamento:[[[0,0]],Pn,Pn,[[0,0]],[[0,0]],[[0,0]]]},In=[[0,0,-4],[3,-2,-3],[3,2,-3],[3,0,-6],[1,-5,-8],[2,5,-8],[1,0,-11],[5,7,-5],[5,-7,-5],[4,-3,-1]],Ln=[`monje`,`herrera`,`lancero`,`picara`,`cocinero`,`sanadora`],Rn=[[0,-2,-5],[1,6,-4],[2,-6,-4]];function zn(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,2147483647);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Bn(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=zn(r,i,n),u=zn(r+1,i,n),d=zn(r,i+1,n),f=zn(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}var Vn=[[1,0],[-1,0],[0,1],[0,-1]];function Hn(e,t,n,r){let i=new Int32Array(t*n).fill(-1),a=new Int32Array(t*n),o=0;for(let[s,c]of r){let r=c*t+s;s>=0&&c>=0&&s<t&&c<n&&e[r]===1&&i[r]<0&&(i[r]=0,a[o++]=r)}for(let r=0;r<o;r++){let s=a[r],c=s%t,l=(s-c)/t;for(let[r,u]of Vn){let d=c+r,f=l+u;if(d<0||f<0||d>=t||f>=n)continue;let p=f*t+d;e[p]===1&&i[p]<0&&(i[p]=i[s]+1,a[o++]=p)}}return i}function Un(e,t,n){let r=new Int32Array(t*n).fill(-1),i=new Int32Array(t*n),a=0;for(let o=0;o<t*n;o++)e[o]!==1&&(r[o]=0,i[a++]=o);for(let e=0;e<a;e++){let o=i[e],s=o%t,c=(o-s)/t;for(let[e,l]of Vn){let u=s+e,d=c+l;if(u<0||d<0||u>=t||d>=n)continue;let f=d*t+u;r[f]<0&&(r[f]=r[o]+1,i[a++]=f)}}return r}var Wn=new WeakMap;function Gn(e){let t=Wn.get(e);if(t)return t;let n=e.zones.length,r=e.raster.w,i=e.raster.ids;t=new Int32Array(n*4);for(let e=0;e<n;e++)t[e*4]=r,t[e*4+1]=r,t[e*4+2]=0,t[e*4+3]=0;for(let e=0;e<i.length;e++){let a=i[e];if(a>=n)continue;let o=e%r,s=(e-o)/r,c=a*4;o<t[c]&&(t[c]=o),s<t[c+1]&&(t[c+1]=s),o>t[c+2]&&(t[c+2]=o),s>t[c+3]&&(t[c+3]=s)}return Wn.set(e,t),t}function Kn(e,t){let n=e.zones[t],r=e.radius,i=e.raster.w,a=e.raster.unit,o=e.raster.ids,s=e.S,c=Gn(e),l=c[t*4],u=c[t*4+1],d=c[t*4+2],f=c[t*4+3],p=Math.floor((l*a-r)*kn)-18,m=Math.floor((u*a-r)*kn)-18,h=Math.ceil((d-l+1)*a*kn)+36,g=Math.ceil((f-u+1)*a*kn)+36,_=(e,t)=>[Math.round(e*kn-p),Math.round(t*kn-m)],v=new Uint8Array(h*g),y=B(s,7001,t)&2147483647;for(let e=0;e<g;e++)for(let n=0;n<h;n++){let s=(n+p)/kn,c=(e+m)/kn,l=(Bn(s/14,c/14,y)-.5)*2*4,u=(Bn(s/14,c/14,y+1)-.5)*2*4,d=Math.floor((s+l+r)/a),f=Math.floor((c+u+r)/a);d>=0&&f>=0&&d<i&&f<i&&o[f*i+d]===t&&(v[e*h+n]=1)}let[b,x]=_(n.x,n.y),S=new Uint8Array(h*g),C=e.adj[t].map(t=>{let n=e.passages[t.passage],[r,i]=_(n.mx,n.my),a=r-b,o=i-x,s=Math.sqrt(a*a+o*o)||1;a/=s,o/=s;for(let e=-10;e<=12;e+=.5)for(let t=-2;t<=2;t+=.5){let n=Math.round(r+a*e-o*t),s=Math.round(i+o*e+a*t);n>=0&&s>=0&&n<h&&s<g&&(v[s*h+n]=1)}for(let e=Math.max(0,i-9);e<Math.min(g,i+10);e++)for(let t=Math.max(0,r-9);t<Math.min(h,r+10);t++)S[e*h+t]=1;return{x:r,y:i,dx:a,dy:o,side:Math.abs(a)>Math.abs(o)?a>0?`E`:`W`:o>0?`S`:`N`,kind:n.kind,passage:t.passage,to:t.to}}),w=Un(v,h,g),T=Hn(v,h,g,C.map(e=>[e.x,e.y])),E=[b,x],D=-1;for(let e=0;e<h*g;e++)T[e]>D&&w[e]>=6&&(D=T[e],E=[e%h,(e-e%h)/h]);let O=[b,x],k=1/0;for(let e=0;e<h*g;e++)if(v[e]===1&&w[e]>=3){let t=e%h-b,n=(e-e%h)/h-x,r=t*t+n*n;r<k&&(k=r,O=[e%h,(e-e%h)/h])}for(let[e,t]of[E,O])for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=(t+n)*h+(e+r);i>=0&&i<h*g&&(S[i]=1)}let A=Ot(B(s,7002,t)),j=0;for(let e=0;e<h*g;e++)v[e]===1&&j++;let ee=n.isHub?0:Math.round(j/An[n.ring]),M=new Int32Array(h*g).fill(-1),N=0;for(let e=0;N<ee&&e<ee*30;e++){let t=Math.floor(A()*h),n=Math.floor(A()*g),r=n*h+t;if(v[r]!==1||w[r]<7||S[r])continue;let i=jn[0]+Math.floor(A()*(jn[1]-jn[0])),a=A()<.5,o=[],s=t,c=n;for(let e=0;e<i*3&&o.length<i;e++){let e=c*h+s;v[e]===1&&!S[e]&&w[e]>=4&&(v[e]=a&&A()<.55?3:2,o.push(e));let r=Math.floor(A()*4);s+=[1,-1,0,0][r],c+=[0,0,1,-1][r],(s-t)*(s-t)+(c-n)*(c-n)>25&&(s=t,c=n)}if(!o.length||!Xn(v,h,g,o,M,e+1)){for(let e of o)v[e]=1;continue}j-=o.length,N++}w=Un(v,h,g);let te=n.isHub?qn(v,h,g,O):Nn.includes(n.theme.id)?Jn(v,h,g,S,E,C,n.theme.id,B(s,7006,t)):[],ne=n.isHub?[]:Zn(v,h,g,B(s,7003,t)),re=[E,O];for(let e of C)for(let t of Mn)re.push([Math.round(e.x-e.dx*t),Math.round(e.y-e.dy*t)]);for(let e of te)re.push(...e.solid);let ie=n.isHub?[]:Qn(v,h,g,re,B(s,7005,t));for(let e of te)for(let[t,n]of e.solid)v[n*h+t]=2;return{zoneId:t,w:h,h:g,x0:p,y0:m,cells:v,exits:C,anchor:E,spawn:O,wallProps:ne,decos:ie,features:te,clusters:N}}function qn(e,t,n,r){let i=[];for(let[a,o,s]of In){let c=r[0]+o,l=r[1]+s,u=Fn.campamento[a].map(([e,t])=>[c+e,l+t]);u.every(([r,i])=>r>=0&&i>=0&&r<t&&i<n&&e[i*t+r]===1)&&i.push({kit:`campamento`,prop:a,x:c,y:l,solid:u})}for(let[a,o,s]of Rn){let c=r[0]+o,l=r[1]+s;c>=0&&l>=0&&c<t&&l<n&&e[l*t+c]===1&&i.push({kit:`npc`,prop:a,x:c,y:l,solid:[[c,l]]})}return i}function Jn(e,t,n,r,i,a,o,s){let c=Fn[o];if(!c?.length)return[];let l=Ot(s),u=l.int(c.length),d=c[u],f=(e,t,n,r,i)=>(e-n)*(e-n)+(t-r)*(t-r)>=i*i,p=(o,s)=>{if(!f(o,s,i[0],i[1],10)||!a.every(e=>f(o,s,e.x,e.y,14)))return!1;for(let i=-4;i<=4;i++)for(let a=-4;a<=4;a++){let c=o+a,l=s+i,u=l*t+c;if(c<0||l<0||c>=t||l>=n||e[u]!==1||r[u])return!1}return!0},m=[];for(let r=0;r<n;r++)for(let n=0;n<t;n++)e[r*t+n]===1&&p(n,r)&&m.push(r*t+n);if(!m.length)return[];let h=m[l.int(m.length)],g=h%t,_=(h-g)/t,v=Rn.length+l.int(Ln.length-Rn.length);return[{kit:o,prop:u,x:g,y:_,solid:d.map(([e,t])=>[g+e,_+t])},{kit:`npc`,prop:v,x:g+2,y:_+2,solid:[[g+2,_+2]]}]}var Yn=8;function Xn(e,t,n,r,i,a){let o=t,s=n,c=0,l=0;for(let e of r){let n=e%t,r=(e-n)/t;n<o&&(o=n),n>c&&(c=n),r<s&&(s=r),r>l&&(l=r)}o=Math.max(0,o-Yn),s=Math.max(0,s-Yn),c=Math.min(t-1,c+Yn),l=Math.min(n-1,l+Yn);let u=[];for(let i of r){let r=i%t,a=(i-r)/t;for(let[i,o]of Vn){let s=r+i,c=a+o,l=c*t+s;s>=0&&c>=0&&s<t&&c<n&&e[l]===1&&u.push(l)}}if(!u.length)return!0;let d=[u[0]];i[u[0]]=a;for(let n=0;n<d.length;n++){let r=d[n],u=r%t,f=(r-u)/t;for(let[n,r]of Vn){let p=u+n,m=f+r;if(p<o||m<s||p>c||m>l)continue;let h=m*t+p;e[h]===1&&i[h]!==a&&(i[h]=a,d.push(h))}}return u.every(e=>i[e]===a)}function Zn(e,t,n,r){let i=[],a=new Uint8Array(t*n),o=t=>e[t]===2||e[t]===3;for(let e=0;e<t*n;e++){if(a[e]||!o(e))continue;let s=[],c=[e];for(a[e]=1;c.length;){let e=c.pop(),r=e%t,i=(e-r)/t;s.push(e);for(let[e,s]of Vn){let l=r+e,u=i+s,d=u*t+l;l>=0&&u>=0&&l<t&&u<n&&!a[d]&&o(d)&&(a[d]=1,c.push(d))}}let l=Ot(B(r,1,e)),u=l.int(4);for(let e of s)l()<.6&&i.push({x:e%t,y:(e-e%t)/t,prop:l()<.75?u:l.int(4)})}let s=(r,i)=>r>=0&&i>=0&&r<t&&i<n&&e[i*t+r]===1;for(let a=0;a<n;a++)for(let n=0;n<t;n++){if(e[a*t+n]!==0||!Vn.some(([e,t])=>s(n+e,a+t)))continue;let o=B(r,2,Math.floor(n/3),Math.floor(a/3));Dt(o)<.4&&i.push({x:n,y:a,prop:B(o,3)%4})}let c=(e,t)=>s(e,t+1)?0:s(e+1,t)?90:s(e-1,t)?-90:s(e,t-1)?180:0;return i.map(e=>({...e,facing:c(e.x,e.y)}))}function Qn(e,t,n,r,i){let a=[];for(let o=1;o<n-1;o++)for(let n=1;n<t-1;n++){if(e[o*t+n]!==1||r.some(([e,t])=>Math.abs(n-e)<=2&&Math.abs(o-t)<=2))continue;let s=!0;for(let r=-1;r<=1&&s;r++)for(let i=-1;i<=1;i++)if(e[(o+r)*t+n+i]!==1){s=!1;break}if(!s)continue;let c=Ot(B(i,n,o));c()<1/28&&a.push({x:n+c.range(-.25,.25),y:o+c.range(-.25,.25),prop:c.int(4),turn:c.range(-40,40),scale:c.range(.85,1.15)})}return a}function $n(e,t,n){return[(t+e.x0)/kn,(n+e.y0)/kn]}function er(e,t,n){return t>=0&&n>=0&&t<e.w&&n<e.h&&e.cells[n*e.w+t]===1}var tr=e=>({kind:e,participants:[],left:null});function nr(e,t){return t<=1?e===`dragon`?3:2:e===`dragon`?De.gatherDragon:De.gatherBoss}function rr(e,t,n){e.participants.includes(t)||(e.participants.push(t),e.left=nr(e.kind,n))}function ir(e,t){e.participants=e.participants.filter(e=>e!==t),e.participants.length||(e.left=null)}function ar(e,t,n){if(e.left===null||(e.left=Math.max(0,e.left-t),e.left>0))return{start:null,missing:[]};let r=e.kind===`dragon`?n.filter(t=>!e.participants.includes(t)):[];if(r.length)return e.left=nr(e.kind,n.length),{start:null,missing:r};let i=[...e.participants];return e.participants=[],e.left=null,{start:i,missing:[]}}function or(e){let t=A;return e.hp/t.hp+e.atk/t.atk+e.def/t.def+e.agi/t.agi+e.luc/t.luc}function sr(e){let t=ue/Math.max(1,or(e)),n={...e};for(let i of r)n[i]=Math.max(1,Math.round(e[i]*t));return n}function cr(e,t,n){let r=lr(e,t,n,1),i=r;for(let a=1;a<=40;a++){let o=1+Math.max(0,a-10)*fe,s=lr(e,t,B(n,7919,a),de,r.winner===e.id?[o,1]:[1,o]);if(s.winner===r.winner){i=s;break}}return{...i,damage:r.damage}}function lr(e,t,n,r,i=[1,1]){let a=Ot(n),o=bt(400),s=[e,t].map(e=>({d:e,s:sr(e.hero.stats),hp:0,max:0,hits:0,dmg:0}));s.forEach((e,t)=>{e.max=Math.max(1,Math.round(e.s.hp*i[t])),e.hp=e.max});let c=[],l=0,u=(e,t)=>{let n=s[e],i=s[1-e],u=n.hp<=D*n.max,d=_t(n.s.atk,i.s.def)*(1+E*(2*a()-1)),f=Ct(n.s,o,{lowHp:u,critRings:n.d.hero.critRings??0,build:n.d.hero.build}),p=a()<f.rate;p&&(d=wt(d,f.forK,a(),n.d.hero.critDmgRings??0));let m=Math.max(1,Math.floor(d*r));i.hp=Math.max(0,i.hp-m),n.hits++,n.dmg+=m,c.push({by:e,turn:l,combo:t,crit:p,dmg:m,hpLeft:i.hp})},d=a()<.5?0:1;for(let e=0;e<120&&s[0].hp>0&&s[1].hp>0;e++,d=1-d){l++,u(d,0);for(let e=1;e<12&&s[1-d].hp>0&&a()<St(s[d].s,o,{lowHp:s[d].hp<=.25*s[d].max,ring:!!s[d].d.hero.comboRing,build:s[d].d.hero.build});e++)u(d,e)}let f=s.map(e=>e.hp/e.max),p=f[0]===f[1]?s[0].dmg>=s[1].dmg?0:1:f[0]>f[1]?0:1;return{a:e.id,b:t.id,winner:s[p].d.id,hits:[s[0].hits,s[1].hits],left:f[p],damage:[s[0].dmg,s[1].dmg],maxHp:[s[0].max,s[1].max],log:c}}function ur(e,t){let n=[];for(let r=0;r<e.length;r++)for(let i=r+1;i<e.length;i++)n.push(cr(e[r],e[i],B(t,r,i)));let r=new Map(e.map(e=>[e.id,{id:e.id,wins:0,damage:0}]));for(let e of n)r.get(e.winner).wins++,r.get(e.a).damage+=e.damage[0],r.get(e.b).damage+=e.damage[1];let i=[...r.values()].sort((e,t)=>t.wins-e.wins||t.damage-e.damage);return{duels:n,standings:i,winner:i[0].id}}var dr=(e,t,n,r,i)=>({hp:i,atk:e,def:t,agi:n,luc:r}),fr=[{id:`ronin`,name:`Ronin`,weapon:`Katana`,kp:dr(2,0,2,0,0),row:0,col:0},{id:`heroe`,name:`Héroe`,weapon:`Espada pesada`,kp:dr(2,0,1,0,1),row:0,col:1},{id:`barbaro`,name:`Bárbaro`,weapon:`Hacha de guerra`,kp:dr(2,0,0,1,1),row:0,col:2},{id:`duelista`,name:`Duelista Solar`,weapon:`Espada flamígera`,kp:dr(2,0,0,2,0),row:0,col:3},{id:`picara`,name:`Pícara`,weapon:`Dagas gemelas`,kp:dr(1,0,2,0,1),row:1,col:0},{id:`monje`,name:`Monje`,weapon:`Maza de púas`,kp:dr(1,0,1,0,2),row:1,col:1},{id:`herrera`,name:`Herrera`,weapon:`Martillo`,kp:dr(1,0,0,1,2),row:1,col:2},{id:`danzarina`,name:`Danzarina`,weapon:`Abanico de guerra`,kp:dr(1,0,0,2,1),row:1,col:3},{id:`esgrimista`,name:`Esgrimista`,weapon:`Estoque`,kp:dr(0,1,2,0,1),row:2,col:0},{id:`lancero`,name:`Lancero`,weapon:`Lanza`,kp:dr(0,1,1,0,2),row:2,col:1},{id:`sanadora`,name:`Sanadora`,weapon:`Bastón con gema`,kp:dr(0,1,0,1,2),row:2,col:2},{id:`dama`,name:`Dama del Paraguas`,weapon:`Paraguas`,kp:dr(0,1,0,2,1),row:2,col:3},{id:`escudero`,name:`Escudero`,weapon:`Rodela y espada corta`,kp:dr(0,2,2,0,0),row:3,col:0},{id:`alabardero`,name:`Alabardero`,weapon:`Alabarda`,kp:dr(0,2,1,0,1),row:3,col:1},{id:`guardian`,name:`Guardián`,weapon:`Escudo torre y maza`,kp:dr(0,2,0,1,1),row:3,col:2},{id:`cocinero`,name:`Cocinero`,weapon:`Sartén y tapa`,kp:dr(0,2,0,2,0),row:3,col:3}],pr=new Map(fr.map(e=>[e.id,e]));function mr(e){let t=pr.get(e);if(!t)throw Error(`Arquetipo desconocido: `+e);return t}function hr(e){let t=mr(e);return fr.filter(e=>Math.abs(e.row-t.row)+Math.abs(e.col-t.col)===1).map(e=>e.id)}var gr=2.2,_r=6;function vr(e){let t=0;for(let n of ge)e>=n*.01&&t++;return t}function yr(e,t=e.archetype){return{kp:mr(t).kp,bpl:me+he*(e.baseLevel+vr(e.charExp[t]??0))}}function br(e,t=!1){return{world:e,phase:t?`LOBBY`:`EXPLORE`,runIndex:0,timeLeft:De.roundSeconds,explored:0,discovered:{},players:{},order:[],bossGathers:{},dragonGather:tr(`dragon`),stats:null,showdown:null,score:{},crown:null,showdownLeft:0}}function xr(e,t,n){let r=e.players[t];if(r)return r.connected=!0,r.name=n,r;let i={baseLevel:0,bossesEver:[],charExp:{},unlocked:[..._e],archetype:_e[0],unlocksLeft:0,plans:[]},a=e.order.reduce((t,n)=>Math.max(t,e.players[n].salt+1),0),o={id:t,name:n,salt:a,connected:!0,run:ln(e.world,e.runIndex,null,yr(i),a,i.plans),progress:i,history:[],pos:{zoneId:e.world.hub,x:0,y:0,facing:`s`,moving:!1},busy:!1,ready:!1};return e.players[t]=o,e.order.push(t),Me(e.discovered,e.world,e.world.hub),un(e.world,o.run,e.world.hub),o}function Sr(e){e.phase===`LOBBY`&&(e.phase=`EXPLORE`,e.timeLeft=De.roundSeconds,e.explored=0)}function Cr(e,t){let n=e.players[t];return!n||e.phase!==`LOBBY`||n.history.length?!1:(delete e.players[t],e.order=e.order.filter(e=>e!==t),delete e.score[t],e.crown===t&&(e.crown=null),!0)}function wr(e,t,n){let r=e.players[t];r&&(r.connected=n,n||(r.busy=!1,Nr(e,t)))}var Tr=e=>e.order.filter(t=>e.players[t].connected);function Er(e,t){e.phase===`EXPLORE`?(e.timeLeft=Math.max(0,e.timeLeft-t),e.explored+=t):e.phase===`SHOWDOWN`&&(e.showdownLeft-=t)<=0&&(e.phase=`SHOP`)}function Dr(e){if(e.phase!==`EXPLORE`||e.stats)return null;if(e.timeLeft<=0)return`time`;let t=Tr(e);return t.length&&t.every(t=>e.players[t].run.pb<=0)?`pb`:null}var Or=e=>Tr(e).some(t=>e.players[t].busy),kr=new WeakMap;function Ar(e,t){let n=kr.get(e);n||kr.set(e,n=new Map);let r=n.get(t);return r||n.set(t,r=Kn(e,t)),r}function jr(e,t,n){let r=e.players[t],i={revealed:[],encounter:null};if(!r||e.phase!==`EXPLORE`)return i;let a=r.pos;if(r.pos={...n},n.zoneId!==a.zoneId)i.revealed=Me(e.discovered,e.world,n.zoneId),un(e.world,r.run,n.zoneId),r.run.grace=10;else if(!r.busy){let o=Math.min(_r,Math.hypot(n.x-a.x,n.y-a.y));o>0&&pn(r.run,o,e.world.zones[n.zoneId])&&(i.encounter=gn(e.world,r.run,n.zoneId),r.busy=!0,Nr(e,t))}return r.busy||Pr(e,t),i}function Mr(e,t){let n=e.players[t];return!n||e.phase!==`EXPLORE`||n.busy||n.run.pb<=0||!Yt(n.run.kit).instant||!e.world.zones[n.pos.zoneId].creatures.length?null:(n.busy=!0,Nr(e,t),gn(e.world,n.run,n.pos.zoneId))}function Nr(e,t){for(let n of Object.values(e.bossGathers))ir(n,t);ir(e.dragonGather,t)}function Pr(e,t){let n=e.players[t],r=e.world.zones[n.pos.zoneId],i=Tr(e).length,a=t=>{let i=Ar(e.world,r.id).anchor;return Math.hypot(n.pos.x-i[0],n.pos.y-i[1])<t};n.leaveCircle&&!a(3)&&(n.leaveCircle=!1);let o=n.run.pb>0&&!n.leaveCircle;for(let[n,i]of Object.entries(e.bossGathers))+n!==r.boss&&ir(i,t);if(r.boss!==void 0){let s=e.bossGathers[r.boss]??=tr(`boss`);o&&!n.run.defeatedBosses.includes(r.boss)&&a(2.2)?rr(s,t,i):ir(s,t)}r.isLair&&o&&a(3)?rr(e.dragonGather,t,i):ir(e.dragonGather,t)}function Fr(e,t){let n={fights:[],dragonMissing:[]};if(e.phase!==`EXPLORE`)return n;let r=Tr(e);for(let[i,a]of Object.entries(e.bossGathers)){let o=ar(a,t,r);o.start&&n.fights.push({encounter:_n(e.world,e.players[o.start[0]].run,+i,vn(e.world,e.runIndex,+i,e.order.length)),participants:o.start})}let i=ar(e.dragonGather,t,r);i.start&&n.fights.push({encounter:Sn(e.world,e.players[i.start[0]].run,i.start.length),participants:i.start}),n.dragonMissing=i.missing;for(let t of n.fights)for(let n of t.participants)e.players[n].busy=!0,e.players[n].leaveCircle=!0,Nr(e,n);return n}function Ir(e,t){let n=e.players[t];return!n||e.phase!==`EXPLORE`||n.busy||e.stats?!1:(n.run.quitPb=(n.run.quitPb??0)+n.run.pb,n.run.pb=0,Nr(e,t),!0)}function Lr(e,t){e.players[t]&&(e.players[t].busy=!1)}function Rr(e,t){let n={};for(let r of e.order){let i=e.players[r],a=i.run,o=i.progress,s=o.archetype,c=o.baseLevel,l=vr(o.charExp[s]??0),u=a.defeatedBosses.filter(e=>!o.bossesEver.includes(e));u.length&&o.baseLevel<9&&o.baseLevel++,o.bossesEver.push(...u),o.charExp[s]=(o.charExp[s]??0)+a.hero.level,o.unlocksLeft=1;let d={runIndex:e.runIndex,reason:a.quitPb===void 0?t:`quit`,archetype:s,level:a.hero.level,deepestRing:a.deepestRing,peakZoneLevel:a.peakZoneLevel,zones:a.zones.length,wins:a.wins,losses:a.losses,bosses:a.defeatedBosses.length,goldEarned:a.goldEarned,loot:[...a.loot],plans:[...a.plansFound],baseLevel:[c,o.baseLevel],charLevel:[l,vr(o.charExp[s])],startedWith:i.history.length?i.history[i.history.length-1].kept:null,kept:null,seconds:e.explored,pbSpent:a.pbSpent,pbGained:a.pbGained,pbLeft:a.pb+(a.quitPb??0),lastZone:i.pos.zoneId};i.history.push(d),i.busy=!1,i.leaveCircle=!1,i.ready=!1,n[r]=d}e.bossGathers={},e.dragonGather=tr(`dragon`);let r=Tr(e);return r.length>=2?(e.showdown=ur(r.map(t=>({id:t,hero:dn(e.players[t].run)})),B(e.world.S,9200,e.runIndex)),e.score[e.showdown.winner]=(e.score[e.showdown.winner]??0)+1,e.crown=e.showdown.winner,e.showdownLeft=pe(r.length),e.phase=`SHOWDOWN`):(e.showdown=null,e.phase=`SHOP`),n}function zr(e,t){let n=e.players[t]?.progress;return n&&e.phase===`SHOP`?Br(n):[]}function Br(e){return e.unlocksLeft<=0?[]:[...new Set(e.unlocked.flatMap(hr))].filter(t=>!e.unlocked.includes(t))}function Vr(e,t,n){if(!zr(e,t).includes(n))return!1;let r=e.players[t].progress;return r.unlocked.push(n),r.unlocksLeft--,!0}function Hr(e,t,n){let r=e.players[t]?.progress;return!r||e.phase!==`SHOP`||!r.unlocked.includes(n)?!1:(r.archetype=n,!0)}function Ur(e,t,n){e.players[t]&&e.phase===`SHOP`&&(e.players[t].ready=n)}var Wr=e=>e.phase===`SHOP`&&Tr(e).every(t=>e.players[t].ready);function Gr(e){e.runIndex++;for(let t of e.order){let n=e.players[t],r=Ht(n.run);n.history.length&&(n.history[n.history.length-1].kept=r),n.run=ln(e.world,e.runIndex,r,yr(n.progress),n.salt,n.progress.plans),un(e.world,n.run,e.world.hub),n.progress.unlocksLeft=0,n.pos={zoneId:e.world.hub,x:0,y:0,facing:`s`,moving:!1},n.busy=!1,n.leaveCircle=!1,n.ready=!1}e.timeLeft=De.roundSeconds,e.explored=0,e.phase=`EXPLORE`}function Kr(e){let{world:t,...n}=e;return structuredClone(n)}function qr(e,t,n){let r=e.players,i=e.order;Object.assign(e,structuredClone(t));for(let t of i){if(e.players[t])continue;let n=r[t];n.run=ln(e.world,e.runIndex,null,yr(n.progress),n.salt,n.progress.plans),un(e.world,n.run,e.world.hub),n.pos={zoneId:e.world.hub,x:0,y:0,facing:`s`,moving:!1},n.ready=!1,n.leaveCircle=!1,e.players[t]=n,e.order.push(t)}for(let t of e.order)e.players[t].connected=n(t),e.players[t].busy=!1}function Jr(e){let t=e.order.map(t=>e.players[t]),n=e=>t.reduce((t,n)=>t+e(n),0);return e.phase=`END`,e.stats={rounds:e.runIndex+1,wins:n(e=>e.history.reduce((e,t)=>e+t.wins,0)+e.run.wins),losses:n(e=>e.history.reduce((e,t)=>e+t.losses,0)+e.run.losses),bosses:n(e=>e.history.reduce((e,t)=>e+t.bosses,0)+e.run.defeatedBosses.length),loot:n(e=>e.history.reduce((e,t)=>e+t.loot.length,0)+e.run.loot.length),zonesKnown:Object.values(e.discovered).filter(e=>e===`visited`).length,archetypes:Math.max(...t.map(e=>e.progress.unlocked.length)),party:t.map(t=>({name:t.name,archetype:t.progress.archetype,level:t.run.hero.level,score:e.score[t.id]??0}))},e.stats}var Yr=`inflation-coop-save`,Xr=e=>e.phase===`SHOP`&&!e.stats;function Zr(e,t){return Xr(e)?{kind:Yr,version:1,...t,tuning:{...t.tuning},runIndex:e.runIndex+1,discovered:Object.entries(e.discovered).map(([e,t])=>[+e,t]),players:e.order.map(t=>{let n=e.players[t],r=Ht(n.run),i=structuredClone(n.history);return i.length&&(i[i.length-1].kept=r),{name:n.name,salt:n.salt,progress:{...structuredClone(n.progress),unlocksLeft:0},history:i,kept:r,score:e.score[t]??0,crown:e.crown===t}})}:null}var Qr=e=>`g`+e;function $r(e,t,n){let r=br(e,n);r.runIndex=t.runIndex;for(let[e,n]of t.discovered)r.discovered[e]=n;return Me(r.discovered,e,e.hub),t.players.forEach((n,i)=>{let a=Qr(i),o={...structuredClone(n.progress),unlocksLeft:0};o.plans=[];for(let e of[...n.progress.plans??[],...t.plans??[],...n.progress.floor??[]])!o.plans.includes(e)&&Ke.some(t=>t.id===e&&t.plan)&&o.plans.push(e);delete o.floor;let s={id:a,name:n.name,salt:n.salt,connected:!1,run:ln(e,t.runIndex,n.kept,yr(o),n.salt,o.plans),progress:o,history:structuredClone(n.history),pos:{zoneId:e.hub,x:0,y:0,facing:`s`,moving:!1},busy:!1,ready:!1};un(e,s.run,e.hub),r.players[a]=s,r.order.push(a),n.score&&(r.score[a]=n.score),n.crown&&(r.crown=a)}),r}function ei(e){let t;try{t=JSON.parse(e)}catch{return`kind`}let n=t;return!n||typeof n!=`object`||n.kind!==`inflation-coop-save`?`kind`:n.version===1?typeof n.seedCode==`string`&&typeof n.fingerprint==`string`&&typeof n.runIndex==`number`&&Array.isArray(n.discovered)&&Array.isArray(n.players)&&n.players.length>0&&n.players.every(e=>e&&typeof e.name==`string`&&e.progress&&Array.isArray(e.history))?n:`kind`:`version`}var ti=matchMedia(`(prefers-reduced-motion: reduce)`).matches,ni=()=>ti;function ri(e){ti=e,document.documentElement.classList.toggle(`reduce-motion`,e)}ri(ti);var ii=[{id:`es`,name:`Español`},{id:`en`,name:`English`}],ai=typeof location<`u`?new URLSearchParams(location.search).get(`idioma`):null,oi=ii.some(e=>e.id===ai)?ai:`es`,si=[],ci=()=>oi;function li(e){if(e!==oi){oi=e,typeof document<`u`&&(document.documentElement.lang=e);for(let e of si)e()}}function ui(e){si.push(e)}function di(e){return()=>e[oi]}function fi(e,t=0){let[n,r]=oi===`es`?[`.`,`,`]:[`,`,`.`],i=e<0,[a,o]=Math.abs(e).toFixed(t).split(`.`);return(i?`−`:``)+a.replace(/\B(?=(\d{3})+(?!\d))/g,n)+(o?r+o:``)}function pi(e,t=0){return fi(e*100,t)+(oi===`es`?` %`:`%`)}typeof document<`u`&&(document.documentElement.lang=oi);var mi=di({es:{title:`Fotogramas por segundo y ping. Con un solo jugador no hay red y el ping no se mide.`},en:{title:`Frames per second and ping. In single player there is no network, so ping is not measured.`}}),hi=()=>null;function gi(e){let t=document.createElement(`b`),n=document.createElement(`b`);e.replaceChildren(t,document.createTextNode(` fps · ping `),n),e.title=mi().title,ui(()=>{e.title=mi().title});let r=0,i=performance.now(),a=e=>{if(r++,e-i>=500){let a=Math.round(r*1e3/(e-i));t.textContent=String(a),t.dataset.tone=a>=50?`ok`:a>=30?`mid`:`low`;let o=hi();n.textContent=o===null?`—`:Math.round(o)+` ms`,n.dataset.tone=o===null?``:o<=80?`ok`:o<=200?`mid`:`low`,r=0,i=e}requestAnimationFrame(a)};requestAnimationFrame(a)}function _i(e,t){switch(t.a){case`buy`:if(!It(e,t.id))return!1;if(t.autoEquip){let n=z(t.id),r=n.slot===`acc`?e.kit.acc[t.slot??e.kit.acc.indexOf(null)]??null:e.kit[n.slot];(r==null||z(r).start)&&zt(e,t.id,t.slot)}return!0;case`equip`:return zt(e,t.id,t.slot),!0;case`unequip`:return Bt(e,t.slot),!0;case`buySlot`:return Lt(e);case`keep`:return Vt(e,t.id),!0;case`allocate`:return ft(e.hero,t.plan);default:return!1}}function vi(e,t,n){let r=e.players[t];if(!r)return!1;switch(n.a){case`unlock`:return Vr(e,t,n.archetype);case`choose`:return Hr(e,t,n.archetype);case`ready`:return Ur(e,t,n.ready),!0;case`fightDone`:return Lr(e,t),!0;case`quit`:return Ir(e,t);default:return e.phase!==`EXPLORE`&&e.phase!==`SHOP`?!1:_i(r.run,n)}}var yi=1e3,bi=1e4,xi=25e3,Si=.1,Ci=class{session;links=new Map;snapT=0;gatherSent=new Map;timer=null;heard=new Map;clock=0;roundStart=null;paused=!1;onChange=()=>{};opts;tuning;loadedSave;constructor(e,t){this.opts=e,this.tuning=I(e.tuning),this.loadedSave=e.save??null,this.session=e.save?$r(e.world,e.save,e.lobby):br(e.world,e.lobby),this.session.phase===`EXPLORE`&&(this.roundStart=Kr(this.session)),this.addEndpoint(t)}saveFile(e){let t=this.opts;return Zr(this.session,{seedCode:t.seedCode,mapOpts:t.mapOpts,fingerprint:t.fingerprint,tuning:this.tuning,savedAt:e,...t.roomCode?{roomCode:t.roomCode}:{}})}addEndpoint(e){e.onConnect(e=>this.accept(e))}forceEncounter(e,t=0,n=[],r=[],i=!1,a=0){let o=this.session.players[e];if(!o||o.busy||this.session.phase!==`EXPLORE`)return;o.busy=!0;let s=this.opts.world.zones[o.pos.zoneId].boss,c=i&&s!==void 0?_n(this.opts.world,o.run,s,a):gn(this.opts.world,o.run,o.pos.zoneId);if(!t){this.resolveSolo(e,c);return}let l=o.run,u={pbBefore:l.pb,goldBefore:l.gold,expBefore:l.hero.exp},d=[l,...Array.from({length:t},()=>structuredClone(l))],f=Dn(this.opts.world,d,c)[0];f.partyNames=[o.name,...d.slice(1).map((e,t)=>n[t]??`Aliado `+(t+1))];let p=fr.map(e=>e.id).filter(e=>e!==o.progress.archetype);f.partyArchetypes=[o.progress.archetype,...d.slice(1).map((e,t)=>r[t]??p[t%p.length])],this.send(e,{t:`fightLog`,v:9,result:f,ctx:{...u,pbAfter:l.pb}}),this.sendMe(e)}holdsClock(){return this.paused&&this.session.phase===`EXPLORE`&&Tr(this.session).length<=1}start(){let e=performance.now();this.timer=setInterval(()=>{let t=performance.now();this.step(Math.min(1,(t-e)/1e3)),e=t},50)}stop(){this.timer&&clearInterval(this.timer),this.timer=null}begin(){this.session.phase===`LOBBY`&&(Sr(this.session),this.roundStart=Kr(this.session),this.sendPhase())}canRestart(){return this.session.phase===`EXPLORE`&&!!this.roundStart&&!Or(this.session)}restartRound(){if(!this.canRestart())return!1;let e=this.session;qr(e,this.roundStart,e=>this.links.has(e)),this.gatherSent.clear();let t=Object.entries(e.discovered).map(([e,t])=>[+e,t]);for(let n of this.links.keys())this.send(n,{t:`restart`,v:9,runIndex:e.runIndex,timeLeftMs:Math.round(e.timeLeft*1e3),discovered:t,me:this.me(n)});return this.broadcastSnap(),this.onChange(),!0}accept(e){let t=null;e.onMessage(n=>{let r=n;if(r&&typeof r==`object`){if(r.v!==9){e.send({t:`reject`,v:9,reason:`version`}),e.close();return}if(r.t===`join`){t||=this.join(e,String(r.id).slice(0,40),String(r.name||``).trim().slice(0,16)||`Jugador`);return}t&&this.links.get(t)===e&&(this.heard.has(t)&&this.heard.set(t,this.clock),r.t===`bye`?this.drop(t):r.t!==`ping`&&this.handle(t,r))}}),e.onClose(()=>{t&&this.links.get(t)===e&&this.drop(t)})}join(e,t,n){let r=this.session;if(!r.players[t]){let e=e=>r.players[e].name===n,i=r.order.find(t=>e(t)&&!r.players[t].connected)??r.order.find(t=>e(t)&&this.silentFor(t)>=6);i&&(t=i)}let i=this.links.get(t);this.links.set(t,e),e.local?this.heard.delete(t):this.heard.set(t,this.clock),i&&i!==e&&i.close();let a=e=>r.order.some(n=>n!==t&&r.players[n].connected&&r.players[n].name===e),o=n;for(let e=2;a(o);e++)o=n.slice(0,15-String(e).length)+` `+e;return xr(r,t,o),this.welcome(t),this.broadcastSnap(),this.onChange(),t}silentFor(e){let t=this.heard.get(e);return t===void 0?0:this.clock-t}drop(e){let t=this.links.get(e);this.links.delete(e),this.heard.delete(e),t?.close(),Cr(this.session,e)||wr(this.session,e,!1),this.broadcastSnap(),this.onChange()}handle(e,t){let n=this.session;if(t.t===`pos`){let r=jr(n,e,{zoneId:t.zoneId|0,x:+t.x,y:+t.y,facing:t.facing,moving:!!t.moving});r.revealed.length&&this.broadcast({t:`reveal`,v:9,zones:r.revealed.map(e=>[e,n.discovered[e]])}),r.encounter&&this.resolveSolo(e,r.encounter)}else if(t.t===`intent`&&t.intent.a===`fightNow`){let t=Mr(n,e);t&&this.resolveSolo(e,t)}else t.t===`intent`&&(vi(n,e,t.intent)&&this.sendMe(e),(t.intent.a===`ready`||t.intent.a===`choose`)&&this.broadcastSnap(),this.onChange())}step(e){this.clock+=Math.min(e,1);let t=this.session.phase===`LOBBY`?8:20;for(let e of[...this.heard.keys()])this.silentFor(e)>t&&this.drop(e);this.session.phase!==`END`&&this.advance(e),(this.snapT+=e)>=Si&&(this.snapT=0,this.broadcastSnap())}advance(e){let t=this.session,n=t.phase;this.holdsClock()||Er(t,e),n===`SHOWDOWN`&&t.phase===`SHOP`&&(this.sendPhase(),this.broadcastSnap());let r=Fr(t,e);for(let e of r.fights)this.resolveGroup(e);this.sendGathers(r.dragonMissing);let i=Dr(t);if(i&&!Or(t)){Rr(t,i),t.showdown&&this.broadcast({t:`showdown`,v:9,result:t.showdown,score:t.score}),this.sendPhase();for(let e of this.links.keys())this.sendMe(e);this.broadcastSnap()}else if(Wr(t)&&Tr(t).length){Gr(t),this.roundStart=Kr(t),this.sendPhase();for(let e of this.links.keys())this.sendMe(e)}}resolveSolo(e,t){let n=this.session.players[e].run,r={pbBefore:n.pb,goldBefore:n.gold,expBefore:n.hero.exp},i=En(this.opts.world,n,t);this.send(e,{t:`fightLog`,v:9,result:i,ctx:{...r,pbAfter:n.pb}}),this.sendMe(e)}resolveGroup(e){let t=this.session,n=e.participants.map(e=>t.players[e].run),r=n.map(e=>({pbBefore:e.pb,goldBefore:e.gold,expBefore:e.hero.exp})),i=Dn(this.opts.world,n,e.encounter);if(n.length>1){let n=e.participants.map(e=>t.players[e].name),r=e.participants.map(e=>t.players[e].progress.archetype);for(let e of i)e.partyNames=n,e.partyArchetypes=r}if(e.participants.forEach((e,t)=>{this.send(e,{t:`fightLog`,v:9,result:i[t],ctx:{...r[t],pbAfter:n[t].pb}}),this.sendMe(e)}),e.encounter.kind===`dragon`&&i[0].log.win){let e=Jr(t);this.broadcast({t:`end`,v:9,stats:e}),this.sendPhase()}}sendGathers(e){let t=this.session,n=new Set,r=(e,t,r,i,a)=>{n.add(e);let o=i.participants.join(`,`)+`|`+(i.left===null?`-`:Math.ceil(i.left))+`|`+a.join(`,`);this.gatherSent.get(e)!==o&&(this.gatherSent.set(e,o),this.broadcast({t:`gather`,v:9,kind:t,zoneId:r,participants:i.participants,leftMs:i.left===null?null:Math.round(i.left*1e3),missing:a}))};for(let[e,n]of Object.entries(t.bossGathers))n.participants.length&&r(`b`+e,`boss`,t.world.bosses[+e].zone,n,[]);(t.dragonGather.participants.length||e.length)&&r(`dragon`,`dragon`,t.world.lair,t.dragonGather,e);for(let e of[...this.gatherSent.keys()])if(!n.has(e)){this.gatherSent.delete(e);let n=e===`dragon`;this.broadcast({t:`gather`,v:9,kind:n?`dragon`:`boss`,zoneId:n?t.world.lair:t.world.bosses[+e.slice(1)].zone,participants:[],leftMs:null,missing:[]})}}me(e){let t=this.session.players[e];return{run:t.run,progress:t.progress,history:t.history}}views(){let e=this.session;return e.order.map(t=>{let n=e.players[t];return{id:t,name:n.name,connected:n.connected,zoneId:n.pos.zoneId,x:n.pos.x,y:n.pos.y,facing:n.pos.facing,moving:n.pos.moving,busy:n.busy,archetype:n.progress.archetype,ready:n.ready,score:e.score[t]??0,crown:e.crown===t}})}welcome(e){let t=this.session,n=this.opts;this.send(e,{t:`welcome`,v:9,you:e,seedCode:n.seedCode,mapOpts:n.mapOpts,fingerprint:n.fingerprint,phase:t.phase,runIndex:t.runIndex,timeLeftMs:Math.round(t.timeLeft*1e3),discovered:Object.entries(t.discovered).map(([e,t])=>[+e,t]),players:this.views(),me:this.me(e),tuning:{...this.tuning}}),t.stats&&this.send(e,{t:`end`,v:9,stats:t.stats})}sendMe(e){this.send(e,{t:`me`,v:9,me:this.me(e)})}sendPhase(){let e=this.session;this.broadcast({t:`phase`,v:9,phase:e.phase,runIndex:e.runIndex,timeLeftMs:Math.round(e.timeLeft*1e3)})}broadcastSnap(){this.broadcast({t:`snap`,v:9,players:this.views(),timeLeftMs:Math.round(this.session.timeLeft*1e3)})}send(e,t){this.links.get(e)?.send(t)}broadcast(e){for(let t of this.links.values())t.send(e)}};function wi(e,t){for(let n of Object.keys(e))n in t||delete e[n];return Object.assign(e,t),e}var Ti=class{id;me=null;players=[];phase=`LOBBY`;runIndex=0;timeLeft=0;discovered={};gathers=new Map;stats=null;showdown=null;score={};link;seq=0;cbs={};beat;heardAt=performance.now();gone=!1;constructor(e,t,n,{pingMs:r=yi,hostTimeoutMs:i=0}={}){this.link=e,this.id=t,e.onMessage(e=>{this.gone||(this.heardAt=performance.now(),this.receive(e))}),e.onClose(()=>this.lost()),this.out({t:`join`,v:9,id:t,name:n});let a=performance.now();this.beat=setInterval(()=>{let e=performance.now();e-a>3*r&&(this.heardAt=e),a=e;let t=this.phase===`LOBBY`?Math.min(i,bi):i;t&&e-this.heardAt>t?this.lost():this.out({t:`ping`,v:9})},r),this.beat.unref?.()}on(e,t){(this.cbs[e]??=[]).push(t)}emit(e,...t){for(let n of this.cbs[e]??[])n(...t)}out(e){this.link.send(e)}sendPos(e){this.out({t:`pos`,v:9,zoneId:e.zoneId,x:Math.round(e.x*100)/100,y:Math.round(e.y*100)/100,facing:e.facing,moving:e.moving,seq:++this.seq})}intent(e){this.me&&_i(this.me.run,e),this.out({t:`intent`,v:9,intent:e})}tick(e){this.phase===`EXPLORE`&&(this.timeLeft=Math.max(0,this.timeLeft-e))}close(){this.lost()}leave(){this.gone||this.out({t:`bye`,v:9}),this.lost()}lost(){this.gone||(this.gone=!0,clearInterval(this.beat),this.link.close(),this.emit(`close`))}setMe(e){this.me?(wi(this.me.run,e.run),this.me.progress=e.progress,this.me.history=e.history):this.me=e,this.emit(`me`,this.me)}receive(e){if(e&&typeof e==`object`)switch(e.t){case`welcome`:this.id=e.you,I(e.tuning),this.phase=e.phase,this.runIndex=e.runIndex,this.timeLeft=e.timeLeftMs/1e3,this.players=e.players;for(let[t,n]of e.discovered)this.discovered[t]=n;this.setMe(e.me),this.emit(`welcome`,e);break;case`reject`:this.emit(`reject`,e.reason);break;case`me`:this.setMe(e.me);break;case`fightLog`:this.emit(`fight`,e.result,e.ctx);break;case`reveal`:for(let[t,n]of e.zones)this.discovered[t]=n;this.emit(`reveal`,e.zones.map(([e])=>e));break;case`phase`:{let t=this.phase;this.phase=e.phase,this.runIndex=e.runIndex,this.timeLeft=e.timeLeftMs/1e3,this.emit(`phase`,e.phase,t);break}case`snap`:this.players=e.players,Math.abs(this.timeLeft-e.timeLeftMs/1e3)>.5&&(this.timeLeft=e.timeLeftMs/1e3),this.emit(`snap`,e.players);break;case`gather`:{let t={kind:e.kind,zoneId:e.zoneId,participants:e.participants,left:e.leftMs===null?null:e.leftMs/1e3,missing:e.missing},n=e.kind+`:`+e.zoneId;t.left===null&&!t.missing.length?this.gathers.delete(n):this.gathers.set(n,t),this.emit(`gather`,t);break}case`showdown`:this.showdown=e.result,this.score=e.score,this.emit(`showdown`,e.result,e.score);break;case`end`:this.stats=e.stats,this.emit(`end`,e.stats);break;case`restart`:this.runIndex=e.runIndex,this.timeLeft=e.timeLeftMs/1e3;for(let e of Object.keys(this.discovered))delete this.discovered[+e];for(let[t,n]of e.discovered)this.discovered[t]=n;this.gathers.clear(),this.setMe(e.me),this.emit(`restart`)}}},Ei=class{msgCbs=[];closeCbs=[];closed=!1;local=!1;out;onLocalClose;constructor(e,t=()=>{}){this.out=e,this.onLocalClose=t}send(e){this.closed||this.out(e)}onMessage(e){this.msgCbs.push(e)}onClose(e){this.closeCbs.push(e)}deliver(e){if(!this.closed)for(let t of this.msgCbs)t(e)}shut(){if(!this.closed){this.closed=!0;for(let e of this.closeCbs)e()}}close(){this.onLocalClose(),this.shut()}},Di=class{cbs=[];local;constructor(e=!0){this.local=e}onConnect(e){this.cbs.push(e)}close(){}connect(){let e=e=>setTimeout(e,0),t,n;t=new Ei(t=>{let r=JSON.stringify(t);e(()=>n.deliver(JSON.parse(r)))},()=>e(()=>n.shut())),n=new Ei(n=>{let r=JSON.stringify(n);e(()=>t.deliver(JSON.parse(r)))},()=>e(()=>t.shut())),t.local=this.local;for(let e of this.cbs)e(t);return n}},Oi=()=>Array.from(crypto.getRandomValues(new Uint8Array(8)),e=>e.toString(16).padStart(2,`0`)).join(``),ki=class{ch;links=new Map;cbs=[];constructor(e){this.ch=new BroadcastChannel(`rpgr-`+e),this.ch.onmessage=e=>{let t=e.data;if(!(t.to&&t.to!==`host`)){if(t.k===`hello`&&!this.links.has(t.from)){let e=new Ei(e=>this.ch.postMessage({k:`msg`,from:`host`,to:t.from,data:e}),()=>{this.ch.postMessage({k:`bye`,from:`host`,to:t.from}),this.links.delete(t.from)});this.links.set(t.from,e);for(let t of this.cbs)t(e)}else t.k===`msg`?this.links.get(t.from)?.deliver(t.data):t.k===`bye`&&(this.links.get(t.from)?.shut(),this.links.delete(t.from))}}}onConnect(e){this.cbs.push(e)}close(){for(let e of this.links.values())e.close();this.ch.close()}};function Ai(e){let t=Oi(),n=new BroadcastChannel(`rpgr-`+e),r=new Ei(e=>n.postMessage({k:`msg`,from:t,to:`host`,data:e}),()=>{n.postMessage({k:`bye`,from:t,to:`host`}),n.close()});return n.onmessage=e=>{let i=e.data;i.to===t&&(i.k===`msg`?r.deliver(i.data):i.k===`bye`&&(r.shut(),n.close()))},n.postMessage({k:`hello`,from:t}),r}var ji=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`,Mi=()=>Array.from(crypto.getRandomValues(new Uint8Array(5)),e=>ji[e%32]).join(``),Ni=e=>e.toUpperCase().replace(/[^A-Z0-9]/g,``).slice(0,5),Pi=`rpgr-`,V=e=>document.getElementById(e),Fi=e=>fi(e),H=new URLSearchParams(location.search),Ii=H.has(`debug`),U=di({es:{aGame:`Vista de exploración`,aPerf:`Rendimiento`,aZone:`Zona actual`,aMiniOut:`Alejar el minimapa`,aMiniIn:`Acercar el minimapa`,hudRec:`NIVEL RECOMENDADO`,hudTime:`TIEMPO`,hudLevel:`NIVEL`,hudPb:`PB`,hudGold:`ORO`,hudGauge:`ENCUENTRO`,btnAttrs:`Atributos`,btnGear:`Equipo`,kMap:`Mapa`,kHelp:`Ayuda`,kFight:`Combatir`,mapTitle:`Mapa compartido`,mapVisited:`Visitada`,mapSeen:`Vista`,mapBoss:`Jefe`,mapYou:`Usted`,close:`Cerrar`,mapExit:`Salida`,mapRoute:`Ruta`,riskSafe:`Fácil`,riskEven:`Parejo`,riskDanger:`Difícil`,mapColorBiome:`Color por bioma`,mapColorRisk:`Color por riesgo`,mapClear:`Quitar todas`,mapHint:`Rueda o + y -: acercar y alejar`,tipLevel:`Nivel recomendado`,tipUnknown:`Sin explorar`,tipBoss:`Hay un jefe`,tipCamp:`Punto de partida de cada ronda`,trayTitle:`Pegatinas`,trayHint:`Arrástrelas al mapa para dibujar su camino. Los números, del 1 al 5, marcan la ruta. Solo usted las ve y se quedan entre rondas.`,trayRemove:`Para quitar una: arrástrela fuera del mapa o clic derecho.`,stickerNames:{num:`Número de la ruta`,pin:`Pin`,flag:`Bandera`,star:`Estrella`,skull:`Peligro`,chest:`Tesoro`,heart:`Favorita`,question:`Duda`,cross:`Descartada`,eye:`Vigilar`},eyebrow:`Para jugar con amigos`,docTitle:`Inflation! Coop Lite-RPG`,name:`Su nombre`,defaultName:`Jugador`,seed:`Semilla del mapa`,randomSeed:`Mapa al azar`,solo:`Jugar solo`,host:`Crear sala`,optsTitle:`Opciones de la partida`,optsHint:`Solo para pruebas. Las elige quien crea la partida y valen para toda la sala.`,optsReset:`Valores por defecto`,code:`Código de sala`,join:`Unirse`,loadSave:`Cargar partida`,unloadSave:`Quitar`,saveLoaded:(e,t)=>`Partida guardada: sigue en la ronda `+e+` con `+t+`. Cada uno entra con su nombre.`,saveBad:`El archivo no es una partida guardada de este juego.`,saveOld:`La partida guardada es de otra versión del juego.`,saveMap:`La partida guardada es de otro mapa o de otra versión del generador.`,motion:`Reducir movimiento (sacudidas, destellos y partículas)`,lang:`Idioma`,room:`Sala`,begin:`Empezar`,rotateTitle:`Gire el teléfono`,rotateBody:`El juego se juega en horizontal.`,modeFriends:`Con amigos`,orJoin:`O únase con un código`,modeSolo:`Solo`,soloHint:`El mismo mundo, a su ritmo.`,moreTitle:`Mapa y partida guardada`,copyLink:`Copiar enlace`,share:`Compartir`,leave:`Salir`,copied:`Enlace copiado. Envíelo a sus amigos.`,copyFail:`No se pudo copiar: comparta el código.`,shareText:e=>`Únase a mi sala de Inflation! Coop Lite-RPG con el código `+e+`.`,roomCount:e=>e===1?`1 jugador`:e+` jugadores`,roomInfo:(e,t,n)=>`Mapa `+e+` · Ronda de `+t+` min · `+n+` PB`,invited:e=>`Le invitaron a la sala `+e+`. Escriba su nombre y pulse Unirse.`,optRound:`Duración de la ronda`,optPb:`PB al empezar la ronda`,optBossPb:`PB que devuelve cada jefe`,optPrice:`Precios frente al juego original`,optGatherBoss:`Espera junto a un jefe (en grupo)`,optGatherDragon:`Espera junto al dragón (en grupo)`,optDragon:`Refuerzo del dragón por jugador`,optLoot:`Botín de enemigos comunes`,optPlan:`Planos de enemigos comunes`,optAffinity:`Debilidades de los jefes por build`,optExalt:`Jefes enaltecidos (frecuencia)`,optLootTag:`botín`,seedBad:e=>`La semilla no es válida. Escriba cinco caracteres, por ejemplo `+e+`.`,seedVersion:e=>`Esta semilla es de una versión del mapa que no existe (v`+e+`).`,error:`Error`,rowPrint:`Huella`,rowMap:`Mapa`,rowRoute:`Ruta al final`,rowRules:`Reglas`,rowGen:`Generación`,expected:` (la esperada)`,notExpected:` (no es la esperada)`,mapSummary:(e,t)=>e+` zonas y `+t+` jefes`,hops:e=>e+` saltos`,rules:(e,t)=>e+` de `+t+` verificadas`,opening:`Abriendo la sala...`,openFail:e=>`No se pudo abrir la sala: `+e,codeLen:`El código tiene cinco caracteres.`,connecting:e=>`Conectando con la sala `+e+`...`,connectFail:e=>`No se pudo conectar: `+e,noAnswer:`La sala no responde.`,roomLost:`Se perdió la conexión con la sala. Pulse Unirse para volver a entrar.`,otherVersion:`La sala usa otra versión del juego.`,rejected:`La sala rechazó la conexión.`,badSeed:e=>`La sala usa un mapa que no se puede generar: `+e,mismatch:(e,t)=>`Su mapa no coincide con el de la sala (huella `+e+` frente a `+t+`). Recargue la página.`,loadFail:e=>`No se pudo cargar el juego: `+e,hintHost:`Comparta el código o el enlace. Cuando estén todos, pulse Empezar.`,hintGuest:`Esperando a que el anfitrión empiece.`,you:` (usted)`,offline:` · desconectado`,lostTitle:`Se perdió la conexión con la sala`,lostBody:`Si el anfitrión cerró su página, la partida terminó. Si sigue jugando, vuelva a entrar con el mismo código y el mismo nombre: recuperará su ronda.`,lostBtn:`Volver a entrar`,noFights:`Sin combates aquí`,noPb:`Sin PB`,fighting:`¡En combate!`,watching:e=>`Sin PB: mira a <b>`+e+`</b>`,watchNext:`Tab o clic: otro compañero`,missing:e=>`Faltan: `+e,foeLevel:(e,t)=>e+` · Nivel `+t,exaltTag:(e,t)=>(e>1?`ENALTECIDO+`:`ENALTECIDO`)+` (`+t+` jugadores)`,seedTag:(e,t)=>`Semilla `+e+` · huella `+t},en:{aGame:`Exploration view`,aPerf:`Performance`,aZone:`Current zone`,aMiniOut:`Zoom the minimap out`,aMiniIn:`Zoom the minimap in`,hudRec:`RECOMMENDED LEVEL`,hudTime:`TIME`,hudLevel:`LEVEL`,hudPb:`BP`,hudGold:`GOLD`,hudGauge:`ENCOUNTER`,btnAttrs:`Attributes`,btnGear:`Gear`,kMap:`Map`,kHelp:`Help`,kFight:`Fight`,mapTitle:`Shared map`,mapVisited:`Visited`,mapSeen:`Seen`,mapBoss:`Boss`,mapYou:`You`,close:`Close`,mapExit:`Exit`,mapRoute:`Route`,riskSafe:`Easy`,riskEven:`Even`,riskDanger:`Hard`,mapColorBiome:`Color by biome`,mapColorRisk:`Color by risk`,mapClear:`Remove all`,mapHint:`Wheel or + and -: zoom in and out`,tipLevel:`Recommended level`,tipUnknown:`Unexplored`,tipBoss:`There is a boss`,tipCamp:`Starting point of every round`,trayTitle:`Stickers`,trayHint:`Drag them onto the map to draw your path. Numbers 1 to 5 mark the route. Only you can see them, and they stay between rounds.`,trayRemove:`To remove one: drag it off the map or right-click it.`,stickerNames:{num:`Route number`,pin:`Pin`,flag:`Flag`,star:`Star`,skull:`Danger`,chest:`Treasure`,heart:`Favorite`,question:`Unsure`,cross:`Ruled out`,eye:`Watch`},eyebrow:`Play it with friends`,docTitle:`Inflation! Coop Lite-RPG`,name:`Your name`,defaultName:`Player`,seed:`Map seed`,randomSeed:`Random map`,solo:`Play solo`,host:`Create room`,optsTitle:`Game options`,optsHint:`For testing only. The room creator sets them and they apply to everyone.`,optsReset:`Defaults`,code:`Room code`,join:`Join`,loadSave:`Load game`,unloadSave:`Remove`,saveLoaded:(e,t)=>`Saved game: continues at round `+e+` with `+t+`. Everyone joins with their own name.`,saveBad:`The file is not a saved game of this game.`,saveOld:`The saved game belongs to another version of the game.`,saveMap:`The saved game belongs to another map or another version of the generator.`,motion:`Reduce motion (shakes, flashes and particles)`,lang:`Language`,room:`Room`,begin:`Start`,rotateTitle:`Turn your phone`,rotateBody:`The game is played in landscape.`,modeFriends:`With friends`,orJoin:`Or join with a code`,modeSolo:`Solo`,soloHint:`The same world, at your own pace.`,moreTitle:`Map and saved game`,copyLink:`Copy link`,share:`Share`,leave:`Leave`,copied:`Link copied. Send it to your friends.`,copyFail:`Could not copy: share the code instead.`,shareText:e=>`Join my Inflation! Coop Lite-RPG room with the code `+e+`.`,roomCount:e=>e===1?`1 player`:e+` players`,roomInfo:(e,t,n)=>`Map `+e+` · `+t+`-min rounds · `+n+` BP`,invited:e=>`You were invited to room `+e+`. Type your name and press Join.`,optRound:`Round length`,optPb:`BP at round start`,optBossPb:`BP returned per boss`,optPrice:`Prices vs. the original game`,optGatherBoss:`Wait at a boss (group)`,optGatherDragon:`Wait at the dragon (group)`,optDragon:`Dragon boost per player`,optLoot:`Loot from regular enemies`,optPlan:`Blueprints from regular enemies`,optAffinity:`Boss weaknesses by build`,optExalt:`Exalted bosses (frequency)`,optLootTag:`loot`,seedBad:e=>`Invalid seed. Type five characters, for example `+e+`.`,seedVersion:e=>`This seed belongs to a map version that does not exist (v`+e+`).`,error:`Error`,rowPrint:`Fingerprint`,rowMap:`Map`,rowRoute:`Route to the end`,rowRules:`Rules`,rowGen:`Generation`,expected:` (as expected)`,notExpected:` (not the expected one)`,mapSummary:(e,t)=>e+` zones and `+t+` bosses`,hops:e=>e+` steps`,rules:(e,t)=>e+` of `+t+` passed`,opening:`Opening the room...`,openFail:e=>`Could not open the room: `+e,codeLen:`The code has five characters.`,connecting:e=>`Connecting to room `+e+`...`,connectFail:e=>`Could not connect: `+e,noAnswer:`The room is not responding.`,roomLost:`The connection to the room was lost. Press Join to get back in.`,otherVersion:`The room uses another version of the game.`,rejected:`The room refused the connection.`,badSeed:e=>`The room uses a map that cannot be generated: `+e,mismatch:(e,t)=>`Your map does not match the room (fingerprint `+e+` vs. `+t+`). Reload the page.`,loadFail:e=>`Could not load the game: `+e,hintHost:`Share the code or the link. When everyone is in, press Start.`,hintGuest:`Waiting for the host to start.`,you:` (you)`,offline:` · disconnected`,lostTitle:`Connection to the room was lost`,lostBody:`If the host closed their page, the game is over. If they are still playing, join again with the same code and the same name to get your round back.`,lostBtn:`Join again`,noFights:`No fights here`,noPb:`No BP`,fighting:`Fighting!`,watching:e=>`Out of BP: watching <b>`+e+`</b>`,watchNext:`Tab or click: next teammate`,missing:e=>`Waiting for: `+e,foeLevel:(e,t)=>e+` · Level `+t,exaltTag:(e,t)=>(e>1?`EXALTED+`:`EXALTED`)+` (`+t+` players)`,seedTag:(e,t)=>`Seed `+e+` · fingerprint `+t}});function Li(){let e=U();for(let t of Array.from(document.querySelectorAll(`[data-t]`)))t.textContent=String(e[t.dataset.t]);for(let t of Array.from(document.querySelectorAll(`[data-ta]`)))t.setAttribute(`aria-label`,String(e[t.dataset.ta]));document.title=U().docTitle}var Ri=1e3,zi=1001,Bi=1002,Vi=1003,Hi=1004,Ui=1005,Wi=1006,Gi=1007,Ki=1008,qi=1009,Ji=1010,Yi=1011,Xi=1012,Zi=1013,Qi=1014,$i=1015,ea=1016,ta=1017,na=1018,ra=1020,ia=35902,aa=35899,oa=1021,sa=1022,ca=1023,la=1026,ua=1027,da=1028,fa=1029,pa=1030,ma=1031,ha=1033,ga=33776,_a=33777,va=33778,ya=33779,ba=35840,xa=35841,Sa=35842,Ca=35843,wa=36196,Ta=37492,Ea=37496,Da=37488,Oa=37489,ka=37490,Aa=37491,ja=37808,Ma=37809,Na=37810,Pa=37811,Fa=37812,Ia=37813,La=37814,Ra=37815,za=37816,Ba=37817,Va=37818,Ha=37819,Ua=37820,Wa=37821,Ga=36492,Ka=36494,qa=36495,Ja=36283,Ya=36284,Xa=36285,Za=36286,Qa=2300,$a=2301,eo=2302,to=2303,no=2400,ro=2401,io=2402,ao=3200,oo=`srgb`,so=`srgb-linear`,co=`linear`,lo=`srgb`,uo=7680,fo=35044,po=2e3;function mo(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ho(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function go(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function _o(){let e=go(`canvas`);return e.style.display=`block`,e}var vo={};function yo(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function bo(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=bo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=bo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xo(...e){let t=e.join(` `);t in vo||(vo[t]=!0,W(...e))}function So(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Co={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},wo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},To=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Eo=Math.PI/180,Do=180/Math.PI;function Oo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(To[e&255]+To[e>>8&255]+To[e>>16&255]+To[e>>24&255]+`-`+To[t&255]+To[t>>8&255]+`-`+To[t>>16&15|64]+To[t>>24&255]+`-`+To[n&63|128]+To[n>>8&255]+`-`+To[n>>16&255]+To[n>>24&255]+To[r&255]+To[r>>8&255]+To[r>>16&255]+To[r>>24&255]).toLowerCase()}function ko(e,t,n){return Math.max(t,Math.min(n,e))}function Ao(e,t){return(e%t+t)%t}function jo(e,t,n){return(1-n)*e+n*t}function Mo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function No(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ko(this.x,e.x,t.x),this.y=ko(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ko(this.x,e,t),this.y=ko(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ko(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ko(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Po=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ko(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Io.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ko(this.x,e.x,t.x),this.y=ko(this.y,e.y,t.y),this.z=ko(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ko(this.x,e,t),this.y=ko(this.y,e,t),this.z=ko(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ko(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ko(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fo=new q,Io=new Po,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return xo(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return xo(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return xo(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new J,Ro=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zo=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bo(){let e={enabled:!0,workingColorSpace:so,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Vo(e.r),e.g=Vo(e.g),e.b=Vo(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ho(e.r),e.g=Ho(e.g),e.b=Ho(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?co:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return xo(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return xo(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[so]:{primaries:t,whitePoint:r,transfer:co,toXYZ:Ro,fromXYZ:zo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oo},outputColorSpaceConfig:{drawingBufferColorSpace:oo}},[oo]:{primaries:t,whitePoint:r,transfer:lo,toXYZ:Ro,fromXYZ:zo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oo}}}),e}var Y=Bo();function Vo(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ho(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Uo,Wo=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Uo===void 0&&(Uo=go(`canvas`)),Uo.width=e.width,Uo.height=e.height;let t=Uo.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Uo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=go(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vo(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vo(t[e]/255)*255):t[e]=Vo(t[e]);return{data:t,width:e.width,height:e.height}}return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Go=0,Ko=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Go++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qo(r[t].image)):e.push(qo(r[t]))}else e=qo(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qo(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wo.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var Jo=0,Yo=new q,Xo=class e extends wo{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=zi,i=zi,a=Wi,o=Ki,s=ca,c=qi,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=Oo(),this.name=``,this.source=new Ko(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x-=Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Bi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y-=Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Bi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xo.DEFAULT_IMAGE=null,Xo.DEFAULT_MAPPING=300,Xo.DEFAULT_ANISOTROPY=1;var Zo=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ko(this.x,e.x,t.x),this.y=ko(this.y,e.y,t.y),this.z=ko(this.z,e.z,t.z),this.w=ko(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ko(this.x,e,t),this.y=ko(this.y,e,t),this.z=ko(this.z,e,t),this.w=ko(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ko(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends wo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zo(0,0,e,t),this.scissorTest=!1,this.viewport=new Zo(0,0,e,t),this.textures=[];let r=new Xo({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$o=class extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},es=class extends Xo{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ts=class extends Xo{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ns=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),i=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(as,e,os)}lookAt(e,t,n){let r=this.elements;return ls.subVectors(e,t),ls.lengthSq()===0&&(ls.z=1),ls.normalize(),ss.crossVectors(n,ls),ss.lengthSq()===0&&(Math.abs(n.z)===1?ls.x+=1e-4:ls.z+=1e-4,ls.normalize(),ss.crossVectors(n,ls)),ss.normalize(),cs.crossVectors(ls,ss),r[0]=ss.x,r[4]=cs.x,r[8]=ls.x,r[1]=ss.y,r[5]=cs.y,r[9]=ls.y,r[2]=ss.z,r[6]=cs.z,r[10]=ls.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rs.set(r[0],r[1],r[2]).length(),o=rs.set(r[4],r[5],r[6]).length(),s=rs.set(r[8],r[9],r[10]).length();i<0&&(a=-a),is.copy(this);let c=1/a,l=1/o,u=1/s;return is.elements[0]*=c,is.elements[1]*=c,is.elements[2]*=c,is.elements[4]*=l,is.elements[5]*=l,is.elements[6]*=l,is.elements[8]*=u,is.elements[9]*=u,is.elements[10]*=u,t.setFromRotationMatrix(is),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=po,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=po,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rs=new q,is=new ns,as=new q(0,0,0),os=new q(1,1,1),ss=new q,cs=new q,ls=new q,us=new ns,ds=new Po,fs=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ko(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ko(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ko(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ko(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ko(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ko(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return us.makeRotationFromQuaternion(e),this.setFromRotationMatrix(us,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ds.setFromEuler(this),this.setFromQuaternion(ds,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fs.DEFAULT_ORDER=`XYZ`;var ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ms=0,hs=new q,gs=new Po,_s=new ns,vs=new q,ys=new q,bs=new q,xs=new Po,Ss=new q(1,0,0),Cs=new q(0,1,0),ws=new q(0,0,1),Ts={type:`added`},Es={type:`removed`},Ds={type:`childadded`,child:null},Os={type:`childremoved`,child:null},ks=class e extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ms++}),this.uuid=Oo(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new fs,r=new Po,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ns},normalMatrix:{value:new J}}),this.matrix=new ns,this.matrixWorld=new ns,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Ss,e)}rotateY(e){return this.rotateOnAxis(Cs,e)}rotateZ(e){return this.rotateOnAxis(ws,e)}translateOnAxis(e,t){return hs.copy(e).applyQuaternion(this.quaternion),this.position.add(hs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ss,e)}translateY(e){return this.translateOnAxis(Cs,e)}translateZ(e){return this.translateOnAxis(ws,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(ys,vs,this.up):_s.lookAt(vs,ys,this.up),this.quaternion.setFromRotationMatrix(_s),r&&(_s.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(_s),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ts),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Es),Os.child=e,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_s.multiply(e.parent.matrixWorld)),e.applyMatrix4(_s),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ts),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,bs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,xs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ks.DEFAULT_UP=new q(0,1,0),ks.DEFAULT_MATRIX_AUTO_UPDATE=!0,ks.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var As=class extends ks{constructor(){super(),this.isGroup=!0,this.type=`Group`}},js={type:`move`},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(js)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ns={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Is(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oo){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Y.workingColorSpace){if(e=Ao(e,1),t=ko(t,0,1),n=ko(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Is(i,r,e+1/3),this.g=Is(i,r,e),this.b=Is(i,r,e-1/3)}return Y.colorSpaceToWorking(this,r),this}setStyle(e,t=oo){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oo){let n=Ns[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oo){return Y.workingToColorSpace(Ls.copy(this),e),Math.round(ko(Ls.r*255,0,255))*65536+Math.round(ko(Ls.g*255,0,255))*256+Math.round(ko(Ls.b*255,0,255))}getHexString(e=oo){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(Ls.copy(this),t);let n=Ls.r,r=Ls.g,i=Ls.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(Ls.copy(this),t),e.r=Ls.r,e.g=Ls.g,e.b=Ls.b,e}getStyle(e=oo){Y.workingToColorSpace(Ls.copy(this),e);let t=Ls.r,n=Ls.g,r=Ls.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ps),this.setHSL(Ps.h+e,Ps.s+t,Ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ps),e.getHSL(Fs);let n=jo(Ps.h,Fs.h,t),r=jo(Ps.s,Fs.s,t),i=jo(Ps.l,Fs.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ls=new X;X.NAMES=Ns;var Rs=class extends ks{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zs=new q,Bs=new q,Vs=new q,Hs=new q,Us=new q,Ws=new q,Gs=new q,Ks=new q,qs=new q,Js=new q,Ys=new Zo,Xs=new Zo,Zs=new Zo,Qs=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zs.subVectors(e,t),r.cross(zs);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){zs.subVectors(r,t),Bs.subVectors(n,t),Vs.subVectors(e,t);let a=zs.dot(zs),o=zs.dot(Bs),s=zs.dot(Vs),c=Bs.dot(Bs),l=Bs.dot(Vs),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hs)!==null&&Hs.x>=0&&Hs.y>=0&&Hs.x+Hs.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Hs)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Hs.x),s.addScaledVector(a,Hs.y),s.addScaledVector(o,Hs.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ys.setScalar(0),Xs.setScalar(0),Zs.setScalar(0),Ys.fromBufferAttribute(e,t),Xs.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ys,i.x),a.addScaledVector(Xs,i.y),a.addScaledVector(Zs,i.z),a}static isFrontFacing(e,t,n,r){return zs.subVectors(n,t),Bs.subVectors(e,t),zs.cross(Bs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zs.subVectors(this.c,this.b),Bs.subVectors(this.a,this.b),zs.cross(Bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Us.subVectors(r,n),Ws.subVectors(i,n),Ks.subVectors(e,n);let s=Us.dot(Ks),c=Ws.dot(Ks);if(s<=0&&c<=0)return t.copy(n);qs.subVectors(e,r);let l=Us.dot(qs),u=Ws.dot(qs);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Us,a);Js.subVectors(e,i);let f=Us.dot(Js),p=Ws.dot(Js);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ws,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Gs.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Gs,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Us,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$s=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tc.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tc.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,tc):tc.fromBufferAttribute(r,t),tc.applyMatrix4(e.matrixWorld),this.expandByPoint(tc);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),nc.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tc),tc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lc),uc.subVectors(this.max,lc),rc.subVectors(e.a,lc),ic.subVectors(e.b,lc),ac.subVectors(e.c,lc),oc.subVectors(ic,rc),sc.subVectors(ac,ic),cc.subVectors(rc,ac);let t=[0,-oc.z,oc.y,0,-sc.z,sc.y,0,-cc.z,cc.y,oc.z,0,-oc.x,sc.z,0,-sc.x,cc.z,0,-cc.x,-oc.y,oc.x,0,-sc.y,sc.x,0,-cc.y,cc.x,0];return!pc(t,rc,ic,ac,uc)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,rc,ic,ac,uc))?!1:(dc.crossVectors(oc,sc),t=[dc.x,dc.y,dc.z],pc(t,rc,ic,ac,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tc).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tc).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ec[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ec[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ec[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ec[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ec[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ec[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ec[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ec[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ec),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ec=[new q,new q,new q,new q,new q,new q,new q,new q],tc=new q,nc=new $s,rc=new q,ic=new q,ac=new q,oc=new q,sc=new q,cc=new q,lc=new q,uc=new q,dc=new q,fc=new q;function pc(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){fc.fromArray(e,a);let o=i.x*Math.abs(fc.x)+i.y*Math.abs(fc.y)+i.z*Math.abs(fc.z),s=t.dot(fc),c=n.dot(fc),l=r.dot(fc);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var mc=new q,hc=new K,gc=0,_c=class extends wo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXYZ(t,mc.x,mc.y,mc.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix4(e),this.setXYZ(t,mc.x,mc.y,mc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mc.fromBufferAttribute(this,t),mc.applyNormalMatrix(e),this.setXYZ(t,mc.x,mc.y,mc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mc.fromBufferAttribute(this,t),mc.transformDirection(e),this.setXYZ(t,mc.x,mc.y,mc.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=No(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=No(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=No(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=No(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=No(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=No(t,this.array),n=No(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=No(t,this.array),n=No(n,this.array),r=No(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=No(t,this.array),n=No(n,this.array),r=No(r,this.array),i=No(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},vc=class extends _c{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yc=class extends _c{constructor(e,t,n){super(new Uint32Array(e),t,n)}},bc=class extends _c{constructor(e,t,n){super(new Float32Array(e),t,n)}},xc=new $s,Sc=new q,Cc=new q,wc=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?xc.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sc.subVectors(e,this.center);let t=Sc.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Sc,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sc.copy(e.center).add(Cc)),this.expandByPoint(Sc.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tc=0,Ec=new ns,Dc=new ks,Oc=new q,kc=new $s,Ac=new $s,jc=new q,Mc=class e extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Oo(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(mo(e)?yc:vc)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ec.makeRotationFromQuaternion(e),this.applyMatrix4(Ec),this}rotateX(e){return Ec.makeRotationX(e),this.applyMatrix4(Ec),this}rotateY(e){return Ec.makeRotationY(e),this.applyMatrix4(Ec),this}rotateZ(e){return Ec.makeRotationZ(e),this.applyMatrix4(Ec),this}translate(e,t,n){return Ec.makeTranslation(e,t,n),this.applyMatrix4(Ec),this}scale(e,t,n){return Ec.makeScale(e,t,n),this.applyMatrix4(Ec),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oc).negate(),this.translate(Oc.x,Oc.y,Oc.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new bc(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kc.setFromBufferAttribute(n),this.morphTargetsRelative?(jc.addVectors(this.boundingBox.min,kc.min),this.boundingBox.expandByPoint(jc),jc.addVectors(this.boundingBox.max,kc.max),this.boundingBox.expandByPoint(jc)):(this.boundingBox.expandByPoint(kc.min),this.boundingBox.expandByPoint(kc.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(kc.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ac.setFromBufferAttribute(n),this.morphTargetsRelative?(jc.addVectors(kc.min,Ac.min),kc.expandByPoint(jc),jc.addVectors(kc.max,Ac.max),kc.expandByPoint(jc)):(kc.expandByPoint(Ac.min),kc.expandByPoint(Ac.max))}kc.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)jc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(jc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)jc.fromBufferAttribute(a,t),o&&(Oc.fromBufferAttribute(e,t),jc.add(Oc)),r=Math.max(r,n.distanceToSquared(jc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new _c(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new _c(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jc.fromBufferAttribute(e,t),jc.normalize(),e.setXYZ(t,jc.x,jc.y,jc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new _c(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nc=new q,Pc=new q,Fc=new J,Ic=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Nc.subVectors(n,t).cross(Pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Nc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fc.getNormalMatrix(e),r=this.coplanarPoint(Nc).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lc=0,Rc=class extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Oo(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ic().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zc=new q,Bc=new q,Vc=new q,Hc=new q,Uc=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zc)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zc.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zc.copy(this.origin).addScaledVector(this.direction,t),zc.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bc.copy(e).add(t).multiplyScalar(.5),Vc.copy(t).sub(e).normalize(),Hc.copy(this.origin).sub(Bc);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Vc),o=Hc.dot(this.direction),s=-Hc.dot(Vc),c=Hc.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bc).addScaledVector(Vc,d),f}intersectSphere(e,t){if(e.radius<0)return null;zc.subVectors(e.center,this.origin);let n=zc.dot(this.direction),r=zc.dot(zc)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zc)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,te=C/w,ne=1/w,re=T-N*D,ie=E-te*D,ae=O-N*A,oe=k-te*A,se=j-N*M,ce=ee-te*M,le=se*oe-ce*ae,ue=re*ce-ie*se,de=ae*ie-oe*re;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=ne*(le*D+ue*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wc=class extends Rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gc=new ns,Kc=new Uc,qc=new wc,Jc=new q,Yc=new q,Xc=new q,Zc=new q,Qc=new q,$c=new q,el=new q,tl=new q,nl=class extends ks{constructor(e=new Mc,t=new Wc){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$c.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qc.fromBufferAttribute(s,e),a?$c.addScaledVector(Qc,r):$c.addScaledVector(Qc.sub(t),r))}t.add($c)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qc.copy(n.boundingSphere),qc.applyMatrix4(i),Kc.copy(e.ray).recast(e.near),!(qc.containsPoint(Kc.origin)===!1&&(Kc.intersectSphere(qc,Jc)===null||Kc.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Gc.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(Gc),(n.boundingBox===null||Kc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Kc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=il(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=il(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=il(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=il(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function rl(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;tl.copy(s),tl.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(tl);return l<n.near||l>n.far?null:{distance:l,point:tl.clone(),object:e}}function il(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yc),e.getVertexPosition(c,Xc),e.getVertexPosition(l,Zc);let u=rl(e,t,n,r,Yc,Xc,Zc,el);if(u){let e=new q;Qs.getBarycoord(el,Yc,Xc,Zc,e),i&&(u.uv=Qs.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Qs.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Qs.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Qs.getNormal(Yc,Xc,Zc,t.normal),u.face=t,u.barycoord=e}return u}var al=class extends Xo{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Vi,l=Vi,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ol=class extends _c{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sl=new ns,cl=new ns,ll=[],ul=new $s,dl=new ns,fl=new nl,pl=new wc,ml=class extends nl{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,dl)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $s),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sl),ul.copy(e.boundingBox).applyMatrix4(sl),this.boundingBox.union(ul)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wc),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sl),pl.copy(e.boundingSphere).applyMatrix4(sl),this.boundingSphere.union(pl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fl.geometry=this.geometry,fl.material=this.material,fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pl.copy(this.boundingSphere),pl.applyMatrix4(n),e.ray.intersectsSphere(pl)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,sl),cl.multiplyMatrices(n,sl),fl.matrixWorld=cl,fl.raycast(e,ll);for(let e=0,n=ll.length;e<n;e++){let n=ll[e];n.instanceId=i,n.object=this,t.push(n)}ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new al(new Float32Array(r*this.count),r,this.count,da,$i));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hl=new wc,gl=new K(.5,.5),_l=new q,vl=class{constructor(e=new Ic,t=new Ic,n=new Ic,r=new Ic,i=new Ic,a=new Ic){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=po,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hl.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hl)}intersectsSprite(e){return hl.center.set(0,0,0),hl.radius=.7071067811865476+gl.distanceTo(e.center),hl.applyMatrix4(e.matrixWorld),this.intersectsSphere(hl)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yl=class extends Rc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bl=new q,xl=new q,Sl=new ns,Cl=new Uc,wl=new wc,Tl=new q,El=new q,Dl=class extends ks{constructor(e=new Mc,t=new yl){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)bl.fromBufferAttribute(t,e-1),xl.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=bl.distanceTo(xl);e.setAttribute(`lineDistance`,new bc(n,1))}else W(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(r),wl.radius+=i,e.ray.intersectsSphere(wl)===!1)return;Sl.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(Sl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ol(this,e,Cl,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ol(this,e,Cl,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ol(this,e,Cl,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ol(this,e,Cl,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ol(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(bl.fromBufferAttribute(s,i),xl.fromBufferAttribute(s,a),n.distanceSqToSegment(bl,xl,Tl,El)>r)return;Tl.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Tl);if(!(c<t.near||c>t.far))return{distance:c,point:El.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var kl=new q,Al=new q,jl=class extends Dl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)kl.fromBufferAttribute(t,e),Al.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+kl.distanceTo(Al);e.setAttribute(`lineDistance`,new bc(n,1))}else W(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ml=class extends Rc{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nl=new ns,Pl=new Uc,Fl=new wc,Il=new q,Ll=class extends ks{constructor(e=new Mc,t=new Ml){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=i,e.ray.intersectsSphere(Fl)===!1)return;Nl.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(Nl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Il.fromBufferAttribute(l,n),Rl(Il,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Il.fromBufferAttribute(l,a),Rl(Il,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Rl(e,t,n,r,i,a,o){let s=Pl.distanceSqToPoint(e);if(s<n){let n=new q;Pl.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var zl=class extends Xo{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bl=class extends Xo{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vl=class extends Xo{constructor(e,t,n=Qi,r,i,a,o=Vi,s=Vi,c,l=la,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Hl=class extends Vl{constructor(e,t=Qi,n=301,r,i,a=Vi,o=Vi,s,c=la){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ul=class extends Xo{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wl=class e extends Mc{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new bc(c,3)),this.setAttribute(`normal`,new bc(l,3)),this.setAttribute(`uv`,new bc(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Gl=class e extends Mc{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new bc(a,3)),this.setAttribute(`normal`,new bc(o,3)),this.setAttribute(`uv`,new bc(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Kl=new q,ql=new q,Jl=new q,Yl=new Qs,Xl=class extends Mc{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(Eo*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Yl;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Yl.getNormal(Jl),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Yl[c[e]],o=Yl[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Jl.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Jl.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Kl.fromBufferAttribute(a,t),ql.fromBufferAttribute(a,n),d.push(Kl.x,Kl.y,Kl.z),d.push(ql.x,ql.y,ql.z)}this.setAttribute(`position`,new bc(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Zl(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ql(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=au(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return eu(a,o,n,s,c,l,0),o}function Ql(e,t,n,r,i){let a;if(i===ku(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Eu(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Eu(i/r|0,e[i],e[i+1],a);return a&&vu(a,a.next)&&(Du(a),a=a.next),a}function $l(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(vu(n,n.next)||_u(n.prev,n,n.next)===0)){if(Du(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function eu(e,t,n,r,i,a,o){if(!e)return;!o&&a&&uu(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?nu(e,r,i,a):tu(e)){t.push(c.i,e.i,l.i),Du(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=ru($l(e),t),eu(e,t,n,r,i,a,2)):o===2&&iu(e,t,n,r,i,a):eu($l(e),t,n,r,i,a,1);break}}}function tu(e){let t=e.prev,n=e,r=e.next;if(_u(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&hu(i,s,a,c,o,l,m.x,m.y)&&_u(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function nu(e,t,n,r){let i=e.prev,a=e,o=e.next;if(_u(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=fu(p,m,t,n,r),v=fu(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&hu(s,u,c,d,l,f,y.x,y.y)&&_u(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&hu(s,u,c,d,l,f,b.x,b.y)&&_u(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&hu(s,u,c,d,l,f,y.x,y.y)&&_u(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&hu(s,u,c,d,l,f,b.x,b.y)&&_u(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ru(e,t){let n=e;do{let r=n.prev,i=n.next.next;!vu(r,i)&&yu(r,n,n.next,i)&&Cu(r,i)&&Cu(i,r)&&(t.push(r.i,n.i,i.i),Du(n),Du(n.next),n=e=i),n=n.next}while(n!==e);return $l(n)}function iu(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&gu(o,e)){let s=Tu(o,e);o=$l(o,o.next),s=$l(s,s.next),eu(o,t,n,r,i,a,0),eu(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function au(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ql(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(pu(o))}i.sort(ou);for(let e=0;e<i.length;e++)n=su(i[e],n);return n}function ou(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function su(e,t){let n=cu(e,t);if(!n)return t;let r=Tu(n,e);return $l(r,r.next),$l(n,n.next)}function cu(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(vu(e,n))return n;do{if(vu(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&mu(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Cu(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&lu(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function lu(e,t){return _u(e.prev,e,t.prev)<0&&_u(t.next,e,e.next)<0}function uu(e,t,n,r){let i=e;do i.z===0&&(i.z=fu(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,du(i)}function du(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function fu(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function pu(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function mu(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function hu(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&mu(e,t,n,r,i,a,o,s)}function gu(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Su(e,t)&&(Cu(e,t)&&Cu(t,e)&&wu(e,t)&&(_u(e.prev,e,t.prev)||_u(e,t.prev,t))||vu(e,t)&&_u(e.prev,e,e.next)>0&&_u(t.prev,t,t.next)>0)}function _u(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function vu(e,t){return e.x===t.x&&e.y===t.y}function yu(e,t,n,r){let i=xu(_u(e,t,n)),a=xu(_u(e,t,r)),o=xu(_u(n,r,e)),s=xu(_u(n,r,t));return!!(i!==a&&o!==s||i===0&&bu(e,n,t)||a===0&&bu(e,r,t)||o===0&&bu(n,e,r)||s===0&&bu(n,t,r))}function bu(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function xu(e){return e>0?1:e<0?-1:0}function Su(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&yu(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Cu(e,t){return _u(e.prev,e,e.next)<0?_u(e,t,e.next)>=0&&_u(e,e.prev,t)>=0:_u(e,t,e.prev)<0||_u(e,e.next,t)<0}function wu(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Tu(e,t){let n=Ou(e.i,e.x,e.y),r=Ou(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Eu(e,t,n,r){let i=Ou(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Du(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ou(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ku(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Au=class{static triangulate(e,t,n=2){return Zl(e,t,n)}},ju=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Mu(e),Nu(n,e);let a=e.length;t.forEach(Mu);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Nu(n,t[e]);let o=Au.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Mu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Nu(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Pu=class e extends Mc{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new bc(p,3)),this.setAttribute(`normal`,new bc(m,3)),this.setAttribute(`uv`,new bc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Fu=class e extends Mc{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new bc(s,3)),this.setAttribute(`normal`,new bc(c,3)),this.setAttribute(`uv`,new bc(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Iu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ru(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ru(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Lu(e){let t={};for(let n=0;n<e.length;n++){let r=Iu(e[n]);for(let e in r)t[e]=r[e]}return t}function Ru(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zu(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Bu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Y.workingColorSpace}var Vu={clone:Iu,merge:Lu},Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wu=class extends Rc{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Iu(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zo().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new ns().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gu=class extends Wu{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ku=class extends Rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ao,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qu=class extends Rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ju(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Yu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Xu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Zu=class extends Xu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:no,endingEnd:no}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ro:i=e,o=2*t-n;break;case io:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ro:a=e,s=2*n-t;break;case io:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Qu=class extends Xu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},$u=class extends Xu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ed=class extends Xu{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=rd(n,t,g,y,r);i[p]=td(x,o,_,b,m)}return i}};function td(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function nd(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function rd(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=td(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=nd(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var id=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ju(t,this.TimeBufferType),this.values=Ju(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ju(e.times,Array),values:Ju(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Yu(e.settings)&&(n.settings={inTangents:Ju(e.settings.inTangents,Array),outTangents:Ju(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ed(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qa:t=this.InterpolantFactoryMethodDiscrete;break;case $a:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth;break;case to:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return to}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Yu(this.settings)&&(ad(this.settings.inTangents,e),ad(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ho(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===eo,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Yu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ad(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}id.prototype.ValueTypeName=``,id.prototype.TimeBufferType=Float32Array,id.prototype.ValueBufferType=Float32Array,id.prototype.DefaultInterpolation=$a;var od=class extends id{constructor(e,t,n){super(e,t,n)}};od.prototype.ValueTypeName=`bool`,od.prototype.ValueBufferType=Array,od.prototype.DefaultInterpolation=Qa,od.prototype.InterpolantFactoryMethodLinear=void 0,od.prototype.InterpolantFactoryMethodSmooth=void 0;var sd=class extends id{constructor(e,t,n,r){super(e,t,n,r)}};sd.prototype.ValueTypeName=`color`;var cd=class extends id{constructor(e,t,n,r){super(e,t,n,r)}};cd.prototype.ValueTypeName=`number`;var ld=class extends Xu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Po.slerpFlat(i,0,a,c-o,a,c,s);return i}},ud=class extends id{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ld(this.times,this.values,this.getValueSize(),e)}};ud.prototype.ValueTypeName=`quaternion`,ud.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends id{constructor(e,t,n){super(e,t,n)}};dd.prototype.ValueTypeName=`string`,dd.prototype.ValueBufferType=Array,dd.prototype.DefaultInterpolation=Qa,dd.prototype.InterpolantFactoryMethodLinear=void 0,dd.prototype.InterpolantFactoryMethodSmooth=void 0;var fd=class extends id{constructor(e,t,n,r){super(e,t,n,r)}};fd.prototype.ValueTypeName=`vector`;var pd={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(md(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!md(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function md(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var hd=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},gd=class{constructor(e){this.manager=e===void 0?hd:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gd.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var _d=new WeakMap,vd=class extends gd{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=pd.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=_d.get(a);e===void 0&&(e=[],_d.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=go(`img`);function s(){l(),t&&t(this);let n=_d.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}_d.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),pd.remove(`image:${e}`);let n=_d.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}_d.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pd.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},yd=class extends gd{constructor(e){super(e)}load(e,t,n,r){let i=new Xo,a=new vd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},bd=new q,xd=new Po,Sd=new q,Cd=class extends ks{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ns,this.projectionMatrix=new ns,this.projectionMatrixInverse=new ns,this.coordinateSystem=po,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bd,xd,Sd),Sd.x===1&&Sd.y===1&&Sd.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bd,xd,Sd.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bd,xd,Sd),Sd.x===1&&Sd.y===1&&Sd.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bd,xd,Sd.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wd=new q,Td=new K,Ed=new K,Dd=class extends Cd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wd.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wd.x,wd.y).multiplyScalar(-e/wd.z),wd.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wd.x,wd.y).multiplyScalar(-e/wd.z)}getViewSize(e,t){return this.getViewBounds(e,Td,Ed),t.subVectors(Ed,Td)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Od=class extends Cd{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kd=-90,Ad=1,jd=class extends ks{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Dd(kd,Ad,e,t);r.layers=this.layers,this.add(r);let i=new Dd(kd,Ad,e,t);i.layers=this.layers,this.add(i);let a=new Dd(kd,Ad,e,t);a.layers=this.layers,this.add(a);let o=new Dd(kd,Ad,e,t);o.layers=this.layers,this.add(o);let s=new Dd(kd,Ad,e,t);s.layers=this.layers,this.add(s);let c=new Dd(kd,Ad,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Md=class extends Dd{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Nd=`\\[\\]\\.:\\/`,Pd=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fd=`[^\\[\\]\\.:\\/]`,Id=`[^`+Nd.replace(`\\.`,``)+`]`,Ld=`((?:WC+[\\/:])*)`.replace(`WC`,Fd),Rd=`(WCOD+)?`.replace(`WCOD`,Id),zd=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fd),Bd=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fd),Vd=RegExp(`^`+Ld+Rd+zd+Bd+`$`),Hd=[`material`,`materials`,`bones`,`map`],Ud=class{constructor(e,t,n){let r=n||Wd.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wd=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Pd,``)}static parseTrackName(e){let t=Vd.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Hd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wd.Composite=Ud,Wd.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wd.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wd.prototype.GetterByBindingType=[Wd.prototype._getValue_direct,Wd.prototype._getValue_array,Wd.prototype._getValue_arrayElement,Wd.prototype._getValue_toArray],Wd.prototype.SetterByBindingTypeAndVersioning=[[Wd.prototype._setValue_direct,Wd.prototype._setValue_direct_setNeedsUpdate,Wd.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wd.prototype._setValue_array,Wd.prototype._setValue_array_setNeedsUpdate,Wd.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wd.prototype._setValue_arrayElement,Wd.prototype._setValue_arrayElement_setNeedsUpdate,Wd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wd.prototype._setValue_fromArray,Wd.prototype._setValue_fromArray_setNeedsUpdate,Wd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Gd(e,t,n,r){let i=Kd(r);switch(n){case oa:return e*t;case da:return e*t/i.components*i.byteLength;case fa:return e*t/i.components*i.byteLength;case pa:return e*t*2/i.components*i.byteLength;case ma:return e*t*2/i.components*i.byteLength;case sa:return e*t*3/i.components*i.byteLength;case ca:return e*t*4/i.components*i.byteLength;case ha:return e*t*4/i.components*i.byteLength;case ga:case _a:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case va:case ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ca:return Math.max(e,16)*Math.max(t,8)/4;case ba:case Sa:return Math.max(e,8)*Math.max(t,8)/2;case wa:case Ta:case Da:case Oa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ea:case ka:case Aa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Ka:case qa:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ja:case Ya:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Xa:case Za:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Kd(e){switch(e){case qi:case Ji:return{byteLength:1,components:1};case Xi:case Yi:case ea:return{byteLength:2,components:1};case ta:case na:return{byteLength:2,components:4};case Qi:case Zi:case $i:return{byteLength:4,components:1};case ia:case aa:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function qd(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Jd(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},Yd={basic:{uniforms:Lu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Lu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Lu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Lu([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Lu([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new X(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Lu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Lu([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Lu([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Lu([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Lu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Lu([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Lu([Q.common,Q.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Lu([Q.lights,Q.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Yd.physical={uniforms:Lu([Yd.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Xd={r:0,b:0,g:0},Zd=new ns,Qd=new J;Qd.set(-1,0,0,0,1,0,0,0,1);function $d(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new nl(new Wl(1,1,1),new Wu({name:`BackgroundCubeMaterial`,uniforms:Iu(Yd.backgroundCube.uniforms),vertexShader:Yd.backgroundCube.vertexShader,fragmentShader:Yd.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qd),l.material.toneMapped=Y.getTransfer(i.colorSpace)!==lo,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new nl(new Pu(2,2),new Wu({name:`BackgroundMaterial`,uniforms:Iu(Yd.background.uniforms),vertexShader:Yd.background.vertexShader,fragmentShader:Yd.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Y.getTransfer(i.colorSpace)!==lo,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Xd,Bu(e)),n.buffers.color.setClear(Xd.r,Xd.g,Xd.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ef(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function tf(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function nf(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function rf(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ic,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var af=4,of=6,sf=20,cf=256,lf=new Od,uf=new X,df=null,ff=0,pf=0,mf=!1,hf=new q,gf=new q,_f=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=hf}=i;df=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(df,ff,pf),this._renderer.xr.enabled=mf,e.scissorTest=!1,bf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:ea,format:ca,colorSpace:so,depthBuffer:!1},r=yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vf(r)),this._blurMaterial=Sf(r,e,t),this._ggxMaterial=xf(r,e,t)}return r}_compileMaterial(e){let t=new nl(new Mc,e);this._renderer.compile(t,lf)}_sceneToCubeUV(e,t,n,r,i){let a=new Dd(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(uf),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nl(new Wl,new Wc({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(uf),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;bf(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;bf(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,lf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-af?n-d+af:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,bf(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,lf),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,bf(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,lf)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];bf(t,3*l*(r>this._lodMax-af?r-this._lodMax+af:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,lf)}};function vf(e){let t=[],n=[],r=e,i=e-af+1+of;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?gf.set(1,r,n):e===1?gf.set(-n,1,-r):e===2?gf.set(-n,r,1):e===3?gf.set(-1,r,-n):e===4?gf.set(-n,-1,r):gf.set(n,r,-1),gf.toArray(l,(e*6+t)*3)}}let u=new Mc;u.setAttribute(`position`,new _c(c,3)),u.setAttribute(`outputDirection`,new _c(l,3)),n.push(new nl(u,null)),r>af&&r--}return{lodMeshes:n,sizeLods:t}}function yf(e,t,n){let r=new $o(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function bf(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function xf(e,t,n){return new Wu({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:cf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sf(e,t,n){return new Wu({name:`SphericalGaussianBlur`,defines:{SAMPLES:sf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cf(){return new Wu({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wf(){return new Wu({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ef=class extends $o{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wl(5,5,5),i=new Wu({name:`CubemapFromEquirect`,uniforms:Iu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new nl(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Wi),new jd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Df(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ef(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new _f(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new _f(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Of(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&xo(`WebGLRenderer: `+e+` extension not supported.`),t}}}function kf(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?yc:vc)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Af(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function jf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Mf(e,t,n){let r=new WeakMap,i=new Zo;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new es(h,p,m,u);g.type=$i,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Nf(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Pf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ff(e,t,n,r,i,a){let o=new $o(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Mc;l.setAttribute(`position`,new bc([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new bc([0,2,0,0,2,0],2));let u=new Gu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new nl(l,u),f=new Od(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new $o(t,n,{type:ea,depthBuffer:!1,stencilBuffer:!1}),c=new $o(t,n,{type:ea,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Y.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Pf[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var If=new Xo,Lf=new Vl(1,1),Rf=new es,zf=new ts,Bf=new zl,Vf=[],Hf=[],Uf=new Float32Array(16),Wf=new Float32Array(9),Gf=new Float32Array(4);function Kf(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vf[i];if(a===void 0&&(a=new Float32Array(i),Vf[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qf(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Jf(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Yf(e,t){let n=Hf[t];n===void 0&&(n=new Int32Array(t),Hf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qf(n,t))return;e.uniform2fv(this.addr,t),Jf(n,t)}}function Qf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qf(n,t))return;e.uniform3fv(this.addr,t),Jf(n,t)}}function $f(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qf(n,t))return;e.uniform4fv(this.addr,t),Jf(n,t)}}function ep(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qf(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Jf(n,t)}else{if(qf(n,r))return;Gf.set(r),e.uniformMatrix2fv(this.addr,!1,Gf),Jf(n,r)}}function tp(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qf(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Jf(n,t)}else{if(qf(n,r))return;Wf.set(r),e.uniformMatrix3fv(this.addr,!1,Wf),Jf(n,r)}}function np(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qf(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Jf(n,t)}else{if(qf(n,r))return;Uf.set(r),e.uniformMatrix4fv(this.addr,!1,Uf),Jf(n,r)}}function rp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ip(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qf(n,t))return;e.uniform2iv(this.addr,t),Jf(n,t)}}function ap(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qf(n,t))return;e.uniform3iv(this.addr,t),Jf(n,t)}}function op(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qf(n,t))return;e.uniform4iv(this.addr,t),Jf(n,t)}}function sp(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qf(n,t))return;e.uniform2uiv(this.addr,t),Jf(n,t)}}function lp(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qf(n,t))return;e.uniform3uiv(this.addr,t),Jf(n,t)}}function up(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qf(n,t))return;e.uniform4uiv(this.addr,t),Jf(n,t)}}function dp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Lf.compareFunction=n.isReversedDepthBuffer()?518:515,a=Lf):a=If,n.setTexture2D(t||a,i)}function fp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zf,i)}function pp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Bf,i)}function mp(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Rf,i)}function hp(e){switch(e){case 5126:return Xf;case 35664:return Zf;case 35665:return Qf;case 35666:return $f;case 35674:return ep;case 35675:return tp;case 35676:return np;case 5124:case 35670:return rp;case 35667:case 35671:return ip;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return sp;case 36294:return cp;case 36295:return lp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function gp(e,t){e.uniform1fv(this.addr,t)}function _p(e,t){let n=Kf(t,this.size,2);e.uniform2fv(this.addr,n)}function vp(e,t){let n=Kf(t,this.size,3);e.uniform3fv(this.addr,n)}function yp(e,t){let n=Kf(t,this.size,4);e.uniform4fv(this.addr,n)}function bp(e,t){let n=Kf(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xp(e,t){let n=Kf(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Sp(e,t){let n=Kf(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Cp(e,t){e.uniform1iv(this.addr,t)}function wp(e,t){e.uniform2iv(this.addr,t)}function Tp(e,t){e.uniform3iv(this.addr,t)}function Ep(e,t){e.uniform4iv(this.addr,t)}function Dp(e,t){e.uniform1uiv(this.addr,t)}function Op(e,t){e.uniform2uiv(this.addr,t)}function kp(e,t){e.uniform3uiv(this.addr,t)}function Ap(e,t){e.uniform4uiv(this.addr,t)}function jp(e,t,n){let r=this.cache,i=t.length,a=Yf(n,i);qf(r,a)||(e.uniform1iv(this.addr,a),Jf(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Lf:If;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Mp(e,t,n){let r=this.cache,i=t.length,a=Yf(n,i);qf(r,a)||(e.uniform1iv(this.addr,a),Jf(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zf,a[e])}function Np(e,t,n){let r=this.cache,i=t.length,a=Yf(n,i);qf(r,a)||(e.uniform1iv(this.addr,a),Jf(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Bf,a[e])}function Pp(e,t,n){let r=this.cache,i=t.length,a=Yf(n,i);qf(r,a)||(e.uniform1iv(this.addr,a),Jf(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Rf,a[e])}function Fp(e){switch(e){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return yp;case 35674:return bp;case 35675:return xp;case 35676:return Sp;case 5124:case 35670:return Cp;case 35667:case 35671:return wp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ep;case 5125:return Dp;case 36294:return Op;case 36295:return kp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Pp}}var Ip=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hp(t.type)}},Lp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fp(t.type)}},Rp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},zp=/(\w+)(\])?(\[|\.)?/g;function Bp(e,t){e.seq.push(t),e.map[t.id]=t}function Vp(e,t,n){let r=e.name,i=r.length;for(zp.lastIndex=0;;){let a=zp.exec(r),o=zp.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Bp(n,l===void 0?new Ip(s,e,t):new Lp(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Rp(s),Bp(n,e)),n=e}}}var Hp=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Vp(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Up(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Wp=37297,Gp=0;function Kp(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var qp=new J;function Jp(e){Y._getMatrix(qp,Y.workingColorSpace,e);let t=`mat3( ${qp.elements.map(e=>e.toFixed(4))} )`;switch(Y.getTransfer(e)){case co:return[t,`LinearTransferOETF`];case lo:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Yp(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Kp(e.getShaderSource(t),r)}return i}function Xp(e,t){let n=Jp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Zp={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Qp(e,t){let n=Zp[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var $p=new q;function em(){return Y.getLuminanceCoefficients($p),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${$p.x.toFixed(4)}, ${$p.y.toFixed(4)}, ${$p.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function tm(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(im).join(`
`)}function nm(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function rm(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function im(e){return e!==``}function am(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function om(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function cm(e){return e.replace(sm,um)}var lm=new Map;function um(e,t){let n=Z[t];if(n===void 0){let e=lm.get(t);if(e!==void 0)n=Z[e],W(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return cm(n)}var dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(e){return e.replace(dm,pm)}function pm(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function mm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var hm={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gm(e){return hm[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _m={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function vm(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:_m[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ym={302:`ENVMAP_MODE_REFRACTION`};function bm(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ym[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var xm={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Sm(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:xm[e.combine]||`ENVMAP_BLENDING_NONE`}function Cm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function wm(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gm(n),l=vm(n),u=bm(n),d=Sm(n),f=Cm(n),p=tm(n),m=nm(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(im).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(im).join(`
`),_.length>0&&(_+=`
`)):(g=[mm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(im).join(`
`),_=[mm(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Qp(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Xp(`linearToOutputTexel`,n.outputColorSpace),em(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(im).join(`
`)),o=cm(o),o=am(o,n),o=om(o,n),s=cm(s),s=am(s,n),s=om(s,n),o=fm(o),s=fm(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Up(i,i.VERTEX_SHADER,y),S=Up(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Yp(i,x,`vertex`),n=Yp(i,S,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Hp(i,h),T=rm(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Wp)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Tm=0,Em=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dm(e),t.set(e,n)),n}},Dm=class{constructor(e){this.id=Tm++,this.code=e,this.usedTimes=0}};function Om(e){return e===1030||e===37490||e===36285}function km(e,t,n,r,i,a){let o=new ps,s=new Em,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Yd[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,P=ge&&!!i.iridescenceThicknessMap,we=_e&&!!i.sheenColorMap,Te=_e&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,F=!!i.specularColorMap,De=!!i.specularIntensityMap,I=ve&&!!i.transmissionMap,L=ve&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let R={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Y.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Om(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:P,sheen:_e,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:F,specularIntensityMap:De,transmission:ve,transmissionMap:I,thicknessMap:L,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:ue&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:P&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:F&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:I&&m(i.transmissionMap.channel),thicknessMapUv:L&&m(i.thicknessMap.channel),alphaMapUv:ke&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Y.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Y.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return R.vertexUv1s=c.has(1),R.vertexUv2s=c.has(2),R.vertexUv3s=c.has(3),c.clear(),R}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Yd[t];n=Vu.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new wm(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Am(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function jm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Nm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||jm),r.length>1&&r.sort(t||Mm),i.length>1&&i.sort(t||Mm)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Pm(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Nm,e.set(t,[i])):n>=r.length?(i=new Nm,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Fm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new X};break;case`SpotLight`:n={position:new q,direction:new q,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Im(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Lm=0;function Rm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function zm(e){let t=new Fm,n=Im(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new ns,o=new ns;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Rm);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Lm++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Bm(e){let t=new zm(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Vm(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Bm(e),t.set(n,[a])):r>=i.length?(a=new Bm(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wm=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Gm=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Km=new ns,qm=new q,Jm=new q;function Ym(e,t,n){let r=new vl,i=new K,a=new K,o=new Zo,s=new Ku,c=new qu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Wu({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Hm,fragmentShader:Um}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Mc;m.setAttribute(`position`,new _c(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new nl(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){W(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new $o(i.x,i.y,{format:pa,type:ea,minFilter:Wi,magFilter:Wi,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Vl(i.x,i.y,$i),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=la,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Vi,d.map.depthTexture.magFilter=Vi}else l.isPointLight?(d.map=new Ef(i.x),d.map.depthTexture=new Hl(i.x,Qi)):(d.map=new $o(i.x,i.y),d.map.depthTexture=new Vl(i.x,i.y,Qi)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=la,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Wi,d.map.depthTexture.magFilter=Wi):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Vi,d.map.depthTexture.magFilter=Vi);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),qm.setFromMatrixPosition(l.matrixWorld),e.position.copy(qm),Jm.copy(e.position),Jm.add(Wm[t]),e.up.copy(Gm[t]),e.lookAt(Jm),e.updateMatrixWorld(),n.makeTranslation(-qm.x,-qm.y,-qm.z),Km.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Km,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new $o(i.x,i.y,{format:pa,type:ea}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Xm(e,t){function n(){let t=!1,n=new Zo,r=null,i=new Zo(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Co[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Zo().fromArray(ie),se=new Zo().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function P(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function we(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function I(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function R(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:P,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:F,texImage2D:je,texImage3D:Me,pixelStorei:R,getParameter:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:De,texSubImage3D:I,compressedTexSubImage2D:L,compressedTexSubImage3D:Oe,scissor:Pe,viewport:Fe,reset:Re}}function Zm(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):go(`canvas`)}function g(e,t,n){let r=1,i=Ee(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?co:Y.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&W(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{de(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){de(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){de(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){fe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[Ri]:e.REPEAT,[zi]:e.CLAMP_TO_EDGE,[Bi]:e.MIRRORED_REPEAT},ae={[Vi]:e.NEAREST,[Hi]:e.NEAREST_MIPMAP_NEAREST,[Ui]:e.NEAREST_MIPMAP_LINEAR,[Wi]:e.LINEAR,[Gi]:e.LINEAR_MIPMAP_NEAREST,[Ki]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function le(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ue(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=le(n.start,r.width,4),c=le(t.start,r.width,4);n.start<=i+1&&a===c&&le(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function de(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Te(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);se(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===ua,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ue(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Gd(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Gd(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ee(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ee(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Y.getPrimaries(Y.workingColorSpace),r=o.colorSpace===``?null:Y.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Te(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);se(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ee(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ce(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function he(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),se(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Ce(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ge(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)he(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?he(i.__webglFramebuffer[0],t,0):he(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),me(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),me(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,i){let a=r.get(t);n!==void 0&&pe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ge(t)}function ve(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&P(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ce(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),me(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)pe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),se(c,a),pe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),se(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else pe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ge(t)}function ye(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let be=[],xe=[];function Se(t){if(t.samples>0){if(P(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(be.length=0,xe.length=0,be.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(be.push(l),xe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ce(e){return Math.min(i.maxSamples,e.samples)}function P(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Te(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Y.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ee(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Qm(e,t){function n(n,r=``){let i,a=Y.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wu({vertexShader:$m,fragmentShader:eh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nl(new Pu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends wo{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new th,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new Dd;T.viewport=new Zo;let E=new Dd;E.viewport=new Zo;let D=[T,E],O=new Md,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ms,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ms,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ms,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ua:la,a=_.stencil?ra:Qi);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new $o(d.textureWidth,d.textureHeight,{format:ca,type:qi,depthTexture:new Vl(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $o(f.framebufferWidth,f.framebufferHeight,{format:ca,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new q,te=new q;function ne(e,t,n){N.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;re(O,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,O,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Do*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Dd,o.layers.enable(n),o.viewport=new Zo,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ul,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new qd;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},rh=new ns,ih=new J;ih.set(-1,0,0,0,1,0,0,0,1);function ah(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Bu(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(rh.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ih),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function oh(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return G(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var sh=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ch=null;function lh(){return ch===null&&(ch=new al(sh,16,16,pa,ea),ch.name=`DFG_LUT`,ch.minFilter=Wi,ch.magFilter=Wi,ch.wrapS=zi,ch.wrapT=zi,ch.generateMipmaps=!1,ch.needsUpdate=!0),ch}var uh=class{constructor(e={}){let{canvas:t=_o(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=qi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ha,ma,fa]),g=new Set([qi,Qi,Xi,ra,ta,na]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=oo;let j=0,ee=0,M=null,N=-1,te=null,ne=new Zo,re=new Zo,ie=null,ae=new X(0),oe=0,se=t.width,ce=t.height,le=1,ue=null,de=null,fe=new Zo(0,0,se,ce),pe=new Zo(0,0,se,ce),me=!1,he=new vl,ge=!1,_e=!1,ve=new ns,ye=new q,be=new Zo,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return M===null?le:1}let P=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,F,De,I,L,Oe,ke,Ae,je,Me,Ne,R,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ke,!1),t.addEventListener(`webglcontextrestored`,qe,!1),t.addEventListener(`webglcontextcreationerror`,Je,!1),P===null){let t=`webgl2`;if(P=we(t,e),P===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}We()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),G(`WebGLRenderer: `+e.message),e}function We(){Te=new Of(P),Te.init(),Ve=new Qm(P,Te),Ee=new nf(P,Te,e,Ve),F=new Xm(P,Te),Ee.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),De=new jf(P),I=new Am,L=new Zm(P,Te,F,I,Ee,Ve,De),Oe=new Df(T),ke=new Jd(P),He=new ef(P,ke),Ae=new kf(P,ke,De,He),je=new Nf(P,Ae,ke,He,De),Re=new Mf(P,Ee,L),Fe=new rf(I),Me=new km(T,Oe,Te,Ee,He,Fe),Ne=new ah(T,I),R=new Pm,Pe=new Vm(Te),Le=new $d(T,Oe,F,je,p,s),Ie=new Ym(T,je,Ee),Ue=new oh(P,De,Ee,F),ze=new tf(P,Te,De),Be=new Af(P,Te,De),De.programs=Me.programs,T.capabilities=Ee,T.extensions=Te,T.properties=I,T.renderLists=R,T.shadowMap=Ie,T.state=F,T.info=De}m!==1009&&(w=new Ff(m,t.width,t.height,o,r,i));let Ge=new nh(T,P);this.xr=Ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(e){e!==void 0&&(le=e,this.setSize(se,ce,!1))},this.getSize=function(e){return e.set(se,ce)},this.setSize=function(e,n,r=!0){if(Ge.isPresenting){W(`WebGLRenderer: Can't change size while VR device is presenting.`);return}se=e,ce=n,t.width=Math.floor(e*le),t.height=Math.floor(n*le),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(se*le,ce*le).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,ce=n,le=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),F.viewport(ne.copy(fe).multiplyScalar(le).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),F.scissor(re.copy(pe).multiplyScalar(le).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){F.setScissorTest(me=e)},this.setOpaqueSort=function(e){ue=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Le.getClearColor(),r=Le.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),Le.dispose(),R.dispose(),Pe.dispose(),I.dispose(),Oe.dispose(),je.dispose(),He.dispose(),Ue.dispose(),Me.dispose(),Ge.dispose(),Ge.removeEventListener(`sessionstart`,tt),Ge.removeEventListener(`sessionend`,nt),z.stop()};function Ke(e){e.preventDefault(),yo(`WebGLRenderer: Context Lost.`),E=!0}function qe(){yo(`WebGLRenderer: Context Restored.`),E=!1;let e=De.autoReset,t=Ie.enabled,n=Ie.autoUpdate,r=Ie.needsUpdate,i=Ie.type;We(),De.autoReset=e,Ie.enabled=t,Ie.autoUpdate=n,Ie.needsUpdate=r,Ie.type=i}function Je(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ye(e){let t=e.target;t.removeEventListener(`dispose`,Ye),Xe(t)}function Xe(e){Ze(e),I.remove(e)}function Ze(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Me.releaseProgram(e)}),e.isShaderMaterial&&Me.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ft(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ae.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;He.setup(i,r,s,n,c);let h,g=ze;if(c!==null&&(h=ke.get(c),g=Be,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ke.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ge===!0&&Fe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ct(e,t,r),e.side=0,e.needsUpdate=!0,ct(e,t,r),e.side=2):ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Pe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),_e=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,_e),ge===!0&&Fe.setGlobalState(this.clippingPlanes,t),D!==null&&Ie.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Qe(o,n,t,e),r.add(o)}else Qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function tt(){z.stop()}function nt(){z.start()}let z=new qd;z.setAnimationLoop(et),typeof self<`u`&&z.setContext(self),this.setAnimationLoop=function(e){$e=e,Ge.setAnimationLoop(e),e===null?z.stop():z.start()},Ge.addEventListener(`sessionstart`,tt),Ge.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ge.enabled===!0&&Ge.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(t),t=Ge.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Pe.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(ve,po,t.reversedDepth),_e=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,_e),b=R.get(e,S.length),b.init(),S.push(b),Ge.enabled===!0&&Ge.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&rt(e,t,-1/0,T.sortObjects)}rt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ue,de),Se=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Se&&Le.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Fe.beginShadows();let i=x.state.shadowsArray;if(Ie.render(i,e,t),ge===!0&&Fe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];at(n,r,e,a)}Se&&Le.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];it(b,e,n,n.viewport)}}else r.length>0&&at(n,r,e,t),Se&&Le.render(e),it(b,e,t)}M!==null&&ee===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),He.resetDefaultState(),N=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),ge===!0&&Fe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function rt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(he)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=je.update(e),a=e.material;a.visible&&b.push(e,i,a,n,be.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(he))){let i=je.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,be.z,s,t)}}else a.visible&&b.push(e,i,a,n,be.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)rt(i[e],t,n,r)}function it(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&Fe.setGlobalState(T.clippingPlanes,n),r&&F.viewport(ne.copy(r)),i.length>0&&ot(i,t,n),a.length>0&&ot(a,t,n),o.length>0&&ot(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function at(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new $o(1,1,{generateMipmaps:!0,type:e?ea:qi,minFilter:Ki,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Y.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),Se&&Le.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&Fe.setGlobalState(T.clippingPlanes,r),ot(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,st(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&st(o,t,n,s,l,c)}}function st(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ct(e,t,n){t.isScene!==!0&&(t=xe);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Me.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Me.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Oe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ye),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ut(e,s),d}else s.uniforms=Me.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Me.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Fe.uniform),ut(e,s),r.needsLights=mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function lt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Hp.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ut(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function ft(e,t,n,r,i){t.isScene!==!0&&(t=xe),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Y.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Oe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=x.state.lights;if(ge===!0&&(_e===!0||e!==te)){let t=e===te&&r.id===N;Fe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Fe.numPlanes||v.numIntersection!==Fe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ct(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=dt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,L),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,L),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Re.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=lh()),w){if(O.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&pt(k,E),a&&r.fog===!0&&Ne.refreshFogUniforms(k,a),Ne.refreshMaterialUniforms(k,r,le,ce,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Hp.upload(P,lt(v),k,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Hp.upload(P,lt(v),k,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ue.update(n,S),Ue.bind(n,S)}}return S}function pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,F.viewport(ne),F.scissor(re),F.setScissorTest(ie),N=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(fe).multiplyScalar(le).floor(),re.copy(pe).multiplyScalar(le).floor(),ie=me;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(ne),F.scissor(re),F.setScissorTest(ie),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}N=-1};function ht(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=ht(o);if(u.__formatReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,Ve.convert(c),Ve.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=ht(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,Ve.convert(l),Ve.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await So(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ve.convert(t.format),_=Ve.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,F.reset(),He.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return po}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y._getUnpackColorSpace()}},dh=1.5,fh=.3;function ph(e,t,n){let r=fh,i=Math.round(t-r),a=Math.round(t+r),o=Math.round(n-r),s=Math.round(n+r);for(let t=o;t<=s;t++)for(let n=i;n<=a;n++)if(!er(e,n,t))return!0;let c=.6;for(let r of hh(e,t,n)){let e=r.x-t,i=r.y-n;if(e*e+i*i<c*c)return!0}return!1}var mh=new WeakMap;function hh(e,t,n){let r=mh.get(e);if(!r){r=new Map;for(let t of e.decos){let n=Math.round(t.y)*e.w+Math.round(t.x),i=r.get(n);i?i.push(t):r.set(n,[t])}mh.set(e,r)}let i=[],a=Math.round(t),o=Math.round(n);for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let s=r.get((o+t)*e.w+a+n);s&&i.push(...s)}return i}function gh(e,t,n,r,i,a=6){let o=Math.sqrt(n*n+r*r);if(e.moving=o>.01,!e.moving)return{crossed:null};let s=n/Math.max(1,o)*a*i,c=r/Math.max(1,o)*a*i,l=Math.max(1,Math.ceil(Math.max(Math.abs(s),Math.abs(c))/.25));for(let n=0;n<l;n++){let n=e.x,r=e.y;ph(t,e.x+s/l,e.y)||(e.x+=s/l),ph(t,e.x,e.y+c/l)||(e.y+=c/l),e.x===n&&e.y===r&&_h(t,e,s/l,c/l)}return e.facing=Math.abs(n)>Math.abs(r)?n>0?`e`:`w`:r>0?`s`:`n`,{crossed:vh(t,e.x,e.y)}}function _h(e,t,n,r){let i=Math.sqrt(n*n+r*r),a=.6,o=null,s=1/0;for(let i of hh(e,t.x+n,t.y+r)){let e=t.x+n-i.x,c=t.y+r-i.y,l=e*e+c*c;l<a*a&&l<s&&(o=i,s=l)}if(!o)return;let c=t.x-o.x,l=t.y-o.y,u=Math.sqrt(c*c+l*l)||1,d=c/u,f=l/u;if(n*d+r*f>=0)return;let p=-f,m=d,h=n*p+r*m>=0?1:-1,g=p*h*i,_=m*h*i;ph(e,t.x+g,t.y+_)||(t.x+=g,t.y+=_)}function vh(e,t,n){for(let r of e.exits){let e=(t-r.x)*r.dx+(n-r.y)*r.dy,i=-(t-r.x)*r.dy+(n-r.y)*r.dx;if(e>4&&Math.abs(i)<=3)return r}return null}var yh=(e,t)=>Math.abs(e)>Math.abs(t)?e>0?`e`:`w`:t>0?`s`:`n`;function bh(e,t){let n=e.exits.find(e=>e.passage===t);if(!n)throw Error(`La zona `+e.zoneId+` no tiene la salida del pasaje `+t);return{zoneId:e.zoneId,...Sh(e,n.x-n.dx*4,n.y-n.dy*4),facing:yh(-n.dx,-n.dy),moving:!1}}function xh(e){return{zoneId:e.zoneId,...Sh(e,e.spawn[0],e.spawn[1]),facing:`s`,moving:!1}}function Sh(e,t,n){let r=Math.round(t),i=Math.round(n);for(let t=0;t<12;t++)for(let n=-t;n<=t;n++)for(let a=-t;a<=t;a++)if(Math.max(Math.abs(a),Math.abs(n))===t&&!ph(e,r+a,i+n))return{x:r+a,y:i+n};return{x:r,y:i}}function Ch(e,t){let n=e.exits.find(e=>e.passage===t);if(!n)throw Error(`La zona `+e.zoneId+` no tiene la salida del pasaje `+t);let r=Math.round(n.x+n.dx*11),i=Math.round(n.y+n.dy*11),a=e.cells.slice();for(let t of e.decos)a[Math.round(t.y)*e.w+Math.round(t.x)]=0;return{passage:t,dist:Hn(a,e.w,e.h,[[r,i]])}}function wh(e,t,n){let r=e.cells.slice();for(let t of e.decos)r[Math.round(t.y)*e.w+Math.round(t.x)]=0;return{passage:-1,dist:Hn(r,e.w,e.h,[[t,n]])}}function Th(e,t,n){let r=Math.round(n.x),i=Math.round(n.y),a=e.dist[i*t.w+r];if(a<0)return null;let o=e=>Math.max(-1,Math.min(1,e*4));for(let[s,c]of[[1,0],[-1,0],[0,1],[0,-1]]){let l=r+s,u=i+c;if(l>=0&&u>=0&&l<t.w&&u<t.h&&e.dist[u*t.w+l]===a-1)return[s||o(r-n.x),c||o(i-n.y)]}return a===0?[0,0]:null}var Eh=1024,Dh=2.5,Oh=[.8,1.6],kh=8/Math.tan(17*Math.PI/180),Ah=1774880,jh=9067066,Mh=.82;function Nh(e){let t=kh-e*Math.cos(50*Math.PI/180);return Eh/16*(kh/t)}var Ph=[.75,.87,1,1.15,1.32,1.52],Fh=[{sat:1,contrast:1,warm:0,lift:0,tint:[0,0,0]},{sat:.86,contrast:.95,warm:.03,lift:.06,tint:[.24,.24,.34]},{sat:.76,contrast:.9,warm:.045,lift:.1,tint:[.26,.26,.36]},{sat:.66,contrast:.85,warm:.06,lift:.14,tint:[.28,.28,.38]}];function Ih(){let e=typeof location>`u`?null:new URLSearchParams(location.search).get(`tono`);return Fh[e===null||e===``?2:Math.max(0,Math.min(Fh.length-1,Math.round(+e)||0))]}function Lh(e){let t=[.2126,.7152,.0722],n=e.sat,r=[0,1,2].map(e=>[0,1,2].map(r=>(1-n)*t[r]+(e===r?n:0))),i=[0,0,0];r=r.map(t=>t.map(t=>t*e.contrast)),i=i.map(t=>t*e.contrast+.5*(1-e.contrast));let a=[1+e.warm,1,1-e.warm];return r=r.map((e,t)=>e.map(e=>e*a[t])),i=i.map((e,t)=>e*a[t]),r=r.map(t=>t.map(t=>t*(1-e.lift))),i=i.map((t,n)=>t*(1-e.lift)+e.lift*e.tint[n]),r.map((e,t)=>[...e,i[t]])}function Rh(e){return[...Lh(e).map(e=>[e[0],e[1],e[2],0,e[3]]),[0,0,0,1,0]].flat().map(e=>+e.toFixed(5)).join(` `)}function zh(e=Ih()){if(document.getElementById(`art-grade`))return;let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t.setAttribute(`width`,`0`),t.setAttribute(`height`,`0`),t.setAttribute(`aria-hidden`,`true`),t.style.position=`absolute`,t.innerHTML=`<filter id="art-grade" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="${Rh(e)}"/></filter>`,document.body.appendChild(t)}var Bh={hoja:{mode:`vuelta`,frames:[[`...31`,`..311`,`.1112`,`.122.`,`2....`],[`.....`,`.311.`,`21112`,`.122.`,`.....`],[`13...`,`113..`,`2111.`,`.221.`,`....2`],[`..3..`,`..1..`,`..1..`,`..2..`,`..2..`]]},petalo:{mode:`vuelta`,frames:[[`.33.`,`3111`,`1112`,`.12.`],[`....`,`3112`,`.22.`,`....`],[`.31.`,`.11.`,`.12.`,`..2.`],[`....`,`.31.`,`.12.`,`....`]]},pluma:{mode:`vuelta`,frames:[[`.....3`,`....31`,`..311.`,`.3112.`,`.122..`,`2.....`],[`......`,`......`,`333311`,`211112`,`......`,`......`],[`3.....`,`13....`,`.113..`,`.2113.`,`..221.`,`.....2`],[`..3...`,`..31..`,`..11..`,`..12..`,`..12..`,`..2...`]]},nieve:{mode:`variante`,frames:[[`1`],[`31`,`11`],[`31`,`12`],[`.1.`,`131`,`.1.`]]},ceniza:{mode:`variante`,frames:[[`1`],[`12`],[`1.`,`21`],[`31`,`12`]]},brasa:{mode:`intensidad`,frames:[[`1`],[`31`,`12`],[`.3.`,`313`,`.1.`],[`.3.`,`333`,`313`,`.1.`]]},luciernaga:{mode:`intensidad`,frames:[[`1`],[`31`,`11`],[`.1.`,`131`,`.1.`],[`..2..`,`.212.`,`21312`,`.212.`,`..2..`]]},fatuo:{mode:`intensidad`,frames:[[`.2.`,`212`,`.2.`],[`.22.`,`2112`,`2132`,`.22.`],[`..2..`,`.212.`,`21312`,`.212.`,`..2..`],[`..2..`,`.111.`,`21331`,`.131.`,`..2..`]]},burbuja:{mode:`variante`,frames:[[`.1.`,`3.1`,`.1.`],[`.11.`,`13.1`,`1..1`,`.11.`],[`.111.`,`13..1`,`1...1`,`1...1`,`.111.`]]},esporas:{mode:`intensidad`,frames:[[`1`],[`31`,`12`],[`.1.`,`131`,`.1.`]]},polvo:{mode:`variante`,frames:[[`1`],[`12`],[`31`],[`112`],[`3112`]]},motas:{mode:`intensidad`,frames:[[`2`],[`1`],[`3`],[`31`,`11`]]},chispa:{mode:`intensidad`,frames:[[`1`],[`.1.`,`131`,`.1.`],[`..1..`,`..1..`,`11311`,`..1..`,`..1..`],[`...1...`,`...1...`,`..131..`,`1133311`,`..131..`,`...1...`,`...1...`]]},confeti:{mode:`vuelta`,frames:[[`11`,`12`],[`112`],[`3`,`1`,`2`],[`31`,`12`]]},papel:{mode:`vuelta`,frames:[[`33331`,`31111`,`31112`,`11122`],[`...31`,`.3112`,`31122`,`122..`],[`33312`,`11122`],[`31...`,`2113.`,`.2211`,`...22`]]},sombra:{mode:`variante`,frames:[[`.11.`,`1111`,`.11.`],[`111`],[`11`]]},vapor:{mode:`variante`,frames:[[`.11.`,`1311`,`1111`,`.11.`],[`.111.`,`13311`,`13111`,`11112`,`.112.`],[`.11.`,`1131`,`.11.`]]}},Vh={variante:0,vuelta:1,intensidad:2},Hh=8;function Uh(){let e=Object.keys(Bh),t=e.reduce((e,t)=>e+Bh[t].frames.length,0),n=Math.ceil(t/16),r=n*Hh,i=new Uint8Array(128*r*4),a={},o=0;for(let t of e){a[t]=o;for(let e of Bh[t].frames){let t=o%16*Hh,n=Math.floor(o/16)*Hh,r=e.length,a=Math.max(...e.map(e=>e.length)),s=Math.floor((Hh-a)/2),c=Math.floor((Hh-r)/2);e.forEach((e,r)=>[...e].forEach((e,a)=>{if(e===`.`)return;let o=((n+c+r)*128+t+s+a)*4;i[o]=Number(e)*64,i[o+3]=255})),o++}}let s=new al(i,128,r,ca);return s.magFilter=s.minFilter=Vi,s.needsUpdate=!0,{texture:s,first:a,cols:16,rows:n}}var Wh=null,Gh={hoja:{shadow:!0,spin:3,fall:-.32,wind:[.25,.06],sway:.6,swayHz:.35,height:[0,5],blink:0,density:.3,alpha:1},petalo:{shadow:!0,fall:-.28,wind:[.35,.1],sway:.5,swayHz:.45,height:[0,5],blink:0,density:.32,alpha:1},pluma:{shadow:!0,spin:1.5,fall:-.16,wind:[.3,.05],sway:.9,swayHz:.22,height:[0,6],blink:0,density:.12,alpha:.95},nieve:{fall:-.55,wind:[.15,.03],sway:.25,swayHz:.3,height:[0,6],blink:0,density:.9,alpha:.95},ventisca:{sprite:`nieve`,fall:-.9,wind:[1.7,.25],sway:.15,swayHz:.6,height:[0,5],blink:0,density:1.6,alpha:.85},ceniza:{fall:-.22,wind:[.2,.05],sway:.35,swayHz:.25,height:[0,6],blink:0,density:.5,alpha:.8},brasa:{fall:.55,wind:[.1,-.05],sway:.3,swayHz:.7,height:[0,5],blink:3,density:.32,alpha:1},luciernaga:{fall:0,wind:[0,0],sway:.7,swayHz:.12,wander:!0,height:[.3,2.4],blink:1,density:.2,alpha:1},fatuo:{fall:.05,wind:[.05,0],sway:.8,swayHz:.08,wander:!0,height:[.4,2],blink:1,density:.15,alpha:.85},burbuja:{fall:.45,wind:[.05,0],sway:.2,swayHz:.6,height:[0,5],blink:0,density:.4,alpha:.85},esporas:{fall:.07,wind:[.08,.02],sway:.45,swayHz:.1,wander:!0,height:[.2,4],blink:1,density:.45,alpha:.9},polvo:{fall:-.04,wind:[.9,.12],sway:.25,swayHz:.4,height:[0,2.2],blink:0,density:.8,alpha:.7},motas:{fall:-.03,wind:[.05,0],sway:.35,swayHz:.07,wander:!0,height:[.3,4],blink:1,density:.5,alpha:.75},chispa:{fall:.04,wind:[0,0],sway:.15,swayHz:.1,wander:!0,height:[.2,4],blink:2,density:.45,alpha:1},confeti:{shadow:!0,spin:5,fall:-.45,wind:[.2,.05],sway:.45,swayHz:.5,height:[0,6],blink:0,density:.35,alpha:1},papel:{shadow:!0,spin:2.5,fall:-.25,wind:[.3,.05],sway:.8,swayHz:.25,height:[0,6],blink:0,density:.12,alpha:1},vapor:{fall:.35,wind:[.15,0],sway:.3,swayHz:.2,height:[0,3.5],blink:0,density:.3,alpha:.45}},Kh={hub:[[`hoja`,[15254618,14716986]],[`brasa`,[16757575,16742958],.35]],bosque:[[`hoja`,[15254618,14716986,13166712]],[`luciernaga`,[15794058],.6]],selva:[[`hoja`,[13166712,15259744]],[`luciernaga`,[14745466]]],medieval:[[`hoja`,[15254618,14256698,13166712]]],perros:[[`hoja`,[14721088,13133358,15254618]]],ruinas:[[`hoja`,[12100170,9215558],.6],[`polvo`,[14207136],.6]],bestias:[[`hoja`,[15254618,14260794]],[`chispa`,[16773280],.4]],dinosaurio:[[`hoja`,[13166712,15259744]],[`esporas`,[15794064],.6]],granja:[[`esporas`,[16773258,16316640]],[`hoja`,[14205024],.5]],gatos:[[`petalo`,[16758992,16773364]]],yokai:[[`petalo`,[16756936,16769258]],[`fatuo`,[10148095],.6]],vampiro:[[`petalo`,[12593212,9050152],.6],[`fatuo`,[13672703],.5]],feerico:[[`chispa`,[16756976,10547455]],[`luciernaga`,[16761080],.8]],onirico:[[`chispa`,[16774848,13154559]],[`luciernaga`,[12099839],.7]],dulces:[[`confeti`,[16759e3,12120319,16773280,13172664]]],circo:[[`confeti`,[14183018,15254618,6986456,15261904],.5],[`polvo`,[13154456],.4]],juguete:[[`confeti`,[16734810,16765498,4892927,5953642]]],arcade:[[`chispa`,[16730864,4911359,16773194]],[`confeti`,[16730864,4911359,16773194,7012202],.4]],neon:[[`chispa`,[16730840,4909311]],[`motas`,[12611839],.6]],turbo:[[`polvo`,[13158608,10526896],1.2],[`chispa`,[16764992],.3]],oficina:[[`papel`,[16052452,15262936,16775368]],[`motas`,[15261896],.5]],biblioteca:[[`motas`,[16771248]],[`papel`,[15787208],.4]],templo:[[`motas`,[16769136,16773296]],[`chispa`,[16769136],.4]],olimpo:[[`pluma`,[16777215,15790312]],[`chispa`,[16773280],.4]],cielo:[[`pluma`,[16777215,15267071]]],valhalla:[[`nieve`,[16054527],.6],[`chispa`,[16769136],.4]],hielo:[[`nieve`,[15267071,13165823],.6],[`chispa`,[12119295],.3]],tundra:[[`ventisca`,[16054527,14215416]]],andes:[[`ventisca`,[16054527],.7]],gigantes:[[`nieve`,[16054527,14740728]]],desierto:[[`polvo`,[15259824,14205072],1.4]],salvaje:[[`polvo`,[14729344,13148256]],[`hoja`,[14200904],.3]],pirata:[[`polvo`,[16054527,14741744],.8],[`pluma`,[16777215],.3]],enanos:[[`polvo`,[14207144,12101768]],[`brasa`,[16752704],.3]],volcan:[[`ceniza`,[12102816,10129544]],[`brasa`,[16747050,16760896]]],infierno:[[`brasa`,[16738848,16756784]],[`ceniza`,[11049104],.7]],forja:[[`brasa`,[16751152,16765024],1.2],[`vapor`,[10129552],.5]],nido:[[`brasa`,[16742954,16756800]],[`ceniza`,[11575448],.6]],escamas:[[`ceniza`,[10524816,7893096]],[`motas`,[14209208],.5]],orcos:[[`ceniza`,[11050128]],[`brasa`,[16747056],.5]],fabrica:[[`vapor`,[13158600,11053224]],[`brasa`,[16760896],.5]],cocina:[[`vapor`,[16777215,15790320]],[`brasa`,[16752704],.25]],cementerio:[[`fatuo`,[10146047,12628223]],[`motas`,[11581648],.5]],cripta:[[`fatuo`,[10157978,7397536]],[`motas`,[10530968],.5]],culto:[[`fatuo`,[12611839,9453792]],[`brasa`,[12615935],.4]],arcano:[[`chispa`,[9089279,13672703]],[`motas`,[11057407],.6]],cristal:[[`chispa`,[13672703,10547455]],[`motas`,[14731519],.5]],espacio:[[`chispa`,[16777215,13162751]],[`motas`,[10531071],.5]],alien:[[`esporas`,[7012312,10551152]],[`chispa`,[7012312],.3]],abismo:[[`luciernaga`,[4905215,8030975]],[`burbuja`,[8042728],.4]],acuatico:[[`burbuja`,[14218495,11067640]],[`motas`,[13168895],.5]],limos:[[`burbuja`,[11071600,7395440]],[`esporas`,[13172592],.5]],pantano:[[`luciernaga`,[14221162]],[`esporas`,[12114032],.6]],lagartos:[[`luciernaga`,[13172586]],[`esporas`,[11061344],.6]],insectos:[[`esporas`,[16773258,14741616]],[`luciernaga`,[15269754],.6]]},qh=30,Jh=26,Yh=2,Xh=.3,Zh=`
attribute vec4 seed;   // xyz: posición inicial en la caja (0 a 1); w: azar de la partícula
attribute float tint;
uniform float time;
uniform vec2 center;
uniform vec3 box;      // ancho, alto (rango de alturas) y fondo
uniform float y0;
uniform float fall;
uniform vec2 wind;
uniform float sway;
uniform float swayHz;
uniform float wander;
uniform float blink;
uniform float alpha;
uniform float spin;
uniform float firstCell;
uniform float frames;
uniform float mode;
uniform float shadow;
varying float vAlpha;
varying float vColor;
varying float vCell;
void main() {
  float r = seed.w, ph = r * 6.2831 + time * swayHz * 6.2831 * (0.8 + 0.4 * fract(r * 7.13));
  vec3 p = seed.xyz * box;
  p.x += wind.x * time + sin(ph) * sway;
  p.z += wind.y * time + wander * cos(ph * 0.73 + r * 3.0) * sway;
  p.y += fall * time * (0.8 + 0.4 * fract(r * 3.7)) + wander * sin(ph * 1.31) * sway * 0.5;
  // Se repite dentro de la caja, centrada en la mira.
  vec2 h = vec2(box.x, box.z) * 0.5;
  p.xz = center + mod(p.xz - center + h, vec2(box.x, box.z)) - h;
  float yk = mod(p.y, box.y) / box.y;
  p.y = y0 + yk * box.y;
  // Aparece y se va suave en los extremos de su altura.
  float edge = smoothstep(0.0, 0.12, yk) * smoothstep(1.0, 0.85, yk);
  float t = time * (0.6 + fract(r * 5.3)) + r * 20.0, glow = 1.0;
  if (blink == 1.0) glow = 0.2 + 0.8 * smoothstep(-0.3, 0.9, sin(t * 1.7));
  else if (blink == 2.0) { float k = fract(t * 0.35); glow = smoothstep(0.0, 0.1, k) * smoothstep(0.34, 0.12, k); }
  else if (blink == 3.0) glow = 0.45 + 0.55 * step(0.5, fract(t * 4.0)) * fract(r * 9.1 + floor(t * 4.0) * 0.37);
  float f;
  if (mode == 1.0) f = floor(mod(time * spin * (0.7 + 0.6 * fract(r * 2.9)) + r * frames, frames));
  else if (mode == 2.0) f = floor(clamp(glow * edge, 0.0, 0.999) * frames);
  else f = floor(fract(r * 13.7) * frames);
  vCell = firstCell + f;
  vAlpha = edge * alpha * (mode == 2.0 ? min(1.0, 0.35 + glow) : glow);
  vColor = tint;
  if (shadow > 0.5) {
    // Sombra en el suelo, bajo la partícula: más pequeña y más tenue cuanto más alta.
    p.y = 0.02;
    vCell = firstCell + (yk < 0.25 ? 0.0 : yk < 0.6 ? 1.0 : 2.0);
    vAlpha = 0.32 * edge * (1.0 - yk * 0.6);
  }
  gl_PointSize = 16.0;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Qh=`
uniform sampler2D atlas;
uniform vec2 atlasCells;
uniform vec3 colors[4];
uniform float lit;
varying float vAlpha;
varying float vColor;
varying float vCell;
void main() {
  if (vAlpha < 0.03) discard;
  vec2 q = floor(gl_PointCoord * ${Hh}.0);
  vec2 cell = vec2(mod(vCell, atlasCells.x), floor(vCell / atlasCells.x));
  float k = texture2D(atlas, (cell * ${Hh}.0 + q + 0.5) / (atlasCells * ${Hh}.0)).r * 255.0 / 64.0;
  if (k < 0.5) discard;
  vec3 col = vColor < 0.5 ? colors[0] : vColor < 1.5 ? colors[1] : vColor < 2.5 ? colors[2] : colors[3];
  // 1: su color; 2: sombra; 3: brillo.
  col = k < 1.5 ? col : k < 2.5 ? col * 0.7 : mix(col, vec3(1.0), 0.5);
  // Lo que luce (luciérnagas, fuegos fatuos, chispas, brasas) va más claro cuanto más brilla, para que lo recoja el brillo.
  col *= 1.0 + lit * vAlpha * 0.35;
  gl_FragColor = vec4(col, vAlpha);
}`;function $h(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function eg(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}function tg(e,t,[n,r,i=1],a){let o=Gh[n],s=Bh[o.sprite??n];Wh??=Uh();let c=Math.round(o.density*i*qh*Jh*(ni()?Xh:1)),l=$h(eg(e)+t*977),u=new Float32Array(c*4),d=new Float32Array(c);for(let e=0;e<c;e++){for(let t=0;t<4;t++)u[e*4+t]=l();d[e]=Math.floor(l()*r.length)}let f=new Mc;f.setAttribute(`position`,new _c(new Float32Array(c*3),3)),f.setAttribute(`seed`,new _c(u,4)),f.setAttribute(`tint`,new _c(d,1));let p=[0,1,2,3].map(e=>new X(r[Math.min(e,r.length-1)])),m=new Wu({vertexShader:Zh,fragmentShader:Qh,transparent:!0,depthWrite:!1,uniforms:{time:{value:0},center:{value:a},box:{value:new q(qh,o.height[1]-o.height[0],Jh)},y0:{value:o.height[0]},fall:{value:o.fall},wind:{value:new K(...o.wind)},sway:{value:o.sway},swayHz:{value:o.swayHz},wander:{value:+!!o.wander},blink:{value:o.blink},alpha:{value:o.alpha},spin:{value:o.spin??3},firstCell:{value:Wh.first[o.sprite??n]},frames:{value:s.frames.length},mode:{value:Vh[s.mode]},lit:{value:+!!o.blink},atlas:{value:Wh.texture},atlasCells:{value:new K(Wh.cols,Wh.rows)},colors:{value:p}}});m.uniforms.shadow={value:0};let h=new Ll(f,m);if(h.frustumCulled=!1,h.renderOrder=10,!o.shadow)return[h];let g=m.clone();Object.assign(g.uniforms,{center:m.uniforms.center,atlas:m.uniforms.atlas,shadow:{value:1},firstCell:{value:Wh.first.sombra},mode:{value:0},colors:{value:[0,1,2,3].map(()=>new X(Ah))}});let _=new Ll(f,g);return _.frustumCulled=!1,_.renderOrder=9,[_,h]}var ng=class{group=new As;center=new K;themeId=null;reduced=ni();setTheme(e){let t=e??`hub`;if(t!==this.themeId||this.reduced!==ni()){this.themeId=t,this.reduced=ni();for(let e of[...this.group.children])e.geometry.dispose(),e.material.dispose(),this.group.remove(e);(Kh[t]??[]).forEach((e,n)=>this.group.add(...tg(t,n,e,this.center)))}}update(e,t,n){this.center.set(e,t-Yh);for(let e of this.group.children)e.material.uniforms.time.value=n}},rg={clouds:.3,cloudSize:9,wind:[.35,.12],haze:.22,hazeFrom:.55,vignette:.22,grain:.02,grainFps:10,light:.06,bloom:.8,bloomFrom:.3},ig=new Set([`hielo`,`biblioteca`,`cristal`,`cripta`,`vampiro`,`culto`,`arcano`,`abismo`,`enanos`,`fabrica`,`oficina`,`espacio`,`arcade`,`cocina`,`limos`,`forja`,`juguete`,`templo`]),ag=[`completo`,`ligero`,`sin efectos`];function og(){let e=typeof location>`u`?null:new URLSearchParams(location.search).get(`fx`);if(e===null)return rg;let t=new Set(e.split(`,`));return{...rg,clouds:t.has(`nubes`)?rg.clouds:0,haze:t.has(`bruma`)?rg.haze:0,vignette:t.has(`vineta`)?rg.vignette:0,grain:t.has(`grano`)?rg.grain:0,light:t.has(`luz`)?rg.light:0,bloom:t.has(`brillo`)?rg.bloom:0}}function sg(e){if(e===null)return[.86,.83,.75];let t=(e%360+360)%360/360,n=.76,r=1.04-n*.28,i=2*n-r,a=e=>(e=(e+1)%1,e<1/6?i+.8064000000000004*e:e<1/2?r:e<2/3?i+.13440000000000007*(2/3-e)*6:i);return[a(t+1/3),a(t),a(t-1/3)]}var cg=`
uniform vec2 artSize;
uniform vec2 groundCenter;
uniform vec2 groundSize;
uniform float time;
uniform vec3 air;
uniform float fxClouds, fxCloudSize, fxHaze, fxHazeFrom, fxVignette, fxGrain, fxGrainFps, fxLight, fxBloom;
uniform vec2 fxWind;
uniform sampler2D bloomMap;

float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}

vec3 atmosphere(vec3 c, vec2 uv) {
  // Sombras de nubes: el punto del suelo bajo el píxel (aproximado, sin perspectiva) en casillas, con el viento.
  if (fxClouds > 0.0) {
    vec2 g = groundCenter + (uv - 0.5) * groundSize;
    vec2 q = g / fxCloudSize - fxWind * time / fxCloudSize;
    float n = vnoise(q) * 0.65 + vnoise(q * 2.3 + 7.1) * 0.35;
    float shade = smoothstep(0.45, 0.62, n) * fxClouds;
    c *= 1.0 - shade * vec3(1.0, 0.96, 0.88);
  }
  // Luz cálida desde arriba a la izquierda.
  if (fxLight > 0.0) {
    float k = clamp(dot(uv - 0.5, vec2(-0.75, 0.75)) + 0.5, 0.0, 1.0);
    vec3 warm = vec3(1.0 + fxLight, 1.0 + fxLight * 0.5, 1.0 - fxLight), cool = vec3(1.0 - fxLight, 1.0 - fxLight * 0.5, 1.0 + fxLight * 0.7);
    c *= mix(cool, warm, k);
  }
  // Brillo suave de lo luminoso (lava, cristales, neón), con un toque cálido.
  if (fxBloom > 0.0) c += texture2D(bloomMap, uv).rgb * fxBloom * vec3(1.0, 0.95, 0.88);
  // Bruma: lo lejano se funde con el aire.
  if (fxHaze > 0.0) c = mix(c, air, smoothstep(fxHazeFrom, 1.0, uv.y) * fxHaze);
  // Viñeta.
  if (fxVignette > 0.0) {
    vec2 d = (uv - 0.5) * vec2(artSize.x / artSize.y, 1.0);
    c *= 1.0 - smoothstep(0.42, 1.0, length(d)) * fxVignette;
  }
  // Grano por píxel de arte.
  if (fxGrain > 0.0) c += (h21(uv * artSize + floor(time * fxGrainFps) * 17.0) - 0.5) * 2.0 * fxGrain;
  return c;
}`,lg=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,ug=`
uniform sampler2D map;
varying vec2 vUv;
void main() { gl_FragColor = vec4(texture2D(map, vUv).rgb, 1.0); }`,dg=`
uniform sampler2D map;
uniform float from;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(map, vUv).rgb;
  float hi = max(c.r, max(c.g, c.b)), lo = min(c.r, min(c.g, c.b));
  gl_FragColor = vec4(c * smoothstep(from, from + 0.25, (hi - lo) * hi), 1.0);
}`,fg=`
uniform sampler2D map;
uniform vec2 dir;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(map, vUv).rgb * 0.227;
  c += (texture2D(map, vUv + dir * 1.385).rgb + texture2D(map, vUv - dir * 1.385).rgb) * 0.316;
  c += (texture2D(map, vUv + dir * 3.231).rgb + texture2D(map, vUv - dir * 3.231).rgb) * 0.07;
  gl_FragColor = vec4(c, 1.0);
}`,pg=`
uniform sampler2D map;
uniform mat3 grade;
uniform vec3 offset;
varying vec2 vUv;
${cg}
void main() {
  vec3 c = atmosphere(texture2D(map, vUv).rgb, vUv);
  gl_FragColor = vec4(clamp(grade * c + offset, 0.0, 1.0), 1.0);
}`;Y.enabled=!1;var mg={magFilter:Vi,minFilter:Vi,depthBuffer:!1},hg={magFilter:Wi,minFilter:Wi,depthBuffer:!1},gg=class{renderer;scene=new Rs;camera=new Dd(30,16/9,.5,400);target;post=new $o(Eh,576,mg);bloomA=new $o(Eh/4,144,hg);bloomB=new $o(Eh/4,144,hg);quad=new nl(new Pu(2,2));quadScene=new Rs;quadCam=new Od(-1,1,1,-1,0,1);copyMat;brightMat;blurMat;postMat;fx;particles=new ng;indoor=!1;artW=Eh;artH=576;zoom=1;fxLevel=0;slowFor=0;lastFrame=0;constructor(e){this.renderer=new uh({canvas:e,antialias:!1,powerPreference:`high-performance`}),this.renderer.outputColorSpace=so,this.scene.background=new X(1774880),this.target=new $o(Eh,this.artH,{...mg,depthBuffer:!0}),this.fx=og();let t=Lh(Ih()),n=this.fx,r=new J().set(t[0][0],t[0][1],t[0][2],t[1][0],t[1][1],t[1][2],t[2][0],t[2][1],t[2][2]),i=(e,t)=>new Wu({uniforms:t,vertexShader:lg,fragmentShader:e,depthTest:!1,depthWrite:!1});this.copyMat=i(ug,{map:{value:null}}),this.brightMat=i(dg,{map:{value:this.target.texture},from:{value:n.bloomFrom}}),this.blurMat=i(fg,{map:{value:null},dir:{value:new K}}),this.postMat=i(pg,{map:{value:this.target.texture},grade:{value:r},offset:{value:new q(t[0][3],t[1][3],t[2][3])},bloomMap:{value:this.bloomA.texture},artSize:{value:new K(Eh,this.artH)},groundCenter:{value:new K},groundSize:{value:new K(1,1)},time:{value:0},air:{value:new q(...sg(null))},fxClouds:{value:n.clouds},fxCloudSize:{value:n.cloudSize},fxWind:{value:new K(...n.wind)},fxHaze:{value:n.haze},fxHazeFrom:{value:n.hazeFrom},fxVignette:{value:n.vignette},fxGrain:{value:n.grain},fxGrainFps:{value:n.grainFps},fxLight:{value:n.light},fxBloom:{value:n.bloom}}),this.quadScene.add(this.quad),this.scene.add(this.particles.group),this.resize(),addEventListener(`resize`,()=>this.resize())}resize(){let e=innerWidth,t=innerHeight;if(!e||!t)return;this.renderer.setPixelRatio(devicePixelRatio),this.renderer.setSize(e,t),this.artW=Math.round(Eh/this.zoom),this.artH=Math.max(1,Math.round(this.artW*t/e)),this.target.setSize(this.artW,this.artH),this.post.setSize(this.artW,this.artH);let n=Math.max(1,Math.round(this.artW/4)),r=Math.max(1,Math.round(this.artH/4));this.bloomA.setSize(n,r),this.bloomB.setSize(n,r);let i=this.artW/this.artH,a=this.postMat.uniforms;a.artSize.value.set(this.artW,this.artH);let o=16/this.zoom;a.groundSize.value.set(o,o/i/Math.sin(50*Math.PI/180)),this.camera.aspect=i,this.camera.fov=2*Math.atan(Math.tan(17*Math.PI/180)/i)*180/Math.PI,this.camera.updateProjectionMatrix()}zoomStep(e){let t=Ph.indexOf(this.zoom),n=Ph[Math.max(0,Math.min(Ph.length-1,t+Math.sign(e)))];return n!==this.zoom&&(this.zoom=n,this.resize()),this.zoom}follow(e,t){let n=50*Math.PI/180,r=e,i=t-Dh/this.zoom,a=kh/this.zoom;this.camera.position.set(r,Math.sin(n)*a,i+Math.cos(n)*a),this.camera.lookAt(r,0,i),this.postMat.uniforms.groundCenter.value.set(r,-i),this.particles.update(r,i,performance.now()/1e3)}setBiome(e,t){this.postMat.uniforms.air.value.set(...sg(e)),this.indoor=t!==null&&ig.has(t),this.particles.setTheme(t),this.applyLevel()}applyLevel(){let e=this.postMat.uniforms,t=this.fx,n=this.fxLevel===0,r=this.fxLevel<2;e.fxClouds.value=r&&!this.indoor?t.clouds:0,e.fxHaze.value=r?t.haze:0,e.fxLight.value=r?t.light:0,e.fxVignette.value=r?t.vignette:0,e.fxGrain.value=n?t.grain:0,e.fxBloom.value=n?t.bloom:0}setFxLevel(e){this.fxLevel=Math.max(0,Math.min(ag.length-1,e)),this.applyLevel()}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.quadScene,this.quadCam)}watchSpeed(e){let t=(e-this.lastFrame)/1e3;this.lastFrame=e,!(t<=0||t>.25)&&(this.slowFor=t>1/45?this.slowFor+t:Math.max(0,this.slowFor-t*2),this.slowFor>4&&this.fxLevel<1&&(this.slowFor=0,this.setFxLevel(this.fxLevel+1),console.info(`Efectos: `+ag[this.fxLevel]+` (el equipo no llega a 45 fps)`)))}render(){let e=performance.now();if(this.watchSpeed(e),this.postMat.uniforms.time.value=e/1e3,this.renderer.setRenderTarget(this.target),this.renderer.render(this.scene,this.camera),this.postMat.uniforms.fxBloom.value>0){let e=(e,t,n)=>this.blurMat.uniforms.dir.value.set(t/e.width,n/e.height);this.pass(this.brightMat,this.bloomA),this.blurMat.uniforms.map.value=this.bloomA.texture,e(this.bloomA,1,0),this.pass(this.blurMat,this.bloomB),this.blurMat.uniforms.map.value=this.bloomB.texture,e(this.bloomB,0,1),this.pass(this.blurMat,this.bloomA)}this.pass(this.postMat,this.post),this.copyMat.uniforms.map.value=this.post.texture,this.pass(this.copyMat,null)}bench(e=120){let t=this.renderer.getContext(),n=this.fxLevel,r={};for(let n=0;n<ag.length;n++){this.setFxLevel(n),this.render(),t.finish();let i=performance.now();for(let t=0;t<e;t++)this.render();t.finish(),r[ag[n]]=+((performance.now()-i)/e).toFixed(3)}return this.setFxLevel(n),this.slowFor=0,this.lastFrame=performance.now(),r}},_g=`/rpg-anillos/arte/`,vg=new yd;function yg(e){return vg.loadAsync(e).then(e=>(e.magFilter=Vi,e.minFilter=Vi,e.generateMipmaps=!1,e.colorSpace=``,e))}var bg=null,xg=new Map;async function Sg(){return bg||=await(await fetch(_g+`biomas.json`)).json(),bg}function Cg(e){let t=xg.get(e);return t||(t=Sg().then(async t=>{let n=t[e]?e:wg,r=_g+`biomas/`+n+`/`,[i,a,o]=await Promise.all([`piso`,`muro`,`cara`].map(e=>yg(r+e+`.png`)));for(let e of[i,a,o])e.wrapS=e.wrapT=Ri;return{floor:i,top:a,face:o,style:t[n]}}),xg.set(e,t)),t}var wg=`bosque`,Tg=new Map;function Eg(e=`heroe`){let t=Tg.get(e);return t||(t=(async()=>{let t=e!==`heroe`&&(await jg())?.arquetipos?.[e];if(e!==`heroe`&&!t)return Eg(`heroe`);let n=_g+(t?`arquetipos/`+e+`/`:`heroe/`),r=await(await fetch(n+`heroe_anim.json`)).json(),i=Object.keys(r.tiras),a=await Promise.all(i.map(e=>yg(n+e+`.png`)));return{...r,textures:Object.fromEntries(i.map((e,t)=>[e,a[t]]))}})(),Tg.set(e,t)),t}var Dg=null,Og=new Map;function kg(e){let t=Og.get(e);return t||(Dg??=fetch(_g+`props.json`).then(e=>e.ok?e.json():{}).catch(()=>({})),t=Dg.then(async t=>{let n=t[e];if(!n)return null;let r=_g+`props/`+e+`/`;return{muro:await Promise.all(n.muro.map(async(e,t)=>Object.fromEntries(await Promise.all(Object.entries(e.vistas).map(async([n,i])=>[n,{...i,nombre:e.nombre,texture:await yg(r+`muro_`+t+`_`+n+`.png`)}]))))),deco:await Promise.all(n.deco.map(async(e,t)=>e?{...e,texture:await yg(r+`deco_`+t+`.png`)}:null)),interes:await Promise.all((n.interes??[]).map(async(e,t)=>({...e,texture:await yg(r+`interes_`+t+`.png`)})))}}),Og.set(e,t)),t}var Ag=null;function jg(){return Ag??=fetch(_g+`combate.json`).then(e=>e.ok?e.json():null).catch(()=>null),Ag}function Mg(e,t,n){let r=t&&t!==`heroe`?e.arquetipos?.[t]:void 0;if(r)return{url:_g+`combate/arquetipos/`+t+(n===`rival`?`_rival`:``)+`.png`,f:r[n]};let i=n===`rival`?e.rival:e.heroe;return i?{url:_g+`combate/`+n+`.png`,f:i}:null}async function Ng(e,t,n,r){let i=await jg(),a=i?.criaturas[t];if(!i||!a)return null;let o=i.fondos[e]??i.fondos[a.tema];return{frameW:i.ancho,frameH:i.alto,bg:_g+o,enemy:{url:_g+`combate/criaturas/`+t+`.png`,f:a},hero:Mg(i,n,`heroe`),allies:r?.map(e=>Mg(i,e,`heroe`)??void 0)}}async function Pg(e,t,n){let r=await jg(),i=r&&Mg(r,n,`rival`);if(!r||!i)return null;let a=r.fondos[e]??Object.values(r.fondos)[0];return{frameW:r.ancho,frameH:r.alto,bg:_g+a,enemy:i,hero:Mg(r,t,`heroe`)}}var Fg=null;async function Ig(e){Fg??=fetch(_g+`jefes.json`).then(e=>e.ok?e.json():{}).catch(()=>({}));let t=(await Fg)[e];return t?{w:t.w,h:t.h,ox:t.ox,oy:t.oy,texture:await yg(_g+t.url)}:null}var Lg=50*Math.PI/180,Rg=Nh(Dh);function zg(e,t=Rg){let n=e.w/t,r=e.h/t,i=new Pu(n,r);return i.translate(n/2-e.ox/t,r/2,0),i.rotateX(-Lg),{geometry:i,south:(e.h-e.oy)/t/Math.sin(Lg)}}var Bg=`
uniform vec4 uvTransform;
varying vec2 vUv;
varying float vDepth;
void main() {
  vUv = uv * uvTransform.zw + uvTransform.xy;
  mat4 m = modelMatrix;
#ifdef USE_INSTANCING
  m = m * instanceMatrix;
#endif
  vec4 base = projectionMatrix * viewMatrix * m * vec4(0.0, 0.0, 0.0, 1.0);
  vDepth = base.z / base.w;
  gl_Position = projectionMatrix * viewMatrix * m * vec4(position, 1.0);
}`,Vg=`
uniform sampler2D map;
varying vec2 vUv;
varying float vDepth;
void main() {
  vec4 c = texture2D(map, vUv);
  if (c.a < 0.5) discard;
  gl_FragColor = vec4(c.rgb, 1.0);
  // Un poco por delante del suelo en su punto de apoyo.
  gl_FragDepth = clamp(vDepth * 0.5 + 0.5 - 0.00002, 0.0, 1.0);
}`;function Hg(e){return new Wu({uniforms:{map:{value:e},uvTransform:{value:new Zo(0,0,1,1)}},vertexShader:Bg,fragmentShader:Vg})}var Ug=(e,t)=>{let n=e.zones[t];return{id:t,ring:n.ring,theme:n.theme.name,level:n.lvHi}},Wg=(e,t)=>({round:t.runIndex+1,endedBy:t.reason===`time`?`tiempo`:t.reason===`quit`?`la terminó el jugador`:`sin PB`,seconds:Math.round(t.seconds),archetype:mr(t.archetype).name,level:t.level,deepestRing:t.deepestRing,peakZoneLevel:t.peakZoneLevel,zones:t.zones,wins:t.wins,losses:t.losses,bosses:t.bosses,pbSpent:t.pbSpent,pbFromBosses:t.pbGained,pbLeft:t.pbLeft,goldEarned:t.goldEarned,loot:t.loot.map(e=>z(e).name),startedWith:t.startedWith?z(t.startedWith).name:null,kept:t.kept?z(t.kept).name:null,lastZone:Ug(e,t.lastZone),baseLevel:t.baseLevel,charLevel:t.charLevel});function Gg(e){let t=e.world;return{version:1,exportedBy:e.exportedBy,exportedAt:e.exportedAt,seed:t.seedCode,fingerprint:e.fingerprint,tuning:{...e.tuning},phase:e.phase,roundsPlayed:e.phase===`LOBBY`?0:e.runIndex+1,dragonDefeated:e.stats!==null,zonesVisited:e.zonesVisited,map:{opens:e.map.opens,seconds:Math.round(e.map.seconds)},players:e.players.map(n=>({name:n.name,score:n.score,archetypesUnlocked:n.progress.unlocked.length,baseLevel:n.progress.baseLevel,rounds:n.history.map(e=>Wg(t,e)),current:e.phase===`EXPLORE`||e.phase===`END`?{round:n.run.runIndex+1,secondsSoFar:Math.round(e.secondsSoFar),level:n.run.hero.level,deepestRing:n.run.deepestRing,peakZoneLevel:n.run.peakZoneLevel,zones:n.run.zones.length,wins:n.run.wins,losses:n.run.losses,bosses:n.run.defeatedBosses.length,pbSpent:n.run.pbSpent,pbFromBosses:n.run.pbGained,pbLeft:n.run.pb,dragonDefeated:n.run.dragonDefeated}:null})),stats:e.stats}}var Kg=4,qg=di({es:{title:`Cómo se juega`,goalH:`La meta`,goal:`Erradicar el mal de la tierra.`,mapH:`El mapa`,map:[`El campamento está en el centro. Alrededor hay anillos de zonas: cuanto más lejos, más peligro.`,`El nivel recomendado de cada zona se tiñe según su riesgo para usted: <i class="safe">verde</i>, <i class="even">amarillo</i> o <i class="danger">rojo</i>.`,`Lo que cualquiera descubre queda en el mapa compartido (M, o alejando la cámara del todo). Arrastre pegatinas y números para dibujar su camino.`],roundH:`La ronda`,round:[`Cada combate cuesta 1 PB; perderlo, 3.`,`La ronda acaba sin tiempo, sin PB o cuando usted la termine.`,`Después, el nivel y el oro vuelven a empezar. Se conservan el mapa, los personajes, <b>un solo objeto</b> (<i class="star">&#9733;</i>) y sus planos (<i class="boss">&#9670;</i>), que siguen a la venta en la tienda.`],keysH:`Controles`,keys:[[[`W`,`A`,`S`,`D`],`Moverse`],[[`Mayús`],`Correr`],[[`+`,`-`],`Acercar y alejar (o la rueda)`],[[`N`],`Música`],[[`Esc`],`Cerrar menús`]],touchKeys:[[[`Joystick`],`Apoye el pulgar izquierdo y arrastre para moverse; hasta el borde, corre`],[[`Minimapa`],`Tóquelo para abrir el mapa`],[[`Dedo`],`En combate, manténgalo para acelerar`]],cont:`Continuar`,closeKeys:`Cualquier tecla cierra la ayuda`,quit:`Terminar la ronda`,quitGroup:`Terminar mi ronda`,quitSure:`¿Seguro? Pulse otra vez`,restart:`Reiniciar la ronda`,restartNote:`Todos vuelven al campamento como al empezarla.`,restartBusy:`Espere a que terminen los combates para reiniciar.`,menu:`Volver al menú`,menuHost:`Termina la partida en esta página y cierra la sala. Una partida guardada sigue desde el inicio de su ronda.`,menuGuest:`Para volver, entre con el mismo código y el mismo nombre.`,quitNote:`Renuncia a los PB que le quedan.`,quitNoteGroup:`Renuncia a sus PB; la ronda acaba cuando acabe la de todos.`},en:{title:`How to play`,goalH:`The goal`,goal:`Eradicate evil from the land.`,mapH:`The map`,map:[`The camp is at the center. Around it lie rings of zones: the farther out, the more danger.`,`Each zone's recommended level is tinted by its risk for you: <i class="safe">green</i>, <i class="even">yellow</i> or <i class="danger">red</i>.`,`Whatever anyone discovers stays on the shared map (M, or zoom all the way out). Drag stickers and numbers onto it to draw your path.`],roundH:`The round`,round:[`Each fight costs 1 BP; losing one, 3.`,`The round ends when time or BP run out, or when you end it.`,`Then level and gold start over. You keep the map, your characters, <b>a single item</b> (<i class="star">&#9733;</i>) and your blueprints (<i class="boss">&#9670;</i>), which stay on sale in the shop.`],keysH:`Controls`,keys:[[[`W`,`A`,`S`,`D`],`Move`],[[`Shift`],`Run`],[[`+`,`-`],`Zoom (or the wheel)`],[[`N`],`Music`],[[`Esc`],`Close menus`]],touchKeys:[[[`Joystick`],`Rest your left thumb and drag to move; to the edge to run`],[[`Minimap`],`Tap it to open the map`],[[`Finger`],`In combat, hold it to speed up`]],cont:`Continue`,closeKeys:`Any key closes the help`,quit:`End the round`,quitGroup:`End my round`,quitSure:`Sure? Press again`,restart:`Restart the round`,restartNote:`Everyone goes back to camp as at its start.`,restartBusy:`Wait for the fights to end to restart.`,menu:`Back to menu`,menuHost:`Ends the game on this page and closes the room. A saved game continues from the start of its round.`,menuGuest:`To come back, join with the same code and the same name.`,quitNote:`You give up the BP you have left.`,quitNoteGroup:`You give up your BP; the round ends when everyone's does.`}}),Jg=class{root;confirmUntil=0;confirmWhat=``;confirmTimer=null;quitMode=()=>null;onQuit=()=>{};roomMode=()=>({restart:null,menu:null});onRestart=()=>{};onMenu=()=>{};constructor(e){this.root=document.createElement(`div`),this.root.className=`screen help`,this.root.hidden=!0,this.root.addEventListener(`pointerdown`,e=>{e.target===this.root&&this.hide()}),this.root.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-a]`);t?.dataset.a===`cont`&&this.hide(),t?.dataset.a===`quit`&&this.quit(t),(t?.dataset.a===`restart`||t?.dataset.a===`menu`)&&this.confirm(t,t.dataset.a)}),e.appendChild(this.root)}render(e){let t=qg(),n=e=>`<li>`+e+`</li>`,r=e?null:this.quitMode(),i=e?{restart:null,menu:null}:this.roomMode(),a=i.restart||i.menu?`<div class="quitbox roombox"><div class="row">`+(i.restart?`<button class="btn ghost" type="button" data-a="restart"`+(i.restart===`busy`?` disabled`:``)+`>`+t.restart+`</button>`:``)+(i.menu?`<button class="btn ghost" type="button" data-a="menu">`+t.menu+`</button>`:``)+`</div><small>`+[i.restart===`busy`?t.restartBusy:i.restart?t.restartNote:``,i.menu===`host`?t.menuHost:i.menu?t.menuGuest:``].filter(Boolean).join(` `)+`</small></div>`:``,o=(e,t)=>`<section><h3>`+e+`</h3><ul>`+t.map(n).join(``)+`</ul></section>`;this.root.innerHTML=`
      <div class="sheet helpsheet" role="dialog" aria-label="${t.title}">
        <h2>${t.title}</h2>
        <div class="helpcols">
          <div class="helprules">
            ${`<section class="goal"><h3>`+t.goalH+`</h3><p>`+t.goal+`</p></section>`}
            ${o(t.mapH,t.map)}
            ${o(t.roundH,t.round)}
          </div>
          <div class="helpkeys"><h3>${t.keysH}</h3><div class="keys kb">${t.keys.map(([e,t])=>`<span class="k">`+e.map(e=>`<kbd>`+e+`</kbd>`).join(``)+`</span><em>`+t+`</em>`).join(``)}</div>
            <div class="keys tc">${t.touchKeys.map(([e,t])=>`<span class="k">`+e.map(e=>`<kbd class="tc">`+e+`</kbd>`).join(``)+`</span><em>`+t+`</em>`).join(``)}</div></div>
        </div>
        <div class="helpfoot">
          ${r?`<div class="quitbox"><button class="btn ghost" type="button" data-a="quit">`+(r===`group`?t.quitGroup:t.quit)+`</button><small>`+(r===`group`?t.quitNoteGroup:t.quitNote)+`</small></div>`:`<span></span>`}
          ${a}
          <div class="contbox"><small class="kb">${t.closeKeys}</small><button class="btn" type="button" data-a="cont">${t.cont}</button></div>
        </div>
      </div>`}quit(e){let t=qg(),n=this.quitMode();if(n){if(this.confirmWhat===`quit`&&performance.now()<this.confirmUntil){this.confirmUntil=0,this.hide(),this.onQuit();return}this.confirmUntil=performance.now()+Kg*1e3,this.confirmWhat=`quit`,e.textContent=t.quitSure,e.classList.add(`sure`),this.confirmTimer&&clearTimeout(this.confirmTimer),this.confirmTimer=setTimeout(()=>{e.textContent=n===`group`?t.quitGroup:t.quit,e.classList.remove(`sure`)},Kg*1e3)}}confirm(e,t){let n=qg();if(this.confirmWhat===t&&performance.now()<this.confirmUntil){this.confirmUntil=0,this.confirmWhat=``,this.hide(),t===`restart`?this.onRestart():this.onMenu();return}this.confirmUntil=performance.now()+Kg*1e3,this.confirmWhat=t,e.textContent=n.quitSure,e.classList.add(`sure`),setTimeout(()=>{e.textContent=t===`restart`?n.restart:n.menu,e.classList.remove(`sure`)},Kg*1e3)}get open(){return!this.root.hidden}onToggle=null;show(e=!1){this.confirmUntil=0,this.confirmWhat=``,this.render(e),this.root.hidden=!1,this.onToggle?.(!0)}hide(){this.root.hidden||(this.root.hidden=!0,this.onToggle?.(!1))}},Yg={hub:[`Central Camp`,`Campfire`,`Shop`,`Lookout`],bosque:[`Little Woods`,`Sunny Glade`,`Thick Woods`,`Fern Hollow`],acuatico:[`Aquatic Reef`,`Shallows`,`Kelp Garden`,`Blue Trench`],desierto:[`Salt Desert`,`Dunes`,`Salt Flat`,`Broken Oasis`],granja:[`Barnyard`,`Stable`,`Cornfield`,`Silo`],volcan:[`Blazing Volcano`,`Ash Slope`,`Lava River`,`Crater`],gatos:[`Cat Quarter`,`Back Alley`,`Rooftop`,`Garbage Dump`],perros:[`Dog Kingdom`,`Park`,`Barbecue`,`Snowy Hill`],hielo:[`Frozen Crypt`,`Glacier`,`Frost Cave`,`Blizzard`],pirata:[`Pirate Island`,`Beach`,`Hidden Cove`,`Stranded Galleon`],cementerio:[`Spectral Graveyard`,`Tombstones`,`Mausoleum`,`Low Mist`],dulces:[`Candy Garden`,`Sugar Field`,`Chocolate River`,`Toffee Factory`],dinosaurio:[`Jurassic Valley`,`Egg Plain`,`Tar Swamp`,`Fossil Canyon`],pantano:[`Fungal Swamp`,`Bog`,`Spore Forest`,`Peat Marsh`],fabrica:[`Rusted Factory`,`Assembly Hall`,`Scrapyard`,`Boiler Room`],alien:[`Alien Colony`,`Light Nest`,`Blue Crater`,`Crashed Ship`],medieval:[`Medieval Kingdom`,`Walled Village`,`Tournament`,`Castle Dungeon`],circo:[`Abandoned Circus`,`Big Top`,`Fairground`,`Backstage`],biblioteca:[`Living Library`,`Bookshelves`,`Map Room`,`Forbidden Archive`],cristal:[`Crystal Caves`,`Glittering Gallery`,`Underground Lake`,`Purple Vein`],tundra:[`Mammoth Tundra`,`Frozen Steppe`,`Encampment`,`Frozen Lake`],cielo:[`Sky Islands`,`Terraces`,`Wind Bridge`,`High Storm`],escamas:[`Scale Graveyard`,`Ossuary`,`Ravine`,`Trophy Hall`],neon:[`Neon City`,`Avenue`,`Rooftop`,`Back Alley`],forja:[`Draconic Forge`,`Foundry`,`Metal River`,`Ember Gallery`],juguete:[`Toy World`,`Playroom`,`Block Box`,`Under the Bed`],nido:[`Dragon Nest`,`Egg Ledge`,`Cliff Ledge`,`Ash Hall`],onirico:[`Dreaming Night`,`Endless Corridor`,`Mirror Lake`,`Stairs to the Ceiling`],ruinas:[`Ancient Ruins`,`Broken Plaza`,`Sunken Library`,`Crypt`],salvaje:[`Wild Savanna`,`Grassland`,`Acacia Grove`,`Dry Waterhole`],selva:[`Toxic Jungle`,`Canopy`,`Roots`,`Misty Clearing`],templo:[`Golden Temple`,`Courtyard`,`Treasure Room`,`Grand Stairway`],turbo:[`Turbo Circuit`,`Spiral Track`,`Jump Ramp`,`Pit Lane`],cripta:[`Cursed Crypt`,`Ossuary`,`Niche Corridor`,`Unholy Altar`],vampiro:[`Vampire Castle`,`Ballroom`,`Clock Tower`,`Coffin Cellar`],culto:[`Dark Temple`,`Cult Nave`,`Ritual Circle`,`Sealed Crypt`],infierno:[`Fiery Inferno`,`Sulfur Rivers`,`Pit Gates`,`Ember Throne`],limos:[`Slime Pond`,`Pond`,`Damp Cave`,`Bubbling Well`],feerico:[`Fairy Forest`,`Fairy Ring`,`Glowing Grove`,`Moss Bridge`],arcano:[`Archmage's Tower`,`Spiral Staircase`,`Laboratory`,`Observatory`],abismo:[`Deep Abyss`,`Abyssal Trench`,`Sunken City`,`Bottomless Rift`],lagartos:[`Lizardfolk Marsh`,`Reed Bed`,`Stilt Village`,`Flooded Temple`],enanos:[`Dwarven Mines`,`Lode Gallery`,`Dwarven Forge`,`Stone Bridge`],orcos:[`Orc Fortress`,`Palisade`,`Fighting Pit`,`War Camp`],gigantes:[`Giants' Mountains`,`Snowy Pass`,`Rock Throne`,`Quarry`],bestias:[`Valley of Mythic Beasts`,`High Meadow`,`Rock Nests`,`Bone Cave`],olimpo:[`Mount Olympus`,`Colonnade`,`Cretan Labyrinth`,`Cloud Summit`],yokai:[`Yokai Village`,`Bamboo Forest`,`Abandoned Temple`,`Red Bridge`],andes:[`Andean Peaks`,`Terraces`,`Stone Cairn`,`Snowcap`],valhalla:[`Halls of Valhalla`,`Feast Hall`,`Rainbow Bridge`,`Frozen Fjord`],insectos:[`Giant Insect Jungle`,`Leaf Litter`,`Anthill`,`Fallen Log`],oficina:[`Office from Hell`,`Cubicles`,`Boardroom`,`Copy Room`],espacio:[`Deep Space`,`Orbital Station`,`Asteroid Belt`,`Nebula`],arcade:[`Arcade Hall`,`Cabinet Aisle`,`Prize Counter`,`Final Screen`],cocina:[`Rebel Kitchen`,`Countertop`,`Pantry`,`Sink`]},Xg={panda:`Red Panda Fencer`,ardilla_arquera:`Squirrel Archer`,seta_heraldo:`Mushroom Herald`,topo_barrenero:`Mole Driller`,ciervo_volante:`Stag Beetle Lumberjack`,nutria:`Otter Bard`,pez_globo:`Pufferfish Trumpeter`,morena_caracola:`Conch Moray`,coral_tamborilero:`Coral Drummer`,caballito_director:`Seahorse Conductor`,calamar:`Sand Squid`,escorpion_salinero:`Salt Miner Scorpion`,momia_barrendera:`Mummy Sweeper`,cactus_boxeador:`Cactus Boxer`,chacal_caravanero:`Caravan Jackal`,gallo:`Rooster Swordsman`,cerdo:`Pig Farmer`,vaca:`Wrestler Cow`,oveja:`Cloud Sheep`,cabra:`Ramming Goat`,goblin:`Axe Goblin`,golem_lava:`Toaster Golem`,brasa_bumeranera:`Boomerang Ember`,murcielago_tamborilero:`Drummer Bat`,magma_cacique:`Magma Chieftain`,gato_callejero:`Alley Cat`,gata_jefa:`Boss Cat`,gato_maton:`Bully Cat`,gatito_vigia:`Lookout Kitten`,gato_grafitero:`Graffiti Cat`,salchicha:`Hot Dog Dachshund`,bulldog:`Guard Bulldog`,caniche:`Duchess Poodle`,pastor:`Rescue Shepherd`,chihuahua:`Furious Chihuahua`,pinguino:`Penguin Angler`,yeti_quitanieves:`Snowplow Yeti`,carambano_hockeista:`Hockey Icicle`,lobo_esquiador:`Skier Wolf`,espectro_tejedor:`Weaver Specter`,cangrejo_pirata:`Pirate Crab`,loro_bucanero:`Buccaneer Parrot`,kraken_capitan:`Captain Kraken`,morsa_contramaestre:`Bosun Walrus`,canon_cascarrabias:`Grumpy Cannon`,esqueleto:`Gravedigger Skeleton`,fantasma_campanero:`Bell-Ringer Ghost`,cuervo_poeta:`Poet Crow`,velon_velador:`Vigil Candle`,lapida_andante:`Walking Tombstone`,abeja_miel:`Honeybee`,osito_gominola:`Gummy Bear`,galleta_jengibre:`Gingerbread Cookie`,piruleta_bailarina:`Dancing Lollipop`,flan_artista:`Flan Artist`,raptor:`Raptor Hunter`,trilobite:`Trilobite Harpooner`,anquilosaurio:`Rockbreaker Ankylosaur`,pterodactilo:`Boomerang Pterodactyl`,helecho:`Fern Shaman`,sapo:`Toad Shaman`,moho_sembrador:`Mold Sower`,sanguijuela_barquera:`Leech Ferryman`,luciernaga_fisgona:`Nosy Firefly`,mandragora_grunona:`Grumpy Mandrake`,automata:`Patched Automaton`,engranaje_aceitero:`Oiler Cog`,comadreja_mecanica:`Clockwork Weasel`,grua_demoledora:`Wrecking Crane`,tornillo_pendenciero:`Brawler Bolt`,medusoide:`Medusoid Explorer`,zangano_centinela:`Sentinel Drone`,esporofago:`Spore-Eater Gatherer`,sonda_muestreadora:`Sampler Probe`,larva_pompera:`Bubble Larva`,gargola:`Sentinel Gargoyle`,caracol_caballero:`Snail Knight`,mapache_bufon:`Raccoon Jester`,erizo_escudero:`Hedgehog Squire`,armadura_encantada:`Enchanted Armor`,oso_ciclista:`Cyclist Bear`,hipo_payaso:`Clown Hippo`,pelota_malabarista:`Juggling Ball`,camaleon_ilusionista:`Illusionist Chameleon`,perezoso_trapecista:`Trapeze Sloth`,libro_mordedor:`Biting Book`,tintero_caligrafo:`Calligrapher Inkwell`,grulla_papel:`Paper Crane`,buho_notario:`Notary Owl`,pergamino_reglamentario:`Rulebook Scroll`,arana_gema:`Gem Spider`,geoda_dinamitera:`Dynamite Geode`,ajolote_espeleologo:`Caver Axolotl`,cuarzo_cantero:`Stonecutter Quartz`,eco_soprano:`Soprano Echo`,mamut:`Warrior Mammoth`,zorro_escaldo:`Skald Fox`,buey_remero:`Rower Ox`,lemming_abanderado:`Standard-Bearer Lemming`,gloton_cazador:`Wolverine Hunter`,halcon:`Aviator Falcon`,nube_senalera:`Signal Cloud`,rayo_mecanico:`Clockwork Lightning`,globo_aeronauta:`Aeronaut Balloon`,querubin:`Aviator Cherub`,dracolich:`Crowned Dracolich`,escama_viva:`Living Scale`,lagarto_oseo:`Lamplighter Bone Lizard`,garra_tumba:`Claw from Beyond`,cazadragones:`Dragonslayer Badger`,dron_patrullero:`Patrol Drone`,gato_cibernetico:`Cyber Cat`,conejo_repartidor:`Courier Rabbit`,holograma_cantante:`Singing Hologram`,rata_antenista:`Antenna Rat`,dragon_forja:`Smelter Dragon`,salamandra_acorazada:`Armored Salamander`,yunque_vivo:`Grumpy Anvil`,herrero_igneo:`Igneous Smith`,colmillo:`Tempered Fang`,soldadito_cuerda:`Wind-Up Soldier`,conejo_peluche:`Plush Bunny`,trencito_fogonero:`Stoker Toy Train`,dado_mago:`Wizard Die`,muneca_trapo:`Rag Doll`,cria_draconica:`Dragon Hatchling`,huevo_friolero:`Chilly Egg`,wyvern_lancero:`Lancer Wyvern`,guardian_alado:`Winged Guardian`,dracoide_herrero:`Dracoid Smith`,yegua_pesadilla:`Nightmare Mare`,reloj_blando:`Melting Clock`,sombra_chinesca:`Shadow Puppet`,ojo_insomne:`Sleepless Eye`,polilla_lunar:`Moon Moth`,estatua_despierta:`Awakened Statue`,lagartija_arqueologa:`Archaeologist Lizard`,armadillo_guardian:`Guardian Armadillo`,polilla_farolera:`Lamplighter Moth`,escarabajo_tesorero:`Gold Beetle Treasurer`,hiena_bandolera:`Bandit Hyena`,bufalo_guardabosques:`Ranger Buffalo`,mangosta_cazaserpientes:`Snake-Hunter Mongoose`,buitre_comensal:`Dinner-Guest Vulture`,cebra_arbitro:`Referee Zebra`,rana_dardo:`Blowgun Frog`,orquidea_perfumista:`Perfumer Orchid`,mono_explorador:`Explorer Monkey`,liana_lazadora:`Lasso Vine`,mosquito_enfermero:`Nurse Mosquito`,mono_monje:`Monk Monkey`,serpiente_oro:`Golden Serpent`,incensario:`Grumpy Censer`,guardian_jade:`Jade Guardian`,gong_vivo:`Booming Gong`,f1_escarlata:`Scarlet Formula`,f1_papaya:`Papaya Formula`,f1_plata:`Silver Arrow`,f1_verde:`Green Formula`,f1_noche:`Night Formula`,zombi_cocinero:`Zombie Cook`,necrofago:`Looter Ghoul`,zarigueya:`Necromancer Opossum`,ciempies:`Crossbow Centipede`,liche_frasco:`Lich in a Jar`,conde_vampiro:`Vampire Count`,ataud_dormilon:`Sleepy Coffin`,doncella_espectral:`Spectral Maiden`,candelabro_galante:`Gallant Candelabra`,rosa_vampira:`Vampire Rose`,mofeta_cultista:`Cultist Skunk`,llama_sacerdotisa:`Priestess Llama`,idolo_dormilon:`Sleepy Idol`,tentaculo_monaguillo:`Altar-Boy Tentacle`,tortuga_cerrojera:`Locksmith Tortoise`,diablillo_carbonero:`Coal Imp`,diablesa_tramitadora:`Red-Tape She-Devil`,cancerbero_bombero:`Firefighter Cerberus`,demonio_mayordomo:`Butler Demon`,ojo_fotografo:`Infernal Eye Photographer`,limo_fontanero:`Plumber Slime`,cubo_socorrista:`Lifeguard Cube`,azogue_ninja:`Quicksilver Ninja`,pompa_lavandera:`Laundry Bubble`,limo_cazamoscas:`Flycatcher Slime`,hada_dientes:`Tooth Fairy`,duende_zapatero:`Cobbler Elf`,unicornio_justador:`Jousting Unicorn`,ent_flautista:`Flutist Ent`,bejin_soplon:`Tattletale Puffball`,hamster_aprendiz:`Apprentice Hamster`,mimico_espia:`Spy Mimic`,capibara_astronoma:`Astronomer Capybara`,orbe_profesor:`Professor Orb`,escoba_aguadora:`Water-Carrier Broom`,profundo:`Trident Deep One`,pez_gota:`Ice-Cream Blobfish`,estrella_sheriff:`Sheriff Starfish`,pez_linterna:`Detective Lanternfish`,isopodo_cartero:`Postman Isopod`,lagarto_fumigador:`Exterminator Lizardman`,cocodrilo_juez:`Judge Crocodile`,hidra_peluquera:`Hairdresser Hydra`,naga_cetrera:`Falconer Naga`,bagre_banjoista:`Banjo Catfish`,enano_gaitero:`Bagpiper Dwarf`,kobold_tasador:`Appraiser Kobold`,golem_inspector:`Inspector Golem`,carretilla_artillera:`Gunner Cart`,gusano_deshollinador:`Chimney-Sweep Worm`,orco_forzudo:`Strongman Orc`,trol_peajero:`Tollkeeper Troll`,huargo_taxista:`Taxi Warg`,goblin_hincha:`Superfan Goblin`,jabato_recluta:`Rookie Boar`,titan_bolista:`Bowler Titan`,ciclope_quesero:`Cheesemaker Cyclops`,ogro_bicefalo:`Two-Headed Ogre Guide`,marmota_meteorologa:`Weather Marmot`,aguila_golfista:`Golfer Eagle`,grifo_tenista:`Tennis Griffin`,manticora_domadora:`Tamer Manticore`,quimera_ventrilocua:`Ventriloquist Chimera`,basilisco_escultor:`Sculptor Basilisk`,peritio_ninero:`Nanny Peryton`,minotauro_aceitunero:`Olive-Picker Minotaur`,centauro_relevista:`Relay Centaur`,harpia_camarera:`Waitress Harpy`,gorgona_transito:`Traffic Cop Gorgon`,satiro_discobolo:`Discus Satyr`,kappa_pepinero:`Cucumber Kappa`,tengu_jardinero:`Gardener Tengu`,kitsune_algodonera:`Cotton Candy Kitsune`,oni_mochero:`Mochi Oni`,kasa_cometero:`Kite Umbrella`,condor_alcalde:`Mayor Condor`,amaru_regador:`Irrigator Amaru`,ukuku_hielero:`Ice-Carrier Ukuku`,cuy_choclero:`Corn-Seller Guinea Pig`,supay_matraquero:`Rattle Supay`,draugr_afilador:`Grinder Draugr`,valquiria_portera:`Doorkeeper Valkyrie`,jotun_masajista:`Masseur Jotun`,alce_pintor:`Painter Moose`,runa_adivina:`Fortune-Teller Rune`,mantis_doctora:`Doctor Mantis`,hormiga_panadera:`Baker Ant`,escarabajo_gladiador:`Rhino Beetle Gladiator`,saltamontes_violinista:`Fiddler Grasshopper`,avispa_tatuadora:`Tattooist Wasp`,grapadora_fiestera:`Party Stapler`,impresora_telefonista:`Switchboard Printer`,silla_gerente:`Manager Chair`,taza_becaria:`Intern Mug`,archivador_evacuador:`Fire-Drill Cabinet`,koala_autoestopista:`Hitchhiker Koala`,meteorito_rockero:`Rocker Meteorite`,ovni_turista:`Tourist UFO`,satelite_lechero:`Milkman Satellite`,pulpo_cineasta:`Martian Octopus Filmmaker`,fantasma_billarista:`Pool-Shark Ghost`,invasor_gimnasta:`Gymnast Invader`,joystick_dardista:`Darts Joystick`,moneda_buscatesoros:`Treasure-Hunter Coin`,cartucho_vidriero:`Glassblower Cartridge`,tostadora_agitadora:`Agitator Toaster`,tetera_sargenta:`Sergeant Teapot`,sarten_bateadora:`Slugger Skillet`,albondiga_guerrillera:`Guerrilla Meatball`,batidora_generala:`General Blender`},Zg=[`Colosal`,`Inmortal`,`Feroz`,`Implacable`,`Terrible`,`Insaciable`,`Indomable`,`Formidable`],Qg={Colosal:`Colossal`,Inmortal:`Immortal`,Feroz:`Fierce`,Implacable:`Relentless`,Terrible:`Dreadful`,Insaciable:`Insatiable`,Indomable:`Untamed`,Formidable:`Formidable`},$g=`The Dragon at the Edge`,e_=new Map([[`hub`,{name:`Campamento Central`,subs:[`Hoguera`,`Tienda`,`Mirador`]}],...e.THEMES.map(e=>[e.id,e])]),t_=()=>ci()!==`es`;function n_(e){let t=Yg[e.id],n=e_.get(e.id);return t&&n&&n.name===e.name?t:null}function r_(e){return t_()?n_(e)?.[0]??e.name:e.name}function i_(e){if(!t_())return e.sub;let t=n_(e.theme),n=e_.get(e.theme.id),r=e.subIndex??e.theme.subs.indexOf(e.sub);return t&&n&&r>=0&&r<3&&n.subs[r]===e.sub?t[r+1]:e.sub}function a_(e,t){return!t_()||!e?t:Xg[e]??t}function o_(e){let t=e.creatureId?Xg[e.creatureId]:void 0;if(!t)return null;let n=Zg.find(t=>e.name.endsWith(` `+t));return n?Qg[n]+` `+t:null}var s_={atk:`de Filo Cruel`,agi:`de Paso Fugaz`,luc:`de la Buena Estrella`,def:`de Coraza Férrea`,hp:`de Mil Vidas`},c_={atk:`of the Cruel Edge`,agi:`of the Fleeting Step`,luc:`of the Lucky Star`,def:`of the Iron Shell`,hp:`of a Thousand Lives`};function l_(e){let t=t_()?o_(e)??e.name:e.name;return e.strong?t+` `+(t_()?c_:s_)[e.strong]:t}function u_(t){return t_()?t===0?`Center`:`Ring `+t:e.RING_NAMES[t]??String(t)}function d_(e){let t=typeof e==`string`?e:e.dragon.name;return t_()&&t===`El Dragón del Borde`?$g:t}function f_(e){return e.kind===`dragon`?d_(e.enemy.name):e.kind===`boss`?l_({name:e.enemy.name,creatureId:e.creatureId||void 0,strong:e.enemy.affinity?.strong}):a_(e.creatureId,e.enemy.name)}var p_={k:`#23401c`,G:`#3e7a2c`,g:`#56983a`,l:`#a4d266`,r:`#d8483a`,y:`#f0c040`,w:`#f4f0e0`,o:`#e08a26`,R:`#c4561e`,m:`#e0b02a`,c:`#c43a26`,d:`#4a2a1e`,b:`#9a6a3a`,B:`#6a4426`,s:`#b8b0a4`,S:`#7e766e`},m_=[[`....k...k.....`,`...kgk.klk....`,`.k.kgk.kgk.k..`,`kgkkgGkkgkkgk.`,`kglkgGggGgkgk.`,`.kGggGGggGgk..`,`..kkkkkkkkk...`],[`...k....`,`..kgk.k.`,`.klgkkgk`,`.kgGkgk.`,`kgGggk..`,`.kkkkk..`]],h_=[[`..kk....`,`.kryk...`,`.kyrk.k.`,`..kk.kgk`,`..kg.kk.`,`.kgGk...`,`..kkk...`],[`....kk..`,`...kwyk.`,`...kywk.`,`.k..kk..`,`kgk.kg..`,`.kgGgk..`,`..kkkk..`]],g_=[[`..dd...`,`.dood..`,`doooRd.`,`.dRood.`,`..dRRd.`,`...dd..`],[`.dd....`,`dmmd.d.`,`dmmmdmd`,`.dmmmmd`,`..dmdd.`,`...d...`],[`...dd.`,`..dccd`,`.dcccd`,`dccRd.`,`.ddd..`]],__=[[`..dddd..`,`.dcwccd.`,`dcccccwd`,`dddddddd`,`..dwwd..`,`..dwwd..`,`...dd...`],[`.ddd.....`,`dcwcd.dd.`,`ddddddcwd`,`.dwd.dddd`,`.dwd..dw.`,`..d...d..`]],v_=[[`.dd..`,`dBBd.`,`dbbbd`,`dooRd`,`.dRd.`,`..d..`]],y_=[[`..dd....`,`.dssd.dd`,`dsSsSdsd`,`.dddd.d.`],[`.ddd.`,`dssSd`,`.ddd.`]],b_={bosque:{moss:`#4a8a34`,dry:`#86ac44`,clearing:`#8c7a50`,litter:[...g_,...g_,...__,...v_],meadow:[...m_,...h_,...h_],sparse:[...m_,...y_,g_[0]]}},x_={...b_.bosque,litter:[...m_,...y_],meadow:[...m_,...h_],sparse:m_},S_=8,C_=3,w_=16,T_=2.9,E_=4.6;function D_(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,2147483647);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function O_(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=D_(r,i,n),u=D_(r+1,i,n),d=D_(r,i+1,n),f=D_(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}var k_=(e,t,n,r)=>(O_(e/r,t/r,n)*2+O_(e*2/r,t*2/r,n+9))/3,A_=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function j_(e,t,n){let r=e.w*S_,i=e.h*S_,a=document.createElement(`canvas`);a.width=r,a.height=i;let o=a.getContext(`2d`),s=o.createImageData(r,i),c=s.data,l=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),u=l(t.moss),d=l(t.dry),f=l(t.clearing),p=e.cells.map(e=>+(e===1));for(let t of e.features)for(let[n,r]of t.solid)p[r*e.w+n]=1;for(let t=0;t<i;t++)for(let i=0;i<r;i++){let a=Math.floor(i/S_);if(!p[Math.floor(t/S_)*e.w+a])continue;let o=e.x0+(i+.5)/S_-.5,s=e.y0+(t+.5)/S_-.5,l=(A_[(t&3)*4+(i&3)]+.5)/16,m=null;for(let t of n){let n=o-e.x0-t.x,r=s-e.y0-t.y;if(Math.sqrt(n*n+r*r)/t.r+(O_(o*1.3,s*1.3,41)-.5)*.45<1-.18*l){m=f;break}}if(!m){let e=k_(o,s,11,9),t=k_(o,s,23,13);e>.6+.05*l?m=u:t>.62+.05*l&&(m=d)}if(!m)continue;let h=(t*r+i)*4;c[h]=m[0],c[h+1]=m[1],c[h+2]=m[2],c[h+3]=255}o.putImageData(s,0,0);let m=new Bl(a);m.magFilter=m.minFilter=Vi,m.generateMipmaps=!1,m.colorSpace=``;let h=new Pu(e.w,e.h);return h.rotateX(-Math.PI/2),h.translate(e.w/2-.5,.004,e.h/2-.5),new nl(h,new Wc({map:m,alphaTest:.5}))}var M_=new Map;function N_(e){let t=M_.get(e);if(t)return t;let n=e.length,r=e[0].length,i=document.createElement(`canvas`);i.width=r,i.height=n;let a=i.getContext(`2d`);e.forEach((e,t)=>[...e].forEach((e,n)=>{e!==`.`&&(a.fillStyle=p_[e],a.fillRect(n,t,1,1))}));let o=new Bl(i);return o.magFilter=o.minFilter=Vi,o.generateMipmaps=!1,o.colorSpace=``,t={tex:o,w:r,h:n},M_.set(e,t),t}function P_(e,t,n){let r=new As,i=new Map;for(let r=1;r<e.h-1;r++)for(let a=1;a<e.w-1;a++){if(e.cells[r*e.w+a]!==1||n(a,r))continue;let o=a+e.x0,s=r+e.y0,c=Math.imul(o,374761393)^Math.imul(s,668265263);c=Math.imul(c^c>>>13,1274126177)>>>0;let l=k_(o,s,11,9)>.56,u=!l&&k_(o,s,37,11)>.6,d=l?t.litter:u?t.meadow:t.sparse;if(c%(l||u?C_:w_))continue;let f=d[(c>>>8)%d.length],p={x:a+((c>>>16&255)/255-.5)*.8,y:r+((c>>>24&255)/255-.5)*.8},m=i.get(f);m?m.push(p):i.set(f,[p])}let a=new ns;for(let[e,t]of i){let{tex:n,w:i,h:o}=N_(e),{geometry:s,south:c}=zg({w:i*2,h:o*2,ox:i,oy:o*2-2}),l=new ml(s,Hg(n),t.length);t.forEach((e,t)=>l.setMatrixAt(t,a.makeTranslation(e.x,0,e.y+c))),l.frustumCulled=!1,r.add(l)}return r}function F_(e){let t=new As;t.position.set(e.x,0,e.y);let n=new nl(new Gl(1.5,20),new Wc({color:16752704,transparent:!0,opacity:.08,depthWrite:!1,blending:2}));n.rotation.x=-Math.PI/2,n.position.y=.01,t.add(n);let r=new ml(new Pu(.09,.09),new Wc({color:16760928,transparent:!0,depthWrite:!1}),7);r.frustumCulled=!1,t.add(r);let i=new ns;return n.onBeforeRender=()=>{let e=performance.now()/1e3,t=ni(),a=t?1:1+.1*Math.sin(e*7.3)+.06*Math.sin(e*13.1);n.scale.setScalar(a),n.material.opacity=.08*a,r.visible=!t;for(let t=0;t<7;t++){let n=(e*.55+t/7)%1,a=Math.sin(e*3+t*2.1)*.18,o=e=>Math.round(e*16)/16;i.makeTranslation(o(a+(t*37%7-3)*.05),o(.6+n*1.6),o(-.1+(t*53%5-2)*.05)),i.scale(new q(1-n*.6,1-n*.6,1)),r.setMatrixAt(t,i)}r.instanceMatrix.needsUpdate=!0},t}function I_(e,t){let n=t===`hub`?x_:b_[t],r=new As;if(!n)return r;let i=e.features.find(e=>e.kit===`campamento`&&e.prop===0),a=t===`hub`?i?[{x:i.x,y:i.y-1,r:E_}]:[]:e.features.filter(e=>e.kit!==`npc`).map(e=>({x:e.x,y:e.y,r:T_}));return r.add(j_(e,n,a)),r.add(P_(e,n,(e,t)=>a.some(n=>(e-n.x)**2+(t-n.y)**2<(n.r-.6)**2))),i&&r.add(F_(i)),r}var L_=60;function R_(e){return e===0?1:e===2?Oh[0]:e===3?Oh[1]:0}var z_={0:`s`,90:`e`,[-90]:`w`,180:`n`};function B_(e,t,n){let r=new As;r.name=`zona `+e.zoneId;let i=n.props?{...e,cells:e.cells.slice()}:e;if(n.props)for(let t of e.wallProps)i.cells[t.y*e.w+t.x]=1;let a=e.features.map(e=>n.features?.[e.kit]?.interes[e.prop]??null),o=a.some(Boolean),s=e.features.length?{...i,cells:i.cells.slice()}:i;e.features.forEach((t,n)=>{if(a[n]||t.kit===`npc`)for(let[n,r]of t.solid)s.cells[r*e.w+n]=1}),r.add(V_(e,t),W_(s,t),G_(s)),n.props?r.add($_(e,n.props)):r.add(Q_(e,t)),n.ground&&r.add(I_(e,n.ground)),o&&r.add(ev(e,a));for(let n of e.exits)r.add(J_(n,t.style.flecha)),n.kind===`gate`&&r.add(X_(n));return n.bossAt&&r.add(Z_(n.bossAt[0],n.bossAt[1])),r}function V_(e,t){let n=new Pu(e.w,e.h);n.rotateX(-Math.PI/2),n.translate(e.w/2-.5,0,e.h/2-.5);let r=n.attributes.position,i=n.attributes.uv,a=t.style.pisoCasillas;for(let t=0;t<r.count;t++)i.setXY(t,(r.getX(t)+e.x0)/a,-(r.getZ(t)+e.y0)/a);return new nl(n,new Wc({map:t.floor}))}var H_=class{pos=[];uv=[];col=[];idx=[];quad(e,t,n){let r=this.pos.length/3;for(let r=0;r<4;r++)this.pos.push(e[r][0],e[r][1],e[r][2]),this.uv.push(t[r][0],t[r][1]),this.col.push(n,n,n);this.idx.push(r,r+1,r+2,r,r+2,r+3)}geometry(){let e=new Mc;return e.setAttribute(`position`,new bc(this.pos,3)),e.setAttribute(`uv`,new bc(this.uv,2)),e.setAttribute(`color`,new bc(this.col,3)),e.setIndex(this.idx),e}};function U_(e,t,n){return t>=0&&n>=0&&t<e.w&&n<e.h?e.cells[n*e.w+t]:0}function W_(e,t){let n=new H_,r=new H_,i=e.x0,a=e.y0;for(let t=0;t<e.h;t++)for(let o=0;o<e.w;o++){let s=e.cells[t*e.w+o];if(s===1)continue;let c=R_(s),l=o-.5,u=o+.5,d=t-.5,f=t+.5;n.quad([[l,c,f],[u,c,f],[u,c,d],[l,c,d]],[[l+i,-(f+a)],[u+i,-(f+a)],[u+i,-(d+a)],[l+i,-(d+a)]],1);let p=R_(U_(e,o,t+1));p<c&&r.quad([[l,p,f],[u,p,f],[u,c,f],[l,c,f]],[[l+i,p],[u+i,p],[u+i,c],[l+i,c]],1);let m=R_(U_(e,o+1,t));m<c&&r.quad([[u,m,f],[u,m,d],[u,c,d],[u,c,f]],[[-(f+a),m],[-(d+a),m],[-(d+a),c],[-(f+a),c]],Mh);let h=R_(U_(e,o-1,t));h<c&&r.quad([[l,h,d],[l,h,f],[l,c,f],[l,c,d]],[[d+a,h],[f+a,h],[f+a,c],[d+a,c]],Mh)}let o=-60.5,s=e.w-.5+L_,c=e.h-.5+L_,l=[[o,-60.5,s,-.5],[o,e.h-.5,s,c],[o,-.5,-.5,e.h-.5],[e.w-.5,-.5,s,e.h-.5]];for(let[e,t,r,o]of l)n.quad([[e,1,o],[r,1,o],[r,1,t],[e,1,t]],[[e+i,-(o+a)],[r+i,-(o+a)],[r+i,-(t+a)],[e+i,-(t+a)]],1);let u=new As;return u.add(new nl(n.geometry(),new Wc({map:t.top,vertexColors:!0}))),u.add(new nl(r.geometry(),new Wc({map:t.face,vertexColors:!0}))),u}function G_(e){let t=[],n=(e,n)=>t.push(e[0],e[1],e[2],n[0],n[1],n[2]);for(let t=0;t<e.h;t++)for(let r=0;r<e.w;r++){let i=e.cells[t*e.w+r];if(i===1)continue;let a=R_(i),o=r-.5,s=r+.5,c=t-.5,l=t+.5,u=R_(U_(e,r,t+1)),d=R_(U_(e,r,t-1)),f=R_(U_(e,r+1,t)),p=R_(U_(e,r-1,t));u<a&&n([o,a,l],[s,a,l]),d<a&&n([o,a,c],[s,a,c]),f<a&&n([s,a,c],[s,a,l]),p<a&&n([o,a,c],[o,a,l]),u<a&&f<a&&n([s,Math.max(u,f),l],[s,a,l]),u<a&&p<a&&n([o,Math.max(u,p),l],[o,a,l])}let r=new Mc;return r.setAttribute(`position`,new bc(t,3)),new jl(r,new yl({color:Ah}))}var K_=[[-.6,-.18],[.1,-.18],[.1,-.45],[.75,0],[.1,.45],[.1,.18],[-.6,.18]],q_=ju.triangulateShape(K_.map(([e,t])=>new K(e,t)),[]);function J_(e,t){let n=new As;for(let r of Mn){let i=e.x-e.dx*r,a=e.y-e.dy*r;for(let[r,o,s]of[[1.18,.008,Ah],[1,.014,new X(t).getHex()]]){let t=[];for(let n of q_)for(let s of n){let[n,c]=K_[s];t.push(i+r*(n*e.dx-c*e.dy),o,a+r*(n*e.dy+c*e.dx))}let c=new Mc;c.setAttribute(`position`,new bc(t,3));let l=new Wc({color:s,side:2});n.add(new nl(c,l))}}return n}function Y_(e,t,n,r){let i=new Wl(e,t,n),a=new As,o=new X(r),s=[Mh,Mh,1.25,1,1,1].map(e=>new Wc({color:o.clone().multiplyScalar(e)}));return a.add(new nl(i,s)),a.add(new jl(new Xl(i),new yl({color:Ah}))),a}function X_(e){let t=new As,n=-e.dy,r=e.dx;for(let i of[-1,1]){let a=Y_(.5,2,.5,jh);a.position.set(e.x+n*3*i,1,e.y+r*3*i),t.add(a)}let i=Y_(6.5,.35,.5,jh);return i.position.set(e.x,2.1,e.y),i.rotation.y=-Math.atan2(r,n),t.add(i),t}function Z_(e,t,n=1.15){let r=new As,i=new Wc({color:16054527,side:2});for(let e of[n,n*.82]){let t=new nl(new Fu(e-.035,e+.035,40),i);t.rotation.x=-Math.PI/2,r.add(t)}for(let e of[0,Math.PI/3]){let t=[0,1,2].map(t=>{let r=e+2*Math.PI*t/3+Math.PI/2;return new q(n*.82*Math.cos(r),0,-n*.82*Math.sin(r))});for(let e=0;e<3;e++){let n=t[e],a=t[(e+1)%3],o=new nl(new Pu(n.distanceTo(a),.06),i);o.rotation.x=-Math.PI/2,o.rotation.z=Math.atan2(-(a.z-n.z),a.x-n.x),o.position.copy(n).add(a).multiplyScalar(.5),r.add(o)}}return r.position.set(e,.02,t),r}function Q_(e,t){let n=new As;if(!e.decos.length)return n;let r=new Wl(.5,.45,.5);r.translate(0,.225,0);let i=new ml(r,new Wc({map:t.top}),e.decos.length),a=new ns;return e.decos.forEach((e,t)=>i.setMatrixAt(t,a.makeTranslation(e.x,0,e.y))),n.add(i),n}function $_(e,t){let n=new As,r=new Map,i=(e,t,n,i)=>{if(!e)return;let a=r.get(e);a?a.push({x:t,y:n,scale:i}):r.set(e,[{x:t,y:n,scale:i}])};for(let n of e.wallProps){let e=t.muro[n.prop];i(e?.[z_[n.facing]]??e?.s,n.x,n.y,1)}for(let n of e.decos)i(t.deco[n.prop],n.x,n.y,n.scale);let a=new ns,o=new ns;for(let[e,t]of r){let{geometry:r,south:i}=zg(e),s=new ml(r,Hg(e.texture),t.length);t.forEach((e,t)=>s.setMatrixAt(t,a.makeTranslation(e.x,0,e.y+i*e.scale).multiply(o.makeScale(e.scale,e.scale,e.scale)))),s.frustumCulled=!1,n.add(s)}return n}function ev(e,t){let n=new As;return e.features.forEach((e,r)=>{let i=t[r];if(!i)return;let{geometry:a,south:o}=zg(i),s=new nl(a,Hg(i.texture));s.position.set(e.x,0,e.y+o),s.frustumCulled=!1,n.add(s)}),n}var tv=class{mesh;mat;anim;strip=``;time=0;south;constructor(e){this.anim=e;let{geometry:t,south:n}=zg({w:e.ancho,h:e.alto,ox:e.pies[0],oy:e.pies[1]});this.south=n;let r=Object.keys(e.textures)[0];this.mat=Hg(e.textures[r]),this.mesh=new nl(t,this.mat)}setAnim(e){if(e===this.anim)return;this.anim=e;let{geometry:t,south:n}=zg({w:e.ancho,h:e.alto,ox:e.pies[0],oy:e.pies[1]});this.mesh.position.z+=n-this.south,this.south=n,this.mesh.geometry.dispose(),this.mesh.geometry=t,this.strip=``}place(e,t){this.mesh.position.set(e,0,t+this.south)}update(e,t,n){let r=(n?`caminar_`:`quieto_`)+t;r!==this.strip&&(this.strip=r,this.time=0,this.mat.uniforms.map.value=this.anim.textures[r]),this.time+=e;let i=this.anim.tiras[r],a=Math.floor(this.time*this.anim.fps)%i;this.mat.uniforms.uvTransform.value.set(a/i,0,1/i,1)}},nv=2.6,rv=3.6,iv=di({es:{names:{monje:`Monje`,herrera:`Herrera`,lancero:`Lancero`,picara:`Pícara viajera`,cocinero:`Cocinero errante`,sanadora:`Sanadora de paso`},tips:{monje:[`Antes estas tierras eran tranquilas. Algo despertó en el borde del mundo, y el mal se fue extendiendo hacia aquí.`,`Cada ronda empieza aquí, con el nivel en 1. Lo que crece es su personaje.`,`Dicen que lo que espera al final no lo vence nadie solo.`,`Los jefes devuelven PB. Vencer uno a tiempo alarga la ronda.`,`Cuanto más lejos del campamento, más viejo y más fuerte es el mal.`,`Si ya no le compensa seguir, puede terminar la ronda desde la Ayuda (H).`],herrera:[`Cualquier enemigo puede soltar un plano. Con él, la tienda le vende esa pieza ronda tras ronda.`,`Los jefes guardan planos especiales. Solo se los llevan quienes los vencen.`,`Al terminar la ronda solo se conserva un objeto. Elija el que mejor le haga empezar la siguiente.`,`Forjé armas para muchos que salieron hacia el borde. Pocos volvieron a buscarlas.`,`Cada familia de armas convierte una estadística en otra. Mírelo en el Equipo (E) antes de comprar.`,`La suerte (LUC) hace que los enemigos suelten más objetos.`,`Reparta los puntos de Atributos (C) en cuanto los gane: el botón brilla cuando tiene alguno.`],lancero:[`Hay seis anillos alrededor de este campamento. Nadie que yo conozca ha pisado el último.`,`En el mapa (M) puede pegar números del 1 al 5: el minimapa sigue esa ruta.`,`Dicen que a lo lejos, en el último anillo, habita algo que vuela y da miedo.`,`Con R, el mapa se colorea por riesgo para usted: rojo es demasiado.`,`Las puertas rojas llevan a zonas mucho más duras. No están ahí por capricho.`,`Corra con Mayús. El tiempo de la ronda no espera a nadie.`],picara:[`Una noche oí un rugido que venía del borde del mundo. Nadie quiso ir a ver qué era... y menos a solas.`,`Perder un combate cuesta 3 PB. A veces es mejor dar la vuelta.`,`Cada tierra tiene su jefe, y ninguno la suelta por las buenas.`,`Lo que descubre usted, lo ven todos en el mapa compartido.`,`Un buen camino se dibuja antes de andarlo.`],cocinero:[`Los que se fueron solos no volvieron. Los que fueron juntos, al menos, volvieron a cenar.`,`El oro no se guarda entre rondas: gástelo en la tienda.`,`Cada combate cuesta 1 PB. Cuéntelos antes de alejarse del campamento.`,`Dicen que su sombra tapa el sol cuando pasa. Yo prefiero no comprobarlo.`,`El medidor de encuentros sube al andar. Cuando se llena, hay pelea segura.`],sanadora:[`El mal no se irá solo. Alguien tendrá que erradicarlo, y no será una sola persona.`,`Si el nivel recomendado está en rojo, su nivel aún no alcanza.`,`He curado quemaduras que no hizo ningún fuego de aquí. Vienen de muy lejos.`,`Vuelva al campamento cuando quiera: allí no hay combates.`]}},en:{names:{monje:`Monk`,herrera:`Smith`,lancero:`Lancer`,picara:`Wandering rogue`,cocinero:`Wandering cook`,sanadora:`Passing healer`},tips:{monje:[`These lands were peaceful once. Something woke at the edge of the world, and evil has been creeping this way ever since.`,`Every round starts here, at level 1. What grows is your character.`,`They say what waits at the end cannot be beaten alone.`,`Bosses give back BP. Beating one in time makes the round longer.`,`The farther from camp, the older and stronger the evil.`,`If carrying on is not worth it, you can end the round from Help (H).`],herrera:[`Any enemy may drop a blueprint. With it, the shop sells you that piece round after round.`,`Bosses keep special blueprints. Only those who beat them take them.`,`When the round ends you keep a single item. Pick the one that gives the next round the best start.`,`I forged weapons for many who set out for the edge. Few came back for them.`,`Each weapon family turns one stat into another. Check Equipment (E) before you buy.`,`Luck (LUC) makes enemies drop more items.`,`Spend your Attribute points (C) as soon as you earn them: the button glows when you have some.`],lancero:[`There are six rings around this camp. No one I know has set foot in the last one.`,`On the map (M) you can place numbers from 1 to 5: the minimap follows that route.`,`They say that far away, in the last ring, lives something that flies and is terrifying.`,`Press R to color the map by risk for you: red is too much.`,`Red doors lead to much harder zones. They are not there on a whim.`,`Run with Shift. The round clock waits for no one.`],picara:[`One night I heard a roar from the edge of the world. No one wanted to go see what it was... least of all alone.`,`Losing a fight costs 3 BP. Sometimes turning back is wiser.`,`Every land has its boss, and none gives it up quietly.`,`Whatever you discover, everyone sees on the shared map.`,`A good path is drawn before it is walked.`],cocinero:[`Those who left alone never came back. Those who went together at least made it home for dinner.`,`Gold does not carry over between rounds: spend it at the shop.`,`Every fight costs 1 BP. Count them before you stray far from camp.`,`They say its shadow blots out the sun when it flies over. I would rather not check.`,`The encounter gauge fills as you walk. When it is full, a fight is certain.`],sanadora:[`Evil will not leave on its own. Someone has to root it out, and it will not be one person.`,`If the recommended level is red, your level is not there yet.`,`I have treated burns that no fire around here made. They come from very far away.`,`Come back to camp whenever you like: there are no fights there.`]}}}),av=new Map,ov=class{npcs=[];zone=-1;proj=new q;overlay;constructor(e){this.overlay=e}async setZone(e,t){this.clear();let n=this.zone=e.zoneId;for(let r of e.features){if(r.kit!==`npc`)continue;let e=Ln[r.prop],i=await Eg(e);if(this.zone!==n)return;let a=new tv(i);a.place(r.x,r.y),t.add(a.mesh);let o=document.createElement(`div`);o.className=`mate npc`,o.innerHTML=`<span class="bubble" hidden></span><span class="nm"></span>`,this.overlay.appendChild(o),this.npcs.push({id:e,x:r.x,y:r.y,sprite:a,tag:o,talking:!1,facing:`s`})}}clear(){for(let e of this.npcs)e.tag.remove();this.npcs=[]}update(e,t,n,r){let i=iv();for(let a of this.npcs){let o=t?t.x-a.x:99,s=t?t.y-a.y:99,c=Math.sqrt(o*o+s*s);if(!a.talking&&c<nv){a.talking=!0;let e=av.get(a.id)??0,t=i.tips[a.id];av.set(a.id,e+1),a.tag.querySelector(`.bubble`).textContent=t[e%t.length],a.facing=Math.abs(o)>Math.abs(s)?o>0?`e`:`w`:s>0?`s`:`n`}else a.talking&&c>rv&&(a.talking=!1,a.facing=`s`);a.sprite.update(e,a.facing,!1),a.tag.hidden=r,a.tag.querySelector(`.bubble`).hidden=!a.talking,a.tag.querySelector(`.nm`).textContent=i.names[a.id],this.proj.set(a.x,2.6,a.y).project(n),a.tag.style.left=((this.proj.x+1)/2*100).toFixed(2)+`%`,a.tag.style.top=((1-this.proj.y)/2*100).toFixed(2)+`%`}}},sv={ctx:null,out:null,mus:null,noise:null,sound:!0,music:!0,vol:.7};function cv(){if(sv.ctx){sv.ctx.state===`suspended`&&sv.ctx.resume();return}let e=window.AudioContext;if(!e)return;try{sv.ctx=new e}catch{return}let t=sv.ctx,n=t.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=10,n.ratio.value=5,n.attack.value=.003,n.release.value=.2,sv.out=t.createGain(),sv.out.gain.value=sv.vol,sv.out.connect(n),n.connect(t.destination),sv.mus=t.createGain(),sv.mus.gain.value=sv.music?.55:0,sv.mus.connect(sv.out);let r=t.sampleRate,i=t.createBuffer(1,r,t.sampleRate),a=i.getChannelData(0),o=7;for(let e=0;e<r;e++)o=o*16807%2147483647,a[e]=o/1073741823.5-1;sv.noise=i}var lv=()=>sv.ctx.currentTime;function uv(e,t={}){let n=sv.ctx,r=t.at??n.currentTime,i=t.dur??.1,a=t.atk??.004,o=n.createOscillator();o.type=t.type||`square`,o.frequency.setValueAtTime(e,r),t.to&&o.frequency.exponentialRampToValueAtTime(t.to,r+(t.glide??i));let s=n.createGain();s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(t.vol??.15,r+a),s.gain.exponentialRampToValueAtTime(1e-4,r+i);let c=o;if(t.lp){let e=n.createBiquadFilter();e.type=`lowpass`,e.frequency.value=t.lp,o.connect(e),c=e}c.connect(s),s.connect(t.dest||sv.out),o.start(r),o.stop(r+i+.05)}function dv(e={}){let t=sv.ctx,n=e.at??t.currentTime,r=e.dur??.1,i=e.atk??.003,a=t.createBufferSource();a.buffer=sv.noise,a.loop=!0;let o=t.createBiquadFilter();o.type=e.type||`lowpass`,o.frequency.setValueAtTime(e.f||1200,n),o.Q.value=e.q??1,e.to&&o.frequency.exponentialRampToValueAtTime(e.to,n+r);let s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(e.vol??.2,n+i),s.gain.exponentialRampToValueAtTime(1e-4,n+r),a.connect(o),o.connect(s),s.connect(e.dest||sv.out),a.start(n,Math.random()*.5),a.stop(n+r+.05)}var fv=()=>!!sv.ctx&&sv.sound,pv=(e,t)=>e*2**(t/12),mv={hit(e){fv()&&(uv(150,{type:`sine`,to:45,dur:.14,vol:.5}),dv({type:`lowpass`,f:2200,dur:.07,vol:.3}),uv(pv(330,Math.min(e,8)*2),{type:`square`,dur:.05,vol:.06,lp:3e3}))},crit(e){fv()&&(this.hit(e),uv(1200,{type:`sawtooth`,to:2600,dur:.16,vol:.07,lp:6e3}),dv({type:`highpass`,f:6e3,dur:.22,vol:.16}))},hurt(){fv()&&(uv(240,{type:`square`,to:120,dur:.13,vol:.09,lp:1800}),dv({type:`bandpass`,f:900,dur:.08,vol:.18}))},kill(){fv()&&(uv(110,{type:`sine`,to:28,dur:.55,vol:.8}),uv(55,{type:`sawtooth`,to:30,dur:.45,vol:.18,lp:400}),dv({type:`lowpass`,f:1600,to:200,dur:.6,vol:.55}))},fall(){fv()&&(uv(220,{type:`triangle`,to:55,dur:.9,vol:.3}),uv(110,{type:`square`,to:40,dur:.8,vol:.06,lp:600}))},spray(){if(!fv())return;let e=lv();for(let t=0;t<7;t++)uv(1300+t*170,{at:e+t*.028,type:`square`,dur:.045,vol:.045,lp:6e3})},stab(){if(!fv())return;let e=lv();[523.25,659.25,783.99,1046.5].forEach(t=>uv(t,{at:e,type:`square`,dur:.6,vol:.055,lp:4e3})),uv(130.8,{at:e,type:`triangle`,dur:.6,vol:.3}),uv(150,{at:e,type:`sine`,to:40,dur:.2,vol:.5}),dv({at:e,type:`highpass`,f:5e3,dur:.3,vol:.12})},defeat(){if(!fv())return;let e=lv();[392,349.2,311.1,261.6].forEach((t,n)=>uv(t,{at:e+n*.18,type:`square`,dur:.3,vol:.05,lp:2200})),uv(65.4,{at:e+.5,type:`triangle`,dur:.9,vol:.3})},tick(e){fv()&&uv(880*2**e,{type:`triangle`,dur:.035,vol:.085})},coin(e){if(!fv())return;let t=lv(),n=2**((e||0)/12);uv(987.8*n,{at:t,type:`square`,dur:.05,vol:.045,lp:5e3}),uv(1318.5*n,{at:t+.05,type:`square`,dur:.16,vol:.045,lp:5e3})},gem(e){fv()&&uv(pv(1568,e||0),{type:`sine`,dur:.06,vol:.055})},level(e,t){if(!fv())return;let n=pv(523.25,Math.min(31,Math.floor(e/5)*12+[0,2,4,7,9][e%5])),r=lv();t?([0,4,7,12].forEach((e,t)=>uv(pv(n,e),{at:r+t*.06,type:`square`,dur:.24,vol:.065,lp:5e3})),uv(n*4,{at:r+.24,type:`sine`,dur:.6,vol:.06}),dv({at:r+.2,type:`highpass`,f:7e3,dur:.35,vol:.08})):(uv(n,{type:`square`,dur:.07,vol:.055,lp:5e3}),uv(n*1.5,{at:r+.035,type:`square`,dur:.08,vol:.045,lp:5e3}))},riser(e){if(!fv())return;let t=lv();uv(140,{at:t,type:`sawtooth`,to:1600,glide:e,dur:e+.06,atk:e*.85,vol:.06,lp:3200}),dv({at:t,type:`bandpass`,f:500,to:6e3,dur:e+.05,atk:e*.9,vol:.15})},jackpot(e){if(!fv())return;let t=lv();(e?[392,523.25,659.25,783.99,1046.5,1318.5]:[523.25,659.25,783.99,1046.5]).forEach((n,r)=>uv(n,{at:t+r*.018,type:`square`,dur:e?1.3:.7,vol:.05,lp:5e3})),uv(e?98:130.8,{at:t,type:`triangle`,dur:e?1.2:.7,vol:.32}),uv(160,{at:t,type:`sine`,to:40,dur:.25,vol:.6}),[2093,2637,3136,4186].forEach((e,n)=>uv(e,{at:t+.06+n*.07,type:`sine`,dur:.5,vol:.05})),dv({at:t,type:`highpass`,f:6500,dur:e?1.1:.6,vol:.14,atk:.02})},swish(e){if(!fv())return;let t=lv(),n=.8+Math.random()*.45;dv({at:t,type:`bandpass`,f:(3800+e*300)*n,to:700*n,dur:.08+Math.random()*.05,q:2.5,vol:.13+e*.012}),e>=4&&dv({at:t+.045,type:`bandpass`,f:5200,to:900,dur:.09,q:3,vol:.1}),e>=6&&uv(pv(1760,e),{at:t,type:`triangle`,dur:.12,vol:.035})},whoosh(){fv()&&dv({type:`bandpass`,f:300,to:3200,dur:.32,atk:.16,vol:.22})}},hv={playing:!1,next:0,step:0,key:0,timer:0,rising:()=>!1};function gv(e){sv.ctx&&!hv.playing&&(hv.playing=!0,hv.step=0,hv.key=0,hv.next=lv()+.04,hv.rising=e,hv.timer=setInterval(vv,25),vv())}function _v(){hv.playing=!1,hv.timer&&clearInterval(hv.timer)}function vv(){if(hv.playing)for(;hv.next<lv()+.12;)yv(hv.step,hv.next),hv.next+=.19736842105263158,hv.step++}function yv(e,t){let n=e%8,r=sv.mus;n%4==0&&e>0&&hv.rising()&&(hv.key=Math.min(hv.key+1,9));let i=pv(55,hv.key);n%4==0&&uv(150,{at:t,type:`sine`,to:42,dur:.16,vol:.45,dest:r}),dv({at:t,type:`highpass`,f:7500,dur:n%2?.09:.03,vol:n%2?.07:.04,dest:r}),uv(pv(i*2,[0,12,0,12,7,12,0,12][n]),{at:t,type:`square`,dur:.12,vol:.065,lp:900,dest:r}),uv(pv(i*8,[0,4,7,12,16,12,7,4][n]),{at:t,type:`triangle`,dur:.1,vol:.04,dest:r})}var bv=Math.PI*2,xv=e=>1-(1-e)**3,Sv=(e,t)=>e+Math.random()*(t-e),Cv=(e,t)=>({sw:Math.min(1,e/t),tail:e<t?0:(e-t)/(1-t)}),wv=e=>{let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)},Tv=[`#fffbe6`,`#ffb547`],Ev=[`#fff0e0`,`#ff3a2a`],Dv={atk:{main:[`slash`,`twin`,`moon`],extra:[`shard`,`star`,`cut`,`ring`,`slash`,`frame`,`cross`],tier0:`slash`,rainbow:.05,pal:[[`#fff0e0`,`#ff8a3a`],[`#ffffff`,`#ff4a6a`],[`#fff6d0`,`#ffd84a`],[`#fff0e0`,`#ff3a2a`]]},agi:{main:[`flurry`,`claw`,`thrust`,`cut`],extra:[`scatter`,`cut`,`claw`,`thrust`,`wave`,`dots`,`cross`],tier0:`cut`,rainbow:.05,pal:[[`#ffffff`,`#8fe9ff`],[`#ffffff`,`#7dff9a`],[`#e6fbff`,`#3ac8ff`],[`#f0fff0`,`#c8ff3a`]]},luc:{main:[`petals`,`sigil`,`spiral`,`slash`],extra:[`sparkle`,`star`,`dots`,`tri`,`frame`,`petals`],tier0:`slash`,rainbow:.3,pal:[[`#fff6d0`,`#ffd84a`],[`#ffe6f6`,`#ff6ad5`],[`#efe6ff`,`#a86bff`],[`#fffbe6`,`#ffb547`]]},def:{main:[`moon`,`slash`,`plus`],extra:[`ring`,`frame`,`tri`,`plus`,`shard`,`dots`],tier0:`slash`,rainbow:.03,pal:[[`#ffffff`,`#9ab8ff`],[`#ffffff`,`#cfd8e8`],[`#e6fbff`,`#5a8aff`],[`#ffffff`,`#ffffff`]]},hp:{main:[`twin`,`slash`,`moon`],extra:[`ring`,`wave`,`sparkle`,`petals`,`dots`],tier0:`slash`,rainbow:.05,pal:[[`#f0fff0`,`#7dff9a`],[`#ffffff`,`#c8ff3a`],[`#ffffff`,`#ffffff`],[`#f0fff0`,`#5ee07a`]]}},Ov=class{vc;vx;V=[];VW=0;VH=0;AM=1;recent=[];T;SETS;weapon=`espada`;styleWeights={};palOff=0;onImpact=()=>{};constructor(e){this.vc=e,this.vx=e.getContext(`2d`),new ResizeObserver(()=>this.resize()).observe(e);let t=this.vx,n=(e,n,r,i,a,o)=>{t.beginPath();for(let i=0;i<=20;i++){let s=n+r*(a+(o-a)*i/20);t.lineTo(Math.cos(s)*e,Math.sin(s)*e)}for(let s=20;s>=0;s--){let c=a+(o-a)*s/20,l=n+r*c,u=i*Math.sin(Math.PI*c);t.lineTo(Math.cos(l)*(e-u),Math.sin(l)*(e-u))}t.closePath()},r=(e,n,r,i)=>{let a=-e+2*e*r,o=-e+2*e*i,s=(a+o)/2,c=n*Math.min(1,(i-r)*1.6);t.beginPath(),t.moveTo(a,0),t.lineTo(s,-c),t.lineTo(o,0),t.lineTo(s,c),t.closePath()},i=(e,n)=>{let r=e.length;if(r<2){t.beginPath();return}let i=[],a=[];for(let t=0;t<r;t++){let o=e[Math.max(0,t-1)],s=e[Math.min(r-1,t+1)],c=s[0]-o[0],l=s[1]-o[1],u=Math.hypot(c,l)||1,d=n*Math.sin(Math.PI*(t/(r-1))),f=-l/u*d,p=c/u*d;i.push([e[t][0]+f,e[t][1]+p]),a.push([e[t][0]-f,e[t][1]-p])}t.beginPath(),i.forEach(e=>t.lineTo(e[0],e[1]));for(let e=r-1;e>=0;e--)t.lineTo(a[e][0],a[e][1]);t.closePath()},a=(e,n,r,i)=>{t.beginPath();for(let a=0;a<=e;a++){let o=i+a*r%e/e*bv;t.lineTo(Math.cos(o)*n,Math.sin(o)*n)}t.closePath()},o=(e,n)=>{t.beginPath(),t.moveTo(0,-e),t.lineTo(n,-n),t.lineTo(e,0),t.lineTo(n,n),t.lineTo(0,e),t.lineTo(-n,n),t.lineTo(-e,0),t.lineTo(-n,-n),t.closePath()},s=(e,n,r)=>{if(r<=0)return;let i=n.mode===`outline`,a=n.cur,o=(r,a,o)=>{t.globalAlpha=Math.max(0,Math.min(1,a*this.AM)),i?(t.strokeStyle=o,t.lineWidth=Math.max(1,n.lw*r*1.4),e(1),t.stroke()):(t.fillStyle=o,e(r),t.fill())};o(1.9,r*.35,a[1]),o(1,r*.9,a[1]),o(.45,r,a[0])},c=(e,n,r,i)=>{let a=r.cur;t.strokeStyle=a[1],t.globalAlpha=i*.45*this.AM,t.lineWidth=n*2.4+1,t.beginPath(),t.arc(0,0,e,0,bv),t.stroke(),t.strokeStyle=a[0],t.globalAlpha=i*this.AM,t.lineWidth=n+1,t.beginPath(),t.arc(0,0,e,0,bv),t.stroke()},l=(e,n,r,i)=>{let a=r.cur;t.strokeStyle=a[1],t.globalAlpha=i*.45*this.AM,t.lineWidth=n*2.4+1,e(),t.stroke(),t.strokeStyle=a[0],t.globalAlpha=i*this.AM,t.lineWidth=n+1,e(),t.stroke()};this.T={slash:{label:`Medialuna`,life:.3,draw(e,t){let{sw:r,tail:i}=Cv(t,.28);s(t=>n(e.size,-e.span/2,e.span,e.size*.24*e.thick*t,Math.max(0,i*.9),r),e,1-i*i)}},twin:{label:`Medialuna doble`,life:.36,draw(e,t){for(let r=0;r<2;r++){let i=(t-r*.12)/.88;if(i<=0)continue;let{sw:a,tail:o}=Cv(Math.min(1,i),.28);s(t=>n(e.size*(1-r*.24),-e.span/2,e.span,e.size*.19*e.thick*t,Math.max(0,o*.9),a),e,1-o*o)}}},moon:{label:`Remolino`,life:.42,draw(e,r){t.rotate(e.dir*xv(r)*5);let{sw:i,tail:a}=Cv(r,.35);s(t=>n(e.size*.8,0,bv*.97,e.size*.18*e.thick*t,Math.max(0,a),i),e,1-a)}},flurry:{label:`Ráfaga`,life:.42,draw(e,r){for(let i=0;i<3;i++){let a=(r-i*.13)/.74;if(a<=0||a>1)continue;let{sw:o,tail:c}=Cv(a,.3);t.save(),t.translate(i*e.size*.12,i*e.size*.14),t.rotate(i*.3*e.dir),s(t=>n(e.size*.8,-e.span/2,e.span,e.size*.18*e.thick*t,Math.max(0,c*.9),o),e,1-c*c),t.restore()}}},fang:{label:`Colmillos`,life:.34,draw(e,r){let i=e.size*.45*(1-xv(Math.min(1,r*2.2))),a=r<.5?1:1-(r-.5)*2;for(let r of[-1,1])t.save(),t.translate(0,r*i),t.rotate(r<0?0:Math.PI),s(t=>n(e.size*.7,Math.PI/2-1.1,2.2,e.size*.2*e.thick*t,0,1),e,a),t.restore()}},petals:{label:`Flor de tajos`,life:.44,draw(e,r){t.rotate(e.dir*r*1.5);let{sw:i,tail:a}=Cv(r,.32);for(let r=0;r<e.n;r++)t.save(),t.rotate(r/e.n*bv),t.translate(e.size*.35,0),s(t=>n(e.size*.42,-1.2,2.4,e.size*.12*e.thick*t,Math.max(0,a*.9),i),e,1-a),t.restore()},init(e){e.n=5+Math.floor(Sv(0,3))}},cut:{label:`Corte`,life:.24,draw(e,t){let{sw:n,tail:i}=Cv(t,.22);s(t=>r(e.size,e.size*.07*e.thick*t*(1-i*.7),i*.85,n),e,1-i)}},cross:{label:`Cruz en X`,life:.3,draw(e,n){for(let i=0;i<2;i++){let a=(n-i*.16)/.84;if(a<=0)continue;let{sw:o,tail:c}=Cv(Math.min(1,a),.22);t.save(),t.rotate(i?Math.PI/2+(e.skew??0):0),s(t=>r(e.size,e.size*.07*e.thick*t*(1-c*.7),c*.85,o),e,1-c),t.restore()}},init(e){e.ang=Math.PI/4+Sv(-.4,.4),e.skew=Sv(-.35,.35)}},plus:{label:`Cruz recta`,life:.3,draw(e,n){let{sw:i,tail:a}=Cv(n,.2);for(let n=0;n<2;n++)t.save(),t.rotate(n*Math.PI/2),s(t=>r(e.size*.85,e.size*.06*e.thick*t,a*.85,i),e,1-a),t.restore();c(e.size*.18*(1+n),e.size*.02,e,1-n)},init(e){e.ang=Sv(-.15,.15)}},claw:{label:`Zarpazo`,life:.3,draw(e,n){for(let i=-1;i<=1;i++){let a=(n-(i+1)*.07)/.86;if(a<=0)continue;let{sw:o,tail:c}=Cv(Math.min(1,a),.22);t.save(),t.translate(0,i*e.size*.2),s(t=>r(e.size*(.85-Math.abs(i)*.12),e.size*.06*e.thick*t,c*.85,o),e,1-c),t.restore()}}},scatter:{label:`Lluvia de cortes`,life:.4,draw(e,n){for(let i=0;i<e.n;i++){let a=(n-wv(e.seed+i)*.4)/.6;if(a<=0||a>1)continue;let{sw:o,tail:c}=Cv(a,.3);t.save(),t.translate((wv(e.seed*3+i)-.5)*e.size*1.6,(wv(e.seed*7+i)-.5)*e.size*1.4),t.rotate(wv(e.seed*11+i)*bv),s(t=>r(e.size*.28,e.size*.035*t,c*.85,o),e,1-c),t.restore()}},init(e){e.n=8+Math.floor(Sv(0,7))}},thrust:{label:`Estocada`,life:.26,draw(e,n){let{sw:r,tail:i}=Cv(n,.18),a=1-i;s(n=>{let a=e.size*1.3,o=-a+2*a*r,s=e.size*.08*e.thick*n*(1-i*.5);t.beginPath(),t.moveTo(-a+2*a*i*.9,0),t.lineTo(o-e.size*.3,-s),t.lineTo(o,0),t.lineTo(o-e.size*.3,s),t.closePath()},e,a);for(let n=0;n<5;n++){let i=(wv(e.seed+n)-.5)*e.size*.6,o=e.size*(.4+wv(e.seed*5+n)*.6),s=-e.size+r*e.size*1.6-o;l(()=>{t.beginPath(),t.moveTo(s,i),t.lineTo(s+o,i)},e.size*.012,e,a*.7)}}},bolt:{label:`Rayo`,life:.3,draw(e,t){let n=(1-t)*(.6+.4*Math.abs(Math.sin(t*40))),r=e.size,a=Math.min(1,t/.12),o=[];for(let n=0;n<=9*a;n++)o.push([-r+2*r*n/9,(wv(e.seed*13+n+Math.floor(t*6))-.5)*e.size*.5*(n>0&&n<9)]);s(t=>i(o,e.size*.05*e.thick*t),e,n)}},wave:{label:`Ola`,life:.32,draw(e,t){let{sw:n,tail:r}=Cv(t,.26),a=e.size,o=[];for(let t=0;t<=24;t++){let i=r*.85+(n-r*.85)*t/24;o.push([-a+2*a*i,Math.sin(i*bv*e.n+e.seed*6)*e.size*.18])}s(t=>i(o,e.size*.06*e.thick*t),e,1-r)},init(e){e.n=1+Math.floor(Sv(0,2))}},spiral:{label:`Espiral`,life:.42,draw(e,t){let{sw:n,tail:r}=Cv(t,.4),a=[];for(let t=0;t<=40;t++){let i=r*.8+(n-r*.8)*t/40,o=e.size*(.1+i*.9),s=e.dir*i*bv*1.6;a.push([Math.cos(s)*o,Math.sin(s)*o])}s(t=>i(a,e.size*.07*e.thick*t),e,1-r)}},ring:{label:`Onda`,life:.32,draw(e,t){c(e.size*(.25+.9*xv(t)),e.size*.06*e.thick*(1-t),e,1-t)}},dots:{label:`Anillo de puntos`,life:.38,draw:(e,n)=>{let r=e.size*(.2+xv(n)*.9),i=e.size*.05*(1-n*.7),a=e.cur;for(let o=0;o<e.n;o++){let s=o/e.n*bv+e.dir*n*1.2;t.globalAlpha=(1-n)*this.AM,t.fillStyle=o%2?a[1]:a[0],t.fillRect(Math.cos(s)*r-i,Math.sin(s)*r-i,i*2,i*2)}},init(e){e.n=10+Math.floor(Sv(0,10))}},star:{label:`Estallido`,life:.22,draw(e,n){let r=1-n;for(let i=0;i<e.n;i++){let a=i/e.n*bv+e.seed*i,o=e.size*(.5+wv(e.seed*100+i)*.7)*xv(Math.min(1,n*2.5)),c=e.size*.05*e.thick*(1-n);t.save(),t.rotate(a),s(n=>{t.beginPath(),t.moveTo(e.size*.08,-c*n),t.lineTo(o,0),t.lineTo(e.size*.08,c*n),t.closePath()},e,r),t.restore()}},init(e){e.n=8+Math.floor(Sv(0,8))}},sparkle:{label:`Destellos`,life:.45,draw(e,n){for(let r=0;r<e.n;r++){let i=(n-wv(e.seed+r)*.45)/.55;if(i<=0||i>1)continue;let a=Math.sin(Math.PI*i);t.save(),t.translate((wv(e.seed*3+r)-.5)*e.size*1.8,(wv(e.seed*5+r)-.5)*e.size*1.5),t.rotate(i*e.dir),s(t=>o(e.size*.22*a*(.6+t*.4),e.size*.035*a*t),e,1),t.restore()}},init(e){e.n=5+Math.floor(Sv(0,6)),e.mode=`fill`}},shard:{label:`Esquirlas`,life:.42,draw:(e,n)=>{let r=e.size*xv(n)*1.4,i=e.size*.07*(1-n*.6),a=e.cur;for(let o=0;o<e.n;o++)t.save(),t.rotate(e.seed*7+o*2.39996),t.translate(r*(.6+o%3*.25),0),t.rotate(n*9+o),t.globalAlpha=(1-n)*this.AM,t.fillStyle=o%2?a[1]:a[0],t.beginPath(),t.moveTo(i*1.6,0),t.lineTo(-i,i),t.lineTo(-i,-i),t.closePath(),t.fill(),t.restore()},init(e){e.n=6+Math.floor(Sv(0,8))}},sigil:{label:`Círculo mágico`,life:.55,draw(e,n){let r=1.35-.35*xv(Math.min(1,n*3)),i=n<.6?Math.min(1,n*6):1-(n-.6)/.4,o=e.size*.8*r,s=e.size*.018;t.rotate(e.dir*n*2),c(o,s,e,i),c(o*.8,s*.7,e,i),l(()=>a(e.n,o*.8,2,0),s,e,i),e.n===6&&l(()=>a(6,o*.8,2,Math.PI/6*2),s,e,i);for(let n=0;n<16;n++){let r=n/16*bv;l(()=>{t.beginPath(),t.moveTo(Math.cos(r)*o*.86,Math.sin(r)*o*.86),t.lineTo(Math.cos(r)*o*.94,Math.sin(r)*o*.94)},s*.6,e,i)}},init(e){e.n=Math.random()<.5?5:6,e.mode=`fill`}},frame:{label:`Marco`,life:.34,draw(e,n){let r=e.size*(.25+xv(n)*.85),i=1-n;t.rotate(e.dir*n*2.5),l(()=>a(4,r,1,Math.PI/4),e.size*.04*e.thick*(1-n),e,i),e.n>1&&l(()=>a(4,r*.65,1,0),e.size*.03*(1-n),e,i)},init(e){e.n=1+Math.floor(Sv(0,2))}},tri:{label:`Triángulo`,life:.34,draw(e,n){let r=e.size*(.25+xv(n)*.85),i=1-n;t.rotate(-e.dir*n*3),l(()=>a(3,r,1,-Math.PI/2),e.size*.045*e.thick*(1-n),e,i),e.n>1&&l(()=>a(3,r*.7,1,Math.PI/2),e.size*.03*(1-n),e,i)},init(e){e.n=1+Math.floor(Sv(0,2))}},focus:{label:`Líneas de foco`,life:.36,big:!0,draw:(e,n)=>{t.rotate(-e.ang);let r=(1-n)*(.5+.5*Math.abs(Math.sin(n*30))),i=Math.hypot(this.VW,this.VH);for(let a=0;a<e.n;a++){let o=wv(e.seed*17+a+Math.floor(n*8)*.37)*bv,c=e.size*(1.1+wv(e.seed+a*3)*.8),l=i*.006*(.5+wv(a+e.seed));t.save(),t.rotate(o),s(e=>{t.beginPath(),t.moveTo(i,-l*e),t.lineTo(c,0),t.lineTo(i,l*e),t.closePath()},e,r),t.restore()}},init(e){e.n=22+Math.floor(Sv(0,18)),e.mode=`fill`,e.cur=e.col=[`#ffffff`,`#cfe6ff`],e.rainbow=!1}},screen:{label:`Corte de pantalla`,life:.55,big:!0,draw:(e,t)=>{let{sw:n,tail:i}=Cv(t,.12);s(t=>r(e.size,this.VH*.03*t*(1+i*.6)*(1-i),0,n),e,1-i*i)},init(e){e.mode=`fill`,e.thick=1}},impact:{label:`Fotograma de impacto`,life:.12,big:!0,draw(){},init:()=>{ni()||this.onImpact()}}};let u=Object.keys(this.T);this.SETS={mixto:{main:[`slash`,`twin`,`moon`,`thrust`,`fang`,`petals`,`bolt`,`flurry`,`claw`,`spiral`],extra:u.filter(e=>!this.T[e].big)},espada:{main:[`slash`,`twin`,`moon`,`flurry`],extra:[`cut`,`cross`,`claw`,`ring`,`star`,`shard`,`wave`,`scatter`,`slash`,`twin`,`plus`]},lanza:{main:[`thrust`],extra:[`thrust`,`cut`,`plus`,`dots`,`sparkle`,`ring`,`scatter`,`star`]},hacha:{main:[`slash`,`fang`],extra:[`shard`,`ring`,`star`,`claw`,`frame`,`cut`,`moon`]},punos:{main:[`star`,`ring`,`frame`],extra:[`dots`,`frame`,`sparkle`,`tri`,`star`,`ring`,`shard`,`plus`]},magia:{main:[`sigil`,`spiral`,`petals`,`bolt`],extra:[`sparkle`,`dots`,`tri`,`bolt`,`frame`,`ring`,`spiral`,`wave`]},garras:{main:[`claw`,`fang`],extra:[`scatter`,`fang`,`cut`,`shard`,`claw`,`wave`,`cross`]}}}resize(){let e=1/2.5;this.VW=this.vc.offsetWidth,this.VH=this.vc.offsetHeight,this.vc.width=Math.max(1,Math.round(this.VW*e)),this.vc.height=Math.max(1,Math.round(this.VH*e))}clear(){this.V.length=0,this.recent.length=0,this.draw()}pickKind(e){let t=e.filter(e=>!this.recent.includes(e)),n=t.length?t:e,r=n[Math.floor(Math.random()*n.length)];return this.recent.push(r),this.recent.length>3&&this.recent.shift(),r}spawn(e,t,n,r,i,a=0,o={}){let s=Object.assign({type:e,x:t,y:n,size:r,col:i,cur:i,t:-a,life:this.T[e].life*Sv(.85,1.2),ang:Sv(0,bv),thick:Sv(.7,1.5),span:Sv(1.9,3.4),dir:Math.random()<.5?-1:1,seed:Math.random()*1e3,n:0,lw:r*.035,mode:Math.random()<.18?`outline`:`fill`,echo:Math.random()<.28?1+Math.floor(Sv(0,2)):0,rainbow:Math.random()<.12,hue:Sv(0,360)},o);s.cur=s.col,this.T[e].init?.(s),this.V.push(s)}step(e){for(let t=this.V.length-1;t>=0;t--)this.V[t].t+=e,this.V[t].t>=this.V[t].life&&this.V.splice(t,1)}draw(){if((!this.VW||this.VW!==this.vc.offsetWidth)&&this.resize(),!this.VW||!this.VH)return;let e=this.vx;e.setTransform(1,0,0,1,0,0),e.globalCompositeOperation=`source-over`,e.globalAlpha=1,e.clearRect(0,0,this.vc.width,this.vc.height);let t=!this.V.length;if(this.vc.style.visibility!==(t?`hidden`:``)&&(this.vc.style.visibility=t?`hidden`:``),t)return;e.setTransform(this.vc.width/this.VW,0,0,this.vc.height/this.VH,0,0),e.globalCompositeOperation=`lighter`;let n=(t,n)=>{let r=Math.min(1,n/t.life);if(t.rainbow){let e=(t.hue+r*260)%360;t.cur=[`hsl(`+e+`,100%,92%)`,`hsl(`+e+`,100%,60%)`]}else t.cur=t.col;e.save(),e.translate(t.x,t.y),e.rotate(t.ang),this.T[t.type].draw(t,r),e.restore()};for(let e of this.V)if(!(e.t<0)){for(let t=e.echo;t>=1;t--){let r=e.t-t*.04;r>0&&(this.AM=.4/t,n(e,r))}this.AM=1,n(e,e.t)}e.globalCompositeOperation=`source-over`,e.globalAlpha=1}styleOf(){let e=Object.entries(this.styleWeights).filter(([,e])=>e>0);if(!e.length){let e=Dv.atk;return{primary:{...e,main:this.SETS[this.weapon].main,extra:this.SETS[this.weapon].extra},pick:()=>e}}e.sort((e,t)=>t[1]-e[1]);let t=e.reduce((e,[,t])=>e+t*t,0);return{primary:Dv[e[0][0]],pick:()=>{let n=Math.random()*t;for(let[t,r]of e)if(n-=r*r,n<=0)return Dv[t];return Dv[e[0][0]]}}}hit(e,t,n){(!this.VW||this.VW!==this.vc.offsetWidth)&&this.resize();let r=this.VW,i=this.VH,a=t/100*r,o=n/100*i,s=r*.15,c=this.styleOf(),l=c.primary,u=Math.max(0,e.power),d=Math.min(5,Math.floor(u)),f=Math.max(0,Math.min(1.5,Math.log10(Math.max(1,e.dmg/Math.max(1,e.base)))/1.2)),p=e.combo*1.1+(e.crit?3:0)+f*1.6+(e.last?5:0),m=[`#ffffff`,`#dfe8ff`],h=[`#ffffff`,`#ffe6a0`],g=d===0?e.crit||e.last?h:m:e.last?Ev:e.crit?Tv:l.pal[(e.combo+this.palOff)%l.pal.length],_=t=>d<=1?e.crit?h:m:e.crit&&Math.random()<.5?Tv:t.pal[(e.combo+this.palOff+Math.floor(Sv(0,4)))%t.pal.length],v={rainbow:d>=4&&Math.random()<l.rainbow,mode:d>=2&&Math.random()<.18?`outline`:`fill`},y=()=>[a+Sv(-.45,.45)*s,o+Sv(-.5,.4)*s],b=d===0?[l.tier0]:d===1?[l.tier0,l.main[0]]:l.main,x=Math.min(1,.35+.13*d);this.spawn(this.pickKind(b),a+Sv(-.1,.1)*s,o,s*(.42+x*(.1*Math.min(e.combo,6)+.25*f+(e.crit?.2:0)+(e.last?.15:0))+.04*d),g,0,{...v,mode:`fill`,echo:+(d>=2&&e.combo>=3),...d===0?{span:Sv(1.3,1.8),thick:Sv(.55,.8)}:{}});let S=[0,.25,.5,.75,1,1.15][d],C=Math.round(Math.min(11,p*1.2)*S*(ni()?.4:1));for(let e=0;e<C;e++){let e=c.pick(),t=Math.min(e.extra.length,1+d+Math.floor(p*.3*d)),[n,r]=y();this.spawn(this.pickKind(e.extra.slice(0,Math.max(1,t))),n,r,s*Sv(.35,.72)*(1+f*.3),_(e),Sv(.01,.15),{...v,rainbow:d>=4&&Math.random()<e.rainbow,echo:+(d>=2&&Math.random()<.28)})}d>=3&&(p>=5||e.crit&&e.combo>=2)&&this.spawn(`focus`,a,o,s,g,0),e.crit&&d>=1&&(this.spawn(`ring`,a,o,s*(.7+.08*d),d>=2?Tv:h,0,{mode:`fill`,rainbow:!1,echo:0}),d>=2&&this.spawn(`star`,a,o,s*1.2,Tv,0,{rainbow:!1,echo:0}),d>=3&&!e.last&&this.spawn(`impact`,a,o,s,g,0)),e.last&&(this.spawn(`ring`,a,o,s*(.9+.18*d),d>=1?Ev:m,.02,{rainbow:!1,echo:0}),d>=1&&this.spawn(`star`,a,o,s*1.9,Tv,0,{rainbow:!1,echo:0}),d>=2&&(this.spawn(`shard`,a,o,s*1.6,Tv,0,{rainbow:!1,echo:0}),this.spawn(`impact`,a,o,s,g,0)),d>=3&&this.spawn(`screen`,a+s*.2,o,Math.hypot(r,i)*.6,[`#ffffff`,`#ffd0c0`],0,{ang:Sv(-.5,-.25),rainbow:!1,echo:0}),d>=4&&this.spawn(this.pickKind([`sigil`,`petals`,`moon`]),a,o,s*1.2,Tv,.05,{rainbow:Math.random()<.5})),(e.combo>0||e.crit)&&mv.swish(Math.min(p,2+d*1.5))}},kv=class{cv;cx;P=[];W=0;H=0;lastCoin=0;lastGem=0;pitch=()=>0;constructor(e){this.cv=e,this.cx=e.getContext(`2d`),new ResizeObserver(()=>this.resize()).observe(e)}resize(){let e=Math.min(2,window.devicePixelRatio||1);this.W=this.cv.offsetWidth,this.H=this.cv.offsetHeight,this.cv.width=this.W*e,this.cv.height=this.H*e,this.cx.setTransform(e,0,0,e,0,0)}clear(){this.P.length=0}local(e,t=.5,n=.5){(!this.W||this.W!==this.cv.offsetWidth)&&this.resize();let r=e.getBoundingClientRect(),i=this.cv.getBoundingClientRect(),a=this.W/i.width;return{x:(r.left-i.left+r.width*t)*a,y:(r.top-i.top+r.height*n)*a}}burst(e,t,n,r,i){let a=this.H;for(let o=0;o<r;o++){let r=-Math.PI/2+(Math.random()-.5)*2.4,o=(.35+Math.random()*.75)*a*1.25;this.P.push({k:n,m:`phys`,x:e,y:t,vx:Math.cos(r)*o*.8,vy:Math.sin(r)*o,floor:i,spin:Math.random()*6,life:99})}}fly(e,t,n,r){e.m=`fly`,e.x0=e.x,e.y0=e.y,e.to=t,e.t=-n,e.d=r,e.cx=(e.x+t.x)/2+(Math.random()-.5)*this.W*.25,e.cy=Math.min(e.y,t.y)-this.H*(.1+Math.random()*.2)}collect(e,t){let n=0,r=0;for(let i of this.P)i.m===`phys`&&this.fly(i,i.k===`coin`?e:t,(i.k===`coin`?r++:n++)*.035+.15,.55+Math.random()*.25)}stream(e,t,n){let r={k:n,m:`fly`,x:e.x+(Math.random()-.5)*this.W*.06,y:e.y+(Math.random()-.5)*this.H*.04,spin:Math.random()*6};this.fly(r,t,0,.42+Math.random()*.18),this.P.push(r)}sparks(e,t,n,r,i=.35){for(let a=0;a<n;a++){let n=Math.random()*Math.PI*2,a=(.3+Math.random())*this.H*i;this.P.push({k:`spark`,m:`free`,x:e,y:t,vx:Math.cos(n)*a,vy:Math.sin(n)*a,life:.35+Math.random()*.3,c:r,spin:0})}}confetti(e,t,n){let r=[`#ffd84a`,`#5ef0c8`,`#ff6a8a`,`#7aa8ff`,`#ffffff`,`#ffb547`];for(let i=0;i<n;i++){let n=-Math.PI/2+(Math.random()-.5)*2.8,a=(.4+Math.random()*.9)*this.H*1.3;this.P.push({k:`conf`,m:`free`,g:1,x:e,y:t,vx:Math.cos(n)*a,vy:Math.sin(n)*a,life:1.2+Math.random()*.8,c:r[i%r.length],spin:Math.random()*6})}}step(e){let t=this.H*2.6,n=this.P;for(let r=n.length-1;r>=0;r--){let i=n[r];if(i.m===`phys`)i.vy+=t*e,i.x+=i.vx*e,i.y+=i.vy*e,i.spin+=e*9,i.y>i.floor&&(i.y=i.floor,i.vy*=-.42,i.vx*=.7,Math.abs(i.vy)<this.H*.08&&(i.vy=0));else if(i.m===`fly`){if(i.t+=e/i.d,i.spin+=e*14,i.t<0)continue;let t=Math.min(1,i.t),a=t*t,o=1-a;if(i.x=o*o*i.x0+2*o*a*i.cx+a*a*i.to.x,i.y=o*o*i.y0+2*o*a*i.cy+a*a*i.to.y,i.t>=1){n.splice(r,1),this.sparks(i.to.x,i.to.y,3,i.k===`coin`?`#ffe680`:`#b4dcff`,.2);let e=performance.now();i.k===`coin`&&e-this.lastCoin>55&&(this.lastCoin=e,mv.coin(Math.min(12,this.pitch()*3))),i.k===`gem`&&e-this.lastGem>40&&(this.lastGem=e,mv.gem(Math.min(14,this.pitch()*4)))}}else{if(i.life-=e,i.life<=0){n.splice(r,1);continue}i.g&&(i.vy+=t*.5*e),i.vx*=.04**e,i.vy*=(i.g?.5:.04)**e,i.x+=i.vx*e,i.y+=i.vy*e,i.spin+=e*10}}}draw(){let e=this.cx;e.save(),e.setTransform(1,0,0,1,0,0),e.globalAlpha=1,e.clearRect(0,0,this.cv.width,this.cv.height),e.restore();let t=!this.P.length;if(this.cv.style.visibility!==(t?`hidden`:``)&&(this.cv.style.visibility=t?`hidden`:``),t)return;let n=this.W*.0062;for(let t of this.P){let r=Math.round(t.x),i=Math.round(t.y);if(t.k===`coin`){let a=Math.max(.25,Math.abs(Math.cos(t.spin)))*n;e.fillStyle=`#5a3300`,e.fillRect(r-a-1.5,i-n-1.5,2*a+3,2*n+3),e.fillStyle=`#ffc72e`,e.fillRect(r-a,i-n,2*a,2*n),e.fillStyle=`#fff3a8`,e.fillRect(r-a*.55,i-n*.7,a*.5,n*.55)}else if(t.k===`gem`){let t=n*1.15;e.fillStyle=`#0a2050`,e.beginPath(),e.moveTo(r,i-t-2),e.lineTo(r+t*.75+2,i),e.lineTo(r,i+t+2),e.lineTo(r-t*.75-2,i),e.fill(),e.fillStyle=`#5aa8ff`,e.beginPath(),e.moveTo(r,i-t),e.lineTo(r+t*.75,i),e.lineTo(r,i+t),e.lineTo(r-t*.75,i),e.fill(),e.fillStyle=`#eaf4ff`,e.fillRect(r-t*.3,i-t*.5,t*.3,t*.4)}else if(t.k===`spark`){let a=Math.min(1,t.life*3),o=n*.45;e.globalAlpha=a,e.fillStyle=t.c,e.fillRect(r-o*2,i-o/2,o*4,o),e.fillRect(r-o/2,i-o*2,o,o*4),e.globalAlpha=1}else{e.globalAlpha=Math.min(1,t.life*2),e.fillStyle=t.c;let a=Math.abs(Math.cos(t.spin))*n*.9+1;e.fillRect(r-a/2,i-n*.45,a,n*.9),e.globalAlpha=1}}}},Av={"0_1":`Bowie Knife`,"0_3":`Iron Sword`,"0_4":`Bronze Sword`,"0_5":`Iron Axe`,"0_6":`Steel Sword`,"0_8":`Broadsword`,"0_9":`Francisca`,"0_10":`Scimitar`,"0_12":`Glaive`,"0_18":`Silver Sword`,"0_20":`Samurai Sword`,"0_47":`Mace`,"0_25":`Knight Sword`,"0_45":`Samurai Longsword`,"0_58":`Scimitar+1`,"0_76":`Samurai Sword+1`,"0_0":`Dagger`,"0_2":`Kukri Knife`,"0_11":`Battle Axe`,"0_7":`Steel Axe`,"0_13":`Trident`,"0_22":`Dark Scythe`,"0_34":`Kujang/Cursed Dagger`,"0_35":`Durandal/Cursed Axe`,"0_36":`GaeBolg/Cursed Lance`,"0_21":`Dark Sword`,"0_33":`Lvateinn/Cursed Sword`,"0_28":`Hard Sword`,"0_29":`Hard Axe`,"0_30":`Hard Lance`,"0_19":`Silver Spear`,"0_27":`Knight Spear`,"0_15":`Fire Sword`,"0_26":`Knight Rapier`,"0_17":`Thunder Sword`,"0_14":`Wind Sword`,"0_24":`Rare Gladius`,"0_37":`Excalibur/Holy Sword`,"0_38":`Swanchika/Holy Axe`,"0_39":`Longinus/Holy Lance`,"0_23":`Rare Sword`,"0_32":`Gold Axe`,"0_16":`Ice Sword`,"0_41":`Fire Sword+1`,"0_42":`Ice Sword+1`,"0_43":`Thunder Sword+1`,"0_40":`Wind Sword+1`,"0_31":`Gold Sword`,"0_46":`Estoc`,"0_48":`Green Light Sword`,"0_44":`Tomahawk`,"0_49":`Red Light Sword`,"0_50":`Estoc+1`,"0_51":`Crystal Hammer`,"0_52":`Four Gods/Red Lance`,"0_53":`Four Gods/Blue Sword`,"0_54":`Crystal Lance`,"0_79":`Wing Lance`,"0_80":`Wing Sword`,"1_1":`Iron Armor`,"1_2":`Bronze Armor`,"1_3":`Steel Armor`,"1_4":`Scale Armor`,"1_5":`Spike Armor`,"1_7":`Half Plate Armor`,"1_8":`Silver Armor`,"1_9":`Samurai Armor`,"1_12":`Knight Armor`,"1_22":`Spike Armor+1`,"1_33":`Samurai Armor+1`,"1_0":`Leather Armor`,"1_6":`Magic Armor`,"1_10":`Dark Armor`,"1_15":`Megin Gjord/Cursed Armor`,"1_13":`Hard Armor`,"1_11":`Rare Armor`,"1_14":`Gold Armor`,"1_16":`Aegis/Holy Armor`,"1_17":`Full Plate Armor`,"1_18":`Light Armor`,"1_19":`Crystal Cape`,"1_20":`Four Gods/White Armor`,"1_34":`Wing Armor`,"2_32":`Encounter Increase Ring`,"2_0":`HP Gem`,"2_12":`AGI Gem`,"2_16":`LUC Gem`,"2_4":`ATK Gem`,"2_8":`DEF Gem`,"2_20":`EXP Gem`,"2_44":`Play Gem`,"2_34":`Movement Gem`,"2_36":`Battle Point Ring`,"2_1":`HP Gem+1`,"2_13":`AGI Gem+1`,"2_17":`LUC Gem+1`,"2_5":`ATK Gem+1`,"2_9":`DEF Gem+1`,"2_31":`Encounter Reduction Ring`,"2_33":`Instant Encounter Ring`,"2_21":`EXP Gem+1`,"2_14":`AGI Gem+2`,"2_18":`LUC Gem+2`,"2_2":`HP Gem+2`,"2_6":`ATK Gem+2`,"2_10":`DEF Gem+2`,"2_26":`Critical Damage Ring`,"2_35":`Movement Gem+1`,"2_27":`First Critical Ring`,"2_37":`Battle Point Ring+1`,"2_15":`AGI Gem+3`,"2_19":`LUC Gem+3`,"2_22":`EXP Gem+2`,"2_3":`HP Gem+3`,"2_7":`ATK Gem+3`,"2_11":`DEF Gem+3`,"2_54":`Small Recovery Necklace`,"2_56":`2 Critical Ring`,"2_25":`Critical Rate Ring`,"2_28":`Combo Rate Ring`,"2_29":`Recovery Necklace`,"2_30":`Revival Necklace`,"2_39":`HP Gem+4`,"2_40":`ATK Gem+4`,"2_41":`DEF Gem+4`,"2_42":`AGI Gem+4`,"2_43":`LUC Gem+4`,"2_23":`EXP Gem+3`,"2_24":`Stat Point Crystal`,"2_52":`EXP Gem+4`,"2_38":`Battle Point Ring+2`,"2_53":`Battle Point Ring+3`,"2_45":`Play Gem+1`,"2_51":`Play Gem+2`,"2_46":`HP Gem+5`,"2_47":`ATK Gem+5`,"2_50":`LUC Gem+5`,"2_48":`DEF Gem+5`,"2_49":`AGI Gem+5`,"2_64":`Hero Gem`,"2_70":`Four Gods/Gem`},jv={ronin:[`Ronin`,`Katana`],heroe:[`Hero`,`Greatsword`],barbaro:[`Barbarian`,`War axe`],duelista:[`Solar Duelist`,`Flaming sword`],picara:[`Rogue`,`Twin daggers`],monje:[`Monk`,`Spiked mace`],herrera:[`Blacksmith`,`Hammer`],danzarina:[`Dancer`,`War fan`],esgrimista:[`Fencer`,`Rapier`],lancero:[`Lancer`,`Spear`],sanadora:[`Healer`,`Gem staff`],dama:[`Umbrella Lady`,`Umbrella`],escudero:[`Squire`,`Buckler and short sword`],alabardero:[`Halberdier`,`Halberd`],guardian:[`Guardian`,`Tower shield and mace`],cocinero:[`Cook`,`Pan and lid`]},Mv={swift:e=>`Swift `+e,fortune:e=>e+` of Fortune`,blunt:e=>`Guard `+e,heavy:e=>`Colossus `+e,light:e=>`Light `+e,mystic:e=>`Mystic `+e,plate:e=>`Reinforced `+e},Nv=e=>ci()===`en`?e.variantOf&&e.family?Mv[e.family](Av[e.variantOf]):e.exaltedOf?`Exalted `+(Fe[e.exaltedOf]??Av[e.exaltedOf]??e.name):Av[e.id]??Fe[e.id]??e.name:e.name,Pv=e=>ci()===`en`?jv[e.id]?.[0]??e.name:e.name,Fv=e=>ci()===`en`?jv[e.id]?.[1]??e.weapon:e.weapon,Iv={hp:`HP`,atk:`ATK`,def:`DEF`,agi:`AGI`,luc:`LUC`},Lv=Iv,Rv=e=>fi(Math.round(e)),zv=e=>pi(e,Math.round(e*1e3)%10?1:0),Bv=di({es:{dialog:`Equipo y tienda`,attrs:`Atributos`,gear:`Equipo`,close:`Cerrar`,equipped:`EQUIPADO`,shop:`TIENDA`,cats:{weapon:`Armas`,armor:`Armaduras`,acc:`Accesorios`},weapon:`Arma`,armor:`Armadura`,acc:e=>`Accesorio `+e,empty:e=>e+`: libre`,locked:e=>e+`: bloqueado`,unlock:e=>`Desbloquear por `+e+` G`,keptTitle:`Se conserva para la ronda siguiente`,worn:`Equipado`,inBag:`En la mochila`,planTitle:`Con su plano: se le vende el resto de la partida`,plans:e=>`Planos: `+e,buy:e=>`Comprar por `+e+` G`,equip:`Equipar`,remove:`Quitar`,kept:`&#9733; Se conserva`,keep:`&#9734; Conservar`,stat:(e,t,n)=>`+`+e+` `+t+(n?` (+`+n+`)`:``),exp:e=>`+`+e+` EXP`,pb:e=>`+`+e+` PB en cada ronda`,encMore:e=>`+`+e+` encuentros`,encLess:e=>`−`+e+` encuentros`,move:e=>`+`+e+` velocidad`,critDmg:e=>`+`+e+` daño crítico`,firstCrits:e=>e===1?`El primer golpe siempre es crítico`:`Los `+e+` primeros golpes siempre son críticos`,crit:e=>`+`+e+` prob. de crítico`,combo:e=>`+`+e+` prob. de combo`,lifesteal:e=>`Cura el `+e+` del daño que hace`,spPerLevel:e=>e+` SP por nivel (en vez de 4)`,play:(e,t)=>e+` por ronda jugada. Al empezar cada ronda, un `+t+` de que no surta efecto en toda ella`,playOn:e=>`Esta ronda: `+e,playOff:`Esta ronda: sin efecto`,revival:e=>e+` de sobrevivir a un golpe mortal con 1 HP`,instant:`Combate cuando quiera (tecla F)`,conv:(e,t,n)=>`+`+e+` de `+t+` en `+n,gold:e=>`+`+e+` oro`,freeFight:e=>e+` de que una victoria no cueste PB`,friends:e=>`+`+e+` ATK y DEF por cada aliado en el combate`,bossBane:e=>`+`+e+` ATK contra jefes y el dragón`,explorer:e=>`+`+e+` ATK y DEF por cada anillo más allá del primero`,bossPb:e=>`+`+e+` PB al vencer a un jefe`,lootLuck:e=>`+`+e+` prob. de botín`,softLoss:`Perder un combate cuesta 1 PB en vez de 3`,streak:(e,t)=>`+`+e+` ATK por cada victoria seguida (hasta `+t+`)`,startGold:e=>`Empieza cada ronda con `+e+` G`},en:{dialog:`Gear and shop`,attrs:`Attributes`,gear:`Gear`,close:`Close`,equipped:`EQUIPPED`,shop:`SHOP`,cats:{weapon:`Weapons`,armor:`Armor`,acc:`Accessories`},weapon:`Weapon`,armor:`Armor`,acc:e=>`Accessory `+e,empty:e=>e+`: empty`,locked:e=>e+`: locked`,unlock:e=>`Unlock for `+e+` G`,keptTitle:`Kept for the next round`,worn:`Equipped`,inBag:`In bag`,planTitle:`With your blueprint: on sale to you for the rest of the game`,plans:e=>`Blueprints: `+e,buy:e=>`Buy for `+e+` G`,equip:`Equip`,remove:`Remove`,kept:`&#9733; Kept`,keep:`&#9734; Keep`,stat:(e,t,n)=>`+`+e+` `+t+(n?` (+`+n+`)`:``),exp:e=>`+`+e+` EXP`,pb:e=>`+`+e+` BP each round`,encMore:e=>`+`+e+` encounters`,encLess:e=>`−`+e+` encounters`,move:e=>`+`+e+` speed`,critDmg:e=>`+`+e+` critical damage`,firstCrits:e=>e===1?`First hit is always critical`:`First `+e+` hits are always critical`,crit:e=>`+`+e+` critical rate`,combo:e=>`+`+e+` combo rate`,lifesteal:e=>`Heals `+e+` of damage dealt`,spPerLevel:e=>e+` SP per level (instead of 4)`,play:(e,t)=>e+` per round played. Each round starts with a `+t+` chance it does nothing all round`,playOn:e=>`This round: `+e,playOff:`This round: no effect`,revival:e=>e+` chance to survive a fatal hit with 1 HP`,instant:`Fight anytime (F key)`,conv:(e,t,n)=>`+`+e+` of `+t+` as `+n,gold:e=>`+`+e+` gold`,freeFight:e=>e+` chance a win costs no BP`,friends:e=>`+`+e+` ATK and DEF per ally in the fight`,bossBane:e=>`+`+e+` ATK against bosses and the dragon`,explorer:e=>`+`+e+` ATK and DEF per ring beyond the first`,bossPb:e=>`+`+e+` BP when you beat a boss`,lootLuck:e=>`+`+e+` loot chance`,softLoss:`Losing a fight costs 1 BP instead of 3`,streak:(e,t)=>`+`+e+` ATK per win in a row (up to `+t+`)`,startGold:e=>`Start each round with `+e+` G`}}),Vv=e=>`/rpg-anillos/arte/iconos/`+e.icon+`.png`,Hv=e=>{let t=Kt(e)[0];return(t?` fam-`+t.from:``)+(e.exaltedOf?` exalt`:``)},Uv=(e,t=``)=>`<span class="ic`+Hv(e)+`"`+(t?` title="`+t+`"`:``)+` style="background-image:url('`+Vv(e)+`')"></span>`;function Wv(e,t){let n=Bv(),i=[],a=e.slot===`weapon`?`atk`:e.slot===`armor`?`def`:null;for(let t of[...r].sort((e,t)=>(t===a)-+(e===a))){let r=e.add?.[t],a=e.pct?.[t];(r!==void 0||a!==void 0)&&i.push(n.stat(Rv(r??0),Lv[t],a?pi(a):null))}for(let t of Kt(e))i.push(n.conv(zv(t.k),Lv[t.from],Lv[t.to]));if(e.exp&&i.push(n.exp(pi(e.exp))),e.pb&&i.push(n.pb(e.pb)),e.encounter&&i.push((e.encounter>0?n.encMore:n.encLess)(pi(Math.abs(e.encounter)))),e.move&&i.push(n.move(pi(e.move))),e.critDmgRings&&i.push(n.critDmg(pi(.2))),e.firstCrits&&i.push(n.firstCrits(e.firstCrits)),e.critRings&&i.push(n.crit(pi(.08))),e.comboRing&&i.push(n.combo(pi(.09))),e.lifesteal&&i.push(n.lifesteal(zv(e.lifesteal))),e.spPerLevel&&i.push(n.spPerLevel(e.spPerLevel)),e.play){let a=t=>r.filter(t=>e.play[t]).map(n=>`+`+Rv(e.play[n]*t)+` `+Lv[n]).join(`, `);if(i.push(n.play(a(1),pi(ae))),t){let e=qt(t);i.push(e?n.playOn(a(e)):n.playOff)}}return e.revival&&i.push(n.revival(pi(Jt(e.revival)))),e.instant&&i.push(n.instant),e.gold&&i.push(n.gold(pi(e.gold))),e.freeFight&&i.push(n.freeFight(pi(e.freeFight))),e.friends&&i.push(n.friends(pi(e.friends))),e.bossBane&&i.push(n.bossBane(pi(e.bossBane))),e.explorer&&i.push(n.explorer(pi(e.explorer))),e.bossPb&&i.push(n.bossPb(e.bossPb)),e.lootLuck&&i.push(n.lootLuck(pi(e.lootLuck))),e.softLoss&&i.push(n.softLoss),e.streak&&i.push(n.streak(pi(e.streak),10)),e.startGold&&i.push(n.startGold(Rv(e.startGold))),i.join(` · `)}var Gv=class{root;ctx=null;cat=`weapon`;sel=null;slotSel=`weapon`;onSwitch=()=>{};onClose=()=>{};constructor(e){this.root=document.createElement(`div`),this.root.className=`screen attrs equip`,this.root.hidden=!0;let t=Bv();this.root.innerHTML=`
      <div class="sheet attrsheet" role="dialog" aria-label="${t.dialog}">
        <div class="tabs">
          <button class="tab" type="button" data-k="other">${t.attrs} <kbd>C</kbd></button>
          <span class="tab on">${t.gear} <kbd>E</kbd></span>
          <span class="gold" data-k="gold"></span>
          <button class="close" type="button" data-k="close">${t.close} <kbd>Esc</kbd></button>
        </div>
        <div class="pane">
          <div class="card"><div class="h3"><span>${t.equipped}</span></div><div class="slots" data-k="slots"></div></div>
          <div class="card shop">
            <div class="shophead"><div class="h3" style="margin:0"><span>${t.shop}</span></div><div class="cats" data-k="cats"></div></div>
            <div class="list" data-k="list"></div>
            <div class="compare" data-k="compare"></div>
          </div>
        </div>
      </div>`,e.appendChild(this.root),this.k(`close`).addEventListener(`click`,()=>this.hide()),this.k(`other`).addEventListener(`click`,()=>this.onSwitch()),this.root.addEventListener(`pointerdown`,e=>{e.target===this.root&&this.hide()}),this.k(`cats`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-c]`);t&&(this.cat=t.dataset.c,this.sel=Mt(this.cat,this.ctx?.run.plans)[0]?.id??null,this.cat===`acc`?typeof this.slotSel!=`number`&&(this.slotSel=0):this.slotSel=this.cat,this.draw())}),this.k(`list`).addEventListener(`click`,e=>{let t=e.target.closest(`.item`);t&&(this.sel=t.dataset.i,this.draw())}),this.k(`slots`).addEventListener(`click`,e=>this.clickSlot(e)),this.k(`compare`).addEventListener(`click`,e=>this.act(e))}get open(){return!this.root.hidden}refresh(){this.open&&this.draw()}show(e){this.ctx=e,this.root.hidden=!1,this.slotSel=`weapon`,this.cat=`weapon`,this.sel=e.run.kit.weapon,this.draw()}hide(){this.open&&(this.root.hidden=!0,this.ctx=null,this.onClose())}k(e){return this.root.querySelector(`[data-k="`+e+`"]`)}clickSlot(e){let t=e.target.closest(`.slot`),n=this.ctx?.run;if(!t||!n)return;if(t.dataset.lock){let e=Ft(n.kit);if(e===null||n.gold<e)return;this.ctx.act({a:`buySlot`}),this.slotSel=n.kit.acc.length-1,this.ctx.onChange()}else this.slotSel=t.dataset.s===`weapon`||t.dataset.s===`armor`?t.dataset.s:+t.dataset.s;let r=this.slotSel;this.cat=typeof r==`number`?`acc`:r;let i=typeof r==`number`?n.kit.acc[r]:n.kit[r];this.sel=i??Mt(this.cat,n.plans)[0]?.id??null,this.draw()}act(e){let t=e.target.closest(`button[data-a]`),n=this.ctx;if(!t||!n||!this.sel)return;let r=n.run,i=this.sel,a=typeof this.slotSel==`number`?this.slotSel:void 0;if(t.dataset.a===`buy`&&n.act({a:`buy`,id:i,slot:a,autoEquip:!0}),t.dataset.a===`equip`&&n.act({a:`equip`,id:i,slot:a}),t.dataset.a===`remove`){let e=r.kit.acc.indexOf(i);e>=0&&n.act({a:`unequip`,slot:e})}t.dataset.a===`keep`&&n.act({a:`keep`,id:r.kit.keep===i?null:i}),n.onChange(),this.draw()}draw(){let e=this.ctx;if(!e)return;let t=Bv(),n=e.run,r=n.kit,i=Ht(n),a=new Set(Pt(r));this.k(`gold`).textContent=Rv(n.gold)+` G`;let o=[{key:`weapon`,name:t.weapon,id:r.weapon},{key:`armor`,name:t.armor,id:r.armor},...r.acc.map((e,n)=>({key:n,name:t.acc(n+1),id:e}))],s=Ft(r);this.k(`slots`).innerHTML=o.map(e=>{let r=e.id?z(e.id):null,a=r?Uv(r):`<span class="ic">`+(typeof e.key==`number`?e.key+1:``)+`</span>`,o=r&&i===r.id?`<span class="keep" title="`+t.keptTitle+`">&#9733;</span>`:`<span></span>`;return`<button type="button" class="slot" data-s="`+e.key+`" aria-pressed="`+(this.slotSel===e.key)+`">`+a+`<span><span class="nm">`+(r?Nv(r):t.empty(e.name))+`</span><span class="ds">`+(r?Wv(r,n):``)+`</span></span>`+o+`</button>`}).join(``)+(s===null?``:`<button type="button" class="slot locked" data-lock="1"`+(n.gold<s?` aria-disabled="true"`:``)+`><span class="ic">+</span><span><span class="nm">`+t.locked(t.acc(r.acc.length+1))+`</span><span class="ds">`+t.unlock(Rv(s))+`</span></span><span></span></button>`),this.k(`cats`).innerHTML=[`weapon`,`armor`,`acc`].map(e=>`<button type="button" data-c="`+e+`" aria-pressed="`+(this.cat===e)+`">`+t.cats[e]+`</button>`).join(``)+`<span class="plans" title="`+t.planTitle+`">&#9670; `+t.plans(n.plans.length)+`</span>`;let c=[...Ke.filter(e=>e.slot===this.cat&&!jt(e,n.plans)&&r.owned.includes(e.id)),...Mt(this.cat,n.plans)];this.k(`list`).innerHTML=c.map(e=>{let o=r.owned.includes(e.id),s=At(e),c=a.has(e.id)?`<span class="pr eq">`+t.worn+`</span>`:o?`<span class="pr own">`+t.inBag+`</span>`:`<span class="pr`+(s>n.gold?` no`:``)+`">`+Rv(s)+` G</span>`;return`<button type="button" class="item" data-i="`+e.id+`" aria-pressed="`+(this.sel===e.id)+`">`+Uv(e)+`<span>`+Nv(e)+(i===e.id?` <span class="keep">&#9733;</span>`:e.plan?` <span class="keep boss" title="`+t.planTitle+`">&#9670;</span>`:``)+`</span><span class="ef">`+Wv(e,n)+`</span>`+c+`</button>`}).join(``),this.compare()}compare(){let e=Bv(),t=this.ctx.run,n=this.k(`compare`);if(!this.sel){n.innerHTML=``;return}let i=z(this.sel),a=t.kit.owned.includes(i.id),o=Pt(t.kit).includes(i.id),s=At(i),c=`<b style="font-weight:400">`+Nv(i)+`</b>`,l=r.find(e=>i.add?.[e]!==void 0||i.pct?.[e]!==void 0);if(l&&!o){let e={...t.kit,acc:[...t.kit.acc],owned:[...t.kit.owned],pbGranted:[...t.kit.pbGranted]},n=t.hero.gear,r=t.pb,o=ot(t.hero)[l];a||t.kit.owned.push(i.id),zt(t,i.id,typeof this.slotSel==`number`?this.slotSel:void 0);let s=ot(t.hero)[l];t.kit=e,t.hero.gear=n,t.pb=r;let u=s-o;c+=` · `+Lv[l]+` `+Rv(o)+` → `+Rv(s)+` <span class="`+(u>=0?`up`:`down`)+`">(`+(u>=0?`+`:`−`)+Rv(Math.abs(u))+`)</span>`}else c+=` · `+Wv(i,t);l&&!o&&(c+=Kt(i).map(t=>` · `+e.conv(zv(t.k),Lv[t.from],Lv[t.to])).join(``));let u=[];a?o?i.slot===`acc`&&u.push(`<button type="button" class="bt gh" data-a="remove">`+e.remove+`</button>`):u.push(`<button type="button" class="bt" data-a="equip">`+e.equip+`</button>`):u.push(`<button type="button" class="bt" data-a="buy"`+(s>t.gold?` disabled`:``)+`>`+e.buy(Rv(s))+`</button>`),a&&!i.start&&u.push(`<button type="button" class="bt gh" data-a="keep">`+(t.kit.keep===i.id?e.kept:e.keep)+`</button>`),n.innerHTML=`<span>`+c+`</span><span class="btns">`+u.join(``)+`</span>`}},Kv=2,qv=99,Jv=`#c4574b`,Yv=[`#d48a55`,`#d8b860`,`#86a868`,`#6aa69c`,`#6c8fbe`,`#9883b5`,`#c4829c`],Xv=e=>e<=1?Jv:Yv[(e-2)%Yv.length],Zv=3,Qv=6,$v=1.5,ey=.35,ty=13,ny=1,ry=.75,iy=.13,ay=.18,oy=.26,sy=.08,cy=e=>Math.max(0,Math.log10(Math.max(10,e))-1),ly=e=>fi(Math.round(Math.max(0,e))),uy=[[11,-12],[-5,-18],[23,-20],[5,-27],[-17,-9]],dy=.74,$=di({es:{aria:`Combate. Mantenga pulsado para acelerar. Al terminar, pulse para continuar.`,pb:`PB`,boss:`JEFE`,exalted:`ENALTECIDO`,exaltedPlus:`ENALTECIDO+`,dragon:`DRAGÓN`,lv:`Nv.`,key:`ESPACIO`,hold:`Mantenga para acelerar`,touchKey:`DEDO`,touchHold:`Mantenga para acelerar`,combo:`COMBO`,hero:`HÉROE`,hp:`VIDA`,exp:`EXPERIENCIA`,gold:`ORO`,victory:`VICTORIA`,defeat:`DERROTA`,loot:`BOTÍN`,plan:`PLANO`,cont:`Pulse para continuar`,crit:`CRÍTICO`,levelUp:`¡SUBE DE NIVEL!`,levels:e=>`+`+ly(e)+(e===1?` NIVEL`:` NIVELES`),ally:e=>`Aliado `+e,theHero:`El héroe`,appears:e=>`¡Aparece `+e+`!`,bossAppears:e=>`Aparece un jefe: `+e+`.`,dragonWakes:e=>`¡`+e+` despierta!`,hits:(e,t,n,r)=>e+` golpea: `+ly(t)+`.`+(n>1?` Combo ×`+n+`.`:``)+(r?` Crítico.`:``),takes:(e,t,n)=>e+` recibe `+ly(t)+` de daño.`+(n?` Cae.`:``),alliesFight:`Sus aliados siguen luchando.`,saved:`El collar lo salva: queda con 1 de vida.`,foeDown:e=>e+` queda fuera de combate.`,earns:(e,t)=>`Gana `+ly(e)+` G y `+ly(t)+` EXP.`,levelsUp:e=>`Sube `+ly(e)+(e===1?` nivel.`:` niveles.`),lootLine:e=>`Botín: `+e+`.`,planLine:e=>`Plano: `+e+`. Ya está en la tienda.`,reaches:e=>`Llega al nivel `+ly(e)+`.`,pbBack:e=>`El jefe devuelve `+e+` PB.`,bossWeak:e=>`Es débil a su `+e+`: hace más daño y recibe menos.`,cursed:(e,t)=>`¡Maldición de `+e+`! Este jefe pide `+t+` jugadores.`,curses:{weak:`debilidad`,frail:`fragilidad`,blind:`ceguera`,drain:`agotamiento`},bossStrong:e=>`Resiste su `+e+`: hace menos daño y recibe más.`,pbLeft:e=>`Le quedan `+e+` PB.`,falls:(e,t)=>(e?`El grupo cae.`:`El héroe cae.`)+` Pierde `+t+` PB.`,duelTag:(e,t)=>`DUELO`+(t>1?` `+e+`/`+t:``),duelStart:e=>`¡Duelo contra `+e+`!`,duelWon:e=>`Vence a `+e+`.`,duelLost:e=>e+` gana el duelo.`},en:{aria:`Battle. Hold to speed up. When it ends, press to continue.`,pb:`BP`,boss:`BOSS`,exalted:`EXALTED`,exaltedPlus:`EXALTED+`,dragon:`DRAGON`,lv:`Lv.`,key:`SPACE`,hold:`Hold to speed up`,touchKey:`TOUCH`,touchHold:`Hold to speed up`,combo:`COMBO`,hero:`HERO`,hp:`HP`,exp:`EXP`,gold:`GOLD`,victory:`VICTORY`,defeat:`DEFEAT`,loot:`LOOT`,plan:`BLUEPRINT`,cont:`Press to continue`,crit:`CRITICAL`,levelUp:`LEVEL UP!`,levels:e=>`+`+ly(e)+(e===1?` LEVEL`:` LEVELS`),ally:e=>`Ally `+e,theHero:`The hero`,appears:e=>e+` appears!`,bossAppears:e=>`A boss appears: `+e+`.`,dragonWakes:e=>e+` awakens!`,hits:(e,t,n,r)=>e+` hits for `+ly(t)+`.`+(n>1?` Combo ×`+n+`.`:``)+(r?` Critical!`:``),takes:(e,t,n)=>e+` takes `+ly(t)+` damage.`+(n?` Down!`:``),alliesFight:`The allies fight on.`,saved:`The necklace saves the hero: 1 HP left.`,foeDown:e=>e+` is defeated.`,earns:(e,t)=>`You earn `+ly(e)+` G and `+ly(t)+` EXP.`,levelsUp:e=>`+`+ly(e)+(e===1?` level.`:` levels.`),lootLine:e=>`Loot: `+e+`.`,planLine:e=>`Blueprint: `+e+`. Now in the shop.`,reaches:e=>`Now at level `+ly(e)+`.`,pbBack:e=>`The boss returns `+e+` BP.`,bossWeak:e=>`It is weak to your `+e+`: you deal more damage and take less.`,cursed:(e,t)=>`Curse of `+e+`! This boss needs `+t+` players.`,curses:{weak:`weakness`,frail:`frailty`,blind:`blindness`,drain:`exhaustion`},bossStrong:e=>`It resists your `+e+`: you deal less damage and take more.`,pbLeft:e=>`BP left: `+e+`.`,falls:(e,t)=>(e?`The party falls.`:`The hero falls.`)+` You lose `+t+` BP.`,duelTag:(e,t)=>`DUEL`+(t>1?` `+e+`/`+t:``),duelStart:e=>`Duel against `+e+`!`,duelWon:e=>`You beat `+e+`.`,duelLost:e=>e+` wins the duel.`}}),fy=(e=$())=>`
<div class="tr" aria-hidden="true"><i class="tflash"></i><div class="tbars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
<div class="cstage" tabindex="0" aria-label="${e.aria}">
  <div class="shaker">
    <div class="art">
      <img class="scene" alt="">
      <div class="aura"></div>
      <img class="actor enemy" alt="">
      <img class="actor hero" alt="">
    </div>
    <div class="dim"></div>
    <div class="impact"></div>
    <canvas class="vfxc"></canvas>
    <div class="chud">
      <div class="pb box sh"><span>${e.pb}</span><b data-k="pb">30</b></div>
      <div class="foe box sh">
        <div class="head"><b><span class="tag" hidden>${e.boss}</span><span data-k="foe-name"></span></b><span data-k="foe-lv"></span></div>
        <div class="barrow"><div class="layers"><i data-k="under"></i><i class="top" data-k="top"></i></div><b class="bars" data-k="bars"></b></div>
      </div>
      <div class="keys box sh"><kbd class="kb">${e.key}</kbd><span class="kb">${e.hold}</span><kbd class="tc">${e.touchKey}</kbd><span class="tc">${e.touchHold}</span><b>×4</b></div>
      <div class="combo sh"><b data-k="combo-n">2</b> ${e.combo}</div>
      <div class="log sh"></div>
      <div class="me box sh">
        <div class="head"><b data-k="me-name">${e.hero}</b><span class="lv" data-k="lv"><small>${e.lv}</small>1</span></div>
        <div class="row hprow"><div class="nums"><em>${e.hp}</em><span data-k="hp-n"></span></div><div class="bar hp"><i data-k="hp"></i></div></div>
        <div class="row xprow"><div class="nums"><em>${e.exp}</em><span data-k="xp-n"></span></div><div class="bar xp" data-k="xpbar"><i data-k="xp"></i></div></div>
        <div class="gold"><em>${e.gold}</em><b data-k="gold">0 G</b></div>
      </div>
      <div class="fxt"></div>
    </div>
    <canvas class="fxc"></canvas>
    <div class="reward">
      <div class="rays"></div>
      <div class="bigwrap"><span class="big">+0</span><span class="bigGold">+0 G</span></div>
      <div class="victory">${e.victory}</div>
      <div class="lvBig">${e.levels(0)}</div>
      <div class="loot" data-k="loot"><i data-k="loot-ic"></i><span><em data-k="loot-t">${e.loot}</em><b data-k="loot-n"></b></span></div>
      <div class="cont">${e.cont}</div>
    </div>
    <div class="flash"></div>
  </div>
</div>`,py=class{root;q=e=>this.root.querySelector(e);k=e=>this.root.querySelector(`[data-k="`+e+`"]`);stage;slashes;parts;holding=!1;raf=0;done=null;S=null;autoContinue=0;constructor(e){this.root=document.createElement(`div`),this.root.className=`combat`,this.root.hidden=!0,this.root.innerHTML=fy(),e.appendChild(this.root),this.stage=this.q(`.cstage`),this.slashes=new Ov(this.q(`canvas.vfxc`)),this.parts=new kv(this.q(`canvas.fxc`)),this.parts.pitch=()=>this.S?this.S.pt:0,this.slashes.onImpact=()=>{let e=this.q(`.shaker`);e.style.filter=`invert(1) contrast(1.6)`,setTimeout(()=>{e.style.filter=`grayscale(1) contrast(3) brightness(1.5)`},55),setTimeout(()=>{e.style.filter=``},110)};let t=()=>{if(this.S){if(this.S.phase===`done`){this.finish();return}this.holding=!0,this.q(`.keys`).classList.add(`on`)}},n=()=>{this.holding=!1,this.q(`.keys`).classList.remove(`on`)};this.stage.addEventListener(`pointerdown`,t),[`pointerup`,`pointercancel`,`pointerleave`].forEach(e=>this.stage.addEventListener(e,n)),addEventListener(`keydown`,e=>{if(!(!this.open||e.key!==` `&&e.key!==`Enter`)){if(e.preventDefault(),e.stopPropagation(),this.S?.phase===`done`){e.repeat||t();return}t()}},!0),addEventListener(`keyup`,e=>{this.open&&(e.key===` `||e.key===`Enter`)&&(n(),e.stopPropagation())},!0)}get open(){return!this.root.hidden}play(e,t,n,r=null){cv(),_v(),this.root.hidden=!1;let i=this.q(`img.enemy`),a=this.q(`img.hero`);this.q(`img.scene`).src=t.bg;let o=(e,n,r)=>{e.src=n,e.className=e.className.split(` `).slice(0,2).join(` `),Object.assign(e.style,{left:r.x/t.frameW*100+`%`,top:r.y/t.frameH*100+`%`,width:r.w/t.frameW*100+`%`,height:r.h/t.frameH*100+`%`,transformOrigin:((r.cx-r.x)/r.w*100).toFixed(1)+`% `+((r.pies-r.y)/r.h*100).toFixed(1)+`%`,opacity:`1`})};o(i,t.enemy.url,t.enemy.f),o(a,t.hero.url,t.hero.f);for(let e of Array.from(this.root.querySelectorAll(`img.ally, .atag`)))e.remove();let s=new Map,c=e.log.party;if(c){let n=0;c.maxHp.forEach((r,i)=>{if(i===c.me||n>=uy.length)return;let[l,u]=uy[n++],d=document.createElement(`img`);d.alt=``,d.className=`actor hero`,a.before(d);let f=t.allies?.[i]??t.hero;o(d,f.url,f.f),d.classList.add(`ally`),d.style.left=parseFloat(d.style.left)+l+`%`,d.style.top=parseFloat(d.style.top)+u+`%`,d.style.scale=String(dy);let p=document.createElement(`div`);p.className=`atag sh`;let m=e.partyNames?.[i]??$().ally(i+1);p.innerHTML=`<b></b><div class="bar hp"><i></i></div>`,p.querySelector(`b`).textContent=m,this.q(`.chud`).appendChild(p),s.set(i,{img:d,tag:p,bar:p.querySelector(`i`),name:m,hp:r,max:r,dx:l,dy:u})})}let l=e=>({x:e.cx/t.frameW*100,a:e.arriba/t.frameH*100,b:e.pies/t.frameH*100}),u=l(t.enemy.f),d=l(t.hero.f),f=this.q(`.aura`),p=r?void 0:e.encounter.enemy.affinity?.strong;f.className=`aura`+(p?` st-`+p:``),p&&i.classList.add(`st-`+p),!r&&e.encounter.exalt&&(i.classList.add(`exalt`),f.classList.add(`exalt`));let m=t.enemy.f;Object.assign(f.style,{left:(m.x+m.w/2)/t.frameW*100+`%`,top:(u.a+u.b)/2+`%`,width:m.w/t.frameW*120+`%`,height:(u.b-u.a)*1.2+`%`});for(let e of s.values())Object.assign(e.tag.style,{left:d.x+e.dx+`%`,top:d.a+e.dy+(d.b-d.a)*.26+`%`}),this.drawAlly(e);let h=this.timeline(e,!!r),g=e.log,_=g.events.filter(e=>e.src===`hero`&&(e.type===`attack`||e.type===`crit`)).map(e=>e.dmg);this.S={phase:`enter`,pt:0,stop:0,res:e,ctx:n,tl:h,ei:0,power:cy(e.hero.stats.atk),boss:e.encounter.kind!==`normal`,foeHp:g.maxHp.enemy,foeMax:g.maxHp.enemy,meHp:g.maxHp.hero,meMax:g.maxHp.hero,base:_.length?_.reduce((e,t)=>e+t,0)/_.length:1,layers:0,barIdx:0,E:u,H:d,cnt:0,drained:0,shake:0,flash:0,dim:0,rays:0,raysA:0,raysSpeed:30,raysDeg:0,tickAcc:0,emit:0,emitG:0,lastLabel:0,lastChime:0,lastPunch:0,chime:0,titled:!1,enemyImg:i,heroImg:a,allies:s,meDown:!1,duel:r},this.S.layers=Math.max(1,Math.min(qv,Math.ceil(g.maxHp.enemy/(this.S.base*Kv)))),this.S.barIdx=this.S.layers,this.parts.clear(),this.slashes.clear(),this.slashes.palOff=Math.floor(Math.random()*10);let v=e.hero.stats,y=A;this.slashes.styleWeights={hp:v.hp/y.hp,atk:v.atk/y.atk,def:v.def/y.def,agi:v.agi/y.agi,luc:v.luc/y.luc},this.q(`.fxt`).innerHTML=``,this.q(`.log`).innerHTML=``,this.q(`.foe`).style.opacity=`1`,this.q(`.combo`).classList.remove(`on`),this.q(`.me`).classList.remove(`focus`);let b=this.q(`.victory`);b.classList.remove(`on`,`lose`),b.textContent=$().victory,this.q(`.bigwrap`).style.opacity=`0`,this.q(`.rays`).style.opacity=`0`,this.q(`.cont`).classList.remove(`on`);let x=this.q(`.lvBig`);x.style.opacity=`0`,x.classList.remove(`final`),this.k(`loot`).classList.remove(`on`),this.q(`.dim`).style.opacity=`0`,this.q(`.tag`).hidden=e.encounter.kind===`normal`&&!r;let S=r?0:e.encounter.exalt??0;this.q(`.tag`).textContent=r?$().duelTag(r.index,r.total):e.encounter.kind===`dragon`?$().dragon:S===2?$().exaltedPlus:S===1?$().exalted:$().boss,this.q(`.tag`).classList.toggle(`exalt`,S>0),this.k(`foe-name`).textContent=r?r.rival:f_(e.encounter),this.k(`me-name`).textContent=r?r.me:$().hero,this.k(`foe-lv`).textContent=r?``:$().lv+` `+ly(e.encounter.enemy.level),this.k(`foe-lv`).dataset.risk=r?``:Cn(e.hero,e.encounter.enemy,e.encounter.kind!==`normal`),this.root.classList.toggle(`duel`,!!r);let C=this.q(`.combo`);C.style.left=u.x+9+`%`,C.style.top=Math.max(14,u.a+12)+`%`,this.k(`gold`).textContent=ly(n.goldBefore)+` G`,this.k(`pb`).textContent=String(n.pbBefore),this.drawFoe(),this.drawMe(),this.drawXp(0),i.style.translate=`-120% 0`,a.style.translate=`140% 0`;for(let e of s.values())e.img.style.translate=`140% 0`,e.tag.style.opacity=`0`;this.q(`.foe`).style.transform=`translateY(-160%)`,this.q(`.me`).style.transform=`translateX(120%)`,this.q(`.log`).style.opacity=`0`;for(let e of Array.from(this.q(`.tbars`).children))e.style.transform=`translateX(`+(Array.from(this.q(`.tbars`).children).indexOf(e)%2?101:-101)+`%)`;this.root.classList.add(`entering`),this.root.classList.toggle(`boss`,e.encounter.kind!==`normal`||!!r),this.q(`.me`).classList.remove(`paying`),mv.whoosh(),this.stage.focus({preventScroll:!0});let w=performance.now(),T=e=>{let t=Math.min(.05,(e-w)/1e3);w=e,this.frame(t),this.open&&(this.raf=requestAnimationFrame(T))};return this.raf=requestAnimationFrame(T),new Promise(e=>{this.done=e})}abortDuel(){this.S?.duel&&this.finish()}finish(){cancelAnimationFrame(this.raf),_v(),this.S=null,this.root.hidden=!0;let e=this.done;this.done=null,e?.()}timeline(e,t=!1){let n=e.log.events.filter(e=>e.type===`attack`||e.type===`crit`),r=[],i=t?$v:1,a=t?ty:Qv,o={hero:e.log.maxHp.hero,enemy:e.log.maxHp.enemy},s=.55;for(let a=0;a<n.length;a++){let c=n[a],l=n[a+1],u=c.src===`hero`?`enemy`:`hero`;t&&c.combo===0&&o[u]<=.25*e.log.maxHp[u]&&(s+=ey),r.push({at:s,ev:c,last:!1}),o[u]=c.hpLeft,c.src===`hero`?s+=(c.combo===0?iy:.12000000000000001)*i:s+=oy*i,l&&l.turn!==c.turn&&(s+=(c.src===`hero`?ay:sy)*i)}let c=s,l=c>a?a/c:1;for(let e of r)e.at=.55+(e.at-.55)*l;let u=[...r].reverse().find(t=>t.ev.src===(e.log.win?`hero`:`enemy`));return u&&(u.last=!0),r}drawFoe(){let e=this.S,t=e.layers,n=Math.max(0,e.foeHp/e.foeMax),r=Math.ceil(n*t),i=n*t-(r-1);this.k(`top`).style.background=r>0?Xv(r):`transparent`,this.k(`top`).style.width=(r>0?i*100:0)+`%`,this.k(`under`).style.background=r>1?Xv(r-1):`transparent`;let a=this.k(`bars`);a.textContent=r>1?e.boss?`×?`:`×`+r:``,r<e.barIdx&&r>1&&this.retrigger(a,`punch`),e.barIdx=r}drawAlly(e){let t=Math.max(0,e.hp/e.max);e.bar.style.width=t*100+`%`,e.bar.dataset.tone=t>.5?`ok`:t>.2?`mid`:`low`,e.tag.classList.toggle(`out`,e.hp<=0)}drawMe(){let e=this.S,t=Math.max(0,e.meHp/e.meMax);this.k(`hp`).style.width=t*100+`%`,this.k(`hp`).dataset.tone=t>.5?`ok`:t>.2?`mid`:`low`,this.k(`hp-n`).textContent=ly(e.meHp)+` / `+ly(e.meMax)}drawXp(e){let t=this.S.ctx.expBefore+e,n=ct(t),r=t-st(n),i=st(n+1)-st(n);this.k(`lv`).innerHTML=`<small>`+$().lv+`</small>`+ly(n),this.k(`xp`).style.width=Math.min(100,r/i*100)+`%`,this.k(`xp-n`).textContent=ly(r)+` / `+ly(i)}say(e,t=!1){let n=this.q(`.log`),r=n.lastElementChild;if(t&&r&&r.dataset.live){r.textContent=e;return}for(let e of Array.from(n.children))e.classList.add(`old`);for(;n.children.length>=4;)n.removeChild(n.firstChild);let i=document.createElement(`span`);i.textContent=e,t&&(i.dataset.live=`1`),n.appendChild(i)}retrigger(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}label(e,t,n,r,i){let a=document.createElement(`div`);return a.className=e,a.textContent=t,a.style.left=n+`%`,a.style.top=r+`%`,i&&(a.style.fontSize=i+`cqw`),this.q(`.fxt`).appendChild(a),setTimeout(()=>a.remove(),1e3),a}foeAt(){let e=this.S.E;return{x:e.x+4,y:(Math.max(4,e.a)+e.b)/2}}heroAt(){let e=this.S.H;return{x:e.x,y:(e.a+e.b)/2}}allyAt(e){let t=this.S.H;return{x:t.x+e.dx,y:(t.a+t.b)/2+e.dy}}pct(e){return{x:e.x/100*this.parts.W,y:e.y/100*this.parts.H}}setBig(e,t){this.q(`.big`).innerHTML=`+`+ly(e)+`<small>EXP</small>`,this.q(`.bigGold`).textContent=`+`+ly(t)+` G`}fire(e){let t=this.S,n=e.ev;if(n.src===`enemy`&&this.q(`.combo`).classList.remove(`on`),n.src===`hero`){let r=this.foeAt(),i=n.type===`crit`;t.foeHp=n.hpLeft,this.drawFoe();let a=Math.min(7.5,(3+Math.log10(Math.max(1,n.dmg/t.base))*3.2)*(i?1.2:1)*(e.last?1.5:1)),o=this.label(`dmg`+(i?` crit`:``)+(e.last?` last`:``),ly(n.dmg),r.x+(n.combo%3-1)*4.5+(Math.random()-.5)*3,r.y-6-Math.min(n.combo,8)*5.5,a);i&&(o.dataset.crit=$().crit);let s=this.q(`.impact`);s.style.left=r.x+`%`,s.style.top=r.y+`%`,this.retrigger(s,`on`),this.slashes.hit({dmg:n.dmg,base:t.base,combo:n.combo,crit:i,last:e.last,power:t.power},r.x,r.y);let c=n.ally&&n.who!==void 0?t.allies.get(n.who):void 0;n.combo===0&&this.retrigger(c?c.img:t.heroImg,`hero-attack`),this.retrigger(t.enemyImg,`hurt`);let l=this.q(`.combo`);n.combo>0?(l.classList.add(`on`),this.k(`combo-n`).textContent=String(n.combo+1),this.retrigger(this.k(`combo-n`),`punch`)):l.classList.remove(`on`),this.say($().hits(c?c.name:t.duel?t.duel.me:$().theHero,n.dmg,n.combo+1,i)),i?mv.crit(n.combo):mv.hit(n.combo),t.shake=Math.max(t.shake,i?.9:.35+n.combo*.08),e.last&&(t.stop=.2,t.flash=.85,t.shake=1.7,mv.kill(),l.classList.remove(`on`),this.setPhase(`kill`))}else if(n.ally&&n.who!==void 0&&t.allies.has(n.who)){let r=t.allies.get(n.who),i=this.allyAt(r);r.hp=n.hpLeft,this.drawAlly(r),this.retrigger(t.enemyImg,`foe-attack`),setTimeout(()=>this.S&&this.retrigger(r.img,r.hp>0?`hurt`:`down`),110),this.label(`dmg hurt`,ly(n.dmg),i.x+3,i.y-10,2.2),this.say($().takes(r.name,n.dmg,r.hp<=0)),mv.hurt(),t.shake=Math.max(t.shake,.25),e.last&&(t.stop=.15,t.shake=1.2,this.setPhase(`fall`))}else{let r=this.heroAt(),i=n.hpLeft===1&&n.dmg>=t.meHp;t.meHp=n.hpLeft,this.drawMe(),this.retrigger(t.enemyImg,`foe-attack`);let a=n.hpLeft<=0&&!e.last;a&&(t.meDown=!0),setTimeout(()=>this.S&&this.retrigger(t.heroImg,a?`down`:`hurt`),110),this.label(`dmg hurt`,ly(n.dmg),r.x+3,r.y-10,2.6),this.say($().takes(t.duel?t.duel.me:$().theHero,n.dmg,a)),a?this.say($().alliesFight):i&&this.say($().saved),mv.hurt(),t.shake=Math.max(t.shake,.35),e.last&&(t.stop=.15,t.shake=1.2,this.setPhase(`fall`))}}setPhase(e){this.S.phase=e,this.S.pt=0,this.S.tickAcc=0}levelUp(e){let t=this.S,n=t.res.levelsGained<=12,r=performance.now(),i=this.heroAt();t.cnt=e;let a=this.q(`.lvBig`);a.style.opacity=`1`,a.textContent=$().levels(e),r-t.lastPunch>70&&(t.lastPunch=r,this.retrigger(a,`punch`),this.retrigger(this.k(`lv`),`punch`),this.retrigger(this.k(`xpbar`),`flash`)),r-t.lastLabel>(n?0:85)&&this.q(`.fxt`).querySelectorAll(`.lvl`).length<7&&(t.lastLabel=r,this.label(`lvl`+(n?` big`:``),$().levelUp,i.x+(Math.random()-.5)*(n?2:9),i.y-18-Math.random()*(n?2:8))),r-t.lastChime>(n?0:70)&&(t.lastChime=r,mv.level(t.chime++,n));let o=this.parts.local(this.k(`xpbar`),.95);this.parts.sparks(o.x,o.y,n?22:5,`#b4dcff`,n?.6:.3),t.shake=Math.max(t.shake,n?.8:.15),n&&(t.flash=Math.max(t.flash,.25))}phase(e){let t=this.S,n=t.res,r=f_(n.encounter);switch(t.phase){case`enter`:{let e=t.pt/ny,n=this.q(`.tflash`),r=t.boss?4:3,i=Math.min(1,e/.45);n.style.opacity=i<1?String(Math.max(0,Math.sin(i*Math.PI*r))*.95):`0`;let a=this.q(`.tbars`).children,o=Math.max(0,Math.min(1,(e-.4)/.5));for(let e=0;e<a.length;e++){let t=Math.max(0,Math.min(1,o*1.6-e*.06)),n=e%2?1:-1;a[e].style.transform=`translateX(`+(n*(1-t*t*(3-2*t))*101).toFixed(2)+`%)`}if(e>=1){this.root.classList.remove(`entering`);for(let e of Array.from(a))e.style.transform=`translateX(101%)`;this.setPhase(`intro`),mv.stab()}break}case`intro`:{let e=Math.min(1,t.pt/ry),i=1-(1-e)**3;t.enemyImg.style.translate=(-(1-i)*120).toFixed(1)+`% 0`,t.heroImg.style.translate=((1-i)*140).toFixed(1)+`% 0`;for(let e of t.allies.values())e.img.style.translate=((1-i)*140).toFixed(1)+`% 0`,e.tag.style.opacity=i.toFixed(2);let a=1-(1-Math.max(0,Math.min(1,(e-.35)/.65)))**3;if(this.q(`.foe`).style.transform=`translateY(`+(-(1-a)*160).toFixed(1)+`%)`,this.q(`.me`).style.transform=`translateX(`+((1-a)*120).toFixed(1)+`%)`,this.q(`.log`).style.opacity=a.toFixed(2),e>=1){this.say(t.duel?$().duelStart(t.duel.rival):n.encounter.kind===`dragon`?$().dragonWakes(r):t.boss?$().bossAppears(r):$().appears(r));let e=n.encounter.enemy.affinity,i=t.duel?1:ht(n.hero.build,e);n.curse&&this.say($().cursed($().curses[n.curse],h[n.encounter.exalt??1])),e&&i>=1.1?this.say($().bossWeak(Iv[e.weak])):e&&i<=.9&&this.say($().bossStrong(Iv[e.strong])),this.q(`.aura`).classList.add(`on`),this.setPhase(`fight`)}break}case`fight`:for(;t.phase===`fight`&&t.ei<t.tl.length&&t.tl[t.ei].at<=t.pt;)this.fire(t.tl[t.ei++]);t.phase===`fight`&&t.ei>=t.tl.length&&t.pt>(t.tl.length?t.tl[t.tl.length-1].at:0)+.6&&this.setPhase(t.duel&&n.log.win?`kill`:`fall`);break;case`kill`:if(t.pt>=.22){let e=this.pct(this.foeAt()),n=Math.round(14*(ni()?.5:1)),i=t.E.b/100*this.parts.H;t.duel||(this.parts.burst(e.x,e.y,`coin`,n,i),this.parts.burst(e.x,e.y,`gem`,Math.round(n*1.3),i)),this.parts.sparks(e.x,e.y,t.duel?40:24,`#fff2b0`,.6),this.retrigger(t.enemyImg,`down`),this.q(`.aura`).classList.remove(`on`),this.q(`.foe`).style.opacity=`0`,mv.spray(),this.say(t.duel?$().duelWon(t.duel.rival):$().foeDown(r)),this.setPhase(`burst`)}break;case`burst`:if(t.dim=Math.min(.55,t.pt/.5*.55),t.pt>=.42&&!t.titled&&(t.titled=!0,this.retrigger(this.q(`.victory`),`on`),mv.stab(),t.shake=Math.max(t.shake,.9),t.duel||gv(()=>this.S?.phase===`drain`)),t.duel&&t.pt>=.95){t.titled=!1,this.setPhase(`final`);break}t.pt>=.95&&(t.titled=!1,this.q(`.bigwrap`).style.opacity=`1`,this.setPhase(`roll`),mv.riser(1.4),this.setBig(0,0));break;case`roll`:{let r=Math.min(1,t.pt/1.4),i=r**3;this.setBig(n.exp*i,n.gold*i),t.rays=r,t.raysSpeed=30+320*r,t.tickAcc+=e;let a=.095-.07*r;if(t.tickAcc>=a&&(t.tickAcc=0,mv.tick(r*1.5),r>.5&&(t.shake=Math.max(t.shake,.12*r))),r>=1){this.setBig(n.exp,n.gold),this.retrigger(this.q(`.big`),`punch`),this.retrigger(this.q(`.bigGold`),`punch`),t.flash=.6,t.shake=1.1,mv.jackpot(!1);let e=this.parts.local(this.q(`.big`));this.parts.confetti(e.x,e.y,ni()?20:60),this.parts.sparks(e.x,e.y,30,`#fff6c0`,.7),this.setPhase(`hold`)}break}case`hold`:t.raysSpeed=40,t.pt>=.5&&(this.q(`.me`).classList.add(`focus`,`paying`),this.parts.collect(this.parts.local(this.k(`gold`),.8),this.parts.local(this.k(`xpbar`),.9)),this.say($().earns(n.gold,n.exp)),this.setPhase(`drain`));break;case`drain`:{let r=Math.min(1,t.pt/Zv),i=.03*r+.97*r**2.3,a=t.drained;t.drained=n.exp*i,this.setBig(n.exp-t.drained,n.gold*(1-i)),this.k(`gold`).textContent=ly(t.ctx.goldBefore+n.gold*i)+` G`;let o=Math.min(1,(t.drained-a)/Math.max(1e-9,n.exp*e)/2.3),s=this.parts.local(this.q(`.big`)),c=this.parts.local(this.q(`.bigGold`));t.emit+=e*(6+55*o)*(ni()?.3:1),t.emitG+=e*(4+30*o)*(ni()?.3:1);let l=this.parts.local(this.k(`xpbar`),.9),u=this.parts.local(this.k(`gold`),.8);for(;t.emit>=1;)t.emit--,this.parts.stream(s,l,`gem`);for(;t.emitG>=1;)t.emitG--,this.parts.stream(c,u,`coin`);t.tickAcc+=e,t.tickAcc>=.075-.05*r&&(t.tickAcc=0,mv.tick(.5+r));let d=ct(t.ctx.expBefore+t.drained)-n.levelBefore;if(d>t.cnt&&this.levelUp(d),this.drawXp(t.drained),t.cnt>0&&this.say($().levelsUp(t.cnt),!0),r>=1){if(t.drained=n.exp,this.drawXp(t.drained),this.q(`.bigwrap`).style.opacity=`0`,t.rays=0,_v(),t.flash=.5,t.shake=1.3,n.levelsGained>0){let e=this.q(`.lvBig`);e.classList.add(`final`),e.textContent=$().levels(n.levelsGained),this.retrigger(e,`punch`),mv.jackpot(!0);let t=this.parts.local(e);this.parts.confetti(t.x,t.y,ni()?25:90)}let e=n.loot??n.plans?.[0];if(e){let t=z(e);this.k(`loot-t`).textContent=n.loot?$().loot:$().plan,this.k(`loot-ic`).style.backgroundImage=`url("`+Vv(t)+`")`,this.k(`loot-ic`).className=Hv(t).trim(),this.k(`loot-n`).textContent=Nv(t),this.retrigger(this.k(`loot`),`on`),mv.stab()}this.k(`pb`).textContent=String(t.ctx.pbAfter),n.loot&&this.say($().lootLine(Nv(z(n.loot))));for(let e of n.plans??[])this.say($().planLine(Nv(z(e))));n.levelsGained>0&&this.say($().reaches(n.levelBefore+n.levelsGained)),n.pbGained&&this.say($().pbBack(n.pbGained)),this.say($().pbLeft(t.ctx.pbAfter)),this.setPhase(`final`)}break}case`fall`:if(t.pt>=.15&&!t.titled&&(t.titled=!0,t.meDown||this.retrigger(t.heroImg,`down`),this.q(`.combo`).classList.remove(`on`),mv.fall(),this.q(`.foe`).style.opacity=`0`,this.say(t.duel?$().duelLost(t.duel.rival):$().falls(t.allies.size>0,n.pbSpent))),t.dim=Math.min(.55,t.pt/.6*.55),t.pt>=.9){let e=this.q(`.victory`);e.textContent=$().defeat,e.classList.add(`lose`),this.retrigger(e,`on`),mv.defeat(),this.k(`pb`).textContent=String(t.ctx.pbAfter),t.duel||this.say($().pbLeft(t.ctx.pbAfter)),t.titled=!1,this.setPhase(`final`)}break;case`final`:t.pt>=1.1&&(this.q(`.cont`).classList.add(`on`),this.setPhase(`done`));break;case`done`:this.autoContinue&&t.pt>=this.autoContinue&&this.finish()}}frame(e){let t=this.S;if(!t)return;let n=t.stop>0;if(this.q(`.fxt`).classList.toggle(`frozen`,n),n)t.stop-=e;else{let n=e*(this.holding&&t.phase!==`done`?4:1);t.pt+=n,this.phase(n),this.parts.step(n),this.slashes.step(n)}if(!this.S)return;this.slashes.draw(),t.shake*=Math.exp(-e*7),t.flash*=Math.exp(-e*9);let r=ni()?0:t.shake*this.parts.W*.006;this.q(`.shaker`).style.transform=`translate(`+((Math.random()-.5)*r).toFixed(1)+`px,`+((Math.random()-.5)*r).toFixed(1)+`px) scale(1.03)`,this.q(`.flash`).style.opacity=(t.flash*(ni()?.3:1)).toFixed(3),this.q(`.dim`).style.opacity=t.dim.toFixed(3),t.raysA+=(t.rays-t.raysA)*Math.min(1,e*6),t.raysDeg+=t.raysSpeed*e*+!ni();let i=this.q(`.rays`);i.style.opacity=t.raysA.toFixed(3),i.style.transform=`rotate(`+t.raysDeg.toFixed(1)+`deg)`,this.parts.draw()}},my=17,hy=8.5,gy=`#1b1208`,_y={num:[`#ffb547`,gy,gy],pin:[`#e0655a`,`#fff6ea`,gy],flag:[`#6fb36a`,`#fff6ea`,`#3d6a3a`],star:[`#f2cf5b`,gy,gy],skull:[`#4d3f63`,`#f4eee2`,gy],chest:[`#8a5a34`,`#f2cf5b`,`#4a2c14`],heart:[`#ec8fb0`,`#fff6ea`,gy],question:[`#6a9ad8`,`#fff6ea`,gy],cross:[`#9c4a44`,`#fff6ea`,gy],eye:[`#4fa8a0`,`#fff6ea`,`#1b3a38`]},vy={pin:[`...###...`,`..#####..`,`.###.###.`,`.##...##.`,`.###.###.`,`..#####..`,`...###...`,`....#....`,`....#....`],flag:[`.#.......`,`.######..`,`.#######.`,`.######..`,`.#####...`,`.#.......`,`.#.......`,`.#.......`,`.#.......`],star:[`....#....`,`....#....`,`...###...`,`#########`,`.#######.`,`..#####..`,`..##.##..`,`.##...##.`,`.#.....#.`],skull:[`..#####..`,`.#######.`,`#########`,`##oo#oo##`,`##oo#oo##`,`#########`,`.###.###.`,`..#####..`,`..#.#.#..`],chest:[`.........`,`.#######.`,`#########`,`#########`,`ooooooooo`,`####o####`,`####o####`,`#########`,`.........`],heart:[`.........`,`.##...##.`,`####.####`,`#########`,`#########`,`.#######.`,`..#####..`,`...###...`,`....#....`],question:[`..#####..`,`.##...##.`,`.....##..`,`....##...`,`...##....`,`...##....`,`.........`,`...##....`,`...##....`],cross:[`##.....##`,`###...###`,`.###.###.`,`..#####..`,`...###...`,`..#####..`,`.###.###.`,`###...###`,`##.....##`],eye:[`.........`,`...###...`,`.#######.`,`###ooo###`,`##ooooo##`,`###ooo###`,`.#######.`,`...###...`,`.........`]},yy={1:[`..#..`,`.##..`,`..#..`,`..#..`,`..#..`,`..#..`,`.###.`],2:[`.###.`,`#...#`,`....#`,`...#.`,`..#..`,`.#...`,`#####`],3:[`####.`,`....#`,`....#`,`.###.`,`....#`,`....#`,`####.`],4:[`...#.`,`..##.`,`.#.#.`,`#..#.`,`#####`,`...#.`,`...#.`],5:[`#####`,`#....`,`####.`,`....#`,`....#`,`#...#`,`.###.`]},by=new Map;function xy(e,t){let n=e+(t??``),r=by.get(n);if(r)return r;r=document.createElement(`canvas`),r.width=r.height=18;let i=r.getContext(`2d`),[a,o,s]=_y[e],c=(e,t,n)=>{i.fillStyle=n,i.fillRect(e,t,1,1)};for(let e=0;e<my;e++)for(let t=0;t<my;t++)Math.hypot(t+.5-hy,e+.5-hy)<=8.5&&c(t+1,e+1,`rgba(0, 0, 0, 0.4)`);for(let e=0;e<my;e++)for(let t=0;t<my;t++){let n=Math.hypot(t+.5-hy,e+.5-hy);n<=6.4?c(t,e,a):n<=7.5?c(t,e,`#ffffff`):n<=8.5&&c(t,e,gy)}let l=e===`num`?yy[t??1]??[]:vy[e],u=Math.floor((my-(l[0]?.length??0))/2),d=Math.floor((my-l.length)/2);return l.forEach((e,t)=>{for(let n=0;n<e.length;n++)e[n]!==`.`&&c(u+n,d+t,e[n]===`o`?s:o)}),by.set(n,r),r}var Sy=null;function Cy(){if(Sy)return Sy;let e=document.createElement(`canvas`),t=e.getContext(`2d`),n=12.5;e.width=e.height=25;for(let e=0;e<25;e++)for(let r=0;r<25;r++){let i=Math.hypot(r+.5-n,e+.5-n);i>10.3&&i<=11.4?(t.fillStyle=`#ffffff`,t.fillRect(r,e,1,1)):i>11.4&&i<=12.4&&(t.fillStyle=gy,t.fillRect(r,e,1,1))}return Sy=e}function wy(e,t,n,r,i,a={}){let o=Math.max(1,Math.round(2*i/my));e.save(),e.imageSmoothingEnabled=!1,e.globalAlpha=a.dim?.5:1,a.ring&&e.drawImage(Cy(),Math.round(n-12.5*o),Math.round(r-12.5*o),25*o,25*o),e.drawImage(xy(t,a.n),Math.round(n-hy*o),Math.round(r-hy*o),18*o,18*o),e.restore()}var Ty=[10,13,24],Ey=65535,Dy=.38,Oy=`238, 206, 112`,ky=`218, 98, 80`,Ay=`#7fe3ff`;function jy(e,t){return t.kind===`lair`||t.kind===`gate`&&!e.zones[t.a].isHub&&!e.zones[t.b].isHub}function My(e,t,n){t/=100,n/=100;let r=t=>(t+e/30)%12,i=t*Math.min(n,1-n),a=e=>n-i*Math.max(-1,Math.min(r(e)-3,9-r(e),1));return[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))]}var Ny=class e{base;world;colors;views=new WeakMap;outlines=new Map;spots=new Map;spotOf;constructor(e,t){this.world=e,this.spotOf=t,this.base=document.createElement(`canvas`),this.base.width=this.base.height=e.raster.w,this.colors=e.zones.map(e=>e.isHub?My(45,60,55):My(e.theme.hue,42,Math.max(30,Math.min(66,e.theme.light))))}refresh(e,t=null){let n=this.world.raster.w,r=this.world.raster.ids,i=this.base.getContext(`2d`),a=i.createImageData(n,n),o=new Map;for(let i=0;i<r.length;i++){let s=r[i],c=e[s],l=Ty;if(c===`visited`){let e=o.get(s);e||o.set(s,e=t&&t(s)||this.colors[s]),l=e}else c===`seen`&&(l=this.colors[s].map(e=>Math.round(e*Dy)));c&&(i%n<n-1&&r[i+1]!==s||i+n<r.length&&r[i+n]!==s)&&(l=l.map(e=>Math.round(e*.55))),a.data[i*4]=l[0],a.data[i*4+1]=l[1],a.data[i*4+2]=l[2],a.data[i*4+3]=255}i.putImageData(a,0,0)}outline(e){let t=this.outlines.get(e);if(t)return t;let n=this.world.raster.w,r=this.world.raster.ids;t=[];for(let i=0;i<r.length;i++){if(r[i]!==e)continue;let a=i%n;(a===0||a===n-1||r[i-1]!==e||r[i+1]!==e||r[i-n]!==e||r[i+n]!==e)&&t.push(i)}return this.outlines.set(e,t),t}zoneAt(e,t,n,r){let i=this.views.get(e),a=e.getBoundingClientRect();if(!i||!a.width)return null;let o=this.world.raster.w,s=Math.floor((t-a.left)/a.width*e.width/i.k+i.sx),c=Math.floor((n-a.top)/a.height*e.height/i.k+i.sy);if(s<0||c<0||s>=o||c>=o)return null;let l=this.world.raster.ids[c*o+s];return l===Ey||!r[l]?null:l}draw(e,t,n,r=null,i={}){let a=e.getContext(`2d`),o=this.world,s=e.width,c=o.raster.w,l=o.radius,u=o.raster.unit,d=(e,t)=>[(e+l)/u,(t+l)/u],[f,p]=d(n.wx,n.wy),[m,h]=r?i.pan??[0,0]:[0,0],g=r??c,_=r?f+m-g/2:0,v=r?p+h-g/2:0,y=s/g;this.views.set(e,{sx:_,sy:v,k:y});let b=(e,t)=>[(e-_)*y,(t-v)*y],x=(e,t)=>b(...d(e,t)),S=r!==null&&r<200,C=s>400;if(a.imageSmoothingEnabled=!1,a.fillStyle=`rgb(`+Ty.join(`,`)+`)`,a.fillRect(0,0,s,s),a.drawImage(this.base,_,v,g,g,0,0,s,s),!S){a.strokeStyle=`rgba(159, 212, 240, 0.16)`,a.lineWidth=Math.max(1,s/450),a.setLineDash([s/120,s/120]);let[e,t]=b(c/2,c/2);for(let n of o.ringEdges.slice(0,6))a.beginPath(),a.arc(e,t,n/u*y,0,Math.PI*2),a.stroke();a.setLineDash([])}if(n.zoneId!==void 0&&t[n.zoneId]){a.fillStyle=`rgba(255, 255, 255, 0.85)`;let e=Math.max(1,Math.ceil(y));for(let t of this.outline(n.zoneId)){let[n,r]=b(t%c,Math.floor(t/c));a.fillRect(n,r,e,e)}}let w=S?Math.max(2.5,s/64):Math.max(2,s/150)*Math.sqrt(c/g);for(let e of Ne(t,o)){let t=o.passages[e],r=t.a===n.zoneId||t.b===n.zoneId,i=jy(o,t)?ky:Oy,s=o.zones[t.a],c=o.zones[t.b],[l,u]=x(t.mx,t.my),d=r?1.25:1,f=w*1.5*d,p=w*.65*d;a.save(),a.translate(l,u),a.rotate(Math.atan2(c.cy-s.cy,c.cx-s.cx)+Math.PI/2),a.fillStyle=`rgba(`+i+`, `+(r?1:S?.55:.85)+`)`,a.strokeStyle=r?`rgba(20, 12, 4, 0.95)`:`rgba(20, 12, 4, 0.55)`,a.lineWidth=Math.max(1,p/2),a.beginPath(),a.roundRect(-f,-p,2*f,2*p,p),a.fill(),a.stroke(),a.restore()}let T=S?s/48:Math.max(2.5,s/110),E=2;for(let e of o.zones){let n=t[e.id];if((e.boss===void 0||n!==`visited`||i.defeated?.includes(e.boss))&&!(e.isLair&&n))continue;let r=this.spots.get(e.id);if(!r){if(E--<=0)continue;this.spots.set(e.id,r=this.spotOf(e.id))}let[o,s]=x(...r);a.fillStyle=e.isLair?`#a01830`:`#e0503a`,a.strokeStyle=`#000`,a.lineWidth=Math.max(1,T/3),a.beginPath(),a.moveTo(o,s-T*1.3),a.lineTo(o+T,s),a.lineTo(o,s+T*1.3),a.lineTo(o-T,s),a.closePath(),a.fill(),a.stroke()}i.stickers&&this.drawStickers(a,i.stickers,x,s,S,b(f,p),i.dragging);for(let e of i.mates??[]){let[t,n]=x(e.wx,e.wy);a.fillStyle=e.color,a.strokeStyle=`#000`,a.lineWidth=Math.max(1.5,T/2.5),a.beginPath(),a.arc(t,n,T*1.1,0,Math.PI*2),a.fill(),a.stroke(),C&&Py(a,e.name,t,n+T*2.6,s,e.color)}let[D,O]=b(f,p),k=T*1.8;a.fillStyle=`rgba(127, 227, 255, 0.22)`,a.strokeStyle=`rgba(255, 255, 255, 0.85)`,a.lineWidth=Math.max(1,T/3),a.beginPath(),a.arc(D,O,k*1.55,0,Math.PI*2),a.fill(),a.stroke(),a.save(),a.translate(D,O),a.rotate({n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2}[n.facing??`n`]),a.fillStyle=Ay,a.strokeStyle=`#000`,a.lineWidth=Math.max(1.5,T/2.5),a.beginPath(),a.moveTo(0,-k*1.15),a.lineTo(k*.85,k*.8),a.lineTo(0,k*.35),a.lineTo(-k*.85,k*.8),a.closePath(),a.fill(),a.stroke(),a.restore(),C&&i.youLabel&&Py(a,i.youLabel,D,O+k*2.4+s/90,s,Ay)}static stickerRadius(e,t){return t?Math.max(6,e/24):Math.max(8,e/48)}drawStickers(t,n,r,i,a,o,s){let c=e.stickerRadius(i,a),l=n.next();for(let e of n.list){if(e.id===s)continue;let[a,o]=r(e.wx,e.wy);a<-c*2||o<-c*2||a>i+c*2||o>i+c*2||wy(t,e.kind,a,o,c,{n:e.n,dim:n.isReached(e.id),ring:e===l})}if(!a||!l||l.id===s)return;let[u,d]=r(l.wx,l.wy);if(u>=c&&d>=c&&u<=i-c&&d<=i-c)return;let f=Math.atan2(d-o[1],u-o[0]),p=(i/2-c*2.4)/Math.max(Math.abs(Math.cos(f)),Math.abs(Math.sin(f))),m=i/2+Math.cos(f)*p,h=i/2+Math.sin(f)*p;t.save(),t.translate(m,h),t.rotate(f),t.fillStyle=`#ffb547`,t.strokeStyle=`#1b1208`,t.lineWidth=Math.max(1.5,c/4),t.beginPath(),t.moveTo(c*2.3,0),t.lineTo(c*.7,-c*.95),t.lineTo(c*.7,c*.95),t.closePath(),t.fill(),t.stroke(),t.restore(),wy(t,`num`,m,h,c,{n:l.n})}toWorld(e,t,n){let r=this.views.get(e),i=e.getBoundingClientRect();if(!r||!i.width||t<i.left||n<i.top||t>i.right||n>i.bottom)return null;let a=this.world.radius,o=this.world.raster.unit,s=((t-i.left)/i.width*e.width/r.k+r.sx)*o-a,c=((n-i.top)/i.height*e.height/r.k+r.sy)*o-a;return s*s+c*c<=a*a?[s,c]:null}zoneOf(e,t){let n=this.world.raster.w,r=this.world.radius,i=this.world.raster.unit,a=Math.floor((e+r)/i),o=Math.floor((t+r)/i);if(a<0||o<0||a>=n||o>=n)return null;let s=this.world.raster.ids[o*n+a];return s===Ey?null:s}stickerAt(t,n,r,i){let a=this.views.get(t),o=t.getBoundingClientRect();if(!a||!o.width)return null;let s=this.world.radius,c=this.world.raster.unit,l=o.width/t.width,u=e.stickerRadius(t.width,!1)*1.15*l;for(let e=i.list.length-1;e>=0;e--){let t=i.list[e],d=o.left+((t.wx+s)/c-a.sx)*a.k*l,f=o.top+((t.wy+s)/c-a.sy)*a.k*l;if(Math.hypot(n-d,r-f)<=u)return t}return null}};function Py(e,t,n,r,i,a){e.font=Math.round(i/45)+`px "DotGothic16", monospace`,e.textAlign=`center`,e.textBaseline=`middle`,e.lineWidth=Math.max(2,i/260),e.strokeStyle=`rgba(0, 0, 0, 0.9)`,e.strokeText(t,n,r),e.fillStyle=a,e.fillText(t,n,r)}var Fy=[`num`,`pin`,`flag`,`star`,`skull`,`chest`,`heart`,`question`,`cross`,`eye`],Iy=class{list=[];seq=0;reached=new Set;nextNumber(){let e=new Set(this.list.map(e=>e.n));for(let t=1;t<=5;t++)if(!e.has(t))return t;return null}add(e,t,n){if(this.list.length>=40)return null;let r={id:++this.seq,kind:e,wx:t,wy:n};if(e===`num`){let e=this.nextNumber();if(e===null)return null;r.n=e}return this.list.push(r),r}move(e,t,n){let r=this.list.find(t=>t.id===e);r&&(r.wx=t,r.wy=n,this.reached.delete(e))}remove(e){let t=this.list.findIndex(t=>t.id===e);t>=0&&this.list.splice(t,1),this.reached.delete(e)}clear(){this.list.length=0,this.reached.clear()}toSaved(){return this.list.map(({kind:e,wx:t,wy:n,n:r})=>r===void 0?{kind:e,wx:t,wy:n}:{kind:e,wx:t,wy:n,n:r})}load(e){this.clear();for(let t of e){if(this.list.length>=40)break;if(!Fy.includes(t.kind)||!Number.isFinite(t.wx)||!Number.isFinite(t.wy))continue;let e=t.kind;e===`num`&&(!Number.isInteger(t.n)||t.n<1||t.n>5||this.list.some(e=>e.n===t.n))||this.list.push(e===`num`?{id:++this.seq,kind:e,wx:t.wx,wy:t.wy,n:t.n}:{id:++this.seq,kind:e,wx:t.wx,wy:t.wy})}}numbers(){return this.list.filter(e=>e.n!==void 0).sort((e,t)=>e.n-t.n)}arrive(e,t){let n=this.numbers(),r=0;for(let i of n)t(i.wx,i.wy)===e&&(r=i.n);for(let e of n)e.n<=r&&this.reached.add(e.id)}restart(){this.reached.clear()}isReached(e){return this.reached.has(e)}next(){return this.numbers().find(e=>!this.reached.has(e.id))??null}},Ly={hp:`HP`,atk:`ATK`,def:`DEF`,agi:`AGI`,luc:`LUC`},Ry=[.1,.3,.5,1],zy=e=>fi(Math.round(e)),By=[.1,.2,.35,.5],Vy=e=>By.filter(t=>e>=t).length,Hy=di({es:{dialog:`Atributos del personaje`,attrs:`Atributos`,gear:`Equipo`,close:`Cerrar`,level:`Nivel`,next:`Siguiente nivel`,sp:`SP por repartir`,thStat:`ATRIBUTO`,thBase:`BASE`,thExtra:`EXTRA`,thTotal:`TOTAL`,thAdd:`SUBIR`,baseTip:`Valor inicial más los SP repartidos`,extraTip:`Lo que suman el equipo y el personaje`,amount:`Cantidad (Intro)`,amountHint:`Cantidad`,crit:`Críticos`,combo:`Combos`,dmg:`Daño por golpe en esta zona`,rates:[`rara vez`,`a veces`,`a menudo`,`muy a menudo`,`casi siempre`],up:`sube con este reparto`,rec:`Reparto sugerido`,undo:`Deshacer`,ok:`Confirmar reparto`},en:{dialog:`Character attributes`,attrs:`Attributes`,gear:`Gear`,close:`Close`,level:`Level`,next:`Next level`,sp:`SP to assign`,thStat:`STAT`,thBase:`BASE`,thExtra:`BONUS`,thTotal:`TOTAL`,thAdd:`ADD`,baseTip:`Starting value plus assigned SP`,extraTip:`What your gear and character add`,amount:`Amount (Enter)`,amountHint:`Amount`,crit:`Critical hits`,combo:`Combos`,dmg:`Damage per hit in this zone`,rates:[`rarely`,`sometimes`,`often`,`very often`,`almost always`],up:`goes up with this split`,rec:`Suggested split`,undo:`Undo`,ok:`Confirm`}}),Uy=class{root;ctx=null;plan=rt();onSwitch=()=>{};heroStrip;constructor(e,t){this.heroStrip=t,this.root=document.createElement(`div`),this.root.className=`screen attrs`,this.root.hidden=!0;let n=Hy();this.root.innerHTML=`
      <div class="sheet attrsheet" role="dialog" aria-label="${n.dialog}">
        <div class="tabs">
          <span class="tab on">${n.attrs} <kbd>C</kbd></span>
          <button class="tab" type="button" data-k="other">${n.gear} <kbd>E</kbd></button>
          <span class="gold" data-k="gold"></span>
          <button class="close" type="button" data-k="close">${n.close} <kbd>Esc</kbd></button>
        </div>
        <div class="pane">
          <div class="card who">
            <div class="portrait" data-k="portrait" style="background-image:url('${t}')"></div>
            <b data-k="name"></b>
            <div class="cls" data-k="cls"></div>
            <div class="lvl">
              <div class="r"><span>${n.level}</span><span data-k="lv"></span></div>
              <div class="bar"><i data-k="xp"></i></div>
              <div class="r muted"><span>${n.next}</span><span data-k="xpp"></span></div>
            </div>
          </div>
          <div class="card main">
            <div class="sp"><b data-k="sp"></b><span data-k="spt"></span></div>
            <div class="stats-t" data-k="stats"></div>
            <div class="derived" data-k="derived"></div>
            <div class="foot">
              <div class="row2"><button class="bt gh" type="button" data-k="rec">${n.rec}</button><button class="bt gh" type="button" data-k="undo">${n.undo}</button></div>
              <button class="bt" type="button" data-k="ok">${n.ok}</button>
            </div>
          </div>
        </div>
      </div>`,e.appendChild(this.root),this.k(`close`).addEventListener(`click`,()=>this.hide()),this.k(`other`).addEventListener(`click`,()=>this.onSwitch()),this.root.addEventListener(`pointerdown`,e=>{e.target===this.root&&this.hide()}),this.k(`stats`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-s]`);if(!t||!this.ctx)return;let n=this.free(),r=t.dataset.p?+t.dataset.p:0;this.add(t.dataset.s,r?Math.max(1,Math.floor(n*r)):1)});let r=e=>{let t=e.target;if(!t.matches(`input[data-s]`)||!t.value)return;let n=Math.floor(+t.value);t.value=``,n>0&&this.add(t.dataset.s,n)};this.k(`stats`).addEventListener(`keydown`,e=>{e.key===`Enter`&&r(e)}),this.k(`stats`).addEventListener(`change`,r),this.k(`rec`).addEventListener(`click`,()=>{this.ctx&&(this.plan=dt(this.ctx.run.hero.sp),this.draw())}),this.k(`undo`).addEventListener(`click`,()=>{this.plan=rt(),this.draw()}),this.k(`ok`).addEventListener(`click`,()=>this.confirm())}get open(){return!this.root.hidden}refresh(){this.open&&this.draw()}show(e){this.ctx=e,this.plan=rt(),this.root.hidden=!1,this.draw()}hide(){this.open&&(this.confirm(),this.root.hidden=!0,this.ctx=null)}k(e){return this.root.querySelector(`[data-k="`+e+`"]`)}add(e,t){this.ctx&&(this.plan[e]+=Math.min(this.free(),t),this.draw())}planned(){return r.reduce((e,t)=>e+this.plan[t],0)}free(){return this.ctx?this.ctx.run.hero.sp-this.planned():0}confirm(){this.ctx&&this.planned()&&(this.ctx.allocate(this.plan),this.plan=rt(),this.ctx.onChange(),this.draw())}draw(){let e=this.ctx;if(!e)return;let t=Hy(),n=e.run.hero,o=pt(n,this.plan),c=ot(o),l=ot(n),u=this.free();this.k(`gold`).textContent=zy(e.run.gold)+` G`;let d=mr(e.archetype),f=n.bpl??2.75,p=r.filter(e=>d.kp[e]).sort((e,t)=>d.kp[t]-d.kp[e]).map(e=>Ly[e]+` +`+pi(d.kp[e]*f*s[e])).join(` · `);this.k(`name`).textContent=Pv(d),this.k(`cls`).textContent=Fv(d)+` · `+p;let m=this.k(`portrait`),h=d.id===`heroe`;m.style.backgroundImage=`url("`+(h?this.heroStrip:e.portrait)+`")`,m.style.backgroundSize=h?``:`contain`,m.style.backgroundPosition=h?``:`center`,m.style.animation=h?``:`none`,this.k(`lv`).textContent=zy(n.level);let g=st(n.level),_=st(n.level+1),v=Math.max(0,Math.min(1,(n.exp-g)/Math.max(1,_-g)));this.k(`xp`).style.width=(v*100).toFixed(1)+`%`,this.k(`xpp`).textContent=pi(Math.floor(v*100)/100),this.k(`sp`).textContent=zy(u),this.k(`spt`).textContent=t.sp,this.k(`sp`).parentElement.classList.toggle(`none`,u<=0);let y=`<span class="th">`+t.thStat+`</span><span class="th" title="`+t.baseTip+`">`+t.thBase+`</span><span class="th" title="`+t.extraTip+`">`+t.thExtra+`</span><span class="th">`+t.thTotal+`</span><span class="th">`+t.thAdd+`</span>`,b=this.root.querySelector(`input[data-s]:focus`),x=b?[b.dataset.s,b.value]:null,S=u<=0?` disabled`:``;if(this.k(`stats`).innerHTML=y+r.map(e=>{let n=i[e]+a[e]*o.alloc[e],r=c[e]-n,s=c[e]-l[e],u=`<button type="button" data-s="`+e+`"`+S+`>+1</button>`+Ry.map(t=>`<button type="button" data-s="`+e+`" data-p="`+t+`"`+S+`>`+pi(t)+`</button>`).join(``)+`<input type="number" min="1" step="1" inputmode="numeric" data-s="`+e+`" aria-label="`+Ly[e]+`: `+t.amount+`" title="`+t.amount+`" placeholder="`+t.amountHint+`"`+S+`>`;return`<span class="nm">`+Ly[e]+(this.plan[e]?` <span class="pend">+`+zy(this.plan[e])+`</span>`:``)+`</span><span>`+zy(n)+`</span><span class="add">`+(r?`+`+zy(r):`–`)+`</span><span class="tot">`+zy(c[e])+(s?` <small>+`+zy(s)+`</small>`:``)+`</span><span class="pm">`+u+`</span>`}).join(``),x){let e=this.root.querySelector(`input[data-s="`+x[0]+`"]`);e&&!e.disabled&&(e.value=x[1],e.focus())}let C=e.preview(c,mt(o)),w=e.preview(l,mt(n)),T=(e,n)=>`<b>`+t.rates[Vy(e)]+(e>n+.004?` <span class="up" title="`+t.up+`">&#9650;</span>`:``)+`</b>`;this.k(`derived`).innerHTML=`<span>`+t.crit+` `+T(C.crit,w.crit)+`</span><span>`+t.combo+` `+T(C.combo,w.combo)+`</span><span>`+t.dmg+` <b>`+zy(C.dmg)+`</b></span>`,this.k(`ok`).disabled=!this.planned(),this.k(`rec`).disabled=n.sp<=0,this.k(`undo`).disabled=!this.planned()}},Wy=e=>fi(Math.round(e)),Gy=di({es:{dialog:`Fin de la ronda`,trail:`Nivel de zona más alto de cada ronda`,cast:`Personajes`,shop:`Tienda y equipo`,log:`Exportar registro`,next:`Siguiente ronda`,enter:`Intro`,save:`Guardar partida`,saved:`Partida guardada`,saveTip:`Descarga un archivo para seguir otro día desde esta ronda (Cargar partida, en el inicio), con sus pegatinas del mapa.`,title:e=>`Fin de la ronda `+e,whyTime:`Se acabó el tiempo.`,whyBp:`Se acabaron los PB.`,whyQuit:`Terminó la ronda antes de tiempo.`,peak:`NIVEL DE ZONA MÁS ALTO`,ring:`ANILLO MÁS LEJANO`,level:`NIVEL ALCANZADO`,wins:`VICTORIAS`,winsLosses:`VICTORIAS / DERROTAS`,bosses:e=>e+(e===1?` jefe`:` jefes`),roundBar:(e,t)=>`Ronda `+e+`: nivel de zona `+t,kept:`Objeto que conserva:`,noKept:`No conserva ningún objeto.`,gold:e=>`Oro sin gastar: `+e+` G`,keepOne:`Solo pasa un objeto a la siguiente ronda. Para elegir otro: Tienda y equipo, ★ Conservar.`,plans:`Planos que encontró (ya están en su tienda):`,locked:`Aún no disponible`,unlock:`Abrir`,charLevel:`Nivel de personaje`,baseLevel:`Nivel base`,bonus:e=>`Bono de atributos ×`+e,waiting:(e,t)=>`Esperando a los demás (`+e+`/`+t+`)`,points:e=>e+(e===1?` punto`:` puntos`)},en:{dialog:`End of round`,trail:`Highest zone level of each round`,cast:`Characters`,shop:`Shop and gear`,log:`Export log`,next:`Next round`,enter:`Enter`,save:`Save game`,saved:`Game saved`,saveTip:`Downloads a file to continue another day from this round (Load game, on the start screen), with your map stickers.`,title:e=>`End of round `+e,whyTime:`Time is up.`,whyBp:`Out of BP.`,whyQuit:`You ended the round early.`,peak:`HIGHEST ZONE LEVEL`,ring:`FARTHEST RING`,level:`LEVEL REACHED`,wins:`WINS`,winsLosses:`WINS / LOSSES`,bosses:e=>e+(e===1?` boss`:` bosses`),roundBar:(e,t)=>`Round `+e+`: zone level `+t,kept:`Item you keep:`,noKept:`No item kept.`,gold:e=>`Unspent gold: `+e+` G`,keepOne:`Only one item carries over to the next round. To pick another: Shop and gear, ★ Keep.`,plans:`Blueprints you found (now in your shop):`,locked:`Not available yet`,unlock:`Unlock`,charLevel:`Character level`,baseLevel:`Base level`,bonus:e=>`Stat bonus ×`+e,waiting:(e,t)=>`Waiting for others (`+e+`/`+t+`)`,points:e=>e+(e===1?` point`:` points`)}}),Ky={hp:`HP`,atk:`ATK`,def:`DEF`,agi:`AGI`,luc:`LUC`},qy=e=>`/rpg-anillos/arte/elenco/`+e+`.png`,Jy=e=>{let t=mr(e).kp;return r.filter(e=>t[e]).sort((e,n)=>t[n]-t[e]).map(e=>Ky[e]+` `+t[e]).join(` · `)},Yy=class{root;view=null;painted=new Map;onShop=()=>{};onRematch=()=>{};onExport=()=>{};onSave=()=>!1;constructor(e){this.root=document.createElement(`div`),this.root.className=`screen roundend`,this.root.hidden=!0,this.root.innerHTML=`
      <div class="sheet endsheet" role="dialog" aria-label="${Gy().dialog}">
        <header><h2 data-k="title"></h2><div class="why" data-k="why"></div></header>
        <div class="cols">
          <div class="left">
            <div class="tiles" data-k="tiles"></div>
            <div class="trail" data-k="trail" aria-label="${Gy().trail}"></div>
            <div class="loot" data-k="loot"></div>
            <div class="keeprow" data-k="keep"></div>
            <p class="keepone">${Gy().keepOne}</p>
            <div class="keeprow floorrow" data-k="floor"></div>
            <div class="gold" data-k="gold"></div>
          </div>
          <div class="right">
            <div class="cast" data-k="cast" role="group" aria-label="${Gy().cast}"></div>
            <div class="who" data-k="who"></div>
          </div>
        </div>
        <div class="row">
          <button class="btn ghost" type="button" data-k="shop">${Gy().shop} <kbd>E</kbd></button>
          <button class="btn ghost" type="button" data-k="save" title="${Gy().saveTip}">${Gy().save}</button>
          <button class="btn ghost small" type="button" data-k="log">${Gy().log}</button>
          <button class="btn" type="button" data-k="again">${Gy().next} <kbd>${Gy().enter}</kbd></button>
        </div>
        <div class="party" data-k="party"></div>
      </div>`,e.appendChild(this.root),this.k(`shop`).addEventListener(`click`,()=>this.onShop()),this.k(`again`).addEventListener(`click`,()=>this.onRematch()),this.k(`log`).addEventListener(`click`,()=>this.onExport()),this.k(`save`).addEventListener(`click`,()=>{if(!this.onSave())return;let e=this.k(`save`);e.innerHTML=`&#10003; `+Gy().saved,e.classList.add(`done`)}),this.k(`cast`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-a]`),n=this.view;if(!t||!n)return;let r=n.me.progress,i=t.dataset.a;t.dataset.open&&Br(r).includes(i)&&(r.unlocked.push(i),r.unlocksLeft--,n.onUnlock(i)),r.unlocked.includes(i)&&(r.archetype=i,n.onChoose(i)),this.refresh()})}get open(){return!this.root.hidden}show(e){this.view=e,this.root.hidden=!1,this.painted.clear(),this.k(`save`).hidden=!e.canSave,this.k(`save`).textContent=Gy().save,this.k(`save`).classList.remove(`done`),this.refresh(),document.activeElement?.blur()}hide(){this.root.hidden=!0,this.view=null}paint(e,t){this.painted.get(e)!==t&&(this.painted.set(e,t),this.k(e).innerHTML=t)}update(e){this.view&&(this.view.players=e,this.refresh())}k(e){return this.root.querySelector(`[data-k="`+e+`"]`)}refresh(){let e=this.view;if(!e||!e.me.history.length)return;let t=Gy(),n=e.me.history,r=n[n.length-1],i=n.length>1?n[n.length-2]:null,a=e.me.progress,o=e.me.run;this.k(`title`).textContent=t.title(r.runIndex+1),this.k(`why`).textContent=r.reason===`time`?t.whyTime:r.reason===`quit`?t.whyQuit:t.whyBp;let s=(e,t)=>t===void 0||e===t?``:`<i class="`+(e>t?`up`:`down`)+`">`+(e>t?`+`:`−`)+Wy(Math.abs(e-t))+`</i>`,c=(e,t,n=``)=>`<div class="tile"><b>`+e+`</b><span>`+t+`</span>`+(n||`<i></i>`)+`</div>`;this.paint(`tiles`,c(Wy(r.peakZoneLevel),t.peak,s(r.peakZoneLevel,i?.peakZoneLevel))+c(r.deepestRing?String(r.deepestRing):`—`,t.ring,s(r.deepestRing,i?.deepestRing))+c(Wy(r.level),t.level,s(r.level,i?.level))+c(r.wins+(r.losses?` / `+r.losses:``),r.losses?t.winsLosses:t.wins,`<i>`+(r.bosses?t.bosses(r.bosses):``)+`</i>`)),this.k(`trail`).hidden=n.length<2;let l=Math.max(...n.map(e=>Math.log10(1+e.peakZoneLevel)),1);this.paint(`trail`,n.map((e,r)=>`<i`+(r===n.length-1?` class="now"`:``)+` title="`+t.roundBar(e.runIndex+1,Wy(e.peakZoneLevel))+`" style="height:`+Math.max(8,100*Math.log10(1+e.peakZoneLevel)/l).toFixed(0)+`%"></i>`).join(``)),this.paint(`loot`,r.loot.map(e=>Uv(z(e),Nv(z(e)))).join(``)),this.k(`loot`).hidden=!r.loot.length;let u=Ht(o);this.paint(`keep`,u?Uv(z(u))+`<span><span class="star">&#9733;</span> `+t.kept+` `+Nv(z(u))+`</span>`:`<span>`+t.noKept+`</span>`);let d=r.plans??[];this.paint(`floor`,`<span><span class="boss">&#9670;</span> `+t.plans+`</span>`+d.map(e=>Uv(z(e),Nv(z(e)))).join(``)),this.k(`floor`).hidden=!d.length,this.k(`gold`).textContent=o.gold?t.gold(Wy(o.gold)):``;let f=Br(a);this.paint(`cast`,fr.map(e=>{let n=a.unlocked.includes(e.id),r=f.includes(e.id),i=a.archetype===e.id,o=vr(a.charExp[e.id]??0);return!n&&!r?`<span class="cell locked" title="`+t.locked+`"></span>`:`<button type="button" class="cell`+(i?` sel`:``)+(r?` can`:``)+`" data-a="`+e.id+`"`+(r?` data-open="1"`:``)+` title="`+Pv(e)+` · `+Jy(e.id)+`" style="background-image:url('`+qy(e.id)+`')">`+(r?`<b>`+t.unlock+`</b>`:o?`<i>`+o+`</i>`:``)+`</button>`}).join(``));let p=mr(a.archetype),m=yr(a),h=e=>e[1]>e[0]?` <span class="up">+`+(e[1]-e[0])+`</span>`:``,g=r.archetype===a.archetype;this.paint(`who`,`<b>`+Pv(p)+`</b><span>`+Fv(p)+` · `+Jy(p.id)+`</span><span>`+t.charLevel+` `+vr(a.charExp[p.id]??0)+(g?h(r.charLevel):``)+` · `+t.baseLevel+` `+a.baseLevel+h(r.baseLevel)+`</span><span>`+t.bonus(fi(m.bpl,2))+`</span>`);let _=e.players.filter(e=>e.connected),v=_.find(t=>t.id===e.myId)?.ready??!1,y=_.filter(e=>e.ready).length;this.paint(`again`,v&&_.length>1?t.waiting(y,_.length):t.next+` <kbd>`+t.enter+`</kbd>`),this.k(`again`).disabled=v&&_.length>1,this.paint(`party`,_.length>1?_.map(e=>`<span class="`+(e.ready?`ok`:``)+`">`+(e.ready?`&#10003; `:``)+(e.crown?`<i class="crown"></i>`:``)+e.name.replace(/[<>&]/g,``)+` · `+t.points(e.score)+`</span>`).join(``):``)}},Xy=e=>e.replace(/[<>&"]/g,``),Zy=e=>fi(Math.round(e)),Qy=di({es:{dialog:`Fin de la partida`,fallen:e=>e+` ha caído`,motto:`Amistad = victoria`,lv:`Nv.`,points:e=>e+(e===1?` punto`:` puntos`),rounds:e=>e===1?`RONDA`:`RONDAS`,wins:`VICTORIAS`,bosses:`JEFES`,loot:`OBJETOS GANADOS`,zones:`ZONAS VISITADAS`,chars:`PERSONAJES`,seed:e=>`Semilla del mapa: `+e,log:`Exportar registro`,again:`Nueva partida`},en:{dialog:`End of the game`,fallen:e=>e+` has fallen`,motto:`Friendship = victory`,lv:`Lv.`,points:e=>e+(e===1?` point`:` points`),rounds:e=>e===1?`ROUND`:`ROUNDS`,wins:`WINS`,bosses:`BOSSES`,loot:`ITEMS LOOTED`,zones:`ZONES VISITED`,chars:`CHARACTERS`,seed:e=>`Map seed: `+e,log:`Export log`,again:`New game`}}),$y=class{root;constructor(e){this.root=document.createElement(`div`),this.root.className=`screen finale`,this.root.hidden=!0,e.appendChild(this.root)}get open(){return!this.root.hidden}show(e,t,n,r){let i=Qy(),a=(e,t)=>`<div class="tile"><b>`+e+`</b><span>`+t+`</span></div>`;this.root.innerHTML=`
      <div class="finsheet" role="dialog" aria-label="${i.dialog}">
        <p class="eyebrow">${i.fallen(t)}</p>
        <h1>${i.motto}</h1>
        <div class="party">${e.party.map(t=>`<figure><span class="por" style="background-image:url(&quot;`+qy(t.archetype)+`&quot;)"></span><figcaption>`+Xy(t.name)+`<small>`+Pv(mr(t.archetype))+` · `+i.lv+` `+Zy(t.level)+(e.party.length>1?` · `+i.points(t.score):``)+`</small></figcaption></figure>`).join(``)}</div>
        <div class="tiles">
          ${a(String(e.rounds),i.rounds(e.rounds))}${a(Zy(e.wins),i.wins)}${a(String(e.bosses),i.bosses)}
          ${a(String(e.loot),i.loot)}${a(String(e.zonesKnown),i.zones)}${a(String(e.archetypes),i.chars)}
        </div>
        <p class="seed">${i.seed(n)}</p>
        <div class="row"><button class="btn ghost" type="button" data-k="log">${i.log}</button>
        <button class="btn" type="button" data-k="again">${i.again}</button></div>
      </div>`,this.root.querySelector(`[data-k="again"]`).addEventListener(`click`,()=>location.reload()),this.root.querySelector(`[data-k="log"]`).addEventListener(`click`,r),this.root.hidden=!1,this.root.querySelector(`[data-k="again"]`).focus()}},eb=e=>e.replace(/[<>&"]/g,``),tb=1.1,nb=di({es:{title:`Duelo`,you:`(usted)`,vs:`contra`,wins:e=>e+(e===1?` victoria`:` victorias`),points:e=>e+(e===1?` punto`:` puntos`)},en:{title:`Showdown`,you:`(you)`,vs:`vs`,wins:e=>e+(e===1?` win`:` wins`),points:e=>e+(e===1?` point`:` points`)}}),rb=class{root;timers=[];token=0;constructor(e){this.root=document.createElement(`div`),this.root.className=`screen showdown`,this.root.hidden=!0,e.appendChild(this.root)}get open(){return!this.root.hidden}async run(e,t,n,r,i){this.hide();let a=++this.token,o=e.duels.filter(e=>e.a===r||e.b===r);for(let e=0;e<o.length&&a===this.token;e++)await i(o[e],e+1,o.length);a===this.token&&this.show(e,t,n,r)}show(e,t,n,r){this.hide();let i=nb(),a=e=>n.find(t=>t.id===e),o=e=>eb(a(e)?.name??`?`)+(e===r?` <small>`+i.you+`</small>`:``),s=e=>`<span class="por" style="background-image:url(&quot;`+qy(a(e)?.archetype??`heroe`)+`&quot;)"></span>`;this.root.innerHTML=`
      <div class="sheet sdsheet" role="dialog" aria-label="${i.title}">
        <h2>${i.title}</h2>
        <div class="duels">${e.duels.map(e=>`
          <div class="duel" data-w="${e.winner===e.a?`a`:`b`}">
            <span class="side a">${s(e.a)}<b>${o(e.a)}</b></span>
            <span class="vs">${i.vs}</span>
            <span class="side b"><b>${o(e.b)}</b>${s(e.b)}</span>
            <i class="hp" style="--left:${Math.round(e.left*100)}%"></i>
          </div>`).join(``)}
        </div>
        <ol class="table">${e.standings.map((e,n)=>`<li class="${n===0?`first`:``}"><span>${n===0?`<i class="crown"></i>`:``}${o(e.id)}</span><span>${i.wins(e.wins)}</span><span class="pts">${i.points(t[e.id]??0)}</span></li>`).join(``)}</ol>
      </div>`,this.root.hidden=!1;let c=[...this.root.querySelectorAll(`.duel`)];c.forEach((e,t)=>this.timers.push(setTimeout(()=>e.classList.add(`on`),300+t*tb*1e3))),this.timers.push(setTimeout(()=>this.root.querySelector(`.table`).classList.add(`on`),300+c.length*tb*1e3))}hide(){this.token++;for(let e of this.timers)clearTimeout(e);this.timers=[],this.root.hidden=!0}};function ib(e,t,n,r){let i=e.a===t?0:1,a=[],o=0,s=0,c=0,l=0;for(let t of e.log){let e=t.by===i;l=t.turn,a.push({turn:l,type:t.crit?`crit`:`attack`,src:e?`hero`:`enemy`,combo:t.combo,dmg:t.dmg,hpLeft:t.hpLeft}),t.hpLeft===0&&a.push({turn:l,type:`death`,src:e?`enemy`:`hero`,combo:t.combo,dmg:0,hpLeft:0}),e&&(o++,t.crit&&s++,c=Math.max(c,t.combo+1))}let u=e.winner===t,d=t=>{let n=[...e.log].reverse().find(e=>e.by!==t);return n?n.hpLeft:e.maxHp[t]};a.push({turn:l,type:`end`,src:u?`hero`:`enemy`,combo:0,dmg:0,hpLeft:d(u?i:1-i)});let f={events:a,win:u,maxHp:{hero:e.maxHp[i],enemy:e.maxHp[1-i]},hpLeft:{hero:d(i),enemy:d(1-i)},turns:l,heroHits:o,heroCrits:s,bestCombo:c},p={name:r,level:1,stats:{hp:e.maxHp[1-i],atk:1,def:1,agi:1,luc:1}};return{log:f,hero:{...n,stats:sr(n.stats)},encounter:{kind:`normal`,zoneId:0,creatureId:``,bossId:null,seed:0,enemy:p},pbSpent:0,pbGained:0,exp:0,gold:0,levelsGained:0,levelBefore:1,loot:null}}var ab=[[0,2,4,7,9],[0,3,5,7,10],[0,2,4,5,7,9,11],[0,2,3,5,7,9,10],[0,2,3,5,7,8,10],[0,2,4,6,7,9,11]],ob=[`triangle`,`square`,`sine`,`triangle`],sb=e=>{let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0};function cb(e,t){let n=sb(e.id),r=t?ab[0]:e.draconic?ab[4+n%2]:ab[n%ab.length],i=110*2**((n>>>3)%7/12)*(e.draconic?.75:1),a=t?76:e.draconic?70+(n>>>6)%12:84+(n>>>6)%30,o=Array.from({length:8},(e,t)=>(n>>>t*3+9&7)==7?-1:((n>>>t*2)%r.length+(t%4==3?2:0))%r.length);return{root:i,mode:r,bpm:a,lead:t?`sine`:ob[(n>>>12)%ob.length],arp:o,perc:t?0:(n>>>15)%3}}var lb=class{song=null;gain=null;next=0;step=0;chord=0;muted=!1;ducked=!1;armOnFirstInput(){let e=()=>{cv(),this.ensure(),removeEventListener(`keydown`,e),removeEventListener(`pointerdown`,e)};addEventListener(`keydown`,e),addEventListener(`pointerdown`,e)}ensure(){sv.ctx&&!this.gain&&(this.gain=sv.ctx.createGain(),this.gain.gain.value=0,this.gain.connect(sv.out),setInterval(()=>this.tick(),30),this.fade())}setZone(e,t){let n=cb(e,t);this.song&&n.root===this.song.root&&n.bpm===this.song.bpm&&n.lead===this.song.lead||(this.song=n,this.step=0,this.chord=0,sv.ctx&&(this.next=sv.ctx.currentTime+.25,this.fade(!0)))}duck(e){this.ducked=e,this.fade()}toggle(){this.muted=!this.muted,this.fade()}fade(e=!1){let t=sv.ctx,n=this.gain;if(!t||!n)return;let r=this.muted||this.ducked?1e-4:.32,i=t.currentTime;n.gain.cancelScheduledValues(i),n.gain.setValueAtTime(Math.max(1e-4,e?1e-4:n.gain.value),i),n.gain.exponentialRampToValueAtTime(r,i+(e?1.2:.4))}tick(){let e=sv.ctx,t=this.song,n=this.gain;if(!e||!t||!n||this.muted||this.ducked){e&&(this.next=Math.max(this.next,e.currentTime));return}let r=60/t.bpm/2;for(this.next<e.currentTime&&(this.next=e.currentTime+.05);this.next<e.currentTime+.15;)this.note(t,this.step,this.next,n),this.next+=r,this.step++}note(e,t,n,r){let i=t%8,a=t=>e.mode[(t%e.mode.length+e.mode.length)%e.mode.length]+12*Math.floor(t/e.mode.length);t%16==0&&(this.chord=[0,3,4,2][t/16%4]),(i===0||i===4)&&uv(pv(e.root/2,a(this.chord)),{at:n,type:`triangle`,dur:.5,vol:.12,lp:600,dest:r});let o=e.arp[i];if(o>=0&&uv(pv(e.root*2,a(o+this.chord)),{at:n,type:e.lead,dur:.22,atk:.01,vol:e.lead===`square`?.025:.05,lp:2400,dest:r}),t%16==0)for(let t of[0,2,4])uv(pv(e.root,a(this.chord+t)),{at:n,type:`sine`,dur:2.6,atk:.6,vol:.03,dest:r});e.perc&&i%2==0&&dv({at:n,type:`highpass`,f:7e3,dur:.03,vol:.02*e.perc,dest:r})}},ub=52,db=.18,fb=.92,pb=.55,mb=`button, a, input, select, textarea, label, .box, .sheet, .screen, .cstage, .minimap, .joy`,hb=class{root;knob;id=null;ox=0;oy=0;v={x:0,y:0,run:!1};enabled=()=>!0;constructor(e){this.root=document.createElement(`div`),this.root.className=`joy`,this.root.hidden=!0,this.root.innerHTML=`<i class="ring"></i><i class="knob"></i>`,this.knob=this.root.querySelector(`.knob`),e.appendChild(this.root),addEventListener(`pointerdown`,e=>this.down(e),{passive:!1}),addEventListener(`pointermove`,e=>this.move(e),{passive:!1});for(let e of[`pointerup`,`pointercancel`])addEventListener(e,e=>{e.pointerId===this.id&&this.reset()});addEventListener(`blur`,()=>this.reset())}get state(){return this.v}reset(){this.id=null,this.v={x:0,y:0,run:!1},this.root.hidden=!0,this.root.classList.remove(`run`)}down(e){if(e.pointerType!==`touch`||(document.documentElement.classList.add(`touch`),this.id!==null||!this.enabled())||e.clientX>innerWidth*pb)return;let t=e.target;t&&t.closest(mb)||(e.preventDefault(),this.id=e.pointerId,this.ox=e.clientX,this.oy=e.clientY,Object.assign(this.root.style,{left:this.ox+`px`,top:this.oy+`px`}),this.root.hidden=!1,this.place(0,0))}move(e){if(e.pointerId!==this.id)return;if(e.preventDefault(),!this.enabled()){this.reset();return}let t=e.clientX-this.ox,n=e.clientY-this.oy,r=Math.hypot(t,n),i=r>ub?ub/r:1;this.place(t*i,n*i);let a=Math.min(1,r/ub);if(a<db){this.v={x:0,y:0,run:!1},this.root.classList.remove(`run`);return}let o=(a-db)/.8200000000000001/a;this.v={x:t/ub*i*o,y:n/ub*i*o,run:a>=fb},this.root.classList.toggle(`run`,this.v.run)}place(e,t){this.knob.style.transform=`translate(`+e.toFixed(1)+`px, `+t.toFixed(1)+`px)`}},gb=new Set,_b=()=>!1,vb=()=>!1,yb=()=>!1,bb=()=>!1,xb=null;addEventListener(`keydown`,e=>{if(!(e.target instanceof HTMLInputElement||_b())){if(xb?.open){e.preventDefault(),xb.hide();return}if(bb()){if(e.code===`Space`){e.preventDefault();return}e.code===`KeyE`||e.code===`Escape`&&yb()?wb():(e.code===`Enter`||e.code===`NumpadEnter`)&&!yb()&&(e.preventDefault(),!e.repeat&&performance.now()>=Ab&&Tb());return}gb.add(e.code),e.code===`KeyC`&&V(`map`).hidden?Cb():e.code===`KeyE`&&V(`map`).hidden?wb():e.code===`KeyM`&&!vb()&&!yb()?Sb():e.code===`KeyR`&&!V(`map`).hidden?Ob():e.code===`KeyN`?Pb.toggle():e.code===`Tab`&&Nb()?e.preventDefault():e.code===`KeyF`&&V(`map`).hidden?Eb():e.code===`KeyH`?Db():e.code===`Equal`||e.code===`NumpadAdd`?jb(1):(e.code===`Minus`||e.code===`NumpadSubtract`)&&jb(-1),e.code===`Escape`&&(vb()?Cb():yb()?wb():V(`map`).hidden||Sb())}}),addEventListener(`keyup`,e=>{gb.delete(e.code),bb()&&e.code===`Space`&&e.preventDefault()}),addEventListener(`blur`,()=>gb.clear());var Sb=()=>{},Cb=()=>{},wb=()=>{},Tb=()=>{},Eb=()=>{},Db=()=>{},Ob=()=>{},kb=900,Ab=0,jb=e=>{},Mb=e=>{},Nb=()=>!1,Pb=new lb;Pb.armOnFirstInput();var Fb=[];addEventListener(`error`,e=>Fb.push(String(e.message))),addEventListener(`unhandledrejection`,e=>Fb.push(String(e.reason)));function Ib(e){let t=document.createElement(`div`);t.className=`screen lost`,t.innerHTML=`<div class="sheet lostsheet" role="alertdialog"><h2></h2><p></p><div class="row"><button class="btn" type="button"></button></div></div>`;let n=U();t.firstElementChild.setAttribute(`aria-label`,n.lostTitle),t.querySelector(`h2`).textContent=n.lostTitle,t.querySelector(`p`).textContent=n.lostBody,t.querySelector(`button`).textContent=n.lostBtn,t.querySelector(`button`).addEventListener(`click`,()=>Lb(e,!1)),V(`stage`).appendChild(t),t.querySelector(`button`).focus()}function Lb(e,t){let n=new URLSearchParams({nombre:e.name()}),r=Ni(e.code());r&&n.set(t?`crear`:`sala`,r);for(let e of[`red`,`debug`])H.has(e)&&n.set(e,H.get(e));ci()!==`es`&&n.set(`idioma`,ci()),location.href=location.pathname+`?`+n.toString()}var Rb=`guarida`,zb=120;async function Bb(e,t,n,r,i){let a=new gg(V(`game`));zh(),jb=e=>{a.zoomStep(e)};let o=0,s=0,c=!1;addEventListener(`wheel`,e=>{let t=performance.now();if(t-s>250&&(c=!1,o=0),s=t,_b()||vb()||yb()||bb()||xb?.open||(o+=e.deltaMode===1?e.deltaY*33:e.deltaY,Math.abs(o)<60))return;let n=o<0?1:-1;if(o=0,V(`map`).hidden){a.zoomStep(n);return}c||(c=!0,Mb(n))});let l=await Eg(),u=new tv(l),d=new WeakMap,f=(e,t)=>{d.get(e)!==t&&(d.set(e,t),Eg(t).then(n=>{d.get(e)===t&&e.setAnim(n)}))};f(u,n.me.progress.archetype),a.scene.add(u.mesh);let p=new Ny(e,t=>{let n=Ar(e,t);return $n(n,...n.anchor)}),m=n.discovered,g=new Iy;r?.loadedSave?.stickers&&g.load(r.loadedSave.stickers),p.refresh(m);let _=null,v=null,y=null,b=-1,x=null,S=!1,C=n.me.run,w=()=>r?.session.players[n.id]?.run;Ii&&r&&H.has(`tiempo`)&&(r.session.timeLeft=+H.get(`tiempo`)),Ii&&r&&H.has(`build`)&&(Vb(w().hero,H.get(`build`),+(H.get(`nivel`)??1e3)),Vb(C.hero,H.get(`build`),+(H.get(`nivel`)??1e3)));let T=new py(document.body);_b=()=>T.open;let E=new Yy(V(`stage`)),D=new Uy(V(`stage`),`/rpg-anillos/arte/heroe/quieto_s.png`),O=new Gv(V(`stage`));document.documentElement.classList.add(`ingame`),matchMedia(`(pointer: coarse)`).matches&&document.documentElement.classList.add(`touch`);let k=new hb(V(`stage`)),A=new $y(V(`stage`)),j=new rb(V(`stage`));xb=new Jg(V(`stage`)),xb.onToggle=e=>{r&&(r.paused=e)},xb.quitMode=()=>n.phase!==`EXPLORE`||n.stats||M||C.pb<=0?null:n.players.filter(e=>e.connected).length>1?`group`:`solo`,xb.onQuit=()=>{gb.clear(),n.intent({a:`quit`})},xb.roomMode=()=>({restart:r&&!n.stats&&n.phase===`EXPLORE`?r.canRestart()?`ok`:`busy`:null,menu:n.stats?null:r?`host`:`guest`}),xb.onRestart=()=>{gb.clear(),r?.restartRound()},xb.onMenu=()=>{n.leave(),Lb(i,!!r)},Db=()=>{!xb||xb.open||vb()||yb()||bb()||_b()||!V(`map`).hidden||(gb.clear(),xb.show())},!H.has(`auto`)&&!H.has(`demo`)&&!H.has(`recorrer`)&&xb.show(!0),vb=()=>D.open,yb=()=>O.open,bb=()=>E.open,Cb=()=>{if(gb.clear(),D.open){D.hide();return}M||S||!v||E.open||(O.open&&O.hide(),v.moving=!1,D.show({run:C,allocate:e=>n.intent({a:`allocate`,plan:e}),archetype:n.me.progress.archetype,portrait:qy(n.me.progress.archetype),preview:(t,n)=>On(e,v.zoneId,t,C.kit,n),onChange:ce}))},wb=()=>{if(gb.clear(),O.open){O.hide();return}M||S||!v||(D.open&&D.hide(),v.moving=!1,O.show({run:C,act:e=>n.intent(e),onChange:()=>{ce(),E.refresh()}}))},Eb=()=>{M||S||!v||D.open||O.open||!ee()||(gb.clear(),v.moving=!1,n.intent({a:`fightNow`}))};let ee=()=>!!v&&Yt(C.kit).instant&&C.pb>0&&e.zones[v.zoneId].creatures.length>0;D.onSwitch=()=>wb(),O.onSwitch=()=>{E.open||Cb()},E.onShop=()=>wb(),E.onRematch=()=>Tb(),E.onExport=()=>yt(),E.onSave=()=>bt(),V(`openattr`).addEventListener(`click`,()=>Cb()),V(`openeq`).addEventListener(`click`,()=>wb()),V(`openhelp`).addEventListener(`click`,()=>Db()),V(`openfight`).addEventListener(`click`,()=>Eb()),V(`minibox`).addEventListener(`click`,e=>{!e.target.closest(`.mmzoom`)&&Xe()&&Ze(`region`)});let M=!1,N=null,te=null,ne=0,re=null,ie=0,ae=0,oe=null,se=-1;function ce(){let t=oe??{level:C.hero.level,pb:C.pb,gold:C.gold};V(`hlevel`).textContent=String(t.level),V(`hpb`).textContent=String(t.pb);let n=C.pb+C.pbSpent-C.pbGained+(C.quitPb??0);fe(V(`hpb`).parentElement,n>0?t.pb/n:0),V(`hgold`).textContent=Fi(t.gold);let r=v?e.zones[v.zoneId]:null;ue(),V(`gaugelab`).textContent=!r||!r.creatures.length?U().noFights:C.pb<=0?U().noPb:``;let i=oe?oe.sp:C.hero.sp;V(`spbadge`).hidden=i<=0,V(`spbadge`).textContent=`+`+Fi(i)+` SP`,V(`openattr`).classList.toggle(`has-sp`,i>0),oe||(se>=0&&C.hero.sp>se&&!C.autoSp&&I(V(`openattr`),`+`+Fi(C.hero.sp-se)+` SP`,`sp`),se=C.hero.sp),V(`openfight`).hidden=!Yt(C.kit).instant,V(`openfight`).classList.toggle(`off`,!ee()),V(`zlevel`).dataset.risk=r&&!r.isHub?Tn(e,C,r.id,r.lvHi):``,me()}let le=``;function ue(){let t=v?e.zones[v.zoneId]:null,n=!!t&&t.creatures.length>0&&C.pb>0,r=n?Math.min(1,(C.walked+ie)/107):0;V(`gauge`).style.width=r*100+`%`;let i=n?pi(r):`—`;i!==le&&(le=i,V(`gaugepct`).textContent=i)}let de=.15;function fe(e,t){e.classList.toggle(`warn`,t<=.4&&t>de),e.classList.toggle(`bad`,t<=de)}let pe=-1;function me(){let e=Math.ceil(n.timeLeft);if(e===pe)return;pe=e,V(`htime`).textContent=Math.floor(e/60)+`:`+String(e%60).padStart(2,`0`);let t=V(`htime`).parentElement;fe(t,e/Math.max(1,De.roundSeconds)),t.classList.toggle(`last`,e<=10&&n.phase===`EXPLORE`)}let he=null,ge=``;n.on(`gather`,e=>{he=e.left===null&&!e.missing.length?he&&he.g.zoneId===e.zoneId?null:he:{g:e,at:performance.now()}});function _e(){let e=V(`gather`),t=he&&v&&he.g.zoneId===v.zoneId?he.g:null,r=t&&t.left!==null?Math.max(0,t.left-(performance.now()-he.at)/1e3):null,i=t&&t.missing.length?U().missing((e=>e.map(e=>n.players.find(t=>t.id===e)?.name??`?`).join(`, `))(t.missing)):``;e.hidden=!t||(r===null||r<=0)&&!i;let a=t&&!e.hidden?ye(t):null,o=t?Math.max(r??0,nr(t.kind,n.players.filter(e=>e.connected).length)):0;Se(a&&r!==null&&o>0&&!M?1-r/o:0,a?.risk??null);let s=r===null?``:String(Math.ceil(r)),c=s+`|`+i+`|`+(a?a.text+a.risk:``);if(c===ge)return;ge=c;let l=e.querySelector(`em`);l.textContent=a?a.text:``,l.dataset.risk=a?a.risk:``,e.querySelector(`b`).textContent=s,e.querySelector(`span`).textContent=i,e.querySelector(`span`).className=i?`who`:``,s&&(e.classList.remove(`tick`),e.offsetWidth,e.classList.add(`tick`))}let ve=null;function ye(t){let r=e.zones[t.zoneId],i=Math.max(1,t.participants.length);if(t.kind===`boss`&&r.boss===void 0)return null;let a=t.kind+t.zoneId+`|`+i+`|`+C.encounters+`|`+C.hero.level;if(ve?.key===a)return ve;let o=t.kind===`dragon`?Sn(e,C,i):_n(e,C,r.boss,vn(e,C.runIndex,r.boss,n.players.length)),s=t.kind===`dragon`?d_(e):f_(o);return ve={key:a,text:(o.exalt?U().exaltTag(o.exalt,h[o.exalt])+` · `:``)+U().foeLevel(s,Fi(o.enemy.level)),risk:yn(o,i)?`danger`:Cn(dn(C),o.enemy,!0)},ve}let be=.3,xe={safe:9683582,even:14992498,danger:14052188};function Se(e,t){if(!te)return;let n=Math.round(Math.min(1,Math.max(0,e))*48),{group:r,sweep:i,r:a}=te;if(r.visible=n>0,t&&i.material.color.setHex(xe[t]),n===ne)return;ne=n,i.geometry.dispose();let o=n/48*Math.PI*2;i.geometry=n?new Fu(a-be,a,48,1,Math.PI/2-o,o):new Mc}function Ce(e,t){let n=new As,r=e=>(e.rotation.x=-Math.PI/2,n.add(e),e),i=(e,t)=>new Wc({color:e,transparent:!0,opacity:t,depthWrite:!1,side:2});r(new nl(new Fu(t-be,t,48),i(1053212,.35)));let a=r(new nl(new Mc,i(16777215,.9)));return a.position.y=.002,n.position.set(e[0],.015,e[1]),n.visible=!1,{group:n,sweep:a,r:t}}async function P(){if(!_||!v)return;let e=V(`fade`);e.classList.add(`on`),await new Promise(e=>setTimeout(e,180)),v=re===null?xh(_):bh(_,re),ae=10,Et(!0),e.classList.remove(`on`)}n.on(`me`,()=>{ie=0,f(u,n.me.progress.archetype),ce(),D.refresh(),O.refresh(),E.refresh();let t=v?e.zones[v.zoneId]:null;N&&t&&t.boss!==void 0&&C.defeatedBosses.includes(t.boss)&&!M&&(N.removeFromParent(),N=null)}),n.on(`reveal`,()=>st()),n.on(`snap`,e=>{let t=performance.now();for(let r of e){if(r.id===n.id)continue;let e=Fe.get(r.id)??Ie(r.id);f(e.sprite,r.archetype),e.samples.push({t,v:r}),e.samples.length>6&&e.samples.shift()}for(let t of[...Fe.keys()])e.some(e=>e.id===t&&e.connected)||Le(t);E.open&&E.update(e)});let we=[];n.on(`fight`,(e,t)=>{we.push([e,t,C.hero.level,C.hero.sp]),M||Te()}),n.on(`showdown`,(t,r)=>{Oe();let i=e.zones[v?.zoneId??e.hub].theme.id,a=e=>n.players.find(t=>t.id===e)?.name??`?`;j.run(t,r,n.players,n.id,async(e,t,r)=>{let o=e.a===n.id?e.b:e.a,s=await Pg(i,n.me.progress.archetype,n.players.find(e=>e.id===o)?.archetype);if(!s)return;let c=T.autoContinue,l=a(o);T.autoContinue=1.4,await T.play(ib(e,n.id,dn(C),l),s,{pbBefore:C.pb,pbAfter:C.pb,goldBefore:C.gold,expBefore:C.hero.exp},{rival:l,me:a(n.id),index:t,total:r}),T.autoContinue=c})}),n.on(`phase`,(e,t)=>{e===`SHOWDOWN`?Oe():e===`SHOP`?(j.hide(),T.abortDuel(),ke()):e===`EXPLORE`&&t===`SHOP`&&Ae()}),n.on(`end`,e=>L(e)),n.on(`restart`,()=>{Oe(),we.length=0,Ae(),st(),ce()}),n.on(`close`,()=>{n.stats||(Fb.push(`conexión cerrada`),Ib(i))});async function Te(){let t=we.shift();if(!t)return;let[r,i,a,o]=t,s=r.encounter;M=!0,oe={level:a,pb:i.pbBefore,gold:i.goldBefore,sp:o},ce(),Pb.duck(!0),gb.clear(),qt=null,v&&(v.moving=!1),D.open&&D.hide(),O.open&&O.hide();let c=await Ng(s.kind===`dragon`?Rb:e.zones[s.zoneId].theme.id,s.creatureId,n.me.progress.archetype,r.partyArchetypes);c&&await T.play(r,c,{pbBefore:i.pbBefore,pbAfter:i.pbAfter,goldBefore:i.goldBefore,expBefore:i.expBefore}),s.kind!==`normal`&&r.log.win&&N&&(N.removeFromParent(),N=null),s.kind!==`normal`&&!r.log.win&&v?.zoneId===s.zoneId&&await P(),gb.clear(),M=!1,Pb.duck(!1),Bt=null;let l=we[0];oe=l?{level:l[2],pb:l[1].pbBefore,gold:l[1].goldBefore,sp:l[3]}:null,ce(),Ee(r,i),E.open&&(Ab=performance.now()+kb),n.intent({a:`fightDone`}),we.length&&Te()}function Ee(e,t){e.levelsGained&&F(`hlevel`,`+`+Fi(e.levelsGained),`up`);let n=t.pbAfter-t.pbBefore;n&&F(`hpb`,(n>0?`+`:`−`)+Math.abs(n),n>0?`up`:e.log.win?`spent`:`lost`),e.gold&&F(`hgold`,`+`+Fi(e.gold),`gold`)}function F(e,t,n){I(V(e).parentElement,t,n)}function I(e,t,n){let r=document.createElement(`i`);r.className=`delta `+n,r.textContent=t,e.appendChild(r),e.classList.remove(`bump`),e.offsetWidth,e.classList.add(`bump`),setTimeout(()=>r.remove(),1700)}function L(t){gb.clear(),E.open&&E.hide(),V(`hud`).hidden=!0,A.show(t,d_(e),e.seedCode,yt)}function Oe(){gb.clear(),qt=null,D.open&&D.hide(),O.open&&O.hide(),V(`map`).hidden||Sb(),v&&(v.moving=!1)}function ke(){Oe(),ce(),Ab=performance.now()+kb,E.show({me:n.me,myId:n.id,players:n.players,canSave:!!r,onUnlock:e=>n.intent({a:`unlock`,archetype:e}),onChoose:e=>n.intent({a:`choose`,archetype:e})}),jt&&(setTimeout(()=>{if(!E.open)return;wb();let e=Mt().filter(e=>!C.kit.owned.includes(e.id)&&At(e)<=C.gold).sort((e,t)=>At(t)-At(e))[0];e&&setTimeout(()=>{n.intent({a:`buy`,id:e.id,autoEquip:!0}),O.refresh(),ce()},1500)},2500),setTimeout(()=>{O.open&&O.hide(),E.open&&Tb()},8e3))}Tb=()=>{E.open&&!S&&(O.open&&O.hide(),n.intent({a:`ready`,ready:!0}))};function Ae(){if(x=null,O.open&&O.hide(),E.hide(),Bt=null,g.restart(),jt){Ht.clear();let e=w();e&&(e.autoSp=!0)}R(e.hub,null)}async function Ne(t,r,i){let a=e.zones[t],o=a.boss===void 0?a.isLair?xn:a.theme.ids?.[0]:e.bosses[a.boss].creatureId;if(!o||a.boss!==void 0&&C.defeatedBosses.includes(a.boss))return;let s=null,c=await Ig(o);if(c)s={...zg(c),texture:c.texture};else{let e=await Ng(a.theme.id,o);if(!e)return;let t=e.enemy.f;s={...zg({w:t.w,h:t.h,ox:t.cx-t.x,oy:t.pies-t.y},33.333333333333336),texture:await yg(e.enemy.url)}}let{geometry:l,south:u}=s,d=new nl(l,Hg(s.texture));d.position.set(i[0],0,i[1]+u),r.add(d),N=d;let f=a.boss===void 0?0:vn(e,C.runIndex,a.boss,n.players.length);for(let e=0;e<f;e++){let t=new nl(new Fu(1.5+e*.35,1.68+e*.35,48),new Wc({color:16766046,transparent:!0,opacity:.85,depthWrite:!1,blending:2}));t.rotation.x=-Math.PI/2,t.position.set(i[0],.03,i[1]),r.add(t)}}async function R(t,n,r=!1){S=!0;let i=V(`fade`);y&&(i.classList.add(`on`),await new Promise(e=>setTimeout(e,180)));let o=e.zones[t],s=Ar(e,t),c=[...new Set(s.features.map(e=>e.kit))],[l,u,...d]=await Promise.all([Cg(o.theme.id),kg(o.theme.id),...c.map(kg)]),f=o.boss!==void 0||o.isLair?s.anchor:null,h=B_(s,l,{bossAt:f,props:u,ground:o.isHub?`hub`:Nn.includes(o.theme.id)?o.theme.id:null,features:Object.fromEntries(c.map((e,t)=>[e,d[t]]))});N=null,f&&await Ne(t,h,f),te=null,ne=0,f&&(te=Ce(f,o.isLair?3:gr),h.add(te.group)),re=n,y&&(a.scene.remove(y),Hb(y)),y=h,a.scene.add(y),a.setBiome(o.isHub?null:o.theme.hue,o.isHub?null:o.theme.id),b=t,Pe.setZone(s,h),r||(_=s,v=n===null?xh(_):bh(_,n),ae=10,Me(m,e,t).length&&st(),g.arrive(t,(e,t)=>p.zoneOf(e,t)));for(let e of Fe.values())e.sprite.mesh.visible=!1;Pb.setZone(o.theme,o.isHub),V(`zname`).textContent=r_(o.theme),H.has(`recorrer`)||(document.title=r_(o.theme)+` · `+U().docTitle),V(`zsub`).textContent=i_(o)+` · `+u_(o.ring).replace(/ /g,`\xA0`),V(`zlevel`).textContent=o.isHub?`—`:o.lvLo+`-`+o.lvHi,r||Et(!0),Ct(),ce(),i.classList.remove(`on`),S=!1}let Pe=new ov(V(`others`)),Fe=new Map;function Ie(e){let t=new tv(l);t.mesh.visible=!1,a.scene.add(t.mesh);let n=document.createElement(`div`);n.className=`mate`,n.innerHTML=`<span class="bubble" hidden></span><span class="nm"></span>`,n.querySelector(`.bubble`).textContent=U().fighting,V(`others`).appendChild(n);let r={sprite:t,tag:n,samples:[]};return Fe.set(e,r),r}function Le(e){let t=Fe.get(e);t&&(t.sprite.mesh.removeFromParent(),t.tag.remove(),Fe.delete(e))}let Re=new q;function ze(e){let t=performance.now()-zb;for(let n of Fe.values()){let r=n.samples,i=r[r.length-1],o=!!v&&!!i&&i.v.zoneId===b&&i.v.connected&&!S;if(n.sprite.mesh.visible=o,n.tag.hidden=!o,!o)continue;let s=r[0],c=i;for(let e=1;e<r.length;e++)if(r[e].t>=t){s=r[e-1],c=r[e];break}let l=c.t===s.t||s.v.zoneId!==c.v.zoneId?1:Math.max(0,Math.min(1,(t-s.t)/(c.t-s.t))),u=s.v.x+(c.v.x-s.v.x)*l,d=s.v.y+(c.v.y-s.v.y)*l;n.at=[u,d],n.sprite.update(e,c.v.facing,c.v.moving),n.sprite.place(u,d),Re.set(u,2.6,d).project(a.camera),n.tag.style.left=((Re.x+1)/2*100).toFixed(2)+`%`,n.tag.style.top=((1-Re.y)/2*100).toFixed(2)+`%`,n.tag.querySelector(`.nm`).innerHTML=(c.v.crown?`<i class="crown"></i>`:``)+c.v.name.replace(/[<>&"]/g,``),n.tag.querySelector(`.bubble`).hidden=!c.v.busy}}let Be={opens:0,seconds:0,since:0},Ve=V(`minimap`),He=V(`bigmap`),Ue=[90,140,220,340],We=1;function Ge(e){We=Math.max(0,Math.min(Ue.length-1,We-e)),V(`mmin`).disabled=We===0,V(`mmout`).disabled=We===Ue.length-1,Ct()}V(`mmin`).addEventListener(`click`,()=>Ge(1)),V(`mmout`).addEventListener(`click`,()=>Ge(-1));let Ke=[0,0],qe=null,Je=`region`,Ye=()=>!V(`map`).hidden,Xe=()=>!!v&&!Ye()&&!_b()&&!D.open&&!O.open&&!E.open&&!xb?.open;function Ze(e,t=!1){if(Ye())return;Je=e,Ke=[0,0],gb.clear(),V(`map`).hidden=!1;let n=V(`map`).firstElementChild;n.classList.remove(`zoomin`),t&&(n.offsetWidth,n.classList.add(`zoomin`)),Be.opens++,Be.since=performance.now(),Ct()}function Qe(){Ye()&&(V(`map`).hidden=!0,V(`maptip`).hidden=!0,pt(),mt(),Be.seconds+=(performance.now()-Be.since)/1e3)}Sb=()=>{Ye()?Qe():Ze(Je)};function $e(e){e>0&&Je===`region`?Qe():Je=e>0?`region`:`world`,Ke=[0,0],V(`maptip`).hidden=!0,Ct()}Mb=e=>{e>0&&Je===`region`||$e(e)},jb=e=>{Ye()?$e(e):e<0&&a.zoom===Ph[0]?Xe()&&Ze(`region`,!0):a.zoomStep(e)};let et={safe:[147,194,126],even:[228,196,114],danger:[214,107,92]},tt=[70,76,96],nt=[150,160,185],z=!1,rt=``,it=new Map;function at(){let e=JSON.stringify(dn(C));e!==rt&&(rt=e,it.clear())}let ot=t=>{at();let n=it.get(t);return n||it.set(t,n=Tn(e,C,t,e.zones[t].lvHi)),n};function st(){p.refresh(m,z?t=>e.zones[t].isHub?nt:et[it.get(t)??``]??tt:null)}function ct(){at();let t=performance.now(),n=0;for(let r of Object.keys(m)){let i=+r,a=e.zones[i];if(!(m[i]!==`visited`||a.isHub||it.has(i))&&(ot(i),n++,performance.now()-t>6))break}(n||it.size===0)&&st()}Ob=()=>{z=!z,V(`maprisk`).classList.toggle(`on`,z),V(`maprisk`).querySelector(`span`).textContent=z?U().mapColorRisk:U().mapColorBiome,V(`legendbiome`).hidden=z,V(`legendrisk`).hidden=!z,st(),Ct()},V(`maprisk`).addEventListener(`click`,()=>Ob()),V(`mapclear`).addEventListener(`click`,()=>{g.clear(),dt(),Ct()});let lt=null;function ut(e,t,n=76){let r=document.createElement(`canvas`);return r.width=r.height=n,wy(r.getContext(`2d`),e,n/2,n/2,34,{n:t}),r}function dt(){let e=U(),t=g.nextNumber(),n=g.list.length>=40;V(`trayitems`).replaceChildren(...Fy.map(r=>{let i=document.createElement(`button`);return i.type=`button`,i.className=`trayitem`,i.dataset.kind=r,i.title=e.stickerNames[r],i.setAttribute(`aria-label`,e.stickerNames[r]),(n||r===`num`&&t===null)&&i.setAttribute(`aria-disabled`,`true`),i.append(ut(r,r===`num`?t??void 0:void 0)),i}))}function ft(e,t,n,r){e.preventDefault();let i=ut(t,r);i.className=`stickerghost`,i.style.left=e.clientX+`px`,i.style.top=e.clientY+`px`,document.body.appendChild(i),lt={kind:t,id:n,n:r,ghost:i,x0:e.clientX,y0:e.clientY,moved:!1},He.classList.add(`grabbing`),V(`maptip`).hidden=!0,Ct()}function pt(){lt&&(lt.ghost.remove(),lt=null,He.classList.remove(`grabbing`))}V(`trayitems`).addEventListener(`pointerdown`,e=>{let t=e.target.closest(`.trayitem`);if(!t||t.getAttribute(`aria-disabled`)===`true`)return;let n=t.dataset.kind;ft(e,n,void 0,n===`num`?g.nextNumber()??void 0:void 0)}),He.addEventListener(`pointerdown`,e=>{if(e.button!==0)return;let t=p.stickerAt(He,e.clientX,e.clientY,g);t?ft(e,t.kind,t.id,t.n):Je===`region`&&(e.preventDefault(),qe={x:e.clientX,y:e.clientY,pan:[...Ke]},He.classList.add(`grabbing`),V(`maptip`).hidden=!0)});function mt(){qe&&(qe=null,He.classList.remove(`grabbing`))}addEventListener(`pointermove`,t=>{if(!qe)return;let n=260/He.getBoundingClientRect().width,r=e.raster.w/2;Ke=[Math.max(-r,Math.min(r,qe.pan[0]-(t.clientX-qe.x)*n)),Math.max(-r,Math.min(r,qe.pan[1]-(t.clientY-qe.y)*n))],Ct()}),addEventListener(`pointerup`,()=>mt()),He.addEventListener(`contextmenu`,e=>{e.preventDefault();let t=p.stickerAt(He,e.clientX,e.clientY,g);t&&(g.remove(t.id),dt(),Ct())}),addEventListener(`pointermove`,e=>{lt&&(lt.ghost.style.left=e.clientX+`px`,lt.ghost.style.top=e.clientY+`px`,Math.hypot(e.clientX-lt.x0,e.clientY-lt.y0)>4&&(lt.moved=!0),lt.ghost.classList.toggle(`off`,!p.toWorld(He,e.clientX,e.clientY)))}),addEventListener(`pointerup`,e=>{if(!lt)return;let t=p.toWorld(He,e.clientX,e.clientY),n=lt;n.id===void 0?t&&g.add(n.kind,t[0],t[1]):t?g.move(n.id,t[0],t[1]):n.moved&&g.remove(n.id),pt(),dt(),Ct()}),dt();let ht=-1;function gt(t){let n=V(`maptip`),r=lt||qe?null:p.zoneAt(He,t.clientX,t.clientY,m);if(r===null){n.hidden=!0,ht=-1;return}if(r!==ht||n.hidden){ht=r;let t=e.zones[r],i=U(),a=[`<b>`+r_(t.theme)+`</b>`,`<span>`+(t.isHub?i_(t):i_(t)+` · `+u_(t.ring))+`</span>`];t.isHub?a.push(`<span>`+i.tipCamp+`</span>`):m[r]===`visited`?(a.push(`<span class="lvl" data-risk="`+ot(r)+`">`+i.tipLevel+` `+t.lvLo+`-`+t.lvHi+`</span>`),t.boss!==void 0&&a.push(`<span>`+i.tipBoss+`</span>`)):a.push(`<span>`+i.tipUnknown+`</span>`),n.innerHTML=a.join(``),n.hidden=!1}let i=He.parentElement.getBoundingClientRect(),a=t.clientX-i.left+14,o=t.clientY-i.top+14;a+n.offsetWidth>i.width&&(a=t.clientX-i.left-n.offsetWidth-14),o+n.offsetHeight>i.height&&(o=t.clientY-i.top-n.offsetHeight-14),n.style.left=a+`px`,n.style.top=o+`px`}He.addEventListener(`pointermove`,e=>gt(e)),He.addEventListener(`pointerleave`,()=>{V(`maptip`).hidden=!0,ht=-1});let _t=[`#ff9fd0`,`#c6f08a`,`#c3a6e6`,`#9fb8ff`,`#f0a070`],vt=()=>n.players.filter(e=>e.id!==n.id&&e.connected).map((t,n)=>{let r=_t[n%_t.length];if(_&&v&&t.zoneId===v.zoneId){let[e,n]=$n(_,t.x,t.y);return{wx:e,wy:n,name:t.name,color:r}}let i=e.zones[t.zoneId],a=(n%3-1)*e.raster.unit*4;return{wx:i.cx+a,wy:i.cy+e.raster.unit*4,name:t.name,color:r}});function yt(){let i=r?.session,a=n.me,o=i?i.order.map(e=>{let t=i.players[e];return{name:t.name,history:t.history,run:t.run,progress:t.progress,score:i.score[e]??0}}):[{name:n.players.find(e=>e.id===n.id)?.name??``,history:a.history,run:a.run,progress:a.progress,score:n.players.find(e=>e.id===n.id)?.score??0}],s=new Date,c=V(`map`).hidden?0:(performance.now()-Be.since)/1e3,l=Gg({world:e,fingerprint:t,tuning:r?.tuning??{...De},phase:n.phase,runIndex:n.runIndex,secondsSoFar:i?i.explored:(r?.tuning??De).roundSeconds-n.timeLeft,zonesVisited:Object.values(m).filter(e=>e===`visited`).length,players:o,stats:i?.stats??null,exportedBy:r?`anfitrión`:`cliente`,exportedAt:s.toISOString(),map:{opens:Be.opens,seconds:Be.seconds+c}});xt(JSON.stringify(l,null,2),`registro-`+e.seedCode+`-`+s.toISOString().slice(0,16).replace(/[-:T]/g,``)+`.json`)}function bt(){let t=r?.saveFile(new Date().toISOString());return t?(t.stickers=g.toSaved(),xt(JSON.stringify(t),`partida-`+e.seedCode+`-ronda`+(t.runIndex+1)+`.json`),!0):!1}function xt(e,t){let n=document.createElement(`a`);n.href=URL.createObjectURL(new Blob([e],{type:`application/json`})),n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3)}let St=()=>{let[e,t]=$n(_,v.x,v.y);return{wx:e,wy:t,zoneId:v.zoneId}};function Ct(){if(!v||!_)return;let e={...St(),facing:v.facing},t=C.defeatedBosses,n=vt();p.draw(Ve,m,e,Ue[We],{stickers:g,defeated:t,mates:n}),Ye()&&(z&&ct(),p.draw(He,m,e,Je===`region`?260:null,{stickers:g,defeated:t,pan:Je===`region`?Ke:void 0,dragging:lt?.id,mates:n,youLabel:U().mapYou}))}let wt=H.has(`recorrer`)&&!H.has(`combates`),Tt=0;function Et(e=!1){!v||wt||!e&&Tt<.1||(Tt=0,n.sendPos({zoneId:v.zoneId,x:v.x,y:v.y,facing:v.facing,moving:v.moving}))}let B=document.createElement(`button`);B.type=`button`,B.className=`watching`,B.hidden=!0,V(`gather`).after(B);let Dt=()=>n.phase===`EXPLORE`&&!n.stats&&C.pb<=0&&!M&&!oe,Ot=()=>n.players.filter(e=>e.id!==n.id&&e.connected).map(e=>e.id);Nb=()=>{let e=Ot();return!Dt()||e.length<2?Dt():(x=e[(e.indexOf(x??``)+1)%e.length],!0)},B.addEventListener(`click`,()=>{Nb()});function kt(){if(!Dt()||!v){B.hidden=!0,x!==null&&v&&!S&&(x=null,b!==v.zoneId&&R(v.zoneId,null,!0));return}x===null&&(v.moving=!1,Et(!0));let e=Ot();(!x||!e.includes(x))&&(x=e[0]??``);let t=n.players.find(e=>e.id===x);B.hidden=!t,t&&(B.innerHTML=U().watching(t.name.replace(/[<>&"]/g,``))+(e.length>1?`<small>`+U().watchNext+`</small>`:``),!S&&t.zoneId!==b&&R(t.zoneId,null,!0))}let jt=H.has(`demo`);if(jt){T.autoContinue=1.6;let e=w();e&&(e.autoSp=!0)}let Nt=H.has(`zona`)?+H.get(`zona`):jt?e.route[1]:e.hub,Pt=e.adj[Nt].find(t=>t.to===e.hub);await R(Nt,Nt===e.hub?null:(Pt??e.adj[Nt][0]).passage);let Ft=_,It=v;H.has(`ancla`)&&Ft&&It&&Object.assign(It,Sh(Ft,Ft.anchor[0],Ft.anchor[1]+5)),V(`lobby`).hidden=!0,V(`hud`).hidden=!1,document.activeElement?.blur(),V(`seedtag`).textContent=U().seedTag(e.seedCode,t),n.phase===`SHOP`&&ke(),n.stats&&L(n.stats);let Lt=H.has(`recorrer`)||jt,Rt=Math.max(1,+(H.get(`rapido`)??1)),zt=!1,Bt=null,Vt=performance.now(),Ht=new Set,Ut=()=>{if(!v||!_)return null;let t=e.zones[v.zoneId].boss;if(jt&&t!==void 0&&!Ht.has(t)&&!C.defeatedBosses.includes(t)&&C.pb>0)return Ht.add(t),wh(_,_.anchor[0],_.anchor[1]);let n=e.route.indexOf(v.zoneId);if(n<0||n+1>=e.route.length)return null;let r=e.route[n+1];return Ch(_,e.adj[v.zoneId].find(e=>e.to===r).passage)};Lt&&(document.title=`RECORRIDO 0/`+(e.route.length-1),Vt=performance.now());let Wt=performance.now(),Gt=0,Kt=!1,qt=null,Jt=t=>{let i=(t-Wt)/1e3,o=Math.min(.05,i);Wt=t,r?.holdsClock()||n.tick(Math.min(1,i)),me(),_e(),kt();let s=n.phase===`EXPLORE`&&!n.stats&&!Dt(),c=!!v&&!!_&&s&&!S&&!M&&V(`map`).hidden&&!D.open&&!O.open&&!E.open&&!xb?.open;if(k.enabled=()=>c,c||k.reset(),v&&_&&s&&!S&&!M&&V(`map`).hidden&&!D.open&&!O.open&&!E.open){let t=v.x,n=v.y,r=(gb.has(`KeyD`)||gb.has(`ArrowRight`)?1:0)-(gb.has(`KeyA`)||gb.has(`ArrowLeft`)?1:0),i=(gb.has(`KeyS`)||gb.has(`ArrowDown`)?1:0)-(gb.has(`KeyW`)||gb.has(`ArrowUp`)?1:0),a=k.state,s=r||i?r:a.x,c=r||i?i:a.y;if(Kt=gb.has(`ShiftLeft`)||gb.has(`ShiftRight`)||!(r||i)&&a.run,Lt){(!Bt||Bt.dist.length!==_.w*_.h)&&(Bt=Ut());for(let t=0;Bt&&t<Rt;t++){let t=Th(Bt,_,v);if(!t){Fb.push(`el piloto no encuentra camino en la zona `+v.zoneId),Bt=null;break}if(Bt.passage===-1&&!t[0]&&!t[1]){Bt=Ut();continue}let n=gh(v,_,t[0],t[1],o);if(n.crossed){let t=e.route.indexOf(n.crossed.to);document.title=(n.crossed.to===e.lair?`RECORRIDO COMPLETO `:`RECORRIDO `)+t+`/`+(e.route.length-1)+` · `+((performance.now()-Vt)/1e3).toFixed(1)+` s · errores: `+Fb.length+(Fb.length?` · `+Fb.join(` | `):``),Bt=null,R(n.crossed.to,n.crossed.passage);break}}}else{let e=s,t=c;if(qt&&(s||c||qt.dist.length!==_.w*_.h)&&(qt=null),qt){let n=Th(qt,_,v);!n||qt.passage===-1&&!n[0]&&!n[1]?qt=null:[e,t]=n}let n=gh(v,_,e,t,o,6*(1+Yt(C.kit).move)*(Kt?dh:1));n.crossed&&(qt=null,R(n.crossed.to,n.crossed.passage))}let l=e.zones[v.zoneId],u=Math.sqrt((v.x-t)**2+(v.y-n)**2);if(l.creatures.length&&C.pb>0){let e=Math.min(ae,u);ae-=e,ie+=(u-e)*Math.max(0,1+Yt(C.kit).encounter)}ue(),jt&&!zt&&e.route.indexOf(v.zoneId)>=2&&(zt=!0,Sb(),setTimeout(()=>Sb(),3500))}else v&&(v.moving=!1);if(Tt+=i,!S&&!M&&!Dt()&&Et(),v){let e=v.moving?(6*(Kt?dh:1)/3)**.7:1;u.update(o*e,v.facing,v.moving&&!S),u.place(v.x,v.y),u.mesh.visible=b===v.zoneId;let t=x?Fe.get(x)?.at:void 0;t&&b!==v.zoneId?a.follow(t[0],t[1]):a.follow(v.x,v.y),ze(o),Pe.update(o,S||b!==v.zoneId?null:v,a.camera,S||M||Ye()),(Gt+=o)>.25&&(Gt=0,Ct())}a.render(),requestAnimationFrame(Jt)};requestAnimationFrame(Jt),Ii&&r&&H.has(`pelea`)&&setTimeout(()=>r.forceEncounter(n.id,+(H.get(`pelea`)||0)),700),Ii&&Object.assign(window,{game:{world:e,scene:a,discovered:m,client:n,host:r,session:r?.session,get run(){return C},combat:T,get player(){return v},get interior(){return _},enterZone:R,ir:e=>{qt=e===`jefe`?wh(_,_.anchor[0],_.anchor[1]):Ch(_,e)},get viajando(){return qt!==null},bossLevel:t=>je(e,t),attrs:D,equipment:O,roundEnd:E,fin:()=>{r&&(r.session.timeLeft=0)},revancha:()=>Tb(),stickers:g,mapa:(e=`world`)=>Ze(e),riesgo:()=>Ob(),get vistaMapa(){return Ye()?Je:null},pelea:(e=0,t,i)=>r?.forceEncounter(n.id,e,t,i),jefe:(e=0)=>r?.forceEncounter(n.id,0,[],[],!0,e)}})}function Vb(e,t,n){let r={atk:{atk:.7,hp:.15,def:.15},agi:{agi:.6,atk:.3,hp:.1},luc:{luc:.6,atk:.3,hp:.1},def:{def:.6,atk:.3,hp:.1},hp:{hp:.6,atk:.3,def:.1}},i=r[t]??r.atk;e.level=n,e.exp=st(n);let a=(n-1)*4;for(let t of Object.keys(i))e.alloc[t]=Math.floor(a*i[t]);e.sp=0}function Hb(e){e.traverse(e=>{let t=e;t.geometry?.dispose();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let e of n)e.dispose()})}var Ub=`modulepreload`,Wb=function(e){return`/rpg-anillos/`+e},Gb={},Kb=function(e){return e.pathname.endsWith(`.css`)},qb=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Wb(t,n);let r=s(t);if(r.href in Gb)return;Gb[r.href]=!0;let i=Kb(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:Ub,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};gi(document.getElementById(`perf`));var Jb=H.get(`red`)===`pestanas`,Yb=10,Xb=Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>e.toString(16).padStart(2,`0`)).join(``);Li();function Zb(r,i=t){let a=e.parseSeed(r);if(!a)return U().seedBad(n);if(e.VERSIONS.indexOf(a.version)<0)return U().seedVersion(a.version);let o=performance.now(),s=e.generate(a.code,i),c=performance.now()-o,l=e.verify(s),u=e.fingerprint(s);return Ae(s),{world:s,ms:c,rulesOk:l.filter(e=>e.ok).length,rules:l.length,fingerprint:u}}function Qb(e){let t=V(`seedinfo`);if(typeof e==`string`&&(V(`more`).open=!0),typeof e==`string`){t.innerHTML=`<dt></dt><dd class="bad"></dd>`,t.querySelector(`dt`).textContent=U().error,t.querySelector(`dd`).textContent=e;return}let n=U(),r=[[n.rowMap,n.mapSummary(e.world.zones.length,e.world.bosses.length)],[n.rowPrint,e.fingerprint+(e.world.seedCode===`v2-D9DB2`?e.fingerprint===`93a69d54`?n.expected:n.notExpected:``)],...Ii?[[n.rowRoute,n.hops(e.world.route.length-1)],[n.rowRules,n.rules(e.rulesOk,e.rules),e.rulesOk<e.rules],[n.rowGen,e.ms.toFixed(0)+` ms`]]:[]];t.replaceChildren(...r.flatMap(([e,t,n])=>{let r=document.createElement(`dt`),i=document.createElement(`dd`);return r.textContent=e,i.textContent=t,n&&(i.className=`bad`),[r,i]}))}var $b=e=>`/rpg-anillos/arte/`+(e===`heroe`?`heroe/`:`arquetipos/`+e+`/`)+`quieto_s.png`,ex=(e,t=0)=>{let n=document.createElement(`span`),r=document.createElement(`i`);return n.className=`avatar`,r.style.backgroundImage=`url("`+$b(e)+`")`,r.style.animationDelay=-t+`s`,n.append(r),n};V(`party`).replaceChildren(..._e.map((e,t)=>ex(e,t*.37)));var tx=V(`seed`),nx=V(`pname`),rx=V(`code`);tx.value=n,nx.value=H.get(`nombre`)??U().defaultName,rx.value=Ni(H.get(`sala`)??``),rx.value.length===5&&!H.has(`demo`)&&(V(`join`).classList.remove(`ghost`),V(`host`).classList.add(`ghost`),V(`netmsg`).textContent=U().invited(rx.value));var ix=Zb(tx.value);Qb(ix),tx.addEventListener(`change`,()=>{ix=Zb(tx.value),Qb(ix)}),V(`randomseed`).addEventListener(`click`,()=>{gx&&vx();for(let t=0;t<Yb&&(tx.value=e.randomSeedCode(),ix=Zb(tx.value),typeof ix==`string`||ix.rulesOk!==ix.rules);t++);Qb(ix)});var ax=()=>nx.value.trim().slice(0,16)||U().defaultName,ox=V(`reducemotion`);ox.checked=ni(),ox.addEventListener(`change`,()=>ri(ox.checked));var sx=[{key:`roundSeconds`,label:e=>e.optRound,d:`D1`,unit:()=>`min`,k:1/60,step:.5},{key:`pbPerRun`,label:e=>e.optPb,d:`D5`,unit:e=>e.hudPb,k:1,step:1},{key:`bossPbScale`,label:e=>e.optBossPb,d:`D5`,unit:()=>`×`,k:1,step:.25},{key:`priceScale`,label:e=>e.optPrice,d:`D35`,unit:()=>`×`,k:1,step:.01},{key:`gatherBoss`,label:e=>e.optGatherBoss,d:`D26`,unit:()=>`s`,k:1,step:1},{key:`gatherDragon`,label:e=>e.optGatherDragon,d:`D26`,unit:()=>`s`,k:1,step:1},{key:`dragonPerPlayer`,label:e=>e.optDragon,d:`D12`,unit:()=>`%`,k:100,step:5},{key:`lootBaseRate`,label:e=>e.optLoot,d:``,unit:()=>`%`,k:100,step:.5},{key:`planRate`,label:e=>e.optPlan,d:``,unit:()=>`%`,k:100,step:.5},{key:`bossAffinity`,label:e=>e.optAffinity,d:``,unit:()=>`×`,k:1,step:.1},{key:`exaltRate`,label:e=>e.optExalt,d:``,unit:()=>`×`,k:1,step:.5}],cx=e=>Math.round(e*1e6)/1e6,lx=new Map,ux=[];V(`optgrid`).replaceChildren(...sx.flatMap(e=>{let t=document.createElement(`label`),n=document.createElement(`span`),r=document.createElement(`input`);t.htmlFor=r.id=`opt-`+e.key;let i=document.createElement(`span`),a=document.createElement(`small`);a.textContent=e.d||U().optLootTag,t.append(i,` `,a),r.type=`number`,r.step=String(e.step);let[o,s]=F[e.key];r.min=String(cx(o*e.k)),r.max=String(cx(s*e.k)),r.addEventListener(`input`,()=>r.classList.toggle(`changed`,+r.value!==cx(Ee[e.key]*e.k))),lx.set(e.key,r);let c=document.createElement(`em`);return n.className=`in`,n.append(r,c),ux.push(()=>{let t=U();i.textContent=e.label(t),c.textContent=e.unit(t),e.d||(a.textContent=t.optLootTag)}),[t,n]}));var dx=()=>{for(let e of sx){let t=lx.get(e.key);t.value=String(cx(Ee[e.key]*e.k)),t.classList.remove(`changed`)}};dx();for(let e of ux)e();H.has(`ronda`)&&(lx.get(`roundSeconds`).value=H.get(`ronda`)),V(`optreset`).addEventListener(`click`,dx);var fx=V(`lang`);fx.replaceChildren(...ii.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),fx.value=ci(),fx.addEventListener(`change`,()=>{let e=nx.value===U().defaultName;li(fx.value),e&&(nx.value=U().defaultName),Li();for(let e of ux)e();Qb(ix)});var px=()=>Object.fromEntries(sx.flatMap(e=>{let t=lx.get(e.key).value;return t.trim()!==``&&Number.isFinite(+t)?[[e.key,+t/e.k]]:[]})),mx=e=>{V(`netmsg`).textContent=e},hx=e=>{for(let t of[`start`,`host`,`join`,`loadsave`])V(t).disabled=e},gx=null,_x=V(`savefile`),vx=()=>{gx=null,V(`saveinfo`).hidden=!0,tx.disabled=!1,dx()};V(`loadsave`).addEventListener(`click`,()=>{_x.value=``,_x.click()}),_x.addEventListener(`change`,async()=>{let e=_x.files?.[0];if(!e)return;let t=ei(await e.text());if(t===`kind`||t===`version`){mx(t===`kind`?U().saveBad:U().saveOld);return}let n=Zb(t.seedCode,t.mapOpts);if(typeof n==`string`||n.fingerprint!==t.fingerprint){mx(U().saveMap);return}gx=t,ix=n,tx.value=t.seedCode,tx.disabled=!0,Qb(n),nx.value=t.players[0].name;for(let e of sx){let n=lx.get(e.key);n.value=String(cx(t.tuning[e.key]*e.k)),n.classList.toggle(`changed`,+n.value!==cx(Ee[e.key]*e.k))}V(`savetext`).textContent=U().saveLoaded(t.runIndex+1,t.players.map(e=>e.name).join(`, `)),V(`saveinfo`).hidden=!1,mx(``)}),V(`unloadsave`).addEventListener(`click`,vx);var yx=()=>gx?Zb(gx.seedCode,gx.mapOpts):Zb(tx.value);function bx(e,n,r){let i=new Di,a=new Ci({world:e.world,seedCode:e.world.seedCode,mapOpts:gx?.mapOpts??t,fingerprint:e.fingerprint,lobby:n,tuning:px(),...gx?{save:gx}:{},...r?{roomCode:r}:{}},i);return a.start(),{host:a,local:i}}V(`lobbyform`).addEventListener(`submit`,e=>{if(e.preventDefault(),ix=yx(),Qb(ix),typeof ix==`string`)return;hx(!0);let{host:t,local:n}=bx(ix,!1);Sx(new Ti(n.connect(),Xb,ax()),t,ix)}),V(`host`).addEventListener(`click`,async()=>{if(ix=yx(),Qb(ix),typeof ix==`string`)return;hx(!0),mx(U().opening);let e=``,t=null;for(let n=0;n<4&&!t;n++){let r=Ni(H.get(`crear`)??gx?.roomCode??``);e=n===0&&r.length===5?r:Mi();try{t=Jb?new ki(e):await(await qb(async()=>{let{peerHost:e}=await import(`./peer-DxzvyVib.js`);return{peerHost:e}},[])).peerHost(e)}catch(e){mx(U().openFail(e.message))}}if(!t){hx(!1);return}let{host:n,local:r}=bx(ix,!0,e);n.addEndpoint(t);let i=t;addEventListener(`pagehide`,()=>i.close(),{once:!0}),Sx(new Ti(r.connect(),Xb,ax()),n,ix,e)}),V(`join`).addEventListener(`click`,async()=>{let e=Ni(rx.value);if(e.length!==5){mx(U().codeLen);return}hx(!0),mx(U().connecting(e));let t;try{t=Jb?Ai(e):await(await qb(async()=>{let{peerJoin:e}=await import(`./peer-DxzvyVib.js`);return{peerJoin:e}},[])).peerJoin(e)}catch(e){mx(U().connectFail(e.message)),hx(!1);return}Sx(new Ti(t,Xb,ax(),{hostTimeoutMs:xi}),null,null,e)});async function xx(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch{}return t.remove(),n}}function Sx(e,t,n,r){let i=!1,a=setTimeout(()=>{e.me||(mx(U().noAnswer),hx(!1),e.close())},15e3);addEventListener(`pagehide`,()=>e.leave(),{once:!0}),e.on(`reject`,e=>{mx(e===`version`?U().otherVersion:U().rejected),hx(!1)}),e.on(`welcome`,o=>{clearTimeout(a);let s=n??Zb(o.seedCode,o.mapOpts);if(typeof s==`string`){mx(U().badSeed(s));return}if(s.fingerprint!==o.fingerprint){mx(U().mismatch(s.fingerprint,o.fingerprint));return}let c=o.players.find(t=>t.id===e.id);c&&(nx.value=c.name);let l=()=>{i||(i=!0,Bb(s.world,s.fingerprint,e,t,{name:ax,code:()=>r??rx.value}).catch(e=>{console.error(e),mx(U().loadFail(e.message))}))};if(e.phase!==`LOBBY`){l();return}V(`lobbyform`).hidden=!0,V(`room`).hidden=!1,V(`roomcode`).textContent=r??``,mx(``),V(`roomhint`).textContent=t?U().hintHost:U().hintGuest,V(`roomhint`).classList.toggle(`waiting`,!t);let u=o.tuning.roundSeconds/60;V(`roominfo`).textContent=U().roomInfo(o.seedCode,fi(u,+!Number.isInteger(u)),o.tuning.pbPerRun),V(`begin`).hidden=!t,V(`begin`).onclick=()=>t?.begin();let d=location.origin+location.pathname+`?sala=`+(r??``),f=(e,t)=>{V(`roomnote`).textContent=e,V(`roomnote`).classList.toggle(`bad`,!t)};V(`copylink`).onclick=async()=>{let e=await xx(d);f(e?U().copied:U().copyFail,e)},V(`sharelink`).hidden=!navigator.share,V(`sharelink`).onclick=()=>{navigator.share?.({title:U().docTitle,text:U().shareText(r??``),url:d}).catch(()=>{})},V(`leaveroom`).onclick=()=>{location.href=location.pathname};let p=new Set,m=``,h=t=>{let n=t.map(e=>e.id+e.name+e.connected+e.archetype).join(`|`);n!==m&&(m=n,V(`roomcount`).textContent=U().roomCount(t.filter(e=>e.connected).length),V(`roomlist`).replaceChildren(...t.map((t,n)=>{let r=document.createElement(`li`),i=document.createElement(`b`);if(i.textContent=t.name,r.append(ex(t.archetype||`heroe`,n*.41),i),p.has(t.id)||(r.classList.add(`new`),p.add(t.id)),t.id===e.id){let e=document.createElement(`small`);e.textContent=U().you.trim().replace(/[()]/g,``),r.append(e),r.classList.add(`me`)}if(!t.connected){let e=document.createElement(`small`);e.className=`offtag`,e.textContent=U().offline.replace(/^ · /,``),r.append(e),r.classList.add(`off`)}return r})))};h(e.players),e.on(`snap`,e=>{i||(h(e),t&&H.has(`empezar`)&&e.filter(e=>e.connected).length>=+H.get(`empezar`)&&t.begin())}),e.on(`phase`,e=>{e!==`LOBBY`&&l()}),e.on(`close`,()=>{i||(V(`room`).hidden=!0,V(`lobbyform`).hidden=!1,hx(!1),mx(U().roomLost))})})}matchMedia(`(pointer: fine)`).matches&&nx.focus(),H.has(`auto`)&&V(`lobbyform`).requestSubmit(),H.has(`demo`)&&setTimeout(()=>{H.has(`crear`)?V(`host`).click():Ni(H.get(`sala`)??``).length===5?V(`join`).click():V(`lobbyform`).requestSubmit()},2500);export{Pi as t};