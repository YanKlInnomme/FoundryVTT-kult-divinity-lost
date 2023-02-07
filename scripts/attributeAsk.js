export async function attributeAsk(){
    let boxoutput = await new Promise(resolve => {
        const none = game.i18n.localize("kult4e.None")
        const willpower = game.i18n.localize("kult4e.Willpower")
        const fortitude = game.i18n.localize("kult4e.Fortitude")
        const reflexes = game.i18n.localize("kult4e.Reflexes")
        const reason = game.i18n.localize("kult4e.Reason")
        const intuition = game.i18n.localize("kult4e.Intuition")
        const perception = game.i18n.localize("kult4e.Perception")
        const coolness = game.i18n.localize("kult4e.Coolness")
        const violence = game.i18n.localize("kult4e.Violence")
        const charisma = game.i18n.localize("kult4e.Charisma")
        const soul = game.i18n.localize("kult4e.Soul")
        new Dialog({
          title: game.i18n.localize("kult4e.AskAttribute"),
          content: `<div class="endure-harm-dialog"><label>${game.i18n.localize("kult4e.Attribute")}
          </label>
        <select id="attribute_value">
        <option value ="none">${none}</option>
        <option value="willpower">${willpower}</option>
        <option value="fortitude">${fortitude}</option>
        <option value="reflexes">${reflexes}</option>
        <option value="reason">${reason}</option>
        <option value="intuition">${intuition}</option>
        <option value="perception">${perception}</option>
        <option value="coolness">${coolness}</option>
        <option value="violence">${violence}</option>
        <option value="charisma">${charisma}</option>
        <option value="soul">${soul}</option>
      </select>
          </div>`,
          default: 'one',
          buttons: {
            one: {
              label: "Ok",
              callback: () => {
                resolve({ "attribute_value": document.getElementById("attribute_value").value })
              }
            }
          }
        }).render(true);

        
      })

      return boxoutput.attribute_value;
}