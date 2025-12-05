export interface Nft {
  token_id: string;
  name: string;
  description: string;
  image: string;
  external_url: string;
  animation_url: string | null;
  background_color: string;
  attributes: Array<Record<string, any>>;
}
export interface NftOwner {
  wallet: string;
}
export interface NftCreator {
  name: string;
  wallet: string;
}
export interface NftAttribute {
  trait_type: string;
  value: string;
}
export interface Nft {
  token_id: string;
  name: string;
  description: string;
  image: string;
  external_url: string;
  animation_url: string | null;
  background_color: string;
  attributes: Array<Record<string, any>>;
  creator: NftCreator;
  owner: NftOwner;
  price: string;
  status: string;
}

export const nfts: Nft[] = [
  {
    token_id: "1",
    name: "Galactic Dream",
    description: "A sweeping galaxy swirling across a nebula of dreams.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/galactic-dream",
    animation_url: null,
    background_color: "000010",
    attributes: [
      { trait_type: "Theme", value: "Space" },
      { trait_type: "Color", value: "Purple" },
      { trait_type: "Rarity", value: "Legendary" },
    ],
    creator: {
      name: "Jane Doe",
      wallet: "0xAbC1234567890abcdef1234567890ABcDEF1234"
    },
    owner: { wallet: "0xAbC1234567890abcdef1234567890ABcDEF1234" },
    price: "1.2 ETH",
    status: "On Sale"
  },
  {
    token_id: "2",
    name: "Synthwave Cat",
    description: "A retro cat glowing in synthwave delight.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/synthwave-cat",
    animation_url: null,
    background_color: "191970",
    attributes: [
      { trait_type: "Species", value: "Cat" },
      { trait_type: "Color", value: "Teal" },
      { trait_type: "Style", value: "Synthwave" }
    ],
    creator: {
      name: "CryptoKat",
      wallet: "0xbF77aa9286ee1247ABC996fabc1234A9CDEF12FF"
    },
    owner: { wallet: "0x1111222233334444555566667777888899990000" },
    price: "0.7 ETH",
    status: "Owned"
  },
  {
    token_id: "3",
    name: "Neon Isles",
    description: "Digital islands illuminated by neon light on endless sea.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/neon-isles",
    animation_url: null,
    background_color: "00CCFF",
    attributes: [
      { trait_type: "Theme", value: "Neon" },
      { trait_type: "Location", value: "Isles" },
      { trait_type: "Ambience", value: "Night" },
    ],
    creator: {
      name: "IslandMaker",
      wallet: "0x1234FEDAB9876543210abcdefffaa01234567890"
    },
    owner: { wallet: "0x1234FEDAB9876543210abcdefffaa01234567890" },
    price: "1.8 ETH",
    status: "On Sale"
  },
  {
    token_id: "4",
    name: "Pixel Persona",
    description: "Pixelated face emerging from a dawn of color.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/pixel-persona",
    animation_url: null,
    background_color: "FEED83",
    attributes: [
      { trait_type: "Style", value: "Pixel Art" },
      { trait_type: "Mood", value: "Cheerful" }
    ],
    creator: {
      name: "Artchitect",
      wallet: "0x99887766554433221100ffeeccdd001122334455"
    },
    owner: { wallet: "0x0aabbbcccdddeeeff11122334455667788990001" },
    price: "0.6 ETH",
    status: "Owned"
  },
  {
    token_id: "5",
    name: "Sunset Highway",
    description: "Orange skies and endless highways.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/sunset-highway",
    animation_url: null,
    background_color: "FF8800",
    attributes: [
      { trait_type: "Scene", value: "Highway" },
      { trait_type: "Time", value: "Sunset" }
    ],
    creator: {
      name: "RoadRunner",
      wallet: "0xDEADbeef1234567890ABCDEFabcDEF12345678AB"
    },
    owner: { wallet: "0xDEADbeef1234567890ABCDEFabcDEF12345678AB" },
    price: "0.9 ETH",
    status: "On Sale"
  },
  {
    token_id: "6",
    name: "Quantum Rush",
    description: "Particles racing through the digital void.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/quantum-rush",
    animation_url: null,
    background_color: "222222",
    attributes: [
      { trait_type: "Theme", value: "Science" },
      { trait_type: "Motion", value: "Fast" }
    ],
    creator: {
      name: "Qubitz",
      wallet: "0x1c3A784B470efaAA780D12345FaBc99b98765eeb"
    },
    owner: { wallet: "0xADEBEEF1234567890abcdAAADDDEEEEEff894001" },
    price: "2.4 ETH",
    status: "On Sale"
  },
  {
    token_id: "7",
    name: "Cyber Lotus",
    description: "A cybernetic lotus blooming with code.",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/cyber-lotus",
    animation_url: null,
    background_color: "9C27B0",
    attributes: [
      { trait_type: "Plant", value: "Lotus" },
      { trait_type: "Style", value: "Cyber" }
    ],
    creator: {
      name: "Neon Monk",
      wallet: "0x222212345fabC9876dE11aaBBb123FFF22334567"
    },
    owner: { wallet: "0x9999111122223333444455556666777788889999" },
    price: "1.1 ETH",
    status: "On Sale"
  },
  {
    token_id: "8",
    name: "Rainbow Avenue",
    description: "Vibrant avenue lit by rainbow streetlights.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3d37?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/rainbow-avenue",
    animation_url: null,
    background_color: "56CCF2",
    attributes: [
      { trait_type: "Color", value: "Rainbow" },
      { trait_type: "Scene", value: "Avenue" },
    ],
    creator: {
      name: "PRISM",
      wallet: "0xa0b1c2d3e4f56789101112131415161718192021"
    },
    owner: { wallet: "0x22223334445556667777888899990000aaaabbbb" },
    price: "0.5 ETH",
    status: "Owned"
  },
  {
    token_id: "9",
    name: "Oceanic Code",
    description: "Surreal ocean waves intertwined with flowing code.",
    image: "https://images.unsplash.com/photo-1465101045738-34df7c972c31?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/oceanic-code",
    animation_url: null,
    background_color: "005577",
    attributes: [
      { trait_type: "Theme", value: "Ocean" },
      { trait_type: "Detail", value: "Code" }
    ],
    creator: {
      name: "DeepDev",
      wallet: "0x6655443322110099887766554433211100aa1234"
    },
    owner: { wallet: "0x6655443322110099887766554433211100aa1234" },
    price: "0.8 ETH",
    status: "On Sale"
  },
  {
    token_id: "10",
    name: "Infinite Library",
    description: "Endless shelves of ancient and digital tomes.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28cb?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/infinite-library",
    animation_url: null,
    background_color: "cdc6ae",
    attributes: [
      { trait_type: "Concept", value: "Library" },
      { trait_type: "Detail", value: "Infinite" }
    ],
    creator: {
      name: "LibraChain",
      wallet: "0x8888999911112233445566778899aabbccddeeff"
    },
    owner: { wallet: "0x8888999911112233445566778899aabbccddeeff" },
    price: "3.0 ETH",
    status: "On Sale"
  },
  {
    token_id: "11",
    name: "Zero Gravity",
    description: "Astronauts dancing in a void of infinite potential.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/zero-gravity",
    animation_url: null,
    background_color: "2c3a50",
    attributes: [
      { trait_type: "Scene", value: "Space" },
      { trait_type: "Motion", value: "Floating" }
    ],
    creator: {
      name: "AstroZero",
      wallet: "0x0A1B2C3d4E5F60718293aBcD4e5F60718293ABCD"
    },
    owner: { wallet: "0x0A1B2C3d4E5F60718293aBcD4e5F60718293ABCD" },
    price: "1.6 ETH",
    status: "Owned"
  },
  {
    token_id: "12",
    name: "Pastel Dunes",
    description: "Dreamy pastel dunes under soft sunlight.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/pastel-dunes",
    animation_url: null,
    background_color: "f7d8c5",
    attributes: [
      { trait_type: "Environment", value: "Desert" },
      { trait_type: "Palette", value: "Pastel" }
    ],
    creator: {
      name: "Sandsmith",
      wallet: "0x70acBADB0d0CFf2aB3cDeF1E1E0e0cFax789afBa"
    },
    owner: { wallet: "0x70acBADB0d0CFf2aB3cDeF1E1E0e0cFax789afBa" },
    price: "0.4 ETH",
    status: "On Sale"
  },
  {
    token_id: "13",
    name: "Starlit City",
    description: "City skyline beneath a blanket of glowing stars.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/starlit-city",
    animation_url: null,
    background_color: "011638",
    attributes: [
      { trait_type: "Scene", value: "City" },
      { trait_type: "Time", value: "Night" }
    ],
    creator: {
      name: "Neon Architect",
      wallet: "0xeF23AFFCa9b0aEfAffCa1bABeE33cDDdbb89C4E2"
    },
    owner: { wallet: "0xbbccddee11223344556677889900aabbccddeeff" },
    price: "2.2 ETH",
    status: "On Sale"
  },
  {
    token_id: "14",
    name: "Echoed Reality",
    description: "A cracked reality reflecting endless possibilities.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/echoed-reality",
    animation_url: null,
    background_color: "57516c",
    attributes: [
      { trait_type: "Concept", value: "Reflection" },
      { trait_type: "Style", value: "Surreal" }
    ],
    creator: {
      name: "MirageDev",
      wallet: "0x23BcFA91CC89bb112200DeFaBC123464De025e82"
    },
    owner: { wallet: "0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead" },
    price: "3.5 ETH",
    status: "Owned"
  },
  {
    token_id: "15",
    name: "Bit Depth",
    description: "A vibrant world reduced to limited color depths.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/bit-depth",
    animation_url: null,
    background_color: "1a1423",
    attributes: [
      { trait_type: "Palette", value: "8-bit" },
      { trait_type: "Style", value: "Retro" }
    ],
    creator: {
      name: "TerraByte",
      wallet: "0xaBC111EEDDBB22334455aabbccDDEEaaB2223333"
    },
    owner: { wallet: "0xaBC111EEDDBB22334455aabbccDDEEaaB2223333" },
    price: "0.3 ETH",
    status: "On Sale"
  },
  {
    token_id: "16",
    name: "Frozen Pulse",
    description: "A heart of ice shimmering in digital frost.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/frozen-pulse",
    animation_url: null,
    background_color: "c8e6f5",
    attributes: [
      { trait_type: "Theme", value: "Frozen" },
      { trait_type: "Mood", value: "Calm" }
    ],
    creator: {
      name: "Polaris",
      wallet: "0x6731aA9977cccBABEfffffff123456789abcabcd"
    },
    owner: { wallet: "0xAFFEED1111222233334444555566667777888899" },
    price: "1.25 ETH",
    status: "Owned"
  },
  {
    token_id: "17",
    name: "Utopia Reframed",
    description: "A futuristic city reframed with vibrant geometry.",
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/utopia-reframed",
    animation_url: null,
    background_color: "00ffc3",
    attributes: [
      { trait_type: "Theme", value: "Utopia" },
      { trait_type: "Style", value: "Abstract" }
    ],
    creator: {
      name: "FrameWorx",
      wallet: "0x88881234abcdABba9876543210fedcba4321ABCD"
    },
    owner: { wallet: "0x88881234abcdABba9876543210fedcba4321ABCD" },
    price: "4.0 ETH",
    status: "On Sale"
  },
  {
    token_id: "18",
    name: "Prism Portal",
    description: "Portal to new dimensions split in a prism.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/prism-portal",
    animation_url: null,
    background_color: "f46a6a",
    attributes: [
      { trait_type: "Concept", value: "Portal" },
      { trait_type: "Color", value: "Prismatic" }
    ],
    creator: {
      name: "Reflex",
      wallet: "0xbbbcbbb999FfEEDD2323ABCCDD2222FFFb6B6b6B"
    },
    owner: { wallet: "0xbbbcbbb999FfEEDD2323ABCCDD2222FFFb6B6b6B" },
    price: "2.9 ETH",
    status: "On Sale"
  },
  {
    token_id: "19",
    name: "Meta Meadows",
    description: "Blades of grass in digital meadows swaying in the ether.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/meta-meadows",
    animation_url: null,
    background_color: "78C850",
    attributes: [
      { trait_type: "Landscape", value: "Meadow" },
      { trait_type: "Mood", value: "Peaceful" }
    ],
    creator: {
      name: "DigiAgro",
      wallet: "0xFACEEA1234567890aBCD12345678901abcdef123"
    },
    owner: { wallet: "0x1122334455667788990011223344556677889900" },
    price: "0.95 ETH",
    status: "Owned"
  },
  {
    token_id: "20",
    name: "Aurora Drop",
    description: "Liquid auroras dripping over midnight tundra.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28cd?auto=format&fit=crop&w=500&q=80",
    external_url: "https://example-nft.com/aurora-drop",
    animation_url: null,
    background_color: "16213e",
    attributes: [
      { trait_type: "Sky", value: "Aurora" },
      { trait_type: "Effect", value: "Liquid" }
    ],
    creator: {
      name: "PolarGaze",
      wallet: "0xEeFF2233445566778899aabbccddAaFbEdCc49ab"
    },
    owner: { wallet: "0xEeFF2233445566778899aabbccddAaFbEdCc49ab" },
    price: "2.1 ETH",
    status: "On Sale"
  }
];

