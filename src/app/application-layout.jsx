'use client';

import { Avatar } from '@/components/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu
} from '@/components/dropdown';
import { Heading } from '@/components/heading';
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer
} from '@/components/sidebar';
import { SidebarLayout } from '@/components/sidebar-layout';
import { useUserStore } from '@/store/user-store';

import { ArrowRightStartOnRectangleIcon, ChevronUpIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import { Cog6ToothIcon, HomeIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';

function logout() {
  localStorage.removeItem('test-login');
  location.reload();
}

function AccountDropdownMenu({ anchor }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>Профиль</DropdownLabel>
      </DropdownItem>

      <DropdownItem href="/settings">
        <Cog6ToothIcon />
        <DropdownLabel>Настройки</DropdownLabel>
      </DropdownItem>

      <DropdownDivider />
      <DropdownItem onClick={logout}>
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Выйти</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

export function ApplicationLayout({ children }) {
  let pathname = usePathname();

  const userInfo = useUserStore(({ userInfo }) => userInfo);

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src={userInfo?.avatar} square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Heading>CodeAgree</Heading>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/" current={pathname === '/'}>
                <HomeIcon />
                <SidebarLabel>Главная</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/" current={pathname === '/'}>
                <SidebarLabel>Продукты</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/" current={pathname === '/'}>
                <SidebarLabel>Гипотезы</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/" current={pathname === '/'}>
                <SidebarLabel>Создать страховку</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSpacer />
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src={userInfo?.avatar} className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950">{userInfo?.nickname}</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500">{userInfo?.login}</span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
