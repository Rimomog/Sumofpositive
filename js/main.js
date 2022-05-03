function positiveSum(arr) {
    return arr.filter( e => e > 0).reduce( (s, c) => s += c,0)
   }