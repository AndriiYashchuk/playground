class ToDo {
  #root;
  #data;
  #header;
  #editRef;
  #handlers;
  #isEditMode = false;

  constructor(data = {}, config, handlers) {
    this.#data = data;
    this.#header = config.header;
    this.#handlers = handlers;
  }

  edit() {
    this.#isEditMode = !this.#isEditMode;
    this.render();
  }

  initListeners(id) {
    this.#root = document.getElementById(id);
    const lastTh = this.#root.querySelector('th:last-child');
    const checkbox = this.#root.querySelector('input[type=checkbox]');
    const editBtn = lastTh.querySelector('button[data-attr=edit]');
    const deleteBtn = lastTh.querySelector('button[data-attr=delete]');

    editBtn.addEventListener('click', () => this.edit(id));
    deleteBtn.addEventListener('click', () => this.#handlers.delete(id));
    checkbox.addEventListener('change', () => this.#handlers.toggleChecked(id))

  }


  render() {
    setTimeout(() => this.initListeners(this.#data.id));

    const contentStrong = `
      <th>
        <input type="checkbox" ${this.#data.isDone ? 'checked' : ''} />
      </th>
      ${this.#header.map(item => {
      if (item === 'name' && this.#isEditMode) {
        const onEdit = (text) => {
          this.#handlers.edit(text, this.#data.id);
        };
        this.#editRef = EditField({
          onEdit,
          id: this.#data.id,
          value: this.#data.name
        })();

        return this.#editRef.render();
      }


      return `<td>${this.#data[item]}</td>`;
    }).join('')}
      <th data-attr="actions">
        <button data-attr="delete">Delete</button>
        <button data-attr="edit">Edit</button>
      </th>`;

    if (this.#root) {
      this.#root.innerHTML = contentStrong;
    }

    return `
    <tr id="${this.#data.id}" style="${this.#data.isDone ? 'background-color: #bc8b8b' : ''}">
      ${contentStrong}
    </tr>
    `;
  }
}

const EditField = ({ onEdit, value, id }) => {
  let input;
  let button;
  const onClick = () => {
    onEdit(input.value);

  };
  const unmount = () => button.removeEventListener('click', onClick);

  const init = () => setTimeout(() => {
    if (!input) {
      const editElem = document.getElementById(id).querySelector(`div[data-attr=edit]`);
      input = editElem.querySelector(`input`);
      button = editElem.querySelector(`button`);
    }
    button.addEventListener('click', onClick);
  });

  return () => ({
    render: () => {
      init();
      return `
       <div data-attr="edit">
        <input type="text" data-attr="editText" value="${value}" />
        <button>Save</button>        
       </div>
      `;
    },
    ref: input,
    unmount
  });
};

export default ToDo;
