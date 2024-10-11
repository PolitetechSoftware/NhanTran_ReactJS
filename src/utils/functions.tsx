export const handleErrorExection = (error: any): any => {
    throw new Error(`Error: ${error.message}`)
};

export const debounce = (func: Function, ms: number, context: any) => {
    let timer: any;

    return function (...args: any) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, ms);
    }
}