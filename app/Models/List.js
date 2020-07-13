import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name;
    this.chores = data.chores || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {

    let template = `
    <div class="col-4 border mt-4 shadow bg-card text-center ">
    <h3><u> ${this.name}</u></h3>
        <form onsubmit="app.listController.addChore(event, '${this.id}')">
          <div class="form-group">
            <label for="choreName"></label>
            <input type="text" name="choreName" id="" class="form-control" placeholder="Enter Chore Here...">
          </div>
          <button type="submit" class="btn btn-primary mb-2">Add Chore</button>
          </form>
          <button class="btn btn-outline-danger mb-2" onclick="app.listController.deleteList('${this.id}')">Delete Task</button>
    `
    this.chores.forEach((chore, index) => template += `<p id="'${this.id}-${index}'" class="">${chore}<i class="fa fa-trash-o fa-2x text-danger" onclick="app.listController.deleteChore('${this.id}','${index}')"></i><i class="fa fa-check-circle fa-2x fa-check text-dark" onclick="app.listController.changeText('${this.id}','${index}')"></i></p>`)

    template += '</div>'

    return template
  }
}
