import List from "../Models/List.js";
import _store from "../store.js"
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {

  }
  addList(listData) {
    let newList = new List(listData)
    _store.addList(newList)
    _store.saveState()
  }
  addChore(choreData, listId) {
    let foundChoreIndex = _store.State.lists.findIndex(list => list.id == listId)
    if (foundChoreIndex < 0) {
      console.log("no chore ")
      return
    }

    _store.addChore(foundChoreIndex, choreData)
    _store.saveState()
  }
  deleteList(listId) {
    _store.deleteList(listId)
    _store.saveState()
  }
  deleteChore(listId, index) {
    _store.deleteChore(listId, index)
    _store.saveState()
  }
}

const SERVICE = new ListService();
export default SERVICE;
