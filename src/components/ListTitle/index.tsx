import React from "react";
import "./style.css";
import { Button } from "../Button";
import { TListProps } from "../../utils/types";

export const ListTitle = ({
  item,
  subElement,
  setSubElement,
  setModal,
  handleRemoveList,
}: TListProps) => {
  const handleOpenModal = (name: string) => {
    if (subElement != name) setSubElement(name);
    else setSubElement("");
  };
  const handleEdit = (id: string | number) => {
    setModal({ id: id, subId: null, isOpen: true });
  };
  return (
    <div className="list_title_wrapper">
      <div className="title-wrapper">
        <div className="title-content">
          <span className="title-content-head">No</span>
          <span className="title-content-body">1</span>
        </div>
        <div className="title-content">
          <span className="title-content-head">name</span>
          <span className="title-content-body">
            <i className="fa-solid fa-folder"></i>
            {item.name}
          </span>
        </div>
        <div className="title-content">
          <span className="title-content-head">order</span>
          <span className="title-content-body"> {item.order}</span>
        </div>
        <div className="title-content">
          <span className="title-content-head">category</span>
          <span>{item.category}</span>
        </div>
      </div>
      <div className="btn-wrapper">
        <Button
          onClick={() => handleOpenModal(item.name)}
          iconname={`fa-solid fa-chevron-${
            subElement == item.name ? "down" : "left"
          }`}
          colortype="gray"
          data-testid="btn-open-modal"
        />
        <Button
          onClick={() => handleEdit(item.id)}
          iconname="fa-regular fa-edit"
          colortype="info"
        />
        <Button
          onClick={() => handleRemoveList(item.id)}
          iconname="fa-regular fa-trash-can"
          colortype="danger"
        />
      </div>
    </div>
  );
};
