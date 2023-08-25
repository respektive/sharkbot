const SHARK_FACTS = [
    {
      "title": "Their “ears” are located inside their head.",
      "text": "Contrary to popular belief, sharks do have ears, although they aren’t visible like most species."
    },
    {
      "title": "Tiger sharks will eat anything.",
      "text": "Tiger sharks eat first and ask questions later. They love chewing so much that they’ll eat anything!"
    },
    {
      "title": "Not all sharks live in saltwater.",
      "text": "Don’t panic if you see a shark’s fin protruding in the lake because some sharks actually live in freshwater settings."
    },
    {
      "title": "Shark embryos attack each other.",
      "text": "Baby shark, doo doo doo doo doo doo. Some species of sharks are carnivorous in the womb. The first tiger shark pup to hatch will eat its siblings."
    },
    {
      "title": "The Greenland shark is the only species that can tolerate Arctic temperatures.",
      "text": "Greenland is actually full of ice (and Iceland is full of grassy plains.) The Greenland shark is equipped with special shark skin that allows it to withstand the subzero temperatures of the Arctic."
    },
    {
      "title": "Hammerheads have 360-degree vision.",
      "text": "With their eyes located on the edges of their T-shaped heads, hammerheads can see all around and have little to no blind spots.",
      "photo_url": "https://facts.net/wp-content/uploads/2019/10/photo-1531398574919-7ebcf655bb4c.jpg"
    },
    {
      "title": "The longest fish in the world is a type of shark.",
      "text": "The whale shark is among the largest animals in the world and is the longest fish species. They can grow as long as 32 feet and weigh up to 9 tons!"
    },
    {
      "title": "Sharks don’t eat humans.",
      "text": "A shark’s diet doesn’t contain humans!"
    },
    {
      "title": "Male blue sharks bite their partners while mating.",
      "text": "While mating, male sharks can get aggressive and bite their partners."
    },
    {
      "title": "Some sharks are pregnant for 2 years.",
      "text": "While some shark species have a gestation period that lasts for several months, spiny dogfish sharks carry their pups for almost two years."
    },
    {
      "title": "Other animals are actually deadlier than sharks.",
      "text": "Few animals are as terrifying to humans as sharks but hippos, deer, and cows are more deadly than sharks."
    },
    {
      "title": "When sharks jump out of the water, it’s called a “breach”.",
      "text": "Behold a majestic sight when a shark jumps out of the water called a “breach” to catch its meal.",
      "photo_url": "https://facts.net/wp-content/uploads/2019/10/maxresdefault.jpg"
    },
    {
      "title": "Female sharks can be impregnated by multiple partners at once.",
      "text": "Weird but definitely interesting information."
    },
    {
      "title": "Great white sharks are at the top of the food chain and have little need to evolve.",
      "text": "If lions are the kings of the jungle, then sharks are the kings of the ocean."
    },
    {
      "title": "Sharks used to be bigger.",
      "text": "The megalodon shark was one of the fiercest and largest predators to ever swim in the ocean before going extinct."
    },
    {
      "title": "You’re more likely to get bit by an angry New Yorker than a shark.",
      "text": "Anger a New Yorker on a time crunch and there’s a bigger chance they’ll bite you than you being attacked by a shark. What are the odds?"
    },
    {
      "title": "Sharks respond to a sound known as a \"yummy hum\".",
      "text": "It’s an infrasonic sound that injured fish make, drawing sharks to a yummy low-effort meal."
    },
    {
      "title": "Sharks prefer to attack men.",
      "text": "Studies show that sharks are nine times more likely to attack men than women."
    },
    {
      "title": "Sharks are cartilaginous.",
      "text": "What makes sharks different from fish is that their skeletons are made of cartilage instead of bone. Sharks are also different from fish because sharks have eyelids."
    },
    {
      "title": "Great white sharks only have two blind spots.",
      "text": "If you want to stay hidden from the great white shark, position yourself either right in the front of its snout (really scary) or directly behind its head (ah, this is a better alternative)."
    },
    {
      "title": "Some shark skin glows green.",
      "text": "Swell sharks have bio-fluorescent properties giving them green-glowing skin in the dark.",
      "photo_url": "https://facts.net/wp-content/uploads/2019/10/glow-dark-swell-shark.jpg"
    },
    {
      "title": "There's a shark that's 120 million years old.",
      "text": "Researchers in Thailand found a 120-million-year-old dinosaur fossil with shark-like teeth."
    },
    {
      "title": "Thresher sharks use their tails to slap their prey to death.",
      "text": "A shark’s teeth aren’t its only weapon. For thresher sharks, they use their tails to slap prey to death."
    },
    {
      "title": "Sharks have incredibly acute hearing.",
      "text": "Though they don’t have visible ears, sharks can easily “hear” their prey at distances of more than 800 feet (two football fields)."
    },
    {
      "title": "You can measure the age of a shark by counting the rings on its vertebrae.",
      "text": "Vertebrae contain concentric pairs of opaque and translucent bands. Like counting the rings on a tree, you can tell the age of a shark by counting the rings on its vertebrae."
    },
    {
      "title": "Not all sharks swim.",
      "text": "Bamboo sharks don’t swim. They use four different fins to walk across the ocean floor.",
      "photo_url": "https://facts.net/wp-content/uploads/2019/10/bamboo-shark.jpg"
    },
    {
      "title": "Some give birth to fully grown offspring.",
      "text": "The Bala shark gives birth to fully developed young."
    },
    {
      "title": "Baby sharks are born with all of their teeth.",
      "text": "Be wary of even baby sharks, because they’re born with all of their teeth and won’t hesitate to bite."
    },
    {
      "title": "Sharks mate and give birth at their birthplace.",
      "text": "Turning out to be sentimental creatures, sharks go back to their roots and mate where they were born."
    },
    {
      "title": "Scientists think sharks may be color blind.",
      "text": "These interesting fun facts include a shark’s similarities to cats."
    },
    {
      "title": "Sharks can swim quietly thanks to their skin.",
      "text": "Their skin is made up of tooth-like scales called “dermal denticles,” allowing water to pass through it without making much noise."
    },
    {
      "title": "Each whale shark’s spot pattern is unique as a fingerprint.",
      "text": "Like snowflakes, no two whale shark spot patterns are alike.",
      "photo_url": "https://facts.net/wp-content/uploads/2019/10/photo-1544552866-49ce864ff896.jpg"
    },
    {
      "title": "Their biggest threat is humans.",
      "text": "Sharks have few natural predators. Killer whales, seals, crocodiles, and larger sharks will occasionally eat sharks, but the biggest threat to sharks is humans."
    },
    {
      "title": "Sharks have different eye colors.",
      "text": "Sharks living deep in the water tend to have light-colored eyes to help them attract more light, while sharks living close to the surface have darker colored eyes to shield them from the light."
    },
    {
      "title": "Large sharks live longer than smaller sharks.",
      "text": "Because they’re higher in the food chain, large sharks are less likely to be eaten than smaller sharks."
    },
    {
      "title": "A shark’s weak spot is its gills.",
      "text": "Punching a shark’s snout is a bad idea. Should you miss, its mouth is right there. It’s better to aim for the gills."
    },
    {
      "title": "Great white sharks use body language to communicate with one another.",
      "text": "Some common communications involve zigzag swimming, head shaking, hunched backs, and head butts."
    },
    {
      "title": "Their teeth are immune to cavities.",
      "text": "Made with protective fluoride coating, sharks need not pay a visit to the dentist."
    },
    {
      "title": "Great white sharks eat 11 tons of food each year.",
      "text": "Don’t be fooled. Though these sharks eat tons of food, they can go as long as three months without eating."
    },
    {
      "title": "Female sharks lose their appetite before giving birth.",
      "text": "This is to prevent them from eating their own offspring."
    },
    {
      "title": "Most sharks hunt alone.",
      "text": "There are, however, some species like the scalloped hammerhead that hunt in packs."
    },
    {
      "title": "Angel sharks can ambush their prey in one-tenth of one second.",
      "text": "If you look away, you just might miss it."
    },
    {
      "title": "Sharks can go into a trance.",
      "text": "When you flip a shark upside down they go into a trance-like state called tonic immobility.",
      "photo_url": "https://facts.net/wp-content/uploads/2019/10/photo-1544552866-49ce864ff896.jpg"
    },
    {
      "title": "Sharks reproduce differently.",
      "text": "Sharks exhibit great diversity in their reproductive modes. There are oviparous (egg-laying) species and viviparous (live-bearing) species."
    },
    {
      "title": "The jaws of sharks are not attached to their skull.",
      "text": "They can move both jaws independently and even possess the ability to extend them."
    },
    {
      "title": "30% of sharks are close to extinction.",
      "text": "Hammerheads were the first species of shark on the endangered species list but blue sharks, highly coveted for their fins used in shark fin soup, are classified as Near Threatened."
    },
    {
      "title": "Most sharks live 20-30 years.",
      "text": "They used to live way longer (like over a hundred years) but today a shark’s lifespan averages at 20-30 years."
    },
    {
      "title": "All sharks are carnivorous.",
      "text": "Sharks have varying characteristics, but vegetarian is not one of them."
    },
    {
      "title": "Sharks can detect electricity.",
      "text": "Sharks have electroreceptor organs called “ampullae of Lorenzini,” and they use this to detect electromagnetic fields that all living creatures emit."
    },
    {
      "title": "Sharks have different kinds of teeth.",
      "text": "Some sharks have very thin, pointed teeth while others have triangular serrated teeth. Each has a unique tell-tale mark on its prey."
    }
]

module.exports = SHARK_FACTS