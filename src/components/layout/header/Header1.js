"use client";

import { useState } from "react";
import {
    Container,
    StarIcon,
    ProfileIcon,
    SettingsIcon,
    PowerOffIcon,
} from "../../../components";
import Link from "next/link";

const navItems = [
    {
        href: "/",
        text: "برگ نخست",
        options: [],
    },
    {
        href: "/talks",
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
                        <span>پروفایل</span>
                    </div>
                </Link>
            </li>
            <li className="px-4">
                <Link href="/settings">
                    <div className="flex items-center gap-3">
                        <SettingsIcon />
                        <span>تنظیمات</span>
                    </div>
                </Link>
            </li>
            <li className="px-4">
                <Link href="/settings">
                    <div className="flex items-center gap-3">
                        <StarIcon />
                        <span>علاقه مندیها</span>
                    </div>
                </Link>
            </li>
            <li className="text-danger border-t-[1px] border-overlay px-4 pt-3">
                <Link href="/settings">
                    <div className="flex items-center gap-3">
                        <PowerOffIcon />
                        <span>خروج</span>
                    </div>
                </Link>
            </li>
        </ul>
    );

    return (
        <header className="h-28">
            <div className="top-0 left-0 fixed w-full bg-background z-50">
                <div className="w-full h-10 flex items-center justify-center text-center bg-primary">
                    <span className="font-bold text-sm text-white mx-auto">
                        برای دریافت جدیدترین تخفیف ها پیج اینستاگرام ما را فالو
                        کنید
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <Container>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="w-10 h-10 bg-primary rounded-full right-2 relative before:w-full before:h-full before:relative before:flex before:rounded-full before:-left-2 before:bg-yellow-400"></span>
                                <span className="text-xl font-bold relative -right-2">
                                    روان ابزار
                                </span>
                            </div>
                            <nav>
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
                                                <span className="flex items-center text-lg cursor-pointer py-6">
                                                    {item.text}
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
                                <div
                                    className="relative"
                                    onMouseEnter={toggleProfileDropdown}
                                    onMouseLeave={toggleProfileDropdown}
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary cursor-pointer text-white">
                                        <ProfileIcon />
                                    </div>
                                    {profileDropdownOpen &&
                                        renderProfileDropdown()}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </header>
    );
}
