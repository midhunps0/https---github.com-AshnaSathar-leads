import { sineInOut } from 'svelte/easing';

export function dropExpand(node, { duration }) {
    let height = node.offsetHeight;
    console.log('height: '+height);
    console.log(node);
    return {
        duration,
        css: (t) => {
            const easedT = sineInOut(t);
            console.log(`t: ${t}`);
            return `
                height: ${easedT * height}px
            `;
        }
    };
}
