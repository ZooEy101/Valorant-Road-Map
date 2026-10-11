/* VALORANT Road Map — map data (plain global, no modules).
   Order matches the Maps index. `image` is null when no loading image exists (Abyss).
   `examples` are two strategy screenshots per map (generic, not map-specific captions). */
window.VRM_MAPS = [
  {
    slug: "corrode",
    name: "Corrode",
    image: "assets/img/maps/corrode.webp",
    description: "Corrode is a two-site map where most decisions come from which path your team takes to each site. Learn the main routes from spawn before you commit utility. Tip: call out early information about where the enemy is coming from so your team can switch sites in time.",
    examples: ["assets/img/maps/examples/example-01.webp", "assets/img/maps/examples/example-02.webp"]
  },
  {
    slug: "haven",
    name: "Haven",
    image: "assets/img/maps/haven.webp",
    description: "Haven has three spike sites, A, B and C, so defenders must split their attention across the map. Attackers win rounds by probing for weak spots and rotating quickly between sites. Tip: as a defender, keep one flexible player who can shift to whichever site the attackers commit to.",
    examples: ["assets/img/maps/examples/example-03.webp", "assets/img/maps/examples/example-04.webp"]
  },
  {
    slug: "lotus",
    name: "Lotus",
    image: "assets/img/maps/lotus.webp",
    description: "Lotus has three sites, A, B and C, like Haven, but its rotating doors change how fast teams can move between them. Watch the doors as the round develops, since they open new paths. Tip: when a door opens, check the nearest site before rotating away from your current position.",
    examples: ["assets/img/maps/examples/example-05.webp", "assets/img/maps/examples/example-06.webp"]
  },
  {
    slug: "abyss",
    name: "Abyss",
    image: "assets/img/maps/abyss.webp",
    description: "Abyss is an open two-site map with no boundary walls, so players can fall off the edges and be eliminated. It rewards careful movement along ledges and jumping paths. Tip: knockback and displacement abilities can win fights here, so learn which enemy agents can use them.",
    examples: ["assets/img/maps/examples/example-07.webp", "assets/img/maps/examples/example-08.webp"]
  },
  {
    slug: "fracture",
    name: "Fracture",
    image: "assets/img/maps/fracture.webp",
    description: "Fracture is an H-shaped map where defenders spawn in the center and attackers spawn on opposite ends. Long ziplines run under the defender spawn, letting attackers pinch defenders from both sides. Tip: as a defender, watch both sides at once and call out when attackers start moving.",
    examples: ["assets/img/maps/examples/example-09.webp", "assets/img/maps/examples/example-10.webp"]
  },
  {
    slug: "icebox",
    name: "Icebox",
    image: "assets/img/maps/icebox.webp",
    description: "Icebox is an extremely vertical two-site map with many angles and tight sightlines. Smoking off lines of sight is almost required before you plant or push a site. Tip: controllers such as Viper are strong here, and you should be careful when peeking from high ground.",
    examples: ["assets/img/maps/examples/example-11.webp", "assets/img/maps/examples/example-12.webp"]
  },
  {
    slug: "breeze",
    name: "Breeze",
    image: "assets/img/maps/breeze.webp",
    description: "Breeze is a two-site map with wide-open sites and very long sightlines. Gunfights at range matter more here than close-quarter corners. Tip: use smokes to cut the long angles before you push, and avoid standing alone in open lanes.",
    examples: ["assets/img/maps/examples/example-13.webp", "assets/img/maps/examples/example-14.webp"]
  },
  {
    slug: "split",
    name: "Split",
    image: "assets/img/maps/split.webp",
    description: "Split is a two-site map with A and B sites, high verticality, narrow choke points and a dominant Mid area. Control of Mid decides most early fights for both teams. Tip: plan your lanes through Mid early, since enemies often rotate toward the site you cleared last.",
    examples: ["assets/img/maps/examples/example-15.webp", "assets/img/maps/examples/example-16.webp"]
  },
  {
    slug: "pearl",
    name: "Pearl",
    image: "assets/img/maps/pearl.webp",
    description: "Pearl is an underwater city with two sites, A and B, linked by a complex, interconnected Mid plaza. Most early fights happen in Mid, so learn its connections first. Tip: keep an eye on Mid when you are holding a site, because enemies can cut across to rotate.",
    examples: ["assets/img/maps/examples/example-17.webp", "assets/img/maps/examples/example-18.webp"]
  },
  {
    slug: "sunset",
    name: "Sunset",
    image: "assets/img/maps/sunset.webp",
    description: "Sunset is a traditional three-lane map with two sites, A and B, and it focuses heavily on Mid control. Taking Mid gives your team the fastest access to either site. Tip: trade information early and do not rush a lane alone when the enemy holds Mid.",
    examples: ["assets/img/maps/examples/example-19.webp", "assets/img/maps/examples/example-20.webp"]
  },
  {
    slug: "bind",
    name: "Bind",
    image: "assets/img/maps/bind.webp",
    description: "Bind has two sites, A and B, and no traditional middle lane. Teleporters are the fast way to rotate, but they are noisy, so use them to catch defenders off guard. Tip: commit to one execute path early and call out when a teleporter is used.",
    examples: ["assets/img/maps/examples/example-01.webp", "assets/img/maps/examples/example-02.webp"]
  },
  {
    slug: "ascent",
    name: "Ascent",
    image: "assets/img/maps/ascent.webp",
    description: "Ascent is a classic two-site map with three lanes, and its heavy doors at A and B can be opened, closed or destroyed. Control of Mid lets your team rotate to either site or wrap behind defenders. Tip: take Mid early, and use the doors to control who can see into a site.",
    examples: ["assets/img/maps/examples/example-03.webp", "assets/img/maps/examples/example-04.webp"]
  }
];
