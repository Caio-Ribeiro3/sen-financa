import React from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import IconButton from "../../atoms/button/IconButton";
import Menu from "../../molecules/menu/Menu";

function DataTableCellAction(props) {
  const { cell = {}, column = {} } = props;
  const { actions } = column;

  return (
    <Menu
      options={actions.map((action) => ({
        ...action,
        onClick: () => action.onClick?.(cell),
      }))}
      rootStyle={{ margin: "0 auto" }}
    >
      <IconButton pallete="secondary" variant="outlined">
        <IoEllipsisVerticalSharp />
      </IconButton>
    </Menu>
  );
}

export default DataTableCellAction;
