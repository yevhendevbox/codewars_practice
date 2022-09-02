const maskify = cc => cc.length < 4 ? cc : cc.replace(/\w/g, '#').replace(/.{4}$/, cc.slice(-4));
