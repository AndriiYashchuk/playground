
class Header {
  #columns;

  constructor({ header = [] }) {
    this.#columns = header;
  }

  render(){

    return `
    <tr>
      <th>
        <input name="select_all" type="checkbox" />
      </th>
      ${this.#columns.map(column => `<th>${column === 'isDone' ? 'completed' : column}</th>`).join('')}
      <th>
        Actions
      </th>
    </tr>
    `
  }

}

export default Header;
