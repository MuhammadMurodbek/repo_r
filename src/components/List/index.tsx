import React from "react";
import { ModalEdit } from "../Modal";
import { lists } from "../../constants/data";
import { Sublists } from "../Sublists";
import { ListTitle } from "../ListTitle";
import "./style.css";
import { TModalProps } from "../../utils/types";

function ListSort() {
  const [fruitItems, setFruitItems] = React.useState<object[]>(lists);
  const [subElement, setSubElement] = React.useState<string>("Mastercard");
  const [modal, setModal] = React.useState<TModalProps>({
    isOpen: false,
    id: null,
    subId: null,
  });
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const handleSort = () => {
    let _fruitItems = [...fruitItems];
    const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0];
    _fruitItems.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setFruitItems(_fruitItems);
  };

  const handleRemoveList = (id: string): void => {
    let _items = fruitItems.filter((prev: any) => prev.id != id);
    setFruitItems(_items);
  };

  const handleRemoveSubList = (id: string, subId: string): void => {
    let _fruitItems = JSON.parse(JSON.stringify(fruitItems));
    let index = _fruitItems.findIndex((item: { id: string }) => item.id == id);
    if (index >= 0) {
      let _sublist = _fruitItems[index].sublist.filter(
        (prev: { id: string }) => prev.id != subId
      );
      _fruitItems[index].sublist = _sublist;
      setFruitItems(_fruitItems);
    }
  };

  return (
    <div className="app">
      <ModalEdit
        data-testid="modal_component"
        modal={modal}
        state={fruitItems}
        setModal={setModal}
        setState={setFruitItems}
      />

      <div className="list-container">
        <div className="list-container__left">
          {fruitItems.map((item: any, index) => (
            <div
              key={index}
              className="list-item"
              draggable
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
                e.preventDefault()
              }
            >
              <div className="list_content_wrap">
                <ListTitle
                  item={item}
                  subElement={subElement}
                  setSubElement={setSubElement}
                  setModal={setModal}
                  handleRemoveList={handleRemoveList}
                />
                <div
                  className={subElement == item.name ? "acc_div" : "hide_sub"}
                >
                  <Sublists
                    item={item}
                    setModal={setModal}
                    handleRemoveSubList={handleRemoveSubList}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListSort;
