const context = {
  currentProject: {
    id: 123,
    message: 'Hello, World!',
    setId(id: number) {
      if(!id) {
        return
      }
      this.id = id
    },
    setMessage(message: string) {
      if(!message) {
        return
      }
      this.message = message
    },
    update(id: number, message: string) {
      this.setId(id);
      this.setMessage(message)
      return this
    }
  }
}

export default context
