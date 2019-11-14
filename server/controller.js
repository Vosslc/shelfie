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
    const db = req.app.get('db')
    // console.log(req.body) //! any data being passed from the front end to the BE via a post or a put
    const { image_url, price, name } = req.body;
    db.update_product(image_url, price, name, req.params.id)
      .then(result => {
        // console.log(result)
        res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  delete: (req, res) => {
    const db = req.app.get('db');
    // console.log(req.params.id)
    db.delete_product(req.params.id)
    .then(result => {
        res.status(200).send(result)
    }).catch(err => console.log(err))
},

}

