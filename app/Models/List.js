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
    <div class="col-5 border mt-4 shadow">
    <h1> ${this.name}</h1>
        <form onsubmit="app.listController.addChore(event, '${this.id}')">
          <div class="form-group">
            <label for="choreName"> Chore Name</label>
            <input type="text" name="choreName" id="" class="form-control" placeholder="Enter Chore Here...">
          </div>
          <button type="submit" class="btn btn-primary">Add Chore</button>
          </form>
          <button class="btn btn-danger" onclick="app.listController.deleteList('${this.id}')">Delete Task</button>
    `
    this.chores.forEach(chore => template += `<p>${chore}<i class="fa fa-trash-o fa-2x" onclick="deleteChore('${this.id}')"></i></p>`)

    template += '</div>'

    return template
  }
}
