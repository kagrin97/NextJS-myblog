import axios from "axios";

export default async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("링크의 이미지를 가져오는데 실패했습니다.");
  }
};
