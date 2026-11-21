// Edit packages here. cat: 'zan' (price for 2 people) or 'safari' (price per person). Images use Unsplash IDs until real photos exist.
const U=(id,w=800)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
const P={s1:'1516426122078-c23e76319801',s2:'1547471080-7cc2caa01a7e',b1:'1507525428034-b723cf961d3e',b2:'1519046904884-53103b34b206'};
const EXC=['International flights','Travel insurance','Tanzania visa fees','Tips for guides and staff','Alcohol and extra drinks','Personal expenses and optional activities'];
const two='for 2 people',pp='per person';
const PACKAGES=[
{id:'prison-nakupenda',cat:'zan',title:'Prison Island and Nakupenda sandbank',price:280,unit:two,img:P.b1,desc:'Giant tortoises, then a sandbank in the open sea.'},
{id:'mnemba',cat:'zan',title:'Mnemba Island',price:260,unit:two,img:P.b2,desc:'Snorkel the clear reef waters around Mnemba.'},
{id:'jozani',cat:'zan',title:'Jozani Forest and Salamu Cave',price:124,unit:two,img:P.s2,desc:'Red colobus monkeys and a cave swim.'},
{id:'spice-stone',cat:'zan',title:'Spice farm and Stone Town',price:220,unit:two,img:P.b1,desc:'Taste local spices, then walk the old town.'},
{id:'safari-blue',cat:'zan',title:'Safari Blue',price:290,unit:two,img:P.b2,desc:'A dhow day with snorkeling, sandbank and seafood.'},
{id:'dhow',cat:'zan',title:'Sunset dhow cruise',pre:'from ',price:170,unit:two,img:P.b1,desc:'Sail into the sunset on a traditional dhow.',rows:[['Shared',170],['Private',290]],note:'Prices are for 2 people.'},
{id:'prison-stone',cat:'zan',title:'Prison Island and Stone Town',price:220,unit:two,img:P.b2,desc:'Tortoises in the morning, old town after.'},
{id:'nakupenda-stone',cat:'zan',title:'Nakupenda sandbank and Stone Town',price:220,unit:two,img:P.b1,desc:'Sandbank time, then Stone Town.'},
{id:'water',cat:'zan',title:'Water thrills',pre:'from ',price:50,unit:'per person',img:P.b2,desc:'Jet ski and jet car rides, with or without drone video.',rows:[['Jet ski, 15 min',50],['Jet ski, 30 min',70],['Jet ski with drone, 15 min',80],['Jet ski with drone, 30 min',90],['Jet car, 15 min',100],['Jet car, 30 min',165],['Jet car with drone, 15 min',120],['Jet car with drone, 30 min',195]],note:'Prices are per person.'},
{id:'serengeti-fly',cat:'safari',title:'Serengeti and Ngorongoro fly-in',days:'3 days',price:2800,unit:pp,from:'Zanzibar',img:P.s1,desc:'Fly to the Serengeti, then descend into Ngorongoro Crater.',
 itin:['Day 1: Fly Zanzibar to Serengeti, afternoon game drive, overnight at lodge or tented camp','Day 2: Morning game drive, picnic lunch, drive to Ngorongoro, overnight at lodge','Day 3: Crater game drive, picnic lunch, fly Arusha to Zanzibar, hotel drop-off'],
 inc:['Return domestic flights','Hotel pick-up and drop-off','All park and crater fees','Private 4x4 Land Cruiser, pop-up roof','English-speaking guide','2 nights, all meals, drinking water','Taxes and VAT'],exc:[...EXC,'Extra luggage charges']},
{id:'tarangire-serengeti',cat:'safari',title:'Tarangire, Serengeti and Ngorongoro',days:'3 days',price:2000,unit:pp,from:'Zanzibar',img:P.s2,desc:'Three famous parks in three days.',
 itin:['Day 1: Fly to Arusha, Tarangire game drive, overnight in Karatu','Day 2: Drive through Ngorongoro to Serengeti, game drives, overnight in Serengeti','Day 3: Crater game drive, picnic lunch, Arusha airport, fly to Zanzibar'],
 inc:['Return domestic flights','Hotel pick-up and drop-off','All park and crater fees','Private 4x4 Land Cruiser, pop-up roof','English-speaking guide','2 nights, all meals, drinking water'],exc:[...EXC,'Extra luggage charges']},
{id:'classic-north',cat:'safari',title:'Classic northern Tanzania',days:'4 days',price:2200,unit:pp,from:'Arusha',img:P.s1,desc:'Ngorongoro, Tarangire and Lake Manyara.',
 itin:['Day 1: Arrive in Arusha, hotel transfer and rest','Day 2: Ngorongoro Crater game drive, overnight in Karatu','Day 3: Full day in Tarangire, overnight in Karatu','Day 4: Lake Manyara game drive, back to Arusha'],
 inc:['Airport pick-up and drop-off','Private 4x4 Land Cruiser, pop-up roof','English-speaking guide','All park and crater fees','3 nights, all meals, drinking water'],exc:EXC},
{id:'mikumi',cat:'safari',title:'Mikumi day trip',days:'1 day',price:450,unit:pp,img:P.s2,desc:'A one-day game drive in Mikumi National Park.'}
];
