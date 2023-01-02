import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <div className="menu">
            <div className="dropdown">
                <NavLink to="/">
                    <button className="dropbtn">главная</button>
                </NavLink>
            </div>
            <div className="dropdown">
                <button className="dropbtn">карты</button>
                <div class="dropdown-content">
                    <NavLink to="/map/">сетевая</NavLink>
                    <NavLink to="/map-verdansk/">Warzone</NavLink>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">оружие</button>
                <div class="dropdown-content">
                    <NavLink to="/assault-rifle/">штурмовые винтовки</NavLink>
                    <NavLink to="/submachine-gun/">пистолеты-пулеметы</NavLink>
                    <NavLink to="/shotgun/">дробовики</NavLink>
                    <NavLink to="/light-machine-guns/">ручные пулеметы</NavLink>
                    <NavLink to="/infantry-rifles/">пехотные винтовки</NavLink>
                    <NavLink to="/sniper-rifles/">снайперские винтовки</NavLink>
                    <NavLink to="/close-combat/">ближний бой</NavLink>
                    <NavLink to="/pistol/">пистолет</NavLink>
                    <NavLink to="/launchers/">пусковые установки</NavLink>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">снаряжение</button>
                <div class="dropdown-content">
                    <NavLink to="/combat-equipment/">боевое снаряжение</NavLink>
                    <NavLink to="/tactical/">тактическое снаряжение</NavLink>
                    <NavLink to="/perks/">перки</NavLink>
                    <NavLink to="/field-modification/">полевые модификации</NavLink>
                    <NavLink to="/killstreaks/">очки убийств</NavLink>
                    <NavLink to="/camouflage/">камуфляж для оружия</NavLink>
                </div>
            </div>
            <div className="dropdown">
                <NavLink to="/performers">
                    <button className="dropbtn">исполнители</button>
                </NavLink>
            </div>
            <div className="dropdown">

                <NavLink to="/transport">
                    <button className="dropbtn">транспорт</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu