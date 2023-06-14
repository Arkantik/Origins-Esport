import { useState } from "react";

import RowSearch from "./RowSearch";
import NavTab from "./NavTab";
import VideoTable from "./video/VideoTable";
import DashNav from "./DashNav";
import RowHead from "./RowHead";
import CategoryTable from "./category/CategoryTable";

export default function DashTable() {
  const [activeTab, setActiveTab] = useState("video");

  const setActiveTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative mx-auto max-w-screen-xl px-4 sm:p-5 lg:px-12">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <NavTab setActiveTabItem={setActiveTabItem} />
        <RowSearch activeTab={activeTab} />
        <table className="w-full overflow-x-auto text-left text-base text-neutralDarkest dark:text-neutralLightest">
          <RowHead activeTab={activeTab} />
          <tbody>
            {/* eslint-disable */}
            {activeTab === "video" ? (
              <VideoTable />
            ) : activeTab === "category" ? (
              <CategoryTable />
            ) : null}
            {/* eslint-enable */}
          </tbody>
        </table>
        <DashNav />
      </div>
    </div>
  );
}

// {
//   /* <Table ({children})>
//   <table className="w-full overflow-x-auto text-left text-base text-neutralDarkest dark:text-neutralLightest">
//     <DashHead activeTab={activeTab} />
//     <tbody>
//       {children}
//     </tbody>
//   </table>
// </Table> */
// }

// <Table>
//  {activeTab === 'videos'} && <DashRowsVideo></DashRowsVideo>
//  {activeTab === 'category'} && <DashRowsCategory></DashRowsCategory>
//  {activeTab === 'pages'} && <DashRowsPages></DashRowsPages>
// </Table>;
