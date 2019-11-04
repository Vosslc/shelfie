module.exports = {

  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {image_url, price, name} = req.body;
    // console.log(req.body);


    dbInstance.create_product([ image_url, price, name ])
      .then( () => res.sendStatus(200))
      .catch( err => {
        res.status(500).send({errorMessage: "WTF did you do???!"});
        console.log(err)
      });
    
  },

  read: (req, res, next) => {
    const dbInstance = req.app.get('db')
  
    dbInstance.get_inventory()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );


    
  },

  update: (req, res, next) => {

    res.status(200).send("WTF did you update?")
  },

  // delete: ( req, res, next ) => {
  //   const db = req.app.get('db')
  //   console.log(req.params)
  //   console.log(req.params.id)

  //   db.delete_product(req.params.id)
  //     .then( result => {
  //       res.satus(200).send(result) 
  //     }).catch( err => {
  //       res.status(500).send({errorMessage: "Something went wrong with delete_product. Our engineers have been informed!"});
  //       console.log(err)
  //     });
  // }
  delete: (req, res) => {
    const db = req.app.get('db');
    // console.log(req.params.id)
    db.delete_product(req.params.id)
    .then(result => {
        res.status(200).send(result)
    }).catch(err => console.log(err))
},

}

