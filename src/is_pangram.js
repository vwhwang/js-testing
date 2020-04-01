const isPangram = function(text) {

  const alphabets ="abcdefghijklmnopqrstuvwxyz";
  const alphabets_array = alphabets.split('');
  const check_alphabet = {};

  alphabets_array.forEach((letter) => {
    check_alphabet[letter] = false;
  });

  text.split('').forEach((letter)=>{
    check_alphabet[letter] = true;
  });

  for(const letter in check_alphabet){
    if(!check_alphabet[letter]){
      return false;
    }
  };

  return true;

};

module.exports = isPangram;
