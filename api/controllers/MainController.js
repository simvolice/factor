/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {




  getOrder: function(req, res, next){


    Main.find({}).exec(function(err, result){


      res.json(result);



    });






  },


  getNested: function(req, res, next){



    SModel.find({}).exec(function(err, result){


      res.json(result);



    });




  },


  insertData: function(req, res, next){




    var ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'o',
    'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'

    ];





    var i = 1;



    while (i <= 100000) {

      var str = '';
      str = _.sample(ABC, 8);

      Main.create({documentname: str.join('')}).exec(function(err, result){


      });

      i++;
    }



    res.json('The End');




  }





};

