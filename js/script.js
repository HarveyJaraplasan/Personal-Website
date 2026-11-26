const pages = [
 {title:"Home", slides:[
  {title:"Welcome",kicker:"WELCOME!",headline:"I'm Harvey",sub:"<em>Jaraplasan</em>",copy:"Welcome to my personal portfolio—a place to learn about me, my interests, the memories I value, and the goals I hope to achieve. I am a Computer Science student who enjoys technology, creativity, and making ideas into real projects.",tags:["Student","Developer","Creative", "Game Designer", "3D Model Artist", "Hard-Working", "Friendly", "Cooperative"],buttons:[["Explore my story",1],["See my interests",2]]},
  {title:"Introduction",kicker:"NICE TO MEET YOU",headline:"A curious mind.",sub:"<em>Always exploring.</em>",copy:"I'm someone who enjoys learning, creating, and finding ways to turn ideas into something real. Technology and creativity are a big part of my everyday life.",tags:["Curiosity","Creativity","Learning"]},
  {title:"My Motto",kicker:"A THOUGHT I LIVE BY",headline:"Keep moving.",sub:"<em>Keep becoming.</em>",copy:"“Keep learning, keep building, and keep moving forward.” I believe progress comes from curiosity, persistence, and being willing to improve a little at a time.",tags:["Growth","Persistence"]},
  {title:"What I Do",kicker:"A FEW OF MY INTERESTS",headline:"Build. Create.",sub:"<em>Discover.</em>",copy:"I like programming, building software and games, exploring hardware, designing, and working on creative projects.",tags:["Programming","Game development","Tech","Design"]},
  {title:"Welcome Note",kicker:"THANKS FOR VISITING",headline:"Take a look",sub:"<em>around.</em>",copy:"Use the arrows to move between the main pages, and the up/down controls to explore the smaller sections inside each page.",tags:["← → Main pages","↑ ↓ Subpages"]},
  {title:"Start Here",kicker:"YOUR JOURNEY STARTS HERE",headline:"<em>Eight pages.</em>",sub:"<em>One story.</em>",copy:"Explore seven separate pages: Home, About Me, Hobbies & Interests, Gallery, Favorites, Dreams & Bucket List, and Contact.",buttons:[["About me",1],["Contact",6]]}
 ]},
 {title:"About Me",slides:[
  {title:"Who I Am",kicker:"ABOUT ME",headline:"A little more",sub:"<em>about Harvey.</em>",copy:"I'm Harvey—feel free to call me Harvey. I'm a student who likes technology, creative work, and figuring out how things work."},
  {title:"Where I'm From",kicker:"MY ROOTS",headline:"Home and",sub:"<em>where I grew up.</em>",copy:"Hometown: [Add your hometown here]. My hometown is part of my story and the place I connect with when I think about home."},
  {title:"Education",kicker:"LEARNING JOURNEY",headline:"Learning today,",sub:"<em>building tomorrow.</em>",copy:"I am a first-year BS Computer Science student at Laguna State Polytechnic University, San Pablo Campus. I am developing my programming, problem-solving, and technical skills through coursework and hands-on projects."},
  {title:"Experience",kicker:"THINGS I'VE EXPERIENCED",headline:"Learn by",sub:"<em>doing.</em>",copy:"I have explored software development, game projects, computer and gadget troubleshooting, digital design, and practical technology experiments. I enjoy learning by building and testing ideas myself."},
  {title:"Fun Facts",kicker:"RANDOM FACTS",headline:"More than",sub:"<em>just a student.</em>",copy:"I like tinkering with computers and gadgets, developing games and software, experimenting with creative tools, and learning how technology works behind the scenes.",tags:["DIY projects","Tech tinkering","Creative experiments"]}
 ]},
 {title:"Hobbies",slides:[
  {title:"Overview",kicker:"HOBBIES & INTERESTS",headline:"Things I love",sub:"<em>doing.</em>",copy:"My interests range from tech and creative projects to music, entertainment, games, exploring places, and spending time with people."},
  {title:"Sports & Activity",kicker:"MOVE & EXPLORE",headline:"Activities",sub:"<em>and adventures.</em>",copy:"Physical activities and outdoor interests: [Add the sports, exercise, walks, or outdoor activities you personally enjoy]. I also enjoy going out, exploring places, and spending time with friends."},
  {title:"Music",kicker:"WHAT I LISTEN TO",headline:"Soundtrack",sub:"<em>to my days.</em>",copy:"I enjoy listening to music while working, commuting, or relaxing. My favorite artists, songs, and genres: [Add your personal picks here].",tags:["Pop","OPM","Soundtracks","Add favorites"]},
  {title:"Movies & Series",kicker:"WATCH LIST",headline:"Stories that",sub:"<em>stay with me.</em>",copy:"I enjoy movies, anime, cartoons, dramas, and series. I like memorable characters, interesting stories, and worlds to get lost in.",tags:["Anime","Movies","Drama","Cartoons"]},
  {title:"Games & Recreation",kicker:"PLAY TIME",headline:"Play, relax,",sub:"<em>repeat.</em>",copy:"I enjoy online and offline games, programming experiments, editing/designing, watching videos, and casual hangouts. Favorite games: [Add your favorites]."},
  {title:"Food & Travel",kicker:"TASTE AND DISCOVER",headline:"New places,",sub:"<em>new experiences.</em>",copy:"I enjoy trying food and drinks, exploring new places, taking trips, and spending time outdoors. Favorite food or cuisine: [Add yours]; favorite travel activities: [Add yours].",tags:["Favorite foods: add yours","Favorite drinks: add yours","Travel","Outdoor activities"]}
 ]},
 {title:"Gallery",slides:[
  {title:"Memories",kicker:"MY PHOTO GALLERY",headline:"Little moments,",sub:"<em>big memories.</em>",copy:"A collection of photographs from different parts of my life. Replace the sample descriptions and add your own photos to make this gallery personal."},
  {title:"Childhood",kicker:"THROWBACK",headline:"Back when",sub:"<em>it all began.</em>",copy:"[Add a childhood photograph] — A glimpse into the early memories that shaped the person I am today."},
  {title:"Family & Friends",kicker:"PEOPLE WHO MATTER",headline:"Good company,",sub:"<em>good memories.</em>",copy:"[Add a photo with family or friends] — Moments with the people who make ordinary days special."},
  {title:"School",kicker:"CAMPUS DAYS",headline:"Learning and",sub:"<em>growing together.</em>",copy:"[Add school activity photo] — Memories from school events, classmates, and shared experiences."},
  {title:"Travel",kicker:"PLACES I'VE BEEN",headline:"Out there,",sub:"<em>somewhere new.</em>",copy:"[Add travel photograph] — Places explored, views enjoyed, and experiences worth remembering."},
  {title:"Celebrations",kicker:"SPECIAL OCCASIONS",headline:"Moments to",sub:"<em>remember.</em>",copy:"[Add celebration photo] — Birthdays, milestones, events, and other moments that deserve a place in this gallery."}
 ]},
 {title:"Favorites",slides:[
  {title:"Favorites Intro",kicker:"MY FAVORITES",headline:"A few of my",sub:"<em>favorite things.</em>",copy:"The foods, music, places, colors, stories, and little things I enjoy. These are placeholders to personalize with your own choices."},
  {title:"Food & Drinks",kicker:"GOOD FOOD",headline:"The way to",sub:"<em>my heart.</em>",copy:"Favorite foods: [Add your favorites]. Favorite drinks: [Add yours]. Cuisines or dishes I want to try: [Add your list]."},
  {title:"Music",kicker:"ON REPEAT",headline:"Songs and",sub:"<em>artists I love.</em>",copy:"Favorite artists: [Add names]. Favorite songs: [Add titles]. Favorite genres: [Add genres]. I often listen to music when relaxing or working on something."},
  {title:"Movies & Books",kicker:"MY ENTERTAINMENT PICKS",headline:"Stories I",sub:"<em>recommend.</em>",copy:"Favorite movies: [Add titles]. Favorite series, dramas, or anime: [Add titles]. Favorite books: [Add titles]. I enjoy stories with memorable characters and interesting worlds."},
  {title:"Colors & Places",kicker:"AESTHETICS & DESTINATIONS",headline:"Places and",sub:"<em>colors I love.</em>",copy:"Favorite colors: [Add colors]. Favorite places: [Add places, local spots, or destinations]. Places I feel comfortable, inspired, or excited to visit: [Add yours]."},
  {title:"Favorite Quote",kicker:"WORDS TO REMEMBER",headline:"A quote that",sub:"<em>inspires me.</em>",copy:"“Keep learning, keep building, and keep moving forward.” — Personal motto"}
 ]},
 {title:"Dreams",slides:[
  {title:"Future Vision",kicker:"DREAMS & BUCKET LIST",headline:"The future",sub:"<em>I'm working toward.</em>",copy:"A list of ambitions, milestones, places to see, skills to learn, and experiences I hope to have in my lifetime."},
  {title:"Career Goals",kicker:"WHERE I WANT TO GO",headline:"Build a career",sub:"<em>with purpose.</em>",copy:"My goal is to build a career in software development, game development, or another technology-focused field. I hope to create useful programs and games, develop my own projects, and continue growing as a developer."},
  {title:"Places to Visit",kicker:"THE WORLD IS BIG",headline:"Someday,",sub:"<em>somewhere far.</em>",copy:"Dream destinations: [Add countries, cities, or landmarks you want to visit]. I want to experience different cultures, scenery, food, and new adventures."},
  {title:"Skills to Learn",kicker:"LEVEL UP",headline:"Keep learning",sub:"<em>new skills.</em>",copy:"Skills I want to develop include advanced programming, game design, UI/UX, software architecture, creative editing, and practical technical skills. Add any other personal goals here."},
  {title:"Future Me",kicker:"A LETTER TO MY FUTURE SELF",headline:"Still curious.",sub:"<em>Still creating.</em>",copy:"I imagine my future self as a capable developer and creator who keeps learning, builds meaningful software, works toward personal goals, helps others when possible, and makes time for family, friends, and memorable experiences."}
 ]},
 {title:"Contact",slides:[
  {title:"Reach Out",kicker:"CONTACT ME",headline:"Let's talk",sub:"<em>or connect.</em>",copy:"Feel free to contact me for conversations, collaborations, school or project-related matters, or just to say hello.",buttons:[["Email me","mailto:your-email@example.com"]]},
  {title:"Social Links",kicker:"FIND ME ONLINE",headline:"Around the",sub:"<em>internet.</em>",copy:"Add your social media or professional links below. Update these icons in the HTML with your own profile URLs."},
  {title:"Contact Form",kicker:"SEND A MESSAGE",headline:"Write me",sub:"<em>a message.</em>",copy:"Contact form mockup: Name • Email • Subject • Message. To make it submit messages, connect it to a form service or backend.",tags:["Name","Email","Subject","Message"],buttons:[["Back to home",0]]}
 ]}
];

let mainIndex=0, subIndex=0;
const mainNav=document.getElementById('mainNav');
const content=document.getElementById('slideContent');
function buildNav(){
 mainNav.innerHTML=pages.map((p,i)=>`<button class="nav-pill ${i===mainIndex?'active':''}" data-page="${i}">${String(i+1).padStart(2,'0')} ${p.title}</button>`).join('');
 mainNav.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>showMain(Number(b.dataset.page))));
}
function render(){
 const page=pages[mainIndex], slide=page.slides[subIndex];
 content.classList.add('switching');
 setTimeout(()=>{
  let tags=slide.tags?.length?`<div class="content-list">${slide.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`:'';
  let buttons=slide.buttons?.length?`<div class="actions">${slide.buttons.map(b=>typeof b[1]==='number'?`<a class="action secondary" href="#" data-jump="${b[1]}">${b[0]}</a>`:`<a class="action" href="${b[1]}">${b[0]}</a>`).join('')}</div>`:'';
  let gallery=mainIndex===3?`<div class="photo-strip"><img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=350&q=75" alt="Memory photo placeholder"><img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=350&q=75" alt="Friends photo placeholder"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=350&q=75" alt="Travel photo placeholder"></div>`:'';
  content.innerHTML=`<p class="kicker">${slide.kicker||page.title.toUpperCase()}</p><h1>${slide.headline}</h1><h2>${slide.sub||''}</h2><p class="copy">${slide.copy||''}</p>${tags}${gallery}${buttons}`;
  content.querySelectorAll('[data-jump]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showMain(Number(a.dataset.jump));}));
  document.getElementById('mainNumber').textContent=String(mainIndex+1).padStart(2,'0');
  document.getElementById('mainTitle').textContent=page.title;
  document.getElementById('subNumber').textContent=String(subIndex+1).padStart(2,'0');
  document.getElementById('subTitle').textContent=slide.title;
  document.getElementById('subCurrent').textContent=subIndex+1;
  document.getElementById('subTotal').textContent=page.slides.length;
  document.getElementById('progress').style.width=((mainIndex+1)/pages.length*100)+'%';
  buildNav();
  content.classList.remove('switching');
 },150);
}
function showMain(index){mainIndex=(index+pages.length)%pages.length;subIndex=0;render();}
function showSub(index){const count=pages[mainIndex].slides.length;subIndex=(index+count)%count;render();}
document.getElementById('left').addEventListener('click',()=>showMain(mainIndex-1));
document.getElementById('right').addEventListener('click',()=>showMain(mainIndex+1));
document.getElementById('up').addEventListener('click',()=>showSub(subIndex-1));
document.getElementById('down').addEventListener('click',()=>showSub(subIndex+1));
document.addEventListener('keydown',e=>{
 if(['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
 if(e.key==='ArrowLeft') showMain(mainIndex-1);
 if(e.key==='ArrowRight') showMain(mainIndex+1);
 if(e.key==='ArrowUp') showSub(subIndex-1);
 if(e.key==='ArrowDown') showSub(subIndex+1);
});
let wheelTimeout=false;
document.querySelector('.panel').addEventListener('wheel',e=>{
 if(wheelTimeout||Math.abs(e.deltaY)<25)return;
 wheelTimeout=true; showSub(subIndex+(e.deltaY>0?1:-1));
 setTimeout(()=>wheelTimeout=false,450);
},{passive:true});
render();