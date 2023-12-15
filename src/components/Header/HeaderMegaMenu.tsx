import React from 'react';
import {
  HoverCard,
  Group,
  Button,
  Box,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMegaMenu.module.css';
import { useNavigate } from "react-router-dom";

export function HeaderMegaMenu() {
  let navigate = useNavigate(); 
  const handleLogin = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

  return (
    <Box pb={18}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />
          <Group h="100%" gap={0}>
            <Box>
              <a href="#" className={classes.link}>
                Trang chủ
              </a>
            </Box>
            <Box>
              <a href="#" className={classes.link}>
                Chi tiết sản phẩm
              </a>
            </Box>
            <Box>
              <a href="#" className={classes.link}>
                Liên hệ
              </a>
            </Box>
          </Group>
          <Group>
            <Button variant="default" onClick={handleLogin} className={classes.headerButton}>Đăng nhập</Button>
            <Button className={classes.headerButton}>Đăng ký</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}