# Express.js Asynchronous Operations within Synchronous Request Handlers

This repository demonstrates a common but subtle bug in Express.js applications involving asynchronous operations within synchronous request handlers.  The issue arises when an error occurs *after* a response has already been sent.  In such scenarios, the standard Express error handling middleware may be bypassed, leading to unexpected behavior and making debugging challenging.

## The Problem

The `bug.js` file showcases the problematic code.  Notice how the error handling middleware is placed at the end, which is the standard practice. However, if an asynchronous operation (like a database query) fails *after* `res.send()` has executed, the error handling middleware will never execute.