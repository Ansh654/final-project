export interface Festival {
  name: string;
  month: string;
  description: string;
}

export interface StateData {
  id: string;
  name: string;
  culture: string;
  history: string;
  festivals: Festival[];
  images: string[];
  popularPlaces: string[];
}

export const statesData: StateData[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    culture: 'Known as the Land of Kings, Rajasthan is famous for its royal heritage, colorful festivals, folk music, dance forms like Ghoomar and Kalbelia, traditional handicrafts, and magnificent palaces. The state is renowned for its hospitality, vibrant turbans, and desert culture.',
    history: 'Rajasthan has a glorious history spanning over 1000 years. It was ruled by various Rajput clans including the Sisodia, Chauhan, and Rathore dynasties. The region witnessed numerous battles, including those fought against Mughal invasions. The princely states were later integrated into modern India after independence.',
    festivals: [
      { name: 'Diwali', month: 'October/November', description: 'The festival of lights celebrated with grandeur across Rajasthan with traditional rangoli, diyas, and royal celebrations in palaces.' },
      { name: 'Holi', month: 'March', description: 'The festival of colors celebrated with great enthusiasm, especially in Jaipur and Udaipur with traditional folk songs and dances.' },
      { name: 'Desert Festival', month: 'February', description: 'A unique cultural festival held in Jaisalmer showcasing Rajasthani folk culture, camel races, and traditional performances.' },
      { name: 'Pushkar Fair', month: 'November', description: 'World-famous camel fair and religious gathering attracting pilgrims and tourists from around the globe.' }
    ],
    images: [
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      'https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg',
      'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg',
      'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg'
    ],
    popularPlaces: ['Jaipur - Pink City', 'Udaipur - City of Lakes', 'Jaisalmer - Golden City', 'Jodhpur - Blue City']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    culture: 'Kerala is known as "God\'s Own Country" for its lush greenery, backwaters, and rich cultural traditions. The state is famous for Kathakali dance, Ayurveda, traditional boat races, coconut-based cuisine, and the harmonious coexistence of different religions and communities.',
    history: 'Kerala has a rich maritime history dating back to ancient times. It was a major spice trading center that attracted traders from around the world. The region was ruled by various dynasties including the Cheras, and later saw the arrival of European colonizers. Kerala played a significant role in the Indian independence movement.',
    festivals: [
      { name: 'Onam', month: 'August/September', description: 'The most important festival of Kerala celebrating the harvest season and the legendary King Mahabali with traditional Pookalam (flower arrangements) and Onasadya (feast).' },
      { name: 'Thrissur Pooram', month: 'April/May', description: 'One of the most spectacular temple festivals in Kerala featuring decorated elephants, traditional percussion ensembles, and colorful parasols.' },
      { name: 'Theyyam', month: 'December/January', description: 'A ritualistic art form and religious festival where performers embody deities through elaborate costumes and makeup.' },
      { name: 'Vishu', month: 'April', description: 'Malayalam New Year celebrated with Vishukani (auspicious sighting) and traditional feast including various delicacies.' }
    ],
    images: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg',
      'https://images.pexels.com/photos/3889854/pexels-photo-3889854.jpeg',
      'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg'
    ],
    popularPlaces: ['Alleppey - Venice of the East', 'Munnar - Hill Station', 'Kochi - Queen of the Arabian Sea', 'Thekkady - Wildlife Sanctuary']
  },
  {
    id: 'punjab',
    name: 'Punjab',
    culture: 'Punjab is the land of five rivers, known for its vibrant Sikh culture, Bhangra dance, robust cuisine including butter chicken and makki di roti, and the spirit of hospitality. The state is famous for its agricultural prosperity, colorful festivals, and the Golden Temple.',
    history: 'Punjab has been the cradle of the Sikh religion founded by Guru Nanak Dev. The region witnessed the birth of Sikhism and the ten Sikh Gurus. It played a crucial role during the Mughal era and British rule. The partition of 1947 deeply affected Punjab, leading to mass migration.',
    festivals: [
      { name: 'Vaisakhi', month: 'April', description: 'The most important Sikh festival celebrating the harvest season and the formation of Khalsa by Guru Gobind Singh with traditional Bhangra performances.' },
      { name: 'Guru Nanak Jayanti', month: 'November', description: 'Birthday of the first Sikh Guru celebrated with processions, community kitchens, and religious congregations.' },
      { name: 'Lohri', month: 'January', description: 'Punjabi harvest festival celebrated with bonfires, folk songs, and traditional delicacies like til and gur.' },
      { name: 'Diwali', month: 'October/November', description: 'Festival of lights celebrated by both Hindus and Sikhs with special significance as it marks the return of Guru Hargobind from imprisonment.' }
    ],
    images: [
      'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
      'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg',
      'https://images.pexels.com/photos/3889833/pexels-photo-3889833.jpeg',
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg'
    ],
    popularPlaces: ['Amritsar - Golden Temple', 'Chandigarh - Planned City', 'Patiala - Royal Heritage', 'Anandpur Sahib - Birthplace of Khalsa']
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    culture: 'Tamil Nadu is known for its ancient Dravidian culture, classical Tamil language, Bharatanatyam dance, Carnatic music, magnificent temples, and rich literary traditions. The state is famous for its bronze sculptures, silk sarees, and traditional cuisine including dosa and sambar.',
    history: 'Tamil Nadu has a history dating back over 2000 years with ancient Tamil kingdoms like Chola, Chera, and Pandya. The Chola empire was one of the greatest maritime powers in Indian history. The region saw the influence of various dynasties and later European colonization.',
    festivals: [
      { name: 'Pongal', month: 'January', description: 'The harvest festival of Tamil Nadu celebrated for four days with traditional rituals, decorations, and the preparation of sweet Pongal dish.' },
      { name: 'Diwali', month: 'October/November', description: 'Festival of lights celebrated with oil lamps, fireworks, and traditional sweets, particularly significant in Tamil culture.' },
      { name: 'Tamil New Year', month: 'April', description: 'Celebrated as Varusha Pirappu with traditional customs, temple visits, and family gatherings.' },
      { name: 'Navaratri', month: 'September/October', description: 'Nine-day festival celebrating the divine feminine with classical dances, music performances, and Golu (doll displays).' }
    ],
    images: [
      'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
      'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg',
      'https://images.pexels.com/photos/3889833/pexels-photo-3889833.jpeg',
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg'
    ],
    popularPlaces: ['Chennai - Detroit of India', 'Madurai - Temple City', 'Coimbatore - Manchester of South', 'Ooty - Queen of Hill Stations']
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    culture: 'West Bengal is renowned for its intellectual and artistic heritage, being the birthplace of the Bengali Renaissance. The state is famous for its literature, cinema, Rabindra Sangeet, fish curry, sweets like rasgulla, and the warm hospitality of its people.',
    history: 'West Bengal was the center of the British Raj and played a crucial role in the Indian independence movement. It was the birthplace of many freedom fighters and reformers. The Bengal partition in 1905 and 1947 significantly impacted the region\'s history and demographics.',
    festivals: [
      { name: 'Durga Puja', month: 'September/October', description: 'The grandest festival of West Bengal celebrating Goddess Durga with elaborate pandals, cultural programs, and community celebrations lasting five days.' },
      { name: 'Kali Puja', month: 'October/November', description: 'Worship of Goddess Kali celebrated with devotion, cultural programs, and traditional offerings.' },
      { name: 'Poila Boishakh', month: 'April', description: 'Bengali New Year celebrated with traditional rituals, cultural programs, and family gatherings.' },
      { name: 'Saraswati Puja', month: 'January/February', description: 'Worship of Goddess Saraswati, especially popular among students, celebrated with cultural programs and traditional offerings.' }
    ],
    images: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg',
      'https://images.pexels.com/photos/3889854/pexels-photo-3889854.jpeg',
      'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg'
    ],
    popularPlaces: ['Kolkata - City of Joy', 'Darjeeling - Queen of Hills', 'Sundarbans - Mangrove Forests', 'Shantiniketan - Abode of Peace']
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    culture: 'Maharashtra is known for its rich Marathi culture, Lavani dance, Warli art, street food culture, and the legacy of great personalities like Chhatrapati Shivaji Maharaj. The state combines traditional values with modern urban lifestyle, especially in Mumbai.',
    history: 'Maharashtra has a glorious history with the Maratha Empire under Shivaji Maharaj being one of the most significant. The region played a crucial role in the Indian independence movement with leaders like Bal Gangadhar Tilak and Mahatma Gandhi having strong connections to the state.',
    festivals: [
      { name: 'Ganesh Chaturthi', month: 'August/September', description: 'The most celebrated festival in Maharashtra honoring Lord Ganesha with elaborate decorations, processions, and community celebrations lasting 11 days.' },
      { name: 'Gudi Padwa', month: 'March/April', description: 'Marathi New Year celebrated with traditional Gudi flag hoisting, special delicacies, and cultural programs.' },
      { name: 'Navratri', month: 'September/October', description: 'Nine-day festival with traditional Garba and Dandiya dances, especially popular in Mumbai and Pune.' },
      { name: 'Diwali', month: 'October/November', description: 'Festival of lights celebrated with great enthusiasm, traditional sweets, and family gatherings.' }
    ],
    images: [
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      'https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg',
      'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg',
      'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg'
    ],
    popularPlaces: ['Mumbai - Financial Capital', 'Pune - Oxford of the East', 'Nashik - Wine Capital', 'Aurangabad - City of Gates']
  },
  {
    id: 'goa',
    name: 'Goa',
    culture: 'Goa is known for its unique Indo-Portuguese culture, beautiful beaches, vibrant nightlife, seafood cuisine, and laid-back lifestyle. The state beautifully blends Indian and Portuguese traditions, evident in its architecture, food, and festivals.',
    history: 'Goa was under Portuguese rule for over 450 years, making it unique in Indian history. The Portuguese influence is deeply embedded in Goan culture, architecture, and cuisine. It was liberated in 1961 and became a state in 1987.',
    festivals: [
      { name: 'Carnival', month: 'February/March', description: 'A vibrant Portuguese-influenced festival with colorful parades, music, dance, and elaborate floats celebrating for three days before Lent.' },
      { name: 'Christmas', month: 'December', description: 'Christmas is celebrated with great fervor in Goa with midnight mass, carol singing, and traditional Christmas sweets and decorations.' },
      { name: 'Ganesh Chaturthi', month: 'August/September', description: 'Celebrated with traditional fervor combined with Goan customs, featuring beautiful clay idols and processions to the sea.' },
      { name: 'Shigmo', month: 'March', description: 'Goan version of Holi celebrated with traditional folk dances, music, and colorful processions showcasing local culture.' }
    ],
    images: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg',
      'https://images.pexels.com/photos/3889854/pexels-photo-3889854.jpeg',
      'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg'
    ],
    popularPlaces: ['Panaji - Capital City', 'Baga Beach - Party Destination', 'Old Goa - Heritage Churches', 'Dudhsagar Falls - Spectacular Waterfall']
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    culture: 'Gujarat is known for its entrepreneurial spirit, vegetarian cuisine, Navratri celebrations, handicrafts, and the legacy of Mahatma Gandhi. The state is famous for its colorful culture, Garba dance, business acumen, and vibrant festivals.',
    history: 'Gujarat has been a major trading center throughout history with ports connecting to Africa, Arabia, and Southeast Asia. The region was ruled by various dynasties and played a significant role in the Indian independence movement as the birthplace of Mahatma Gandhi.',
    festivals: [
      { name: 'Navratri', month: 'September/October', description: 'The most celebrated festival in Gujarat featuring nine nights of traditional Garba and Dandiya dances with colorful attire and community celebrations.' },
      { name: 'Kite Festival', month: 'January', description: 'Celebrated during Makar Sankranti with the sky filled with colorful kites, traditional competitions, and cultural programs across the state.' },
      { name: 'Diwali', month: 'October/November', description: 'Festival of lights celebrated with traditional business community customs, special prayers, and elaborate decorations.' },
      { name: 'Janmashtami', month: 'August/September', description: 'Birth of Lord Krishna celebrated with Dahi Handi events, cultural programs, and traditional devotional activities.' }
    ],
    images: [
      'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
      'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg',
      'https://images.pexels.com/photos/3889833/pexels-photo-3889833.jpeg',
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg'
    ],
    popularPlaces: ['Ahmedabad - Heritage City', 'Surat - Diamond City', 'Dwarka - Holy City', 'Gir National Park - Lion Sanctuary']
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    culture: 'Uttar Pradesh is known as the heartland of Indian culture and civilization. It\'s famous for its classical music, dance, literature, handicrafts, and being home to two of the world\'s seven wonders - Taj Mahal and Agra Fort. The state has a rich tradition of Hindustani classical music and dance.',
    history: 'UP has been the center of ancient Indian civilization with cities like Varanasi being among the oldest in the world. The region saw the rise and fall of numerous empires including the Maurya, Gupta, Mughal, and British. It played a crucial role in India\'s freedom struggle.',
    festivals: [
      { name: 'Diwali', month: 'October/November', description: 'Celebrated grandly across the state with special significance in Ayodhya, believed to be Lord Rama\'s birthplace, with traditional diyas and celebrations.' },
      { name: 'Holi', month: 'March', description: 'The festival of colors has special significance in Mathura and Vrindavan, associated with Lord Krishna, celebrated with traditional fervor.' },
      { name: 'Dussehra', month: 'September/October', description: 'Celebrated with great enthusiasm, especially in cities like Varanasi and Allahabad, commemorating the victory of good over evil.' },
      { name: 'Kumbh Mela', month: 'Variable', description: 'The largest religious gathering in the world held in Allahabad (Prayagraj), Haridwar, and other holy cities every 12 years.' }
    ],
    images: [
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      'https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg',
      'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg',
      'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg'
    ],
    popularPlaces: ['Agra - Taj Mahal', 'Varanasi - Spiritual Capital', 'Lucknow - City of Nawabs', 'Mathura - Birthplace of Krishna']
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    culture: 'Karnataka is known for its rich cultural heritage including classical music, Yakshagana theater, traditional crafts, and diverse architectural styles. The state is famous for its IT industry, coffee plantations, and the harmonious blend of tradition and modernity.',
    history: 'Karnataka has a rich history with powerful empires like Vijayanagara, Hoysala, and Tippu Sultan\'s kingdom. The region has been a center of art, architecture, and learning with magnificent temples and palaces that showcase its glorious past.',
    festivals: [
      { name: 'Mysore Dasara', month: 'September/October', description: 'The grandest celebration of Dasara in India, featuring royal processions, cultural programs, and the famous Mysore Palace illumination lasting 10 days.' },
      { name: 'Ugadi', month: 'March/April', description: 'Kannada New Year celebrated with traditional rituals, special delicacies, and cultural programs across the state.' },
      { name: 'Karaga', month: 'March/April', description: 'A unique festival celebrated in Bangalore with traditional rituals, processions, and community participation.' },
      { name: 'Diwali', month: 'October/November', description: 'Festival of lights celebrated with traditional customs, especially significant in the northern parts of Karnataka.' }
    ],
    images: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg',
      'https://images.pexels.com/photos/3889854/pexels-photo-3889854.jpeg',
      'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg'
    ],
    popularPlaces: ['Bangalore - Silicon Valley of India', 'Mysore - Palace City', 'Hampi - Ruined City', 'Coorg - Scotland of India']
  }
];