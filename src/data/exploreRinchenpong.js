import Ngagyur from '../assets/aroundhotel/Ngagyur.jpg';
import Rabindranath from '../assets/aroundhotel/Rabindranath1.jpg';
import RinchenpongMonastery from '../assets/aroundhotel/Rinchenpong_Monastery.jpg';
import PoisonLake from '../assets/aroundhotel/Poison_Lake.jpg';
import DakBungalow from '../assets/aroundhotel/Dak_Bungalow.jpg';
import ReshiMonastery from '../assets/aroundhotel/Reshi_Monastery.jpg';
import AjingFarm from '../assets/aroundhotel/Ajing_Farm.jpg';
import SribadamWaterfall from '../assets/aroundhotel/Sribadam_Waterfall.jpg';
import Bombhir from '../assets/aroundhotel/Bombhir.jpg';
import ChaayatalLake from '../assets/aroundhotel/Chaayatal_Lake.jpg';
import BermiokShiva from '../assets/aroundhotel/Bermiok_Shiva.jpg';
import SingshoreImg from '../assets/westSikkimPhoto/singshore-bridge.jpg';

export const RINCHENPONG_DESTINATIONS = [
  {
    id: 1,
    name: "Ngagyur Rinchen Chholing Monastery",
    description: "One of the most significant landmarks of Rinchenpong, this monastery reflects the rich Buddhist heritage and spiritual traditions of West Sikkim. Located just opposite Hotel Shivaratna, it welcomes visitors with traditional Himalayan architecture, colourful prayer flags, and a serene atmosphere — ideal to experience local culture and spirituality.",
    image: Ngagyur,
    distance: "50–100 m | 1-min walk",
  },
  {
    id: 2,
    name: "Rabindranath Van",
    description: "Located directly opposite Hotel Shivaratna, Rabindranath Van is a peaceful natural retreat dedicated to Nobel Laureate Rabindranath Tagore. Surrounded by greenery and beautiful mountain views, the park offers a relaxing environment for visitors to enjoy nature, capture photographs, and spend peaceful moments.",
    image: Rabindranath,
    distance: "50 m | 1-min walk",
  },
  {
    id: 3,
    name: "Rinchenpong Monastery (Sang Ngag Yangtse)",
    description: "Established in 1730, this revered Buddhist sanctuary — the third oldest in the region — is approached via a picturesque stone pathway through vibrant green lawns, framed by towering pine forests. It houses a globally rare, sacred statue of the Ati Buddha in meditative Yab-Yum posture, with breathtaking panoramic views of Mount Kanchenjunga.",
    image: RinchenpongMonastery,
    distance: "1.8 km | 6 min drive",
  },
  {
    id: 4,
    name: "Poison Lake (Bikh Pokhri)",
    description: "Hidden within the peaceful forests of Rinchenpong, Poison Lake is one of the region's most mysterious attractions. According to local folklore, the lake was used to poison invading armies in ancient conflicts. A beautiful forest trail leads visitors to this quiet natural wonder, where legend blends with untouched wilderness.",
    image: PoisonLake,
    distance: "2 km | 25–30 min walk",
  },
  {
    id: 5,
    name: "Dak Bungalow Viewpoint",
    description: "A historic heritage site of Rinchenpong, the Dak Bungalow offers spectacular views of the Himalayan ranges, surrounding valleys, and lush green landscapes. Its peaceful atmosphere and old-world charm make it a favourite destination for visitors looking to enjoy sunrise, sunset, and breathtaking mountain panoramas.",
    image: DakBungalow,
    distance: "1 km | 12–15 min walk",
  },
  {
    id: 6,
    name: "Reshi Monastery",
    description: "Nestled amidst beautiful forests, Reshi Monastery is a peaceful spiritual destination known for its calm surroundings and natural beauty. The scenic forest route to the monastery allows visitors to experience fresh mountain air, lush greenery, and the deep tranquillity of the Himalayan landscape.",
    image: ReshiMonastery,
    distance: "4 km | 45–60 min walk",
  },
  {
    id: 7,
    name: "Ajing Farm & Winery",
    description: "Ajing Farm is a unique attraction in West Sikkim, famous for its locally produced fruit wines and traditional winemaking practices. Visitors can explore the farm, discover local flavours, and enjoy scenic countryside views surrounded by the natural beauty of the Himalayan hills.",
    image: AjingFarm,
    distance: "8 km | 20–25 min drive",
  },
  {
    id: 8,
    name: "Sribadam Waterfall",
    description: "Surrounded by pine forests and lush greenery, Sribadam Waterfall is a hidden gem offering a refreshing escape into nature. The peaceful environment, flowing waters, and scenic surroundings make it perfect for photography, relaxation, and spending quality time with loved ones.",
    image: SribadamWaterfall,
    distance: "12 km | 25–30 min drive",
  },
  {
    id: 9,
    name: "Bombhir Natural Mineral Spring",
    description: "Bombhir is famous for its naturally flowing mineral-rich spring water emerging directly from the mountains. Travellers stop here to drink fresh spring water, refill bottles, and experience this unique natural attraction. The continuously flowing stream has also become popular as a natural 'free car wash' for passing vehicles.",
    image: Bombhir,
    distance: "18 km | 35–40 min drive",
  },
  {
    id: 10,
    name: "Chaayatal Lake",
    description: "A beautiful high-altitude lake surrounded by forests and mountains, Chaayatal is a peaceful destination connected with local legends of the Subba King. Visitors can enjoy nature walks, photography, birdwatching, and the untouched beauty of the Himalayan surroundings.",
    image: ChaayatalLake,
    distance: "30 km | 60–70 min drive",
  },
  {
    id: 11,
    name: "Bermiok Shiva Cave",
    description: "A sacred pilgrimage destination dedicated to Lord Shiva, Bermiok Shiva Cave attracts devotees and travellers seeking spiritual experiences. Surrounded by peaceful forests and mountain landscapes, the cave offers a unique blend of faith, nature, and rich local traditions.",
    image: BermiokShiva,
    distance: "30 km | 60–70 min drive",
  },
];

export const NEARBY_PLACES_CATEGORIES = ["All", "Spiritual", "Nature", "Viewpoints", "Adventure"];

export const NEARBY_PLACES = [
  {
    id: 1,
    name: "Ngagyur Rinchen Chholing Monastery",
    description: "Ancient monastery opposite the hotel with stunning architecture and prayer flags.",
    image: Ngagyur,
    distance: "50–100 m",
    category: "Spiritual"
  },
  {
    id: 2,
    name: "Rabindranath Van",
    description: "Peaceful nature park dedicated to Nobel Laureate Rabindranath Tagore.",
    image: Rabindranath,
    distance: "50 m",
    category: "Nature"
  },
  {
    id: 3,
    name: "Rinchenpong Monastery",
    description: "Third oldest monastery in Sikkim, established in 1730, housing a rare Ati Buddha statue.",
    image: RinchenpongMonastery,
    distance: "1.8 km",
    category: "Spiritual"
  },
  {
    id: 4,
    name: "Poison Lake (Bikh Pokhri)",
    description: "Mysterious forest lake steeped in ancient local legend and natural beauty.",
    image: PoisonLake,
    distance: "2 km",
    category: "Nature"
  },
  {
    id: 5,
    name: "Dak Bungalow Viewpoint",
    description: "Historic heritage site with spectacular views of the Himalayan ranges.",
    image: DakBungalow,
    distance: "1 km",
    category: "Viewpoints"
  },
  {
    id: 6,
    name: "Singshore Bridge",
    description: "One of the highest suspension bridges in Asia — a must-visit for adventure seekers.",
    image: SingshoreImg,
    distance: "~25 km",
    category: "Adventure"
  },
  {
    id: 7,
    name: "Sribadam Waterfall",
    description: "Hidden waterfall surrounded by beautiful pine forests — perfect for photography.",
    image: SribadamWaterfall,
    distance: "12 km",
    category: "Nature"
  },
  {
    id: 8,
    name: "Chaayatal Lake",
    description: "High-altitude lake connected with legends of the Subba King, ideal for birdwatching.",
    image: ChaayatalLake,
    distance: "30 km",
    category: "Nature"
  },
];
