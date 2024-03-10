import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import mainlogo from "../../assests/home_page/mainlogo.jpg";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
const engineering = [
  {
    name: "IIT",
    // href: "/iits-details",
  },
  {
    name: "NIT",
    // href: "/pyq-neet",
  },
  {
    name: "IIIT",
    // href: "/pyq-cbse-boards",
  },
  {
    name: "GFTI",
    // href: "/pyq-ntse",
  },
  {
    name: "State Engineering",
    // href: "/pyq-kvpy",
  },
  {
    name: "Exam Schedule 2024",
    // href: "/pyq-jee-main",
  },
];
const medical = [
  {
    name: "AIIMS",
    // href: "/exam-schedule-2024",
  },
  {
    name: "Dental Colleges",
    // href: "/exam-jee-main",
  },
  {
    name: "Ayurvedic Colleges",
    // href: "/exam-jee-advanced",
  },
  {
    name: "State Medical Colleges",
    // href: "/exam-neet",
  },
  {
    name: "Other Top Medical Colleges",
    // href: "/exam-ntse",
  },
];
const mba = [
  {
    name: "IIM",
  },
  {
    name: "MBA in IIT and NIT",
  },
  {
    name: "Exam Schedule 2024",
  },
  {
    name: "Other Top MBA Colleges",
  },
];
const others = [
  {
    name: "Law",
  },
  {
    name: "Design",
  },
  {
    name: "Aviation",
  },
  {
    name: "Hospitality & Travel",
  },
  {
    name: "Mass Communication",
  },
  {
    name: "Architecture & Planning",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className=" flex max-w-9xl items-center justify-between p-1 lg:px-8 border-b-4 border-orange-500"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="https://www.iitacademy.in/" className="-m-1.5 p-1.5">
            <span className="sr-only">IIT Academy</span>
            <img className="h-20 w-auto" src={mainlogo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 h-30 w-30 font-bold inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 mr-4"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-40">
          <a
            href="/"
            className="text-lg font-semibold leading-6 text-gray-900 mt-1"
          >
            Home
          </a>
          {/*dkfhj*/}
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              Engineering
              {isOpen ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
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
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {engineering.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              Medical
              {isOpen1 ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
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
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {medical.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              MBA
              {isOpen2 ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
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
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {mba.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
              onClick={() => setIsOpen3(!isOpen3)}
            >
              More
              {isOpen3 ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
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
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {others.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a className="text-lg font-semibold leading-6 text-gray-900 mt-1">
            Contact Us
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="https://www.iitacademy.in/" className=" -m-2 p-0">
              <span className="sr-only">IIT Academy</span>
              <img className="h-20 w-auto" src={mainlogo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900 text-20xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="-space-y-1 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-200"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200">
                        Engineering
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-7 w-7 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 border-2 border-orange-500">
                        {[...engineering].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-0 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-orange-200"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{
                                color: "#f39c12",
                                fontSize: "larger",
                                marginRight: "5px",
                                marginUp: "10px",
                              }}
                            ></i>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200">
                        Medical
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-7 w-7 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 border-2 border-orange-500">
                        {[...medical].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-0 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-orange-200"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{
                                color: "#f39c12",
                                fontSize: "larger",
                                marginRight: "5px",
                                marginUp: "10px",
                              }}
                            ></i>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200">
                        MBA
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-7 w-7 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 border-2 border-orange-500">
                        {[...mba].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-0 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-orange-200"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{
                                color: "#f39c12",
                                fontSize: "larger",
                                marginRight: "5px",
                                marginUp: "10px",
                              }}
                            ></i>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200">
                        More
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-7 w-7 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 border-2 border-orange-500">
                        {[...others].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-0 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-orange-200"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{
                                color: "#f39c12",
                                fontSize: "larger",
                                marginRight: "5px",
                                marginUp: "10px",
                              }}
                            ></i>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  hover:bg-orange-200">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
