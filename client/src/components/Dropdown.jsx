import React from "react";
import axios from "axios";

export const Dropdown = () => {
  const [categoryList, setCategoryList] = useState({});
  // const { headers, values } = categoryList;
  const headers = Object.keys(categoryList);
  const values = Object.values(categoryList);
  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, []);
  return <div>Dropdown</div>;
};
