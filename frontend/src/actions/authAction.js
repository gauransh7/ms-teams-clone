import axios from 'axios';
import apiClient from '../helpers/apiClient';
import Cookies from 'js-cookie'

import {
    SET_USER_DATA,
    GET_USER_DATA,
    SET_TOKEN,
    LOGIN_PENDING,
    GET_USER_DATA_PENDING,
    USER_API_ERROR,
    IS_LOGGED_IN,
} from './authActionType';

import {
    facebook_login,
    google_login,
    who_am_i,
    logout,
} from '../urls/auth';

const apiDispatch = (actionType = '', data) => {
    return {
        type: actionType,
        payload: data,
    };
};

const apiError = error => {
    return {
        type: USER_API_ERROR,
        error
    }
}

export const GoogleLoginFtn = (data) => {
    let url = google_login;
    return dispatch => {
        axios({
            method: "POST",
            url: url,
            data: data,
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then(res => {
                console.log("done")
                console.log(res)
                dispatch(apiDispatch(SET_TOKEN, res.data.key));
                Cookies.set('token', res.data.key, { expires: 7})
                // localStorage.setItem("token", res.data.key);
                // dispatch(apiDispatch(IS_LOGGED_IN, true))
                dispatch(getUserData())
            })
            .catch(error => {
                dispatch(apiError(error));
                dispatch(apiDispatch(IS_LOGGED_IN, false))
            })
    }
}

export const FacebookLoginFtn = (data) => {
    let url = facebook_login;
    return dispatch => {
        axios({
            method: "POST",
            url: url,
            data: data,
        })
            .then(res => {
                console.log("done")
                console.log(res)
                dispatch(apiDispatch(SET_TOKEN, res.data.key));
                Cookies.set('token', res.data.key, { expires: 7})
                // localStorage.setItem("token", res.data.key);
                // dispatch(apiDispatch(IS_LOGGED_IN, true))
                dispatch(getUserData())
            })
            .catch(error => {
                dispatch(apiError(error));
                dispatch(apiDispatch(IS_LOGGED_IN, false))
            })
    }
}

export const getUserData = () => {
    console.log("fetch data")
    let url = who_am_i;
        
    return dispatch => {
        dispatch(apiDispatch(GET_USER_DATA_PENDING, true));
        apiClient
            .get(url)
            .then(res => {
                console.log(res.data);
                dispatch(apiDispatch(SET_USER_DATA, res.data));
                dispatch(apiDispatch(IS_LOGGED_IN, true))
                dispatch(apiDispatch(GET_USER_DATA_PENDING, false));
            })
            .catch(error => {
                dispatch(apiError(error));
                dispatch(apiDispatch(GET_USER_DATA_PENDING, false));
                dispatch(apiDispatch(SET_USER_DATA, null));
                dispatch(apiDispatch(SET_TOKEN, ''));
                localStorage.removeItem('token');
                dispatch(apiDispatch(IS_LOGGED_IN, false))
            })
    }
}

export const logoutUser = () => {
    console.log("fetch data")
    let url = logout;
        
    return dispatch => {
        apiClient
            .post(url)
            .then(res => {
                console.log(res.data);
                dispatch(apiDispatch(IS_LOGGED_IN, false));
                dispatch(apiDispatch(SET_USER_DATA, null));
                dispatch(apiDispatch(SET_TOKEN, ''));
                localStorage.removeItem('token');
            })
            .catch(error => {
                dispatch(apiError(error));
            })
    }
}


