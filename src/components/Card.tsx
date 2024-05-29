type cardData = {
  name: string;
  age?: number;
  type?: "yes" | "no";
};

export default function Card({ name, age, type }: cardData) {
  return (
    <div>
      {name} {age} {type}
    </div>
  );
}
