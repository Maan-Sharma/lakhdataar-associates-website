export interface GalleryImage {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
}
export type GalleryCategory =
    | "All"
    | "Coal"
    | "Billets"
    | "Scrap"
    | "Logistics"
    | "Industry";
