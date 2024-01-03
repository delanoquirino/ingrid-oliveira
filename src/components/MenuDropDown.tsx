"use client"

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Serviços
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      Sobre
    </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      Preço
    </Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      Galeria
    </Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      FeedBack
    </Link>
    ),
    key: '4',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      Contato
    </Link>
    ),
    key: '5',
  },
  {
    label: (
      <Link className='hover:text-primary transition duration-300 ease-in-out' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      Agendar
    </Link>
    ),
    key: '6',
  },
  
];

export const MenuDropDown  = () => (
  <Dropdown menu={{ items }}>
    <a className='hover:text-primary cursor-pointer' onClick={(e) => e.preventDefault()}>
      <Space >
        Acessar +
        <DownOutlined  />
      </Space>
    </a>
  </Dropdown>
);
