"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Container,
    StarIcon,
    ProfileIcon,
    SettingsIcon,
    PowerOffIcon,
    Button,
    LogoSVG,
    CaretDownSVG,
} from "@components";

const navItems = [
    {
        href: "/",
        text: "برگ نخست",
        options: [],
    },
    {
        href: "/consultants",
        text: "مشاوره",
        options: [],
    },
    {
        href: "/quizzes",
        text: "تست ها",
        options: [
            {
                text: "تست شماره 1",
                href: "/quizzes/1",
            },
            {
                text: "تست شماره 2",
                href: "/quizzes/2",
            },
            {
                text: "تست شماره 3",
                href: "/quizzes/3",
            },
        ],
    },
    {
        href: "/partners",
        text: "همکاری",
        options: [],
    },
    {
        href: "/contacts",
        text: "تماس با ما",
        options: [],
    },
];

export default function Header() {
    const [loggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const toggleProfileDropdown = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
    };

    const renderDropdown = (options) => (
        <ul className="absolute right-0 shadow py-3 w-48 z-10 rounded-default bg-background text-md">
            {options.map((option, index) => (
                <li key={index}>
                    <Link href={option.href}>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            {option.text}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );

    const renderProfileDropdown = () => (
        <ul className="flex flex-col gap-2 absolute -left-6 top-full w-44 shadow py-3 z-10 rounded-default bg-background text-md">
            <li className="px-4">
                <Link href="/settings">
                    <div className="flex items-center gap-3">
                        <ProfileIcon />
                        <span className="text-sm">پروفایل</span>
                    </div>
                </Link>
            </li>
            <li className="px-4">
                <Link href="/settings">
                    <div className="flex items-center gap-3">
                        <SettingsIcon />
                        <span className="text-sm">تنظیمات</span>
                    </div>
                </Link>
            </li>
            <li className="px-4">
                <Link href="/settings">
                    <div className="flex items-center gap-3">
                        <StarIcon />
                        <span className="text-sm">علاقه مندیها</span>
                    </div>
                </Link>
            </li>
            <li className="text-danger border-t-[1px] border-overlay px-4 pt-3">
                <Link href="/settings">
                    <div className="flex items-center gap-3">
                        <PowerOffIcon />
                        <span className="text-sm">خروج</span>
                    </div>
                </Link>
            </li>
        </ul>
    );

    const headerTopBarTest =
        "برای دریافت جدیدترین تخفیف ها پیج اینستاگرام ما را فالو کنید";

    return (
        <header
            className={`block relative  ${headerTopBarTest ? "h-[120px]" : "h-20"}`}
        >
            <div className="top-0 left-0 absolute w-full bg-background z-50">
                {headerTopBarTest && (
                    <div className="w-full h-10 flex items-center justify-center text-center bg-primary">
                        <span className="font-bold text-sm text-white mx-auto">
                            {headerTopBarTest}
                        </span>
                    </div>
                )}
                <div className="w-full h-20 flex items-center z-50">
                    <Container>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">
                                <ToogleMobileMenu className="flex lg:hidden" />
                                <LogoSVG className="hidden lg:flex" />
                            </div>
                            <nav className="hidden lg:block">
                                <ul
                                    className="flex items-center gap-10 font-bold"
                                    dir="rtl"
                                >
                                    {navItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="relative group"
                                            onMouseEnter={() =>
                                                toggleDropdown(index)
                                            }
                                            onMouseLeave={() =>
                                                toggleDropdown(index)
                                            }
                                        >
                                            <Link href={item.href}>
                                                <span className="flex items-center gap-2 text-lg cursor-pointer py-6">
                                                    {item.text}
                                                    {item.options.length > 0 && <CaretDownSVG />}
                                                </span>
                                            </Link>
                                            {item.options.length > 0 &&
                                                dropdownOpen === index &&
                                                renderDropdown(item.options)}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="flex items-center gap-4">
                                {loggedIn ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={toggleProfileDropdown}
                                        onMouseLeave={toggleProfileDropdown}
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary cursor-pointer text-white">
                                            <ProfileIcon />
                                        </div>
                                        {profileDropdownOpen &&
                                            renderProfileDropdown()}
                                    </div>
                                ) : (
                                    <Button className="font-1" size="sm">
                                        <ProfileIcon />
                                        <span>وارد شوید</span>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </header>
    );
}

const ToogleMobileMenu = (props) => {
    return (
        <>
            <button
                {...props}
                className={`w-10 h-10 cursor-pointer flex-col items-center justify-center gap-2 ${props.className}`}
            >
                {[1, 2, 3].map((item) => (
                    <span key={item} className="w-full h-[3px] bg-black"></span>
                ))}
            </button>
        </>
    );
};
