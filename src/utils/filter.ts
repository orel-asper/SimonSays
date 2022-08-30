
export default (fn: any, a: any[]) => {
    const f = []; //final
    for (let i = 0; i < a.length; i++) {
        if (fn(a[i])) {
            f.push(a[i]);
        }
    }
    return f;
};
