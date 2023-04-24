import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { DatePicker as MUIDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormHelperText } from '@material-ui/core';

const DatePicker = ({ label, name, ...rest }) => {
  const classes = useStyles();
  const [field, meta, helpers] = useField(name);

  const handleChange = (value) => {
    helpers.setValue(value);
  };

  const showError = Boolean(meta.touched && meta.error);

  return (
    <FormControl error={showError}>
      <MUIDatePicker
        {...field}
        {...rest}
        label={label}
        format="dd/MM/yyyy"
        value={field.value || null}
        onChange={handleChange}
        className={classes.datePicker}
        inputVariant="outlined"
      />
      {showError && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  datePicker: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

export default DatePicker;