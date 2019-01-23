class BookStore {
  constructor(defaultBooks = []) {
    this._store = defaultBooks
    this._index = 0
  }

  all() {
    return this._store
  }

  add(book) {
    book.id = ++this._index
    this._store.push(book)
  }

  delete(id) {
    const index = this._store.findIndex(b => b.id === parseInt(id))
    if (index > -1) {
      this._store.splice(index, 1)
    }
  }

  get(id) {
    const index = this._store.findIndex(b => b.id === parseInt(id))
    if (index > -1) {
      return this._store[index]
    }
    return undefined
  }

  update(id, book) {
    const index = this._store.findIndex(b => b.id === parseInt(id))
    if (index > -1) {
      book.id = id
      this._store[index] = book
    }
  }
}

module.exports = {
  BookStore,
}
