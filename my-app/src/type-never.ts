// let someValue: never = 0 // Cannot assign any value to it

type Theme = 'light' | 'dark'

function checkTheme(theme: Theme):void{
    if (theme === 'light'){
        console.log('light theme')
        return
    }
    if (theme === 'dark'){
        console.log('dark theme')
        return
    }
    theme // => theme has type never because we've checked for all the possible conditions for theme
}


// E.g 2
enum Color{
    Red,
    Blue
}

function getColorName(color: Color): string{
    switch(color){
        case Color.Red:
            return 'Red'
        case Color.Blue:
            return 'Blue'
        default:
            let unexpectedColor:never = color
            return unexpectedColor // This will take type: never
    }
}

console.log(getColorName(Color.Red))
console.log(getColorName(Color.Blue))