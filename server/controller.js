module.exports = {

  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {image_url, price, name} = req.body;
    console.log(req.body);


    dbInstance.create_product([ image_url, price, name ])
      .then( () => res.sendStatus(200))
      .catch( err => {
        res.status(500).send({errorMessage: "WTF did you do???!"});
        console.log(err)
      });
    
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

