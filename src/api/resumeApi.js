import axios from "axios";

const BASE_URL = "http://localhost:9000/api/resume";

export async function analyzeResumeApi(payload) {
  const response = await axios.post(`${BASE_URL}/analyze-resume`, payload);
  return response.data;
}

export async function uploadResumeApi(file) {
  const formData = new FormData();
  formData.append("resume", file);

  const response = await axios.post(`${BASE_URL}/upload-resume`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function updateResumeApi(payload) {
  const response = await axios.post(
    `${BASE_URL}/rewrite-resume`,
    payload,
  );
  return response.data;
}
