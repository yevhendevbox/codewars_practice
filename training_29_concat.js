const bigToSmall = arr => [].concat(...arr).sort((a, b) => a - b).reverse().join('>');
