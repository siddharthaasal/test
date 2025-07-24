declare module "*.mdx" {
    import { FC } from "react";

    export const meta: {
        title: string;
        description: string;
        date: string;
        [key: string]: any;
    };

    const MDXComponent: FC;
    export default MDXComponent;
}
