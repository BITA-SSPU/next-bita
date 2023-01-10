import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

function SideNav({ children }) {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem> Home</MenuItem>
          <MenuItem>
            <button onClick={() => collapseSidebar()}>Collapse</button>
          </MenuItem>
          <MenuItem> Profile</MenuItem>
          <MenuItem> Analytics</MenuItem>
        </Menu>
      </Sidebar>
      <main>{children}</main>
    </div>
  );
}

export default SideNav;
