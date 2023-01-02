import aug from "../../res/img/submachinegun/aug.png"
import fortyFive from "../../res/img/submachinegun/45.png"
import bizon from "../../res/img/submachinegun/bizon.png"
import iso from "../../res/img/submachinegun/iso.png"
import mp5 from "../../res/img/submachinegun/mp5.png"
import fenix from "../../res/img/submachinegun/fenix.png"
import mp7 from "../../res/img/submachinegun/mp7.png"
import p90 from "../../res/img/submachinegun/p90.png"
import uzi from "../../res/img/submachinegun/uzi.png"
import GunItem from "../GunItem";


function SubMachineGun() {
    return (
        <div>
            <GunItem
                name={"AUG"}
                source={aug}
                description="Модульное, полностью автоматическое оружие, сконфигурированное для мобильности и ближнего боя."
            />
            <GunItem
                name={"P90"}
                source={p90}
                description="Автоматический пистолет-пулемет буллпап. Уникальный верхний магазинный
				отсек несет достаточно высокоскоростных боеприпасов размером 5,7 х 28 мм."
            />
            <GunItem
                name={"MP5"}
                source={mp5}
                description="Полностью автоматический 9-мм пистолет-пулемет. Идеальный баланс стабильности,
				подвижности и летальности."
            />

            <GunItem
                name={"UZI"}
                source={uzi}
                description="Полностью автоматический пистолет-пулемет с открытым затвором.
				Простой, устойчивый, эффективный."
            />
            <GunItem
                name={"PP19 Bizon"}
                source={bizon}
                description="Хорошо сбалансированный автоматический пистолет-пулемет с винтовым магазином
				большой емкости."
            />
            <GunItem
                name={"MP7"}
                source={mp7}
                description="Компактное по конструкции, это полностью автоматическое оружие
				обладает высокой скорострельностью и низкой отдачей."
            />

            <GunItem
                name={"Striker 45"}
                source={fortyFive}
                description="Мощный пистолет-пулемет с патронником 45 калибра, который будет кромсать на
				больших расстояниях, чем другое оружие в своем классе. Умеренная скорострельность
				позволяет держать ружье под контролем в то время как полностью автоматическое."
            />
            <GunItem
                name={"Fennec"}
                source={fenix}
                description="Агрессивный полный автоматический пистолет-пулемет с маслянистой гладкой отдачей
				и ослепительно быстрой скорострельностью, исключительной для стратегической очистки
				помещения и удержания линии фронта."
            />

            <GunItem
                name={"ISO"}
                source={iso}
                description="Высокоточный 9-мм пистолет-пулемет с высокой скорострельностью. Это легкое и надежное
				огнестрельное оружие предназначено для управления ближним полем боя."
            />


        </div>
    )
}
export default SubMachineGun
