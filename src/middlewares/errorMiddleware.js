import { envConfig } from '../configs/env.js';
import AppError from './appError.js';

// Function to handle CastError in Mongoose (eg. invalid ObjectId)
export const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

// Function to handle duplicated fields
export const handleDuplicateFieldsDB = (err) => {
  // Use Regex to match the values between the quotation marks in errmsg created by Mongoose
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

// Function to handle ValidationError in Mongoose
export const handleValidationErrorDB = (err) => {
  // Loop over an array of all error messages and extract each error's message
  const errors = Object.values(err.errors).map((el) => el.message);

  // Define and return the error's message with all messages joined as a string
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

// Function to send all error details in development
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

// Function to send limited error details in production
export const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
    // Programming or other unknown error: don't leak error details
  } else {
    // Log error to the console
    if (envConfig.env === 'development') {
      // eslint-disable-next-line no-console
      console.error('ERROR: ', err);
    }
    // Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!'
    });
  }
};

// Function to send error details in test environment
const sendErrorTest = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message
  });
};

// Function to handle errors globally
/* eslint-disable no-unused-vars */
const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (envConfig.env === 'development') {
    sendErrorDev(err, res);
  } else if (envConfig.env === 'production') {
    // fix: create new `error` object from `err` so it will inherit all properties from `err`
    // as the spread syntax `error = { ...err }` does not copy all properties from the `err` object
    let error = Object.create(err);

    if (error.name === 'CastError') {
      error = handleCastErrorDB(error);
      return sendErrorProd(error, res);
    }

    if (error.code === 11000) {
      error = handleDuplicateFieldsDB(error);
      return sendErrorProd(error, res);
    }

    if (error.name === 'ValidationError') {
      error = handleValidationErrorDB(error);
      return sendErrorProd(error, res);
    }

    sendErrorProd(err, res);
  } else if (envConfig.env === 'test') {
    sendErrorTest(err, res);
  }
};

export default globalErrorHandler;
