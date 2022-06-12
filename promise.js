const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    return new Promise(async (resolve, reject) => {
      try {
        let jmlTotal = 0;
        const IXX = await promiseTheaterIXX()
                          .then(res => {
                            let jml = 0;
                            res.forEach(el => {
                              if(el.hasil === emosi) {
                                jml = jml + 1;
                              }
                            });
                            return jml;
                          });
        const VGC = await promiseTheaterVGC()
                        .then(res => {
                          let jml = 0;
                          res.forEach(el => {
                            if(el.hasil === emosi) {
                              jml = jml + 1;
                            }
                          });
                          return jml;
                        });;

        jmlTotal = IXX + VGC;
        resolve(jmlTotal);
      } catch (error) {
        reject(error);
      }
    })
}

module.exports = {
  promiseOutput,
};
