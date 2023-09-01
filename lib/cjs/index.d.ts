import esbuild from 'esbuild';
export interface Configuration {
    files: HtmlFileConfiguration[];
}
export interface HtmlFileConfiguration {
    /** @param filename The name of the output HTML file (relative to the output directory) */
    filename: string;
    /** @param entryPoints The entry points to include in the HTML file. */
    entryPoints: string[];
    /** @param title The title of the HTML file. */
    title?: string;
    /** @param htmlTemplate A path to a custom HTML template to use. If not set, a default template will be used. */
    htmlTemplate?: string;
    /** @param scriptLoading How to load the generated script tags: blocking, defer, or module. Defaults to defer. */
    scriptLoading?: 'blocking' | 'defer' | 'module';
    /** @param findRelatedCssFiles Whether to find CSS files that are related to the entry points. */
    findRelatedCssFiles?: boolean;
    /**
     * @deprecated Use findRelatedCssFiles instead.
     * @param findRelatedOutputFiles Whether to find output files that are related to the entry points. */
    findRelatedOutputFiles?: boolean;
    hash?: boolean | string;
}
export declare const htmlPlugin: (configuration?: Configuration) => esbuild.Plugin;
