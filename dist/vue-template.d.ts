import Vue, { VueConstructor } from 'vue';
export declare const vueTemplateConstructor: (vueConstructor: VueConstructor, e: HTMLElement, p: Record<string, any>) => Vue | null | undefined;
declare const vueTemplate: (cntr: VueConstructor) => (h: Function, p: any) => JSX.Element;
export default vueTemplate;
