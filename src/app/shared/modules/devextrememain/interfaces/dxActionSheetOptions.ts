import { ItemClickEvent } from "devextreme/ui/action_sheet"

export interface DxActionSheetOptions<T>{
    title : string,
    usePopover : boolean,
    items : DxActionItem<T>[],
    visible: boolean,
    target : string | Element,
    onItemClick : (e : ItemClickEvent) => void
}
export interface DxActionItem<T>{
    command : string,
    text: string,
    icon : string,
    data?: T,
    disabled? :boolean,
    stylingMode? : string,
    type?:string
}
