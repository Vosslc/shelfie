module.exports = {

  create: (req, res, next) => {

    res.status(200).send("WTF did you create?")
  },

  read: (req, res, next) => {
    const databaseConnection = req.app.get('db')

    databaseConnection.get_inventory()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );


    
  },

  update: (req, res, next) => {

    res.status(200).send("WTF did you update?")
  },

  delete: (req, res, next) => {

    res.status(200).send("WTF did you delete?")
  }

}

