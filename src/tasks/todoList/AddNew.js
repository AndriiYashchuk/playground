
class AddNew {
  #text;
  #handlers;
  #addBtn;
  #input;
  #id;

  constructor(text = '', handlers, id) {
    this.#text = text;
    this.#handlers = handlers;
    this.#id = id;
  }

  initListeners(){
    if(!this.#input){
      this.#input = document.querySelector('input[data-attr=addtext]');
    }
    if(!this.#addBtn) {
      this.#addBtn = document.querySelector('button[data-attr=add]');
      this.#addBtn.addEventListener('click', () => {
        this.#handlers.add(this.#input.value, this.#id);
        this.#input.value = '';
      })
    }


  }

  render(){
    setTimeout(() => this.initListeners());


    return `
      <div style="padding: 20px">
        <input type="text" data-attr="addtext" value="${this.#text}" />
        <button id="add" data-attr="add">Add New</button>
      </div>
    `
  }

}

export default AddNew;
