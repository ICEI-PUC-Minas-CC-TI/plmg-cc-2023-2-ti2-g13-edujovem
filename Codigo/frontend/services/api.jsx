import axios from "axios";

export const api = axios.create({
   baseURL: "http://localhost:8080",
});

// --------------------- AUTHENTICATION ------------------------------
export const createSession = async (data) => {
   return api.post("/auth/login", data);
};

export const createUserAccount = async (data) => {
   return api.post("/auth/register", data);
};

// --------------------- ADMIN ------------------------------
export const getAllusers = async () => {
   return api.get("/admin/users");
};

export const getUser = async (userId) => {
   return api.get(`/admin/users/${userId}`);
};

// --------------------- USER ------------------------------
export const getAllExpenses = async () => {
    return api.get("expenses/listarExpense");
};

export const addExpenses = async (data) => {
    return api.post("expenses/addExpense", data);
};

export const nextExpense = async () =>{
   return api.post("azure/despesaFutura");
}