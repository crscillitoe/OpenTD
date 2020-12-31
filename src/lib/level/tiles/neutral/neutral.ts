import { Tile } from "../tile";
import { TileMatcher } from "../tileMatcher";
export interface NeutralTile extends Tile {
  discriminator: "Neutral-Tile";
}

export class NeutralTileMatcher implements TileMatcher {
  matches(t: Tile): t is NeutralTile {
    return t.discriminator === "Neutral-Tile";
  }
}
