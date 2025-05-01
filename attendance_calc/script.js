function calculate() {
    const criteria = parseFloat(document.getElementById("criteria").value);
    const total = parseInt(document.getElementById("total").value);
    const attended = parseInt(document.getElementById("attended").value);
    const result = document.getElementById("result");
  
    if (isNaN(criteria) || isNaN(total) || isNaN(attended) ||
        criteria <= 0 || criteria > 100 || attended < 0 || attended > total) {
      result.textContent = "Please enter valid input values.";
      return;
    }
  
    const requiredRatio = criteria / 100;
  
    if ((attended / total) >= requiredRatio) {
      result.textContent = "You're already meeting the attendance criteria!";
      return;
    }
  
    const x = Math.ceil(((requiredRatio * total) - attended) / (1 - requiredRatio));
  
    result.textContent = `You need to attend the next ${x} class(es) in a row to reach ${criteria}% attendance.`;
  }
  