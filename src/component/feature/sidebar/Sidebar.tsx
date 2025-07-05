import { MdHistory, MdOutlineDashboard, MdOutlineGroups } from "react-icons/md";
import "./sidebar.css";
import { TbMoneybag } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoStatsChartSharp } from "react-icons/io5";

export function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <h1 className="sidebar__title">
          <IoStatsChartSharp />
          ShareBill
        </h1>

        <ul className="sidebar__list">
          <li className="sidebar__item">
            <MdOutlineDashboard />
            Dashboard
          </li>

          <li className="sidebar__item">
            <MdOutlineGroups />
            My Groups
          </li>

          <li className="sidebar__item">
            <TbMoneybag />
            Add Expense
          </li>

          <li className="sidebar__item">
            <MdHistory />
            History
          </li>

          <li className="sidebar__item">
            <CgProfile />
            Profile
          </li>
        </ul>
      </section>
    </>
  );
}
