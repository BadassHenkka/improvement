import React, { ReactElement } from 'react'
import { Popover } from '@headlessui/react'

import { ProfileMenuItemsType } from './ProfileDropdown'
import { MobileSignoutBtn } from './SignoutBtn'

const MobilePopoverMenu: React.FC<ProfileMenuItemsType> = ({
    user,
    userNavigation,
}): ReactElement => (
    <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
        <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                    />
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                        {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                        {user.email}
                    </div>
                </div>
            </div>
            <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                {userNavigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                        {item.name}
                    </a>
                ))}
                <MobileSignoutBtn />
            </div>
        </div>
    </Popover.Panel>
)

export default MobilePopoverMenu
