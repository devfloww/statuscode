// function to check for and sanitize the status code upplied by user

export const sanitize_status_code_h = ( code ) => {
  let status_code = code
  if (!(Number.isFinite(status_code) && !Number.isInteger(status_code))) {
    if (status_code >= 100 && status_code <= 599) {
      return status_code
    } else {
      return -1
    }
  } else {
    return {
      code: code,
      err_code: -1
    }
  }
}

