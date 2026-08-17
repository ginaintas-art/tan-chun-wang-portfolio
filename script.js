const categories = [
  {
    "id": "lab",
    "accent": "#2563EB",
    "bg": "linear-gradient(135deg,#EFF6FF 0%,#DBEAFE 100%)",
    "title": "Laboratory & Biotechnology",
    "section": "section-lab"
  },
  {
    "id": "baking",
    "accent": "#DB2777",
    "bg": "linear-gradient(135deg,#FDF2F8 0%,#FCE7F3 100%)",
    "title": "Baking",
    "section": "section-baking"
  },
  {
    "id": "it",
    "accent": "#7C3AED",
    "bg": "linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%)",
    "title": "Master of ICT",
    "section": "section-it"
  },
  {
    "id": "chemical",
    "accent": "#D97706",
    "bg": "linear-gradient(135deg,#FFFBEB 0%,#FEF3C7 100%)",
    "title": "Chemical Engineering",
    "section": "section-chemical"
  },
  {
    "id": "qc",
    "accent": "#16A34A",
    "bg": "linear-gradient(135deg,#F0FDF4 0%,#DCFCE7 100%)",
    "title": "Quality Engineer",
    "section": "section-qc"
  },
  {
    "id": "hiking",
    "accent": "#16A34A",
    "bg": "linear-gradient(135deg,#F0FDF4 0%,#D1FAE5 60%,#ECFDF5 100%)",
    "title": "Nature & Hiking",
    "section": "section-hiking"
  },
  {
    "id": "university",
    "accent": "#9333EA",
    "bg": "linear-gradient(135deg,#FAF5FF 0%,#F3E8FF 100%)",
    "title": "Education",
    "section": "section-university"
  },
  {
    "id": "australia",
    "accent": "#EA580C",
    "bg": "linear-gradient(135deg,#FFF7ED 0%,#FED7AA 100%)",
    "title": "Australian Explorer",
    "section": "section-hiking"
  }
];
const byId = id => document.getElementById(id);
const background = byId("page-background");
const hero = byId("hero-content");
const panel = byId("info-panel");
const doll = byId("doll-display");
const subtitle = byId("hero-subtitle");
const accentText = byId("title-accent");
const glow = byId("glow-ring");
const hint = byId("hero-hint");
const buttons = [...document.querySelectorAll("[data-category]")];
let activeId = null;
let locked = false;

function costumeParts(id){
  const parts={
    lab:`<path d="M58 154Q100 140 142 154L148 259H52Z" fill="#fbfdff" stroke="#a8bbc8" stroke-width="2"/><path d="M100 151V257M70 181H90" stroke="#8da4b2" stroke-width="2"/><path d="M64 158L91 185 100 155 109 185 136 158" fill="none" stroke="#8da4b2" stroke-width="2"/><rect x="112" y="193" width="23" height="16" rx="3" fill="#dbeafe" stroke="#7397ad"/>`,
    baking:`<path d="M62 157Q100 143 138 157L142 247H58Z" fill="#fff" stroke="#dedbd4" stroke-width="2"/><path d="M73 171H127L134 250H66Z" fill="#d9a36a" stroke="#875b38" stroke-width="2"/><path d="M73 171Q100 192 127 171M77 220H123" fill="none" stroke="#875b38" stroke-width="2"/>`,
    it:`<path d="M62 159Q100 143 138 159L142 246H58Z" fill="#6d4fc2"/><path d="M72 166Q100 189 128 166" fill="none" stroke="#ddd6fe" stroke-width="3"/>`,
    chemical:`<path d="M61 157Q100 142 139 157L144 249H56Z" fill="#475569"/><path d="M67 157H87L93 248H62ZM133 157H113L107 248H138Z" fill="#fbbf24"/><path d="M70 200H89M111 200H130" stroke="#f8fafc" stroke-width="2"/>`,
    qc:`<path d="M62 158Q100 142 138 158L143 249H57Z" fill="#e8f5eb" stroke="#4d8b63" stroke-width="2"/><path d="M100 154V247M74 181H90" stroke="#4d8b63" stroke-width="2"/>`,
    hiking:`<path d="M61 157Q100 142 139 157L144 249H56Z" fill="#4a3527" stroke="#2d211a" stroke-width="2"/><path d="M70 158Q59 182 64 221M130 158Q141 182 136 221" fill="none" stroke="#1f3328" stroke-width="6"/><path d="M100 174l13 17-13 12-13-12Z" fill="#d2a85c"/>`,
    university:`<path d="M58 155Q100 139 142 155L148 257H52Z" fill="#402d62"/><path d="M61 160L100 190 139 160" fill="none" stroke="#c6a8e7" stroke-width="4"/><path d="M100 188V255" stroke="#c6a8e7" stroke-width="2"/>`,
    australia:`<path d="M61 157Q100 142 139 157L144 249H56Z" fill="#c99a62"/><path d="M100 157V248M72 181H91M109 181H128" stroke="#745132" stroke-width="2"/><path d="M76 159Q61 184 65 223M124 159Q139 184 135 223" fill="none" stroke="#3f3026" stroke-width="6"/>`
  };
  return parts[id]||`<path d="M62 158Q100 143 138 158L142 246H58Z" fill="#f7f5f0" stroke="#d5d1ca" stroke-width="2"/>`;
}

function headAccessory(id){
  if(id==="baking")return `<g class="headwear chef-hat"><path d="M65 56Q57 40 73 33Q76 15 93 25Q104 8 115 26Q134 19 137 38Q148 49 135 61Z" fill="#fff" stroke="#d8d8d2" stroke-width="2"/><path d="M68 57Q100 65 133 57L131 70Q100 76 69 69Z" fill="#fff" stroke="#d8d8d2" stroke-width="2"/></g>`;
  if(id==="chemical")return `<g class="headwear hard-hat"><path d="M58 72Q60 31 100 27Q140 31 142 72Z" fill="#fbbf24" stroke="#9a5b06" stroke-width="2.5"/><path d="M100 28V62M52 72Q100 62 148 72" fill="none" stroke="#9a5b06" stroke-width="5"/></g>`;
  if(id==="hiking")return `<g class="headwear sun-hat"><path d="M68 58Q72 29 100 27Q128 29 132 58Z" fill="#c9a56a" stroke="#6f5332" stroke-width="2"/><path d="M48 65Q100 49 152 65Q146 77 100 72Q54 77 48 65Z" fill="#d5b476" stroke="#6f5332" stroke-width="2"/></g>`;
  if(id==="australia")return `<g class="headwear adventure-hat"><path d="M67 59Q70 29 100 27Q130 29 133 59L120 64Q100 55 80 64Z" fill="#9b7048" stroke="#543924" stroke-width="2"/><path d="M49 66Q100 51 151 66Q143 77 100 72Q57 77 49 66Z" fill="#a97c50" stroke="#543924" stroke-width="2"/><path d="M72 55Q100 63 128 55" fill="none" stroke="#493222" stroke-width="4"/></g>`;
  if(id==="university")return `<g class="headwear mortarboard"><path d="M54 48L100 27 146 48 100 69Z" fill="#302244" stroke="#171021" stroke-width="2"/><path d="M72 56V74Q100 86 128 74V56" fill="#402d62" stroke="#171021" stroke-width="2"/><path d="M140 49V82" stroke="#e0b44d" stroke-width="2"/><circle cx="140" cy="84" r="4" fill="#e0b44d"/></g>`;
  if(id==="lab")return `<g class="safety-goggles"><rect x="65" y="72" width="32" height="27" rx="9" fill="#dff4ff" fill-opacity=".62" stroke="#3c7d9d" stroke-width="3"/><rect x="103" y="72" width="32" height="27" rx="9" fill="#dff4ff" fill-opacity=".62" stroke="#3c7d9d" stroke-width="3"/><path d="M97 84H103M65 78L57 74M135 78L143 74" stroke="#3c7d9d" stroke-width="3"/></g>`;
  return "";
}

function rightHandProp(id){
  if(id==="qc")return `<g class="held-prop"><rect x="-2" y="-25" width="28" height="36" rx="4" fill="#f8fafc" stroke="#475569" stroke-width="2"/><rect x="6" y="-29" width="12" height="6" rx="2" fill="#475569"/></g>`;
  if(id==="lab")return `<g class="held-prop test-tube" transform="rotate(-8)"><path d="M2-38H18M5-38V3Q5 15 10 18Q15 15 15 3V-38" fill="#e8f7ff" fill-opacity=".78" stroke="#3c7d9d" stroke-width="2.5"/><path d="M6 2Q10 5 14 2V8Q13 15 10 16Q7 15 6 8Z" fill="#f472b6"/><path d="M5-28H15" stroke="#fff" stroke-width="2" opacity=".8"/></g>`;
  if(id==="baking")return `<g class="held-prop rolling-pin"><rect x="-10" y="-7" width="48" height="14" rx="7" fill="#c88b4c" stroke="#76502f" stroke-width="2"/><path d="M-20 0H-10M38 0H48" stroke="#76502f" stroke-width="6" stroke-linecap="round"/></g>`;
  if(id==="university")return `<g class="held-prop diploma"><path d="M-8-20Q8-25 24-20V15Q8 10-8 15Z" fill="#fffaf0" stroke="#9b835c" stroke-width="2"/><path d="M-10-4H26" stroke="#b91c1c" stroke-width="4"/><circle cx="8" cy="-4" r="5" fill="#dc2626"/></g>`;
  if(id==="hiking")return `<g class="held-prop trekking-pole"><path d="M5-31L18 86" stroke="#4b5563" stroke-width="4"/><path d="M-3-28Q8-38 20-28" fill="none" stroke="#292524" stroke-width="5"/><path d="M11 77H25" stroke="#4b5563" stroke-width="3"/></g>`;
  if(id==="chemical")return `<g class="held-prop ruler"><rect x="1" y="-36" width="12" height="55" rx="2" fill="#f5d56b" stroke="#8a6819" stroke-width="2"/><path d="M2-28H8M2-20H10M2-12H8M2-4H10M2 4H8" stroke="#8a6819"/></g>`;
  return "";
}

function leftHandProp(id){
  if(id==="baking")return `<g class="held-prop mixing-bowl"><path d="M1 236Q28 228 55 236Q51 258 28 260Q5 258 1 236Z" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/><ellipse cx="28" cy="236" rx="27" ry="7" fill="#eef2f7" stroke="#64748b" stroke-width="2"/><path d="M17 233Q28 243 39 233" fill="none" stroke="#e9b76e" stroke-width="3"/></g>`;
  if(id==="university")return `<g class="held-prop book"><path d="M0 226Q18 220 34 229V261Q17 251 0 258Z" fill="#f8fafc" stroke="#312e81" stroke-width="2"/><path d="M34 229Q50 220 68 226V258Q51 251 34 261Z" fill="#f8fafc" stroke="#312e81" stroke-width="2"/><path d="M34 229V261" stroke="#312e81" stroke-width="2"/></g>`;
  if(id==="chemical")return `<g class="held-prop field-notebook"><rect x="4" y="221" width="42" height="52" rx="3" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><path d="M11 233H38M11 242H38M11 251H33" stroke="#64748b" stroke-width="2"/></g>`;
  return "";
}

function sleeveFill(id){return id==="lab"?"#fbfdff":id==="hiking"?"#4a3527":id==="chemical"?"#475569":null}

function laptop(){return `<g class="laptop"><rect x="51" y="195" width="98" height="57" rx="6" fill="#263238" stroke="#111827" stroke-width="3"/><rect x="58" y="202" width="84" height="42" rx="3" fill="#a5d8e8"/><circle cx="100" cy="222" r="7" fill="#fff" opacity=".8"/><path d="M43 252H157L146 263H54Z" fill="#64748b" stroke="#263238" stroke-width="2"/></g>`}

function characterMarkup(id) {
  const it=id==="it";
  const sleeve=sleeveFill(id);
  const leftArmFill=sleeve||"#efba91";
  const rightArmFill=sleeve||"#efba91";
  return `<div class="reference-character character-${id}"><svg class="paper-doll-svg" viewBox="0 0 200 390" role="img" aria-label="Articulated cartoon character of Tan-Chun Wang">
    <ellipse cx="100" cy="376" rx="52" ry="7" fill="rgba(28,16,8,.12)"/>
    <g id="back-hair"><ellipse cx="100" cy="83" rx="48" ry="51" fill="#33261f"/><path d="M132 87Q164 93 153 139Q146 157 126 145Q143 119 126 97Z" fill="#3b2a22" class="ponytail"/></g>
    <g id="legs"><path d="M67 237L96 237 93 337Q90 351 73 337Z" fill="#6f94b2" stroke="#47677e" stroke-width="2"/><path d="M104 237L133 237 127 337Q110 351 107 337Z" fill="#6f94b2" stroke="#47677e" stroke-width="2"/><path d="M71 321Q82 326 94 321L93 340Q82 346 73 339Z" fill="#b7cedd"/><path d="M106 321Q118 326 130 321L127 340Q117 346 107 339Z" fill="#b7cedd"/><path d="M68 338Q83 333 95 341L99 356Q82 364 64 355Z" fill="#f9fafb" stroke="#b7b8b5" stroke-width="2"/><path d="M105 341Q118 333 132 339L136 355Q117 364 101 356Z" fill="#f9fafb" stroke="#b7b8b5" stroke-width="2"/><path d="M69 350H96M105 350H132" stroke="#c5c7c7" stroke-width="2"/>${id==="hiking"?`<path d="M67 323H95L99 359Q82 368 63 357L66 342Z" fill="#d6a928" stroke="#765f17" stroke-width="2"/><path d="M105 323H132L137 357Q118 368 101 359L104 342Z" fill="#d6a928" stroke="#765f17" stroke-width="2"/><path d="M65 351H97M103 351H135" stroke="#765f17" stroke-width="3"/>`:""}</g>
    <g id="torso"><path d="M63 157Q100 141 137 157L143 247Q100 257 57 247Z" fill="#f7f5f0"/>${costumeParts(id)}<path d="M66 238Q100 245 134 238L132 251H68Z" fill="#41627a"/><circle cx="100" cy="244" r="4" fill="#d59c4f"/></g>
    <g id="left-arm" class="arm left-arm"><path d="M67 163Q51 162 43 181L25 236Q22 248 34 251Q44 250 46 239L65 193Z" fill="${leftArmFill}" stroke="${sleeve?"#71808a":"#c98461"}" stroke-width="2"/><g class="left-hand"><path d="M27 235Q17 241 18 251Q20 260 29 257L36 250Q43 247 43 240Z" fill="#f3c49e" stroke="#c98461" stroke-width="2"/>${leftHandProp(id)}</g></g>
    <g id="right-arm" class="arm right-arm"><path d="M133 163Q149 162 157 181L175 236Q178 248 166 251Q156 250 154 239L135 193Z" fill="${rightArmFill}" stroke="${sleeve?"#71808a":"#c98461"}" stroke-width="2"/><g class="right-hand" transform="translate(166 243)"><path d="M-8-8Q2-7 8 1Q9 12 0 14Q-8 13-12 5Z" fill="#f3c49e" stroke="#c98461" stroke-width="2"/>${rightHandProp(id)}</g></g>
    ${it?laptop():""}
    <g id="neck"><path d="M89 133H111V158Q100 167 89 158Z" fill="#efba91" stroke="#c98461" stroke-width="2"/></g>
    <g id="head"><ellipse cx="100" cy="88" rx="42" ry="49" fill="#f3c49e" stroke="#c98461" stroke-width="2"/><circle cx="73" cy="98" r="8" fill="#ef9b8d" opacity=".24"/><circle cx="127" cy="98" r="8" fill="#ef9b8d" opacity=".24"/>
      <g class="eye left-eye"><ellipse cx="84" cy="86" rx="7" ry="9" fill="#51372a"/><circle cx="86" cy="83" r="2" fill="#fff"/></g><g class="eye right-eye"><ellipse cx="116" cy="86" rx="7" ry="9" fill="#51372a"/><circle cx="118" cy="83" r="2" fill="#fff"/></g>
      <path d="M96 99Q100 102 104 99" fill="none" stroke="#c17b5c" stroke-width="1.6"/><path d="M89 110Q100 119 111 110" fill="none" stroke="#b75e58" stroke-width="2" stroke-linecap="round"/>
      <g id="glasses" fill="none" stroke="#4a4039" stroke-width="2"><circle cx="83" cy="87" r="14"/><circle cx="117" cy="87" r="14"/><path d="M97 87H103M69 83L60 79M131 83L140 79"/></g>
      <path d="M59 81Q55 44 88 34Q108 25 129 42Q145 56 141 83Q128 63 113 55Q93 73 67 66Z" fill="#382920"/><path d="M84 35Q96 53 113 55M74 42Q83 58 96 62" fill="none" stroke="#584036" stroke-width="3" stroke-linecap="round"/>
      ${headAccessory(id)}
    </g>
  </svg></div>`;
}

function setBackground(value){background.style.opacity="0";setTimeout(()=>{background.style.background=value;background.style.opacity="1"},220)}
function setDoll(id){locked=true;doll.style.transform="rotateY(90deg)";setTimeout(()=>{doll.innerHTML=characterMarkup(id);doll.style.transform="rotateY(0deg)";setTimeout(()=>locked=false,280)},280)}
function setButtonState(cat){buttons.forEach(button=>{const selected=button.dataset.category===cat?.id;button.classList.toggle("is-active",selected);const bubble=button.firstElementChild;const label=button.lastElementChild;if(selected){bubble.style.backgroundColor=cat.accent;bubble.style.boxShadow="0 0 0 3px "+cat.accent+",0 8px 28px "+cat.accent+"44";label.style.color=cat.accent;label.style.backgroundColor=cat.accent+"20"}else{bubble.style.backgroundColor="rgba(255,255,255,.94)";bubble.style.boxShadow="0 4px 16px rgba(0,0,0,.1)";label.style.color="rgba(60,40,20,.7)";label.style.backgroundColor="rgba(255,255,255,.7)"}})}
function wirePanel(cat){const close=panel.querySelector("button");if(close)close.addEventListener("click",closePanel);panel.querySelector("[data-nav=prev]")?.addEventListener("click",()=>navigate(-1));panel.querySelector("[data-nav=next]")?.addEventListener("click",()=>navigate(1));const story=[...panel.querySelectorAll("button")].find(b=>b.textContent.includes("View Full Story"));story?.addEventListener("click",()=>byId(cat.section)?.scrollIntoView({behavior:"smooth",block:"start"}))}
function selectCategory(cat){if(locked)return;if(activeId===cat.id){closePanel();return}activeId=cat.id;setBackground(cat.bg);setDoll(cat.id);setButtonState(cat);subtitle.textContent=cat.title;accentText.style.color=cat.accent;glow.style.background="radial-gradient(circle,"+cat.accent+"20 0%,transparent 70%)";hint.hidden=true;panel.replaceChildren(byId("panel-"+cat.id).content.cloneNode(true));wirePanel(cat);panel.classList.add("is-open");panel.setAttribute("aria-hidden","false");hero.classList.add("panel-open")}
function closePanel(){activeId=null;setBackground("#FAF7F2");setDoll("default");setButtonState(null);subtitle.textContent="Click an icon · Explore my story";accentText.style.color="#D97706";glow.style.background="radial-gradient(circle,rgba(160,120,80,.06) 0%,transparent 70%)";hint.hidden=false;panel.classList.remove("is-open");panel.setAttribute("aria-hidden","true");hero.classList.remove("panel-open")}
function navigate(step){if(!activeId||locked)return;const index=categories.findIndex(cat=>cat.id===activeId);selectCategory(categories[(index+step+categories.length)%categories.length])}
buttons.forEach(button=>button.addEventListener("click",()=>selectCategory(categories.find(cat=>cat.id===button.dataset.category))));

// Replace the original generated SVG immediately while keeping all interactions.
doll.innerHTML=characterMarkup("default");

// Accessible click-to-enlarge viewer for every raster content image.
const lightbox=byId("image-lightbox");
const lightboxImage=byId("lightbox-image");
const lightboxCaption=byId("lightbox-caption");
const lightboxClose=lightbox?.querySelector(".lightbox-close");
let lightboxTrigger=null;

function openLightbox(source){
  if(!lightbox||!source?.currentSrc)return;
  lightboxTrigger=source;
  lightboxImage.src=source.currentSrc;
  lightboxImage.alt=source.alt||"Enlarged image";
  lightboxCaption.textContent=source.alt||"";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden","false");
  document.body.classList.add("lightbox-open");
  lightboxClose?.focus();
}
function closeLightbox(){
  if(!lightbox)return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden","true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxTrigger?.focus?.();
}
document.querySelectorAll("img").forEach(img=>{
  if(img.closest("#image-lightbox"))return;
  img.dataset.lightbox="";
  img.tabIndex=0;
  img.setAttribute("role","button");
  img.setAttribute("aria-label",`${img.alt||"Image"}. Click to enlarge.`);
  img.addEventListener("click",()=>openLightbox(img));
  img.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();openLightbox(img)}});
});
lightboxClose?.addEventListener("click",closeLightbox);
lightbox?.addEventListener("click",event=>{if(event.target===lightbox)closeLightbox()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&lightbox?.classList.contains("is-open"))closeLightbox()});

const recipeSeed=[
{id:"fried-rice",name:"Fried Rice",ingredients:["rice","egg","carrot","peas"],category:"Main Course",difficulty:2,cookTime:15,steps:["Cook rice","Fry egg","Mix ingredients"],favourite:false},
{id:"carbonara",name:"Spaghetti Carbonara",ingredients:["pasta","egg","bacon","cheese"],category:"Main Course",difficulty:3,cookTime:25,steps:["Boil pasta","Cook bacon","Mix sauce"],favourite:false},
{id:"tomato-soup",name:"Tomato Soup",ingredients:["tomato","onion","garlic"],category:"Soup",difficulty:1,cookTime:20,steps:["Boil tomatoes","Blend","Season"],favourite:false},
{id:"chicken-curry",name:"Chicken Curry",ingredients:["chicken","curry powder","onion","milk"],category:"Main Course",difficulty:4,cookTime:40,steps:["Cook chicken","Add curry","Simmer"],favourite:false},
{id:"pancakes",name:"Pancakes",ingredients:["flour","egg","milk","sugar"],category:"Dessert",difficulty:2,cookTime:10,steps:["Mix batter","Pan fry","Serve"],favourite:false}];
const recipeModal=byId("myrecipe-app"),recipeResults=byId("recipe-results"),recipeSearch=byId("recipe-search"),recipeCategory=byId("recipe-category"),fridgeInput=byId("fridge-ingredients"),fridgeFeedback=byId("fridge-feedback");
let recipeMatches=new Set(),recipes=[];
try{recipes=JSON.parse(localStorage.getItem("tanchun-myrecipe")||"null")||recipeSeed.map(item=>({...item}))}catch{recipes=recipeSeed.map(item=>({...item}))}
function saveRecipes(){localStorage.setItem("tanchun-myrecipe",JSON.stringify(recipes))}
function recipeEscape(value){const node=document.createElement("span");node.textContent=value;return node.innerHTML}
function renderRecipes(){const query=(recipeSearch?.value||"").trim().toLowerCase(),category=recipeCategory?.value||"all";const visible=recipes.filter(recipe=>(category==="all"||recipe.category===category)&&(!query||[recipe.name,...recipe.ingredients].join(" ").toLowerCase().includes(query)));recipeResults.innerHTML=visible.length?visible.map(recipe=>`<article class="recipe-card ${recipeMatches.has(recipe.id)?"is-match":""}"><button class="recipe-favourite" type="button" data-favourite="${recipe.id}" aria-label="${recipe.favourite?"Remove from":"Add to"} favourites">${recipe.favourite?"♥":"♡"}</button><h4>${recipeEscape(recipe.name)}</h4><div class="recipe-meta"><span>${recipeEscape(recipe.category)}</span><span>${recipe.cookTime} min</span><span>Difficulty ${recipe.difficulty}/5</span></div><p><strong>Ingredients:</strong> ${recipe.ingredients.map(recipeEscape).join(", ")}</p><p><strong>Steps:</strong> ${recipe.steps.map(recipeEscape).join(" → ")}</p></article>`).join(""):`<p class="recipe-empty">No recipes match your search yet.</p>`;recipeResults.querySelectorAll("[data-favourite]").forEach(button=>button.addEventListener("click",()=>{const recipe=recipes.find(item=>item.id===button.dataset.favourite);if(recipe){recipe.favourite=!recipe.favourite;saveRecipes();renderRecipes()}}))}
function openRecipeApp(){recipeModal.classList.add("is-open");recipeModal.setAttribute("aria-hidden","false");document.body.classList.add("lightbox-open");renderRecipes();byId("close-myrecipe")?.focus()}
function closeRecipeApp(){recipeModal.classList.remove("is-open");recipeModal.setAttribute("aria-hidden","true");document.body.classList.remove("lightbox-open");byId("launch-myrecipe")?.focus()}
byId("launch-myrecipe")?.addEventListener("click",openRecipeApp);byId("close-myrecipe")?.addEventListener("click",closeRecipeApp);recipeModal?.addEventListener("click",event=>{if(event.target===recipeModal)closeRecipeApp()});recipeSearch?.addEventListener("input",renderRecipes);recipeCategory?.addEventListener("change",renderRecipes);
byId("find-recipes")?.addEventListener("click",()=>{const ingredients=fridgeInput.value.split(",").map(item=>item.trim().toLowerCase()).filter(Boolean);const scored=recipes.map(recipe=>({recipe,score:ingredients.filter(item=>recipe.ingredients.some(ingredient=>ingredient.toLowerCase().includes(item)||item.includes(ingredient.toLowerCase()))).length})).filter(item=>item.score>0).sort((a,b)=>b.score-a.score);recipeMatches=new Set(scored.map(item=>item.recipe.id));fridgeFeedback.textContent=ingredients.length?(scored.length?`${scored.length} matching recipe${scored.length===1?"":"s"} found. Best match: ${scored[0].recipe.name}.`:"No matches yet. Try another ingredient or add your own recipe."):"Enter at least one ingredient.";renderRecipes()});
byId("recipe-form")?.addEventListener("submit",event=>{event.preventDefault();const data=new FormData(event.currentTarget),name=String(data.get("name")).trim();if(recipes.some(recipe=>recipe.name.toLowerCase()===name.toLowerCase())){fridgeFeedback.textContent="A recipe with that name already exists.";return}recipes.push({id:`custom-${Date.now()}`,name,ingredients:String(data.get("ingredients")).split(",").map(item=>item.trim()).filter(Boolean),category:String(data.get("category")),cookTime:Number(data.get("cookTime")),difficulty:Number(data.get("difficulty")),steps:String(data.get("steps")).split(",").map(item=>item.trim()).filter(Boolean),favourite:false});saveRecipes();event.currentTarget.reset();renderRecipes();fridgeFeedback.textContent=`${name} was saved in this browser.`});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&recipeModal?.classList.contains("is-open"))closeRecipeApp()});

const emailToast=byId("email-copy-toast");
let emailToastTimer;
function showEmailCopied(){
  if(!emailToast)return;
  emailToast.classList.add("is-visible");
  clearTimeout(emailToastTimer);
  emailToastTimer=setTimeout(()=>emailToast.classList.remove("is-visible"),4200);
}
async function copyEmailAddress(email){
  try{
    await navigator.clipboard.writeText(email);
  }catch{
    const helper=document.createElement("textarea");
    helper.value=email;
    helper.setAttribute("readonly","");
    helper.style.position="fixed";
    helper.style.opacity="0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  showEmailCopied();
}
document.querySelectorAll(".email-action").forEach(link=>link.addEventListener("click",async event=>{
  event.preventDefault();
  await copyEmailAddress(link.dataset.email||"ginaintas@gmail.com");
  setTimeout(()=>{window.location.href=link.href},180);
}));
