import React from 'react';
import 'date-fns';
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Paper,
    Typography,
    Container
}from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
}from '@material-ui/pickers';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateFnsUtils from '@date-io/date-fns';

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider  } from '@material-ui/core/styles';
import { light } from '@material-ui/core/styles/createPalette';

function Copyright() {
  return (
    <Typography variant="body2" color="#000" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4)
  },
  avatar: {
    margin: theme.spacing(2),
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignUp() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'light',
          primary: {
            light: '#BAB6EE',
            main: '#0080C6',
            dark: '#5F5B8C',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#710000',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      }),
    [prefersDarkMode],
  );
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={theme}>
    
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper}>
        <Avatar className={classes.large, classes.avatar}>
          <AccountCircleRoundedIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            <KeyboardDatePicker
                
                variant="inline"
                format="dd/MM/yyyy"
                fullWidth
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                label="Date of Birth"
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                onChange={handleDateChange}
                required
                />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/SignIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </MuiPickersUtilsProvider>
      </Paper>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
    
    </ThemeProvider>
  );
}