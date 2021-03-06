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

  changeText(listId, index) {
    //  _state.lists.findIndex(list => list.id == listId)
    // let completeId = _state.lists[indextoRemove2].chores[index]

    document.getElementById(`'${listId}-${index}'`).classList.add("complete")
  }
  deleteChore(listId, index) {
    let indextoRemove2 = _state.lists.findIndex(list => list.id == listId)
    if (window.confirm("Do you really want to delete your chore?")) {
      _state.lists[indextoRemove2].chores.splice(index, 1)

    }
  }
  deleteList(listId) {
    let indextoRemove = _state.lists.findIndex(list => list.id == listId)
    if (window.confirm("Do you really want to delete your Task?")) {
      _state.lists.splice(indextoRemove, 1)

    }
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

  //NOTE call saveState every time you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
