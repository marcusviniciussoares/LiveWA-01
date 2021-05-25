function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
  charactersLength)));
   }
   return result.join('');
  }

  export const exp2 = () => {
        let arr = [];
        for (let index = 0; index < 5000000; index++) {
          const a = makeid(30);
          arr.push(a);
        }
        return arr;
  };
