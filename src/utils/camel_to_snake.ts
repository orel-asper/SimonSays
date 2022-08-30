export const camel_to_snake = (str: string) => {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

