import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';


const SideBar = () =>{
    const { collapseSidebar } = useProSidebar();

return(
    <>

    <Sidebar className='h-screen max-w-md'>
    <button onClick={collapseSidebar()}>Collapse Sidebar</button>
  <Menu>
    <SubMenu label="Charts 📊">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
      <MenuItem> Bar charts </MenuItem>
    </SubMenu>
    <MenuItem> Data Tables </MenuItem>
    <MenuItem> Documentation </MenuItem>
  </Menu>
</Sidebar>
</>
)
}

export default SideBar