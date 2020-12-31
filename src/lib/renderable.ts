import { Asset } from "./asset";

export interface Renderable {
    /**
     * Get a renderable asset corresponding to object
     */
    getAsset(): Asset;
}