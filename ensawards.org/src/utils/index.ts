export const adaptBreadcrumb = (breadcrumb: string) : string => breadcrumb.toLowerCase().replace(" ", "-");

//If we only use it in subpage hero, maybe it's best to move it there