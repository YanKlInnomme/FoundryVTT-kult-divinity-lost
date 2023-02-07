export default class kult4eNPCsheet extends ActorSheet{
    get template(){
        return `systems/kult-divinity-lost/templates/sheets/npc-sheet.hbs`;
    }

    getData(){
        const data = super.getData();
        data.moves = data.items.filter(function(item) {return item.type == "move" || "advantage" || "disadvantage" || "darksecret" || "relationship"} );
        console.log(data);
        return data;
    }}
