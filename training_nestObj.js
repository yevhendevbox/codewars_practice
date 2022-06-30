/**
 * @param  {} arr
 * @param return obj key: color, value: obj -> key: index, value: value
 */

 const separateColor = arr => {
  const finalObj = arr.reduce((acc, el) => {
    if(acc.hasOwnProperty(el.color)) {
      acc[el.color][el.id] = {...el};
    } else {
      acc[el.color] = {
        [el.id]: {...el}
      }
    }
    return acc;
  }, {});
  return finalObj;
};