import {type OrgId, OrgIds} from "@/types/organizations.ts";

export const DEFAULT_OG_IMAGE = "/og_image.png";
export const DEFAULT_TWITTER_IMAGE = "/twitter_og_image.png";

export const ORG_OG_IMAGES = new Map<OrgId, string>([
    [OrgIds.Ens, "/org-ens-dao_og_image.png"],
    [OrgIds.Uniswap, "/org-uniswap-dao_og_image.png"],
]);

export const ORG_TWITTER_IMAGES = new Map<OrgId, string>([
    [OrgIds.Ens, "/org-ens-dao_twitter_og_image.png"],
    [OrgIds.Uniswap, "/org-uniswap-dao_twitter_og_image.png"],
]);

export const getOrgOgImagePath = (orgId: OrgId): string | undefined => {
    return ORG_OG_IMAGES.get(orgId) || DEFAULT_OG_IMAGE;
}


export const getOrgTwitterImagePath = (orgId: OrgId): string | undefined => {
    return ORG_TWITTER_IMAGES.get(orgId) || DEFAULT_TWITTER_IMAGE;
}