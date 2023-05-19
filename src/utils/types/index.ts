export interface TModalProps {
  isOpen: boolean;
  id: null | string | number;
  subId: null | string | number;
}
export interface TModalDataProps {
  modal: TModalProps;
  state: object[];
  setState: React.Dispatch<React.SetStateAction<object[]>>;
  setModal: React.Dispatch<React.SetStateAction<TModalProps>>;
}
export interface TListProps {
  item: any;
  subElement: string;
  setSubElement: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<TModalProps>>;
  handleRemoveList: (id: string) => void;
}
export interface TSubList {
  item: any;
  setModal: React.Dispatch<React.SetStateAction<TModalProps>>;
  handleRemoveSubList: (id: string, subId: string) => void;
}
