import { writable } from 'svelte/store';

export let toasts = writable([]);

export let showToast = function (mode, message, duration = 1000) {
    let index;
    toasts.update((v) => {
        console.log(v);
        let newv = [...v, {mode: mode,
            message: message
        }];
        console.log(newv);
        index = newv.length - 1;
        return newv;
    });

    setTimeout(() => {
        toasts.update((v) => {
            let x = JSON.parse(JSON.stringify(v));
            x.splice(index, 1);
            return x;
        });
    }, duration);
}