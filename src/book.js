// Factory function for books
const book = (title, author, pageNum) => {
  
  return {
    title: title,
    author: author,
    pageNum: pageNum,
    readStatus: false,

    // Assigns the object an id number. *See Library
    setId(idNumber) {
      this.id = idNumber;
    },
  }
}

export { book };