import {useEffect, useState} from "react";
import Warzone from "../../res/img/fon/Warzone.mp4"
import WarzonePoster from "../../res/img/fon/warzone.jpg"
import Warzone1984Poster from "../../res/img/fon/warzone1984.jpg"
import Warzone1984 from "../../res/img/fon/Warzone1984.mp4"
import MainPageItem from "./MainPageItem";

function Main() {
    return (
        <div>
            <MainPageItem
                name={"Верданск"}
                posterSource={WarzonePoster}
                videoLink={Warzone}
                videoSource={Warzone}/>
            <MainPageItem
                name={"Верданск 1984"}
                posterSource={Warzone1984Poster}
                videoLink={Warzone1984}
                videoSource={Warzone1984}/>
        </div>
    )
}

export default Main