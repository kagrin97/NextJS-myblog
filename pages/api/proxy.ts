import axios from "axios";

export default async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("링크의 정보를 가져오는데 실패했습니다.");
  }
};
