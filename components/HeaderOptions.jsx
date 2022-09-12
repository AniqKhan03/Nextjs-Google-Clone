import React from 'react'
import HeaderOption from "./HeaderOption"
import { DotsVerticalIcon, SearchIcon, TagIcon, NewspaperIcon, PhotographIcon, LocationMarkerIcon } from "@heroicons/react/outline"

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly border-b-[1px] gray-300 text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-48'>
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={NewspaperIcon} title="News"  />
        <HeaderOption Icon={PhotographIcon} title="Images"  />
        <HeaderOption Icon={LocationMarkerIcon} title="Maps"  />
        <HeaderOption Icon={TagIcon} title="Settings"  />
        <HeaderOption Icon={DotsVerticalIcon} title="More"  />
      </div>

      <div className="flex space-x-4">
        <p className='link'>Tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions
