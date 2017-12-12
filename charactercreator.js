///////////////////////////////////////////////////////////////////////////////////////////////////
//                                      GLOBAL VARIABLES                                         //
///////////////////////////////////////////////////////////////////////////////////////////////////

var character = {
    desc: {
        player: "",
        name: "",
        faction: "",
        heightFeet: 0,
        heightInches: 0,
        height: 0,
        totalInches: 0,
        weight: 0,
        hair: "",
        skin: "",
        gender: "",
        age: 0
    },
    opt: {
        startingxp: 0,
        flaw: {name: "", desc: ""},
        history: "",
        profession: {name: "", spec: "", gear: ""},
        rel1: {com: "", notes: ""},
        rel2: {com: "", notes: ""},
        rel3: {com: "", notes: ""},
        rel4: {com: "", notes: ""},
        rel5: {com: "", notes: ""}
    },
    trait: {
        agility: {base: 1, score: 1, max: 6},
        brains: {base: 1, score: 1, max: 6},
        constitution: {base: 1, score: 1, max: 6},
        demeanor: {base: 1, score: 1, max: 6}
    },
    instinct: {stealth: 1, perception: 1, athletics: 1, socialize: 1},
    prop: {
        speed: 2,
        xp: {cur: 6, max: 6},
        carry: {base: 6, cur: 0, max: 6},
        luck: {base: 1, cur: 1, max: 1},
        psyche: 0
    },
    skill: {
        acrobatics: {base: 0, score: 0, max: 1},
        build: {base: 0, score: 0, max: 1},
        drive: {base: 0, score: 0, max: 1},
        entertain: {base: 0, score: 0, max: 1},
        larceny: {base: 0, score: 0, max: 1},
        leadership: {base: 0, score: 0, max: 1},
        medicine: {base: 0, score: 0, max: 1},
        melee: {base: 0, score: 0, max: 1},
        ranged: {base: 0, score: 0, max: 1},
        science: {base: 0, score: 0, max: 1},
        survival: {base: 0, score: 0, max: 1},
        tame: {base: 0, score: 0, max: 1}
    },
    defense: {block: 0, dodge: 0, reflex: 1},
    loc: {
        head: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        rarm: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        larm: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        torso: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        rleg: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        lleg: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        }
    },
    abilities: [],
    gear: {armor: [], weapons: [], backpack: [], ammo: []}
};
var step = 1;
var factionArray = ["Independent", "Amazon", "Aryan", "Bandit", "Barbarian", "Cannibal", "Cultist", "Gangsta", "Guerrilla", "Hippy", "Mercenary", "Militia", "Pirate", "Punk", "Raider", "Trader"];
var maleNames = ["Jacob", "Michael", "Joshua", "Matthew", "Andrew", "Christopher", "Joseph", "Nicholas", "Daniel", "William", "Ethan", "Anthony", "Ryan", "Tyler", "David", "John", "Alexander", "James", "Zachary", "Brandon", "Jonathan", "Dylan", "Justin", "Christian", "Samuel", "Benjamin", "Austin", "Nathan", "Noah", "Jose", "Logan", "Robert", "Kevin", "Thomas", "Gabriel", "Caleb", "Jordan", "Hunter", "Cameron", "Kyle", "Jason", "Elijah", "Aaron", "Jack", "Connor", "Isaiah", "Luke", "Isaac", "Evan", "Eric", "Brian", "Angel", "Juan", "Adam", "Jackson", "Mason", "Luis", "Charles", "Sean", "Aidan", "Gavin", "Alex", "Nathaniel", "Bryan", "Carlos", "Steven", "Ian", "Jesus", "Timothy", "Cody", "Cole", "Seth", "Adrian", "Devin", "Lucas", "Richard", "Patrick", "Blake", "Julian", "Jared", "Chase", "Trevor", "Sebastian", "Antonio", "Miguel", "Garrett", "Jeremiah", "Jesse", "Owen", "Xavier", "Alejandro", "Mark", "Dominic", "Jayden", "Jeremy", "Jaden", "Bryce", "Victor", "Jake", "Hayden", "Diego", "Carson", "Colin", "Riley", "Wyatt", "Kenneth", "Carter", "Tanner", "Aiden", "Dakota", "Tristan", "Marcus", "Jorge", "Stephen", "Henry", "Dalton", "Paul", "Spencer", "Liam", "Vincent", "Kaleb", "Edward", "Oscar", "Joel", "Eduardo", "Landon", "Brendan", "Parker", "Colton", "Maxwell", "Jeffrey", "Grant", "Alexis", "George", "Ivan", "Collin", "Shane", "Peter", "Brayden", "Ashton", "Nicolas", "Derek", "Ricardo", "Jalen", "Travis", "Francisco", "Alan", "Caden", "Gage", "Omar", "Cristian", "Preston", "Bradley", "Shawn", "Brady", "Devon", "Fernando", "Colby", "Erik", "Javier", "Kaden", "Josiah", "Andres", "Max", "Cesar", "Manuel", "Gregory", "Levi", "Mario", "Johnathan", "Edgar", "Conner", "Mitchell", "Clayton", "Nolan", "Micah", "Damian", "Raymond", "Braden", "Jonah", "Taylor", "Cooper", "Trenton", "Wesley", "Corey", "Edwin", "Dustin", "Dillon", "Scott", "Erick", "Peyton", "Emmanuel", "Marco", "Sergio", "Dawson", "Martin", "Hector", "Giovanni", "Roberto", "Donovan", "Eli", "Brett", "Alec", "Jakob", "Abraham", "Harrison", "Andre", "Andy", "Malik", "Drew", "Ruben", "Ty", "Damien", "Jaylen", "Cade", "Pedro", "Calvin", "Elias", "Josue", "Leonardo", "Frank", "Malachi", "Phillip", "Ronald", "Chandler", "Trey", "Bryson", "Gerardo", "Skyler", "Chance", "Rafael", "Trent", "Casey", "Zane", "Griffin", "Avery", "Dominick", "Derrick", "Miles", "Raul", "Johnny", "Israel", "Armando", "Darius", "Troy", "Enrique", "Donald", "Keith", "Marcos", "Payton", "Allen", "Simon", "Dante", "Jaime", "Zackary", "Julio", "Brock", "Kobe", "Brenden", "Keegan", "Drake", "Lance", "Oliver", "Kameron", "Jonathon", "Mathew", "Brody", "Alberto", "Gustavo", "Philip", "Jace", "Jimmy", "Fabian", "Dennis", "Jerry", "Marc", "Cory", "Brennan", "Ayden", "Louis", "Angelo", "Camden", "Corbin", "Saul", "Danny", "Kyler", "Roman", "Curtis", "Tucker", "Myles", "Bailey", "Chad", "Tony", "Arturo", "Pablo", "Damon", "Randy", "Lane", "Gary", "Braxton", "Douglas", "Kai", "Albert", "Grayson", "Larry", "Nickolas", "Emanuel", "Quinn", "Lorenzo", "Darren", "Alfredo", "Theodore", "Bryant", "Tyson", "Axel", "Zion", "Leo", "Joe", "Lukas", "Santiago", "Tristen", "Emilio", "Jaxon", "Kristopher", "Ramon", "Ismael", "Ricky", "Russell", "Arthur", "Zachery", "Moises", "Salvador", "Jay", "Carl", "Ernesto", "Quentin", "Jayson", "Walter", "Ezekiel", "Micheal", "Esteban", "Dallas", "Nikolas", "Lawrence", "Morgan", "Marvin", "Tommy", "Maximilian", "Mateo", "Deandre", "Marshall", "Abel", "Isiah", "Ali", "Brent", "Jaiden", "Camron", "Braeden", "Reece", "Maurice", "Jeffery", "Terry", "Cayden", "Amir", "Keaton", "Branden", "Jarrett", "Eddie", "Dean", "Mauricio", "Orlando", "Rodney", "Davis", "Jon", "Justice", "Xander", "Brayan", "Rodrigo", "Jamal", "Hugo", "Kody", "Felix", "Kade", "Shaun", "Roger", "Chris", "Conor", "Skylar", "Reese", "Trevon", "Craig", "Maximus", "Zachariah", "Weston", "Javon", "Adan", "Brendon", "Kelvin", "Charlie", "Walker", "Melvin", "Bobby", "Graham", "Guillermo", "Quinton", "Landen", "Tyrese", "Julius", "Billy", "Zackery", "Demetrius", "Issac", "Holden", "Ezra", "Jaylon", "Desmond", "Frederick", "Nelson", "Tate", "Khalil", "Dorian", "Rene", "Jessie", "Zander", "Aden", "Johnathon", "Jaylin", "Gerald", "Felipe", "Reginald", "Elliot", "Roy", "Ahmad", "Steve", "Kolby", "Malcolm", "Jadon", "Terrance", "Hudson", "Bennett", "Willie", "Noel", "Kendall", "Kristian", "Nathanael", "Harley", "Sam", "Jermaine", "Dane", "Reid", "Damion", "Asher", "Uriel", "Clay", "Declan", "Marquis", "Bruce", "Noe", "Allan", "Quincy", "Rylan", "Kenny", "Osvaldo", "Beau", "Terrell", "Blaine", "Kayden", "Kaiden", "Sawyer", "Franklin", "Solomon", "Davion", "Emiliano", "Tomas", "Joaquin", "Yahir", "Todd", "Darian", "Jonas", "Rodolfo", "Triston", "Toby", "Moses", "Francis", "Byron", "Reed", "Rogelio", "Alvin", "Mohamed", "Kendrick", "Silas", "Wilson", "Devan", "Jaquan", "Tyrone", "Mekhi", "Nasir", "Warren", "Deven", "Joey", "Leon", "Randall", "Gilberto", "Duncan", "Jude", "Cedric", "Ramiro", "Amari", "Cyrus", "Luca", "Alfonso", "Pierce", "Marlon", "Ahmed", "Lee", "Elliott", "Dayton", "Dale", "Braydon", "Easton", "Wade", "Jerome", "Leonel", "Harry", "Ross", "Ronnie", "Deshawn", "Jamie", "Stanley", "Tristin", "Darrell", "Rolando", "Mohammad", "Trace", "Will", "Addison", "Jaheim", "Alonzo", "Terrence", "Garret", "Adolfo", "Tobias", "Jaydon", "Jordon", "Kieran", "Isaias", "Leonard", "Coby", "Tyrell", "Jarod", "Rohan", "Jamari", "Jasper", "Ben", "Eugene", "Ariel", "Wayne", "Tyree", "Neil", "Mohammed", "Alvaro", "Orion", "Colten", "Rudy", "Gilbert", "Jayce", "Vicente", "Davon", "Aldo", "Keenan", "Jaron", "Efrain", "Ulises", "Ray", "Ezequiel", "Gunnar", "Ernest", "Izaiah", "Coleman", "Everett", "Brennen", "Harold", "Romeo", "Jaxson", "Sage", "Dominique", "Donte", "Johan", "River", "Quintin", "Ryder", "Sterling", "Keshawn", "Jameson", "Koby", "Lincoln", "Kadin", "Brice", "Titus", "Humberto", "Dwayne", "Kolton", "Agustin", "Cristopher", "Cruz", "Lewis", "Jamison", "Devonte", "Mike", "Kellen", "Kevon", "Antoine", "Karl", "Jairo", "Darien", "Freddy", "Darryl", "Phoenix", "Elisha", "Dashawn", "Grady", "Jett", "Jamar", "Kareem", "Cullen", "Devyn", "Julien", "Nathanial", "Caiden", "Glenn", "Davin", "Ralph", "Aron", "Nehemiah", "Keyshawn", "Kole", "Ibrahim", "Salvatore", "Muhammad", "Alfred", "Gunner", "Kane", "Moshe", "Octavio", "August", "Markus", "Rashad", "Dominik", "Ignacio", "Elvis", "Irvin", "Keon", "Sidney", "Junior", "Shamar", "Karson", "Marquise", "Stefan", "Alonso", "Nigel", "Elian", "Asa", "Zechariah", "Omarion", "Anderson", "Gael", "Judah", "Derick", "Kamron", "Daquan", "Roderick", "Rowan", "Jean", "Jair", "Raphael", "Rigoberto", "Dillan", "Clarence", "Greyson", "Dandre", "Emmett", "Jaylan", "Sheldon", "Rory", "Dangelo", "Darnell", "Jarred", "Garrison", "Camren", "Kurt", "Misael", "Keagan", "Gianni", "Rhett", "Porter", "Jabari", "Layne", "Brooks", "Armani", "Talon", "Omari", "Finn", "Howard", "Lamar", "Josh", "Clinton", "Donavan", "Justus", "Anton", "Ari", "Gordon", "Milton", "Draven", "Deon", "Jefferson", "Demarcus", "Reynaldo", "Conrad", "Abram", "Baby", "Darion", "German", "Giancarlo", "Geoffrey", "Jovan", "Santos", "Bernard", "Brycen", "Roland", "Heath", "Brodie", "Savion", "Brad", "Gideon", "Jarrod", "Tariq", "Jaeden", "Rocco", "Estevan", "Reagan", "Hamza", "Zakary", "Gaven", "Travon", "Maximillian", "Tylor", "Quinten", "Jaren", "Alexzander", "Amarion", "Frankie", "Perry", "Nico", "Sincere", "Emerson", "Alexandro", "Antony", "Jordy", "Alessandro", "Hassan", "Isai", "Guadalupe", "Xzavier", "Keyon", "Gonzalo", "Stephan", "Elmer", "Norman", "Jorden", "Maverick", "Tristian", "Chaz", "Denzel", "Braiden", "Jacoby", "Clark", "Keanu", "Darrius", "Maddox", "Tre", "Dallin", "Fredrick", "Jovani", "Leroy", "Korey", "Blaze", "Cale", "Shannon", "Winston", "Dexter", "Sammy", "Matteo", "Dion", "Seamus", "Marcel", "Braedon", "Stone", "Alijah", "Dimitri", "Brenton", "Cordell", "Darin", "Clifford", "Earl", "Ronaldo", "Deangelo", "Barry", "Giovanny", "Thaddeus", "Nestor", "Reuben", "Samir", "Korbin", "Adonis", "Kelton", "Alden", "Antwan", "Sonny", "Nick", "Houston", "Remington", "Javion", "Arnold", "Destin", "Dylon", "Abdullah", "Jan", "Dario", "Lamont", "Shayne", "Adrien", "Deonte", "Nathen", "Luciano", "Blaise", "Kasey", "Keven", "Bruno", "Lawson", "Kian", "Jamel", "Cortez", "Cornelius", "Josef", "Ellis", "Shea", "Nikhil", "Reilly", "Heriberto", "Stephon", "Jagger", "Semaj", "Vaughn", "Jarvis", "Marcelo", "Augustus", "Domenic", "Barrett", "Isaak", "Ronan", "London", "Kenyon", "Raymundo", "Dwight", "Irving", "Marquez", "Kylan", "Hugh", "Tyshawn", "Prince", "Gino", "Jovany", "Deshaun", "Guy", "Bernardo", "Trever", "Efren", "Chaim", "Mikel", "Kale", "Maxim", "Paxton", "Kennedy", "Benny", "Fidel", "Rahul", "Oswaldo", "Gaige", "Bret", "Darrin", "Stuart", "Trevion", "Gavyn", "Samson", "Carlo", "Bo", "Nash", "Khalid", "Forrest", "Austen", "Kurtis", "Vance", "Latrell", "Milo", "Rey", "Pranav", "Arjun", "Jakobe", "Daryl", "Cristobal", "Darwin", "Jadyn", "Kory", "Haden", "Clifton", "Shemar", "Rylee", "Zaire", "Kent", "Glen", "Jamarion", "Aryan", "Ean", "Zain", "Simeon", "Justyn", "Syed", "Turner", "Waylon", "Jamil", "Layton", "Yosef", "Sabastian", "Vernon", "Andreas", "Aditya", "Darrion", "Jamir", "Jovanni", "Jevon", "Zavier", "Niko", "Jase", "Pierre", "Valentin", "Freddie", "Gannon", "Ulysses", "Austyn", "Santino", "Carlton", "Adriel", "Malakai", "Marques", "Colt", "Jahiem", "Joan", "Cael", "Bradyn", "Mitchel", "Cason", "Devante", "Garett", "Ethen", "Kelly", "Treyton", "Lonnie", "Aydan", "Terence", "Duane", "Javen", "Don", "Zack", "Kirk", "Jovanny", "Fred", "Aubrey", "Eliseo", "Kristofer", "Rickey", "Neal", "Yair", "Jordyn", "Sullivan", "Raven", "Immanuel", "Trystan", "Ryley", "Bronson", "Kanye", "Lloyd", "Jeff", "Damarion", "Yusuf", "Mariano", "Fletcher", "Benito", "Rocky", "Giovani", "Kyree"];
var femaleNames = ["Emily", "Madison", "Hannah", "Emma", "Ashley", "Alexis", "Samantha", "Sarah", "Abigail", "Olivia", "Elizabeth", "Alyssa", "Jessica", "Grace", "Lauren", "Taylor", "Kayla", "Brianna", "Isabella", "Anna", "Victoria", "Sydney", "Megan", "Rachel", "Jasmine", "Natalie", "Sophia", "Chloe", "Morgan", "Hailey", "Jennifer", "Destiny", "Julia", "Kaitlyn", "Haley", "Katherine", "Nicole", "Alexandra", "Savannah", "Maria", "Amanda", "Mackenzie", "Stephanie", "Allison", "Mia", "Brooke", "Jordan", "Jenna", "Rebecca", "Mary", "Makayla", "Faith", "Andrea", "Katelyn", "Paige", "Madeline", "Gabrielle", "Michelle", "Kaylee", "Sara", "Kimberly", "Amber", "Trinity", "Zoe", "Caroline", "Sierra", "Ava", "Vanessa", "Kylie", "Danielle", "Erin", "Alexa", "Ella", "Autumn", "Jacqueline", "Lily", "Jada", "Bailey", "Shelby", "Melissa", "Gabriella", "Courtney", "Leah", "Riley", "Marissa", "Angelina", "Isabel", "Leslie", "Angela", "Ariana", "Claire", "Lillian", "Christina", "Catherine", "Maya", "Audrey", "Aaliyah", "Molly", "Jocelyn", "Breanna", "Melanie", "Mariah", "Jade", "Katie", "Briana", "Arianna", "Diana", "Evelyn", "Kathryn", "Laura", "Alexandria", "Sofia", "Amy", "Gabriela", "Caitlin", "Kelsey", "Isabelle", "Angel", "Madelyn", "Avery", "Lindsey", "Kelly", "Margaret", "Cheyenne", "Sabrina", "Mikayla", "Adriana", "Alicia", "Cassandra", "Daniela", "Cassidy", "Jillian", "Kennedy", "Brittany", "Miranda", "Tiffany", "Ana", "Lydia", "Erica", "Mya", "Brooklyn", "Amelia", "Alexia", "Daisy", "Mckenzie", "Caitlyn", "Skylar", "Summer", "Angelica", "Crystal", "Sophie", "Karen", "Gracie", "Ashlyn", "Kiara", "Erika", "Hope", "Gianna", "Bianca", "Heather", "Veronica", "Valerie", "Chelsea", "Natalia", "Kylee", "Karina", "Alondra", "Naomi", "Jordyn", "Jamie", "Meghan", "Peyton", "Abby", "Payton", "Juliana", "Kendall", "Bethany", "Carly", "Cynthia", "Kate", "Hayley", "Delaney", "Kristen", "Jasmin", "Monica", "Karla", "Alejandra", "Mckenna", "Shannon", "Maggie", "Rylee", "Kyla", "Nevaeh", "Valeria", "Hanna", "Brenda", "Julianna", "Diamond", "Michaela", "Reagan", "Aubrey", "Esmeralda", "Makenzie", "Giselle", "Jazmin", "Rebekah", "Ariel", "Ruby", "Desiree", "Lizbeth", "Charlotte", "Sadie", "Kaitlin", "Adrianna", "Kyra", "Jayla", "Genesis", "Alana", "Addison", "Mallory", "Britney", "Nadia", "Amaya", "Kara", "Elena", "Julie", "Camryn", "Lindsay", "Kendra", "Macy", "Aliyah", "Claudia", "Alison", "Ellie", "Elise", "Holly", "Eva", "Selena", "Joanna", "Jazmine", "Raven", "Savanna", "Nina", "Haylee", "Makenna", "Mariana", "Fatima", "Allyson", "Asia", "Guadalupe", "Katelynn", "Cameron", "Nancy", "Serena", "Layla", "Vivian", "Lucy", "April", "Liliana", "Kathleen", "Camille", "Brittney", "Josephine", "Katrina", "Carmen", "Cierra", "Kailey", "Sandra", "Carolina", "Celeste", "Cindy", "Tatiana", "Kristina", "Jaden", "Kirsten", "Cecilia", "Zoey", "Skyler", "Patricia", "Serenity", "Casey", "Yesenia", "Tessa", "Wendy", "Kira", "Anastasia", "Rachael", "Miriam", "Heaven", "Christine", "Bridget", "Tara", "Priscilla", "Alaina", "Tori", "Kassandra", "Alissa", "Natasha", "Madeleine", "Mercedes", "Josie", "Lauryn", "Esther", "Jayden", "Lilly", "Dakota", "Paris", "Kayleigh", "Clara", "Sidney", "Kiana", "Nayeli", "Shayla", "Brenna", "Paola", "Alexus", "Marisa", "Melody", "Imani", "Denise", "Nia", "Emilee", "Ciara", "Logan", "Rose", "Ashanti", "Meredith", "Annie", "Ashlee", "Bryanna", "Callie", "Kamryn", "Eleanor", "Anne", "Heidi", "Ashlynn", "Ashleigh", "Annabelle", "Ruth", "Clarissa", "Daniella", "Julissa", "Dominique", "Laila", "Annika", "Allie", "Dana", "Kassidy", "Lisa", "Eliza", "Harley", "Rosa", "Whitney", "Helen", "Hallie", "Cristina", "Shania", "Anahi", "Kaylie", "Marina", "Talia", "Kristin", "Jadyn", "Carolyn", "Alayna", "Deanna", "Georgia", "India", "Yasmin", "Tabitha", "Elisabeth", "Fiona", "Piper", "Tiana", "Ivy", "Aniya", "Halle", "Raquel", "Teresa", "Hailee", "Madalyn", "Emely", "Jayda", "Eden", "Linda", "Jenny", "Jaqueline", "Krystal", "Lesly", "Iris", "Virginia", "Lexi", "Gillian", "Gloria", "Tatum", "Marisol", "Perla", "Sasha", "Monique", "Baylee", "Kiley", "Kaitlynn", "Aurora", "Eliana", "Angie", "Camila", "Nora", "Lacey", "Katlyn", "Bella", "Haleigh", "Leilani", "Alivia", "Francesca", "Tamia", "Destinee", "Renee", "Ashton", "Noelle", "Paulina", "Deja", "Aniyah", "Phoebe", "Regan", "Alisha", "Viviana", "Ayanna", "Sage", "Gina", "Madisyn", "Carla", "Leila", "Alina", "Reese", "Alice", "Kaleigh", "Genevieve", "Rylie", "Jane", "Martha", "Carissa", "Cheyanne", "Marie", "Kiera", "Brooklynn", "Tania", "Skye", "Amari", "Gisselle", "Stella", "Meagan", "Taryn", "Janet", "Madyson", "Itzel", "Kaylin", "Jessie", "Kyleigh", "Tia", "Malia", "Brynn", "Alyson", "Tamara", "Yasmine", "Cora", "Precious", "Emilie", "Krista", "Mckayla", "Jacquelyn", "Abbey", "Ellen", "Justice", "Cara", "Kiersten", "Macie", "Izabella", "Kierra", "Johanna", "Karissa", "Mikaela", "Lucia", "Carley", "Kasey", "Joy", "Susan", "Cassie", "Pamela", "Maddison", "Elaina", "Janelle", "Dulce", "Larissa", "Alanna", "Sharon", "Kali", "Elisa", "Tiara", "Anya", "Charity", "Sarai", "Jaiden", "Athena", "Miracle", "Brandy", "Brandi", "Ryan", "Tyler", "America", "Amya", "Angelique", "Theresa", "Mayra", "Abbigail", "Kailee", "Marlene", "Irene", "Kaley", "Maritza", "Fernanda", "Ainsley", "Joselyn", "Aileen", "Bailee", "Anika", "Carlie", "Sonia", "Rhiannon", "Janae", "Marilyn", "Jaclyn", "Simone", "Sylvia", "Kelsie", "Colleen", "Ryleigh", "Lesley", "Lena", "Madelynn", "Litzy", "Raegan", "Araceli", "Abbie", "Kaila", "Hunter", "Emilia", "Macey", "Jaelyn", "Felicity", "Ann", "Lorena", "Lexie", "Alma", "Tatyana", "Nataly", "Isis", "Madilyn", "Aspen", "Melina", "Valentina", "Eve", "Maia", "Justine", "Daphne", "Kenya", "Luz", "Cadence", "Julianne", "Janiya", "Deborah", "Zaria", "Nathalie", "Kailyn", "Arielle", "Tianna", "Isabela", "Cristal", "Aimee", "Helena", "Barbara", "Willow", "Nyla", "Samara", "Kaya", "Judith", "Reyna", "Noemi", "Chasity", "Chelsey", "Sydnee", "Shyanne", "Tanya", "Clare", "Marley", "Tess", "Liberty", "Lila", "Regina", "Tyra", "Laney", "Haylie", "Zoie", "Frances", "Juliet", "Lilian", "Brisa", "Felicia", "Alessandra", "Adrienne", "Thalia", "Edith", "Keira", "Esperanza", "Brielle", "Ally", "Hayden", "Skyla", "Elaine", "Jaida", "Karlee", "Jazlyn", "Kaelyn", "Janessa", "Mara", "Gwendolyn", "Nichole", "Kaylyn", "Savanah", "Paula", "Stacy", "Violet", "Breana", "Leticia", "Corinne", "Anaya", "Maci", "Celia", "Estrella", "Hailie", "Carina", "Juliette", "Harmony", "Ximena", "Sienna", "Mollie", "Laurel", "Yadira", "Toni", "Tayler", "Mariela", "Delilah", "Teagan", "Carlee", "Hana", "Alisa", "Haven", "Halie", "Aisha", "Rosemary", "Tina", "Jimena", "Carrie", "Lea", "Eileen", "Lillie", "Keely", "Karlie", "Cayla", "Micah", "Antonia", "Mariam", "Jazmyn", "Jolie", "Kayley", "Jewel", "Kelli", "Leanna", "Devin", "Kenzie", "Karli", "Aracely", "Ebony", "Presley", "Amani", "Adeline", "Aleah", "Ciera", "Arely", "Nya", "Ayana", "Lana", "Stephany", "Kennedi", "Annette", "Destiney", "Alena", "Lia", "Lizeth", "Giovanna", "Ansley", "Yvette", "Blanca", "Shayna", "Desirae", "Joyce", "Kianna", "Micaela", "Sydni", "Christian", "Aubree", "Kaia", "Donna", "Maeve", "Ingrid", "Quinn", "Shaniya", "Salma", "Candace", "Amara", "Lara", "Nicolette", "Damaris", "Kaylynn", "Nikki", "Yazmin", "Essence", "Abigayle", "Destini", "Maribel", "Katharine", "Sheila", "Dayana", "Aria", "Hazel", "Kathy", "Katarina", "Cecelia", "Jenifer", "Rebeca", "Greta", "Amira", "Katelin", "Aliya", "Maura", "Lyric", "Monserrat", "Jaylin", "Sandy", "Shyann", "Stacey", "Aiyana", "Margarita", "Bria", "Annalise", "Calista", "Parker", "Scarlett", "Jalyn", "Mattie", "Elyse", "Karly", "Myah", "Shea", "Marianna", "Lizette", "Chaya", "Madisen", "Melany", "Emmalee", "Catalina", "Celine", "Liana", "Ericka", "Devon", "Nyah", "Robin", "Kasandra", "Gia", "London", "Carson", "Ayla", "Princess", "Hadley", "Kayli", "Moriah", "Anissa", "Shaylee", "Lilliana", "Jacey", "Lyndsey", "Elle", "Lexus", "Susana", "Gretchen", "Alysa", "Tierra", "Brianne", "Alize", "Estefania", "Montana", "Cali", "Joana", "Beatriz", "Noelia", "Tracy", "Reilly", "Aryanna", "Iliana", "Dorothy", "Kaylah", "Elissa", "Dylan", "Savana", "Kourtney", "Janice", "Devyn", "Robyn", "Elsa", "Ryann", "Alia", "Carol", "Sydnie", "Jakayla", "Arlene", "Jaime", "Raina", "Taliyah", "Aliza", "Jasmyn", "Carli", "Diane", "Anita", "Rayna", "Shirley", "Shakira", "Rocio", "Penelope", "Jamya", "Jaycee", "Alexandrea", "Kenna", "Graciela", "Kenia", "Dasia", "Annabel", "Christiana", "Karley", "Christa", "Kallie", "Trista", "Frida", "Saige", "Paloma", "Abigale", "Kacie", "Casandra", "Ashly", "Patience", "Iyana", "Jackeline", "Mireya", "Annabella", "Magdalena", "Lola", "Taniya", "Fabiola", "Marlee", "Abril", "Belen", "Selina", "Elyssa", "Kaiya", "Laci", "Abagail", "Nyasia", "Ashtyn", "Joelle", "Kellie", "Kaliyah", "Kendal", "Meadow", "Mandy", "Kalyn", "Jailyn", "Taya", "Yuliana", "Kya", "Christy", "Dalia", "Sally", "Jaidyn", "Shawna", "Berenice", "Aylin", "Jaylynn", "Candice", "Armani", "Amiya", "Reina", "Rachelle", "Loren", "Johana", "Dayanara", "Kadence", "Kaydence", "Madalynn", "Aubrie", "Makaila", "Miah", "Alexys", "Darlene", "Sarahi", "Danna", "Dianna", "Bryana", "Baby", "Amina", "Reanna", "Evelin", "Journey", "Lina", "Jana", "Myra", "Yessenia", "Citlali", "Jazmyne", "Kaci", "Joslyn", "Brionna", "Anjali", "Alex", "Katy", "Makena", "Chyna", "Jaliyah", "Meaghan", "Melinda", "Emerson", "Shreya", "Janiyah", "Jaylene", "Kelsi", "Galilea", "Yareli", "Giana", "Hillary", "Celina", "Maegan", "Sarina", "Maliyah", "Yoselin", "Samira", "Sheridan", "Areli", "Kristine", "Jeanette", "Chandler", "Allyssa", "Jacklyn", "Drew", "Isabell", "Keyla", "Libby", "Norah", "Chanel", "Laisha", "Kari", "Brook", "Yolanda", "Unique", "Rita", "Jaquelin", "Camilla", "Silvia", "Kaela", "Lisbeth", "Roxana", "Kacey", "Kinsey", "Norma", "Jalynn", "Sky", "Sherlyn", "Aryana", "Iyanna", "Caitlynn", "Bridgette", "Bonnie", "Jaylyn", "Sonya", "Maleah", "Vanesa", "Mira", "Caleigh", "Lisette", "Delia", "Deasia", "Maryam", "Priscila", "Darby"];
var oldFaction = undefined;

var startingTraits = 12;
var traitPoints = startingTraits;
var maxTraitScore = 6;
var traitArray = [character.trait.agility, character.trait.brains, character.trait.constitution, character.trait.demeanor];
var traitNames = ["agility", "brains", "constitution", "demeanor"];
var instinctArray = [character.instinct.stealth, character.instinct.perception, character.instinct.athletics, character.instinct.socialize];
var instinctNames = ["stealth", "perception", "athletics", "socialize"];
var skillPoints = character.trait.brains.score * 6;
var skillArray = [character.skill.acrobatics, character.skill.larceny, character.skill.ranged, 
                  character.skill.build, character.skill.medicine, character.skill.science, 
                  character.skill.drive, character.skill.melee, character.skill.survival, 
                  character.skill.entertain, character.skill.leadership, character.skill.tame];
var skillNames = ["acrobatics", "larceny", "ranged", 
                  "build", "medicine", "science", 
                  "drive", "melee", "survival", 
                  "entertain", "leadership", "tame"];
var propNames = ["speed", "cur_xp", "max_xp", 
                 "cur_carry", "max_carry", "cur_luck", "max_luck", 
                 "block", "dodge", "reflex", 
                 "head_max_hp", "rarm_max_hp", "larm_max_hp", 
                 "torso_max_hp", "rleg_max_hp", "lleg_max_hp"];
var healthArray = [character.loc.head.hp, 
                   character.loc.larm.hp, 
                   character.loc.rarm.hp, 
                   character.loc.torso.hp, 
                   character.loc.lleg.hp, 
                   character.loc.rleg.hp];
var healthNames = ["head", "larm", "rarm", "torso", "lleg", "rleg"];
var rolledArmor;
var rolledMelee;
var rolledRanged;
var rolledAmmo;
var rolledItem;
var allRolledItems = [];
var startingArmor = false;
var startingMelee = false;
var startingRanged = false;
var startingAmmo = false;
var startingMGL = false;
var listCount = 1;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                         ABILITY FUNCTIONS                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////

function Ability(name, desc, max, xp, taken) {
    this.name = name;
    this.desc = desc;
    this.max = max;
    this.xp = xp;
    this.taken = taken;
}

var aColdAcclimated = new Ability("Cold Acclimated", "<b>+1</b>hr Cold-Resistance.", 3, 3, 0);
var aDesignatedMarksman = new Ability("Designated Marksman", "<b>+1</b> to <i>Called Shot</i> <b>RATKs</b>.", 1, 3, 0);
var aEngineer = new Ability("Engineer", "<b>+1</b> <u>Build</u> for a type of <b>Gear</b>.", 3, 3, 0);
var aFavoriteWeapon = new Ability("Favorite Weapon", "Drop (not Break) favorite weapon on <b><i><u>1</u></i></b>.", 1, 3, 0);
var aForcedMarch = new Ability("Forced March", "Team gets <b>+1</b>mph Travel <b>Speed</b>.", 3, 3, 0);
var aGameCall = new Ability("Game Call", "Basic communication with animal sounds.", 1, 3, 0);
var aHardHeaded = new Ability("Hard Headed", "No longer get <i>Stunned</i> by <b>Head DMG</b>.", 1, 3, 0);
var aLeadFoot = new Ability("Lead Foot", "<b>+3</b> <u>Drive</u>(Stunt) to Accelerate or Brake.", 1, 3, 0);
var aMarathonRunner = new Ability("Marathon Runner", "<b>+1</b> mile of <i>Jogging</i> distance.", 12, 3, 0);
var aPackMentality = new Ability("Pack Mentality", "<b>+1</b> to <b>ATK</b> same target a <b>Comrade ATKs</b>", 1, 3, 0);
var aRage = new Ability("Rage", "<b>Fast</b>. +3 <b>MATK DMG</b>. -3 <b>DEF</b>. Lasts 1min.", 1, 3, 0);
var aSharpshooter = new Ability("Sharpshooter", "<i>Aim</i> for an additional rnd for <b>+1 RATK</b>.", 3, 3, 0);
var aSpecialize = new Ability("Specialize", "<b>+1</b> to a <b>Skill Specialty</b>.", 1, 3, 0);
var aStrongBack = new Ability("Strong Back", "<b>+1 Carry</b>.", 6, 3, 0);
var aWeaponTraining = new Ability("Weapon Training", "<b>+1 ATK</b> for a weapon type.", 1, 3, 0);
var aAikido = new Ability("Aikido", "Ignore second <i>Dodge</i> penalty.", 1, 6, 0);
var aAllegiance = new Ability("Allegiance", "Take a Faction as a <b>Comrade</b>.", 15, 6, 0);
var aBodyguard = new Ability("Bodyguard", "<b>+3 DEF</b> when using <i>Protect</i>.", 1, 6, 0);
var aBumpFire = new Ability("Bump Fire", "<i>Rapid</i> Guns get <i>Auto</i> for one target.", 1, 6, 0);
var aCharismatic = new Ability("Charismatic", "<b>+3</b> <i><u>Socialize</u></i> for First Impressions.", 1, 6, 0);
var aControlledDrift = new Ability("Controlled Drift", "<b>+3</b> <u>Drive</u>(Stunt) to Turn.", 1, 6, 0);
var aDangerSense = new Ability("Danger Sense", "<b>+1</b> <i>Reflex</i>.", 3, 6, 0);
var aMorseCode = new Ability("Morse Code", "Complex communication with dots/dashes.", 1, 6, 0);
var aOffRoader = new Ability("Off-Roader", "Ignore <b>Terrain</b> penalty in <b><i>LAND VEHICLES</i></b>.", 1, 6, 0);
var aParry = new Ability("Parry", "Ignore second <i>Block</i> penalty.", 1, 6, 0);
var aPerseverance = new Ability("Perseverance", "Reduce a <b>Situation</b> penalty by <b>-1#</b>.", 3, 6, 0);
var aSignLanguage = new Ability("Sign Language", "Basic communication with hand signals.", 1, 6);
var aEfficientWork = new Ability("Efficient Work", "Time is halved for a <b>Skill</b> (min 1rnd).", 1, 9, 0);
var aFastDraw = new Ability("Fast Draw", "Draw <b>Size</b> 1 weapons <b>Fast</b> 1/rnd.", 1, 9, 0);
var aFleetFooted = new Ability("Fleet Footed", "<b>+1 Speed</b>.", 3, 9, 0);
var aFortunate = new Ability("Fortunate", "<b>+1 Luck</b>.", 3, 9, 0);
var aHoneInstinct = new Ability("Hone Instinct", "<b>+1</b> to an <b>Instinct</b>.", 1, 9, 0);
var aRecoilCompensation = new Ability("Recoil Compensation", "Ignore <i>Rapid</i> <b>RATK</b> penalties.", 1, 9, 0);
var aTacticalReload = new Ability("Tactical Reload", "<b>Fast</b> <i>Reload</i> 1/rnd. Keep normal <b>DEF</b>.", 1, 9, 0);
var aUnorthodoxMethods = new Ability("Unorthodox Methods", "Select a new parent <b>Trait</b> for a <b>Skill</b>.", 1, 9, 0);
var aVendetta = new Ability("Vendetta", "<b>+3 ATK</b> vs known members of one Faction.", 1, 9, 0);
var aBoxing = new Ability("Boxing", "<i>Unarmed</i> <b>MATKs</b> get the <i>Slam</i> <b>Attribute</b>.", 1, 12, 0);
var aImproviseMixture = new Ability("Improvise Mixture", "<u>Science</u> uses 1 less Chemical (min 1).", 1, 12, 0);
var aInnovativeDesign = new Ability("Innovative Design", "1 more Customization per item.", 1, 12, 0);
var aJujitsu = new Ability("Jujitsu", "<i>Grab(Lock)</i> optionally does <b>+1 BDMG</b>/rnd.", 3, 12, 0);
var aJuryRig = new Ability("Jury-Rig", "<u>Build</u> uses 1 less Part (min 1).", 1, 12, 0);
var aKarate = new Ability("Karate", "<i>Unarmed</i> <b>MATKs</b> get the <i>Chop</i> <b>Attribute</b>.", 1, 12, 0);
var aLipReader = new Ability("Lip Reader", "<i><u>Perception</u><i>(See) <b>9#</b> to read lips.", 1, 12, 0);
var aRoadWarrior = new Ability("Road Warrior", "<b>+6 DMG</b> to Ram <b>ATKs</b>.", 1, 12, 0);
var aSexy = new Ability("Sexy", "<b>+3</b> <i><u>Socialize</u></i> with some <b>Extras</b>.", 1, 12, 0);
var aAssassin = new Ability("Assassin", "<b>+1 DMG</b> per round spent <i>Aiming</i>.", 3, 15, 0);
var aHyperImmunity = new Ability("Hyper-Immunity", "<b>+3</b> <i><u><b>C</b></u></i> to resist diseases.", 1, 15, 0);
var aKickBoxing = new Ability("Kick-Boxing", "<i>Unarmed</i> <b>BDMG</b> is not negated with <u><i><b>C</u></i></b> vs <u><i><b>C</u></i></b>.", 1, 15, 0);
var aMultilingual = new Ability("Multilingual", "Learn to speak/read a foreign language.", 9, 15, 0);
var aPowerfulStrike = new Ability("Powerful Strike", "<b>+1 DMG</b> for a <b><i>MELEE</i></b> weapon type.", 3, 15, 0);
var aTreasureHunter = new Ability("Treasure Hunter", "Re-roll any <b>MGL</b> roll 1/day. Keep best.", 1, 15, 0);
var aAmbidextrous = new Ability("Ambidextrous", "Ignore <i>Dual-Wield</i> penalty on 1h weapons.", 1, 18, 0);
var aFlurryAttack = new Ability("Flurry Attack", "<i>Rapid</i> <b>Attribute</b> for a <b><i>MELEE</i></b> weapon type.", 1, 18, 0);
var aParkour = new Ability("Parkour", "Climb at [<b>Speed</b> x2]. Takes whole turn.", 1, 18, 0);
var aPilotLicense = new Ability("Pilot License", "Use <u>Drive</u> to operate aircraft.", 1, 18, 0);
var aRegeneration = new Ability("Regeneration", "<b>+1 HP Recovery</b> per night of rest.", 1, 18, 0);
var aRugged = new Ability("Rugged", "<b>+1 Head</b>, <b>Arms</b>, and <b>Legs HP</b>, <b>+2 Torso HP</b>.", 1, 18, 0);
var aRadicalReinvention = new Ability("Radical Reinvention", "Reassign up to 4 <b>Traits</b>, <b>+1</b> or <b>-1</b> each.", 1, 24, 0);
var aSecondChance = new Ability("Second Chance", "Spend this <b><i>ABILITY</i></b> to avoid Death once.", 1, 24, 0);
var aSelfImprovement = new Ability("Self Improvement", "<b>+1</b> to a <b>Trait</b> (max 6).", 1, 24, 0);

var abilitiesList = [aColdAcclimated, aDesignatedMarksman, aEngineer, aFavoriteWeapon, aForcedMarch, aGameCall, aHardHeaded, aLeadFoot,
                     aMarathonRunner, aPackMentality, aRage, aSharpshooter, aSpecialize, aStrongBack, aWeaponTraining, aAikido, aAllegiance,
                     aBodyguard, aBumpFire, aCharismatic, aControlledDrift, aDangerSense, aMorseCode, aOffRoader, aParry, aPerseverance,
                     aSignLanguage, aEfficientWork, aFastDraw, aFleetFooted, aFortunate, aHoneInstinct, aRecoilCompensation, aTacticalReload,
                     aUnorthodoxMethods, aVendetta, aBoxing, aImproviseMixture, aInnovativeDesign, aJujitsu, aJuryRig, aKarate, aLipReader,
                     aRoadWarrior, aSexy, aAssassin, aHyperImmunity, aKickBoxing, aMultilingual, aPowerfulStrike, aTreasureHunter, aAmbidextrous,
                     aFlurryAttack, aParkour, aPilotLicense, aRegeneration, aRugged, aRadicalReinvention, aSecondChance, aSelfImprovement];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                     RANDOMIZING FUNCTIONS                                     //
///////////////////////////////////////////////////////////////////////////////d6d6////////////////////

function randomAll() {
    var factionCheck = document.getElementById("faction_check").checked;
    if (factionCheck == true) {
        oldFaction = character.desc.faction;
    }
    else {
        oldFaction = "Independent";
    }
    clearAll();
    document.getElementById("7").click();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomDescription() {
    randomAge();
    randomGender();
    randomHeight();
    randomWeight();
    randomSkin();
    randomHair();
    randomFaction();
    randomName();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomName() {
    var randomName = "";
    var randomRoll = 0;
    var charGender = character.desc.gender;
    if (charGender == "Male") {
        randomRoll = Math.ceil(Math.random() * maleNames.length);
        randomName = maleNames[randomRoll];
        character.desc.name = randomName;
    }
    if (charGender == "Female") {
        randomRoll = Math.ceil(Math.random() * femaleNames.length);
        randomName = femaleNames[randomRoll];
        character.desc.name = randomName;
    }
    if (charGender != ("Male" || "Female")) {
        var coinToss = Math.ceil(Math.random() * 2);
        if (coinToss == 1) {
            randomRoll = Math.ceil(Math.random() * maleNames.length);
            randomName = maleNames[randomRoll];
            character.desc.name = randomName;
        }
        if (coinToss == 2) {
            randomRoll = Math.ceil(Math.random() * femaleNames.length);
            randomName = femaleNames[randomRoll];
            character.desc.name = randomName;
        }
    }
    document.getElementById("character_name").value = character.desc.name;
    document.getElementById("s_character_name").innerText = character.desc.name;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomFaction() {
    if (oldFaction == undefined) {
        var randomSelect = Math.ceil(Math.random() * factionArray.length) - 1;
        var selectedFaction = factionArray[randomSelect];
        character.desc.faction = selectedFaction;
    }
    if (oldFaction != undefined) {
        character.desc.faction = oldFaction;
    }
    document.getElementById("factions").value = character.desc.faction;
    document.getElementById("s_faction_name").innerHTML = character.desc.faction;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomAge() {
    var ageRoll = Math.ceil((Math.random() * 33) + 17);
    character.desc.age = ageRoll;
    document.getElementById("character_age").value = character.desc.age;
    document.getElementById("s_character_age").innerHTML = character.desc.age;
    ageTraitAdjust();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomGender() {
    var genderRoll = Math.ceil(Math.random() * 2);
    switch (genderRoll) {
        case 1: 
            character.desc.gender = "Male";
            break;
        case 2: 
            character.desc.gender = "Female";
            break;
    }
    document.getElementById("character_gender").value = character.desc.gender;
    document.getElementById("s_character_gender").innerHTML = character.desc.gender;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomHeight() {
    if (character.desc.gender != ("Male" || "Female")) {
        character.desc.totalInches = Math.ceil((Math.random() * 15) + 58);    //4'11" to 6'0"
    }
    if (character.desc.gender == "Male") {
        character.desc.totalInches = Math.ceil((Math.random() * 17) + 59);    //5' to 6'6"
    }
    if (character.desc.gender == "Female") {
        character.desc.totalInches = Math.ceil((Math.random() * 15) + 58);    //4'11" to 6'0"
    }
    character.desc.heightFeet = Math.floor(character.desc.totalInches / 12);
    character.desc.heightInches = character.desc.totalInches % 12;
    character.desc.height = character.desc.heightFeet + "\"" + character.desc.heightInches + "\"";
    document.getElementById("height_feet").value = character.desc.heightFeet;
    document.getElementById("height_inches").value = character.desc.heightInches;
    document.getElementById("s_character_height").innerHTML = character.desc.height;
}

///////////////////////////////////////////////////////////////////////////////////////////////////men 5'10" (70in) and 180lb, women 5'5" (65in) and 140lb

function randomWeight() {
    if (character.desc.height != 0) {
        switch (character.desc.gender) {
            case "Male":
                var newWeight = Math.round((Math.random() * 10) + character.desc.totalInches * 2.6);
                character.desc.weight = newWeight;
                break;
            case "Female":
                var newWeight = Math.round((Math.random() * 10) + character.desc.totalInches * 2.1);
                character.desc.weight = newWeight;
                break;
            default:
                var newWeight = Math.round((Math.random() * 10) + character.desc.totalInches * 2.35);
                character.desc.weight = newWeight;
                break;
        }
        document.getElementById("character_weight").value = character.desc.weight;
        document.getElementById("s_character_weight").innerHTML = character.desc.weight;
    }
    else {
        randomHeight();
        randomWeight();
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomSkin() {
    var skinTypes = ["Pale", "White", "Tan", "Olive", "Brown", "Black"];
    var skinRoll = skinTypes[Math.floor(Math.random() * skinTypes.length)];
    character.desc.skin = skinRoll;
    document.getElementById("character_skin").value = character.desc.skin;
    document.getElementById("s_character_skin").innerHTML = character.desc.skin;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomHair() {
    if (character.desc.age == "") {
        randomAge();
    }
    if (character.desc.skin == "") {
        randomSkin();
    }
    if (character.desc.age <= 40) {
        if (character.desc.skin == "Pale" || "White" || "Tan") {
            var hairTypes = ["Black", "Brunette", "Auburn", "Red", "Blonde", "Bald"];
        }
        if (character.desc.skin == "Black" || "Brown" || "Olive") {
            var hairTypes = ["Black", "Brunette", "Bald"];
        }
    }
    if (character.desc.age > 40) {
        if (character.desc.skin == "Pale" || "White" || "Tan") {
            var hairTypes = ["Black", "Gray", "Brunette", "Auburn", "Red", "Blonde", "White", "Bald"];
        }
        if (character.desc.skin == "Black" || "Brown" || "Olive") {
            var hairTypes = ["Black", "Gray", "Brunette", "Bald", "White"];
        }
    }
    var hairRoll = hairTypes[Math.ceil(Math.random() * hairTypes.length) - 1];
    character.desc.hair = hairRoll;
    document.getElementById("character_hair").value = character.desc.hair;
    document.getElementById("s_character_hair").innerHTML = character.desc.hair;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomOption(option) {
    var x = option;
    var optionArray = [];
    var nextOption;
    for (var i = 1; i < document.getElementById(x).length; i++) {
        nextOption = document.getElementById(x)[i].value;
        optionArray.push(nextOption);
    }
    var optionNumber = Math.ceil(Math.random() * (optionArray.length -1));
    var newOption = optionArray[optionNumber];
    switch (option) {     ///FINISH THIS LATER, THESE ARENT MAKING IT TO SHIT
        case "startingxp":
            break;
        case "flaw":
            break;
        case "history":
            break;
        case "profession":
            break;
        case "rel1":
            break;
        case "rel2":
            break;
        case "rel3":
            break;
        case "rel4":
            break;
        case "rel5":
            break;
    }
    character.opt.x = newOption;
    document.getElementById(x).value = character.opt.x;
    document.getElementById("s_" + x).value = character.opt.x;
    setDescription();
    character.opt.startingxp = parseInt(document.getElementById("starting_xp").value);
    character.opt.flaw.name = document.getElementById("flaw").value;
    character.opt.history = document.getElementById("history").value;
    character.opt.profession.name = document.getElementById("profession").value;
    character.opt.rel1.com = document.getElementById("com1").value;
    character.opt.rel2.com = document.getElementById("com2").value;
    character.opt.rel3.com = document.getElementById("com3").value;
    character.opt.rel4.com = document.getElementById("com4").value;
    character.opt.rel5.com = document.getElementById("com5").value;
    character.opt.rel1.notes = document.getElementById("rel1").value;
    character.opt.rel2.notes = document.getElementById("rel2").value;
    character.opt.rel3.notes = document.getElementById("rel3").value;
    character.opt.rel4.notes = document.getElementById("rel4").value;
    character.opt.rel5.notes = document.getElementById("rel5").value;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomTraits() {
    traitPoints = 8;
    for (var i = 0; i < traitArray.length; i++) {
        traitArray[i].base = 1;
        instinctArray[i] = 1;
    }
    while (traitPoints != 0) {
        var randomRoll = Math.ceil(Math.random() * 4);
        var randomTrait = traitArray[randomRoll - 1];
        if (randomTrait.base < 6) {
            randomTrait.base += 1;
            traitPoints -= 1;
        }
    }
    for (var i = 0; i < traitNames.length; i++) {
        traitArray[i].score = traitArray[i].base;
        document.getElementById(traitNames[i]).value = traitArray[i].score;
        document.getElementById("skill_" + traitNames[i]).value = traitArray[i].score;
        document.getElementById("s_" + traitNames[i]).innerHTML = traitArray[i].score;
        instinctArray[i] = traitArray[i].score;
        document.getElementById(instinctNames[i]).innerHTML = instinctArray[i];
        document.getElementById("s_" + instinctNames[i]).innerHTML = instinctArray[i];
    }
    document.getElementById("remaining_traits").innerHTML = traitPoints;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function randomSkills() {
    if (character.trait.brains.score == 6) {
        for (var i = 0; i < skillArray.length; i++) {
            skillArray[i].max = traitArray[Math.floor(i / 3)].score;
            document.getElementById(skillNames[i]).max = skillArray[i].max;
            skillArray[i].base = traitArray[Math.floor(i / 3)].score;
            document.getElementById(skillNames[i]).value = skillArray[i].base;
        }
        skillPoints = 0;
    }
    else {
        skillPoints = character.trait.brains.score * 6;
        for (var i = 0; i < skillArray.length; i++) {
            skillArray[i].base = 0;
            skillArray[i].max = traitArray[Math.floor(i / 3)].score;
            document.getElementById(skillNames[i]).max = skillArray[i].max;
        }
        while (skillPoints != 0) {
            var randomSkill = skillArray[Math.ceil(Math.random() * skillArray.length) - 1];
            if (randomSkill.base < randomSkill.max) {
                randomSkill.base += 1;
                skillPoints -= 1;
            }
        }
        for (var i = 0; i < skillNames.length; i++) {
            skillArray[i].score = skillArray[i].base;
            document.getElementById(skillNames[i]).value = skillArray[i].score;
            document.getElementById("s_" + skillNames[i]).value = skillArray[i].score;
        }
    }
    document.getElementById("remaining_skills").innerHTML = skillPoints;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                          GET FUNCTIONS                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////

function getArmor() {
    if (startingArmor == false) {
        rolledArmor = armorList[Math.ceil((Math.random() * armorList.length) - 1)];
        document.getElementById("armor_name").innerHTML = rolledArmor.name;
        document.getElementById("armor_ar").innerHTML = rolledArmor.headar + "/" + rolledArmor.torsoar + "/" + rolledArmor.armsar + "/" + rolledArmor.legsar;
        document.getElementById("armor_size").innerHTML = rolledArmor.sz;
        document.getElementById("armor_location").innerHTML = rolledArmor.loc;
        document.getElementById("armor_notes").innerHTML = rolledArmor.notes;
        document.getElementById("equip_armor_checkbox").innerHTML = "<input type=\"checkbox\" id=\"equip_armor\" class=\"gear_check\" onclick=\"equipStuff()\">Equip";
        startingArmor = true;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function getMelee() {
    if (startingMelee == false) {
        rolledMelee = meleeList[Math.ceil((Math.random() * meleeList.length) - 1)];
        document.getElementById("melee_name").innerHTML = rolledMelee.name;
        document.getElementById("melee_damage").innerHTML = rolledMelee.dmg;
        document.getElementById("melee_size").innerHTML = rolledMelee.sz;
        document.getElementById("melee_notes").innerHTML = rolledMelee.notes;
        document.getElementById("equip_melee_checkbox").innerHTML = "<input type=\"checkbox\" id=\"equip_melee\" class=\"gear_check\" onclick=\"equipStuff()\">Equip";
        startingMelee = true;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function getRanged() {
    if (startingRanged == false) {
        rolledRanged = rangedList[Math.ceil((Math.random() * rangedList.length) - 1)];
        document.getElementById("ranged_name").innerHTML = rolledRanged.name;
        document.getElementById("ranged_damage").innerHTML = rolledRanged.dmg;
        document.getElementById("ranged_range").innerHTML = rolledRanged.rng;
        document.getElementById("ranged_size").innerHTML = rolledRanged.sz;
        document.getElementById("ranged_caliber").innerHTML = rolledRanged.cal;
        document.getElementById("ranged_magazine").innerHTML = rolledRanged.mag;
        document.getElementById("ranged_notes").innerHTML = rolledRanged.notes;
        document.getElementById("equip_ranged_checkbox").innerHTML = "<input type=\"checkbox\" id=\"equip_ranged\" class=\"gear_check\" onclick=\"equipStuff()\">Equip";
        startingRanged = true;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function getAmmo() {
    if (startingRanged == true && startingAmmo == false) {
        var startingRangedCaliber = document.getElementById("ranged_caliber").innerHTML;
        var commonAmmoLength = commonAmmoList.length;
        for (var i = 0; i < commonAmmoLength; i++) {
            if (startingRangedCaliber == commonAmmoList[i].cal) {
                rolledAmmo = commonAmmoList[i];
                rolledAmmo.qty = Math.ceil(Math.random() * 1);
                document.getElementById("ammo_caliber").innerHTML = rolledAmmo.cal;
                document.getElementById("ammo_type").innerHTML = rolledAmmo.type;
                document.getElementById("ammo_notes").innerHTML = rolledAmmo.notes;
                document.getElementById("ammo_size").innerHTML = Math.round(rolledAmmo.sz * rolledAmmo.qty);
                document.getElementById("ammo_quantity").innerHTML = rolledAmmo.qty;
                document.getElementById("equip_ammo_checkbox").innerHTML = "<input type=\"checkbox\" id=\"equip_ammo\" class=\"gear_check\" onclick=\"equipStuff()\">Equip";
            }
        }
        startingAmmo = true;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function getGear() {
    if (startingMGL == false) {
        listCount = 1;
        var x = character.prop.luck.max;
        document.getElementById("mgl_gear").deleteRow(1);
        document.getElementById("gear_xp").innerHTML = character.prop.xp.cur;
    }
    if (startingMGL == true && character.prop.xp.cur > 0) {
        var x = 1;
        character.prop.xp.cur--;
        document.getElementById("gear_xp").innerHTML = character.prop.xp.cur;
    }
    for (var i = 0; i < x; i++) {
        var table = document.getElementById("mgl_gear");
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var randomRoll = Math.ceil((Math.random() * mglList.length) - 1);
        var rolledItem = mglList[randomRoll];
        switch (rolledItem) {
            case ammo22List:
                rolledItem = ammo22List[Math.ceil(Math.random() * (ammo22List.length) - 1)];
                break;
            case ammo9mmList:
                rolledItem = ammo9mmList[Math.ceil(Math.random() * (ammo9mmList.length) - 1)];
                break;
            case ammo45List:
                rolledItem = ammo45List[Math.ceil(Math.random() * (ammo45List.length) - 1)];
                break;
            case ammo357List:
                rolledItem = ammo357List[Math.ceil(Math.random() * (ammo357List.length) - 1)];
                break;
            case ammo556List:
                rolledItem = ammo556List[Math.ceil(Math.random() * (ammo556List.length) - 1)];
                break;
            case ammo762List:
                rolledItem = ammo762List[Math.ceil(Math.random() * (ammo762List.length) - 1)];
                break;
            case ammo308List:
                rolledItem = ammo308List[Math.ceil(Math.random() * (ammo308List.length) - 1)];
                break;
            case ammo12gList:
                rolledItem = ammo12gList[Math.ceil(Math.random() * (ammo12gList.length) - 1)];
                break;
            case ammoArrowList:
                rolledItem = ammoArrowList[Math.ceil(Math.random() * (ammoArrowList.length) - 1)];
                break;
            case bombList:
                rolledItem = bombList[Math.ceil(Math.random() * (bombList.length) - 1)];
                break;
            case "Chemicals":
                rolledItem.qty = Math.ceil(Math.random() * 6);
                break;
            case documentList:
                rolledItem = documentList[Math.ceil(Math.random() * (documentList.length) - 1)];
                break;
            case drugList:
                rolledItem = drugList[Math.ceil(Math.random() * (drugList.length) - 1)];
                break;
            case "Parts":
                rolledItem.qty = Math.ceil(Math.random() * 6);
                break;
            case landVehicleList:
                rolledItem = landVehicleList[Math.ceil(Math.random() * (landVehicleList.length) - 1)];
                break;
            case rareArmorList:
                rolledItem = rareArmorList[Math.ceil(Math.random() * (rareArmorList.length) - 1)];
                break;
            case rareWeaponList:
                rolledItem = rareWeaponList[Math.ceil(Math.random() * (rareWeaponList.length) - 1)];
                break;
            case rareLandVehicleList:
                rolledItem = rareLandVehicleList[Math.ceil(Math.random() * (rareLandVehicleList.length) - 1)];
                break;
            default:
                break;
        }
        allRolledItems.push(rolledItem);
        cell0.innerHTML = rolledItem.name;
        if (rolledItem instanceof Ammo) {
            cell1.innerHTML = rolledItem.notes;
        }
        else if (rolledItem instanceof Equipment) {
            cell1.innerHTML = rolledItem.notes;
        }
        else if (rolledItem instanceof Vehicle) {
            cell1.innerHTML = rolledItem.notes;
        }
        else if (rolledItem instanceof MeleeWeapon) {
            var mWeapNotes = "<b>DMG: "+rolledItem.dmg+"</b>. "+rolledItem.notes;
            cell1.innerHTML = mWeapNotes;
        }
        else if (rolledItem instanceof RangedWeapon) {
            var rWeapNotes = "<b>DMG: "+rolledItem.dmg+"</b>. <b>RNG:</b> "+rolledItem.rng+". <b>Ammo:</b> "+rolledItem.cal+"/"+rolledItem.mag+". "+rolledItem.notes;
            cell1.innerHTML = rWeapNotes;
        }
        else if (rolledItem instanceof Armor) {
            var armorNotes = "<b>AR: "+rolledItem.headar+"/"+rolledItem.armsar+"/"+rolledItem.torsoar+"/"+rolledItem.legsar+"</b>. <b>Location:</b> "+rolledItem.loc+". "+rolledItem.notes;
            cell1.innerHTML = armorNotes;
        }
        else if (rolledItem instanceof Bomb) {
            var bombNotes = "<b>DMG: "+rolledItem.dmg+"</b> <i>"+rolledItem.dmgtype+"</i>. "+rolledItem.blast+"yd <i>Blast</i>. "+rolledItem.notes;
            cell1.innerHTML = bombNotes;
        }
        else if (rolledItem instanceof Drug) {
            var drugNotes = rolledItem.notes+" Duration: "+rolledItem.dur;
            cell1.innerHTML = drugNotes;
        }
        else if (rolledItem instanceof Storage) {
            if (rolledItem.slots == 1) {
                var storageNotes = rolledItem.slots+" Storage Slot. "+rolledItem.notes;
            }
            else {
                var storageNotes = rolledItem.slots+" Storage Slots. "+rolledItem.notes;
            }
            cell1.innerHTML = storageNotes;
        }
        if (rolledItem.qty == undefined) {
            rolledItem.qty = 1;
        }
        if (rolledItem.sz == undefined) {
            cell2.innerHTML = "N/A";
        }
        if (rolledItem.sz != undefined) {
            cell2.innerHTML = Math.round(rolledItem.sz * rolledItem.qty);
        }
        cell2.style = "text-align: center;";
        cell3.innerHTML = rolledItem.qty;
        cell3.style = "text-align: center;";
        cell4.innerHTML = "<input type=\"checkbox\" id=\"equip_gear"+listCount+"\" class=\"gear_check\" onclick=\"equipStuff()\">";
        cell4.style = "text-align: center;";
        startingMGL = true;
        document.scrollBottom;
        listCount++;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////FIX GEAR TAB TOTAL CARRY UPDATER

function equipStuff() {
    character.gear.armor.splice(0, character.gear.armor.length + 1);
    character.gear.weapons.splice(0, character.gear.weapons.length + 1);
    character.gear.ammo.splice(0, character.gear.ammo.length + 1);
    character.gear.backpack.splice(0, character.gear.backpack.length + 1);
    if (document.getElementById("equip_armor") && document.getElementById("equip_armor").checked == true) {
        var checkBox = document.getElementById("equip_armor").checked;
        armorWeight(rolledArmor, checkBox);
    }
    character.gear.weapons.push(iPunch);
    if (document.getElementById("equip_melee") && document.getElementById("equip_melee").checked == true) {
        character.gear.weapons.push(rolledMelee);
    }
    if (document.getElementById("equip_ranged") && document.getElementById("equip_ranged").checked == true) {
        character.gear.weapons.push(rolledRanged);
    }
    if (document.getElementById("equip_ammo") && document.getElementById("equip_ammo").checked == true) {
        character.gear.ammo.push(rolledAmmo);
    }
    for (var i = 0; i < allRolledItems.length; i++) {
        if (document.getElementById("equip_gear" + (i+1)) && document.getElementById("equip_gear" + (i+1)).checked == true) {
            var newGear = allRolledItems[i];
            if (newGear instanceof Armor) {
                var checkBox = document.getElementById("equip_gear" + (i+1));
                armorWeight(newGear, checkBox);
            }
            else if (newGear instanceof MeleeWeapon) {
                character.gear.weapons.push(newGear);
            }
            else if (newGear instanceof RangedWeapon) {
                character.gear.weapons.push(newGear);
            }
            else if (newGear instanceof Ammo) {
                character.gear.ammo.push(newGear);
            }
            else if (newGear instanceof Bomb) {
                character.gear.backpack.push(newGear);
            }
            else if (newGear instanceof Document){
                character.gear.backpack.push(newGear);
            }
            else if (newGear instanceof Drug) {
                character.gear.backpack.push(newGear);
            }
            else if (newGear instanceof Equipment) {
                character.gear.backpack.push(newGear);
            }
            else if (newGear instanceof Storage) {
                character.gear.backpack.push(newGear);
            }
        }
    }
    character.gear.armor.sort(function(a, b){return a.name-b.name;});
    equipArmor();
    character.gear.weapons.sort(function(a, b){return a.name-b.name;});
    character.gear.ammo.sort(function(a, b){return a.name-b.name;});
    character.gear.backpack.sort(function(a, b){return a.name-b.name;});
    setCarry();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function equipArmor() {
    var headAR = 0;
    var armsAR = 0;
    var torsoAR = 0;
    var legsAR = 0;
    for (var i = 0; i < character.gear.armor.length; i++) {
        headAR += character.gear.armor[i].headar;
        armsAR += character.gear.armor[i].armsar;
        torsoAR += character.gear.armor[i].torsoar;
        legsAR += character.gear.armor[i].legsar;
    }
    character.loc.head.ar = headAR;
    character.loc.larm.ar = armsAR;
    character.loc.rarm.ar = armsAR;
    character.loc.torso.ar = torsoAR;
    character.loc.lleg.ar = legsAR;
    character.loc.rleg.ar = legsAR;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                        SET FUNCTIONS                                          //
///////////////////////////////////////////////////////////////////////////////////////////////////

function setDescription() {
    factionFilter();
    character.desc.player = document.getElementById("player_name").value;
    character.desc.name = document.getElementById("character_name").value;
    character.desc.faction = document.getElementById("factions").value;
    character.desc.heightFeet = document.getElementById("height_feet").value;
    character.desc.heightInches = document.getElementById("height_inches").value;
    character.desc.totalInches = (character.desc.heightFeet * 12) + character.desc.heightInches;
    character.desc.weight = document.getElementById("character_weight").value;
    character.desc.hair = document.getElementById("character_hair").value;
    character.desc.skin = document.getElementById("character_skin").value;
    character.desc.gender = document.getElementById("character_gender").value;
    character.desc.age = document.getElementById("character_age").value;
    character.opt.startingxp = parseInt(document.getElementById("starting_xp").value);
    character.opt.flaw.name = document.getElementById("flaw").value;
    character.opt.history = document.getElementById("history").value;
    character.opt.profession.name = document.getElementById("profession").value;
    character.opt.rel1.com = document.getElementById("com1").value;
    character.opt.rel2.com = document.getElementById("com2").value;
    character.opt.rel3.com = document.getElementById("com3").value;
    character.opt.rel4.com = document.getElementById("com4").value;
    character.opt.rel5.com = document.getElementById("com5").value;
    character.opt.rel1.notes = document.getElementById("rel1").value;
    character.opt.rel2.notes = document.getElementById("rel2").value;
    character.opt.rel3.notes = document.getElementById("rel3").value;
    character.opt.rel4.notes = document.getElementById("rel4").value;
    character.opt.rel5.notes = document.getElementById("rel5").value;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function setTraits() {
    var tagility = +document.getElementById("agility").value;
    var tbrains = +document.getElementById("brains").value;
    var tconstitution = +document.getElementById("constitution").value;
    var tdemeanor = +document.getElementById("demeanor").value;
    traitPoints = startingTraits - (tagility + tbrains + tconstitution + tdemeanor);
    for (var i = 0; i < traitNames.length; i++) {
        instinctArray[i] = traitArray[i].score;
        document.getElementById("skill_" + traitNames[i]).innerHTML = traitArray[i].base;
        document.getElementById(instinctNames[i]).innerHTML = instinctArray[i];
    }
    document.getElementById("remaining_traits").innerHTML = traitPoints;
    if (traitPoints >= 0) {
        character.trait.agility.base = tagility;
        character.trait.brains.base = tbrains;
        character.trait.constitution.base = tconstitution;
        character.trait.demeanor.base = tdemeanor;
    }
    else {
        for (var i = 0; i < traitNames.length; i++) {
            document.getElementById(traitNames[i]).value = traitArray[i].base;
        }
    }
    traitPoints = startingTraits - (character.trait.agility.base + character.trait.brains.base + character.trait.constitution.base + character.trait.demeanor.score);
    for (var i = 0; i < traitNames.length; i++) {
        traitArray[i].score = traitArray[i].base;
        instinctArray[i] = traitArray[i].score;
        document.getElementById("skill_" + traitNames[i]).value = traitArray[i].score;
        document.getElementById("s_" + traitNames[i]).innerHTML = traitArray[i].score;
        document.getElementById(instinctNames[i]).innerHTML = instinctArray[i];
    }
    document.getElementById("remaining_traits").innerHTML = traitPoints;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function setSkills() {
    for (var i = 0; i < traitNames.length; i++) {
        document.getElementById("skill_" + traitNames[i]).innerHTML = traitArray[i].score;
    }
    for (var i = 0; i < skillArray.length; i++) {
        skillArray[i].max = traitArray[Math.floor(i / 3)].score;
        document.getElementById(skillNames[i]).max = skillArray[i].max;
        while (document.getElementById(skillNames[i]).value > skillArray[i].max) {
            skillArray[i].base--;
            document.getElementById(skillNames[i]).value = skillArray[i].base;
        }
    }
    skillPoints = character.trait.brains.score * 6;
    if (character.trait.brains.score == 6) {
        for (var i = 0; i < skillArray.length; i++) {
            skillArray[i].base = traitArray[Math.floor(i / 3)].score;
            skillPoints = 0;
        }
    }
    else {
        for (var i = 0; i < skillNames.length; i++) {
            while (document.getElementById(skillNames[i]).value < 0) {
                skillArray[i].base++;
                document.getElementById(skillNames[i]).value = skillArray[i].base;
            }
            skillPoints -= document.getElementById(skillNames[i]).value;
        }
        if (skillPoints >= 0) {
            for (var i = 0; i < skillArray.length; i++) {
                skillArray[i].base = document.getElementById(skillNames[i]).value;
            }
        }
        while (skillPoints < 0) {
            var randomSkill = skillArray[Math.ceil(Math.random() * skillArray.length) - 1];
            randomSkill.base--;
            skillPoints++;
        }
        for (var i = 0; i < skillNames.length; i++) {
            document.getElementById(skillNames[i]).value = skillArray[i].base;
        }
    }
    document.getElementById("remaining_skills").innerHTML = skillPoints;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function setProperties() {
    character.prop.speed = character.trait.agility.score + character.trait.constitution.score;
    var spentXP = 0;
    for (var i = 0; i < character.abilities.length; i++) {
        spentXP += character.abilities[i].xp * character.abilities[i].taken;
    }
    character.prop.xp.cur = parseInt((character.trait.brains.score * 6) + (character.opt.startingxp - spentXP));
    character.prop.xp.max = parseInt((character.trait.brains.score * 6) + character.opt.startingxp);
    character.prop.carry.cur = 0;
    character.prop.carry.max = character.trait.constitution.score * 6;
    character.prop.luck.cur = character.trait.demeanor.score;
    document.getElementById("total_carry").innerHTML = character.prop.carry.cur;
    character.prop.luck.max = character.trait.demeanor.score;
    document.getElementById("gear_max_carry").innerHTML = character.prop.carry.max;
    character.defense.block = character.skill.melee.score;
    character.defense.dodge = character.skill.acrobatics.score;
    character.defense.reflex = character.instinct.perception + character.defense.reflex;
    character.loc.head.hp = character.trait.constitution.score;
    character.loc.larm.hp = character.trait.constitution.score;
    character.loc.rarm.hp = character.trait.constitution.score;
    character.loc.torso.hp = character.trait.constitution.score * 2;
    character.loc.lleg.hp = character.trait.constitution.score;
    character.loc.rleg.hp = character.trait.constitution.score;
    document.getElementById("head_max_hp").innerHTML = character.loc.head.hp;
    document.getElementById("larm_max_hp").innerHTML = character.loc.larm.hp;
    document.getElementById("rarm_max_hp").innerHTML = character.loc.rarm.hp;
    document.getElementById("torso_max_hp").innerHTML = character.loc.torso.hp;
    document.getElementById("lleg_max_hp").innerHTML = character.loc.lleg.hp;
    document.getElementById("rleg_max_hp").innerHTML = character.loc.rleg.hp;
    
    var propArray = [character.prop.speed, character.prop.xp.cur, character.prop.xp.max,
                     character.prop.carry.cur, character.prop.carry.max, character.prop.luck.cur, character.prop.luck.max, 
                     character.defense.block, character.defense.dodge, character.defense.reflex, 
                     character.loc.head.hp, character.loc.rarm.hp, character.loc.larm.hp,
                     character.loc.torso.hp, character.loc.rleg.hp, character.loc.lleg.hp];
    for (var i = 0; i < propArray.length; i++) {
        document.getElementById(propNames[i]).innerHTML = propArray[i];
    }
    character.prop.psyche = character.trait.demeanor.score;
    switch (character.prop.psyche) {
        case 1:
            document.getElementById("psyche_dots").innerHTML = "&#9673; &#9675; &#9675; &#9675; &#9675; &#9675;";
            document.getElementById("s_psyche").innerHTML = "<b>Psyche:</b> <i>Sane</i> &#9673; &#9675; &#9675; &#9675; &#9675; &#9675; <i>Crazy</i>";
            break;
        case 2:
            document.getElementById("psyche_dots").innerHTML = "&#9675; &#9673; &#9675; &#9675; &#9675; &#9675;";
            document.getElementById("s_psyche").innerHTML = "<b>Psyche:</b> <i>Sane</i> &#9675; &#9673; &#9675; &#9675; &#9675; &#9675; <i>Crazy</i>";
            break;
        case 3:
            document.getElementById("psyche_dots").innerHTML = "&#9675; &#9675; &#9673; &#9675; &#9675; &#9675;";
            document.getElementById("s_psyche").innerHTML = "<b>Psyche:</b> <i>Sane</i> &#9675; &#9675; &#9673; &#9675; &#9675; &#9675; <i>Crazy</i>";
            break;
        case 4:
            document.getElementById("psyche_dots").innerHTML = "&#9675; &#9675; &#9675; &#9673; &#9675; &#9675;";
            document.getElementById("s_psyche").innerHTML = "<b>Psyche:</b> <i>Sane</i> &#9675; &#9675; &#9675; &#9673; &#9675; &#9675; <i>Crazy</i>";
            break;
        case 5:
            document.getElementById("psyche_dots").innerHTML = "&#9675; &#9675; &#9675; &#9675; &#9673; &#9675;";
            document.getElementById("s_psyche").innerHTML = "<b>Psyche:</b> <i>Sane</i> &#9675; &#9675; &#9675; &#9675; &#9673; &#9675; <i>Crazy</i>";
            break;
        case 6:
            document.getElementById("psyche_dots").innerHTML = "&#9675; &#9675; &#9675; &#9675; &#9675; &#9673;";
            document.getElementById("s_psyche").innerHTML = "<b>Psyche:</b> <i>Sane</i> &#9675; &#9675; &#9675; &#9675; &#9675; &#9673; <i>Crazy</i>";
            break;
        default:
            break;
    }
    document.getElementById("remaining_xp").innerHTML = character.prop.xp.cur;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function setAbility(ability) {
    var newAbility;
    var x;
    for (var i = 0; i < abilitiesList.length; i++) {
        if (ability.name == abilitiesList[i].name) {                                                       /////////////////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PROBLEM!
            newAbility = abilitiesList[i];
            x = i;
        }
    }

    if (newAbility.xp > character.prop.xp.cur) {
        newAbility.taken = 0;
        document.getElementById("abtaken" + x).value = 0;
        document.getElementById("abcheck" + x).checked = false;
    }
    
    if (newAbility.xp <= character.prop.xp.cur) {
        switch (ability.type) {
            case "checkbox":
                for (var i = 0; i < abilitiesList.length; i++) {
                    if (document.getElementById("abcheck" + i).checked == true) {
                        if (document.getElementById("abtaken" + i).value == 0) {
                            document.getElementById("abtaken" + i).value = 1;
                        }
                        abilitiesList[i].taken = parseInt(document.getElementById("abtaken" + i).value);
                    }
                    if (document.getElementById("abcheck" + i).checked == false) {
                        document.getElementById("abtaken" + i).value = 0;
                        abilitiesList[i].taken = 0;
                    }
                }
                break;
            case "number":
                if (ability.value == 0) {
                    for (var i = 0; i < abilitiesList.length; i++) {
                        if (ability.name == abilitiesList[i].name) {
                            if (document.getElementById("abcheck" + i).checked == true) {
                                document.getElementById("abcheck" + i).checked = false;
                                abilitiesList[i].taken = 0;
                            }
                            if (document.getElementById("abcheck" + i).checked == false) {
                                abilitiesList[i].taken = 0;
                            }
                        }
                    }
                }
                if (ability.value > 0) {
                    for (var i = 0; i < abilitiesList.length; i++) {
                        if (ability.name == abilitiesList[i].name) {
                            if (document.getElementById("abcheck" + i).checked == true) {
                                abilitiesList[i].taken = parseInt(document.getElementById("abtaken" + i).value);
                            }
                            if (document.getElementById("abcheck" + i).checked == false) {
                                document.getElementById("abcheck" + i).checked = true;
                                abilitiesList[i].taken = parseInt(document.getElementById("abtaken" + i).value);
                            }
                        }
                    }
                }
                break;
        }
    }

    character.prop.xp.cur = (character.trait.brains.score * 6) + character.opt.startingxp;
    character.abilities = [];
    for (var i = 0; i < abilitiesList.length; i++) {
        if (document.getElementById("abcheck" + i).checked == true) {
            abilitiesList[i].taken = parseInt(document.getElementById("abtaken" + i).value);
            character.abilities.push(abilitiesList[i]);
        }
    }
    character.abilities.sort();

    var spentXP = 0;
    for (var i = 0; i < abilitiesList.length; i++) {
        for (var j = 0; j < character.abilities.length; j++) {
            if (character.abilities[j].name == abilitiesList[i].name) {
                spentXP += parseInt(character.abilities[j].xp) * parseInt(character.abilities[j].taken);
                document.getElementById("s_ability_name" + (j + 1)).innerHTML = character.abilities[j].name;
                document.getElementById("s_ability_desc" + (j + 1)).innerHTML = character.abilities[j].desc;
                for (var k = 0; k < document.getElementById("abdesc" + i).childNodes.length; k++) {
                    if (document.getElementById("abdesc" + i).childNodes[k].nodeName == "SELECT") {
                        var abi = character.abilities[j].desc;
                        var select = document.getElementById("abdesc" + i).childNodes[k].selectedOptions[0].label;
                        var description = abi + " (" + select + ")";
                        document.getElementById("s_ability_desc" + (j + 1)).innerHTML = description;
                    }
                }
                document.getElementById("s_ability_taken" + (j + 1)).innerHTML = character.abilities[j].taken;
            }
        }
    }
    character.prop.xp.cur -= spentXP;
    document.getElementById("remaining_xp").innerHTML = character.prop.xp.cur;
    specialAbilities();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function specialAbilities() {
//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Self Improvement
    for (var i = 0; i < traitArray.length; i++) {
        traitArray[i].score = traitArray[i].base;
    }
    if (document.getElementById("abcheck59").checked == true) {
        var trait = document.getElementById("abSelfImprovement").value;
        if (document.getElementById(trait).value < 6) {
            switch (trait) {
                case "agility":
                    character.trait.agility.score += 1;
                    break;
                case "brains":
                    character.trait.brains.score += 1;
                    break;
                case "constitution":
                    character.trait.constitution.score += 1;
                    break;
                case "demeanor":
                    character.trait.demeanor.score += 1;
                    break;
            }
        }
        if (document.getElementById(trait).value == 6) {
            document.getElementById("abcheck59").checked = false;
            for (var i = 0; i < traitArray.length; i++) {
                traitArray[i].score = traitArray[i].base;
            }
        }
    }
    for (var i = 0; i < traitArray.length; i++) {
        traitNames[i].value = traitArray[i].score;
        document.getElementById("skill_" + traitNames[i]).value = traitArray[i].score;
        document.getElementById("s_" + traitNames[i]).innerHTML = traitArray[i].score;
        instinctArray[i] = traitArray[i].score;
        instinctNames[i].value = instinctArray[i];
    }
    for (var i = 0; i < skillArray.length; i++) {
        skillArray[i].max = traitArray[Math.floor(i / 3)].score;
        document.getElementById(skillNames[i]).max = skillArray[i].max;
        skillArray[i].score = skillArray[i].base;
    }

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Hone Instinct
    for (var i = 0; i < instinctArray.length; i++) {
        instinctArray[i] = traitArray[i].score;
    }
    if (document.getElementById("abcheck31").checked == true) {
        var instinct = document.getElementById("abHoneInstinct").value;
        switch (instinct) {
            case "athletics":
                character.instinct.athletics += 1;
                break;
            case "perception":
                character.instinct.perception += 1;
                break;
            case "socialize":
                character.instinct.socialize += 1;
                break;
            case "stealth":
                character.instinct.stealth += 1;
                break;
        }
    }
    for (var i = 0; i < instinctArray.length; i++) {
        instinctNames[i].value = instinctArray[i];
        document.getElementById("s_" + instinctNames[i]).innerHTML = instinctArray[i];
    }

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Danger Sense
    character.defense.reflex = character.instinct.perception;
    if (document.getElementById("abcheck21").checked == true) {
        for (var i = 0; i < character.abilities.length; i++) {
            if (character.abilities[i].name == "Danger Sense") {
                character.defense.reflex += character.abilities[i].taken;
            }
        } 
    }
    document.getElementById("s_reflex").innerHTML = character.defense.reflex;

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Fortunate
    character.prop.luck.base = character.trait.demeanor.score;
    character.prop.luck.cur = character.prop.luck.base;
    character.prop.luck.max = character.prop.luck.base;
    if (document.getElementById("abcheck30").checked == true) {
        for (var i = 0; i < character.abilities.length; i++) {
            if (character.abilities[i].name == "Fortunate") {
                character.prop.luck.cur += character.abilities[i].taken;
                character.prop.luck.max += character.abilities[i].taken
            }
        } 
    }
    document.getElementById("s_max_luck").innerHTML = character.prop.luck.max;

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Strong Back
    character.prop.carry.base = character.trait.constitution.score * 6;
    character.prop.carry.max = character.prop.carry.base;
    if (document.getElementById("abcheck13").checked == true) {
        for (var i = 0; i < character.abilities.length; i++) {
            character.prop.carry.max = character.prop.carry.base + character.abilities[i].taken;
        }
    }
    document.getElementById("s_cur_carry").innerHTML = Math.round(character.prop.carry.cur);
    document.getElementById("s_max_carry").innerHTML = character.prop.carry.max;

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Fleet Footed
    character.prop.speed = character.trait.agility.score + character.trait.constitution.score;
    if (document.getElementById("abcheck29").checked == true) {
        for (var i = 0; i < character.abilities.length; i++) {
            character.prop.speed += character.abilities[i].taken;
        }
    }
    document.getElementById("s_speed").innerHTML = character.prop.speed;

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Rugged
    character.loc.head.hp = character.trait.constitution.score;
    character.loc.larm.hp = character.trait.constitution.score;
    character.loc.rarm.hp = character.trait.constitution.score;
    character.loc.torso.hp = character.trait.constitution.score * 2;
    character.loc.lleg.hp = character.trait.constitution.score;
    character.loc.rleg.hp = character.trait.constitution.score;
    if (document.getElementById("abcheck56").checked == true) {
        character.loc.head.hp += 1;
        character.loc.larm.hp += 1;
        character.loc.rarm.hp += 1;
        character.loc.torso.hp += 2;
        character.loc.lleg.hp += 1;
        character.loc.rleg.hp += 1;
    }
    for (var i = 0; i < healthArray.length; i++) {
        document.getElementById("s_" + healthNames[i] + "_hp").innerHTML = healthArray[i];
    }

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Weapon Training
    for (var i = 0; i < rangedList.length; i++) {
        rangedList[i].atk = 0;
        meleeList[i].atk = 0;
    }
    if (document.getElementById("abcheck14").checked == true) {
        var trainedWeapon = document.getElementById("abWeaponTraining").value;
        for (var i = 0; i < rangedList.length; i++) {
            if (rangedList[i].name == trainedWeapon) {
                rangedList[i].atk = character.skill.ranged.score + 1;
            }
            if (meleeList[i].name == trainedWeapon) {
                meleeList[i].atk = character.skill.melee.score + 1;
            }
        }
    }

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Powerful Strike
    for (var i = 0; i < meleeList.length; i++) {
        meleeList[i].dmgbonus = 0;
    }
    if (document.getElementById("abcheck49").checked == true) {
        var powerfulWeapon = document.getElementById("abPowerfulStrike").value;
        for (var i = 0; i < meleeList.length; i++) {
            if (meleeList[i].name == powerfulWeapon) {
                meleeList[i].dmgbonus = parseInt(document.getElementById("abtaken49").value);
            }
        }
    }

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Karate, Boxing, Kick-Boxing
    if (document.getElementById("abcheck41").checked == true) {
        document.getElementById("s_weap0_notes").innerHTML += " <i>Chop</i>.";
    }
    if (document.getElementById("abcheck47").checked == true) {
        document.getElementById("s_weap0_notes").innerHTML += " <i>Rapid</i>.";
    }
    if (document.getElementById("abcheck36").checked == true) {
        document.getElementById("s_weap0_notes").innerHTML += " <i>Slam</i>.";
    }

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Flurry Attack x1
    for (var i = 0; i < meleeList.length; i++) {
        meleeList[i].dmgbonus = 0;
    }
    if (document.getElementById("abcheck52").checked == true) {
        var flurryWeapon = document.getElementById("abPowerfulStrike").value;
        for (var i = 0; i < meleeList.length; i++) {
            if (meleeList[i].name == flurryWeapon) {
                meleeList[i].notes += " <i>Rapid</i>.";
            }
        }
    }

//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Bump Fire x1


//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Unorthodox Methods x1


//----------------------------------------------------------------------------------------------------------------
                                                                                                   //Radical Reinvention x1


//----------------------------------------------------------------------------------------------------------------

/*

function radicalReinvention() {
    var ragility = Number(document.getElementById("rr_agility").value);
    var rbrains = Number(document.getElementById("rr_brains").value);
    var rconstitution = Number(document.getElementById("rr_constitution").value);
    var rdemeanor = Number(document.getElementById("rr_demeanor").value);
    var rrTraitPoints = 12 - ragility - rbrains - rconstitution - rdemeanor;
    if (document.getElementById("abcheck58").checked == true && rrTraitPoints >= 0) {
        character.trait.agility.score = ragility;
        character.trait.brains.score = rbrains;
        character.trait.constitution.score = rconstitution;
        character.trait.demeanor.score = rdemeanor;
        character.instinct.athletics = character.trait.constitution.score;
        character.instinct.perception = character.trait.brains.score;
        character.instinct.socialize = character.trait.demeanor.score;
        character.instinct.stealth = character.trait.agility.score;
        document.getElementById("stealth").value = character.instinct.stealth;
        document.getElementById("perception").value = character.instinct.perception;
        document.getElementById("athletics").value = character.instinct.athletics;
        document.getElementById("socialize").value = character.instinct.socialize;
    } else {
        document.getElementById("agility").value = character.trait.agility.score;
        document.getElementById("brains").value = character.trait.brains.score;
        document.getElementById("constitution").value = character.trait.constitution.score;
        document.getElementById("demeanor").value = character.trait.demeanor.score;
    }
    document.getElementById("rr_points").value = rrTraitPoints;
}

function unorthodoxMethods() {
    var unorthodoxTrait = document.getElementById("unorthodox_trait").value;
    var unorthodoxSkill = document.getElementById("unorthodox_skill").value;
    if (document.getElementById("abcheck34").checked == true) {
        switch (unorthodoxSkill) {
                
        }
        switch (unorthodoxTrait) {
            case "agility":
                unorthodoxTrait = character.trait.agility;
            case "brains":
                unorthodoxTrait = character.trait.brains;
            case "constitution":
                unorthodoxTrait = character.trait.constitution;
            case "demeanor":
                unorthodoxTrait = character.trait.demeanor;
        }
    }
}

*/

}
///////////////////////////////////////////////////////////////////////////////////////////////////

function setCarry() {
    character.prop.carry.cur = 0.0;
    if (character.gear.armor[0] != undefined) {
        for (var i = 0; i < character.gear.armor.length; i++) {
            character.prop.carry.cur += character.gear.armor[i].sz;
        }
    }
    if (character.gear.weapons[0] != undefined) {
        for (var i = 0; i < character.gear.weapons.length; i++) {
            character.prop.carry.cur += character.gear.weapons[i].sz;
        }
    }
    if (character.gear.backpack[0] != undefined) {
        for (var i = 0; i < character.gear.backpack.length; i++) {
            character.prop.carry.cur += character.gear.backpack[i].sz;
        }
    }
    if (character.gear.ammo[0] != undefined) {
        for (var i = 0; i < character.gear.ammo.length; i++) {
            character.prop.carry.cur += character.gear.ammo[i].sz;
        }
    }
    document.getElementById("total_carry").innerHTML = Math.round(character.prop.carry.cur);
    document.getElementById("carry_warning").innerHTML = "";
    if (document.getElementById("total_carry").innerHTML > character.prop.carry.max) {
        var newSpeed = 0;
        if ((document.getElementById("total_carry").innerHTML - character.prop.carry.max) >= character.prop.speed) {
            newSpeed = 1;
        }
        else {
            newSpeed = character.prop.speed - (document.getElementById("total_carry").innerHTML - character.prop.carry.max);
        }
        if ((document.getElementById("total_carry").innerHTML - character.prop.carry.max) == 1) {
            document.getElementById("carry_warning").innerHTML = "<b>WARNING:</b> You are carrying too much <b>Gear</b>!<br>Your <b>Speed</b> will be reduced to "+newSpeed+"yd.";
        }
        if ((document.getElementById("total_carry").innerHTML - character.prop.carry.max) > 1) {
            document.getElementById("carry_warning").innerHTML = "<b>WARNING:</b> You are carrying too much <b>Gear</b>!<br>Your <b>Speed</b> will be reduced to "+newSpeed+"yds.";
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function setGear() {
    if (character.gear.armor.length > 0) {
        for (var i = 0; i < character.gear.armor.length; i++) {
            if (character.trait.constitution.score < character.gear.armor[i].sz) {
                var armorPenalty = character.gear.armor[i].sz - character.trait.constitution.score;
                var oldSpeed = character.prop.speed;
                var newSpeed = oldSpeed - armorPenalty;
                if (newSpeed < 1) {
                    newSpeed = 1;
                }
            }
        }
        document.getElementById("s_speed").innerHTML = newSpeed;
    }
    document.getElementById("gear_xp").innerHTML = character.prop.xp.cur;
    document.getElementById("s_cur_xp").innerHTML = character.prop.xp.cur;
    document.getElementById("s_max_xp").innerHTML = character.prop.xp.max;
    document.getElementById("s_block").innerHTML = character.defense.block;
    document.getElementById("s_dodge").innerHTML = character.defense.dodge;
    
    var headList = "";
    var headNotes = "";
    //var headSize;
    var rarmList = "";
    var rarmNotes = "";
    //var rarmSize;
    var larmList = "";
    var larmNotes = "";
    //var larmSize;
    var torsoList = "";
    var torsoNotes = "";
    //var torsoSize;
    var rlegList = "";
    var rlegNotes = "";
    //var rlegSize;
    var llegList = "";
    var llegNotes = "";
    //var llegSize;
    
    //have to add sheet clearing loop to clearAll() to erase armor slots from sheet, same for ammo and gear
    for (var i = 0; i < character.gear.armor.length; i++) {
        for (var l = 0; l < character.gear.armor[i].loc.length; l++) {
            switch (character.gear.armor[i].loc[l]) {
                case "Head":
                    headList = character.gear.armor[i].name;
                    headNotes = character.gear.armor[i].notes;
                    headSize = character.gear.armor[i].sz;
                    document.getElementById("s_head_armor_type").innerHTML = headList;
                    document.getElementById("s_head_armor_notes").innerHTML = headNotes;
      //              document.getElementById("s_head_armor_sz").innerHTML = headSize;
                    document.getElementById("s_head_max_ar").innerHTML = character.loc.head.ar;
                    break;
                case "Arms":
                    if (character.gear.armor.length > i + 1) {
                        rarmList += character.gear.armor[i].name + "<br>";
                        rarmNotes += character.gear.armor[i].notes + "<br>";
        //                rarmSize += character.gear.armor[i].sz + "<br>";
                        larmList += character.gear.armor[i].name + "<br>";
                        larmNotes += character.gear.armor[i].notes + "<br>";
          //              larmSize += character.gear.armor[i].sz + "<br>";
                    }
                    if (character.gear.armor.length == i + 1) {
                        rarmList += character.gear.armor[i].name;
                        rarmNotes += character.gear.armor[i].notes;
//                        rarmSize += character.gear.armor[i].sz;
                        larmList += character.gear.armor[i].name;
                        larmNotes += character.gear.armor[i].notes;
  //                      larmSize += character.gear.armor[i].sz;
                    }
                    document.getElementById("s_rarm_armor_type").innerHTML = rarmList;
                    document.getElementById("s_rarm_armor_notes").innerHTML = rarmNotes;
    //                document.getElementById("s_rarm_armor_sz").innerHTML = rarmSize;
                    document.getElementById("s_rarm_max_ar").innerHTML = character.loc.rarm.ar;
                    document.getElementById("s_larm_armor_type").innerHTML = larmList;
                    document.getElementById("s_larm_armor_notes").innerHTML = larmNotes;
    //                document.getElementById("s_larm_armor_sz").innerHTML = larmSize;
                    document.getElementById("s_larm_max_ar").innerHTML = character.loc.larm.ar;
                    break;
                case "Torso":
                    if (character.gear.armor.length > i + 1) {
                        torsoList += character.gear.armor[i].name + "<br>";
                        torsoNotes += character.gear.armor[i].notes + "<br>";
//                        torsoSize += character.gear.armor[i].sz + "<br>";
                    }
                    if (character.gear.armor.length == i + 1) {
                        torsoList += character.gear.armor[i].name;
                        torsoNotes += character.gear.armor[i].notes;
  //                      torsoSize += character.gear.armor[i].sz;
                    }
                    document.getElementById("s_torso_armor_type").innerHTML = torsoList;
                    document.getElementById("s_torso_armor_notes").innerHTML = torsoNotes;
//                    document.getElementById("s_torso_armor_sz").innerHTML = torsoSize;
                    document.getElementById("s_torso_max_ar").innerHTML = character.loc.torso.ar;
                    break;
                case "Legs":
                    if (character.gear.armor.length > i + 1) {
                        rlegList += character.gear.armor[i].name + "<br>";
                        rlegNotes += character.gear.armor[i].notes + "<br>";
//                        rlegSize += character.gear.armor[i].sz + "<br>";
                        llegList += character.gear.armor[i].name + "<br>";
                        llegNotes += character.gear.armor[i].notes + "<br>";
//                        llegSize += character.gear.armor[i].sz + "<br>";
                    }
                    if (character.gear.armor.length == i + 1) {
                        rlegList += character.gear.armor[i].name;
                        rlegNotes += character.gear.armor[i].notes;
//                        rlegSize += character.gear.armor[i].sz;
                        llegList += character.gear.armor[i].name;
                        llegNotes += character.gear.armor[i].notes;
//                        llegSize += character.gear.armor[i].sz;
                    }
                    document.getElementById("s_rleg_armor_type").innerHTML = rlegList;
                    document.getElementById("s_rleg_armor_notes").innerHTML = rlegNotes;
//                    document.getElementById("s_rleg_armor_sz").innerHTML = rlegSize;
                    document.getElementById("s_rleg_max_ar").innerHTML = character.loc.rleg.ar;
                    document.getElementById("s_lleg_armor_type").innerHTML = llegList;
                    document.getElementById("s_lleg_armor_notes").innerHTML = llegNotes;
//                    document.getElementById("s_lleg_armor_sz").innerHTML = llegSize;
                    document.getElementById("s_lleg_max_ar").innerHTML = character.loc.lleg.ar;
                default:
                    break;
            }
        }
    }

    specialAbilities();
    if (character.gear.weapons.length > 0) {
        for (var i = 0; i < 4; i++) {
            if (character.gear.weapons[i] != undefined) {
                document.getElementById("s_weap" + i + "_type").innerHTML = character.gear.weapons[i].name;
                if (character.gear.weapons[i] instanceof MeleeWeapon) {
                    document.getElementById("s_weap" + i + "_atk").innerHTML = character.skill.melee.score;
                    document.getElementById("s_weap" + i + "_rng").innerHTML = "-";
                    document.getElementById("s_weap" + i + "_cal").innerHTML = "-";
                    document.getElementById("s_weap" + i + "_mag").innerHTML = "-";
                }
                if (character.gear.weapons[i] instanceof RangedWeapon) {
                    document.getElementById("s_weap" + i + "_atk").innerHTML = character.skill.ranged.score;
                    document.getElementById("s_weap" + i + "_rng").innerHTML = character.gear.weapons[i].rng;
                    document.getElementById("s_weap" + i + "_cal").innerHTML = character.gear.weapons[i].cal;
                    document.getElementById("s_weap" + i + "_mag").innerHTML = character.gear.weapons[i].mag;
                }
                document.getElementById("s_weap" + i + "_dmg").innerHTML = character.gear.weapons[i].dmg + character.gear.weapons[i].dmgbonus;
                document.getElementById("s_weap" + i + "_sz").innerHTML = character.gear.weapons[i].sz;
                document.getElementById("s_weap" + i + "_notes").innerHTML = character.gear.weapons[i].notes;
            }
            if (character.gear.weapons[i] == undefined) {
                document.getElementById("s_weap" + i + "_type").innerHTML = "";
                document.getElementById("s_weap" + i + "_atk").innerHTML = "";
                document.getElementById("s_weap" + i + "_dmg").innerHTML = "";
                document.getElementById("s_weap" + i + "_rng").innerHTML = "";
                document.getElementById("s_weap" + i + "_sz").innerHTML = "";
                document.getElementById("s_weap" + i + "_cal").innerHTML = "";
                document.getElementById("s_weap" + i + "_mag").innerHTML = "";
                document.getElementById("s_weap" + i + "_notes").innerHTML = "";
            }
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                        REFRESH FUNCTIONS                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////

function armorWeight(checkedArmor, checkBox) {
    var maxWeight = character.trait.constitution.score * 3;
    var curWeight = 0;
    var characterArmorLength = character.gear.armor.length;
    for (var i = 0; i < characterArmorLength; i++) {
        curWeight += character.gear.armor[i].sz;
    }
    if (curWeight > maxWeight) {
        alert("You have equipped too much Armor.");
        checkBox.checked = false;
    }
    if (curWeight <= maxWeight) {
        character.gear.armor.push(checkedArmor);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function clearSheet() {
    for (var i = 0; i < sheetElements.length; i++) {
        document.getElementById(sheetElements[i]).innerHTML = "";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                          CHECK FUNCTIONS                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////

function checkDescription() {    
    if (character.desc.gender == "") {
        randomGender();
    }
    
    if (character.desc.name == "") {
        randomName();
    }

    if (character.desc.age == 0) {
        randomAge();
    }
    
    if (character.desc.height == 0) {    
        randomHeight();
    }
    
    if (character.desc.weight == 0) {
        randomWeight();
    }
    
    if (character.desc.skin == "") {
        randomSkin();
    }
    
    if (character.desc.hair == "") {
        randomHair();
    }
    
    if (character.desc.faction == "") {
        randomFaction();
    }
    ageTraitAdjust();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function ageTraitAdjust() {
    character.desc.age = document.getElementById("character_age").value;
    if (character.desc.age >= 8 && character.desc.age <= 13) {
        startingTraits = 4;
        maxTraitScore = 1;
    }
    else if (character.desc.age >= 14 && character.desc.age <= 17) {
        startingTraits = 8;
        maxTraitScore = 3;
    }
    else if (character.desc.age >= 18 && character.desc.age <= 50) {
        startingTraits = 12;
        maxTraitScore = 6;
    }
    else if (character.desc.age >= 51 && character.desc.age <= 70) {
        startingTraits = 11;
        maxTraitScore = 5;
    }
    else if (character.desc.age >= 71 && character.desc.age <= 80) {
        startingTraits = 9;
        maxTraitScore = 4;
    }
    else if (character.desc.age >= 81) {
        startingTraits = 6;
        maxTraitScore = 2;
    }
    for (var i = 0; i < traitArray.length; i++) {
        traitArray[i].max = maxTraitScore;
        document.getElementById(traitNames[i]).max = maxTraitScore;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function factionFilter() {
    if (character.desc.faction == "Amazon") {
        character.desc.gender = "Female";
        document.getElementById("character_gender").value = character.desc.gender;
        document.getElementById("s_character_gender").value = character.desc.gender;
    }
    if (character.desc.faction == "Aryan") {
        var lessSkin = ["Pale", "White", "Tan"];
        var skinRoll = lessSkin[Math.floor(Math.random() * lessSkin.length)];
        character.desc.skin = skinRoll;
        document.getElementById("character_skin").value = character.desc.skin;
        document.getElementById("s_character_skin").value = character.desc.skin;
        var startingPsyche = character.prop.psyche;
        character.prop.psyche = Math.ceil(startingPsyche / 2);
    }
    if (character.desc.faction == ("Cannibal" || "Cultist")) {
        character.prop.psyche = 1;
    }
    if (character.desc.faction == "Gangsta") {
        var lessSkin = ["Tan", "Olive", "Brown", "Black"];
        var skinRoll = lessSkin[Math.floor(Math.random() * lessSkin.length)];
        character.desc.skin = skinRoll;
        document.getElementById("character_skin").value = character.desc.skin;
        document.getElementById("s_character_skin").value = character.desc.skin;
    }
    if (character.desc.faction == ("Mercenary" || "Pirate" || "Raider")) {
        var startingPsyche = character.prop.psyche;
        character.prop.psyche = Math.ceil(startingPsyche / 2);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function checkTraits() {
    if (traitPoints != 0) {
        randomTraits();
    }
    for (var i = 0; i < traitNames.length; i++) {
        document.getElementById("s_" + traitNames[i]).innerHTML = traitArray[i].score;
        document.getElementById("s_" + instinctNames[i]).innerHTML = instinctArray[i];
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function checkSkills() {
    skillPoints = character.trait.brains.score * 6;
    for (var i = 0; i < skillArray.length; i++) {
        skillPoints -= skillArray[i].base;
    }
    if (skillPoints != 0) {
        randomSkills();
    }
    for (var i = 0; i < skillNames.length; i++) {
        skillArray[i].score = skillArray[i].base;
        document.getElementById("s_" + skillNames[i]).innerHTML = skillArray[i].score;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function checkGear() {
    if (startingArmor == false) {
        getArmor();    
        document.getElementById("equip_armor").checked = true;
    }
    if (startingMelee == false) {
        getMelee();
        document.getElementById("equip_melee").checked = true;
    }
    if (startingRanged == false) {
        getRanged();
        document.getElementById("equip_ranged").checked = true;
    }
    if (startingAmmo == false) {
        getAmmo();
        document.getElementById("equip_ammo").checked = true;
    }
    if (startingMGL == false) {
        getGear();
        for (var i = 0; i < allRolledItems.length; i++) {
            document.getElementById("equip_gear" + (i+1)).checked = true;
        }
    }
    equipStuff();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                           NAV FUNCTIONS                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////

function clearAll() {
character = {
    desc: {
        player: "",
        name: "",
        faction: "",
        heightFeet: 0,
        heightInches: 0,
        height: 0,
        totalInches: 0,
        weight: 0,
        hair: "",
        skin: "",
        gender: "",
        age: 0
    },
    opt: {
        startingxp: 0,
        flaw: {name: "", desc: ""},
        history: "",
        profession: {name: "", spec: "", gear: ""},
        rel1: {com: "", notes: ""},
        rel2: {com: "", notes: ""},
        rel3: {com: "", notes: ""},
        rel4: {com: "", notes: ""},
        rel5: {com: "", notes: ""}
    },
    trait: {
        agility: {base: 1, score: 1, max: 6},
        brains: {base: 1, score: 1, max: 6},
        constitution: {base: 1, score: 1, max: 6},
        demeanor: {base: 1, score: 1, max: 6}
    },
    instinct: {stealth: 1, perception: 1, athletics: 1, socialize: 1},
    prop: {
        speed: 2,
        xp: {cur: 6, max: 6},
        carry: {base: 6, cur: 0, max: 6},
        luck: {base: 1, cur: 1, max: 1},
        psyche: 0
    },
    skill: {
        acrobatics: {base: 0, score: 0, max: 1},
        build: {base: 0, score: 0, max: 1},
        drive: {base: 0, score: 0, max: 1},
        entertain: {base: 0, score: 0, max: 1},
        larceny: {base: 0, score: 0, max: 1},
        leadership: {base: 0, score: 0, max: 1},
        medicine: {base: 0, score: 0, max: 1},
        melee: {base: 0, score: 0, max: 1},
        ranged: {base: 0, score: 0, max: 1},
        science: {base: 0, score: 0, max: 1},
        survival: {base: 0, score: 0, max: 1},
        tame: {base: 0, score: 0, max: 1}
    },
    defense: {block: 0, dodge: 0, reflex: 1},
    loc: {
        head: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        rarm: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        larm: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        torso: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        rleg: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        },
        lleg: {
            hp: 1,
            ar: 0,
            type: "",
            sz: 0,
            notes: ""
        }
    },
    abilities: [],
    gear: {armor: [], weapons: [], backpack: [], ammo: []}
};
    factionArray = ["Independent", "Amazon", "Aryan", "Bandit", "Barbarian", "Cannibal", "Cultist", "Gangsta", "Guerrilla", "Hippy", "Mercenary", "Militia", "Pirate", "Punk", "Raider", "Trader"];
    startingTraits = 12;
    traitPoints = startingTraits;
    maxTraitScore = 6;
    skillPoints = character.trait.brains.score * 6;
    rolledArmor = "";
    rolledMelee = "";
    rolledRanged ="";
    rolledAmmo = "";
    rolledItem = "";
    allRolledItems = [];
    startingArmor = false;
    startingMelee = false;
    startingRanged = false;
    startingAmmo = false;
    startingMGL = false;
    character.gear.armor = [];
    character.gear.weapons = [];
    character.gear.ammo = [];
    character.gear.backpack = [];
    listCount = 1;
    document.getElementById("mgl_gear").innerHTML = "<tr><th id=\"mgl_name_header\">Gear</th><th id=\"mgl_notes_header\">Notes</th><th id=\"mgl_size_header\">Size</th><th id=\"mgl_quantity_header\">Qty</th><th id=\"mgl_equip_header\">Equip</th></tr><tr><td id=\"mgl_name\">&nbsp;</td><td id=\"mgl_notes\">&nbsp;</td><td id=\"mgl_size\">&nbsp;</td><td id=\"mgl_quantity\">&nbsp;</td><td id=\"mgl_gear\">&nbsp;</td></tr>";
    clearSheet();
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function tabSelect(stepTab) {
    for (var i = 1; i <= 7; i++) {
        if (i == stepTab) {
            document.getElementById("step" + stepTab).style.display = "block";
            switch (stepTab) {
                case 1:
                    setDescription();
                    break;
                case 2:
                    checkDescription();
                    setDescription();
                    setTraits();
                    break;
                case 3:
                    checkDescription();
                    setDescription();
                    checkTraits();
                    setSkills();
                    break;
                case 4:
                    checkDescription();
                    setDescription();
                    checkTraits();
                    checkSkills();
                    setProperties();
                    break;
                case 5:
                    checkDescription();
                    setDescription();
                    checkTraits();
                    checkSkills();
                    setProperties();
                    break;
                case 6:
                    checkDescription();
                    setDescription();
                    checkTraits();
                    checkSkills();
                    setProperties();
                    setGear();
                    break;
                case 7:
                    checkDescription();
                    setDescription();
                    checkTraits();
                    checkSkills();
                    setProperties();
                    checkGear();
                    setGear();
                    break;
            }
        }
        else {
            document.getElementById("step" + i).style.display = "none";
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function genPDF() {
    html2canvas(document.getElementById("character_sheet_1"),  {
        onrendered: function(canvas) {
            var img = canvas.toDataURL("image/png");
            var doc = new jsPDF(); //no parameters?
            doc.addImage(img, "JPEG", -1, -1)//needs fiddling
            var sheetName = character.desc.name;
            doc.save(sheetName + " Sheet.pdf");
        },
        height: 1650,
        letterRendering: true
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////