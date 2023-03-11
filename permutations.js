const permutations = (elements) => {
    if (elements.length == 0) return [[]];

    const firstEl = elements[0];
    const rest = elements.slice(1);
    const permsWithoutFirst = permutations(rest);
    const allPerms = [];

    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i),
                firstEl, ...perm.slice(i)];
            allPerms.push(permWithFirst);
            console.log(permWithFirst);
        }
    })
    return allPerms;
};

permutations(['a', 'b', 'c']);
