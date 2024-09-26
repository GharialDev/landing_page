import React from "react";

function CardContainer() {
  const cardsData = [
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Salary_ecw3be.svg",
      title: "Better Salary",
      description:
        "You can have much better contract conditions in Germany than in your home country. Salary: average EUR 3,100 (= USD 3,300), including health insurance, retirement, and unemployment insurance.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_WorkLifeBalance.svg",
      title: "Work-Life Balance",
      description:
        "Germany is known for its strong focus on work-life balance, offering reasonable working hours and plenty of holidays.",
    },
    {
      iconSrc:
        "https://www.medicruiter.com/hubfs/Website%20Files/Icons/Property_1_Opportunities.svg",
      title: "Career Opportunities",
      description:
        "Germany offers numerous career opportunities in the healthcare sector, ensuring job security and professional growth.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <div key={index} className="rounded overflow-hidden bg-blue-100 p-5">
          <div className="px-5 pt-8 pb-6">
            <div className="flex items-center mb-4">
              <div className="mr-5 shrink-0">
                <img
                  loading="lazy"
                  src={card.iconSrc}
                  alt={card.title}
                  width="60"
                  height="60"
                  className="w-14 h-14"
                />
              </div>
              <div className="font-title text-2xl lg:text-xl font-bold">
                {card.title}
              </div>
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
