export default class kult4eitemsheet extends ItemSheet{
  get template(){
    return `systems/kult-divinity-lost/templates/sheets/${this.item.data.type}-sheet.hbs`;
  }

  getData(){
    const data = super.getData();
    const itemData = data.data;
    data.item = itemData;
    data.data = itemData.data;
    return data;
  }
}
