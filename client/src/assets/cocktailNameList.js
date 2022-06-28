const cocktailNameList = [
  'A1',
  'ABC',
  'Ace',
  'Adam',
  'AT&T',
  'ACID',
  'A. J.',
  'Affair',
  'Apello',
  'Avalon',
  'Abilene',
  'Almeria',
  'Addison',
  'Acapulco',
  'Affinity',
  'Applecar',
  'Aviation',
  'Alexander',
  'Algonquin',
  'Allegheny',
  'Artillery',
  'Afterglow',
  'Autodafé',
  'Afternoon',
  'After sex',
  'B-53',
  'B-52',
  'Bijou',
  'Boxcar',
  'Big Red',
  'Bellini',
  'Bramble',
  'Balmoral',
  'Bluebird',
  'Brooklyn',
  'Boomerang',
  'Bora Bora',
  'Barracuda',
  'Buccaneer',
  'Brigadier',
  'Broadside',
  'Blackthorn',
  'Bob Marley',
  'Bumble Bee',
  'Bubble Gum',
  'Bible Belt',
  'Brain Fart',
  'Bloody Mary',
  'Blue Lagoon',
  'Boston Sour',
  'Casino',
  'Caipirinha',
  'Cherry Rum',
  'Cuba Libre',
  'Cuba Libra',
  'Cafe Savoy',
  'Cream Soda',
  'Corn n Oil',
  'Casa Blanca',
  'Clover Club',
  'Citrus Coke',
  'Chicago Fizz',
  'City Slicker',
  'Coffee-Vodka',
  'Caipirissima',
  'Campari Beer',
  'Cosmopolitan',
  'Casino Royale',
  'Clove Cocktail',
  'Coffee Liqueur',
  'Chocolate Milk',
  'Coke and Drops',
  'Corpse Reviver',
  'Chocolate Drink',
  'Creme de Menthe',
  'Derby',
  'Diesel',
  'Daiquiri',
  'Danbooka',
  'Dragonfly',
  'Downshift',
  'Dry Rob Roy',
  'Dry Martini',
  'Dirty Nipple',
  'Dirty Martini',
  'Darkwood Sling',
  'Dark Caipirinha',
  "Duchamp's Punch",
  'Dark and Stormy',
  'Damned if you do',
  'Dubonnet Cocktail',
  'Drinking Chocolate',
  'Death in the Afternoon',
  'Egg Cream',
  'Egg Nog #4',
  'English Highball',
  'Espresso Martini',
  'Espresso Rumtini',
  'Egg Nog - Healthy',
  'English Rose Cocktail',
  'Elderflower Caipirinha',
  'Egg-Nog - Classic Cooked',
  'Frosé',
  'Frappé',
  'Foxy Lady',
  'French 75',
  'Frisco Sour',
  'Fruit Shake',
  'Figgy Thyme',
  'Fruit Cooler',
  'Freddy Kruger',
  'Fuzzy Asshole',
  'Funk and Soul',
  'French Martini',
  'French Negroni',
  'Flying Dutchman',
  'Frozen Daiquiri',
  'Fruit Flip-Flop',
  'Fahrenheit 5000',
  'Flying Scotchman',
  'French Connection',
  'Flaming Dr. Pepper',
  "Flander's Flake-Out",
  'Flaming Lamborghini',
  'Frozen Mint Daiquiri',
  'Frozen Pineapple Daiquiri',
  'GG',
  'Gimlet',
  'Gin Fizz',
  'Gin Sour',
  'Godchild',
  'Gin Daisy',
  'Gin Sling',
  'Gin Smash',
  'Gin Toddy',
  'Godfather',
  'Godmother',
  'Gagliardo',
  'Gluehwein',
  'Greyhound',
  'Gin Tonic',
  'Gin Lemon',
  'Gin Cooler',
  'Gin Squirt',
  'Grand Blue',
  'Gin Rickey',
  'Gin Swizzle',
  'Grass Skirt',
  'Grim Reaper',
  'Grasshopper',
  'Grizzly Bear',
  'H.D.',
  'Honey Bee',
  'Hot Toddy',
  'Herbal flame',
  "Horse's Neck",
  'Happy Skipper',
  "Hunter's Moon",
  'Havana Cocktail',
  'Holloween Punch',
  'Hot Creamy Bush',
  'Homemade Kahlua',
  'Halloween Punch',
  'Harvey Wallbanger',
  'Hawaiian Cocktail',
  'Hemingway Special',
  'Highland Fling Cocktail',
  'Hot Chocolate to Die for',
  'Ipamena',
  'Ice Pick',
  'Iced Coffee',
  'Irish Cream',
  'Irish Spring',
  'Irish Coffee',
  'Imperial Fizz',
  'Irish Russian',
  'Imperial Cocktail',
  'Iced Coffee Fillip',
  'Irish Curdling Cow',
  'Jitterbug',
  'Jam Donut',
  'Jelly Bean',
  'Jackhammer',
  'Jello shots',
  'John Collins',
  'Jamaica Kiss',
  'Japanese Fizz',
  'Just a Moonmint',
  'Jamaican Coffee',
  'Jewel Of The Nile',
  'Jack Rose Cocktail',
  "Jack's Vanilla Coke",
  'Kir',
  'Karsk',
  'Kamikaze',
  'Kir Royale',
  'Kurant Tea',
  'Kiwi Lemon',
  'Kioki Coffee',
  'Kiwi Martini',
  'Kool-Aid Shot',
  'Kiss me Quick',
  'Kool First Aid',
  'Kentucky B And B',
  'Kentucky Colonel',
  'Kool-Aid Slammer',
  'Kiwi Papaya Smoothie',
  'Kill the cold Smoothie',
  'Limeade',
  'Lunch Box',
  'Lemon Shot',
  'Long vodka',
  'Lemon Drop',
  'Loch Lomond',
  'London Town',
  'Lassi Khara',
  'Lassi Raita',
  'Lemouroudji',
  'Lord And Lady',
  'Lassi - Sweet',
  'Lassi - Mango',
  'Limona Corona',
  'Lady Love Fizz',
  'Long Island Tea',
  'Lone Tree Cooler',
  'Lone Tree Cocktail',
  'Lazy Coconut Paloma',
  'Long Island Iced Tea',
  'Lemon Elderflower Spritzer',
  'Lassi - A South Indian Drink',
  'Melya',
  'Mojito',
  'Mimosa',
  'Mai Tai',
  'Martini',
  'Margarita',
  'Manhattan',
  'Michelada',
  'Miami Vice',
  'Mudslinger',
  'Moranguito',
  'Mint Julep',
  'Martinez 2',
  'Masala Chai',
  'Mulled Wine',
  'Moscow Mule',
  'Mocha-Berry',
  'Munich Mule',
  'Mojito Extra',
  'Monkey Gland',
  'Mango Mojito',
  'Monkey Wrench',
  'Midnight Manx',
  "Mother's Milk",
  'Midnight Mint',
  'Negroni',
  'New York Sour',
  'Nutty Irishman',
  'National Aquarium',
  'New York Lemonade',
  'Nuked Hot Chocolate',
  'Orgasm',
  'Old Pal',
  'Orangeade',
  'Orange Whip',
  'Orange Oasis',
  'Orange Crush',
  'Old Fashioned',
  'Oreo Mudslide',
  'Orange Push-up',
  'Oatmeal Cookie',
  'Orange Rosemary Collins',
  'Orange Scented Hot Chocolate',
  "Owen's Grandmother's Revenge",
  'Paloma',
  'Pink Gin',
  'Paradise',
  'Pink Lady',
  'Pegu Club',
  'Pink Moon',
  'Pisco Sour',
  'Porto flip',
  'Penicillin',
  'Pina Colada',
  'Pink Penocha',
  'Pure Passion',
  'Popped cherry',
  'Poppy Cocktail',
  'Port Wine Flip',
  "Planter's Punch",
  'Pineapple Paloma',
  'Pornstar Martini',
  'Planter’s Punch',
  'Port And Starboard',
  'Port Wine Cocktail',
  'Pysch Vitamin Light',
  'Pink Panty Pulldowns',
  'Passion Fruit Martini',
  'Pineapple Gingerale Smoothie',
  'Quentin',
  'Queen Bee',
  'Quick F**K',
  'Quick-sand',
  'Queen Charlotte',
  'Queen Elizabeth',
  "Quaker's Cocktail",
  'Quarter Deck Cocktail',
  'Rose',
  'Radler',
  'Rum Sour',
  'Rum Toddy',
  'Rum Punch',
  'Royal Fizz',
  'Rum Cooler',
  'Rusty Nail',
  'Rum Runner',
  'Rum Cobbler',
  'Red Snapper',
  'Royal Flush',
  'Royal Bitch',
  'Ruby Tuesday',
  'Rail Splitter',
  'Rosemary Blue',
  'Royal Gin Fizz',
  'Rum Milk Punch',
  'Ramos Gin Fizz',
  'Raspberry Julep',
  'Rum Screwdriver',
  'Raspberry Cooler',
  'Rum Old-fashioned',
  'Russian Spring Punch',
  'Radioactive Long Island Iced Tea',
  'Smut',
  'Spritz',
  'Sazerac',
  'Scooter',
  'Sidecar',
  'Sangria',
  'Stinger',
  'Snowday',
  'Snowball',
  'Shot-gun',
  'Spice 75',
  'Salty Dog',
  'Stone Sour',
  'Sea breeze',
  'Scotch Sour',
  'Screwdriver',
  'Sherry Flip',
  'Sweet Tooth',
  'Sol Y Sombra',
  'Shark Attack',
  'Sherry Eggnog',
  'Sweet Bananas',
  'Sweet Sangria',
  'San Francisco',
  'Space Odyssey',
  'Thriller',
  'Tia-Maria',
  'Tipperary',
  'The Galah',
  'Turkeyball',
  'Tom Collins',
  'Tomato Tang',
  'Thai Coffee',
  'Texas Sling',
  'Tequila Fizz',
  'Tequila Sour',
  'Talos Coffee',
  'Tennesee Mud',
  'Turf Cocktail',
  'Thai Iced Tea',
  'The Last Word',
  'The Laverstoke',
  'Tuxedo Cocktail',
  'Tequila Sunrise',
  'Tequila Slammer',
  'The Philosopher',
  'Thai Iced Coffee',
  'Tequila Surprise',
  'The Jimmy Conway',
  'Texas Rattlesnake',
  'Victor',
  'Vesper',
  'Vesuvio',
  'Veteran',
  'Vampiro',
  'Van Vleet',
  'Vodka Fizz',
  'Vodka Slime',
  'Vodka Lemon',
  'Vodka Tonic',
  'Vodka Martini',
  'Vodka Russian',
  'Vermouth Cassis',
  'Victory Collins',
  'Vodka And Tonic',
  'Valencia Cocktail',
  'Whisky Mac',
  'Wine Punch',
  'White Lady',
  'Wine Cooler',
  'Winter Rita',
  'Whiskey Sour',
  'White Russian',
  'Winter Paloma',
  'Whitecap Margarita',
  'White Wine Sangria',
  'Waikiki Beachcomber',
  'Yellow Bird',
  'Yoghurt Cooler',
  'Zorro',
  'Zinger',
  'Zoksel',
  'Zombie',
  'Zambeer',
  'Zorbatini',
  'Zenmeister',
  'Zipperhead',
  'Zima Blaster',
  'Zizi Coin-coin',
  "Zippy's Revenge",
  'Zimadori Zinger',
  'Ziemes Martini Apfelsaft',
  '155 Belmont',
  '1-900-FUK-MEUP',
  '110 in the shade',
  '151 Florida Bushwacker',
  '252',
  '24k nightmare',
  '3 Wise Men',
  '3-Mile Long Island Iced Tea',
  '410 Gone',
  '50/50',
  '501 Blue',
  '57 Chevy with a White License Plate',
  '69 Special',
  '747',
  '747 Drink',
  '9 1/2 Weeks',
];

export default cocktailNameList;
