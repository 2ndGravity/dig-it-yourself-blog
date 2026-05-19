import { useState } from "react";
import { Map, MapPin, Pickaxe } from "lucide-react";

const CategoryIcon = ({ category, size = 28 }) => {
  const props = { size, strokeWidth: 1.5, color: "#4b5563" };
  if (category === "Destinations") return <MapPin {...props} />;
  if (category === "Guides") return <Map {...props} />;
  if (category === "Skills") return <Pickaxe {...props} />;
  return <Map {...props} />;
};

// ── POSTS DATABASE ──────────────────────────────────────────────────────────
// ── IMAGE MAP ───────────────────────────────────────────────────────────────
// To add an image to any post, add a line here:
// "post-slug": { url: "https://your-cloudinary-url.jpg", caption: "Description", credit: "Your Name" }
const IMAGE_MAP = {
  "rockhounding-arkansas": {
    url: "https://res.cloudinary.com/dfy6ojbzd/image/upload/q_auto/f_auto/v1778672650/IMG_1412_xkkdnf.jpg",
    caption: "Crater of Diamonds State Park, Arkansas",
    credit: "Dig It Yourself"
  },
  // Add more images here as you upload them to Cloudinary:
  // "rockhounding-maryland": { url: "https://res.cloudinary.com/...", caption: "...", credit: "..." },
  // "herkimer-diamonds-guide": { url: "https://res.cloudinary.com/...", caption: "...", credit: "..." },
  // "rockhounding-north-carolina": { url: "https://res.cloudinary.com/...", caption: "...", credit: "..." },
  // "top-5-fee-dig-sites-us": { url: "https://res.cloudinary.com/...", caption: "...", credit: "..." },
  // "australia-opal-fossicking": { url: "https://res.cloudinary.com/...", caption: "...", credit: "..." },
  // "beginners-guide-rockhounding": { url: "https://res.cloudinary.com/...", caption: "...", credit: "..." },
};

const POSTS = [
  {
    id: 1,
    slug: "beginners-guide-rockhounding",
    title: "The Beginner's Field Guide to Rockhounding",
    subtitle: "Everything you need to start digging -- without digging yourself into trouble",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Guides",
    readTime: "8 min",
    hero: "\uD83D\uDDFA",
    tags: ["beginner", "tools", "safety", "BLM"],
    content: `
Rockhounding is one of the few hobbies where the price of entry is practically zero and the reward is genuinely priceless. You can spend a weekend crawling through a dry Nevada wash, and come home with a piece of the Earth that's 250 million years old. That said, there are a few things worth knowing before you drive four hours into the desert.

## The Golden Rule: Know Who Owns the Land

This is the one thing that matters most. Before you collect anything, confirm you're on land that allows collecting. The categories:

**BLM (Bureau of Land Management) land** -- the most collector-friendly. The BLM allows casual collecting of rocks, minerals and fossils up to 25 pounds per day (and 250 lbs per year) for personal use, no permit needed. Over 245 million acres across 12 western states.

**National Forests** -- generally allow casual collecting with the same 25 lb limit. Some districts have specific restrictions -- check with the local ranger district first.

**National Parks and Monuments** -- no collecting whatsoever. Not a pebble. Violations carry serious fines.

**State land** -- rules vary by state. Many western states allow free collecting with a permit (often just a few dollars). Maryland, Virginia, West Virginia -- much more restricted. Research each state individually.

**Private land** -- always get written permission before you set foot on it. Most landowners will say yes if you ask nicely and explain what you're looking for.

## What You Actually Need

Don't let gear lists paralyze you. A first trip kit:

- **Rock hammer** -- a standard geologist's pick hammer. Don't use a household hammer; they shatter. Estwing makes the best.
- **Chisels** -- a flat cold chisel (3/4") and a tapered pin punch for working in cracks.
- **Safety glasses** -- non-negotiable. Quartz chips fly faster than you'd expect.
- **Gloves** -- leather work gloves. Fresh rock edges are razor sharp.
- **Bucket or mesh bag** -- to carry what you find. Heavy.
- **Water** -- more than you think. Remote desert sites have nothing.
- **GPS or AllTrails** -- printed maps as backup.
- **First aid kit** -- especially in desert terrain.

What you don't need on your first trip: a UV light, a rare earth magnet, a density kit, or any of the specialty equipment. Learn to identify rocks by eye first.

## Reading the Landscape

The best rockhounders are the ones who understand why a mineral is where it is, not just where it's been found before. A few principles:

**Stream gravels concentrate heavy minerals.** Gold, garnet, sapphire, and other dense gems tumble downstream and settle on the inside of bends where current slows. Always work the inside bends.

**Weathered surfaces reveal what's inside.** The best time to look is after rain -- fresh rain washes away the desert varnish and reveals colors that were invisible before.

**Pegmatites produce the best crystals.** These coarse-grained igneous rocks (the light-colored irregular veins cutting through older rock) host tourmaline, beryl, topaz, garnet, and mica. Follow the vein.

**Volcanic areas produce obsidian, agate, and geodes.** Ancient lava flows with gas-bubble cavities (vesicles) are where agate forms. Look for rounded nodules with a different texture than the host rock.

## Leave No Trace

Rockhounding's reputation depends on collectors being responsible. Fill holes. Don't destroy more rock than you need to. Leave the site looking like you were never there. The best collectors take nothing that can't be carried in one hand.

And when you find something spectacular, take a photo of it in place before you collect it. You'll want to remember where it came from.
    `.trim(),
  },
  {
    id: 2,
    slug: "maryland-rockhounding",
    title: "Rockhounding Maryland: The Serpentine Barrens & Beyond",
    subtitle: "A state with more geological drama than most people realize",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Maryland", "chromite", "Patuxent agate", "fossils", "Calvert Cliffs"],
    content: `
Maryland isn't the first state that comes to mind for rockhounding. It's small, densely developed, and most of what geology it has is either private land or protected. But if you know where to look -- and equally, where not to look -- Maryland surprises you.

## The Serpentine Belt

Running northeast from Montgomery County through Baltimore and Harford counties into the Pennsylvania border, Maryland has one of the most mineralogically distinctive landscapes on the East Coast: the serpentine barrens. These thin, chromium-rich soils support entirely different plant communities from the surrounding forest, and they sit atop some of the oldest and most mineral-rich rock in the region.

The rock itself -- serpentinite -- is formed from ancient oceanic crust that was thrust up onto the continent hundreds of millions of years ago. It carries chromite (chrome ore), magnetite, actinolite, and the gem-variety serpentine called williamsite: a vivid apple-green stone that cabochon-cutters prize.

**Soldiers Delight Natural Environment Area** in Baltimore County is the most accessible of these sites, but it comes with a crucial caveat: it's a protected NEA with 39 rare or endangered plant species. Collecting is restricted. Stay on the trails. The geology is spectacular; the policy is firm.

**The State Line Pits** straddling the Maryland-Pennsylvania border in Cecil County are the real destination for serious collectors. This is one of the most important mineral localities on the East Coast -- the world's premier source of gem-quality williamsite. Old mine dumps in overgrown brush. Chromite, brucite, antigorite. Join a local mineral club field trip for the best access.

**Chrome Hill** in Harford County is similar geology -- old mine tailings with chromite, actinolite crystals, garnet and bronzite -- but land access is genuinely unclear. Mixed public and private. Don't assume you can walk anywhere here without checking first.

**Mineral Hill** in Carroll County is the serpentine belt's most accessible pyrite site. A 1-mile hike from the parking area on Mineral Hill Road brings you to old copper mine dumps hiding some of the best pyrite on the East Coast -- cubic and octahedral crystals in bright brassy clusters. Also find malachite crusts, bornite, chalcopyrite, actinolite and magnetite. This is the type locality for carrollite, a rare cobalt-copper sulfide named for Carroll County. Go in spring or fall -- rattlesnakes frequent the rocky dumps in summer. Free and open to the public.

## Calvert Cliffs: The Chesapeake Fossil Factory

The 35-foot Miocene cliffs along the western shore of the Chesapeake Bay are one of the most productive fossil sites on the East Coast. Fifteen million years ago this was a warm, shallow sea. Every storm erodes fresh material from the cliffs and deposits it on the beach below.

**What you'll find:** Shark teeth -- sand tiger, mako, snaggletooth, cow shark -- whale and dolphin bones, ray plates, and the teeth of extinct fish. Megalodon teeth are rare but genuine. The beach at the base of the cliffs is the collection zone.

The access point most people use is **Calvert Cliffs State Park**, which requires a 1.8-mile hike to the beach. **Brownies Beach** (Bay Front Park) in Chesapeake Beach is shorter and often more productive because it sees fewer visitors.

**Important:** Do not climb the cliffs or dig into them. They're unstable and undercut. Everything worth collecting is already on the beach.

## The Patuxent River: Maryland's State Gem

In 2004, Maryland designated the Patuxent River agate as its official state gemstone -- a banded chalcedony found in the gravel bars of the Patuxent River and its tributaries, and found nowhere else on Earth.

The colors are earthy: tan, brown, rust, cream, and occasionally blue-grey banding. Not dramatically colorful, but distinctive and genuinely local. Collect from exposed gravel bars at low water. Public river access points along Route 2 in Calvert and Prince George's counties are the starting point.

## Western Maryland: The Appalachian Connection

Garrett and Allegany counties put Maryland into the Appalachian geological world. Green Ridge State Forest (47,000+ acres) and Savage River State Forest (54,000+ acres) overlay Devonian and Silurian limestone formations similar to the famous West Virginia geode beds.

True geodes are uncommon in Maryland -- manage expectations. What you're more likely to find are calcite-lined vugs in limestone and occasional small quartz pockets. But the forests are spectacular and the road cuts along western Maryland's mountain roads expose some genuinely interesting geology.

The real rockhounding payoff in western Maryland is the geology education: driving through these mountains you're seeing rocks that were deposited at the bottom of a tropical sea 400 million years ago, then crushed, folded, and lifted into mountains during three separate mountain-building events.
    `.trim(),
  },
  {
    id: 3,
    slug: "rockhounding-east-coast-states",
    title: "Rockhounding Every East Coast State: A Collector's Guide",
    subtitle: "From Maine to Florida -- what to find, where to look, and what makes each state unique",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Guides",
    readTime: "15 min",
    hero: "\uD83D\uDDFA",
    tags: ["East Coast", "Maine", "Virginia", "North Carolina", "Florida", "New York", "Pennsylvania", "Connecticut", "New Jersey", "Georgia", "Tennessee"],
    content: `
The East Coast doesn't get the same attention as the mineral-rich American West, but it has a geological story just as compelling -- and in some cases, minerals you simply cannot find anywhere else on Earth. Here's what each state has to offer.

## Maine

Maine is one of the premier pegmatite states in the US. The Oxford County pegmatite district around Rumford and Peru has produced world-class tourmaline, beryl, lepidolite, and quartz for over 150 years.

The best public access is through **Dig Maine Gems** at the Poland Mining Camps -- fee digs in authentic Maine pegmatite. Mount Mica in Paris is the oldest gem mine in continuous operation in North America (since 1821). The Maine State Museum in Augusta has extraordinary specimens from state localities.

Maine's state gemstone is tourmaline -- specifically the watermelon and green varieties found in the Oxford County pegmatites.

## New Hampshire

**Ruggles Mine** in Grafton is New Hampshire's crown jewel and one of the oldest open-pit mineral digs in the US, operating since 1803. The enormous pegmatite pit produces muscovite mica in sheets up to 3 feet across, beryl crystals, garnet, tourmaline, columbite, and secondary uranium minerals (autunite and torbernite -- bring a UV light). $30 adults, open late May through mid-October.

The state is also known for smoky quartz and amethyst from the White Mountains.

## Vermont

Vermont's Green Mountains expose serpentinite, marble, and schist. The Belvidere Mountain area in Lamoille County produces pale green grossular garnets in serpentinite -- large dodecahedral crystals up to an inch across. Vermont talc is also found in the same serpentine belt.

The state's rivers -- Ottauquechee, Black, and Williams -- carry alluvial gold and small garnets in their gravels. Free public stream access with no permit required.

## Massachusetts

Hampshire County is the best gem county in Massachusetts. Goshen gives its name to goshenite -- colorless beryl first described here. Pegmatite veins around Goshen and Plainfield produce beryl, quartz crystals, feldspar and mica.

The Cape Cod Bay beaches around Sandwich are excellent for jasper and agate pebbles -- glacially transported from Precambrian bedrock to the north and deposited in the coastal gravels. Free public beach access.

## Rhode Island

Rhode Island's state mineral is bowenite -- a compact translucent variety of antigorite serpentine that resembles jade, first described in Providence County. Lincoln Woods State Park exposes serpentinite where bowenite can be found in surface outcrops. Very rare in quality material but uniquely Rhode Island.

## Connecticut

The Gillette Quarry in Haddam Neck is one of the most mineralogically rich pegmatites in New England -- a zoned lithium pegmatite with miarolitic pockets yielding tourmaline, aquamarine, amazonite, morganite, and lepidolite. Access primarily through organized mineral club field trips.

Connecticut's state gemstone is almandine garnet, found throughout the state's schist and gneiss terrain.

## New York

New York's crown jewel is the Herkimer Diamond -- a doubly-terminated quartz crystal of extraordinary clarity found only in Herkimer County's Cambrian dolostone. Two public fee-dig operations (Herkimer Diamond Mines and Ace of Diamonds) let you crack open the gray rock and keep everything you find. One of the East Coast's most rewarding fee-dig experiences.

The Adirondacks produce garnets, magnetite, and the famous Barton Garnet Mine near Gore Mountain -- the largest garnet producer in the world. The Hudson Valley has Devonian fossils in limestone road cuts.

## New Jersey

**Big Brook** in Monmouth County is one of the East Coast's best free fossil collecting sites. The stream cuts through 70-million-year-old Cretaceous marine deposits exposing shark teeth, mosasaur remains, and fish vertebrae in the streambed gravel. Park at Thompson Park and walk downstream. Free and open year-round.

Franklin and Sterling Hill in Sussex County are the fluorescent mineral capitals of the world -- over 90 fluorescent mineral species found here, more than anywhere else on Earth. The Sterling Hill Mining Museum offers underground tours and collecting.

## Pennsylvania

The State Line Pits straddling the Maryland border in Chester County are world-famous for williamsite -- gem-quality green serpentine used for cabochons. One of the most important mineral localities on the entire East Coast.

The Montour Preserve near Danville has a free designated fossil pit with Mahantango Formation shale full of Devonian brachiopods, crinoids and trilobites. Split the shale along bedding planes and reveal 380-million-year-old marine life.

Pennsylvania's iron mining heritage left extensive hematite deposits accessible in road cuts throughout the Ridge and Valley province.

## Delaware

Delaware is geologically thin but the Brandywine Creek drains the serpentine belt from Pennsylvania and Maryland. Serpentine, chromite and garnet pebbles concentrate in the creek gravels at Brandywine Creek State Park. Collect from loose gravel only -- $4-8 entry fee.

## Maryland

Maryland punches above its weight for a small state. The serpentine belt running from Montgomery through Baltimore and Harford counties hosts chromite, williamsite, actinolite, and the rare carrollite at Mineral Hill. Calvert Cliffs on the Chesapeake Bay is one of the East Coast's most productive Miocene fossil beaches -- shark teeth, whale bones, and ray plates exposed by the world's highest-eroding soft cliffs. The Patuxent River agate is Maryland's state gemstone, found only here.

## Virginia

**Morefield Mine** in Amelia County is one of the most productive fee-dig sites on the East Coast -- over 80 documented mineral species in a single lithium pegmatite. Amazonite, blue topaz, beryl, phenakite, and tantalite all found here. Open seasonally, around $20-30 per day.

**Fairy Stone State Park** in Patrick County is where staurolite -- twinned into natural crosses -- can be found in the designated collecting area. Virginia's state gemstone is found almost nowhere else in such quantities. Free in the designated digging area.

The Virginia Gold Belt through the Piedmont produced gold in the 1800s and still yields color to patient panners in public streams.

## West Virginia

The Monongahela National Forest around Spruce Knob and Seneca Rocks allows free collecting of quartz crystals, calcite, dolomite and pyrite from road cuts and outcrops along Forest Service roads. No permit required for personal amounts.

West Virginia's limestone terrain is excellent geode country -- the same Greenbrier Limestone that produces geodes in Kentucky extends across much of the state.

## North Carolina

North Carolina may be the richest gem state east of the Mississippi. The Spruce Pine Mining District in Mitchell County sits inside the world's largest deposit of ultra-pure quartz -- plus beryl, emerald, feldspar, and mica. **Emerald Hollow Mine** near Hiddenite is the only emerald mine in the US open to public prospecting, producing emerald, hiddenite, sapphire, garnet and topaz.

The Uwharrie National Forest allows free gold panning in its streams -- part of the historic Carolina Slate Belt gold country that preceded the California Gold Rush. **Reed Gold Mine** in Cabarrus County is where America's first documented gold find was made in 1799 -- free admission, $5 gold panning.

Asheville's Colburn Earth Science Museum has free admission and a world-class collection of Appalachian minerals.

## South Carolina

The Piedmont of South Carolina shares the same geological character as North Carolina -- gold in the streams, garnets in the schist, kyanite in the metamorphic rocks. The Brewer Mine area near Jefferson produced gold and is one of the most historically significant gold localities in the Southeast.

## Georgia

Georgia's state mineral is staurolite -- fairy stones -- found in the metamorphic rocks of the Blue Ridge. The Chattahoochee National Forest allows free collecting of staurolite, garnet, kyanite, and quartz from outcrops and stream gravels.

Graves Mountain in Lincoln County is one of the most famous mineral localities in the eastern US -- a unique assemblage including lazulite, pyrophyllite, kyanite, and rutile found almost nowhere else. Open for public collecting during organized annual field weekends only.

Georgia is also one of the best states for tektites -- Georgiaites, formed by a meteorite impact 35 million years ago, are found scattered across 24 central counties in recently tilled agricultural fields.

## Florida

Florida has no exposed bedrock -- the whole state is covered in sand and sediment. But the Peace River and its tributaries cut through Miocene and Pliocene deposits exposing an extraordinary concentration of fossils. Shark teeth -- including Megalodon -- horse, mammoth, mastodon, and giant ground sloth bones wash into the river with every flood. Canoe the Peace River with a mesh bag and sieve the gravel bars.

Venice Beach on the Gulf Coast is called the Shark Tooth Capital of the World. Walk the beach at low tide with a shell scoop and find teeth ranging from thumbnail-sized modern sharks to massive Megalodon crowns.

## Tennessee

Central Tennessee's Nashville Basin sits directly on Ordovician limestone at the surface -- road cuts throughout Williamson, Rutherford, and Wilson counties expose 450-million-year-old marine fossils. Brachiopods, crinoids, horn corals, and trilobite fragments are abundant in fresh highway cuts. No permit needed for casual surface collecting.

The Cumberland Plateau produces Paint Rock agate -- banded chalcedony in warm reds, oranges, and creams found almost nowhere else. Collect from creek gravels and road cuts in Sequatchie County.
    `.trim(),
  },
  {
    id: 4,
    slug: "best-free-rockhounding-us",
    title: "The Best Free Rockhounding Sites in the US",
    subtitle: "Public land, no fee, no permit -- just show up and dig",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Guides",
    readTime: "9 min",
    hero: "\uD83D\uDDFA",
    tags: ["BLM", "free", "public land", "Nevada", "Oregon", "Utah", "Colorado", "New Mexico"],
    content: `
The western United States has a secret most people don't know: hundreds of millions of acres of public land where you can collect rocks, minerals and gems for free. No fee, no permit, no appointment. Just a map, a rock hammer, and a willingness to drive a dirt road.

Here are the best of them.

## Topaz Mountain, Utah (BLM)

Topaz Mountain in Juab County is probably the most famous free rockhounding site in the US, and for good reason. Golden sherry-colored topaz crystals up to several inches long erode directly out of rhyolite cavities and litter the hillside. You can find them by just walking the surface, or carefully split rhyolite float rocks to find intact crystals still in their vugs.

The BLM allows 7.5 lbs of topaz per day per person -- enforced. Located 35 miles west of Delta on dirt roads. 4WD recommended. Very remote -- bring water, food and fuel. Best visited October through May; summer temperatures are extreme.

Also in the Thomas Range nearby: red beryl (one of the rarest gems in the world) on adjacent BLM land.

## Glass Buttes, Oregon (BLM)

The only place in the world where multiple varieties of obsidian occur together at one site. Black, mahogany, rainbow, gold sheen and snowflake obsidian all found on the same volcanic buttes, 75 miles east of Bend on Highway 20.

Surface collect from the hillsides -- no digging needed. Obsidian chips and nodules cover the ground. Very beginner-friendly. 25 lb/day BLM limit. Bring gloves -- fresh obsidian edges are razor sharp.

## Garnet Hill, Nevada (BLM)

One of the BLM's officially designated rockhounding areas, and one of the easiest finds in the West. Deep red almandine garnets embedded in rhyolite weather out onto the hillside surface. Walk the ground and pick them up -- many are visible without any digging at all.

Located just 4 miles from Wells, Nevada directly off I-80. Easy highway stop. No tools needed beyond a bucket and sharp eyes. The perfect first western rockhounding experience.

## Kilbourne Hole, New Mexico (BLM)

This one is for the geology enthusiasts. Kilbourne Hole is a maar volcano -- an explosion crater -- in the BLM's Las Cruces District. Peridot occurs here as gem-quality olivine crystals and in dunite bombs: fragments of actual mantle rock ejected during the volcanic eruption.

These dunite bombs literally come from 50+ miles underground. You're collecting pieces of the Earth's mantle. That's extraordinary. Free on BLM land, 25 lb/day limit. Very remote -- 45 miles west of El Paso. 4WD required.

## Dugway Geode Beds, Utah (BLM)

Free geode collecting in the Utah West Desert. Dig spherical geodes from the desert soil -- plain and rough on the outside, but crack them open to reveal white, pink or purple quartz crystal interiors. The site is well marked on BLM maps and regularly stocked with new geodes eroding from the ancient lake bed deposits.

4WD or high clearance vehicle required. Very remote -- bring everything you need. Best October through May.

## Crystal Peak, Colorado (National Forest/BLM)

The Lake George area in Park County is one of Colorado's best-kept rockhounding secrets. Smoky quartz crystals and vivid green amazonite feldspar erode from pegmatite pockets in the decomposed granite, accessible from National Forest and BLM land.

Crystals up to several inches long found in the sandy weathered granite. Dig in the decomposed pegmatite float. High elevation -- snow possible even in summer. 4WD recommended for forest roads. One of the best free crystal collecting areas in the Rocky Mountains.

## Hansen Creek, Washington (Snoqualmie National Forest)

Washington State's most popular free crystal site. Quartz crystals -- clear, smoky and occasionally amethyst-tinted -- erode from pegmatite veins in the Cascades and concentrate in the creek gravels. Surface collect from the creek bed and search the talus slopes above.

4WD recommended for forest roads. Open when snow-free, typically June through October. Contact the North Bend Ranger District for current road conditions before making the drive.

## Tips for Free Public Land Collecting

**Always verify land status before you go.** Use CalTopo or the BLM's map portal to confirm you're on public land. Private land inholdings exist within many BLM areas -- don't assume everything is open.

**Know the limits.** The standard BLM limit is 25 lbs per day per person for personal use. Some sites have lower limits -- Topaz Mountain is 7.5 lbs. Never collect for commercial sale on public land without a permit.

**Leave no trace.** Fill your holes. Pack out your trash. The best collectors leave a site looking exactly as they found it.

**Water is the most important thing you bring.** Remote desert sites have nothing. A gallon per person per day minimum.
    `.trim(),
  },
  {
    id: 5,
    slug: "australia-opal-fossicking",
    title: "Fossicking for Opal in Australia: A Practical Guide",
    subtitle: "Lightning Ridge, Coober Pedy, and the Queensland Gemfields -- what to expect and how to prepare",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "8 min",
    hero: "\uD83D\uDCCD",
    tags: ["Australia", "opal", "Lightning Ridge", "Coober Pedy", "Queensland", "fossicking"],
    content: `
Australia produces over 90% of the world's precious opal. Three regions dominate: Lightning Ridge in New South Wales (black opal), Coober Pedy in South Australia (white and crystal opal), and the Queensland Gemfields (boulder opal and sapphire). All three are open to the public for fossicking -- hunting through mine tailings and designated areas for opal the miners missed.

Here's what you actually need to know before you go.

## The Licence

In New South Wales, South Australia and Queensland you need a fossicking licence to legally collect. They're cheap -- around $5-20 AUD -- and available online from each state's resources department. Get one before you arrive. They're not checked constantly but the fines for not having one are significant.

## Lightning Ridge

Lightning Ridge is where the world's finest black opal comes from. The town of about 2,500 people in outback New South Wales exists almost entirely because of opal, and it shows -- the town has more active mines than houses.

The public noodling area is near the Visitor Information Centre on Morilla Street. Noodling means sorting through old mine tailings by hand, looking for opal the miners missed. It's genuinely productive -- miners are after commercial-grade stones, and plenty of smaller or irregular pieces get left behind.

The opal markets run Wednesday and Saturday mornings (8am-noon) at the town's caravan parks. You can buy rough opal directly from miners here for a fraction of what it costs anywhere else. Watch for potch -- the colourless form of opal without play-of-colour -- being sold alongside genuine gem material.

Best time to visit: October through April. Avoid the Australian summer (December-February) when temperatures regularly exceed 40C and the dirt roads become impassable after rain.

## Coober Pedy

Coober Pedy is the opal capital of the world by production volume. It's also one of the strangest towns in Australia -- most residents live underground in dugouts carved into the hillside to escape the heat.

The old Jeweller's Shop field on the edge of town is designated for public noodling. The material here is the classic Coober Pedy white and crystal opal in a sandy matrix called opalite. The field has been noodled for decades and big finds are rare, but small pieces with genuine colour are still found regularly.

For a more structured experience, Tom's Working Opal Mine offers guided underground tours (~$20 AUD) where you see the actual mining process and can purchase rough opal directly.

South Australian precious stones permits are available from the Department for Energy and Mining. Get one before you drive into the field.

Warning: Coober Pedy has thousands of unlit, unfenced mineshafts around the town and in the fossicking areas. Never walk at night without a light. Never let children wander unsupervised. The shafts are deep.

## The Queensland Gemfields

The area around Anakie, Rubyvale and Sapphire in central Queensland is the world's most productive sapphire fossicking region -- nearly 900 square kilometres of designated public fossicking land. The basalt-rich gravels here produce sapphires in every colour plus zircon, topaz and occasionally ruby.

Beginners should start with a guided tag-along tour through Fascination Gems or the Rubyvale Gem Fossicking operations. They take you to productive spots, show you how to read the gravel, and provide equipment. Expect to pay $30-60 AUD for a half-day tour.

The town of Rubyvale has several operations where you buy a bucket of pre-dug gravel and wash it yourself -- this is the easiest introduction to fossicking. Buckets run $25-50 AUD.

Self-fossicking in the designated areas requires a Queensland fossicking licence. The best areas are in the creek beds and the designated fossicking commons -- maps available from the local information centres.

## What to Bring

Regardless of which region you visit:

- Fossicking licence for the relevant state
- Sturdy closed-toe boots (snakes and sharp mine waste)
- Hat, sunscreen, and far more water than you think you need
- A small shovel or trowel for moving material
- A spray bottle to wet stones -- opal's play of colour is much more visible when wet
- A loupe (10x magnifier) for examining potential finds
- Cash -- many miners and small operations don't take cards

The distances between towns in outback Australia are real. Fill the fuel tank every chance you get.
    `.trim(),
  },
  {
    id: 6,
    slug: "herkimer-diamonds-guide",
    title: "Herkimer Diamonds: New York's Double-Terminated Quartz",
    subtitle: "Why these aren't diamonds, why they're better, and how to find them",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["New York", "Herkimer Diamond", "quartz", "fee dig", "crystals"],
    content: `
Herkimer Diamonds aren't diamonds. They're quartz -- specifically, doubly-terminated quartz crystals so perfectly formed, so naturally faceted, and so brilliantly clear that early European settlers in New York's Mohawk Valley called them diamonds. The name stuck.

And in many ways they're more interesting than diamonds. They form inside small solution cavities in 500-million-year-old dolostone, growing slowly from silica-rich fluids until the cavity fills. The result is a free-standing crystal with a point at both ends -- doubly terminated -- something that almost never happens with quartz elsewhere.

## Where to Find Them

Herkimer Diamonds occur in the Cambrian-age Dolostone of Herkimer County, New York -- a roughly 35-mile belt running through the Mohawk Valley. They've been collected here for thousands of years; the Mohawk people used them as amulets and traded them across the northeast.

Two main fee-dig operations make them publicly accessible:

**Herkimer Diamond Mines** in Middleville is the larger and more commercial operation. $20 per adult per day, tools available to rent. You crack the gray dolostone with a hammer and chisel, split open vugs, and keep everything you find. The site has been collecting since the 1960s and still produces excellent crystals. Camping on-site.

**Ace of Diamonds** next door is quieter and less commercial -- the same geology, the same crystals, a fraction of the crowds. Also around $20 per day. A better experience for serious collectors who want to work at their own pace.

## What You're Looking For

The crystals are in vugs -- small cavities in the dolostone, often lined with a druzy crust of tiny crystals. The vugs look like small pockets when you crack open a piece of rock. Inside you might find a single perfect crystal, a cluster, or nothing.

The best crystals are water-clear with sharp faces and a brilliant internal fire. Some contain fluid inclusions -- tiny bubbles of ancient water trapped inside the crystal 500 million years ago. Crystals with moving antique bubbles are called enhydros and are particularly prized.

Smoky Herkimers (brown-tinged from natural radiation) and crystals with black anthraxolite inclusions are also found and considered desirable by collectors.

## Technique

Don't just smash rocks randomly. Look for the characteristic gray weathered dolostone with a slightly different texture -- slightly darker patches, small depressions, or linear features in the rock surface often indicate vug zones below. Work methodically along a face, splitting along natural bedding planes with a flat chisel.

When you open a vug, work carefully. A crystal broken by a careless hammer blow is worth nothing; an intact crystal worth $20-200 depending on size and clarity. Take your time.

The largest Herkimer Diamond ever recorded was over 7 inches long. The average find is about half an inch. Both are spectacular.

## Beyond Herkimer County

The dolostone formation extends into adjacent counties and into Canada. Crystals have been found in Fulton and Montgomery counties in New York, and in Ontario near Bancroft. None of the other localities match Herkimer County in quality or quantity, but if you're in the region it's worth keeping your eyes open.
    `.trim(),
  },
  {
    id: 7,
    slug: "reading-geological-maps",
    title: "How to Read a Geological Map (And Why It Changes Everything)",
    subtitle: "The difference between hoping and knowing",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Skills",
    readTime: "7 min",
    hero: "\u26CF",
    tags: ["geology", "maps", "technique", "USGS"],
    content: `
The single biggest leap a rockhound can make is learning to read a geological map. Not because you need one to find a good site -- there are plenty of guides for that. But because once you understand *why* a mineral is in a particular place, you stop following other people's footprints and start finding your own sites.

## What a Geological Map Shows

A geological map uses color to show which rock types are exposed at the surface in each area. Every color corresponds to a rock unit (usually a formation), and a legend tells you what that formation consists of and how old it is.

The patterns on the map show structure: horizontal lines mean sedimentary rock lying flat; diagonal lines mean tilted beds; complex swirling patterns mean the rock has been heavily deformed. Dotted lines are faults. Dashed lines are contacts between rock units.

**USGS geological maps are free.** The National Geologic Map Database (ngmdb.usgs.gov) has maps for the entire US at various scales. The 7.5-minute quadrangle maps (1:24,000 scale -- roughly 1 inch = 2,000 feet) are the most detailed and useful for rockhounding.

## The Key Formations to Look For

### Igneous Intrusions (Granites and Pegmatites)
On geological maps, granites show up as pink or red blobs with a granular pattern symbol. These are the host rocks for crystals, gemstones and rare minerals. The best finds aren't usually in the granite itself but along its edges -- where hot fluids concentrated minerals as they cooled.

**Pegmatites** often don't appear on smaller-scale maps, but the map will tell you if you're in the right granite to have them. Look for late-stage granites or granitic dikes.

### Metamorphic Terranes
These are where garnets, kyanite, staurolite, and other metamorphic minerals form. The map shows them as striped patterns (foliation) and labels like "schist," "gneiss," or "phyllite." High-grade metamorphics (amphibolite facies and above) are the most productive.

### Ultramafic Rocks (Serpentinite, Dunite, Peridotite)
These dark green or black rocks on the map are the ones to look for if you want chromite, olivine/peridot, or platinum-group metals. They're remnants of ancient oceanic crust. In Maryland they carry williamsite. In the Southwest they carry peridot.

### Carbonate Rocks (Limestone and Dolomite)
Light blue or grey on most maps. These are fossil country -- everything from trilobites to sharks teeth to coral reefs, depending on the age. They're also host to fluorite, calcite crystals, and geodes in cavities dissolved by groundwater.

### Volcanic Rocks
Basalt (dark grey/black), rhyolite (light pink/tan), tuff (yellow). Volcanic rocks are where you find agate (in vesicles), obsidian (in flows), and occasionally precious opal (in altered volcanic ash).

## Practical Workflow

1. **Start with the state geological map** -- broad picture, identifies the major rock types across the state.
2. **Zoom into the area you're interested in** -- get the 7.5-minute quad for that specific area.
3. **Cross-reference with Mindat.org** -- search the formation name to see what minerals have been documented from it.
4. **Check land status** -- use the BLM's MapMyIndia or CalTopo to confirm the land ownership and access rules.
5. **Go look** -- all the map tells you is where the geology is right. You still have to find the specific outcrop.

## A Real Example

Say you're in central Virginia and you want to find garnets. Look at the USGS geological map for the area. You'll see a belt of "Chopawamsic Formation" -- a metamorphic rock unit running through Culpeper and Fauquier counties. The map description says it includes mica schist and amphibolite. Mindat confirms garnet as common from this unit. You check CalTopo: most of it is private farmland, but there's a stretch through the Rappahannock River corridor with public access. That's where you start looking.

You didn't find a site on a guide. You found it on a map. That's a different feeling.

## Resources

- **USGS National Geologic Map Database**: ngmdb.usgs.gov -- free downloads of all US geological maps
- **Mindat.org** -- links rock formations to documented mineral occurrences
- **CalTopo** -- overlays land ownership on topographic maps
- **State geological surveys** -- many states have their own mapping programs with more detail than federal maps
    `.trim(),
  },
,
  {
    id: 8,
    slug: "rockhounding-alaska",
    title: "Rockhounding Alaska: Gold, Garnets and the Last Frontier",
    subtitle: "Where the gold rush never really ended",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Alaska", "gold", "garnets", "Nome", "Fairbanks"],
    content: `
Alaska is the ultimate rockhounding destination for anyone willing to make the trip. The state produces more placer gold than anywhere else in the US, and vast stretches of BLM and state land are open to free collecting.

## Nome Beach Gold Panning

The beaches of Nome are legendary. The same sands that sparked the 1899 Nome Gold Rush still produce gold today. Fine gold concentrates in the black sand beaches east and west of town through wave action from ancient creek deposits. Walk the public beach with a gold pan and find genuine flakes and occasional small nuggets. Equipment rentals available in town. Midnight sun in summer means you can pan around the clock.

## Fairbanks and the Interior

The Chatanika River along the Steese Highway northeast of Fairbanks is the best organized access point for inland gold panning. BLM-designated recreational panning areas are open free to the public. The entire Fairbanks region sits in one of the richest gold belts in North America. Fine gold in stream gravels throughout the drainage.

## Chicken and Eagle

The tiny community of Chicken in the Fortymile Country near the Canadian border has multiple fee-dig gold operations including Chicken Gold Camp. This area produces larger gold than the Nome beaches. The surrounding Fortymile River is designated a Wild and Scenic River with public gold panning allowed throughout.

## Practical Considerations

Alaska is remote. Before any trip outside Fairbanks or Anchorage, research your specific area thoroughly. Bears are present everywhere - carry spray. Always check BLM Alaska for current claim status before panning any area. Best season is May through September.
    `.trim(),
  },
  {
    id: 9,
    slug: "rockhounding-alabama",
    title: "Rockhounding Alabama: Gold, Garnets and the Coosa Belt",
    subtitle: "The Deep South has more geology than most people realize",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Alabama", "gold", "blue quartz", "garnets", "Coosa"],
    content: `
Alabama sits at the southwestern end of the Appalachian mineral belt and has genuine collecting opportunities that most visitors walk right past.

## Alabama Gold Camp (Hog Mountain)

Near Goodwater in Coosa County, Alabama Gold Camp operates on Hog Mountain -- part of the historic Coosa Gold Belt, the southwestern extension of the Appalachian gold belt. Gold was discovered here in the 1830s, predating the California Gold Rush by nearly two decades. Equipment is provided and gold is genuinely present in the Hillabee Greenstone Formation.

## Blue Star Quartz

Alabama's official state gemstone is the star blue quartz, found primarily in Coosa and Clay counties. The blue color and asterism come from microscopic rutile needles in the quartz. Collect from road cuts along County Road 29 near Hissop in Coosa County and from plowed fields in Shinbone Valley.

## Hillabee Creek Gold Panning

Public stream access at road crossings in Tallapoosa County allows free gold panning in Hillabee Creek. Fine to flake-sized gold in stream gravels at inside bends where bedrock traps concentrate the heavy minerals. Best at low water in late summer and fall.
    `.trim(),
  },
  {
    id: 10,
    slug: "rockhounding-arkansas",
    title: "Rockhounding Arkansas: Crystals, Diamonds and the Quartz Capital",
    subtitle: "Mount Ida is the quartz crystal capital of the world -- and it lives up to the title",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Arkansas", "quartz", "diamonds", "Crater of Diamonds", "Mount Ida"],
    content: `
Arkansas might be the single best state for a rockhounding road trip. Within a few hours you can dig for quartz crystals in the Ouachita Mountains and hunt for actual diamonds at the only public diamond mine in the world.

## Crater of Diamonds State Park

The only place on Earth where the public can dig for diamonds and keep what they find. The 37-acre volcanic pipe near Murfreesboro has produced over 35,000 diamonds since it opened, including the famous 40.23-carat Uncle Sam. Bring a sieve and garden tools, pay the modest park entry fee, and dig in the actual diamond-bearing lamproite soil. The park staff will ID your finds.

## The Mount Ida Quartz Belt

Mount Ida in Montgomery County sits at the heart of the Arkansas quartz belt -- the world's largest deposit of piezoelectric-quality quartz crystals. Ron Coleman Mining has been operating here since 1943 and is the gold standard of crystal digs. Two sites: a surface dig and a creek dig. Deep, well-formed clear quartz crystals up to several pounds.

## Board Camp Crystal Mine

One of the more unusual experiences in Arkansas rockhounding -- a dig site that has produced anomalous finds and attracted significant scientific interest. Beyond the curiosity factor, it is a genuinely productive crystal dig in beautiful Ouachita Mountain terrain.
    `.trim(),
  },
  {
    id: 11,
    slug: "rockhounding-arizona",
    title: "Rockhounding Arizona: Turquoise, Peridot and the Desert Floor",
    subtitle: "Tens of millions of acres of collecting ground, most of it free",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Arizona", "turquoise", "peridot", "Apache tears", "BLM", "copper minerals"],
    content: `
Arizona has more publicly accessible rockhounding land than almost any other state. The combination of BLM desert, active mineralogy from ancient copper deposits, and volcanic geology makes it a destination that rewards every level of collector.

## Apache Tears (Superior)

The hills around Superior produce obsidian nodules called Apache Tears -- small rounded pieces of black volcanic glass that become translucent when held to the light. The BLM land outside Superior is free to collect and extremely productive.

## Copper Minerals (Globe-Miami District)

The Globe-Miami mining district in Gila County is one of the world's great copper mineral localities. Copper City Rock Shop in Globe is the best starting point -- malachite, azurite, chrysocolla and turquoise from the surrounding mines.

## Peridot Mesa (San Carlos Apache Reservation)

The San Carlos Apache Reservation near Globe produces gem-quality peridot from a volcanic field. The tribe sells collecting permits directly -- check the San Carlos Apache tribe website for current availability.

## Hauser Geode Beds

Near the California border southwest of Blythe, the Hauser geode beds on BLM land produce chalcedony and amethyst geodes. One of the classic western geode sites. Very hot May-September -- visit October through April only.

## Practical Notes

Arizona BLM allows 25 lbs/day casual collecting. Summer temperatures regularly exceed 110F in the desert -- schedule remote site visits for October through April.
    `.trim(),
  },
  {
    id: 12,
    slug: "rockhounding-california",
    title: "Rockhounding California: Jade, Gold, Tourmaline and the Coast",
    subtitle: "The most geologically diverse state in the country",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "7 min",
    hero: "\uD83D\uDCCD",
    tags: ["California", "gold", "jade", "tourmaline", "benitoite", "obsidian"],
    content: `
California's geology spans the full spectrum -- ancient oceanic crust exposed at the surface, active volcanic fields, gold-bearing metamorphic belts, and coastal jade deposits. It is a lifetime of rockhounding in a single state.

## Jade Cove (Big Sur)

One of the only places in the US where nephrite jade can be legally collected. The Big Sur coastline exposes ancient oceanic crust including jade boulders and cobbles on the beach. Collecting is legal only below the mean high tide line. Dark green to black nephrite in boulders and cobbles. 2-mile hike to the cove.

## Benitoite Mining Company (San Benito County)

California's state gem, found commercially in only one place on Earth. This remote site in the New Idria mining district produces the brilliant blue benitoite along with neptunite and natrolite. Reservations required well in advance. 4WD vehicle needed.

## Himalaya Mine (Pala District)

Operating since 1898, the Himalaya Mine has produced tourmaline, morganite, aquamarine, topaz and lepidolite. Fee-dig days allow the public to screen mine dumps and work pegmatite exposures.

## Gold Country (Mother Lode)

The Sierra Nevada foothills from Mariposa to Nevada City follow the Mother Lode. Gold Prospecting Adventures in Jamestown takes beginners into the Stanislaus River for guided gold panning. Countless public streams along Highway 49 allow free recreational panning.
    `.trim(),
  },
  {
    id: 13,
    slug: "rockhounding-colorado",
    title: "Rockhounding Colorado: Gold, Crystals and High-Altitude Minerals",
    subtitle: "The Rocky Mountains are a treasure chest, if you know where to dig",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Colorado", "gold", "smoky quartz", "amazonite", "rhodochrosite", "topaz"],
    content: `
Colorado sits at the intersection of multiple mineralizing events -- Precambrian pegmatites, Laramide gold veins, and volcanic systems that produced remarkable variety.

## Crystal Peak (Lake George)

The Lake George area in Park County is famous for extraordinary smoky quartz and green amazonite from pegmatite pockets on National Forest and adjacent BLM land. Crystals up to several inches long in decomposed granite. One of Colorado's best free crystal areas.

## Gold Panning (Arkansas River)

Vic's Gold Panning operates on the Arkansas River near Buena Vista in historic Colorado gold country. Beginner-friendly instruction included. Beautiful Collegiate Peaks scenery as a backdrop.

## Creede (Volcanic Minerals)

The Creede mining district in Mineral County has produced some of Colorado's finest silver and fluorite specimens. Multiple old mine dumps accessible to collectors with National Forest access.

## What to Know

Colorado's high elevation means weather changes fast. Many of the best collecting areas are above 9,000 feet -- thunderstorms build quickly in the afternoon. Start early, carry plenty of water, and watch the sky.
    `.trim(),
  },
  {
    id: 14,
    slug: "rockhounding-connecticut",
    title: "Rockhounding Connecticut: Tourmaline, Beryl and New England Pegmatites",
    subtitle: "A small state with a surprisingly rich mineralogy",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Connecticut", "tourmaline", "beryl", "garnet", "pegmatite"],
    content: `
Connecticut punches above its weight geologically. The state's Appalachian bedrock hosts a series of lithium pegmatites that have produced some of the finest mineral specimens in New England.

## Gillette Quarry (Haddam Neck)

One of the most mineralogically rich pegmatite quarries in New England. A zoned lithium pegmatite with miarolitic pockets has yielded tourmaline crystals, aquamarine, amazonite, morganite, lepidolite and fluorapatite. Primarily accessible through organized mineral club field trips. Connecticut's state gemstone (almandine garnet) is also present.

## Green's Farm Roxbury

In the picturesque Litchfield Hills, this seasonal fee-dig site is open May through October. Garnet and tourmaline in schist and pegmatite exposures. Call ahead to confirm access.

## The Broader Context

Connecticut sits in the same Appalachian mobile belt as the famous New England pegmatite districts of Maine and New Hampshire. Joining the Connecticut Mineral Association is the best way to access the best sites through organized field trips.
    `.trim(),
  },
  {
    id: 15,
    slug: "rockhounding-delaware",
    title: "Rockhounding Delaware: Serpentine, Garnets and the Brandywine",
    subtitle: "The First State has geological connections to one of the richest mineral belts on the East Coast",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "3 min",
    hero: "\uD83D\uDCCD",
    tags: ["Delaware", "serpentine", "garnet", "chromite", "Brandywine"],
    content: `
Delaware is the smallest state and has limited in-state rockhounding -- but it sits at the northern end of the same Appalachian serpentine belt that produced world-class minerals in Maryland and Pennsylvania.

## Brandywine Creek State Park

The Brandywine River draining through this Wilmington-area state park carries serpentine, chromite and garnet pebbles eroded from the Piedmont serpentine belt upstream. Collect from loose creek gravel -- no digging in the banks. The same geological formation as Maryland's State Line Pits and Soldiers Delight.

## State Line Pits Connection

The world-famous State Line mineral district straddles the Maryland-Pennsylvania border just a few miles from Delaware. Williamsite, chromite, brucite and magnetite -- easily accessible as a day trip from Delaware.

## Practical Notes

Delaware's geology is primarily coastal plain sediments with Piedmont metamorphics only in the extreme northern corner near Wilmington. Serious collecting in Delaware requires either the Brandywine area or short drives into neighboring states.
    `.trim(),
  },
  {
    id: 16,
    slug: "rockhounding-florida",
    title: "Rockhounding Florida: Fossils, Shark Teeth and Phosphate Country",
    subtitle: "Florida has no mountains but it has 15 million years of marine fossil history",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Florida", "fossils", "shark teeth", "Megalodon", "Peace River", "Venice"],
    content: `
Florida sits on a thick platform of marine limestone and phosphate-rich sediments that preserves one of the best Miocene fossil records in the world. There are no crystals or gem minerals here -- but for fossil hunters, Florida is extraordinary.

## Venice Beach (Shark Tooth Capital)

Venice Beach on the Gulf Coast is the self-proclaimed shark tooth capital of the world. The offshore Hawthorn Formation erodes constantly and deposits fossil shark teeth on the beach and in the shallow surf. Wade with a mesh scoop, sift through the shell hash at the water line. Free and open 24 hours.

## Peace River (Fossicking)

The Peace River south of Arcadia is the best freshwater fossil hunting in Florida. Snorkel or wade in the river to collect Miocene and Pleistocene fossils from the gravel bottom -- shark teeth, dugong ribs, horse teeth, mastodon fragments. Fossil Expeditions and other operators offer guided canoe and diving trips.

## Rucks Pit (Fort Drum Crystal Mine)

A unique Florida site -- calcite crystals forming in an ancient coral reef limestone. Fee dig operation with genuinely unusual Florida geology.
    `.trim(),
  },
  {
    id: 17,
    slug: "rockhounding-georgia",
    title: "Rockhounding Georgia: Gold, Rubies, Sapphires and Tektites",
    subtitle: "Georgia has more geological variety than its reputation suggests",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Georgia", "gold", "ruby", "sapphire", "tektites", "staurolite", "garnets"],
    content: `
Georgia sits at the heart of the Appalachian mineral belt and has an extraordinary range of collecting opportunities -- from active gold mines and ruby digs in the north to meteorite impact glass scattered across the coastal plain.

## Dahlonega (First US Gold Rush)

Georgia hosted the first major gold rush in the US in 1828. The Dahlonega area in Lumpkin County still has active gold panning operations including Consolidated Gold Mine and Crisson Gold Mine. Real gold in historic placer and lode gold country.

## Cowee Valley (Ruby and Sapphire)

The Cowee Valley near Franklin in Macon County is one of the best ruby and sapphire collecting areas in the US. Multiple fee-dig operations including Cherokee Ruby and Sapphire Mine offer sluicing through native corundum-bearing gravel.

## Georgia Tektites (Georgiaites)

Central Georgia is one of the best tektite locations in the US. Georgiaites -- translucent olive-green glass formed by the Chesapeake Bay meteorite impact 35 million years ago -- scatter across at least 24 counties. Look in freshly plowed agricultural fields after light rain. Always get landowner permission.

## Chattahoochee National Forest

The Blue Ridge section allows free collecting of staurolite (Georgia's official state mineral), almandine garnet, kyanite and quartz from stream gravels and outcrops. Gold panning is also permitted in national forest streams.
    `.trim(),
  },
  {
    id: 18,
    slug: "rockhounding-hawaii",
    title: "Rockhounding Hawaii: Olivine, Volcanic Glass and the Green Sand Beach",
    subtitle: "The most geologically active state -- but collecting rules are strict",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Hawaii", "olivine", "peridot", "obsidian", "volcanic", "Papakōlea"],
    content: `
Hawaii offers something no other state can -- active volcanic geology you can watch forming in real time. But it comes with significant collecting restrictions.

## Papakōlea Green Sand Beach (Olivine)

One of only four green sand beaches in the world, created entirely from olivine (gem-quality peridot) crystals eroded from a volcanic cinder cone at the southernmost point of the United States. The beach is protected and collecting is strictly prohibited -- but the geology is extraordinary to witness.

## Hawaii Volcanoes National Park

The park exposes fresh basaltic lava flows rich in olivine. Pele's tears and Pele's hair visible throughout. Collecting is prohibited in the national park. Chain of Craters Road and Devastation Trail are the best geology viewing areas.

## What You Can Collect

Outside national parks, loose volcanic rock on public land is generally collectible in personal amounts. Beach pebbles of olivine basalt from non-protected public beaches are fair game. Always confirm you are not on NPS, state park, or culturally significant land before taking anything.
    `.trim(),
  },
  {
    id: 19,
    slug: "rockhounding-idaho",
    title: "Rockhounding Idaho: Sapphires, Garnets, Opals and Star Garnets",
    subtitle: "Idaho produces the only star garnets found outside India",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Idaho", "star garnet", "opal", "sapphire", "gold", "Emerald Creek"],
    content: `
Idaho has one of the most distinctive gem profiles of any state. The Idaho star garnet -- a four or six-rayed asteriated garnet found in only two places on Earth (Idaho and India) -- is the state gem.

## Emerald Creek Garnet Area (St. Joe National Forest)

The only place in the US where star garnets are commercially mined and open to public fee-digging. Located in the St. Joe National Forest near Clarkia, the site charges a modest fee and provides screens and sluices. Dig in the garnet-bearing clay and wash it to reveal deep red dodecahedral crystals. Many show the four-rayed star when polished. Open seasonally.

## Spencer Opal Mines

Near the tiny community of Spencer in eastern Idaho, these volcanic opal mines offer public fee-digging. Idaho opal is a precious opal with good play of color -- green, blue and orange flashes. Fee per bucket system. Open seasonally.

## Salmon River Sapphires

The Salmon River drainage in central Idaho produces sapphires and garnets in stream gravels -- the same metamorphic belt as Montana's famous sapphires. Pan in Nez Perce-Clearwater National Forest streams with no permit required.
    `.trim(),
  },
  {
    id: 20,
    slug: "rockhounding-illinois",
    title: "Rockhounding Illinois: Geodes, Fluorite and the Keokuk District",
    subtitle: "The Midwest's best geodes come from right here",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Illinois", "geodes", "fluorite", "Keokuk", "Hamilton", "fossils"],
    content: `
Illinois is the center of one of the world's great geode deposits and the northern end of the legendary Illinois-Kentucky Fluorspar District.

## Keokuk Geode Beds (Hamilton)

Hamilton in Hancock County sits at the center of the Keokuk Geode District -- the richest geode region on Earth. The 340-million-year-old Warsaw Limestone weathers out spherical geodes from 2 inches to basketball size in creek beds and road cuts. Most have white quartz crystal interiors; rare specimens contain calcite, pyrite cubes, sphalerite or the highly prized millerite. Also try Dennis Stevenson's fee-dig ($20/bucket, call 309-337-3089).

## Illinois-Kentucky Fluorspar District

The southern tip of Illinois near Cave-in-Rock is the northern end of one of the world's most productive fluorite districts. Old mine dumps in Hardin and Pope counties expose purple, green, yellow and banded fluorite with calcite, barite and sphalerite.

## Dave's Down to Earth Rock Shop

An Illinois institution in Evanston since 1970. Owner Dave Douglass is a lifelong collector and the shop's selection is one of the best in the Midwest.
    `.trim(),
  },
  {
    id: 21,
    slug: "rockhounding-indiana",
    title: "Rockhounding Indiana: Geodes, Fossils and Hoosier National Forest",
    subtitle: "Southern Indiana is seriously underrated geode and fossil country",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Indiana", "geodes", "fossils", "Ordovician", "gold", "Hoosier National Forest"],
    content: `
Indiana's southern unglaciated hill country preserves some of the best geode and fossil collecting in the Midwest.

## Geode Gorge (Monroe Reservoir Area)

Southern Indiana's Mississippian limestone belt is prime geode country. The area around Monroe Reservoir and Bear Creek near Trevlac produces excellent geodes weathering from creek banks. Stream hunt in Hoosier National Forest creek beds during low water in late summer and fall. Indiana geodes range from 2 inches to over a foot across; rare specimens contain calcite, dolomite, pyrite or sphalerite. A floating geode means it is hollow -- a sloshing geode means it contains water (enhydro), a genuinely rare find.

## Ordovician Fossil Road Cuts

Southeastern Indiana has some of North America's most accessible Ordovician fossil beds. Road cuts along Highway 56, State Road 250 and secondary roads through Dearborn, Ohio and Switzerland counties expose 450-million-year-old limestone packed with trilobites, brachiopods, crinoids and corals.

## Hoosier National Forest

Indiana's only National Forest allows casual mineral collecting and recreational gold panning in its streams in the south-central part of the state.
    `.trim(),
  },
  {
    id: 22,
    slug: "rockhounding-iowa",
    title: "Rockhounding Iowa: Geodes, Fossils and the Keokuk Connection",
    subtitle: "Iowa is the Geode Capital of the World -- and it earns that title",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Iowa", "geodes", "Keokuk", "fossils", "Prairie Park"],
    content: `
Iowa's claim to being the Geode Capital of the World is backed up by the geology.

## Geode State Park (Danville)

Iowa's Geode State Park in Henry County sits in the epicenter of the geode district. The surrounding area -- particularly creek beds and adjacent public land -- offers excellent free collecting. The 340-million-year-old geodes weather out of limestone exposures and concentrate in creek gravels.

## Fossil and Prairie Park Preserve (Rockford)

Northern Iowa's Devonian fossil beds at Fossil and Prairie Park Preserve near Rockford are a designated public fossil collecting site. Crinoids, brachiopods and corals from 375-million-year-old marine deposits. Hammers and chisels work best to split limestone along bedding planes.

## The Keokuk Connection

Iowa sits at the northern apex of the tri-state Keokuk Geode District. Combine Geode State Park with Sheffler's Rock Shop in Missouri and the Hamilton Illinois creek beds for a complete geode circuit spanning three states.
    `.trim(),
  },
  {
    id: 23,
    slug: "rockhounding-kansas",
    title: "Rockhounding Kansas: Crystals, Fossils and the Great Plains Geology",
    subtitle: "Flat does not mean featureless when you know where to look",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "3 min",
    hero: "\uD83D\uDCCD",
    tags: ["Kansas", "quartz", "selenite", "fossils", "Cretaceous", "chalk"],
    content: `
Kansas gets overlooked by rockhounds, but the state's Cretaceous and Pennsylvanian rock exposures offer legitimate collecting.

## Chautauqua Hills Quartz and Barite Roses

The Chautauqua Hills in southeast Kansas expose Pennsylvanian limestone with quartz crystals, calcite and occasional barite roses in road cuts. No permit needed for surface collecting from public road rights-of-way.

## Selenite Gypsum (Ness City Area)

Western Kansas near Ness City has Permian gypsum beds exposed in road cuts and creek banks that produce selenite crystals -- large, flat, transparent gypsum sheets and blades.

## Chalk Beds Fossils (Gove County)

The Smoky Hill Chalk of western Kansas is one of the world's great Late Cretaceous marine fossil localities. Mosasaur remains, fish, and marine reptile bones erode from the chalk bluffs. The Keystone Gallery in Scott City offers guided fossil hunting.
    `.trim(),
  },
  {
    id: 24,
    slug: "rockhounding-kentucky",
    title: "Rockhounding Kentucky: Fluorite, Geodes and Cave Country Minerals",
    subtitle: "Kentucky sits atop one of the world's great fluorite districts",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Kentucky", "fluorite", "geodes", "gold", "Mammoth Cave", "fluorspar"],
    content: `
Kentucky is underrated rockhounding territory. The state contains the northern portion of the Illinois-Kentucky Fluorspar District and some of the best geode collecting in the eastern US.

## Illinois-Kentucky Fluorspar District

The western Kentucky counties of Hardin, Livingston and Crittenden sit on one of the world's most productive fluorite deposits. Old mine dumps along the Ohio River bluffs expose purple, green, yellow and banded fluorite with calcite, barite and sphalerite. Land Between the Lakes National Recreation Area has surface exposures of fluorite on public land.

## Hall's Gap Geodes (Lincoln/Casey Counties)

Central Kentucky's Fort Payne and Warsaw-Salem Formations produce excellent Mississippian-age geodes in creek beds and road cuts. Some geodes here reach 2 feet in diameter. Road cuts along KY 501 and secondary roads are the primary access.

## Green River Geodes (Edmonson County)

The Green River valley south of Mammoth Cave cuts through Mississippian limestone producing geodes -- some containing celestite in addition to quartz and calcite. Access from public road crossings. Note: collecting is prohibited inside Mammoth Cave National Park.
    `.trim(),
  },
  {
    id: 25,
    slug: "rockhounding-louisiana",
    title: "Rockhounding Louisiana: Agate, Petrified Wood and the Kisatchie Forest",
    subtitle: "Louisiana's geology rewards patient collectors",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "3 min",
    hero: "\uD83D\uDCCD",
    tags: ["Louisiana", "agate", "petrified wood", "Kisatchie", "fossils"],
    content: `
Louisiana is not typically on a rockhound's radar, but the state has legitimate collecting in the Kisatchie National Forest.

## Kisatchie National Forest

Louisiana's only National Forest in Natchitoches and Rapides Parishes allows casual mineral collecting. Agate, petrified wood and chert occur in the Catahoula Formation sandstone exposures. Surface collect from road cuts and creek gravels on National Forest land. Contact the Kisatchie Ranger District for current site guidance. Best October through April.

## Catahoula Formation

The Catahoula Formation -- a Miocene-age volcanic ash and sandstone unit -- underlies much of central Louisiana. The formation was deposited from volcanic eruptions in what is now Texas and New Mexico. Where it is exposed in creek banks and road cuts, agate and petrified wood weather out.

## Practical Notes

Louisiana's climate is hot and humid most of the year. The best collecting season is October through March. Always check current access conditions with the ranger district before making a long drive.
    `.trim(),
  },
  {
    id: 26,
    slug: "rockhounding-maine",
    title: "Rockhounding Maine: Tourmaline, Beryl and the Oxford County Pegmatites",
    subtitle: "The Pine Tree State is one of the premier gem pegmatite destinations in the US",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Maine", "tourmaline", "beryl", "lepidolite", "pegmatite", "Oxford County"],
    content: `
Maine's Oxford County pegmatite district is one of the most mineralogically rich in the US.

## Poland Mining Camps (Dig Maine Gems)

The Poland Mining Camps in Oxford County sit in the heart of the pegmatite district. Dig Maine Gems operates here, offering guided and self-guided digs for tourmaline, beryl, quartz, lepidolite and feldspar. The pegmatites have produced museum-quality tourmaline specimens now in major collections worldwide.

## Coos Canyon (Gold Panning)

On the Swift River in Byron, Coos Canyon Rock and Gift operates in a spectacular gorge where gold panning has been a tradition since the 1800s. The Swift River produces genuine placer gold. Equipment available for rent.

## The Broader District

The Oxford County district includes famous historical localities like Mount Mica (where tourmaline was first discovered in the US in 1820) and the Dunton and Bennett Quarries. Maine tourmaline comes in every color -- pink, green, blue-green, red, and bi-color specimens.

## What to Know

Maine's collecting season runs roughly May through October. The pegmatites are in heavily forested terrain -- waterproof boots and bug spray are essential.
    `.trim(),
  },
  {
    id: 27,
    slug: "rockhounding-michigan",
    title: "Rockhounding Michigan: Copper, Isle Royale Greenstone and Lake Superior Agates",
    subtitle: "Michigan's state gem is found on public beaches -- free for the taking",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Michigan", "copper", "chlorastrolite", "Isle Royale Greenstone", "Lake Superior agate", "thomsonite"],
    content: `
Michigan's Keweenaw Peninsula is one of the most unusual geological regions in North America -- ancient Precambrian copper lava flows exposed at the surface along the shores of Lake Superior.

## Keweenaw Peninsula Beaches

The pebble beaches of the Keweenaw Peninsula produce some of North America's most unusual beach finds. Native copper nuggets, Isle Royale Greenstone (chlorastrolite -- Michigan's state gem), Lake Superior agates and thomsonite wash onto the beaches from underwater copper lava flows. Best beaches include Agate Beach near Phoenix, Copper Harbor, and McLain State Park. After major storms, fresh material is exposed.

## Chlorastrolite (Isle Royale Greenstone)

Michigan's state gem is a variety of the mineral pumpellyite that forms in the amygdules of the ancient copper lava flows. It has a distinctive green turtleback pattern that becomes visible when polished. Found only in the Keweenaw Peninsula and Isle Royale.

## Caledonia Mine (Native Copper)

The Caledonia Mine in Mass City allows fee-dig collecting for native copper, silver-copper coinage metal, datolite, epidote and calcite. Reservation required. The copper specimens here can be extraordinary.
    `.trim(),
  },
  {
    id: 28,
    slug: "rockhounding-minnesota",
    title: "Rockhounding Minnesota: Lake Superior Agates and North Shore Minerals",
    subtitle: "The Lake Superior agate is Minnesota's state gem -- and the North Shore is where to find them",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Minnesota", "Lake Superior agate", "agate", "prehnite", "zeolite", "Two Harbors"],
    content: `
Minnesota's Lake Superior North Shore is one of the most scenic rockhounding destinations in the US.

## Lake Superior Agates

Formed when silica-rich groundwater filled vesicles in ancient lava flows 1.1 billion years ago, Lake Superior agates are distinguished by their vivid red and orange iron-oxide banding. The best beach collecting is on pebble beaches at river mouths, particularly after high water events. The agates glow with a distinctive translucency when wet.

## Agate City (Two Harbors)

The definitive Lake Superior agate shop, run by the same family for generations. Massive selection of polished and rough Lake Superior agates plus other Minnesota minerals.

## Palisade Head / Tettegouche State Park

The rhyolite cliffs of Palisade Head expose the same Precambrian volcanic sequence that created Lake Superior agates. The beach at the base of the cliffs is excellent for agate collecting. The Tettegouche area is also known for prehnite and zeolite minerals in the basalt.
    `.trim(),
  },
  {
    id: 29,
    slug: "rockhounding-mississippi",
    title: "Rockhounding Mississippi: Cretaceous Fossils and the Selma Group",
    subtitle: "Mississippi's Cretaceous chalk beds hide 70-million-year-old marine life",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "3 min",
    hero: "\uD83D\uDCCD",
    tags: ["Mississippi", "fossils", "Cretaceous", "shark teeth", "mosasaur"],
    content: `
Mississippi is primarily fossil country. The northeastern part of the state exposes Cretaceous marine deposits that preserve exceptional 70-million-year-old fossils.

## Cretaceous Fossil Road Cuts (Oktibbeha/Lowndes Counties)

Mississippi's Cretaceous Selma Group limestone and chalk exposures in the northeastern Prairie counties are among the best in the Deep South. Road cuts along the Highway 82 corridor expose marine fossils -- shark teeth, mosasaur remains, ammonites, and massive Cretaceous oysters. No permit needed for casual surface collecting from public road rights-of-way.

## Yazoo Clay Fossils

The Yazoo Clay formation in west-central Mississippi preserves Eocene marine fossils including nummulites, mollusks and occasional shark teeth. Road cuts and creek banks in Yazoo and surrounding counties expose this material.

## Practical Notes

Mississippi's hot and humid climate makes summer collecting uncomfortable. October through April is the best season.
    `.trim(),
  },
  {
    id: 30,
    slug: "rockhounding-missouri",
    title: "Rockhounding Missouri: Geodes, Fluorite and Lead Country",
    subtitle: "Missouri produced more lead than any other state -- and the minerals are spectacular",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Missouri", "geodes", "fluorite", "galena", "lead", "Keokuk"],
    content: `
Missouri occupies the western edge of the Ozark Plateau, where ancient Paleozoic sedimentary rocks have been gently folded and mineralized.

## Sheffler's Rock Shop and Geode Dig

Near Alexandria in Clark County, Sheffler's is Missouri's best geode fee-dig. $25 for up to 50 pounds of Keokuk geodes, cracked on-site. Most have white quartz interiors; the prize finds contain calcite rhombs, dolomite, pyrite or rare millerite.

## Fabius River Geode Area

Clark County's Fabius River drainage is prime Keokuk geode territory -- the same Warsaw Limestone as the famous Illinois and Iowa sites. Public stream access at road crossings. Combine with Sheffler's for a full day.

## Missouri Lead Belt (Southeast Missouri)

The Viburnum Trend in southeast Missouri was the largest lead mining district in the US. The Bonne Terre Mine offers underground boat tours through flooded mine workings -- the world's largest man-made underground lake. Galena, sphalerite, calcite and dolomite in spectacular forms.
    `.trim(),
  },
  {
    id: 31,
    slug: "rockhounding-montana",
    title: "Rockhounding Montana: Sapphires, Dinosaurs and the Big Sky Gem Belt",
    subtitle: "Montana sapphires come in colors found nowhere else on Earth",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Montana", "sapphire", "dinosaurs", "fossils", "garnets", "gold", "Yogo"],
    content: `
Montana is one of the premier rockhounding destinations in the US. The combination of world-class sapphire deposits, exceptional dinosaur fossil country, and free BLM land makes it a destination that rewards multiple visits.

## Montana Sapphires

Montana sapphires are unlike any other in the world -- alluvial deposits in the Missouri River drainage and Rock Creek produce unique teal, cornflower blue, green, yellow, orange and pink colors. Multiple fee-dig operations allow the public to screen sapphire-bearing gravel. Gem Mountain Sapphire Mine near Philipsburg is the oldest continuously operating sapphire mine in the US (since 1895). Spokane Bar Sapphire Mine outside Helena and Emerald Bar in the Rock Creek area are additional options.

## Yogo Sapphires

The Yogo Gulch in Judith Basin County produces the only cornflower blue sapphires in the US that require no heat treatment. The mine is private but Yogo sapphires are sold through dealers in Helena.

## Dinosaur Country

The Hell Creek Formation in eastern Montana is one of the world's premier Late Cretaceous dinosaur localities. Baisch's Dinosaur Digs and other operators offer supervised public digs alongside professional paleontologists. The area around Jordan and Circle has produced Tyrannosaurus rex, Triceratops and hadrosaur material.

## Gold Country

Virginia City in Madison County is a restored gold rush town with placer gold operations. The Alder Gulch Short Line Rock Shop sells Montana sapphires, gold specimens and Montana agates.
    `.trim(),
  },
  {
    id: 32,
    slug: "rockhounding-nebraska",
    title: "Rockhounding Nebraska: Fairburn Agates and Fossil Beds",
    subtitle: "The Pine Ridge country of northwest Nebraska hides one of America's most prized agates",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Nebraska", "Fairburn agate", "fossils", "Agate Fossil Beds", "Pine Ridge"],
    content: `
Nebraska's rockhounding reputation rests on two things: Fairburn agates and the extraordinary Miocene fossil beds of the panhandle.

## Fairburn Agates (Pine Ridge Area)

Fairburn agates are among the most prized agates in North America. The distinctive tightly banded fortification pattern in vivid reds, oranges, creams and purples is found almost exclusively in the White River Formation. The Pine Ridge area straddling the South Dakota-Nebraska border has BLM land where Fairburns erode from the formation. Walk eroded draws and hillsides after rain -- they don't tumble far from the source.

## Agate Fossil Beds National Monument

Near Harrison in Sioux County, Agate Fossil Beds NM protects 19-million-year-old Miocene mammal fossils including Moropus and Menoceras. While collecting is prohibited inside the monument, the surrounding Sioux County area has public BLM land with Nebraska moss agate and chalcedony.

## Practical Notes

Northwest Nebraska is remote. Crawford is the primary supply town -- fuel up there before heading into the backcountry. Best agate collecting is in spring after snowmelt and again in early fall.
    `.trim(),
  },
  {
    id: 33,
    slug: "rockhounding-nevada",
    title: "Rockhounding Nevada: Opals, Turquoise, Gold and the Great Basin",
    subtitle: "More BLM land than almost any other state -- and the geology to match",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Nevada", "opal", "turquoise", "gold", "Virgin Valley", "garnets"],
    content: `
Nevada has more federally managed land than any state except Alaska, and the Great Basin's combination of volcanic and hydrothermal geology has produced an extraordinary variety of collectible minerals.

## Virgin Valley Opals

The most spectacular domestic opal collecting in the US happens in northern Nevada's remote Virgin Valley. Royal Peacock, Bonanza and Rainbow Ridge all operate fee-dig operations in the volcanic rhyolite and ash beds. Colors are extraordinary -- fire, crystal, black and precious opal. Important: Virgin Valley opals are notoriously unstable and must be kept in water after collection to prevent crazing.

## Garnet Hill (Wells)

One of the BLM's officially designated free rockhounding areas, just 4 miles from Wells off I-80. Deep red almandine garnets weather onto the hillside surface. Beginner-friendly and very productive.

## Turquoise Country

Nevada produces more turquoise than any other state. The Royston, Pilot Mountain and Battle Mountain districts have active mines. Rock shops in Elko and Reno carry Nevada turquoise rough and cut stones.

## Gold Country

The Carlin Trend in northern Nevada is the world's second-largest gold producing region. The surrounding public land has historical placer deposits -- contact the BLM Elko District Office for current recreational panning areas.
    `.trim(),
  },
  {
    id: 34,
    slug: "rockhounding-new-hampshire",
    title: "Rockhounding New Hampshire: Beryl, Mica and the White Mountain Minerals",
    subtitle: "Ruggles Mine has been producing minerals since 1803",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["New Hampshire", "beryl", "mica", "tourmaline", "Ruggles Mine", "gold"],
    content: `
New Hampshire's White Mountain region sits in the same Appalachian pegmatite belt as Maine's Oxford County district.

## Ruggles Mine (Grafton)

One of the oldest and most spectacular open-pit mineral digs in the US -- mined since 1803. The enormous open-cut pegmatite pit has produced muscovite mica sheets up to 3 feet across, beryl crystals, feldspar, garnet, tourmaline and columbite. The secondary uranium minerals autunite and torbernite fluoresce brilliantly under shortwave UV -- bring a UV light. Open late May through mid-October, $30/adult.

## Twin River Campground (Gold Panning)

The Swift River near Conway produces genuine placer gold in a beautiful White Mountain setting. Fine gold flakes from the same general geological drainage as Maine's gold-producing rivers.

## Practical Notes

New Hampshire's collecting season runs May through October. The Ruggles Mine books up on summer weekends -- call ahead. The uranium minerals at Ruggles are safe to handle briefly but bring gloves as a precaution.
    `.trim(),
  },
  {
    id: 35,
    slug: "rockhounding-new-jersey",
    title: "Rockhounding New Jersey: Zinc Minerals, Fossils and Franklin's Famous Fluorescence",
    subtitle: "Franklin and Ogdensburg are the fluorescent mineral capitals of the world",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["New Jersey", "fluorescent minerals", "zinc", "fossils", "Franklin", "willemite", "franklinite"],
    content: `
New Jersey has two world-class geological treasures: the Franklin-Ogdensburg zinc mining district (home to the most spectacular fluorescent minerals on Earth) and the Cretaceous fossil beds of the coastal plain.

## Franklin Mineral Museum

Franklin is the fluorescent mineral capital of the world. The zinc deposits here produced minerals that glow in extraordinary colors under ultraviolet light -- willemite fluoresces brilliant green, calcite fluoresces bright red. The Franklin Mineral Museum has one of the finest fluorescent mineral collections anywhere and hosts regular collecting events at the Buckwheat Dump.

## Sterling Hill Mining Museum

The Sterling Hill mine in Ogdensburg produced the same remarkable fluorescent minerals. The underground mine is preserved and open for tours, including a UV light tour where the fluorescent minerals glow brilliantly in the tunnel walls.

## Big Brook (Cretaceous Shark Teeth)

Big Brook in Monmouth County is one of the best free fossil collecting creeks on the East Coast. The stream cuts through 70-million-year-old Cretaceous marine deposits exposing shark teeth, mosasaur teeth, fish vertebrae and marine invertebrates. Park at Thompson Park on Newman Springs Road. Bring a screen sieve.
    `.trim(),
  },
  {
    id: 36,
    slug: "rockhounding-new-mexico",
    title: "Rockhounding New Mexico: Peridot, Turquoise, Agates and the Desert Southwest",
    subtitle: "BLM land stretching to the horizon -- and the minerals to match",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["New Mexico", "peridot", "turquoise", "Pecos Diamonds", "smithsonite", "fluorite"],
    content: `
New Mexico's vast desert landscape sits atop extraordinarily varied geology.

## Kilbourne Hole (Peridot / Mantle Xenoliths)

One of the most geologically remarkable collecting sites in the US. Kilbourne Hole is a maar volcano on BLM land west of El Paso. Gem-quality olivine occurs both as loose crystals and inside dunite bombs -- rounded rocks ejected from the Earth's mantle 50+ miles underground. You can hold a piece of the planet's mantle in your hand. Very remote -- 4WD essential, bring water. Best October through April.

## Pecos River Diamond Beds (BLM)

Doubly-terminated quartz crystals so perfectly formed they were historically mistaken for diamonds. Collect from BLM land off Karr Ranch Road near Pecos -- no digging required, surface collect loose crystals from gypsum beds.

## Rockhound State Park (Deming)

One of the few US state parks explicitly designed for rock collecting. The volcanic hills above Deming produce agates, jasper, quartz and perlite. $5 park entry, keep what you find.

## Magdalena Mountains / Socorro Area (BLM)

The Kelly Mining District near Magdalena has old mine dumps on BLM land with smithsonite, cerussite, fluorite, pyrite, azurite and malachite. Contact the Socorro BLM field office for current public access areas.
    `.trim(),
  },
  {
    id: 37,
    slug: "rockhounding-new-york",
    title: "Rockhounding New York: Herkimer Diamonds, Garnets and the Adirondacks",
    subtitle: "Herkimer County produces crystals so perfect they were once sold as diamonds",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["New York", "Herkimer Diamond", "garnet", "Adirondacks", "amethyst"],
    content: `
New York State is far more mineralogically interesting than most people expect.

## Herkimer Diamonds (Herkimer County)

Doubly-terminated quartz crystals -- called Herkimer Diamonds for their diamond-like clarity and natural faceting -- form in cavities in 500-million-year-old Cambrian dolostone near the town of Herkimer. Several fee-dig operations on Route 28 allow collectors to hammer into the rock and search for crystal-lined pockets. Crystals up to several inches long are regularly found. The Herkimer Diamond Mines and Ace of Diamonds Mine are the two main operations.

## Gore Mountain Garnet

Gore Mountain in the central Adirondacks is a working garnet mine and one of the few places in the US where you can collect garnets directly from a pegmatite and amphibolite contact. The Barton Mine has operated since 1878 and periodically opens to the public. Exceptionally large almandine garnets in spectacular clusters.

## Amethyst (St. Lawrence County)

The Macomb area in St. Lawrence County produces amethyst in quartz veins cutting Precambrian granite. Contact the St. Lawrence County historical society for current access information.
    `.trim(),
  },
  {
    id: 38,
    slug: "rockhounding-north-carolina",
    title: "Rockhounding North Carolina: Emeralds, Rubies, Gold and the Gem Capital",
    subtitle: "North Carolina may be the best single state for gem mineral collecting in the US",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "7 min",
    hero: "\uD83D\uDCCD",
    tags: ["North Carolina", "emerald", "ruby", "sapphire", "gold", "Spruce Pine", "hiddenite"],
    content: `
North Carolina is arguably the single best state in the US for gem mineral collecting. The combination of the Cowee Valley ruby and sapphire fields, the Spruce Pine pegmatite district, the Carolina Gold Belt, and the famous emerald mine at Hiddenite make it a destination that could occupy a serious collector for years.

## Cowee Valley (Rubies and Sapphires)

The Cowee Valley near Franklin in Macon County is the most productive ruby and sapphire collecting area in the eastern US. Multiple fee-dig operations offer sluicing through native corundum-bearing gravel. Cherokee Ruby and Sapphire Mine and Mason Mountain Mine are the most established operations.

## Emerald Hollow Mine (Hiddenite)

The only emerald mine in the US open to the public. Gem-quality emeralds, aquamarine, sapphire, garnet, tourmaline and topaz are found regularly. Three ways to collect: sluice mining, creek dredging, or wet digging.

## Spruce Pine Mining District

The Spruce Pine area in Mitchell County sits on the world's largest deposit of ultra-pure quartz and is intensely pegmatite-rich. The Pisgah National Forest around Crabtree Creek allows free collecting of beryl, aquamarine and quartz.

## Reed Gold Mine (Carolina Gold Belt)

The first documented gold find in the US happened at Reed Gold Mine in Cabarrus County in 1799. Free NC Historic Site with self-guided underground tours and $5 gold panning (March-November, Tue-Sat).
    `.trim(),
  },
  {
    id: 39,
    slug: "rockhounding-north-dakota",
    title: "Rockhounding North Dakota: Petrified Wood and the Badlands",
    subtitle: "The Badlands are harder to collect in than most people expect -- but the surrounding BLM land is fair game",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "3 min",
    hero: "\uD83D\uDCCD",
    tags: ["North Dakota", "petrified wood", "agate", "badlands", "BLM"],
    content: `
North Dakota's badlands landscape is spectacular, but the Theodore Roosevelt National Park designation means collecting is prohibited inside the park boundary. The surrounding BLM land is a different story.

## BLM Land (Badlands Petrified Wood)

The McKenzie and Billings county road cuts and BLM land surrounding Theodore Roosevelt NP expose the Sentinel Butte and Bullion Creek formations -- same geology as the park. Petrified wood in tan, brown and red, agate in stream gravels, and lignite chunks in road cuts are the primary finds. Walk gravel roads after rain when fresh material is exposed.

## Practical Notes

North Dakota's badlands are remote and the weather is extreme. Spring (May-June) and fall (September-October) are the best collecting seasons. Use GPS and download offline maps before leaving pavement. Rattlesnakes are present -- watch where you step.
    `.trim(),
  },
  {
    id: 40,
    slug: "rockhounding-ohio",
    title: "Rockhounding Ohio: Flint, Fossils and the Devonian Sea",
    subtitle: "Ohio's ancient seafloor is one of the most fossil-rich in the Midwest",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Ohio", "flint", "fossils", "Devonian", "trilobites", "brachiopods"],
    content: `
Ohio's flat terrain conceals a remarkable fossil record. The state sits on the remains of a warm Devonian sea that teemed with life 375 million years ago.

## Flint Ridge State Memorial

Ohio's state gemstone (Ohio flint) occurs in spectacular multicolored bands at Flint Ridge in Licking and Muskingum counties. This ancient Native American quarry site was used for over 10,000 years. Walking trails expose outcrops. Limited collecting of loose surface material only. A National Natural Landmark.

## Devonian Fossil Beds

The Devonian limestone formations exposed in quarries, road cuts and creek banks throughout central and western Ohio are packed with 375-million-year-old marine fossils. The Hamilton Formation near Cincinnati is particularly productive: brachiopods, crinoids, bryozoans, corals and trilobite fragments. Caesar Creek State Park Visitor Center in Warren County has a designated fossil collecting area at the spillway.

## Big Bottom (Licking County)

Road cuts along US 36 through Licking County expose Devonian formations at multiple levels. Surface collect loose fossils from road cut talus.
    `.trim(),
  },
  {
    id: 41,
    slug: "rockhounding-oregon",
    title: "Rockhounding Oregon: Sunstones, Thundereggs, Obsidian and Gold",
    subtitle: "Oregon has more variety per square mile than almost any other state",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "7 min",
    hero: "\uD83D\uDCCD",
    tags: ["Oregon", "sunstone", "thunderegg", "obsidian", "gold", "agate", "sapphire"],
    content: `
Oregon's geological variety is staggering. Volcanic fields produce obsidian, thundereggs and sunstones. The state's official gemstone is the sunstone -- the only copper-bearing feldspar in the world.

## Oregon Sunstone (BLM - Plush Desert)

Oregon sunstones are unique copper-bearing labradorite found nowhere else on Earth. BLM-designated free collecting areas at Rabbit Hills and Poker Rim near Plush allow up to 25 lbs/day. Surface collect loose crystals from the desert soil. Best after rain.

## Richardson's Rock Ranch (Thundereggs)

Oregon's state rock is the thunderegg -- rhyolite nodules with agate, jasper or chalcedony interiors. Richardson's Ranch on Highway 207 north of Madras charges just $0.10/lb. One of the best deals in US rockhounding. Operating since 1959.

## Glass Buttes Obsidian (BLM)

The only place in the world where multiple obsidian varieties occur together. Black, mahogany, rainbow, gold sheen and snowflake obsidian all found on this BLM volcanic hill 75 miles east of Bend. Surface collect -- 25 lbs/day. Wear gloves.

## Succor Creek (State Natural Area)

Spectacular high desert canyon with free rock collecting. Thundereggs, jasper, agate and petrified wood in the canyon walls and washes. Free camping on-site.
    `.trim(),
  },
  {
    id: 42,
    slug: "rockhounding-pennsylvania",
    title: "Rockhounding Pennsylvania: Williamsite, Fossils and the Delaware Valley Minerals",
    subtitle: "Pennsylvania sits at the heart of one of the most mineralogically rich corridors on the East Coast",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Pennsylvania", "williamsite", "serpentine", "fossils", "garnets", "gold"],
    content: `
Pennsylvania's geology spans from ancient Precambrian basement in the southeast to Paleozoic sedimentary sequences in the Appalachians.

## State Line Pits (Chester County)

The Pennsylvania side of the famous State Line mineral district is arguably the world's premier locality for williamsite -- a vivid apple-green variety of serpentine. The same geological zone that produced world-class chromite, brucite and magnetite in Maryland continues into Chester County. Best accessed with the Delaware Valley Mineralogical Society.

## Montour Preserve Fossil Pit (Danville)

One of the best free public fossil digs in Pennsylvania. A designated fossil collecting pit within the Montour Preserve exposes Mahantango Formation shale full of 380-million-year-old Devonian marine fossils. Split the gray shale with a flat-head screwdriver to reveal brachiopods, crinoids, corals and trilobite fragments. Open daily dawn to dusk.

## Penn Dixie Fossil Park (Hamburg Area)

Just across the New York border, Penn Dixie is an easy day trip. Devonian limestone beds packed with brachiopods, trilobites, crinoids and corals. $10-15/person, tools provided.
    `.trim(),
  },
  {
    id: 43,
    slug: "rockhounding-rhode-island",
    title: "Rockhounding Rhode Island: Bowenite and the Serpentine Belt",
    subtitle: "Rhode Island's state mineral is a jade-like stone found almost nowhere else",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "3 min",
    hero: "\uD83D\uDCCD",
    tags: ["Rhode Island", "bowenite", "serpentine", "chromite", "Providence County"],
    content: `
Rhode Island is the smallest state and has limited rockhounding -- but it produces a state mineral found almost nowhere else: bowenite, a compact antigorite serpentine that resembles jade.

## Bowenite (Providence County)

Rhode Island's state mineral is bowenite -- a compact translucent variety of antigorite serpentine that resembles nephrite jade. Named for geologist G.T. Bowen who first described it from Providence County in 1822. Light green to yellowish-green. Occurs in serpentinite bodies in Providence County. Lincoln Woods State Park area has serpentinite exposures where surface collecting is possible.

## The Broader Serpentine Belt

Rhode Island sits at the northeastern end of the same Appalachian serpentine belt that runs through Connecticut, New Jersey and Maryland. Understanding the belt's mineralogy puts Rhode Island's bowenite in context.

## Practical Notes

East Coast Gems and Minerals in Providence is the state's primary rock shop and a good source for regional information.
    `.trim(),
  },
  {
    id: 44,
    slug: "rockhounding-south-carolina",
    title: "Rockhounding South Carolina: Amethyst, Gold and the Carolina Slate Belt",
    subtitle: "South Carolina's crystalline Piedmont hosts some unexpected gem occurrences",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["South Carolina", "amethyst", "gold", "fossils", "Carolina Slate Belt"],
    content: `
South Carolina's rockhounding is centered on two geological zones: the Piedmont crystalline basement (gems and gold) and the Cretaceous coastal plain (fossils).

## Diamond Hill Mine (Amethyst)

Near Abbeville in the western Piedmont, Diamond Hill produces excellent amethyst crystals from quartz veins cutting Precambrian crystalline basement rocks. Fee-dig operation -- contact Diamond Hill Mine for current rates and scheduling.

## Carolina Gold Belt

The Carolina Slate Belt runs through the central Piedmont and was one of the most productive early gold districts in the US. The Haile Gold Mine in Lancaster County is one of the oldest continuously worked gold mines in the US (still active). The surrounding Lancaster County area has creek beds where recreational gold panning is possible.

## Coastal Plain Shark Teeth

The Edisto River and surrounding coastal plain drainages produce Miocene shark teeth and marine fossils. Public access at river crossings and boat landings.
    `.trim(),
  },
  {
    id: 45,
    slug: "rockhounding-south-dakota",
    title: "Rockhounding South Dakota: Fairburn Agates, Black Hills Minerals and Badlands Fossils",
    subtitle: "The Black Hills are a geological island in the Great Plains -- and a collector's paradise",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["South Dakota", "Fairburn agate", "gold", "fossils", "Black Hills", "rose quartz"],
    content: `
South Dakota packs remarkable geological diversity into its two halves: the Badlands exposing Oligocene fossil beds, and the Black Hills -- a Precambrian mountain range producing gold, silver, rose quartz and the famous Fairburn agates.

## Fairburn Agates

The most prized agate in North America. Tight fortification banding in vivid reds, oranges, creams and purples, found almost exclusively in the White River Formation of the Black Hills region. Surface collect from eroded draws and hillsides in Shannon and Fall River counties. Finding a quality Fairburn requires patience and a practiced eye.

## Black Hills Gold (Lead and Deadwood)

The Black Hills gold district produced legendary mineral wealth. Big Thunder Gold Mine near Keystone offers underground tours and gold panning. Real gold in the historic mining district.

## PaleoAdventures (Custer Area)

Guided fossil hunting expeditions in the Hell Creek and Chadron formations. PaleoAdventures takes participants to active fossil quarries where Oligocene mammals and occasional Cretaceous dinosaur material is found.

## Rose Quartz (Custer County)

The Precambrian pegmatites of the Black Hills produce world-class rose quartz -- some of the finest massive rose quartz in the US.
    `.trim(),
  },
  {
    id: 46,
    slug: "rockhounding-tennessee",
    title: "Rockhounding Tennessee: Paint Rock Agate, Fossils and Cave Country Minerals",
    subtitle: "The Cumberland Plateau hides a distinctive agate found almost nowhere else",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Tennessee", "paint rock agate", "fossils", "Ordovician", "fluorite", "Nashville Basin"],
    content: `
Tennessee's geology ranges from the ancient Precambrian basement of the Blue Ridge in the east to the Mississippian limestone of the Western Highland Rim.

## Paint Rock Agate (Cumberland Plateau)

One of Tennessee's most distinctive minerals -- paint rock agate is a banded chalcedony in warm reds, oranges, creams and yellows found almost exclusively in the Paint Rock Valley area of Sequatchie County and the Buffalo River area of Perry County. Collect from creek gravels along the Sequatchie River and road cuts exposing Mississippian limestone.

## Nashville Basin Ordovician Fossils

Central Tennessee's Nashville Basin exposes 450-million-year-old Ordovician limestone at the surface -- visible in nearly every highway road cut throughout Williamson, Rutherford, Wilson and surrounding counties. Brachiopods, crinoids, horn corals, bryozoans and trilobite fragments are abundant. No permit needed from public road rights-of-way.

## Coon Creek Science Center (Cretaceous)

The Coon Creek Formation in McNairy County is one of the most important Cretaceous fossil sites in the US. Mosasaur teeth, shark teeth, ammonites and mollusks from the ancient Mississippi Embayment Sea. Access through University of Memphis field trips.
    `.trim(),
  },
  {
    id: 47,
    slug: "rockhounding-texas",
    title: "Rockhounding Texas: Blue Topaz, Big Bend Agate and Lone Star Geology",
    subtitle: "Everything is bigger in Texas -- including the collecting areas",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Texas", "topaz", "agate", "Big Bend", "Llano Uplift", "fossils", "cinnabar"],
    content: `
Texas's geology spans from Precambrian basement to active Gulf Coast sediments. The Llano Uplift exposes gem-quality topaz deposits, while the Trans-Pecos region produces some of the most distinctive agates in the world.

## Llano Uplift Topaz (Mason County)

Texas blue topaz is the state gemstone, found almost exclusively in the Llano Uplift. Mason County is the heart of topaz country. The Highway 29 corridor between Llano and Mason has historically productive public road rights-of-way. Several private ranches also offer fee access.

## Big Bend Ranch State Park

Texas allows collecting for personal use -- pom-pom agate, Big Bend jasper, chalcedony roses, cinnabar (brilliant red mercury ore), and petrified wood throughout the Chihuahuan Desert. 2 lbs/person/day. Very remote -- full fuel tank essential.

## Mineral Wells Fossil Park

One of the only free public fossil collecting sites in Texas. The Mineral Wells area's Pennsylvanian limestone produces brachiopods, crinoids and marine invertebrates. Bring your own tools.

## Woodward Ranch (Plume Agate)

Near Alpine in the Trans-Pecos, Woodward Ranch is one of the finest plume agate deposits in the world. Feathery red, green and orange plume inclusions in translucent chalcedony. Fee per pound.
    `.trim(),
  },
  {
    id: 48,
    slug: "rockhounding-utah",
    title: "Rockhounding Utah: Topaz, Geodes, Dinosaurs and the High Desert",
    subtitle: "Utah has more free BLM collecting per square mile than almost anywhere in the US",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Utah", "topaz", "geodes", "dinosaurs", "fossils", "red beryl", "BLM"],
    content: `
Utah may have more public land open to free mineral collecting than any other state.

## Topaz Mountain (BLM - West Desert)

One of the most famous free rockhounding sites in the US. Sherry to golden topaz crystals erode from rhyolite cavities and litter the hillside 35 miles west of Delta in Juab County. Carefully split open rhyolite float rocks to find intact topaz-bearing vugs. Also find bixbyite, pseudobrookite and garnet. 7.5 lb/day BLM limit. Very remote -- 4WD recommended, bring water and fuel. Best October through May.

## Thomas Range (Red Beryl)

Adjacent to Topaz Mountain, the Thomas Range produces red beryl from rhyolite. Red beryl -- rarer than diamond -- is found in only a handful of locations worldwide. Utah produces the finest.

## Dugway Geode Beds (BLM)

Free geode hunting on BLM land in Utah's West Desert. Dig or surface-collect spherical geodes -- plain outside, crystals inside. Well-marked on BLM maps. Very remote -- best avoided in summer heat.

## Cleveland-Lloyd Dinosaur Quarry

One of the densest concentrations of Jurassic dinosaur bones ever found. Managed by the BLM and open to visitors. While collecting is prohibited, the exposed bone material is extraordinary to witness. Free admission.
    `.trim(),
  },
  {
    id: 49,
    slug: "rockhounding-vermont",
    title: "Rockhounding Vermont: Garnets, Gold and the Green Mountains",
    subtitle: "Vermont's metamorphic belt produces garnets and gold in stream gravels statewide",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "3 min",
    hero: "\uD83D\uDCCD",
    tags: ["Vermont", "garnet", "gold", "serpentine", "talc", "Green Mountains"],
    content: `
Vermont is underrated rockhounding territory. The Green Mountains' metamorphic core produces garnets and gold in stream gravels throughout the state.

## Belvidere Mountain (Garnets)

Vermont's Green Mountains expose some of the state's best garnet-bearing serpentinite and rodingite around Belvidere Mountain in Lamoille County. Pale green to yellowish-green grossular garnets as dodecahedral crystals up to 1 inch diameter in road cuts and stream exposures. Also the source of Vermont talc. Check Green Mountain National Forest regulations before collecting.

## Vermont River Gold Panning

Vermont rivers including the Ottauquechee, Black and Williams rivers carry alluvial gold from ancient hard rock deposits. Vermont allows casual collecting on public land with no permit required. Best after spring runoff (May-June).

## Practical Notes

Vermont is best for collectors already visiting for other reasons and wanting to add a geological dimension. The Vermont Geological Survey publishes excellent free maps of mineral occurrences statewide.
    `.trim(),
  },
  {
    id: 50,
    slug: "rockhounding-virginia",
    title: "Rockhounding Virginia: Fairy Stones, Amazon Stones and Appalachian Minerals",
    subtitle: "Virginia produces a mineral cross that forms naturally -- no carving required",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Virginia", "staurolite", "fairy stone", "amazonite", "topaz", "gold"],
    content: `
Virginia's geology spans from the ancient Blue Ridge basement to the sedimentary Appalachians. The state is best known for two remarkable minerals: naturally cross-shaped staurolite crystals and the vivid green amazonite from the Amelia pegmatites.

## Fairy Stone State Park (Staurolite)

Virginia's most unusual mineral -- staurolite crystals naturally twinned into perfect crosses during metamorphism. Found almost exclusively in Patrick County. The designated digging area allows collecting by scratching in the soil around outcrops. Best after rain. Cross shapes are formed by metamorphic twinning -- no carving involved.

## Morefield Mine (Amelia Courthouse)

One of the most productive mineral collecting sites on the East Coast, operating as a fee-dig since the 1920s. The Amelia pegmatite has produced over 80 identified mineral species. Sluice mine gravel for amazonite, blue topaz, beryl, tantalite-columbite and phenakite. Open March through November.

## Briar Fork (Goethite Pseudomorphs)

After rain, goethite pseudomorphs after pyrite wash out on stream banks in Buckingham County. Perfect metallic cube shapes in iron-stained sediment -- cubic iron oxide casts left after pyrite dissolved. Free, surface collect from public road shoulders after heavy rain.
    `.trim(),
  },
  {
    id: 51,
    slug: "rockhounding-washington",
    title: "Rockhounding Washington: Crystals, Petrified Wood, Fossils and Pacific Northwest Minerals",
    subtitle: "The Cascades and Columbia Basin offer wildly different geology -- and both are excellent",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "5 min",
    hero: "\uD83D\uDCCD",
    tags: ["Washington", "quartz crystal", "petrified wood", "fossils", "agates", "obsidian"],
    content: `
Washington State's geology is split by the Cascades into two radically different worlds. West of the Cascades: volcanic peaks and Pacific Coast geology. East: the Columbia Basin, ancient basalt flows and the high desert that produces some of the best agate and petrified wood in the Pacific Northwest.

## Hansen Creek Crystal Area (Snoqualmie NF)

One of Washington's most popular free crystal collecting areas. Quartz crystals -- clear, smoky and occasionally amethyst-tinted -- erode from pegmatite veins and concentrate in Hansen Creek in the Snoqualmie National Forest. 4WD recommended. Open when snow-free (typically June-October).

## Stonerose Interpretive Center (Republic)

One of the best fossil digs in the Pacific Northwest. The Stonerose site exposes 49-million-year-old Eocene lake deposits with beautifully preserved plant fossils: dawn redwood, gingko, alder and occasional fish and insect fossils. $5 admission includes tools and 3 fossils to keep. Open May-October.

## Saddle Mountain Petrified Wood (BLM)

Outstanding agatized petrified wood on BLM land in the Columbia Basin. 15-million-year-old Columbia River Basalt flows contain silicified logs in a rainbow of colors. 4WD recommended. 25 lb/day BLM limit.
    `.trim(),
  },
  {
    id: 52,
    slug: "rockhounding-west-virginia",
    title: "Rockhounding West Virginia: Quartz Crystals, Garnets and the Monongahela Forest",
    subtitle: "Almost entirely National Forest -- and all of it open to casual collecting",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["West Virginia", "quartz", "calcite", "garnets", "Monongahela National Forest"],
    content: `
West Virginia is dominated by the Monongahela National Forest and the Appalachian mountain ranges -- most of which is open to casual mineral collecting with no permit required.

## Monongahela National Forest (Quartz, Calcite, Garnets)

The Monongahela National Forest around Spruce Knob and Seneca Rocks is West Virginia's best free rockhounding area. Clear quartz crystals, calcite, dolomite and pyrite in road cuts and outcrops along Forest Service roads. The Cheat River and its tributaries carry quartz and calcite in their gravels. Legal without a permit for personal amounts.

## Greenbrier Limestone Geodes

The Greenbrier Limestone Formation in southeastern West Virginia is the same unit that produces geodes in Kentucky and Tennessee. Creek beds draining the Greenbrier limestone in Greenbrier and Pocahontas counties occasionally yield small geodes in dramatically beautiful mountain scenery.

## The Broader Context

West Virginia's Appalachian geology is primarily sedimentary with the National Forest making the state exceptional for accessibility. Park anywhere along a Forest Service road and start collecting.
    `.trim(),
  },
  {
    id: 53,
    slug: "rockhounding-wisconsin",
    title: "Rockhounding Wisconsin: Lake Superior Agates, Copper and the Great Lakes Shore",
    subtitle: "The Lake Superior shore is the best place to find Wisconsin's state gemstone",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "4 min",
    hero: "\uD83D\uDCCD",
    tags: ["Wisconsin", "Lake Superior agate", "copper", "basalt", "agates", "Apostle Islands"],
    content: `
Wisconsin's best rockhounding is concentrated along its Lake Superior shoreline in the northwest corner of the state.

## Lake Superior Agate Beaches (Amnicon Falls / Apostle Islands)

Wisconsin's Lake Superior shoreline from Superior east to the Apostle Islands is prime Lake Superior agate country. The red-orange banded agates concentrate in gravel bars at river mouths and on storm beaches. The Amnicon Falls State Park area in Douglas County exposes the same Precambrian basalt that originally hosted the agates. Best after high water events expose fresh material.

## Native Copper (Ashland County)

The same Precambrian copper lava flows that dominate Michigan's Keweenaw Peninsula extend underwater into Wisconsin. Beach collecting along the Ashland County shoreline occasionally produces small native copper nuggets.

## Mystic Moraine Minerals (Janesville)

2,000 sq ft mineral shop in Janesville with an excellent selection of Wisconsin minerals including Lake Superior agates. Also hosts gem and mineral shows.
    `.trim(),
  },
  {
    id: 54,
    slug: "rockhounding-wyoming",
    title: "Rockhounding Wyoming: Fossils, Jade, Agates and Cowboy Country Geology",
    subtitle: "Wyoming has some of the most accessible fossil collecting in the US",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Destinations",
    readTime: "6 min",
    hero: "\uD83D\uDCCD",
    tags: ["Wyoming", "fossils", "jade", "agates", "dinosaurs", "Green River", "fossil fish"],
    content: `
Wyoming's vast public lands and exceptional geology make it one of the best destinations in the US for both mineral and fossil collecting.

## Green River Formation Fossil Fish

The Eocene Green River Formation is one of the most celebrated fossil deposits in the world. 50-million-year-old freshwater lake beds preserve fish, insects, plants and occasional crocodilians in extraordinary detail. FossilEra Adventures, Fossil Fish Adventures and American Fossil all operate on private Green River Formation land and offer guided digs where you take home genuine 50-million-year-old fossil fish.

## Wyoming Dinosaur Center (Thermopolis)

The Wyoming Dinosaur Center operates supervised public digs at active excavation sites in the Morrison Formation. Work alongside professional paleontologists at real bone quarries. Full-day and half-day digs available -- advance booking required.

## Wyoming Jade (Green River Basin)

Wyoming is the largest jade producer in the US. The state gemstone is nephrite jade found primarily in the Green River Basin. Jade occurs as boulders and cobbles in Precambrian metamorphic rock on BLM land -- contact the Lander Field Office for current collecting areas.

## Sweetwater Agates

The Sweetwater River drainage in Fremont County produces exceptional agates and agatized material from Tertiary volcanic deposits. BLM land throughout the area is open to casual collecting.
    `.trim(),
  },
  {
    id: 55,
    slug: "top-5-fee-dig-sites-us",
    title: "Top 5 Fee-Dig Sites in the United States",
    subtitle: "The absolute best places to pay to dig -- and actually find something remarkable",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Guides",
    readTime: "5 min",
    hero: "\uD83D\uDDFA",
    tags: ["top 5", "fee dig", "best sites", "Crater of Diamonds", "Herkimer", "Emerald Hollow", "Himalaya Mine"],
    content: `
These are the five fee-dig sites in the United States that every serious rockhound should visit at least once. Ranked on a combination of what you can find, the quality of the experience, and the honest likelihood of going home with something significant.

## 1. Crater of Diamonds State Park -- Murfreesboro, Arkansas

The only public diamond mine in the world. You pay $10 adults, $6 children to search a 37-acre plowed field that is the eroded surface of an ancient volcanic pipe. Over 35,000 diamonds have been found since 1972 by ordinary visitors. The largest: the 40.23-carat Uncle Sam diamond found in 1924. A 9-carat diamond was found by a visitor in 2020.

The field is plowed regularly to bring fresh material to the surface. Experts at the park identify your finds -- for free -- and you keep everything. A quarter-carat gem diamond found here is worth far more than the $10 admission.

No other site in the world offers this experience. Number one without question.

## 2. Herkimer Diamond Mines -- Middleville, New York

Doubly-terminated quartz crystals of such perfection they were called diamonds by early settlers. You crack 500-million-year-old dolostone with a hammer and chisel and find crystals that look machine-cut growing naturally in small cavities. Some contain ancient water bubbles trapped half a billion years ago.

The experience is genuinely thrilling -- every rock you crack is a mystery box. Around $20 per day. Consistent, productive, and unlike anything else in the eastern US.

## 3. Emerald Hollow Mine -- Hiddenite, North Carolina

The only emerald mine in the United States open to public prospecting. Real emeralds, not seeded material. Also produces hiddenite (found almost exclusively here), aquamarine, sapphire, garnet, and topaz depending on which activity you choose -- sluicing ($5), creek dredging ($10), or wet digging ($20+).

The geological variety here is extraordinary. You might find an emerald or you might find a hiddenite worth ten times as much. Open year-round.

## 4. Himalaya Mine -- Mesa Grande, California

The most famous tourmaline mine in North America, in operation since 1898. You screen dump material from the actual working mine and keep everything. Also produces morganite, topaz, and lepidolite. Located in San Diego County wine country.

$75 per adult, Thursday/Saturday/Sunday only, book well in advance. The geological pedigree of this mine -- it supplied Tiffany's in New York -- gives every find historical weight.

## 5. Morefield Mine -- Amelia Courthouse, Virginia

Over 80 documented mineral species in a single pegmatite. Amazonite in vivid blue-green, naturally blue topaz (extremely rare), phenakite, beryl, tantalite-columbite. The Amelia County pegmatite belt has been producing exceptional specimens since the 1920s.

Around $20-30 per day. One of the best values on the East Coast and the most mineralogically diverse fee-dig in the eastern United States.
    `.trim(),
  },
  {
    id: 56,
    slug: "top-10-fee-dig-sites-us",
    title: "Top 10 Fee-Dig Sites in the United States",
    subtitle: "Expanding the list -- ten sites worth planning a trip around",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Guides",
    readTime: "8 min",
    hero: "\uD83D\uDDFA",
    tags: ["top 10", "fee dig", "best sites", "sapphire", "opal", "garnet", "tourmaline"],
    content: `
The top 5 are the absolute must-visits. These next five expand the list to cover the full geographic range of the US -- from Montana sapphires to Nevada opals to Montana fossils. A serious collector could plan a year of trips around this list.

## 1-5: See Our Top 5 List

Crater of Diamonds (AR), Herkimer Diamond Mines (NY), Emerald Hollow Mine (NC), Himalaya Mine (CA), Morefield Mine (VA).

## 6. Gem Mountain Sapphire Mine -- Philipsburg, Montana

Montana sapphires are unlike sapphires from anywhere else in the world. Pastel teal, cornflower blue, green, pink, and yellow colors found in the alluvial gravels of Rock Creek. Gem Mountain has operated since 1895 -- the oldest continuously operating sapphire mine in the US.

Buy a bucket of sapphire-bearing gravel ($20-85 depending on grade), screen it on-site with running water, keep everything. Many finds are facetable. The sapphires are real, the gravel is native, and Montana is spectacular. Open mid-May through mid-October.

## 7. Royal Peacock Opal Mine -- Virgin Valley, Nevada

Virgin Valley in northern Nevada is the premier domestic opal destination. The Royal Peacock is the most accessible fee-dig in the valley -- dig in the volcanic ash beds and find precious opals replacing ancient wood. Fire opals, crystal opals, and occasionally black opals.

Warning: Virgin Valley opals tend to craze (crack) as they dry out -- keep them in water until stabilized. $100-200 per day. Open June through October. Very remote, 3.5 hours from Winnemucca.

## 8. Benitoite Mining Company -- San Benito County, California

Benitoite is California's state gem and occurs commercially in exactly one place on Earth: the New Idria mining district in San Benito County. The characteristic blue gem fluoresces brilliant blue under shortwave UV. You also find neptunite, natrolite, and the rare mineral joaquinite.

$100 per adult, reservations essential (fill up months in advance). 4WD required for the 12-mile dirt road. One of the most unique gem experiences in the US.

## 9. Spencer Opal Mines -- Spencer, Idaho

Idaho is one of the few states that produces precious opal, and Spencer is the primary public access point. Dig in the volcanic rhyolite matrix for white precious opal with play-of-color. Around $10 per day. Far less visited than Virgin Valley and considerably more affordable. Open May through October.

## 10. Ruggles Mine -- Grafton, New Hampshire

The oldest open-pit mineral dig in the US, operating since 1803. An enormous terraced pit in Isinglass Mountain exposes muscovite mica in sheets up to 3 feet across, beryl, garnet, tourmaline, columbite, and the signature find: uranium minerals (autunite and torbernite) that glow brilliant yellow-green under shortwave UV.

$30 adults. Open late May through mid-October. Bring a UV light -- it transforms the experience. The uranium minerals are safe to handle briefly; wash hands after.
    `.trim(),
  },
  {
    id: 57,
    slug: "top-15-fee-dig-sites-us",
    title: "Top 15 Fee-Dig Sites in the United States",
    subtitle: "The complete ranked list -- a lifetime of rockhounding adventures",
    date: "May 2026",
    author: "Dig It Yourself",
    category: "Guides",
    readTime: "10 min",
    hero: "\uD83D\uDDFA",
    tags: ["top 15", "fee dig", "best sites", "complete list", "Arkansas", "Montana", "North Carolina", "California"],
    content: `
The full ranked list of the fifteen best fee-dig experiences in the United States. These are ordered by the combination of what you can find, how reliably you find it, the uniqueness of the experience, and the value for money.

## 1. Crater of Diamonds State Park -- Murfreesboro, Arkansas

$10 adults. The world's only public diamond mine. 35,000+ diamonds found since 1972. You keep everything. No other site like it exists anywhere on Earth.

## 2. Herkimer Diamond Mines -- Middleville, New York

~$20/day. Doubly-terminated quartz crystals of extraordinary perfection in 500-million-year-old dolostone. Some contain 500-million-year-old water. Consistently productive, endlessly rewarding.

## 3. Emerald Hollow Mine -- Hiddenite, North Carolina

From $5 (sluicing) to $20+ (wet digging). The only emerald mine in the US open to public prospecting. Also produces hiddenite, aquamarine, sapphire, garnet, and topaz. Exceptional variety, genuine finds.

## 4. Himalaya Mine -- Mesa Grande, California

$75/day. The most historic tourmaline mine in North America, supplying Tiffany's since 1898. Also morganite, topaz, lepidolite. Book well in advance.

## 5. Morefield Mine -- Amelia Courthouse, Virginia

~$20-30/day. 80+ mineral species. Amazonite, natural blue topaz, phenakite, beryl. Best mineralogical variety of any fee-dig on the East Coast.

## 6. Gem Mountain Sapphire Mine -- Philipsburg, Montana

$20-85/bucket. Montana sapphires in unique pastel colors. Native gravel, real sapphires. Operating since 1895. Open May-October.

## 7. Royal Peacock Opal Mine -- Virgin Valley, Nevada

$100-200/day. Premier domestic opal. Precious opals replacing fossil wood in volcanic ash. Remote and spectacular. June-October only.

## 8. Benitoite Mining Company -- San Benito County, California

$100/day. California's state gem, found in one place on Earth. Brilliant blue fluorescence under UV. Book months ahead.

## 9. Spencer Opal Mines -- Spencer, Idaho

~$10/day. Idaho precious opal in volcanic rhyolite. Accessible and affordable. Open May-October.

## 10. Ruggles Mine -- Grafton, New Hampshire

$30/adults. Operating since 1803. Mica, beryl, garnet, and uranium minerals glowing under UV. Open late May through mid-October.

## 11. Ron Coleman Mining -- Jessieville, Arkansas

~$25/day. Premier quartz crystal dig in the Mount Ida area -- the Quartz Crystal Capital of the World. Arkansas produces more piezoelectric quartz than anywhere else on Earth. Multiple dig sites. Open year-round.

## 12. Dig Maine Gems -- Poland Mining Camps, Maine

Call ahead for rates. Authentic Maine pegmatite -- the same geological terrain as the famous private mines that produced museum specimens now at the Smithsonian. Tourmaline, beryl, lepidolite, quartz.

## 13. Reed Gold Mine -- Midland, North Carolina

$5 gold panning (March-November). Free underground mine tours year-round. Site of America's first documented gold find (1799). Historical significance combined with real gold in the pan.

## 14. OceanView Mine -- Pala, California

$75/day. The only publicly accessible underground mine in the Pala Gem District -- the most storied gem district in California. Same geological district as the historic tourmaline and kunzite mines that supplied Tiffany's. Thursday/Saturday/Sunday only.

## 15. Wyoming Dinosaur Center Digs -- Thermopolis, Wyoming

Half and full day digs. Work alongside professional paleontologists at real active bone quarries. Fossils found become part of the museum collection for science, but participants receive replica casts. The only way for a member of the public to participate in real dinosaur excavation in the US.

---

## Honorable Mentions

**Graves Mountain, Georgia** -- lazulite, kyanite, rutile, pyrophyllite found nowhere else in the East. Open collecting weekends only (spring and fall). Free but requires advance planning through regional mineral clubs.

**Stonerose Interpretive Center, Republic, Washington** -- $5 for 49-million-year-old Eocene plant fossils, fish, and insects. Tools provided. One of the most productive fossil digs per dollar in the country.

**Caledonia Mine, Mass City, Michigan** -- native copper, silver-copper coinage metal, datolite, and epidote in authentic Michigan copper country. Reservation required. Upper Peninsula of Michigan.
    `.trim(),
  },
];

// ── COMPONENTS ──────────────────────────────────────────────────────────────
const styles = {
  root: {
    fontFamily: "Georgia, serif",
    background: "#ffffff",
    minHeight: "100vh",
    color: "#374151",
  },
  header: {
    background: "#ffffff",
    color: "#374151",
    padding: "0",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: "2px solid #6b7280",
  },
  headerInner: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  masthead: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  mastheadTitle: {
    fontSize: "clamp(10px, 2.5vw, 13px)",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#4b5563",
    lineHeight: 1,
  },
  mastheadSub: {
    fontSize: "8px",
    letterSpacing: "2px",
    color: "#9ca3af",
    textTransform: "uppercase",
  },
  navLink: {
    fontSize: "10px",
    letterSpacing: "1px",
    color: "#4b5563",
    textDecoration: "none",
    cursor: "pointer",
    padding: "5px 10px",
    border: "1px solid #6b7280",
    borderRadius: "4px",
    background: "#ffffff",
    fontFamily: "inherit",
    textTransform: "none",
  },
  main: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "32px 20px",
  },
  dividerLine: {
    border: "none",
    borderTop: "2px solid #6b7280",
    margin: "0 0 24px",
  },
  issueBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "9px",
    letterSpacing: "2px",
    color: "#9ca3af",
    marginBottom: 24,
    textTransform: "uppercase",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16,
    marginBottom: 40,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #d1d5db",
    borderTop: "3px solid #4b5563",
    padding: "16px",
    cursor: "pointer",
    transition: "background 0.1s",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  cardHero: {
    fontSize: 28,
    lineHeight: 1,
    marginBottom: 2,
  },
  cardCat: {
    fontSize: "9px",
    letterSpacing: "2px",
    color: "#6b7280",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: 1.3,
    color: "#374151",
  },
  cardSub: {
    fontSize: "12px",
    color: "#6b7280",
    lineHeight: 1.5,
    flexGrow: 1,
  },
  cardMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "9px",
    color: "#9ca3af",
    marginTop: 4,
    letterSpacing: "0.5px",
  },
  articleWrap: {
    maxWidth: 680,
    margin: "0 auto",
  },
  articleBack: {
    fontSize: "10px",
    letterSpacing: "1px",
    color: "#4b5563",
    cursor: "pointer",
    marginBottom: 24,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    textDecoration: "none",
    background: "none",
    border: "1px solid #6b7280",
    borderRadius: "4px",
    fontFamily: "inherit",
    padding: "5px 10px",
    textTransform: "none",
  },
  articleCat: {
    fontSize: "9px",
    letterSpacing: "3px",
    color: "#6b7280",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  articleTitle: {
    fontSize: "clamp(22px, 5vw, 34px)",
    fontWeight: "bold",
    lineHeight: 1.2,
    color: "#374151",
    marginBottom: 8,
  },
  articleSub: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "#6b7280",
    lineHeight: 1.5,
    marginBottom: 14,
    borderLeft: "3px solid #6b7280",
    paddingLeft: 10,
  },
  articleMeta: {
    display: "flex",
    gap: 12,
    fontSize: "9px",
    color: "#9ca3af",
    letterSpacing: "1px",
    marginBottom: 24,
    textTransform: "uppercase",
  },
  articleDivider: {
    border: "none",
    borderTop: "1px solid #d1d5db",
    margin: "24px 0",
  },
  prose: {
    fontSize: "17px",
    lineHeight: 1.85,
    color: "#374151",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 20,
  },
  tag: {
    fontSize: "9px",
    letterSpacing: "1px",
    color: "#6b7280",
    border: "1px solid #d1d5db",
    padding: "3px 8px",
    borderRadius: "4px",
  },
  footer: {
    background: "#f9fafb",
    borderTop: "2px solid #6b7280",
    color: "#9ca3af",
    textAlign: "center",
    padding: "20px",
    fontSize: "9px",
    letterSpacing: "2px",
    marginTop: 48,
    textTransform: "uppercase",
  },
};

// Render markdown-ish prose
function Prose({ text }) {
  const lines = text.split("\n");
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{ fontSize: "15px", fontWeight: "bold", color: "#374151", marginTop: 28, marginBottom: 8, letterSpacing: "1px", borderBottom: "1px solid #d1d5db", paddingBottom: 4 }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} style={{ fontSize: "11px", fontWeight: "bold", color: "#4b5563", marginTop: 20, marginBottom: 6, letterSpacing: "2px", textTransform: "uppercase" }}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <p key={i} style={{ fontWeight: "bold", marginBottom: 4, marginTop: 14, color: "#2c2416" }}>
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} style={{ marginLeft: 20, marginBottom: 6, lineHeight: 1.6 }}>
          {renderInline(line.slice(2))}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} style={{ height: 8 }} />);
    } else {
      elements.push(
        <p key={i} style={{ marginBottom: 0, lineHeight: 1.75 }}>
          {renderInline(line)}
        </p>
      );
    }
    i++;
  }
  return <div style={styles.prose}>{elements}</div>;
}

function renderInline(text) {
  // Bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**")
      ? <strong key={i}>{p.slice(2, -2)}</strong>
      : p
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────
export default function DigItYourselfBlog() {
  const [currentPost, setCurrentPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(POSTS.map(p => p.category).filter(Boolean)))];
  const filtered = activeCategory === "All" ? POSTS : POSTS.filter(p => p.category === activeCategory);

  if (currentPost) {
    return (
      <div style={styles.root}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <div style={styles.masthead}>
              <div style={styles.mastheadTitle}>DIG IT YOURSELF</div>
              <div style={styles.mastheadSub}>Field Notes & Guides</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="https://dig-it-yourself.netlify.app" target="_blank" rel="noopener noreferrer" style={styles.navLink}>Home</a>
              <button style={styles.navLink} onClick={() => window.open("https://dig-it-yourself-map.netlify.app", "_blank")}>
                ← Map
              </button>
            </div>
          </div>
        </header>

        {/* Article */}
        <main style={styles.main}>
          <div style={styles.articleWrap}>
            <button style={styles.articleBack} onClick={() => setCurrentPost(null)}>
              ← All Posts
            </button>
            <div style={styles.articleCat}>{currentPost.category}</div>
            <h1 style={styles.articleTitle}>{currentPost.title}</h1>
            <div style={styles.articleSub}>{currentPost.subtitle}</div>
            <div style={styles.articleMeta}>
              <span>{currentPost.date}</span>
              <span>·</span>
              <span>{currentPost.readTime} read</span>
              <span>·</span>
              <span>{currentPost.author}</span>
            </div>
            {IMAGE_MAP[currentPost.slug] && (
              <div style={{ marginBottom: 24 }}>
                <img src={IMAGE_MAP[currentPost.slug].url}
                  alt={IMAGE_MAP[currentPost.slug].caption}
                  crossOrigin="anonymous"
                  loading="lazy"
                  style={{ width: "100%", maxHeight: 380, objectFit: "cover", borderRadius: 2, border: "1px solid #d1d5db", display: "block" }} />
                <div style={{ fontSize: "9px", color: "#9ca3af", marginTop: 4, fontStyle: "italic" }}>
                  {IMAGE_MAP[currentPost.slug].caption} — {IMAGE_MAP[currentPost.slug].credit}
                </div>
              </div>
            )}
            <hr style={styles.articleDivider} />
            <Prose text={currentPost.content} />
            <div style={styles.tags}>
              {currentPost.tags.map(t => <span key={t} style={styles.tag}>#{t}</span>)}
            </div>
            <hr style={{ ...styles.articleDivider, marginTop: 40 }} />
            <button style={{ ...styles.articleBack, marginTop: 8 }} onClick={() => setCurrentPost(null)}>
              ← All Posts
            </button>
          </div>
        </main>

        <footer style={styles.footer}>
          DIG IT YOURSELF &nbsp;·&nbsp; FIELD NOTES FOR ROCKHOUNDS &nbsp;·&nbsp; 2026
        </footer>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.masthead}>
            <div style={styles.mastheadTitle}>DIG IT YOURSELF</div>
            <div style={styles.mastheadSub}>Field Notes for Rockhounds</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a href="https://dig-it-yourself.netlify.app" target="_blank" rel="noopener noreferrer" style={styles.navLink}>Home</a>
            <button style={styles.navLink} onClick={() => window.open("https://dig-it-yourself-map.netlify.app", "_blank")}>
              Open Map
            </button>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        {/* Issue bar */}
        <div style={styles.issueBar}>
          <span>Vol. 1 &nbsp;·&nbsp; May 2026</span>
          <span>{POSTS.length} articles</span>
        </div>
        <hr style={styles.dividerLine} />

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                fontSize: "10px", letterSpacing: "1px", padding: "5px 10px",
                background: activeCategory === cat ? "#4b5563" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "#4b5563",
                border: "1px solid #6b7280", borderRadius: "4px", cursor: "pointer",
                fontFamily: "inherit", textTransform: "none",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={styles.grid}>
          {filtered.map(post => (
            <div key={post.id} style={styles.card}
              onClick={() => setCurrentPost(post)}
              onMouseEnter={e => { e.currentTarget.style.background = "#f9fafb"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#ffffff"; }}>
              <div style={{ marginBottom: 8 }}><CategoryIcon category={post.category} size={24} /></div>
              <div style={styles.cardCat}>{post.category}</div>
              <div style={styles.cardTitle}>{post.title}</div>
              <div style={styles.cardSub}>{post.subtitle}</div>
              <div style={styles.cardMeta}>
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", padding: "40px 0", borderTop: "2px solid #d4c5a0" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#9c8866", marginBottom: 12, textTransform: "uppercase" }}>Find your next dig site</div>
          <button onClick={() => window.open("https://dig-it-yourself-map.netlify.app", "_blank")}
            style={{ background: "#4b5563", color: "#ffffff", border: "none", padding: "8px 20px", fontSize: "10px", letterSpacing: "1px", fontFamily: "inherit", cursor: "pointer", borderRadius: "4px", textTransform: "none" }}>
            Open the Interactive Map →
          </button>
        </div>
      </main>

      <footer style={styles.footer}>
        DIG IT YOURSELF &nbsp;·&nbsp; FIELD NOTES FOR ROCKHOUNDS &nbsp;·&nbsp; 2026
      </footer>
    </div>
  );
}