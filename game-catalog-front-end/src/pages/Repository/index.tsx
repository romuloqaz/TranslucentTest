import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  TextField,
  Checkbox,
  Typography,
  Grid,
  MenuItem,
} from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

import IGame from '../../models/IGame';
import { addGamesRequest } from '../../store/games/gamesActions';
import { Header, Container } from './styles';

const Repository: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedDate, handleDateChange] = useState(new Date());
  const currentDate = new Date();

  const formik = useFormik({
    initialValues: {
      title: '',
      year: 2021,
      console: 'PS2',
      completed: false,
      dateOfCompletion: new Date(),
      personalNotes: '',
    },
    validationSchema: yup.object().shape({
      title: yup
        .string()
        .required('Insert the game title')
        .max(100, 'Maximum title length is 100 characters.'),
      year: yup
        .number()
        .required('Insert the game year')
        .test(
          'len',
          'The year must be exactly 4 characters long.',
          (val) => Math.ceil(Math.log10(val + 1)) === 4,
        )
        .min(1970, 'The year must be greater than or equal to 1970')
        .max(
          new Date().getFullYear(),
          'The year must be less than or equal to the current year.',
        )
        .typeError('Please, enter a valid date.'),
      console: yup.string().required('Insert the game Console'),
      personalNotes: yup.string().required('Insert the Personal Notes.'),
    }),
    onSubmit: (values) => {
      const game: IGame = values;
      game.dateOfCompletion = selectedDate;
      if (!game.completed) {
        game.dateOfCompletion = null;
      }
      dispatch(addGamesRequest(game));
      history.push('/');
    },
  });

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      <Container>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <h1>Insert a New Game</h1>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            fullWidth
            id="year"
            name="year"
            label="Year"
            type="number"
            value={formik.values.year}
            onChange={formik.handleChange}
            error={formik.touched.year && Boolean(formik.errors.year)}
            helperText={formik.touched.year && formik.errors.year}
          />
          <TextField
            name="console"
            label="Console"
            fullWidth
            required
            select
            value={formik.values.console}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.console)}
            helperText={formik.errors.console}
          >
            <MenuItem value="PS2">Playstation 2</MenuItem>
            <MenuItem value="PS3">Playstation 3</MenuItem>
            <MenuItem value="PS4">Playstation 4</MenuItem>
            <MenuItem value="PS5">Playstation 5</MenuItem>
            <MenuItem value="NINTENDO SWITCH">Nintendo Switch</MenuItem>
            <MenuItem value="XBOX ONE">Xbox One</MenuItem>
            <MenuItem value="XBOX SERIES">Xbox Series</MenuItem>
            <MenuItem value="PC">PC</MenuItem>
          </TextField>
          <Grid container justifyContent="center">
            <Typography variant="h6">
              The inserted game has been finished?
            </Typography>
            <Checkbox
              name="completed"
              value={formik.values.completed}
              onChange={formik.handleChange}
              color="primary"
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              format="yyyy/MM/dd"
              minDate={`${formik.values.year}/01/01`}
              maxDate={currentDate}
              value={selectedDate}
              onChange={handleDateChange}
              fullWidth
              name="dateOfCompletion"
              label="Date of Completion"
              disabled={!formik.values.completed}
            />
          </MuiPickersUtilsProvider>
          <TextField
            fullWidth
            id="personalNotes"
            name="personalNotes"
            label="Personal Notes"
            type="text"
            value={formik.values.personalNotes}
            onChange={formik.handleChange}
            error={
              formik.touched.personalNotes &&
              Boolean(formik.errors.personalNotes)
            }
            helperText={
              formik.touched.personalNotes && formik.errors.personalNotes
            }
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Register
          </Button>
        </form>
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Repository;
