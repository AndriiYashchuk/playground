import Header from './Header';
import ToDo from './ToDo';
import AddNew from './AddNew';


class TodoList {
  #children = [];
  #list;
  #config;
  #parent;
  #text;
  #resetRef;

  constructor(config = {}) {
    this.#list = config.data || [];
    this.#config = config;
  }

  add(text, id){
    this.#list.push({id, name: text, isDone: false});
    this.#rerender();
  }

  delete(id){
    this.#list = this.#list.filter(item => item.id !== id);
    this.#rerender();
  }

  reset(){
    this.#list = [];
    this.#rerender();
  }

  update(id, name, isToggleChecked){
    const index = this.#list.findIndex(item => item.id === id);
    if(index >= 0){
      this.#list[index] = {
        ...this.#list[index],
        ...(name ? { name } : {}),
        ...(isToggleChecked ? { isDone: !this.#list[index].isDone } : {})
      };
    }
    this.#rerender();
  }

  toggleChecked(id){
    this.update(id, null, true)
  }

  init(id = 'app'){
    const parent = document.getElementById(id);
    this.#parent = parent;
    if(this.#parent){
      try{
        parent.innerHTML = this.render();
      } catch (e){
        console.error(e);
      }


    }
  }

  #rerender(){
    this.#resetRef && this.#resetRef.unmount();
    if(this.#parent){
      this.#parent.innerHTML = this.render();
    }
  }

  render(){
    const header = new Header(this.#config);
    const todos = this.#list.map((item) => new ToDo(item, this.#config, {
      delete: (id) => this.delete(id),
      edit: (text, id) => this.update(id, text),
      toggleChecked: (id) => this.toggleChecked(id)
    }));
    const addNewInput = new AddNew(this.#text, {
      add: (text, id) => this.add(text, id)
      },
      Math.round(Math.random() * 1000000)
    );
    this.#resetRef = ResetButton(() => this.reset())();



    return `
      <table id="todoList">
         ${header.render()}
         ${todos.map(todo => todo.render()).join('')}
      </table>
      ${addNewInput.render()}
      ${this.#resetRef.render}`
  }

}


const ResetButton = (onReset) => {
  let button;

  const init = () => setTimeout(() => {
    button = document.getElementById('reset')
    button.addEventListener('click', onReset)
  })

  const unmount = () => {
    button.removeEventListener('click', onReset)
  }

  return () => {
    init();

    return {
      render: `<button id="reset">Clear List</button>`,
      ref: button,
      unmount
    }
  }
}

export default TodoList;
