import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

function Profile() {
    const options = [
        {
            name: 'Profile',
            href: '##',
            icon: <UserIcon className="w-7 h-7" />,
        },
        {
            name: 'Courses Taken',
            href: '##',
            icon: <BookOpenIcon className="w-7 h-7" />,
        },
        {
            name: 'Dashboard',
            href: '##',
            icon: <ArrowTrendingUpIcon className="w-7 h-7" />,
        },
    ]
  return (
    <div>
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex outline-none items-center rounded-full px-2 py-[8px] transition ease-in-out text-base font-bold text-white hover:text-opacity-100`}
            >
              <UserCircleIcon className="w-8 h-8" />
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                   h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-[150px] z-10 mt-4 sm:px-0">
                <div className="p-1 overflow-hidden bg-[rgb(53,55,56)] rounded-xl shadow-lg">
                  <div className="p-2 relative grid gap-5">
                    {options.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 px-3 py-2 flex items-center transition duration-150 ease-in-out hover:bg-[#1d1e1f]"
                      >
                        <div className="flex rounded-full bg-[rgb(29,30,31)] p-2 shrink-0 items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div className="ml-2 mr-3">
                          <p className="text-sm font-medium text-gray-200">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
        </Popover>
    </div>
  )
}

export default Profile