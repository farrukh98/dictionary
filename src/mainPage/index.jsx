import axios from "axios";
import React, { useState } from "react";
import { DictionaryWrapper, Half, Half2, Meaning, Textarea } from "./styles";

function MainPage() {
  const [dictionary, setDictionary] = useState([]);
  const apiKey =
    "dict.1.1.20211024T131619Z.fede89ccd05cf9df.3a37ddfcdf2f7700d38b81f278043723c0cb5b5";

  const translate = (e) => {
    const link = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}a&lang=en-ru&text=${e.target.value}`;
    console.log(link);
    axios
      .get(link)
      .then((res) => {
        console.log(res.data.def);
        setDictionary(res.data.def);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DictionaryWrapper>
      <center>
        <span className="letter">Y</span>andex Dictionary
      </center>
      <Half>
        <Textarea onChange={translate} rows="10"></Textarea>
        <b className="yandex">Created By Yandex</b>
      </Half>
      <Half2>
        {dictionary.map(({ text, pos, ts, tr }, index ) => (
          <div className="main" key={index}>
            <b className="first">{text}</b>

            <Meaning>
              <p className="second">{pos}</p>
              <p className="third">{ts}</p>
            </Meaning>

            <span>
              {tr.map(({ text, pos, gen, fr, syn }, index) => (
                <b className="last">{text}</b>
              ))}
            </span>
          </div>
        ))}
      </Half2>
    </DictionaryWrapper>
  );
}

export default MainPage;
