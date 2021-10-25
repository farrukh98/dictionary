import styled from "styled-components";

export const DictionaryWrapper = styled.div`
width: 1100px;
margin: auto;
display: flex;
background-color: yellow;
center{
    margin: 0px 30px auto;
    position: absolute;
    left: 100px;
    padding: 10px;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: bolder;
    width: 1200px;
    color: aqua;
    background-color: darkred;
}
   
    .letter{
        color: red;
        font-weight: bolder;
        font-size: 65px;
    }
`



export const Half2 = styled.div`
width: 400px;
padding: 20px;
background-color: whitesmoke;
color: darkblue;
height: fit-content;
margin: 100px 40px;

    b{
        margin: 3px;
        font-weight: bolder;
    }
    p{
        width: fit-content;
        border-radius: 25px;
        margin: 10px 30px;
        background-color: blueviolet;
    }
    div{
        b{
            margin: 20px auto;
        }
        .main{
            margin: 20px auto;
        }
        .first{
width: fit-content;
padding: 5px 15px 5px 15px;
border-radius: 35px;
background-color: blue;
margin: 100px 8px;
        }
        .second{
width: 80px;
text-align: center;
padding: 10px;
        }
        .third{
           
width: 80px;
margin: -53px 130px;
padding: 10px;
position: absolute;
top: -20px;
background-color: darkgreen;
text-align: center;
        }
        .last{
            font-weight: 600;
            display: inline-block;
            margin: -110px 0px 10px 10px;
        }
    }


`
export const Half = styled.div`
width: 50%;
margin: 100px auto;

.yandex{
    width: 400px;
    padding: 20px;
    background-color: darkblue;
    color: white;
    height: fit-content;
    margin: 100px 40px;
    }
`

export const Textarea = styled.textarea`
width: 100%;
padding: 10px;
`

export const Meaning = styled.div`
margin: 30px auto;
`