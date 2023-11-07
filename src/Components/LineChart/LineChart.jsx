import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {

    
    const mathMarkData = [
        {
          id: 1,
          name: "Student 1",
          math_marks: 85,
          physics_marks: 78
        },
        {
          id: 2,
          name: "Student 2",
          math_marks: 76,
          physics_marks: 83
        },
        {
          id: 3,
          name: "Student 3",
          math_marks: 92,
          physics_marks: 90
        },
        {
          id: 4,
          name: "Student 4",
          math_marks: 64,
          physics_marks: 68
        },
        {
          id: 5,
          name: "Student 5",
          math_marks: 78,
          physics_marks: 75
        },
        {
          id: 6,
          name: "Student 6",
          math_marks: 89,
          physics_marks: 87
        },
        {
          id: 7,
          name: "Student 7",
          math_marks: 72,
          physics_marks: 79
        },
        {
          id: 8,
          name: "Student 8",
          math_marks: 95,
          physics_marks: 92
        },
        {
          id: 9,
          name: "Student 9",
          math_marks: 83,
          physics_marks: 81
        },
        {
          id: 10,
          name: "Student 10",
          math_marks: 71,
          physics_marks: 70
        }
      ];
      
      
      
      
    return (
        <div>
            <LChart width={800} height={400} data={mathMarkData}>
                <XAxis dataKey={"name"}/>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='red'></Line>
                <Line dataKey="physics_marks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;