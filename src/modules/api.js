import axios from "axios";

const API_URL = "https://www.pre-onboarding-selection-task.shop";

export const fetchSignUp = async ({ email, password }) => {
    try {
        const res = await axios({
            url: API_URL + "/auth/signup",
            method: "post",
            data: {
                email,
                password,
            },
            headers: {
                contentType: "application/json",
            },
        });
        return res;
    } catch (e) {
        return {
            message: e.response.data.message,
            status: e.response.data.statusCode,
        };
    }
};

export const fetchSignIn = async ({ email, password }) => {
    try {
        const res = await axios({
            url: API_URL + "/auth/signin",
            method: "post",
            data: {
                email,
                password,
            },
            headers: {
                contentType: "application/json",
            },
        });
        return res;
    } catch (e) {
        return {
            message: e.response.data.message,
            status: e.response.data.statusCode,
        };
    }
};

export const fetchAddTodo = async (todo) => {
    try {
        const res = await axios({
            url: API_URL + "/todos",
            method: "post",
            data: {
                todo,
            },
            headers: {
                contentType: "application/json",
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        });
        return res;
    } catch (e) {
        return {
            message: e.response.data.message,
            status: e.response.data.statusCode,
        };
    }
};

export const fetchGetTodos = async () => {
    try {
        const res = await axios({
            url: API_URL + "/todos",
            method: "get",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        });
        return res;
    } catch (e) {
        return {
            message: e.response.data.message,
            status: e.response.data.statusCode,
        };
    }
};

export const fetchModifyTodo = async ({ id, todo, isCompleted }) => {
    try {
        const res = await axios({
            url: API_URL + "/todos/" + id,
            method: "put",
            data: {
                todo,
                isCompleted,
            },
            headers: {
                contentType: "application/json",
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        });
        return res;
    } catch (e) {
        return {
            message: e.response.data.message,
            status: e.response.data.statusCode,
        };
    }
};

export const fetchDeleteTodo = async (id) => {
    try {
        const res = await axios({
            url: API_URL + "/todos/" + id,
            method: "delete",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        });
        return res;
    } catch (e) {
        return {
            message: e.response.data.message,
            status: e.response.data.statusCode,
        };
    }
};
