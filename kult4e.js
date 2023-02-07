import kult4eitemsheet from "./modules/sheets/kult4eitemsheet.js";
import kult4ePCsheet from "./modules/sheets/kult4ePCsheet.js";
import kult4eNPCsheet from "./modules/sheets/kult4eNPCsheet.js";
import kult4eActor from "./modules/sheets/kult4eActor.js";
import kultTracker from "./modules/tracker.js";
import {registerSystemSettings} from "./modules/system/settings.js";
import {registerLogger} from "./modules/system/logger.js";

async function preloadHandlebarTemplates() {
  const templatepaths =[
    "systems/kult-divinity-lost/templates/partials/move-card.hbs",
    "systems/kult-divinity-lost/templates/partials/darksecret-card.hbs",
    "systems/kult-divinity-lost/templates/partials/relationship-card.hbs",
    "systems/kult-divinity-lost/templates/partials/weapon-card.hbs",
    "systems/kult-divinity-lost/templates/partials/gear-card.hbs",
    "systems/kult-divinity-lost/templates/partials/advantage-card.hbs",
    "systems/kult-divinity-lost/templates/partials/disadvantage-card.hbs"
  ];
  return loadTemplates(templatepaths);
};

Hooks.on("renderPause", function () {
  if ($("#pause").attr("class") !== "paused") return;
  const path = game.settings.get("kult4e", "pausePath");
  const opacity = parseInt(game.settings.get("kult4e", "pauseOpacity")) / 100;
  const speed = game.settings.get("kult4e", "pauseSpeed") + "s linear 0s infinite normal none running rotation";
  $("#pause.paused img").attr("src", path);
  $("#pause.paused img").css({"opacity": opacity, "-webkit-animation": speed});
  $("#pause.paused h3").text(game.i18n.localize(game.settings.get("kult4e", "pauseText")));
});

Hooks.once("init", function() {
  // Register System Settings
  registerSystemSettings();
  registerLogger();

  kultLogger("Initializing Kult 4E");
  CONFIG.Actor.documentClass = kult4eActor;
  Items.unregisterSheet("core", ItemSheet);
  //Actors.unregisterSheet("core", ActorSheet);
  Items.registerSheet("kult4e", kult4eitemsheet, {makeDefault: true});
  Actors.registerSheet("kult4e", kult4ePCsheet, {types: ["pc"], makeDefault: true});
  Actors.registerSheet("kult4e", kult4eNPCsheet, {types: ["npc"], makeDefault: true});

  preloadHandlebarTemplates();
});

Hooks.once("ready", () => {
  // Listen for dice icon click
  const diceIconSelector = '#chat-controls i.fas.fa-dice-d20';
  $(document).on('click', diceIconSelector, () => {
      console.log(`Dice Icon Works`);
  });
});

Hooks.on('createActor', async (document, createData, options, userId) => {
    if (createData.type === "pc"){
        let pack = await game.packs.get("kult4e.moves");
        let index = await pack.getIndex();
        let moveArray = Array.from(index);
        console.log(moveArray);
        var i;
        for (i=0; i<moveArray.length; i++){
            let finalID = moveArray[0];
            console.log(finalID);
            await createData.createEmbeddedDocuments('Item', [finalItem]);
        }
    }

  });

  Hooks.on('hotbarDrop', async (hotbar, data, slot) => {

    console.log(data.data.data);
    if(data.data.data.type === "passive"){
      ui.notifications.info(game.i18n.localize("kult4e.PassiveAbility"))
      return false;
    }
    let functionName = "";
    const itemID = data.data._id;
    const actorID = data.actorId
    const macroData = {
      name: data.data.name,
      command: `
      let character = game.actors.get("${actorID}");
      character.moveroll("${itemID}")`,
      img: data.data.img
    }
    let macro = await Macro.create({
      name: macroData.name,
      type: 'script',
      img: macroData.img,
      command: macroData.command})
      await game.user.assignHotbarMacro(macro, slot)


    })
