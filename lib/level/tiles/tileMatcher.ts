import { Tile } from "./tile";

export interface TileMatcher {
  matches(t: Tile): boolean;
}
