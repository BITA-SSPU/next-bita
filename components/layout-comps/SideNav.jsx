import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";

function SideNav({ children }) {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem>
            <button
              className="bg-red-500 rounded-full p-2 text-white text-sm"
              onClick={() => collapseSidebar()}
            >
              Collapse
            </button>
          </MenuItem>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/user/profile">Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/user/analytics">Analytics</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <main>{children}</main>
    </div>
  );
}

export default SideNav;
