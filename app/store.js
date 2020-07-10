import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [],
  chores: [],
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  deleteChore(choreId) {
    let indextoRemove2 = _state.chores.findIndex(chore => chore.id == choreId)
    _state.chores.splice(indextoRemove2, 1)
  }
  deleteList(listId) {
    let indextoRemove = _state.lists.findIndex(list => list.id == listId)
    _state.lists.splice(indextoRemove, 1)
  }
  addChore(foundChoreIndex, choreData) {
    _state.lists[foundChoreIndex].chores.push(choreData)
  }
  addList(newList) {
    _state.lists.push(newList)
  }

  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
