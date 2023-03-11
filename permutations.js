const perms = (words) =>{
if(words.length == 0) return [[]];

const first = words[0];

const rest = words.slice(1);

const permsWithoutFirst = perms(rest);

const allperms = [];

permsWithoutFirst.forEach(permutation =>{
    for(let i =0; i<=permutation.length;i++){
        const permsWithFirst = [...permutation.slice(0,i), first, ...permutation.slice(i)];
        allperms.push(permsWithFirst);
            console.log(allperms);
    }
})

return allperms;

};

perms(['a','d','g','t']);