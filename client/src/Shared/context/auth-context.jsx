import React from "react";
import { createContext } from "react";

export const AuthContext = createContext({ isLoggedIn: false, userId: null, login: () => {}, logout: () => {}, adminLogin: () => {}, adminLogout: () => {}, isAdmin: false });
