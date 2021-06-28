export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const apiDispatch = (actionType = '', data) => {
  return {
    type: actionType,
    payload: data
  }
}

export const getCookie = cname => {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const apiError = type => error => {
  return {
    type: type,
    error
  }
}

export const getFormattedDate = date => {
  var month = date.getMonth() + 1
  var day = date.getDate()
  var year = date.getFullYear()
  return day + '/' + month + '/' + year
}

export const getInitials = (name = '') =>
  name.split(' ').map(str => (str ? str[0].toUpperCase() : ''))
