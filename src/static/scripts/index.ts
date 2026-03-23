
enum TitleStates {
    Name,
    RealName,
    LunarPenguin,
}

let nav_title = document.getElementById("title");
let state = TitleStates.Name;


if (nav_title != null) {
    nav_title.addEventListener("mouseover", (event: MouseEvent) => {
        switch (state.valueOf()) {
            case TitleStates.Name:
                state = TitleStates.RealName;
                // @ts-ignore
                nav_title.textContent = "You can call me Sam though :)";
                break;
            case TitleStates.RealName:
                state = TitleStates.LunarPenguin
                // @ts-ignore
                nav_title.innerText = "LunarPenguin"
                break;
            case TitleStates.LunarPenguin:
                state = TitleStates.Name
                // @ts-ignore
                nav_title.innerText = "Samuel Rivero Luna"
                break;


        }


        console.log("ooo hover");
    })

    console.log("HIII");
} else {
    console.log("Title doesnt exist for some reason")
}



