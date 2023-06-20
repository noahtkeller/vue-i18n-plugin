import type { App } from 'vue';

export const TString = {
    name: 't-string',
    props: {
        t: { type: String },
        count: { type: Number },
        data: { type: Object, default: {} },
    },
    template: '{{ $i18n?.t(t, { ...data, count }) }}',
};

export function createPlugin(i18n: any) {
    return {
        install(app: App<Element>) {
            app.provide('i18n', i18n);
            app.config.globalProperties.$i18n = i18n;
            app.mixin({
                computed: {
                    $i18n: {
                        get() {
                            return i18n;
                        },
                    },
                },
            })
            app.component('TString', TString);
        },
    };
}
