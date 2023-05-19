import React, { useEffect, useState } from "react";
import "./style.css";
import { Input } from "../Input";
import { TModalDataProps } from "../../utils/types";

export const ModalEdit = React.memo(
  ({ modal, setModal, state, setState }: TModalDataProps) => {
    const [values, setValues] = useState({ name: "", category: "" });
    useEffect(() => {
      let _state: any = state?.find((item: any) => item.id == modal.id);
      if (modal?.subId) {
        let _name = _state?.sublist?.find(
          (prev: any) => prev.id == modal?.subId
        )?.name;
        setValues({ name: _name, category: "" });
        return;
      }
      setValues({ name: _state?.name, category: _state?.category });
    }, [state, modal]);

    const handleSubmit = (): void => {
      let _state = JSON.parse(JSON.stringify(state));
      let _index = _state.findIndex((item: any) => item.id == modal.id);
      if (modal?.subId) {
        let _sublist = _state[_index].sublist;
        let _subIndex = _sublist.findIndex(
          (prev: any) => prev.id == modal?.subId
        );
        _sublist[_subIndex].name = values.name;
        _state[_index].sublist = _sublist;
      } else {
        _state[_index].name = values.name;
        _state[_index].category = values.category;
      }

      setState(_state);
      handleClose();
    };

    const handleChange = (e: any) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleClose = () => {
      setModal({ id: null, subId: null, isOpen: false });
    };
    return (
      <div
        className={
          modal?.isOpen
            ? "modal_edit_open d-flex j-center d-column"
            : "modal_edit_close"
        }
      >
        <div className="edit-title" data-testid="edit_title">
          Edit
        </div>
        <div className="d-flex d-column w-100" data-testid="form-modal">
          <Input
            type="text"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            placeholder="Name"
          />
          {!modal?.subId && (
            <Input
              name="category"
              value={values.category || ""}
              onChange={handleChange}
              placeholder="Category"
            />
          )}
          <div className="modal-btn">
            <button
              title="submit"
              onClick={handleSubmit}
              data-testid="submit_button_save"
            >
              Save
            </button>
            <button
              title="close"
              onClick={handleClose}
              data-testid="edit_button_cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
);
