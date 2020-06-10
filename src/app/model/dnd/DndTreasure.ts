import { DndCurrency } from "./DndCurrency";
import { DndItemWrapper } from "./DndItemWrapper";

export interface DndTreasure{
    info: string;
    currency: DndCurrency;
    items: DndItemWrapper[];
    valuables: DndItemWrapper[];
}
