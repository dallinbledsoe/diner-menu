// let alert = window.alert("Welcome to PB&J DALLINS");
// let greeting = window.prompt("Please select the bread you would like from the menu: whole-wheat, white, or multi-grain")
//     class Entree {
//         constructor(entree_type)
//         {this.entree_type = entree_type}
//     }
// if (greeting === whole-grain) {
//     window.alert(greeting + " is a good choice, it costs 10 cents")
//   }

// let pb = window.prompt("would you like crunchy or smooth?")
// if (pb === "crunchy") {
//     window.alert("ooooo " + pb + " the protein option, i like it! it costs 20 cents");
// }
// else window.alert (pb + " is my favorite!! it costs 20 cents")


// let jam = window.prompt("what kind of jam/jelly would you like? strawberry, grape or apricot")
// if (jam != null)
//     window.alert("you selected " + greeting + ' ' + pb + ' ' + jam + " your total is 50 cents")













    let alert = window.alert("Welcome to PB&J DALLINS");
    let greeting = window.prompt("Please select the bread you would like from the menu: whole-wheat, white, or multi-grain")
    if (greeting != null) {
        window.alert(greeting + " is a good choice, it costs 10 cents")
        document.write(" " + greeting + " = .10")
      }
    
    let pb = window.prompt("would you like crunchy or smooth?")
    if (pb === "crunchy") {
        window.alert("ooooo " + pb + " the protein option, i like it! it costs 20 cents");
    }
    else window.alert (pb + " is my favorite!! it costs 20 cents")
    document.write(" " + pb + " = .20")
    
    
    let jam = window.prompt("what kind of jam/jelly would you like? strawberry, grape or apricot")
    if (jam != null)
        window.alert("you selected " + greeting + ' ' + pb + ' ' + jam + " your total is 50 cents")
        document.write(" " + jam + " = .20")