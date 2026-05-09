
    // Using let
    let radius = 5;

    // Re-assigning value is allowed
    radius = 7;

    console.log("Radius using let:", radius);

    // Redeclaration is NOT allowed
    // let radius = 10;   // Error


    // Using var
    var radiusVar = 5;

    // Re-assigning is allowed
    radiusVar = 8;

    // Redeclaration is also allowed
    var radiusVar = 10;

    console.log("Radius using var:", radiusVar);


    // Using const
    const pi = 3.14;

    console.log("Value of pi:", pi);

    // Re-assigning is NOT allowed
    // pi = 3.14159;   // Error


    // Area calculation
    let area = pi * radius * radius;

    console.log("Area of Circle:", area);
