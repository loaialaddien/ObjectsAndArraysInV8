//mathematical model
//f(x) = 1 
//f(x) = log(x)
//f(X) = x 
//f(x) = xLog(x)
//f(x) = x**2,3...

//////////////////////////////////
//log(X) base 10 to simplify things (it doesn't really matter if it's base 10 or 2, since logs are related by constant)

//big(O)
//Big-O notation is a relative representation of the complexity of an algorithm.
//relative you can only compare algorithms that do the same thing 
//representation means that you choose the most expensive operation to represent the equation 
//we count the number of operations that the algorithm makes
//////////////////////////////////////////////////////////
//arrays 
// ordered collection
//how arrays work
//An array is stored such that the position of each element can be computed from its by a mathematical formula

// int[] myArray = [1,2,3,4,5] => (4 bytes) integer variables, with indices 0 through 4, may be stored as 5 words at memory addresses 2000, 2004, 2008, …, so that the element with index i has the address 2000 + (i × 4)

//packed and sparse arrays
//this is a sparse array
//let abc = [1,2,3];
//abc[100] = 50;
//abc.length
//101

//how v8 works with arrays 
//if your array only contains integers, it’ll be backed by a C++ array of integers.
//the backing array will be bigger than the number of integers it currently contains.
//If it contains a mixture of integers and floating point values or only floating point values, it’ll be backed by an array of doubles.
//If the array contains only objects, or a mixture of numbers and objects, it’ll backed by an array of pointers.
//if the backing array is full, it’ll allocate a new, bigger backing array, copy the existing elements over, and then add the new value you pushed. 
/**
 * Fast elements: (packed and not very sparse)
Designed for arrays where set of keys are very compact. They have a linear storage buffer that can be accessed very efficiently.

Dictionary elements: (sparse arrays)
Designed for sparse arrays which don’t have every elements inside of them. It is actually a hash table, more expensive to access than “Fast Elements”
 */
//

/**
bigO of array methods 
Access - O(1) //equation
Appending -  O(1) ( 
Prepending - O(n) via unshift,
Deletion -  O(1) to remove a value, O(n) if you want to reassign indices via splice.
Swapping - O(1) [arr[0], arr[1]] = [arr[1], arr[0]];
find o(n)
foreach o(n)
sort nlogn || x**2  ( based on the length of the array) 
reduce is at its basic is an o(n), but it depends on what you do inside of them
 */


///objects

/**
 * 
 A JavaScript object (JSObject) in V8 uses two pointers (apart from its header): one word for storing a pointer to the elements backing store, and another word for storing a pointer to the properties backing store.

The elements backing store is used for storing properties that look like array indices, whereas the properties backing store is used for storing properties whose keys are strings or symbols.

Elements are mainly used for the various Array.prototype methods such as pop or slice. Given that these functions access properties in consecutive ranges, V8 also represents them as simple arrays internally — most of the time.
then there's a hidden class
The HiddenClass stores information about the shape of an object, and among other things, a mapping from property names to indices into the properties.
 */


 /**
  * 
https://v8.dev/blog
https://eloquentjavascript.net/04_data.html
https://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/
https://github.com/v8/v8/blob/master/src/builtins/builtins-array.cc
https://ryanpeden.com/how-do-javascript-arrays-work-under-the-hood/
https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/
https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html
http://jsperf.com/objectsashashes/2 (100 keys)
http://jsperf.com/objectsashashes/3 (100k keys)
http://jsperf.com/objectsashashes/ (1 million keys)
http://jsperf.com/objects-as-hashes-300-mil (10m keys)
  */
 //o(1)
  const square = (num)=> num*num;
  function isCreateHistoryObject(object) {
    return object.action === 'create' && object.userAgent;
  }
//o(n)
const logValues = (arr) => arr.forEach(console.log);
function contains(arr, item) {
  var i = arr.length;
  while (i) {
    if (arr[i] === item) {
      return true;
    }
    i -= 1;
  }
  return false;
}
data.filter(optionList => optionList.governorateCode === '03')
          .map(optionList => ({ ...optionList, index }));
//o(n**2)
const optionsMapper = (options) => {
  if (!options) return undefined;
  if (Array.isArray(options)) {
    return options.map((opt) => opt.value);
  }
  if (typeof options === 'object') {
    return Object.keys(options).reduce((agg, key) => {
      agg[key] = options[key].map((opt) => opt.value);
      return agg;
    }, {});
  }
  return options;
};
translationIds.forEach((translationId, idx) => {
  const translationObj = translations.find((t) => t.translationId === translationId);
  if (translationObj) _.set(model, translatableKeys[idx], translationObj.translation);
});

//o(n)**3

await Promise.all(dataList.map(async (list, index) => {  //o(n)
  const response = await axios({
    ...axiosConfig,
    data: requestDataFn(code),
  });

  let data = dataPath //o(n) inside an o(n) = o(n)2
    .reduce((accumulator, currentValue) => (accumulator[currentValue] ? accumulator[currentValue] : {}), response.data);

  if (data.length) {
    data = data.filter(optionList => optionList.governorateCode === '03')
      .map(optionList => ({ ...optionList, index }));

    if (subChild.filters) {
      subChild.filters.forEach((filter) => { //o(n) //o(n)2
        data = data.filter((optionList) => { //o(n) //o(n)3
          seedingLogger.verbose(optionList[filter]);
          seedingLogger.verbose(parentList[list.index][filter]);
          return optionList[filter] === parentList[list.index][filter];
        });
      });
    }

    dataLists.push(data);
    const optionsList = data
      .map(optionList => ({
        label: optionList[label],
        value: optionList[value],
      }));
  }
}));




const newRulesDuaLipa = {
  1:"Don't pick up the phone",
  2:"Don't let him in",
  3:"Don't be his friend"
}; 


const notSoNew = { 
  one:"Don't pick up the phone",
  two:"Don't let him in",
  three:"Don't be his friend"
}

const combined = {
  3:"Don't be his friend",
  one:"Don't pick up the phone",
  1:"Don't pick up the phone",
  two:"Don't let him in",
  three:"Don't be his friend",
  2:"Don't let him in",
}

const newRulesDuaLipa = {
  1:"Don't pick up the phone",
  2:"Don't let him in",
  3:"Don't be his friend"
}; 

const anothRep = [
  ,
  "Don't pick up the phone",
  "Don't let him in",
  "Don't be his friend"
]