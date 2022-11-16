function getDrinkByProfession(param){
    param = param.toLowerCase()
    switch(param) {
      case "Jabroni".toLowerCase():
        return 'Patron Tequila'
        break
      case "School Counselor".toLowerCase():
        return 'Anything with Alcohol'
        break
      case "Programmer".toLowerCase():
        return  "Hipster Craft Beer"
        break
      case "Bike Gang Member".toLowerCase():
        return  "Moonshine"
        break
      case "Politician".toLowerCase():
        return "Your tax dollars" 
        break
      case  "Rapper".toLowerCase():
        return  "Cristal"  
        break
      default:
        return "Beer" 
    }
}