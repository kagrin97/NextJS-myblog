import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = req.query.url;
    if (typeof url === "string") {
      const response = await axios.get(url);
      res.send(response.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("링크의 정보를 가져오는데 실패했습니다.");
  }
};
