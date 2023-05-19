import React from "react";
import "./style.css";
import { Button } from "../Button";
import { TSubList } from "../../utils/types";

export const Sublists = ({ item, setModal, handleRemoveSubList }: TSubList) => {
  return (
    <div className="sub-list-wrapper" data-testid="sub_list_id">
      <ul className="list-wrapper">
        {item.sublist.map((prev: any) => (
          <li key={prev.id} className="d-flex j-between">
            <div className="d-flex sub-list-left j-between w-100">
              <div className="d-flex left-wrap">
                <div className="d-flex d-column t-left">
                  <span className="title-content-head">No</span>
                  <span className="title-content-body">1</span>
                </div>
                <div className="d-flex d-column t-left">
                  <span className="title-content-head">name</span>
                  <span className="title-content-body">
                    <i className="fa-solid fa-file"></i>
                    {prev.name}
                  </span>
                </div>
              </div>
              <div className="d-flex d-column t-left center-wrap">
                <span className="title-content-head">Order</span>
                <span className="title-content-body">{prev.order}</span>
              </div>
            </div>
            <div className="d-flex sub-btns">
              <Button
                onClick={() =>
                  setModal({
                    id: item.id,
                    subId: prev.id,
                    isOpen: true,
                  })
                }
                iconname="fa-regular fa-edit"
                colortype="info"
              />

              <Button
                onClick={() => handleRemoveSubList(item.id, prev.id)}
                iconname="fa-regular fa-trash-can"
                colortype="danger"
              />
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};
