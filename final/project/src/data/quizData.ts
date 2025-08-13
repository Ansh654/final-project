interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizData {
  [stateId: string]: QuizQuestion[];
}

export const quizData: QuizData = {
  'rajasthan': [
    {
      question: "Which city is known as the 'Pink City' of Rajasthan?",
      options: ["Udaipur", "Jaipur", "Jodhpur", "Jaisalmer"],
      correct: 1,
      explanation: "Jaipur is known as the Pink City due to the pink-colored buildings in the old city, painted in 1876 to welcome Prince Albert."
    },
    {
      question: "What is the traditional dance form of Rajasthan performed by women?",
      options: ["Bharatanatyam", "Kathak", "Ghoomar", "Bhangra"],
      correct: 2,
      explanation: "Ghoomar is a traditional folk dance of Rajasthan performed by women in flowing ghagras (skirts)."
    },
    {
      question: "Which festival is famous for camel trading in Rajasthan?",
      options: ["Diwali", "Holi", "Pushkar Fair", "Desert Festival"],
      correct: 2,
      explanation: "Pushkar Fair is the world's largest camel fair held annually in Pushkar, Rajasthan."
    },
    {
      question: "What is the name of the largest fort in India located in Rajasthan?",
      options: ["Mehrangarh Fort", "Chittorgarh Fort", "Amber Fort", "Nahargarh Fort"],
      correct: 1,
      explanation: "Chittorgarh Fort is the largest fort in India and a UNESCO World Heritage Site."
    },
    {
      question: "Which Rajput clan ruled Mewar with Udaipur as their capital?",
      options: ["Rathore", "Chauhan", "Sisodia", "Kachwaha"],
      correct: 2,
      explanation: "The Sisodia dynasty ruled Mewar kingdom with Udaipur as their capital."
    },
    {
      question: "What is the traditional headgear worn by Rajasthani men called?",
      options: ["Turban", "Pagri", "Safah", "All of the above"],
      correct: 3,
      explanation: "Rajasthani men wear various types of traditional headgear known as turban, pagri, or safah."
    },
    {
      question: "Which lake in Udaipur is known as the 'Jewel of Mewar'?",
      options: ["Fateh Sagar Lake", "Lake Pichola", "Udai Sagar", "Jaisamand Lake"],
      correct: 1,
      explanation: "Lake Pichola in Udaipur is known as the 'Jewel of Mewar' and houses the famous Lake Palace."
    },
    {
      question: "What is the traditional folk music instrument of Rajasthan?",
      options: ["Tabla", "Sarangi", "Harmonium", "Flute"],
      correct: 1,
      explanation: "Sarangi is a traditional string instrument widely used in Rajasthani folk music."
    },
    {
      question: "Which craft is Jaipur most famous for?",
      options: ["Pottery", "Blue Pottery", "Carpet weaving", "Wood carving"],
      correct: 1,
      explanation: "Jaipur is world-famous for its blue pottery, a traditional craft with Persian origins."
    },
    {
      question: "What is the local name for traditional Rajasthani puppet show?",
      options: ["Kathputli", "Tholu Bommalata", "Bommalattam", "Pavakoothu"],
      correct: 0,
      explanation: "Kathputli is the traditional string puppet theatre of Rajasthan, known for its colorful puppets."
    }
  ],
  'kerala': [
    {
      question: "What is Kerala commonly known as?",
      options: ["Spice Garden of India", "God's Own Country", "Land of Coconuts", "Backwater State"],
      correct: 1,
      explanation: "Kerala is famously known as 'God's Own Country' due to its natural beauty and lush landscapes."
    },
    {
      question: "Which is the most important festival of Kerala?",
      options: ["Diwali", "Onam", "Christmas", "Eid"],
      correct: 1,
      explanation: "Onam is the most important festival of Kerala, celebrating the harvest season and King Mahabali."
    },
    {
      question: "What is the traditional dance-drama of Kerala called?",
      options: ["Bharatanatyam", "Kathakali", "Mohiniyattam", "Kuchipudi"],
      correct: 1,
      explanation: "Kathakali is the classical dance-drama of Kerala known for its elaborate costumes and makeup."
    },
    {
      question: "Which backwater destination is known as the 'Venice of the East'?",
      options: ["Kumarakom", "Alleppey", "Kollam", "Kasaragod"],
      correct: 1,
      explanation: "Alleppey (Alappuzha) is known as the 'Venice of the East' due to its extensive network of backwaters."
    },
    {
      question: "What is the traditional boat race of Kerala called?",
      options: ["Vallam Kali", "Chundan Vallam", "Snake Boat Race", "All of the above"],
      correct: 3,
      explanation: "Kerala's traditional boat races are known by all these names, with Vallam Kali being the Malayalam term."
    },
    {
      question: "Which spice is Kerala most famous for producing?",
      options: ["Turmeric", "Cardamom", "Pepper", "Cinnamon"],
      correct: 2,
      explanation: "Kerala is known as the 'Land of Black Pepper' and has been trading this spice for centuries."
    },
    {
      question: "What is the traditional martial art form of Kerala?",
      options: ["Kalaripayattu", "Silambam", "Gatka", "Lathi"],
      correct: 0,
      explanation: "Kalaripayattu is the ancient martial art form of Kerala, considered one of the oldest fighting systems."
    },
    {
      question: "Which hill station in Kerala is famous for tea plantations?",
      options: ["Wayanad", "Munnar", "Thekkady", "Ponmudi"],
      correct: 1,
      explanation: "Munnar is famous for its extensive tea plantations and scenic beauty in the Western Ghats."
    },
    {
      question: "What is the traditional feast served during Onam called?",
      options: ["Sadhya", "Onasadya", "Both A and B", "Kerala Thali"],
      correct: 2,
      explanation: "The traditional feast is called Sadhya, and specifically during Onam it's called Onasadya."
    },
    {
      question: "Which art form involves temple rituals where performers become deities?",
      options: ["Kathakali", "Theyyam", "Mohiniyattam", "Ottamthullal"],
      correct: 1,
      explanation: "Theyyam is a ritualistic art form where performers embody deities through elaborate costumes and makeup."
    }
  ],
  'punjab': [
    {
      question: "Which city houses the Golden Temple, the holiest shrine of Sikhism?",
      options: ["Chandigarh", "Ludhiana", "Amritsar", "Patiala"],
      correct: 2,
      explanation: "The Golden Temple (Harmandir Sahib) is located in Amritsar and is the most sacred place for Sikhs."
    },
    {
      question: "What is the traditional folk dance of Punjab?",
      options: ["Gidda", "Bhangra", "Both A and B", "Jhumar"],
      correct: 2,
      explanation: "Both Gidda (performed by women) and Bhangra (performed by men) are traditional folk dances of Punjab."
    },
    {
      question: "Which festival marks the Punjabi New Year and harvest season?",
      options: ["Vaisakhi", "Lohri", "Diwali", "Gurpurab"],
      correct: 0,
      explanation: "Vaisakhi celebrates the Punjabi New Year and marks the harvest of rabi crops."
    },
    {
      question: "Who was the founder of Sikhism?",
      options: ["Guru Arjan Dev", "Guru Nanak Dev", "Guru Gobind Singh", "Guru Tegh Bahadur"],
      correct: 1,
      explanation: "Guru Nanak Dev was the founder and first Guru of Sikhism."
    },
    {
      question: "What is the traditional Punjabi bread made from corn flour called?",
      options: ["Chapati", "Makki di Roti", "Naan", "Paratha"],
      correct: 1,
      explanation: "Makki di Roti is traditional Punjabi bread made from corn flour, often eaten with sarson da saag."
    },
    {
      question: "Which Guru established the Khalsa in 1699?",
      options: ["Guru Nanak", "Guru Gobind Singh", "Guru Arjan Dev", "Guru Har Krishan"],
      correct: 1,
      explanation: "Guru Gobind Singh, the tenth Guru, established the Khalsa on Vaisakhi in 1699."
    },
    {
      question: "What is the community kitchen in Sikh gurdwaras called?",
      options: ["Dharamshala", "Langar", "Prasad", "Sangat"],
      correct: 1,
      explanation: "Langar is the community kitchen where free meals are served to all visitors regardless of background."
    },
    {
      question: "Which festival is celebrated by lighting bonfires in Punjab?",
      options: ["Diwali", "Lohri", "Holi", "Vaisakhi"],
      correct: 1,
      explanation: "Lohri is celebrated by lighting bonfires and is associated with the harvest of sugarcane crop."
    },
    {
      question: "What does 'Punjab' literally mean?",
      options: ["Land of Rivers", "Land of Five Waters", "Land of Agriculture", "Land of Warriors"],
      correct: 1,
      explanation: "Punjab means 'Land of Five Waters' referring to the five rivers: Sutlej, Beas, Ravi, Chenab, and Jhelum."
    },
    {
      question: "Which musical instrument is commonly used in Punjab folk music?",
      options: ["Tabla", "Dhol", "Harmonium", "All of the above"],
      correct: 3,
      explanation: "Dhol, tabla, and harmonium are all commonly used in Punjabi folk music, with dhol being most characteristic."
    }
  ],
  'tamil-nadu': [
    {
      question: "What is the harvest festival of Tamil Nadu called?",
      options: ["Onam", "Pongal", "Diwali", "Dussehra"],
      correct: 1,
      explanation: "Pongal is the harvest festival of Tamil Nadu, celebrated for four days in January."
    },
    {
      question: "Which classical dance form originated in Tamil Nadu?",
      options: ["Kathak", "Bharatanatyam", "Kuchipudi", "Odissi"],
      correct: 1,
      explanation: "Bharatanatyam is the classical dance form that originated in Tamil Nadu."
    },
    {
      question: "What is the capital city of Tamil Nadu?",
      options: ["Madurai", "Coimbatore", "Chennai", "Salem"],
      correct: 2,
      explanation: "Chennai (formerly Madras) is the capital city of Tamil Nadu."
    },
    {
      question: "Which temple city is famous for the Meenakshi Temple?",
      options: ["Chennai", "Thanjavur", "Madurai", "Kanchipuram"],
      correct: 2,
      explanation: "Madurai is famous for the historic Meenakshi Temple dedicated to Goddess Parvati."
    },
    {
      question: "What is the traditional music system of Tamil Nadu?",
      options: ["Hindustani", "Carnatic", "Folk", "Western"],
      correct: 1,
      explanation: "Carnatic music is the classical music tradition of South India, with Tamil Nadu being a major center."
    },
    {
      question: "Which ancient Tamil kingdom was known for its naval power?",
      options: ["Pandya", "Chola", "Chera", "Pallava"],
      correct: 1,
      explanation: "The Chola kingdom was renowned for its powerful navy and maritime trade across Southeast Asia."
    },
    {
      question: "What is the traditional Tamil New Year called?",
      options: ["Puthandu", "Varusha Pirappu", "Both A and B", "Tamil Varsha"],
      correct: 2,
      explanation: "Tamil New Year is called both Puthandu and Varusha Pirappu in different regions."
    },
    {
      question: "Which hill station is known as the 'Queen of Hill Stations' in Tamil Nadu?",
      options: ["Kodaikanal", "Ooty", "Yercaud", "Kotagiri"],
      correct: 1,
      explanation: "Ooty (Udhagamandalam) is known as the 'Queen of Hill Stations' in Tamil Nadu."
    },
    {
      question: "What is the traditional breakfast dish made from rice and lentils?",
      options: ["Dosa", "Idli", "Vada", "All of the above"],
      correct: 3,
      explanation: "Dosa, Idli, and Vada are all traditional South Indian breakfast items made from rice and lentils."
    },
    {
      question: "Which UNESCO World Heritage Site temple is located in Tamil Nadu?",
      options: ["Meenakshi Temple", "Brihadeeswara Temple", "Kapaleeshwarar Temple", "Ranganathaswamy Temple"],
      correct: 1,
      explanation: "Brihadeeswara Temple in Thanjavur is a UNESCO World Heritage Site built by the Chola dynasty."
    }
  ],
  'west-bengal': [
    {
      question: "Which is the most important festival of West Bengal?",
      options: ["Kali Puja", "Durga Puja", "Poila Boishakh", "Saraswati Puja"],
      correct: 1,
      explanation: "Durga Puja is the most important and grandest festival celebrated in West Bengal."
    },
    {
      question: "Who wrote the Indian National Anthem?",
      options: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Kazi Nazrul Islam", "Ishwar Chandra Vidyasagar"],
      correct: 1,
      explanation: "Rabindranath Tagore wrote 'Jana Gana Mana', which became India's National Anthem."
    },
    {
      question: "What is the traditional sweet of West Bengal made from cottage cheese?",
      options: ["Gulab Jamun", "Rasgulla", "Jalebi", "Laddu"],
      correct: 1,
      explanation: "Rasgulla is the famous sweet of West Bengal made from chenna (cottage cheese)."
    },
    {
      question: "Which city is known as the 'City of Joy'?",
      options: ["Darjeeling", "Kolkata", "Siliguri", "Durgapur"],
      correct: 1,
      explanation: "Kolkata is known as the 'City of Joy', popularized by Dominique Lapierre's book."
    },
    {
      question: "What is the Bengali New Year called?",
      options: ["Poila Boishakh", "Naba Barsha", "Both A and B", "Bengali Noboborsho"],
      correct: 2,
      explanation: "Bengali New Year is called both Poila Boishakh and Naba Barsha."
    },
    {
      question: "Which Nobel Prize winner was from West Bengal?",
      options: ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Both B and C"],
      correct: 3,
      explanation: "Both Rabindranath Tagore (Literature, 1913) and Mother Teresa (Peace, 1979) were associated with Bengal."
    },
    {
      question: "What is the traditional fish curry of Bengal called?",
      options: ["Fish Curry", "Machher Jhol", "Fish Kosha", "Paturi"],
      correct: 1,
      explanation: "Machher Jhol is the traditional Bengali fish curry, a staple of Bengali cuisine."
    },
    {
      question: "Which art form involves elaborate clay sculptures during Durga Puja?",
      options: ["Pottery", "Shola Craft", "Clay Modeling", "Pratima Crafting"],
      correct: 3,
      explanation: "Pratima crafting involves creating elaborate clay sculptures of deities for Durga Puja."
    },
    {
      question: "What is the famous hill station in West Bengal known for tea?",
      options: ["Kalimpong", "Darjeeling", "Kurseong", "Mirik"],
      correct: 1,
      explanation: "Darjeeling is world-famous for its high-quality tea and is known as the 'Queen of Hills'."
    },
    {
      question: "Which river delta is shared by West Bengal and Bangladesh?",
      options: ["Ganga Delta", "Sundarbans", "Both A and B", "Hooghly Delta"],
      correct: 2,
      explanation: "The Ganga Delta, which includes the Sundarbans, is shared by West Bengal and Bangladesh."
    }
  ],
  'maharashtra': [
    {
      question: "Which festival is most grandly celebrated in Maharashtra?",
      options: ["Diwali", "Ganesh Chaturthi", "Navratri", "Gudi Padwa"],
      correct: 1,
      explanation: "Ganesh Chaturthi is the most grandly celebrated festival in Maharashtra, especially in Mumbai."
    },
    {
      question: "Who was the founder of the Maratha Empire?",
      options: ["Bajirao I", "Shivaji Maharaj", "Sambhaji", "Rajaram"],
      correct: 1,
      explanation: "Chhatrapati Shivaji Maharaj was the founder of the Maratha Empire."
    },
    {
      question: "What is the traditional folk dance of Maharashtra?",
      options: ["Bhangra", "Lavani", "Garba", "Kuchipudi"],
      correct: 1,
      explanation: "Lavani is the traditional folk dance of Maharashtra, performed to the beats of dholki."
    },
    {
      question: "Which city is known as the financial capital of India?",
      options: ["Pune", "Mumbai", "Nagpur", "Nashik"],
      correct: 1,
      explanation: "Mumbai is known as the financial capital of India, housing the stock exchanges and major banks."
    },
    {
      question: "What is the Marathi New Year called?",
      options: ["Gudi Padwa", "Ugadi", "Vishu", "Nava Varsha"],
      correct: 0,
      explanation: "Gudi Padwa is the Marathi New Year, celebrated with the hoisting of Gudi flags."
    },
    {
      question: "Which art form involves wall paintings by tribal women?",
      options: ["Madhubani", "Warli", "Pattachitra", "Kalamkari"],
      correct: 1,
      explanation: "Warli art is the traditional wall painting art form of the Warli tribe in Maharashtra."
    },
    {
      question: "What is Mumbai's famous street food made from puffed rice?",
      options: ["Vada Pav", "Bhel Puri", "Pani Puri", "Dahi Puri"],
      correct: 1,
      explanation: "Bhel Puri is Mumbai's famous street food made from puffed rice, vegetables, and chutneys."
    },
    {
      question: "Which hill station is known as the 'Queen of Sahyadri'?",
      options: ["Lonavala", "Mahabaleshwar", "Matheran", "Panchgani"],
      correct: 1,
      explanation: "Mahabaleshwar is known as the 'Queen of Sahyadri' and is famous for its strawberries."
    },
    {
      question: "What is the traditional Maharashtrian attire for women called?",
      options: ["Saree", "Lehenga", "Nauvari", "Ghagra"],
      correct: 2,
      explanation: "Nauvari is the traditional nine-yard saree worn by Maharashtrian women."
    },
    {
      question: "Which cave temples are a UNESCO World Heritage Site in Maharashtra?",
      options: ["Elephanta Caves", "Ajanta and Ellora Caves", "Karla Caves", "Bhaja Caves"],
      correct: 1,
      explanation: "Ajanta and Ellora Caves are UNESCO World Heritage Sites known for their ancient rock-cut architecture."
    }
  ],
  'goa': [
    {
      question: "Which European country ruled Goa for over 450 years?",
      options: ["Britain", "France", "Portugal", "Netherlands"],
      correct: 2,
      explanation: "Portugal ruled Goa from 1510 to 1961, leaving a lasting influence on its culture and architecture."
    },
    {
      question: "What is the vibrant festival celebrated before Lent in Goa?",
      options: ["Christmas", "Carnival", "Shigmo", "Feast of St. Francis Xavier"],
      correct: 1,
      explanation: "Carnival is Goa's vibrant festival celebrated with parades, music, and dance before Lent."
    },
    {
      question: "Which is the capital city of Goa?",
      options: ["Vasco da Gama", "Margao", "Panaji", "Mapusa"],
      correct: 2,
      explanation: "Panaji (Panjim) is the capital city of Goa."
    },
    {
      question: "What is the local Goan version of Holi called?",
      options: ["Carnival", "Shigmo", "Dhalo", "Fugdi"],
      correct: 1,
      explanation: "Shigmo is the Goan version of Holi, celebrated with traditional folk dances and music."
    },
    {
      question: "Which church in Old Goa houses the mortal remains of St. Francis Xavier?",
      options: ["Se Cathedral", "Basilica of Bom Jesus", "Church of St. Francis of Assisi", "Our Lady of the Mount"],
      correct: 1,
      explanation: "The Basilica of Bom Jesus in Old Goa houses the mortal remains of St. Francis Xavier."
    },
    {
      question: "What is the traditional Goan alcoholic beverage made from cashews?",
      options: ["Feni", "Urrak", "Mahua", "Arrack"],
      correct: 0,
      explanation: "Feni is the traditional alcoholic beverage of Goa, distilled from cashew apples or palm sap."
    },
    {
      question: "Which beach is famous for its Saturday Night Market?",
      options: ["Baga Beach", "Calangute Beach", "Anjuna Beach", "Arambol Beach"],
      correct: 2,
      explanation: "Anjuna Beach is famous for its Saturday Night Market and flea market."
    },
    {
      question: "What is the traditional Goan curry made with coconut called?",
      options: ["Vindaloo", "Xacuti", "Both A and B", "Caldeirada"],
      correct: 2,
      explanation: "Both Vindaloo and Xacuti are traditional Goan curries made with coconut and spices."
    },
    {
      question: "Which folk dance is performed by women in Goa?",
      options: ["Dhalo", "Fugdi", "Both A and B", "Dekhni"],
      correct: 2,
      explanation: "Both Dhalo and Fugdi are traditional folk dances performed by women in Goa."
    },
    {
      question: "In which year was Goa liberated from Portuguese rule?",
      options: ["1947", "1961", "1962", "1975"],
      correct: 1,
      explanation: "Goa was liberated from Portuguese rule in 1961 through Operation Vijay."
    }
  ],
  'gujarat': [
    {
      question: "Which festival is celebrated with the most enthusiasm in Gujarat?",
      options: ["Diwali", "Navratri", "Janmashtami", "Kite Festival"],
      correct: 1,
      explanation: "Navratri is the most enthusiastically celebrated festival in Gujarat, featuring nine nights of Garba and Dandiya."
    },
    {
      question: "Who is known as the 'Father of the Nation' and was born in Gujarat?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhash Chandra Bose"],
      correct: 1,
      explanation: "Mahatma Gandhi, the 'Father of the Nation', was born in Porbandar, Gujarat."
    },
    {
      question: "What is the traditional dance performed during Navratri?",
      options: ["Bhangra", "Garba", "Lavani", "Kalbelia"],
      correct: 1,
      explanation: "Garba is the traditional dance of Gujarat performed during Navratri celebrations."
    },
    {
      question: "Which city in Gujarat is famous for diamonds?",
      options: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
      correct: 1,
      explanation: "Surat is known as the 'Diamond City' and is famous for diamond cutting and polishing."
    },
    {
      question: "What is the traditional Gujarati thali mainly characterized by?",
      options: ["Spicy food", "Sweet and savory combinations", "Non-vegetarian dishes", "Rice-based meals"],
      correct: 1,
      explanation: "Gujarati thali is known for its perfect balance of sweet and savory dishes."
    },
    {
      question: "Which sanctuary in Gujarat is famous for Asiatic lions?",
      options: ["Blackbuck National Park", "Gir National Park", "Marine National Park", "Velavadar National Park"],
      correct: 1,
      explanation: "Gir National Park in Gujarat is the only home to Asiatic lions in the wild."
    },
    {
      question: "What is the kite festival of Gujarat called?",
      options: ["Makar Sankranti", "Uttarayan", "Both A and B", "Basant Panchami"],
      correct: 2,
      explanation: "The kite festival in Gujarat is celebrated during Makar Sankranti, locally called Uttarayan."
    },
    {
      question: "Which architectural wonder in Gujarat changes color throughout the day?",
      options: ["Rani ki Vav", "Sun Temple", "Both A and B", "Adalaj Stepwell"],
      correct: 2,
      explanation: "Both Rani ki Vav and Sun Temple in Gujarat are known for their architectural beauty that appears different throughout the day."
    },
    {
      question: "What is the traditional Gujarati snack made from gram flour?",
      options: ["Dhokla", "Khandvi", "Fafda", "All of the above"],
      correct: 3,
      explanation: "Dhokla, Khandvi, and Fafda are all popular Gujarati snacks made from gram flour (besan)."
    },
    {
      question: "Which business community is Gujarat particularly famous for?",
      options: ["Farmers", "Traders and Entrepreneurs", "Artisans", "Fishermen"],
      correct: 1,
      explanation: "Gujarat is famous for its business-minded people, with many successful traders and entrepreneurs."
    }
  ],
  'uttar-pradesh': [
    {
      question: "Which monument in Uttar Pradesh is one of the Seven Wonders of the World?",
      options: ["Red Fort", "Taj Mahal", "Fatehpur Sikri", "Agra Fort"],
      correct: 1,
      explanation: "The Taj Mahal in Agra, Uttar Pradesh, is one of the Seven Wonders of the World."
    },
    {
      question: "Which city is considered the spiritual capital of India?",
      options: ["Allahabad", "Mathura", "Varanasi", "Ayodhya"],
      correct: 2,
      explanation: "Varanasi (Kashi) is considered the spiritual capital of India and one of the oldest cities in the world."
    },
    {
      question: "Who built the Taj Mahal?",
      options: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"],
      correct: 1,
      explanation: "Emperor Shah Jahan built the Taj Mahal as a mausoleum for his wife Mumtaz Mahal."
    },
    {
      question: "Which river is considered sacred and flows through Varanasi?",
      options: ["Yamuna", "Ganga", "Gomti", "Saraswati"],
      correct: 1,
      explanation: "The river Ganga flows through Varanasi and is considered sacred by Hindus."
    },
    {
      question: "Where is Lord Krishna believed to have been born?",
      options: ["Vrindavan", "Mathura", "Ayodhya", "Allahabad"],
      correct: 1,
      explanation: "Lord Krishna is believed to have been born in Mathura, Uttar Pradesh."
    },
    {
      question: "Which classical music tradition has strong roots in Uttar Pradesh?",
      options: ["Carnatic", "Hindustani", "Folk", "Western"],
      correct: 1,
      explanation: "Hindustani classical music has deep roots in Uttar Pradesh, particularly in cities like Lucknow and Varanasi."
    },
    {
      question: "What is the traditional embroidery work of Lucknow called?",
      options: ["Phulkari", "Chikankari", "Kantha", "Kasuti"],
      correct: 1,
      explanation: "Chikankari is the traditional white embroidery work of Lucknow, done on fine cotton fabric."
    },
    {
      question: "Which massive religious gathering occurs in Allahabad (Prayagraj)?",
      options: ["Kumbh Mela", "Pushkar Fair", "Sonepur Fair", "Surajkund Fair"],
      correct: 0,
      explanation: "Kumbh Mela in Prayagraj (Allahabad) is the largest religious gathering in the world."
    },
    {
      question: "What is the capital city of Uttar Pradesh?",
      options: ["Agra", "Kanpur", "Lucknow", "Varanasi"],
      correct: 2,
      explanation: "Lucknow is the capital city of Uttar Pradesh, known for its Nawabi culture."
    },
    {
      question: "Which Mughal emperor's tomb is located in Sikandra, Agra?",
      options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
      correct: 1,
      explanation: "Emperor Akbar's tomb is located in Sikandra, Agra, built in a unique architectural style."
    }
  ],
  'karnataka': [
    {
      question: "Which city is known as the 'Silicon Valley of India'?",
      options: ["Mysore", "Bangalore", "Hubli", "Mangalore"],
      correct: 1,
      explanation: "Bangalore (Bengaluru) is known as the 'Silicon Valley of India' due to its IT industry."
    },
    {
      question: "Which festival is grandly celebrated at Mysore Palace?",
      options: ["Diwali", "Dussehra", "Ugadi", "Karaga"],
      correct: 1,
      explanation: "Mysore Dasara (Dussehra) is grandly celebrated at Mysore Palace with royal processions and cultural programs."
    },
    {
      question: "What is the traditional theater form of Karnataka?",
      options: ["Kathakali", "Yakshagana", "Bharatanatyam", "Kuchipudi"],
      correct: 1,
      explanation: "Yakshagana is the traditional theater form of Karnataka, combining dance, music, and drama."
    },
    {
      question: "Which historical site in Karnataka is known as the 'Hampi ruins'?",
      options: ["Vijayanagara", "Halebidu", "Belur", "Bidar"],
      correct: 0,
      explanation: "Hampi was the capital of the Vijayanagara Empire and is now a UNESCO World Heritage Site."
    },
    {
      question: "What is Karnataka famous for producing among beverages?",
      options: ["Tea", "Coffee", "Wine", "Coconut Water"],
      correct: 1,
      explanation: "Karnataka, particularly the Coorg region, is famous for producing high-quality coffee."
    },
    {
      question: "Which software company was founded in Bangalore?",
      options: ["TCS", "Infosys", "HCL", "Wipro"],
      correct: 1,
      explanation: "Infosys was founded in Bangalore by N.R. Narayana Murthy and others in 1981."
    },
    {
      question: "What is the Kannada New Year called?",
      options: ["Ugadi", "Vishu", "Baisakhi", "Puthandu"],
      correct: 0,
      explanation: "Ugadi is the Kannada New Year celebrated in Karnataka and other South Indian states."
    },
    {
      question: "Which region in Karnataka is known as the 'Scotland of India'?",
      options: ["Hampi", "Coorg", "Mysore", "Chikmagalur"],
      correct: 1,
      explanation: "Coorg (Kodagu) is known as the 'Scotland of India' due to its misty hills and coffee plantations."
    },
    {
      question: "What is the traditional sweet of Karnataka made during festivals?",
      options: ["Mysore Pak", "Rasgulla", "Gulab Jamun", "Jalebi"],
      correct: 0,
      explanation: "Mysore Pak is the traditional sweet of Karnataka, originated in the royal kitchen of Mysore."
    },
    {
      question: "Which dynasty built the famous Hoysala temples in Karnataka?",
      options: ["Vijayanagara", "Hoysala", "Chalukya", "Rashtrakuta"],
      correct: 1,
      explanation: "The Hoysala dynasty built the famous temples at Belur and Halebidu known for their intricate architecture."
    }
  ]
};