import _listService from "../Services/ListService.js";
import _store from '../store.js'

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""

  _store.State.lists.forEach(list => template += list.Template)
  document.getElementById("chores").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and 

  addList(event) {
    event.preventDefault();
    let formData = event.target
    let listData = {
      name: formData.listName.value
    }
    _listService.addList(listData)
    formData.reset()
    _drawLists()
  }
  addChore(event, listId) {
    event.preventDefault();
    let formData = event.target
    let choreData = {
      name: formData.choreName.value
    }
    _listService.addChore(choreData, listId)
    formData.reset()
    _drawLists

  }
}
