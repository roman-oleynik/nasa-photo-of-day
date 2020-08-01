export enum ActionType {
    SET_PICTURE = "SET_PICTURE",
    SET_PICTURE_ON_PAGE = "SET_PICTURE_ON_PAGE"
};

export type Action = {
    type: ActionType,
    body: any
}