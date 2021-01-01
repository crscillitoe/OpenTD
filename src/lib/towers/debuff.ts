export interface Debuff {
  id: DebuffID;
  name: string;
  color: string;
  weakTo: Array<DebuffID>;
}

export type DebuffID = string;
