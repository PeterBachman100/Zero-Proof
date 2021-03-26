    /// get the objects that are quanitities in the recipe
    var amounts = document.getElementsByClassName("quantity");

    /// store the quanitites as numbers in an array
    var originalAmounts = new Array(amounts.length);
    for(i = 0; i < amounts.length; i++) {
      originalAmounts[i] = amounts[i].innerHTML;
    }

    /// set quantity multiplier equal to 1
    var multiplier = 1

    /// go through each object, set the objects value equal to the original quantity required multiplied by the desired amount of servings (multiplier)
    function multiply() {
      for(i = 0; i < amounts.length; i++) {
      amounts[i].innerHTML = (originalAmounts[i] * multiplier);
      }
    }
    /// quantity up
    function incrementMultiplier() {
        multiplier++;
        multiply();
    }
    
    /// quantity down
    function decrementMultilpier() {
      if(multiplier === 1) {return}
      multiplier--;
      multiply();
    }
