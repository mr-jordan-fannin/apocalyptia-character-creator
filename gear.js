function Armor(name, headar, armsar, torsoar, legsar, loc, notes, sz) {
    this.name = name;
    this.headar = headar;
    this.armsar = armsar;
    this.torsoar = torsoar;
    this.legsar = legsar;
    this.loc = loc;
    this.notes = notes;
    this.sz = sz;
}

var iArmyHelmet = new Armor("Army Helmet", 4, 0, 0, 0, ["Head"], "<i>Camo</i> <b>+1</b>.", 2);
var iAthleticPads = new Armor("Athletic Pads", 0, 3, 1, 1, ["Arms","Torso","Legs"], "", 4);
var iBlueJeans = new Armor("Blue Jeans", 0, 0, 0, 1, ["Legs"], "", 1);
var iCargoPants = new Armor("Cargo Pants", 0, 0, 0, 1, ["Legs"], "6 Storage Slots.", 1);
var iCoveralls = new Armor("Coveralls", 0, 1, 1, 1, ["Arms","Torso","Legs"], "<i>Camo</i> <b>+1</b>. <i>CR</i>.", 3);
var iDenimJacket = new Armor("Denim Jacket", 0, 1, 1, 0, ["Arms","Torso"], "", 2);
var iFirefighterSuit = new Armor("Firefighter Suit", 4, 4, 4, 4, ["Head","Arms","Torso","Legs"], "<i>CR</i>. <i>FR</i>. Mask. <b>-1 Speed</b>.", 5);
var iFlakJacket = new Armor("Flak Jacket", 0, 0, 4, 0, ["Torso"], "<i>Camo</i> <b>+1</b>", 3);
var iGhillieSuit = new Armor("Ghillie Suit", 1, 1, 1, 1, ["Head","Arms","Torso","Legs"], "<b>+3</b> <u><i>Stealth</i></u> in Rural <b><i>AREAS</i></b>. <i>CR</i>.", 4);
var iHikingBoots = new Armor("Hiking Boots", 0, 0, 0, 2, ["Legs"], "<i>CR</i>. <i>FR</i>. <i>Tread</i> <b>+3</b>.", 2);
var iInterceptorArmor = new Armor("Interceptor Armor", 0, 4, 8, 0, ["Torso"], "<i>Camo</i> <b>+1</b>. <i>CR</i>. <i>FR</i>.", 5);
var iKevlarGloves = new Armor("Kevlar Gloves", 0, 2, 0, 0, ["Arms"], "<i>FR</i>.", 1);
var iKevlarVest = new Armor("Kevlar Vest", 0, 0, 6, 0, ["Torso"], "<i>CR</i>. <i>FR</i>.", 3);
var iLeatherJacket = new Armor("Leather Jacket", 0, 2, 2, 0, ["Arms","Torso"], "<i>CR</i>.", 2);
var iMotorcycleHelmet = new Armor("Motorcycle Helmet", 3, 0, 0, 0, ["Head"], "<i>FR</i>. <i>Mask</i>.", 2);
var iNBCSuit = new Armor("NBC Suit", "-", "-", "-", "-", ["Head","Arms","Torso","Legs"], "<b>+6 <u><i>C</i></u></b> vs toxins.", 2);
var iPaintballMask = new Armor("Paintball Mask", 1, 0, 0, 0, ["Head"], "<i>Mask</i>.", 1);
var iRiotHelmet = new Armor("Riot Helmet", 5, 0, 0, 0, ["Head"], "<i>FR</i>. <i>Mask</i>.", 2);
var iSportsHelmet = new Armor("Sports Helmet", 2, 0, 0, 0, ["Head"], "<i>Mask</i>.", 2);
var iSteelToeBoots = new Armor("Steel-Toe Boots", 0, 0, 0, 2, ["Legs"], "<b>BDMG</b> = " + character.trait.constitution.score + 1 + "</b>. <i>FR</i>. <i>Tread</i> <b>+1</b>.", 2);
var iTacticalVest = new Armor("Tactical Vest", 0, 0, 1, 0, ["Torso"], "6 Storage Slots.", 1);
var iUndercoverVest = new Armor("Undercover Vest", 0, 0, 5, 0, ["Torso"], "<i>FR</i>.", 4);
var iWinterCoat = new Armor("Winter Coat", 0, 1, 1, 0, ["Arms","Torso"], "<i>CR</i>.", 2);
var iWorkGloves = new Armor("Work Gloves", 0, 1, 0, 0, ["Arms"], "<i>FR</i>.", 1);

var armorList = [iArmyHelmet, iAthleticPads, iBlueJeans, iCargoPants, iCoveralls, iDenimJacket, iFirefighterSuit, iFlakJacket,
                iGhillieSuit, iHikingBoots, iInterceptorArmor, iKevlarGloves, iKevlarVest, iLeatherJacket, iMotorcycleHelmet, 
                iNBCSuit, iPaintballMask, iRiotHelmet, iSportsHelmet, iSteelToeBoots, iTacticalVest, iUndercoverVest, 
                iWinterCoat, iWorkGloves];

///////////////////////////////////////////////////////////////////////////////////////////////////

function MeleeWeapon(name, atk, dmg, dmgbonus, dmgtype, sz, notes) {
    this.name = name;
    this.atk = atk;
    this.dmg = dmg;
    this.dmgbonus = dmgbonus;
    this.dmgtype = dmgtype;
    this.sz = sz;
    this.notes = notes;
}

var iPunch = new MeleeWeapon("Punch", 0, Math.round(character.trait.constitution.score / 2), 0, "Blunt", 0, "<i>Blunt</i>.");
var iAx = new MeleeWeapon("Ax", 0, 5, 0, "Lethal", 4, "<i>2h</i>. <i>Chop</i>.");
var iBaseballBat = new MeleeWeapon("Baseball Bat", 0, 2, 0, "Blunt", 3, "<i>2h</i>. <i>Blunt</i>. <i>Slam</i>.");
var iBrassKnuckles = new MeleeWeapon("Brass Knuckles", 0, Math.round((character.trait.constitution.score)/2) + 1 , 0, "Blunt", 1, "<i>Blunt</i>. <i>Slam</i>.");
var iCane = new MeleeWeapon("Cane", 0, 1, 0, "Blunt", 3, "<i>Blunt</i>. <i>Trip</i> <b>+1</b>. Can be used as a Crutch.");
var iCleaver = new MeleeWeapon("Cleaver", 0, 2, 0, "Lethal", 1, "<i>Chop</i>.");
var iCrowbar = new MeleeWeapon("Crowbar", 0, 3, 0, "Lethal", 3, "<i>Lever</i>. <i>Slam</i>.");
var iFirepoker = new MeleeWeapon("Firepoker", 0, 3, 0, "Lethal", 3, "<i>Lever</i>. <i>Pierce</i>.");
var iHammer = new MeleeWeapon("Hammer", 0, 2, 0, "Lethal", 2, "<i>Lever</i>.");
var iHatchet = new MeleeWeapon("Hatchet", 0, 2, 0, "Lethal", 2, "<i>Chop</i>.");
var iIceAx = new MeleeWeapon("Ice Ax", 0, 3, 0, "Lethal", 2, "<i>Lever</i>. <i>Pierce</i>.");
var iKnife = new MeleeWeapon("Knife", 0, 2, 0, "Lethal", 1, "<i>Rapid</i>.");
var iMachete = new MeleeWeapon("Machete", 0, 3, 0, "Lethal", 2, "<i>Chop</i>.");
var iMetalClub = new MeleeWeapon("Metal Club", 0, 3, 0, "Blunt", 3, "<i>Blunt</i>. <i>Slam</i>.");
var iPickax = new MeleeWeapon("Pickax", 0, 6, 0, "Lethal", 5, "<i>2h</i>. <i>Lever</i>. <i>Pierce</i>. <i>Slam</i>.");
var iPitchfork = new MeleeWeapon("Pitchfork", 0, 5, 0, "Lethal", 4, "<i>2h</i>. <i>Pierce</i>.");
var iPoliceBaton = new MeleeWeapon("Police Baton", 0, 2, 0, "Blunt", 2, "<i>Blunt</i>. <b>Fast</b> extend. <i>Rapid</i>. <i>Slam</i>.");
var iRiotShield = new MeleeWeapon("Riot Shield", 0, 1, 0, "Blunt", 4, "<i>Block</i> <b>+3</b>. <i>Block</i> Guns. <i>Blunt</i>. <i>Slam</i>.");
var iScrewdriver = new MeleeWeapon("Screwdriver", 0, 1, 0, "Lethal", 1, "<i>Lever</i>. <i>Pierce</i>. <i>Rapid</i>.");
var iShovel = new MeleeWeapon("Shovel", 0, 3, 0, "Lethal", 4, "<i>2h</i>. <i>Slam</i>.");
var iSledgehammer = new MeleeWeapon("Sledgehammer", 0, 6, 0, "Blunt", 5, "<i>2h</i>. <i>Blunt</i>. <i>Slam</i>.");
var iSpear = new MeleeWeapon("Spear", 0, 4, 0, "Lethal", 3, "<i>2h</i>. <i>Pierce</i>.");
var iStaff = new MeleeWeapon("Staff", 0, 2, 0, "Blunt", 3, "<i>2h</i>. <i>Blunt</i>. <i>Dual-Wield</i>. <i>Slam</i>.");
var iTireIron = new MeleeWeapon("Tire Iron", 0, 2, 0, "Lethal", 2, "<i>Lever</i>.");
var iTorch = new MeleeWeapon("Torch", 0, 1, 0, "Fire", 2, "<b>1FDMG</b>/rnd. <i>Blunt</i>. <i>RNG:S</i> light radius 1hr.");

var meleeList = [iBrassKnuckles, iCleaver, iKnife, iScrewdriver, iHammer, iHatchet, iIceAx, iMachete, iPoliceBaton,
                 iTireIron, iTorch, iBaseballBat, iCane, iCrowbar, iFirepoker, iMetalClub, iStaff, iSpear, iAx,
                 iPitchfork, iRiotShield, iShovel, iPickax, iSledgehammer];

///////////////////////////////////////////////////////////////////////////////////////////////////

function RangedWeapon(name, atk, dmg, dmgbonus, dmgtype, rng, sz, cal, mag, notes) {
    this.name = name;
    this.atk = atk;
    this.dmg = dmg;
    this.dmgbonus = dmgbonus;
    this.dmgtype = dmgtype;
    this.rng = rng;
    this.sz = sz;
    this.cal = cal;
    this.mag = mag;
    this.notes = notes;
}

var iAK47 = new RangedWeapon("AK-47", 0, 8, 0, "Lethal", "L", 4, "7.62", 30, "<i>Rapid</i>.");
var iAR15 = new RangedWeapon("AR-15", 0, 7, 0, "Lethal", "L", 3, "5.56", 30, "<i>Rapid</i>.");
var iBenelliM4 = new RangedWeapon("Benelli M4", 0, 7, 0, "Lethal", "S", 4, "12g", 7, "<i>Rapid</i>. <i>Scatter</i> <b>+1</b>.");
var iBrowningABolt = new RangedWeapon("Browning A-Bolt", 1, 7, 0, "Lethal", "L", 3, "5.56", 5, "<b>RATK +1</b>. Scope.");
var iColtPython = new RangedWeapon("Colt Python", 0, 5, 0, "Lethal", "S", 2, ".357", 6, "");
var iCompoundBow = new RangedWeapon("Compound Bow", 0, 6, 0, "Lethal", "L", 3, "Arrow", 1, "<i><u><b>C</i></u>#6</b>/rnd to <i>Aim</i>. <i>Archery</i>.");
var iCrossbow = new RangedWeapon("Crossbow", 0, 6, 0, "Lethal", "L", 3, "Arrow", 1, "<i>Archery</i>.");
var iFlareGun = new RangedWeapon("Flare Gun", 0, 1, 0, "Fire", "S", 1, "12g", 1, "<b>1FDMG</b>/rnd for <b>d6</b>rnds. Illuminates 20yds.");
var iGlock17 = new RangedWeapon("Glock 17", 0, 3, 0, "Lethal", "S", 1, "9mm", 17, "<i>Rapid</i>.");
var iHKMP5 = new RangedWeapon("H&K MP5", 0, 3, 0, "Lethal", "S", 3, "9mm", 30, "<i>Auto</i>. <i>Rapid</i>.");
var iHenryGoldenBoy = new RangedWeapon("Henry Golden Boy", 1, 2, 0, "Lethal", "S", 3, ".22", 16, "<b>RATK +1</b>.");
var iKimber1911 = new RangedWeapon("Kimber 1911", 0, 4, 0, "Lethal", "S", 1, ".45", 7, "<i>Rapid</i>.");
var iMAC10 = new RangedWeapon("MAC-10", -1, 4, 0, "Lethal", "S", 2, ".45", 30, "<i>Auto</i>. <i>Rapid</i>. <b>RATK -1</b>");
var iMarlin1894C = new RangedWeapon("Marlin 1894C", 1, 5, 0, "Lethal", "S", 3, ".357", 9, "<b>RATK +1</b>.");
var iMossberg500 = new RangedWeapon("Mossberg 500", 0, 7, 0, "Lethal", "S", 4, "12g", 5, "<i>Scatter</i> <b>+3</b>.");
var iNorincoSKS = new RangedWeapon("Norinco SKS", 0, 8, 0, "Lethal", "L", 4, "7.62", 10, "<i>Rapid</i>. Bayonet.");
var iRemington700 = new RangedWeapon("Remington 700", 1, 9, 0, "Lethal", "L", 4, ".308", 6, "<b>RATK +1</b>. Scope.");
var iRemington870 = new RangedWeapon("Remington 870", 0, 7, 0, "Lethal", "S", 4, "12g", 7, "<i>Scatter</i> <b>+1</b>.");
var iRuger1022 = new RangedWeapon("Ruger 10/22", 0, 2, 0, "Lethal", "S", 3, ".22", 10, "<i>Rapid</i>.");
var iRugerMkIII = new RangedWeapon("Ruger Mk.III", 0, 2, 0, "Lethal", "P", 1, ".22", 10, "<i>Rapid</i>.");
var iSIGSauerP290 = new RangedWeapon("SIG Sauer P290", 0, 3, 0, "Lethal", "P", 1, "9mm", 6, "<i>Rapid</i>.");
var iSavageMkII = new RangedWeapon("Savage Mk.II", 1, 2, 0, "Lethal", "S", 3, ".22", 10, "<b>RATK +1</b>.");
var iSpringfieldM1A = new RangedWeapon("Springfield M1A", 0, 9, 0, "Lethal", "L", 4, ".308", 10, "<i>Rapid</i>.");
var iTaurus94 = new RangedWeapon("Taurus 94", 0, 2, 0, "Lethal", "P", 1, ".22", 9, "");
var iWinchesterSawnoff = new RangedWeapon("Winchester Sawn-off", 0, 10, 0, "Lethal", "P", 2, "12g", 2, "<i>Rapid</i>. <i>Scatter</i> <b>+6</b>.");

var rangedList = [iAK47, iAR15, iBenelliM4, iBrowningABolt, iColtPython, iCompoundBow, iCrossbow, iGlock17, 
                  iHKMP5, iHenryGoldenBoy, iKimber1911, iMAC10, iMarlin1894C, iMossberg500, iNorincoSKS, 
                  iRemington700, iRemington870, iRuger1022, iRugerMkIII, iSIGSauerP290, iSavageMkII,
                  iSpringfieldM1A, iTaurus94, iWinchesterSawnoff]; 

///////////////////////////////////////////////////////////////////////////////////////////////////

function Ammo(cal, type, notes, sz, qty) {
    this.cal = cal;
    this.type = type;
    this.notes = notes;
    this.sz = sz;
    this.qty = qty;
    this.name = cal + " " + type;
}

var i22FMJ = new Ammo(".22", "FMJ", "Common .22 ammo", 0.005, Math.ceil((Math.random() * 6) * 10));
var i22JHP = new Ammo(".22", "JHP", "<b>+1 DMG</b>. <i>Slam</i>.", 0.005, Math.ceil((Math.random() * 6) * 10));
var i22Match = new Ammo(".22", "Match", "<b>RATK +1</b>.", 0.005, Math.ceil((Math.random() * 6) * 5));
var i22Tracer = new Ammo(".22", "Tracer", "<b>+1</b> to any subsequent <b>RATK</b> rolls this rnd.", 0.005, Math.ceil((Math.random() * 6) * 2));
var i9mmFMJ = new Ammo("9mm", "FMJ", "Common 9mm ammo", 0.01, Math.ceil((Math.random() * 6) * 5));
var i9mmJHP = new Ammo("9mm", "JHP", "<b>+1 DMG</b>. <i>Slam</i>.", 0.01, Math.ceil((Math.random() * 6) * 5));
var i9mmMatch = new Ammo("9mm", "Match", "<b>RATK +1</b>.", 0.01, Math.ceil((Math.random() * 6) * 3));
var i45FMJ = new Ammo(".45", "FMJ", "Common .45 ammo", 0.01, Math.ceil((Math.random() * 6) * 5));
var i45JHP = new Ammo(".45", "JHP", "<b>+1 DMG</b>. <i>Slam</i>.", 0.01, Math.ceil((Math.random() * 6) * 5));
var i45Match = new Ammo(".45", "Match", "<b>RATK +1</b>.", 0.01, Math.ceil((Math.random() * 6) * 3));
var i357FMJ = new Ammo(".357", "FMJ", "Common .357 ammo", 0.01, Math.ceil((Math.random() * 6) * 5));
var i357JHP = new Ammo(".357", "JHP", "<b>+1 DMG</b>. <i>Slam</i>.", 0.01, Math.ceil((Math.random() * 6) * 5));
var i556FMJ = new Ammo("5.56", "FMJ", "Common 5.56 ammo", 0.02, Math.ceil((Math.random() * 6) * 3));
var i556AP = new Ammo("5.56", "AP", "<i>Pierce</i>.", 0.02, Math.ceil(Math.random() * 6));
var i556JHP = new Ammo("5.56", "JHP", "<b>+1 DMG</b>. <i>Slam</i>.", 0.02, Math.ceil((Math.random() * 6) * 3));
var i556Match = new Ammo("5.56", "Match", "<b>RATK +1</b>.", 0.02, Math.ceil((Math.random() * 6) * 2));
var i556Tracer = new Ammo("5.56", "Tracer", "<b>+1</b> to any subsequent <b>RATK</b> rolls this rnd.", 0.02, Math.ceil(Math.random() * 6));
var i762FMJ = new Ammo("7.62", "FMJ", "Common 7.62 ammo", 0.02, Math.ceil((Math.random() * 6) * 3));
var i762JHP = new Ammo("7.62", "JHP", "<b>+1 DMG</b>. <i>Slam</i>.", 0.02, Math.ceil((Math.random() * 6) * 3));
var i308FMJ = new Ammo(".308", "FMJ", "Common .308 ammo", 0.02, Math.ceil((Math.random() * 6) * 3));
var i308AP = new Ammo(".308", "AP", "<i>Pierce</i>.", 0.02, Math.ceil(Math.random() * 6));
var i308JHP = new Ammo(".308", "JHP", "<b>+1 DMG</b>. <i>Slam</i>.", 0.02, Math.ceil((Math.random() * 6) * 3));
var i308Match = new Ammo(".308", "Match", "<b>RATK +1</b>.", 0.02, Math.ceil((Math.random() * 6) * 2));
var i12gBird = new Ammo("12g", "Birdshot", "Common 12g ammo, <b>RATK +3</b>, <i>Scatter</i>", 0.05, Math.ceil((Math.random() * 6) * 3));
var i12gBuck = new Ammo("12g", "Buckshot", "<b>+3 DMG</b>. <b>RATK +1</b>. <i>Scatter</i>. <i>Slam</i>", 0.05, Math.ceil((Math.random() * 6) * 2));
var i12gFlare = new Ammo("12g", "Flare", "<b>1FDMG</b>/rnd only, <b>d6</b>rnds. Illuminates 20yds.", 0.05, Math.ceil(Math.random() * 6));
var i12gRubber = new Ammo("12g", "Rubber", "<i>Blunt</i>. <i>Slam</i>.", 0.05, Math.ceil(Math.random() * 6));
var i12gSlug = new Ammo("12g", "Slug", "<b>+3 DMG</b>. Increase <i>RNG</i> to next level. <i>Slam</i>.", 0.05, Math.ceil(Math.random() * 6));
var iTargetArrow = new Ammo("Arrow", "Target", "Common arrow, <i>Pierce</i>, <b>1DMG</b> on removal", 0.05, Math.ceil(Math.random() * 6));
var iBroadArrow = new Ammo("Broadhead", "Arrow", "<b>+1 DMG</b>. <i>Pierce</i>. <b>d6DMG</b> on removal.", 0.05, Math.ceil(Math.random() * 6));

var commonAmmoList = [i22FMJ, i9mmFMJ, i45FMJ, i357FMJ, i556FMJ, i762FMJ, i308FMJ, i12gBird, iTargetArrow];
var ammo22List = [i22FMJ, i22FMJ, i22JHP, i22JHP, i22Match, i22Tracer];
var ammo308List = [i308AP, i308FMJ, i308FMJ, i308JHP, i308JHP, i308Match];
var ammo357List = [i357FMJ, i357FMJ, i357FMJ, i357JHP, i357JHP, i357JHP];
var ammo45List = [i45FMJ, i45FMJ, i45FMJ, i45JHP, i45JHP, i45Match];
var ammo556List = [i556AP, i556FMJ, i556FMJ, i556JHP, i556Match, i556Tracer];
var ammo762List = [i762FMJ, i762FMJ, i762FMJ, i762JHP, i762JHP, i762JHP];
var ammo9mmList = [i9mmFMJ, i9mmFMJ, i9mmFMJ, i9mmJHP, i9mmJHP, i9mmMatch];
var ammo12gList = [i12gBird, i12gBird, i12gBuck, i12gFlare, i12gRubber, i12gSlug];
var ammoArrowList = [iBroadArrow, iBroadArrow, iBroadArrow, iTargetArrow, iTargetArrow, iTargetArrow];

///////////////////////////////////////////////////////////////////////////////////////////////////

function Storage(name, slots, notes, sz) {
    this.name = name;
    this.slots = slots;
    this.notes = notes;
    this.sz = sz;
}

var iBackpack = new Storage("Backpack", 30, "2rnds to access.", 1);
var iBandoleer = new Storage("Bandoleer", 1, "Holds 50 bullets of any caliber.", 0);
var iBDUJacket = new Storage("BDU Jacket", 4, "<i>Camo</i> <b>+1</b>.", 0);
var iCanteen = new Storage("Canteen", 1, "Holds 1 Water or Alcohol (.5gal). Metal.", 1);
var iConcealedHolster = new Storage("Concealed Holster", 1, "<u><i>Perception</i></u> <b>12#</b> to spot a <b>Size</b> 1 Gun.", 0);
var iCooler = new Storage("Cooler", 30, "Hunted or Foraged Food lasts 6 days.", 4);
var iDuffelBag = new Storage("Duffel Bag", 40, "2rnds to access.", 3);
var iHoody = new Storage("Hoody", 2, "<i>CR</i>.", 0);
var iHydrationPack = new Storage("Hydration Pack", 4, "Holds 4 Water rations (2gal) or Alcohol.", 0);
var iLockbox = new Storage("Lockbox", 1, "<b>10HP</b>. <i>FR</i>. <u>Larceny</u>(Pick) <b>9#</b>.", 2);
var iMessengerBag = new Storage("Messenger Bag", 1, "1rnd to access.", 1);
var iPlasticJug = new Storage("Plastic Jug", 2, "Holds 2 Water rations (1gal) or Alcohol.", 1);
var iPurse = new Storage("Purse", 3, "1rnd to access.", 1);
var iSpeedloader = new Storage("Speed-loader", 1, "Serves as a magazine for a revolver.", 0);
var iToolBelt = new Storage("Tool Belt", 6, "6 Slots (<b>Size</b> 1 each). <b>+1</b> <u>Build</u>.", 2);
var iTrenchCoat = new Storage("Trench Coat", 2, "2 Slots (<b>Size</b> 2 each). <i>CR</i>. <b>+1</b> <u><i>Stealth</i></u>", 1);
var iWaterBottle = new Storage("Water Bottle", 1, "Holds 1 Water (.5gal) or Alcohol.", 0);

var storageList = [iBackpack, iBandoleer, iBDUJacket, iCanteen, iCooler, iDuffelBag, iHoody, iHydrationPack, 
                   iMessengerBag, iPlasticJug, iPurse, iSpeedloader, iToolBelt, iTrenchCoat, iWaterBottle];

///////////////////////////////////////////////////////////////////////////////////////////////////

function Bomb(name, dmg, dmgtype, blast, mix, dur, notes, sz) {
    this.name = name;
    this.dmg = dmg;
    this.dmgtype = dmgtype;
    this.blast = blast;
    this.mix = mix;
    this.dur = dur;
    this.notes = notes;
    this.sz = sz;
}

var iDynamite = new Bomb("Dynamite Stick", "d6x5", "Lethal", "6yd/stick", 9, "Instant. 10rnd fuse.", "Must be lit. <i>Slam</i>.", 1);
var iFlashbang = new Bomb("Flashbang Grenade", 0, "Blunt", "6yd", 6, "d6+2rnds", "<b>C12#</b> <i>Blind</i> and <i>Stunned</i>.", 1);
var iFrag = new Bomb("Frag Grenade", "d6x3", "Lethal", "15yd", 12, "Instant, 1rnd fuse", "<i>Pierce</i>. <i>Slam</i>.", 1);
var iMolotov = new Bomb("Molotov Cocktail", "d6", "Fire", "3yd", 1, "<b>1d6FDMG</b>/rnd. 1min. Must be lit.", 2);
var iSmoke = new Bomb("Smoke Grenade", 0, "Blunt", "1yd/rnd", 3, "d6mins", "<i>Blind</i>.", 1);
var iTeargas = new Bomb("Teargas Grenade", "toxin", "Blunt", "1yd/rnd", 15, "d6mins", "<b>C15#</b> (<i>Blind</i>, <i>Suffocate</i>, 3 <i>Pain</i>).", 1);

var bombList = [iDynamite, iFlashbang, iFrag, iMolotov, iSmoke, iTeargas];

///////////////////////////////////////////////////////////////////////////////////////////////////

function Drug(name, mix, dur, notes, sz) {
    this.name = name;
    this.mix = mix;
    this.dur = dur;
    this.notes = notes;
    this.sz = sz;
}

var iAlcohol = new Drug("Alcohol", 9, "6hrs", "<i>Unstable</i>. Can use as Antibiotic or Fuel.", 1);
var iAntibiotic = new Drug("Antibiotic", 12, "1day", "Prevents infection for <b>Recovery</b>. 1/day.", 0);
var iHallucinogen = new Drug("Hallucinogen", 15, "3hrs/use", "<b>+1</b> <u>Entertain</u> and <u>Tame</u>. <b>+3#</b> all else.", 0);
var iPainkiller = new Drug("Painkiller", 9, "1day", "Reduce <i>Pain</i> by <b>-1#</b>/use.", 0);
var iStimulant = new Drug("Stimulant", 9, "6hrs/use", "Reduce <i>Fatigue</i> by <b>-1#</b>/use.", 0);
var iTranquilizer = new Drug("Tranquilizer", 12, "6hrs/use", "Sleep 6hrs. Takes <b>d6</b>mins to take effect.", 0);

var drugList = [iAlcohol, iAntibiotic, iHallucinogen, iPainkiller, iStimulant, iTranquilizer];

///////////////////////////////////////////////////////////////////////////////////////////////////

function Equipment(name, notes, sz) {
    this.name = name;
    this.notes = notes;
    this.sz = sz;
}

var iClassicNovel = new Equipment("Classic Novel", "Restore <b>1 Luck</b> after 3hrs of reading, 1/day.", 1);
var iEngSpanDict = new Equipment("English-Spanish Dictionary", "English-Spanish translation.", 1);
var iHolyBible = new Equipment("\"Holy Bible\"", " ", 1);
var iMapAtlas = new Equipment("Map (Atlas)", "<b>+1</b> <u>Survival</u>(Navigate).", 0);
var iMapLocal = new Equipment("Map (Local)", "Regional. <b>+1</b> <u>Survival</u>(Navigate).", 0);
var iYellowPages = new Equipment("\"Yellow Pages\"", "Regional. <b>+1</b> <u><i>Perception</i></u> to <b>Scavenge</b>.", 1);
var iBodyBalance = new Equipment("\"Body in Balance\"", "<b>+1</b> <u><i>Athletics</u></i>.", 1);
var iBookNinja = new Equipment("\"Book of Ninja\"", "<b>+1</b> <u><i>Stealth</u></i>.", 1);
var iCollegeChemistry = new Equipment("\"College Chemistry\"", "<b>+1</b> <u>Science</u>.", 1);
var iDefensiveDriving = new Equipment("\"Defensive Driving\"", "<b>+1</b> <u>Drive</u>.", 1);
var iDogTricks = new Equipment("\"Dog Tricks\"", "<b>+1</b> Tame.", 1);
var iEffectiveHabits = new Equipment("\"Effective Habits\"", "<b>+1</b> to one Skill.", 1);
var iEngineeringConcepts = new Equipment("\"Engineering Concepts\"", "<b>+1</b> <u>Build</u>.", 1);
var iGraysAnatomy = new Equipment("\"Gray's Anatomy\"", "<b>+1</b> <u>Medicine</u>.", 1);
var iHomeSecurity = new Equipment("\"Home Security\"", "<b>+1</b> <u>Larceny</u>.", 1);
var iWinFriends = new Equipment("\"How to Win Friends\"", "<b>+1</b> <u><i>Socialize</u></i>.", 1);
var iYogaWorks = new Equipment("\"How Yoga Works\"", "<b>+1</b> <u>Acrobatics</u>.", 1);
var iLeadershipBasics = new Equipment("\"Leadership Basics\"", "<b>+1</b> <u>Leadership</u>.", 1);
var iMapTopographic = new Equipment("Map (Topographic)", "Regional. <b>+3</b> <u>Survival</u>(Navigate).", 0);
var iPersonalDefense = new Equipment("\"Personal Defense\"", "<b>+1</b> <u>Ranged</u>.", 1);
var iSurvivalGuide = new Equipment("\"SAS Survival Guide\"", "<b>+1</b> <u>Survival</u>.", 1);
var iStandupComedy = new Equipment("\"Stand-up Comedy\"", "<b>+1</b> <u>Entertain</u>.", 1);
var iJeetKuneDo = new Equipment("\"Tao of Jeet Kune Do\"", "<b>+1</b> <u>Melee</u>.", 1);
var iZenMind = new Equipment("\"Zen Mind\"", "<b>+1</b> <u><i>Perception</i></u>.", 1);

var documentList = [iClassicNovel, iEngSpanDict, iHolyBible, iMapAtlas, iMapLocal, iYellowPages, iBodyBalance, iBookNinja, iCollegeChemistry, 
                     iDefensiveDriving, iDogTricks, iEffectiveHabits, iEngineeringConcepts, iGraysAnatomy, iHomeSecurity, iWinFriends, iYogaWorks, 
                     iLeadershipBasics, iMapTopographic, iPersonalDefense, iSurvivalGuide, iStandupComedy, iJeetKuneDo, iZenMind];

var iAirHorn = new Equipment("Air Horn", "Emits a loud blast up to a 1 mile radius.", 1);
var iBandage = new Equipment("Bandage", "Stops <b>Bleeding</b>. 1 use.", 0);
var iBandanna = new Equipment("Bandanna", "<b>+1<i><u>C</u></i></b> vs airborne toxins. Can use as a Bandage.", 0);
var iBaseballCap = new Equipment("Baseball Cap", "<b>-1#</b> <i>Visibility(Rain and Sun)</i> penalty.", 0);
var iBayonet = new Equipment("Bayonet", "Knife. <b>+2 DMG</b> for <b>MATKs</b> on <b>Size</b> 2+ Guns.", 1);
var iBicycle = new Equipment("Bicycle", "<i><u>Athletics</u></i> <b>3#</b>. <b>Speed</b> x4. 2-hands. <b>Fail:</b><i>Prone</i>.", 20);
var iBinoculars = new Equipment("Binoculars", "<b>+3</b> <i><u>Perception</u></i>(See) at <i>RNG:L</i>.", 1);
var iBipod = new Equipment("Bipod", "<b>RATK +1</b> on <b>Size</b> 2+ Guns. 1rnd setup.", 0);
var iBobbyPin = new Equipment("Bobby Pin", "<b>+1</b> <u>Larceny</u>(Pick) on key locks.", 0);
var iBoltCutters = new Equipment("Bolt Cutters", "<b><i><u>C</u></i>6#</b> to cut metal. <b>MATK</b> as a Metal Club", 3);
var iCageTrap = new Equipment("Cage Trap", "<b>+3</b> <u>Survival</u>(Forage). Takes 1day.", 6);
var iCandle = new Equipment("Candle", "<i>RNG:P</i> light for 6hrs.", 0);
var iCandy = new Equipment("Candy", "Restores 1 <b>Luck</b> point. 1/day.", 0);
var iCarabiner = new Equipment("Carabiner", "<b>+1</b> <i><u>Athletics</u>(Climb and Rappel)</i>. Holds 50<b>Sz</b>.", 0);
var iChalk = new Equipment("Chalk", "Used to temporarily write on any surface.", 0);
var iChemicals = new Equipment("Chemicals", "Substances used for <u>Science</u>(Bombs and Drugs).", 1);
var iChokerLeash = new Equipment("Choker Leash", "<b>+3</b> <u>Tame</u>. <i>Grabbed</i>. <u><i><b>C<u></i>+3</b> vs <u><i><b>C</u></i></b> to control.", 1);
var iCompass = new Equipment("Compass", "<b>+3</b> <u>Survival</u>(Navigate). Always points North.", 1);
var iCowboyHat = new Equipment("Cowboy Hat", "<b>-3#</b> <i>Visibility(Rain and Sun)</i> penalty.", 1);
var iCrutch = new Equipment("Crutch", "Halves <b>Leg DMG</b> penalty to <b>Speed</b>.", 3);
var iDuctTape = new Equipment("Duct Tape", "<b>+1</b> <u>Build</u>/1yd or use 2yds as Handcuffs. 60yds.", 1);
var iDustMask = new Equipment("Dust Mask", "<b>+3 <i>C</i></b> vs airborne toxins. <i>Mask</i>.", 1);
var iEggTimer = new Equipment("Egg Timer", "Set up to 10mins. Loud ringing for 1min.", 1);
var iEmergencyRadio = new Equipment("Emergency Radio", "AM/FM/Shortwave. LED <i>RNG:P</i> light beam.", 1);
var iEMTBag = new Equipment("EMT Bag", "Stops <b>Bleeding</b> and Heal <b>1HP</b>/use. 30 uses.", 5);
var iFirestick = new Equipment("Fire-stick", "<b>+3</b> <u>Survival</u>(Camp). Magnesium rod and steel.", 0);
var iFirstAidKit = new Equipment("First-Aid Kit", "Stops <b>Bleeding</b> and Heal <b>1HP</b>/use. 5 uses.", 1);
var iFishingPole = new Equipment("Fishing Pole", "<u>Survival</u> <b>9#</b> for 1 Food per 3hrs. 50yd line.", 2);
var iFlashlight = new Equipment("Flashlight", "<i>RNG:S</i> light beam. <b>C6#</b> or <i>Blind</i> <b>d6</b>rnds.", 1);
var iFlippers = new Equipment("Flippers", "<b>+3</b> <i><u>Athletics</u>(Swim)</i>. <b>-6</b> walking <b>Speed</b>.", 2);
var iFoodCan = new Equipment("Food Can", "Contains 1 Food to feed a person for a day.", 1);
var iForegrip = new Equipment("Foregrip", "<b>-1#</b> <i>Unstable</i> penalty for 2h Guns.", 0);
var iFuelCan = new Equipment("Fuel Can", "Holds up to 5gal of Fuel.", 2);
var iGasMask = new Equipment("Gas Mask", "<b>+6 <i><u>C</u></i></b> vs airborne toxins. <i>Mask</i>. <b>-1</b> <i><u>Perception</u></i>.", 1);
var iGlassCutter = new Equipment("Glass Cutter", "Cuts glass silently. <i><u>Perception</u></i>(Hear) <b>9#</b>.", 1);
var iGoggles = new Equipment("Goggles", "<b>+3 <i><u>C</u></i></b> to resist toxins in eyes.", 1);
var iGrapplingHook = new Equipment("Grappling Hook", "<b>+3</b> <i><u>Athletics</u>(Climb and Rappel)</i>. Holds 100<b>Sz</b>.", 2);
var iGunCleaningKit = new Equipment("Gun Cleaning Kit", "Gun gets <b>RATK +1</b> for 1day. Takes 1hr/gun.", 1);
var iHacksaw = new Equipment("Hacksaw", "<b>1DMG</b>/rnd of sawing to almost any material.", 2);
var iHammock = new Equipment("Hammock", "Suspended sleeping device for 1 person.", 1);
var iHandRadio = new Equipment("Hand Radio", "9-channel 2-way radio. 3 mile range.", 1);
var iHandcuffs = new Equipment("Handcuffs", "<i>Grabbed</i>. <b><i>A</i>12#</b> to escape. <u>Larceny</u>(Pick) <b>12#</b>.", 1);
var iHeadlamp = new Equipment("Headlamp", "<i>RNG:S</i> light beam. Hands free.", 1);
var iHolosight = new Equipment("Holosight", "<b>RATK +1</b>. Tritium illuminated.", 0);
var iLantern = new Equipment("Lantern", "<i>RNG:S</i> light radius.", 2);
var iLaser = new Equipment("Laser", "<b>RATK +1</b> <i>RNG:S</i>. <b>-6</b> <i>Called Shot</i> to <i>Blind</i> <b>d6</b>rnds.", 0);
var iLeatherBelt = new Equipment("Leather Belt", "1yd strap with buckle. Holds 50<b>Sz</b>.", 1);
var iLifejacket = new Equipment("Lifejacket", "<b>+6</b> <i><u>Athletics</u>(Swim)</i>.", 1);
var iLighter = new Equipment("Lighter", "Makes a small fire. <i>RNG:P</i> light.", 0);
var iLockpicks = new Equipment("Lockpicks", "<b>+3</b> <u>Larceny</u>(Pick) key locks. 6 picks.", 1);
var iLuxuryItem = new Equipment("Luxury Item", "Toilet paper, toothpaste, cigarettes, etc.", 0);
var iMagnifyingGlass = new Equipment("Magnifying Glass", "<b>+6</b> <i><u>Perception</u></i>(See) to inspect tiny details.", 1);
var iMakeup = new Equipment("Makeup", "<b>+1</b> <i><u>Socialize</u></i> and <u>Entertain</u> for 6hrs. 30 uses.", 0);
var iMarbles = new Equipment("Marbles", "30/bag. Covers 2sqyrds. <b><i>A</i>12#</b> or fall <i>Prone</i>.", 1);
var iMarker = new Equipment("Marker", "Used to permanently write on any surface.", 0);
var iMatchbook = new Equipment("Matchbook", "<b>+1</b> <u>Survival</u>(Camp). <i>RNG:P</i> light radius, 3rnds.", 0);
var iMeasuringCup = new Equipment("Measuring Cup", "<b>+3</b> <u>Science</u>. Cup marked in volumetric units.", 1);
var iMegaphone = new Equipment("Megaphone", "Amplifies and directs the user's voice.", 2);
var iMessKit = new Equipment("Mess Kit", "Aluminum bowl, pot, spork, knife, and cup.", 1);
var iMonocular = new Equipment("Monocular", "<b>+1</b> <i><u>Perception</u></i>(See) at <i>RNG:L</i>.", 1);
var iMultimeter = new Equipment("Multimeter", "<b>+3</b> <u>Science</u>(Tech), Read voltage and resistance.", 1);
var iMultiTool = new Equipment("Multi-Tool", "<b>+1</b> <u>Larceny</u>(Disable), <u>Build</u>, <u>Science</u>(Tech).", 1);
var iMusicalInstrument = new Equipment("Musical Instrument", "<b>+1</b> <u>Entertain</u>(Distract and Inspire).", 2);
var iMylarBlanket = new Equipment("Mylar Blanket", "<i>CR</i>. 1yd x 2yd reflective foil sheet.", 0);
var iNightvisionGoggles = new Equipment("Nightvision Goggles", "Ignore <i>Visibility</i> penalties from darkness.", 1);
var iNotebook = new Equipment("Notebook", "100 pages of paper with a wire binding.", 1);
var iPadlock = new Equipment("Padlock", "<b>10HP</b>. Larceny(Pick) <b>9#</b>. Takes <b>d6</b>mins.", 1);
var iParacord = new Equipment("Paracord", "60yd coil. Holds 50<b>Sz</b>.", 1);
var iParts = new Equipment("Parts", "Scrap used for <u>Build</u> and <u>Science</u>(Tech).", 1);
var iPepperSpray = new Equipment("Pepper Spray", "<b>+1</b> <u>Ranged</u>(Gun), <i>RNG:P</i>, 6 <i>Pain</i>. 3 uses.", 0);
var iPocketMirror = new Equipment("Pocket Mirror", "Small glass mirror in a plastic case.", 0);
var iPoncho = new Equipment("Poncho", "Keeps wearer and gear dry in rain or snow.", 0);
var iPressureCuff = new Equipment("Pressure Cuff", "<b>+1</b> <u>Medicine</u>(Surgery and Treat).", 1);
var iRatTrap = new Equipment("Rat Trap", "<b>+1</b> <u>Survival</u>(Forage). Takes 1day.", 1);
var iRoadFlare = new Equipment("Road Flare", "<b>1FDMG</b>/rnd. <i>RNG:S</i> light radius for 20mins.", 1);
var iRollerblades = new Equipment("Rollerblades", "<i><u>Athletics</u></i> <b>6#</b>. <b>Speed</b> x4. 1rnd equip. <b>Fail:</b><i>Prone</i>.", 2);
var iRope = new Equipment("Rope", "30yd coil. Holds 100<b>Sz</b>.", 5);
var iRunningShoes = new Equipment("Running Shoes", "<b>+1 <i><u>C</u></i></b> rolls to continue <i>Running</i>.", 2);
var iScope = new Equipment("Scope", "<b>+3</b> <i>Aimed</i> <b>RATKs</b> and <i><u>Perception</u></i>(See) at <i>RNG:L</i>.", 1);
var iSkateboard = new Equipment("Skateboard", "<i><u>Athletics</u></i> <b>6#</b>. <b>Speed</b> x3. <b>Fail:</b><i>Prone</i>.", 3);
var iSkiMask = new Equipment("Ski Mask", "<b>+1</b> <u><i>Stealth</i></u>. <i>Mask</i>. <i>CR</i>.", 0);
var iSleepingBag = new Equipment("Sleeping Bag", "Insulated bag for 2 people. <i>CR</i> +3hrs.", 4);
var iSlingshot = new Equipment("Slingshot", "<b>1BDMG</b> <u>Ranged</u>(Archery), <i>RNG:S</i>, <i>Blunt</i>, <i>Slam</i>.", 1);
var iSmartphone = new Equipment("Smartphone", "Light, camera, recorder, etc. 6hrs use.", 1);
var iSnorkel = new Equipment("Snorkel", "Breathe while just beneath water's surface.", 1);
var iSolarLamp = new Equipment("Solar Lamp", "<i>RNG:S</i> light radius. 1day charge is 6hrs.", 1);
var iSprayPaint = new Equipment("Spray Paint", "<b>+1</b> Melee <i>Called Shot: Head</i> to <i>Blind</i> <b>d6</b>mins.", 1);
var iStethoscope = new Equipment("Stethoscope", "<b>+1</b> <u>Medicine</u>. <i><u>Perception</u></i>(Hear) <b>6#</b> thru doors.", 1);
var iStunGun = new Equipment("Stun Gun", "Melee. <b><u><i>C</i></u>9#</b> or <i>Stun</i> for <b>d6</b>rnds. 10 uses.", 1);
var iSunglasses = new Equipment("Sunglasses", "No <i>Visibility(Sun)</i> penalty. <b>+1 <i><u>C</u></i></b> vs Flashbangs.", 0);
var iSuppressor = new Equipment("Suppressor", "<i><u>Perception</u></i>(Hear) <b>9#</b>. Silent beyond <i>RNG:S</i>.", 1);
var iSurgeryKit = new Equipment("Surgery Kit", "<b>+3</b> <u>Medicine</u>(Surgery).", 3);
var iSwissArmyKnife = new Equipment("Swiss Army Knife", "<b>+1</b> <u>Build</u> and <u>Survival</u>(Forage).", 1);
var iTapeMeasure = new Equipment("Tape Measure", "<b>+1</b> <u>Build</u>. 10yd long wind-up tape.", 1);
var iTarp = new Equipment("Tarp", "3yd x 3yd plastic sheet. <i>CR</i>. Waterproof.", 1);
var iTelescope = new Equipment("Telescope", "<b>+6</b> <i><u>Perception</u></i>(See) at <i>RNG:L</i>.", 2);
var iTent = new Equipment("Tent", "4 person. 5min setup/take-down. <i>CR</i> +3hrs.", 10);
var iThermalUnderwear = new Equipment("Thermal Underwear", "<i>CR</i>. Can use as 6 Bandages.", 1);
var iThermometer = new Equipment("Thermometer", "<b>+1</b> <u>Medicine</u>. Accurately reads temperature.", 0);
var iThreePointSling = new Equipment("Three-Point Sling", "Draw a <b>Size</b> 2+ Gun <b>Fast</b>.", 0);
var iToolBag = new Equipment("Tool Bag", "<b>+3</b> <u>Build</u>. Pliers, wrenches, level, etc.", 3);
var iToyCar = new Equipment("Toy Car", "Goes for 6rnds at 10 <b>Speed</b> on a flat surface.", 1);
var iTransfusionKit = new Equipment("Transfusion Kit", "<u>Medicine</u> <b>9#</b>. <b>1HP</b>/15mins. Heal to <b>1HP</b> max.", 1);
var iWaterFilter = new Equipment("Water Filter", "Purifies 1 Water ration (.5gal) per minute.", 1);
var iWhetstone = new Equipment("Whetstone", "Blade gets <b>+1 DMG</b> for 1day. Takes 1hr/blade.", 1);
var iWhistle = new Equipment("Whistle", "<b>+1</b> <u>Tame</u>(Train). Loud shriek 500yd radius.", 0);
var iWireSaw = new Equipment("Wire Saw", "<b>1DMG</b>/rnd of sawing to wood or bone.", 1);
var iWristwatch = new Equipment("Wristwatch", "Tells time and <b>+1</b> <u>Survival</u>(Navigate).", 0);
var iZipTie = new Equipment("Zip Tie", "<b><i><u>C</u></i>9#</b> to break free. .5yds long.", 0);

///////////////////////////////////////////////////////////////////////////////////////////////////

function Vehicle(name, maxhp, dmg, maxyds, maxmph, han, mpg, maxfuel, occ, maxcargo) {
    this.name = name;
    this.maxhp = maxhp;
    this.curhp = Math.ceil(Math.random()*maxhp);
    this.dmg = dmg;
    this.maxyds = maxyds;
    this.maxmph = maxmph;
    this.han = han;
    this.mpg = mpg;
    this.maxfuel = maxfuel;
    this.curfuel = Math.ceil(Math.random()*maxfuel);
    this.occ = occ;
    this.curcargo = 0;
    this.maxcargo = maxcargo;
    this.notes = "<b>HP:</b> "+maxhp+", <b>DMG:</b> "+dmg+", <b>MPH:</b> "+maxmph+", <b>Handling:</b> "+han+", <b>MPG:</b> "+mpg+", <b>Fuel:</b> "+this.curfuel+"/"+maxfuel+", <b>Occupants/Cargo:</b> "+occ+"/"+maxcargo;
    this.size = "-";
}

var iAmbulance = new Vehicle("Ambulance", 30, 12, 100, 70, "-1", 10, 35, 4, 200);
var iBoxTruck = new Vehicle("Box Truck", 40, 12, 100, 70, "-1", 10, 40, 2, 1600);
var iBus = new Vehicle("Bus", 40, 20, 100, 70, "-3", 15, 100, 60, 1200);
var iMotorcycle = new Vehicle("Motorcycle", 15, 6, 130, 90, "+1", 40, 5, 2, 30);
var iMuscleCar = new Vehicle("Muscle Car", 30, 12, 160, 110, "+1", 10, 20, 4, 80);
var iPickupTruck = new Vehicle("Pickup Truck", 30, 12, 130, 90, "+0", 20, 20, 2, 400);
var iPoliceCruiser = new Vehicle("Police Cruiser", 30, 12, 160, 110, "+1", 10, 20, 4, 100);
var iSedan = new Vehicle("Sedan", 20, 8, 130, 90, "+0", 30, 12, 4, 100);
var iSemiTruck = new Vehicle("Semi-truck", 40, 20, 100, 70, "-3", 5, 120, 2, 6000);
var iStreetBike = new Vehicle("Street Bike", 10, 6, 160, 110, "+3", 50, 5, 2, 0);
var iSUV = new Vehicle("SUV", 30, 12, 130, 90, "-1", 15, 25, 6, 200);
var iVan = new Vehicle("Van", 30, 12, 100, 70, "-3", 10, 35, 12, 1200);

var landVehicleList = [iAmbulance, iBoxTruck, iBus, iMotorcycle, iMuscleCar, iPickupTruck, iPoliceCruiser, iSedan, iSemiTruck, iStreetBike, iSUV, iVan];

///////////////////////////////////////////////////////////////////////////////////////////////////

var iLandWarriorHelmet = new Armor("Land Warrior Helmet", 5, 0, 0, 0, ["Head"], "<i>FR</i>. HUD (<b>+3</b> <i><u>Perception</u></i>). Radio.", 2);
var iBlackRobe = new Armor("Black Robe", 1, 1, 1, 1, ["Head","Arms","Torso","Legs"], "<b>+1</b> <i><u>Stealth</u></i>.", 1);
var iChainmailShirt = new Armor("Chainmail Shirt", 6, 6, 6, 0, ["Head","Arms","Torso"], "<b>-3 DMG</b> from <i>Chop</i> weapons.", 5);
var iDragonskinVest = new Armor("Dragonskin Vest", 0, 0, 10, 0, ["Torso"], "<i>CR</i>. <i>FR</i>.", 3);
var iKnuckleGloves = new Armor("Knuckle Gloves", 0, 1, 0, 0, ["Arms"], "<b>BDMG</b> = [<i><b><u>C</u></b></i>/2 +1]. <i>Blunt</i>. <i>FR</i>. <i>Slam</i>.", 1);
var iSpikedJacket = new Armor("Spiked Jacket", 0, 3, 3, 0, ["Arms","Torso"], "<b>+1 DMG</b> <i>Grab</i>.", 3);

var rareArmorList = [iLandWarriorHelmet, iBlackRobe, iChainmailShirt, iDragonskinVest, iKnuckleGloves, iSpikedJacket];

var iBarbwireClub = new MeleeWeapon("Barbwire Club", 0, 3, 0, "Lethal", 2, "<i>Pierce</i>. <i>Slam</i>.");
var iBlowgun = new RangedWeapon("Blowgun", 0, 1, 0, "Lethal", "S", 1, "Dart", 1, "<i>Pierce</i>.");
var iBolas = new RangedWeapon("Bolas", 0, 1, 0, "Blunt", "S", 1, "Throw", 1, "<i>Blunt</i>. <i>Grab/Trip</i> <b>+1</b>.");
var iBombVest = new Bomb("Bomb Vest", "d6x10", "Lethal", "12yd", 18, "Instant", "<i>Pierce</i>. <i>Slam</i>.", 3);
var iBowieKnife = new MeleeWeapon("Bowie Knife", 0, 3, 0, "Lethal", 1, "<i>Rapid</i>.");
var iBroadsword = new MeleeWeapon("Broadsword", 0, 7, 0, "Lethal", 4, "<i>Chop</i> or <i>Pierce</i> option.");
var iCatchPole = new MeleeWeapon("Catch Pole", 0, 0, 0, "Blunt", 3, "<i>2h</i>. <i>Blunt</i>. <i>Grab</i> <b>+1</b>. <i>RNG:P</i>.");
var iChainsaw = new MeleeWeapon("Chainsaw", 0, 12, 0, "Lethal", 4, "<i>2h</i>. Fuel: 1gal/hr. <b>d6</b>rnd to start.");
var iFlamethrower = new RangedWeapon("Flamethrower", 6, "d6x2", 0, "Fire", "P", 6, "Fuel", 7, "3yd <i>Blast</i>. <i>Rapid</i>. <b>RATK +6</b>.");
var iGlock18 = new RangedWeapon("Glock 18", 0, 3, 0, "Lethal", "S", 2, "9mm", 33, "<i>Auto</i>. <i>Rapid</i>.");
var iKatana = new MeleeWeapon("Katana", 0, 7, 0, "Lethal", 3, "<i>Chop</i> or <i>Pierce</i> option. <i>Rapid</i>.");
var iKukri = new MeleeWeapon("Kukri", 0, 3, 0, "Lethal", 2, "<i>Chop</i>.");
var iLasso = new MeleeWeapon("Lasso", 0, 0, 0, "Blunt", 2, "<i>2h</i>. <i>Blunt</i>. <i>Grab</i> <b>+1</b>. <i>Throw</i>.");
var iM2Browning = new RangedWeapon("M2 Browning", 0, 24, 0, "Lethal", "L", 9, ".50BMG", "belt", "<i>Auto</i> only. Mounted. <i>Pierce</i>.");
var iM4A1Carbine = new RangedWeapon("M4A1 Carbine", 0, 7, 0, "Lethal", "L", 3, "5.56", 30, "<i>Auto</i>. <i>Rapid</i>.");
var iM32Launcher = new RangedWeapon("M32 Launcher", 0, "varies", 0, "varies", "S", 4, "Grenade", 6, "<i>Rapid</i>.");
var iM60MachineGun = new RangedWeapon("M60 Machine Gun", 0, 9, 0, "Lethal", "L", 6, ".308", "belt", "<i>Auto</i>. Bipod.");
var iM72LAW = new RangedWeapon("M72 LAW", 0, "d6x20", 0, "Lethal", "L", 4, "Rocket", 1, "12yd <i>Blast</i>. <i>Pierce</i>. <i>Slam</i>.");
var iM79Thumper = new RangedWeapon("M79 \"Thumper\"", 0, "varies", 0, "varies", "S", 2, "Grenade", 1, "<i>2h</i>.");
var iM107Barret = new RangedWeapon("M107 Barret", 1, 24, 0, "Lethal", "L", 6, ".50BMG", 10, "Bipod. <i>Pierce</i>. <b>RATK +1</b>. Scope.");
var iM134Minigun = new RangedWeapon("M134 Minigun", 0, 9, 0, "Lethal", "L", 9, ".308", "belt", "<i>Auto</i> only. Mounted.");
var iM203Launcher = new RangedWeapon("M203 Launcher", 0, "varies", 0, "varies", "S", 2, "Grenade", 1, "<i>2h</i>. <b>Size</b> 3+ <i><b>GUN ACCESSORY</b></i>.");
var iM249SAW = new RangedWeapon("M249 SAW", 0, 7, 0, "Lethal", "L", 5, "5.56", "belt", "<i>Auto</i>. <i>Rapid</i>.");
var iMuzzleloader = new RangedWeapon("Muzzleloader", 0, 5, 0, "Lethal", "S", 4, "Part+Chemical", 1, "<i>Slam</i>. 3rnd <i>Reload</i>.");
var iNet = new MeleeWeapon("Net", 0, 0, 0, "Blunt", 0, 3, "<i>Blunt</i>. <i>Grab</i> <b>+6</b>. <i>Slam</i>.");
var iPipeBomb = new Bomb("Pipe Bomb", 0, "d6x3", 0, "Lethal", 1, "3yd <i>Blast</i>. <i>Pierce</i>. <i>Slam</i>. <i>Throw</i>. 3rnd fuse.");
var iRapier = new MeleeWeapon("Rapier", 1, 3, 0, "Lethal", 2, "<b>MATK +1</b>. <i>Pierce</i>. <i>Rapid</i>.");
var iRecurveBow = new RangedWeapon("Recurve Bow", 0, 6, 0, "Lethal", "S", 3, "Arrow", 1, "<b><i><u>C</u></i>9#</b>/rnd to <i>Aim</i>.");
var iSWBodyguard = new RangedWeapon("S&W Bodyguard", 0, 5, 0, "Lethal", "P", 1, ".357", 5, "");
var iSaiga12 = new RangedWeapon("Saiga-12", 0, 7, 0, "Lethal", "S", 4, "12g", 12, "<i>Rapid</i>. <i>Scatter</i> <b>+1</b>.");
var iScythe = new MeleeWeapon("Scythe", 0, 6, 0, "Lethal", 4, "<i>2h</i>. <i>Chop</i>. <i>Pierce</i>.");
var iSignShield = new MeleeWeapon("Sign Shield", 0, 2, 0, "Lethal", 4, "<i>Block</i> <b>+3</b>. <i>Blocks</i> Guns. <i>Slam</i>.");
var iSpeargun = new RangedWeapon("Speargun", 0, 7, 0, "Lethal", "S", 4, "Harpoon", 1, "30yd rope. Archery. <i>Pierce</i>.");
var iSwitchblade = new MeleeWeapon("Switchblade", 0, 1, 0, "Lethal", 0, "<b>Fast</b> extend. <i>Pierce</i>. <i>Rapid</i>.");
var iTrenchKnife = new MeleeWeapon("Trench Knife", 0, 2, 0, "Lethal", 1, "<i>Blunt</i> + <i>Slam</i> option. <i>Rapid</i>.");
var iWhip = new MeleeWeapon("Whip", 0, 1, 0, "Blunt", 1, "<i>Blunt</i>. <i>Disarm</i> <b>+1</b>. <i>Grab</i> <b>+1</b>. <i>RNG:P</i>.");

var rareWeaponList = [iBarbwireClub, iBlowgun, iBolas, iBombVest, iBowieKnife, iBroadsword, iCatchPole, iChainsaw,
                      iFlamethrower, iGlock18, iKatana, iKukri, iLasso, iM2Browning, iM4A1Carbine, iM32Launcher, 
                      iM60MachineGun, iM72LAW, iM79Thumper, iM107Barret, iM134Minigun, iM203Launcher, iM249SAW, 
                      iMuzzleloader, iNet, iPipeBomb, iRapier, iRecurveBow, iSWBodyguard, iSaiga12, iScythe, 
                      iSignShield, iSpeargun, iSwitchblade, iTrenchKnife, iWhip];

var iArmyTruck = new Vehicle("2 1/2-ton Army Truck (\"Deuce\")", 70, 25, 80, 55, "-3", 5, 50, 2, 2000);
var iAPC = new Vehicle("Armored Personnel Carrier", 90, 30, 80, 55, "-3", 3, 95, 13, 400);
var iATV = new Vehicle("All-Terrain Vehicle", 20, 10, 60, 40, "+0", 30, 5, 2, 60);
var iBankTruck = new Vehicle("Bank Truck", 80, 25, 80, 55, "-3", 3, 40, 5, 1200);
var iBulldozer = new Vehicle("Bulldozer", 70, 30, 20, 14, "-3", .5, 110, 1, 0);
var iDirtBike = new Vehicle("Dirt Bike", 10, 5, 80, 55, "+3", 70, 2, 2, 0);
var iDuneBuggy = new Vehicle("Dune Buggy", 20, 10, 100, 70, "+1", 18, 8, 3, 0);
var iFireEngine = new Vehicle("Fire Engine", 60, 25, 100, 70, "-3", 5, 100, 6, 400);
var iHumvee = new Vehicle("Humvee", 50, 15, 100, 70, "-1", 8, 25, 5, 400);
var iRV = new Vehicle("Recreational Vehicle", 40, 15, 100, 70, "-3", 10, 70, 12, 1200);
var iWagon = new Vehicle("Wagon", 20, 15, "8yd/horse", "5mph/horse", "-3", 0, 0, 2, 600);
var iMainBattleTank = new Vehicle("Main Battle Tank", 100, 40, 60, 40, "-1", .5, 500, 4, 100);

var rareLandVehicleList = [iArmyTruck, iAPC, iATV, iBankTruck, iBulldozer, iDirtBike, 
                            iDuneBuggy, iFireEngine, iHumvee, iRV, iWagon, iMainBattleTank];

///////////////////////////////////////////////////////////////////////////////////////////////////

var mglList = [ammo22List, ammo308List, ammo357List, ammo45List, ammo12gList, ammo556List, ammo762List, ammo9mmList, iAirHorn, iAK47, 
               iAthleticPads, iAR15, iArmyHelmet, ammoArrowList, iAx, iBackpack, iBandage, iBandanna, iBandoleer, iBaseballBat, 
               iBaseballCap, iBayonet, iBDUJacket, iBenelliM4, iBicycle, iBipod, iBlueJeans, iBobbyPin, iBoltCutters, bombList, 
               iBrassKnuckles, iBrowningABolt, iCageTrap, iCandle, iCandy, iCane, iCanteen, iCarabiner, iCargoPants, iChalk, iChokerLeash, iChemicals, 
               iCleaver, iColtPython, iCompass, iCompoundBow, iConcealedHolster, iCooler, iCoveralls, iCowboyHat, iCrowbar, iCrutch, iCrossbow, iDenimJacket, 
               documentList, drugList, iDuctTape, iDuffelBag, iDustMask, iEggTimer, iEmergencyRadio, iEMTBag, iFirefighterSuit, 
               iFirepoker, iFishingPole, iFlakJacket, iFlareGun, iFlashlight, iFlippers, iFoodCan, iForegrip, iFuelCan, iGasMask, 
               iGhillieSuit, iGlassCutter, iGlock17, iGoggles, iGrapplingHook, iGunCleaningKit, iHacksaw, iHammer, iHammock, iHandRadio, 
               iHandcuffs, iHatchet, iHeadlamp, iHenryGoldenBoy, iHikingBoots, iHKMP5, iHolosight, iHoody, iHydrationPack, iIceAx, 
               iInterceptorArmor, iKevlarGloves, iKevlarVest, iKimber1911, iKnife, iLantern, iLaser, iLeatherBelt, 
               iLeatherJacket, iLifejacket, iLighter, iLockbox, iLockpicks, iLuxuryItem, iMAC10, iMachete, iMagnifyingGlass, iMakeup, iMarbles, 
               iMarker, iMarlin1894C, iMatchbook, iMeasuringCup, iMegaphone, iMessKit, iMessengerBag, iMetalClub, iMonocular, iMossberg500, 
               iMotorcycleHelmet, iMultimeter, iMultiTool, iMusicalInstrument, iMylarBlanket, iNBCSuit, iNightvisionGoggles, 
               iNorincoSKS, iNotebook, iPadlock, iPaintballMask, iParacord, iParts, iPepperSpray, iPickax, iPitchfork, iPlasticJug, 
               iPocketMirror, iPoliceBaton, iPoncho, iPressureCuff, iPurse, iRatTrap, iRemington700, iRemington870, iRiotHelmet, 
               iRiotShield, iRoadFlare, iRollerblades, iRope, iRuger1022, iRugerMkIII, iRunningShoes, iSavageMkII, iScope, iScrewdriver, 
               iShovel, iSIGSauerP290, iSkateboard, iSkiMask, iSledgehammer, iSleepingBag, iSlingshot, iSmartphone, iSnorkel, 
               iSolarLamp, iSpear, iSpeedloader, iSportsHelmet, iSprayPaint, iSpringfieldM1A, iStaff, iSteelToeBoots, iStethoscope, 
               iStunGun, iSunglasses, iSuppressor, iSurgeryKit, iSwissArmyKnife, iTacticalVest, iTapeMeasure, iTarp, iTaurus94, iTelescope, 
               iTent, iThermalUnderwear, iThermometer, iThreePointSling, iTireIron, iToolBag, iToolBelt, iTorch, iToyCar, iTransfusionKit, iTrenchCoat, 
               iUndercoverVest, iWaterBottle, iWaterFilter, iWhetstone, iWhistle, iWinchesterSawnoff, iWinterCoat, iWireSaw, 
               iWorkGloves, iWristwatch, iZipTie, landVehicleList, rareArmorList, rareWeaponList, rareLandVehicleList];