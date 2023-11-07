import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
        const priceOptions = [
          {
            "id": 1,
            "name": "Single Monthly Membership",
            "price": 39.99,
            "features": [
              "Unlimited access to gym facilities",
              "Use of cardio and strength equipment",
              "Access to locker rooms and showers",
              "Basic fitness assessment"
            ]
          },
          {
            "id": 2,
            "name": "Premium Monthly Membership",
            "price": 59.99,
            "features": [
              "All Single Monthly Membership benefits",
              "Access to group fitness classes",
              "Monthly personal training session",
              "Nutritional consultation"
            ]
          },
          {
            "id": 3,
            "name": "Family Monthly Membership",
            "price": 99.99,
            "features": [
              "All Premium Monthly Membership benefits",
              "Up to 4 additional family members included",
              "Childcare services during workouts",
              "Access to exclusive family-friendly classes"
            ]
          },
          {
            "id": 4,
            "name": "Student Monthly Membership",
            "price": 29.99,
            "features": [
              "Valid student ID required",
              "Access to gym facilities",
              "Discounted personal training sessions",
              "Access to student-specific fitness programs"
            ]
          }
        ]
      
      
    return (
        <div className="m-6">
            <h1 className="text-5xl mb-3">Best Price in Town:</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {
                priceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;