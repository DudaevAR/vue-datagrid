import { AsyncComponent } from "vue/types/options";
export declare const VGrid: AsyncComponent;
declare function install(Vue: any): void;
export declare const VGridPlugin: {
    install: typeof install;
};
export declare const VGridVueTemplate: (cntr: import("vue").VueConstructor<import("vue").default>) => (h: Function, p: any) => JSX.Element;
export declare const VGridVueTemplateConstructor: (vueConstructor: import("vue").VueConstructor<import("vue").default>, e: HTMLElement, p: Record<string, any>) => import("vue").default | null | undefined;
export declare const VGridVueEditor: (vueConstructor: import("vue/types/umd").VueConstructor<import("vue/types/umd")>) => (column: import("@revolist/revogrid/dist/types/interfaces").RevoGrid.ColumnDataSchemaModel, save: Function, close: Function) => import("./vue-editor-adapter").default;
export default VGrid;
