import * as React from "react";
import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        style={{ backgroundColor: 'brown' }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography
            variant="h6"
            color="white"
            noWrap
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            <span style={{ color: 'white' }}>BOOK</span>
            <span style={{ color: 'black', marginLeft: '4px', marginRight: '4px' }}>MY</span>
            <span style={{ color: 'white' }}>TEACHER</span>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/home/support"
              sx={{ my: 1, mx: 1.5, fontWeight: 'bold', color: 'white' }}
            >
              Support
            </Link>
            <Link
              onClick={() => {
                window.location.href = "/teacher/registration";
              }}
              variant="button"
              color="text.primary"
              href="/teacher/registration"
              sx={{ my: 1, mx: 1.5, fontWeight: 'bold', color: 'white' }}
            >
              As Teacher
            </Link>
            <Link
              onClick={() => {
                window.location.href = "/student/registration";
              }}
              variant="button"
              color="text.primary"
              href="/student/registration"
              sx={{ my: 1, mx: 1.5, fontWeight: 'bold', color: 'white' }}
            >
              As Student
            </Link>
          </nav>
          <Button
            onClick={() => {
              window.location.href = "/login_as";
            }}
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5, color: 'white' }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/home";
            }}
            variant="outlined"
            sx={{ my: 1, mx: 1.5, color: 'white' }}
          >
            LOG OUT
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
