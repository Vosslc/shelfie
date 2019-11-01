module.exports = {

  create: (req, res, next) => {

    res.status(200).send("It worked!!! Woohoo!!!")
  },

  read: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // const {image_url, price, name} = req.body;

    dbInstance.get_inventory([ shelfie ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      });
    // res.status(200).send("It worked!!! Woohoo!!!")
  },

  update: (req, res, next) => {

    res.status(200).send("It worked!!! Woohoo!!!")
  },

  delete: (req, res, next) => {

    res.status(200).send("It worked!!! Woohoo!!!")
  }

}