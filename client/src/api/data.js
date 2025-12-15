// api/data.js
import axios from "axios";

const LOCAL = "http://localhost:3000/api/cap";

export const submitMedia = async (token, data) => {
  const res = await axios.post(`${LOCAL}/media_publicity_contacts`, { token, ...data });
  return res.data;
};

export const submitVenue = async (token, data) => {
  const res = await axios.post(`${LOCAL}/venue`, { token, ...data });
  return res.data;
};

export const submitUserData = async (token, data) => {
  const res = await axios.post(`${LOCAL}/user_data`, { token, ...data });
  return res.data;
};

export const submitIdea = async (token, data) => {
  const res = await axios.post(`${LOCAL}/ideas/submitIdeas`, { token, ...data });
  return res.data;
};

export const fetchScoreboard = async (token) => {
  const res = await axios.post(`${LOCAL}/scoreboard`, { token });
  return res.data;
};

export const fetchSubmittedData = async (token) => {
  const res = await axios.post("https://masterapi-springfest.vercel.app/api/cap/receiveCASubmittedData", { token });
  return res.data;
};

export const getAllUsers = async (token) => {
  // Fetch all CA users and their leaderboard data
  const res = await axios.post("https://masterapi.springfest.in/api/cap/getAllCAUsers", { token });
  return res.data;
};

export const getLeaderboardData = async (token) => {
  // Get leaderboard with points calculated from tasks
  const res = await axios.post("https://masterapi.springfest.in/api/cap/leaderboard", { token });
  return res.data;
};
